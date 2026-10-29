DOLAN & CO WEBSITE
==================

The folder dolan-and-co-website is the finished site. It has no build step
and no dependencies. Every page is its own HTML file.

PAGES
  index.html              Home
  work.html               Work
  herotel-business.html   Case study: Herotel Business
  hid-global.html         Case study: HID Global
  capabilities.html       Capabilities
  about.html              About
  contact.html            Contact (with the working form)
  404.html                Shown when a page does not exist

SHARED FILES
  tokens.css   Colours, type and spacing from the Dolan & Co design system
  bundle.css   Component styles from the design system
  site.css     Page layout
  site.js      External links, copy email button and the contact form
  fonts/       Bricolage Grotesque, Figtree and Instrument Serif
  images/      Your portrait and all the campaign work


UPDATE THE LIVE SITE (zoedolan22/dolanco)
  1. Unzip this package on your computer.
  2. Open github.com/zoedolan22/dolanco.
  3. Choose Add file, then Upload files.
  4. Drag the dolan-and-co-website folder into the page. GitHub replaces
     the files that have the same names.
  5. Commit the changes.
  6. The deploy workflow starts on its own. It takes about 30 seconds.
     Watch it under the Actions tab. The site is at
     zoedolan22.github.io/dolanco/

Keep README.txt out of the upload. It stays on your computer.


THE CONTACT FORM
The form sends to zoedolan22@gmail.com through FormSubmit (formsubmit.co).
The first time anyone sends a message, FormSubmit emails you a one time
activation link. Open that email and confirm it. Messages after that
arrive in your inbox with the sender's email set as the reply address.

If a message fails to send, the page shows your email address so the
visitor can write to you directly.

To change where messages go, open contact.html and site.js, and replace
zoedolan22@gmail.com in the form action and the error message.


IF THE SITE MOVES TO ITS OWN DOMAIN
404.html uses links that start with /dolanco/ because the site lives at
zoedolan22.github.io/dolanco/. On a domain of its own, open 404.html in a
text editor and replace every /dolanco/ with a single / and save.


CHANGING TEXT
Each page is plain HTML. Open a file in any text editor, change the
words between the tags and save. Keep the tags themselves as they are.
