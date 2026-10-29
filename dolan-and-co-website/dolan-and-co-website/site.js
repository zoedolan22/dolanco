/* Dolan & Co website, hosted version: external links, copy button and contact form. */
(function () {
  var doc = document;

  /* External links open in a new tab */
  Array.prototype.forEach.call(doc.querySelectorAll('a[href^="http"]'), function (a) {
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  });

  /* Copy the email address */
  doc.addEventListener('click', function (e) {
    var btn = e.target && e.target.closest ? e.target.closest('.site-copy') : null;
    if (!btn) return;
    var emailEl = doc.getElementById('site-email');
    var status = doc.getElementById('site-status');
    var text = emailEl ? emailEl.textContent.trim() : '';
    if (!btn.getAttribute('data-label')) btn.setAttribute('data-label', btn.textContent);
    function say(msg, label) {
      if (status) status.textContent = msg;
      btn.textContent = label;
      window.setTimeout(function () { btn.textContent = btn.getAttribute('data-label'); if (status) status.textContent = ''; }, 2400);
    }
    function fallback() {
      if (emailEl && window.getSelection && doc.createRange) {
        var range = doc.createRange(); range.selectNodeContents(emailEl);
        var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(range);
      }
      say('Press Control C, or Command C on a Mac, to copy.', 'Press Ctrl C');
    }
    try {
      navigator.clipboard.writeText(text).then(function () { say('Email address copied.', 'Copied'); }, fallback);
    } catch (err) { fallback(); }
  });

  /* Contact form: sends through FormSubmit without leaving the page */
  var form = doc.getElementById('contact-form');
  if (form) {
    var ok = doc.getElementById('form-ok');
    var err = doc.getElementById('form-error');
    var send = form.querySelector('.site-send');

    Array.prototype.forEach.call(form.querySelectorAll('input, textarea'), function (el) {
      el.addEventListener('invalid', function () {
        if (el.validity.valueMissing) el.setCustomValidity('I need this one.');
        else if (el.validity.typeMismatch) el.setCustomValidity('That email address is missing an @.');
      });
      el.addEventListener('input', function () { el.setCustomValidity(''); });
    });

    form.addEventListener('submit', function (e) {
      if (!window.fetch || !window.FormData) return;
      e.preventDefault();
      ok.hidden = true; err.hidden = true;
      var label = send.firstChild.textContent;
      send.disabled = true;
      send.firstChild.textContent = 'One moment.';
      fetch(form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/'), {
        method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' }
      }).then(function (res) {
        return res.json().then(function (data) { return { ok: res.ok, data: data }; });
      }).then(function (r) {
        if (!r.ok || String(r.data.success) !== 'true') throw new Error('not sent');
        form.reset();
        ok.hidden = false;
      }).catch(function () {
        err.textContent = 'Check this: that did not send. Email me at zoedolan22@gmail.com instead.';
        err.hidden = false;
      }).then(function () {
        send.disabled = false;
        send.firstChild.textContent = label;
      });
    });
  }
})();
