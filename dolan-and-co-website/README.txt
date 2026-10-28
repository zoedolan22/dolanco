DOLAN & CO WEBSITE
==================

This folder is a finished static website. It has no build step and no
dependencies. Every page is its own HTML file.

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


PUT IT ON GITHUB PAGES
  1. Unzip this package on your computer.
  2. Open your zoedolan22.github.io repository on github.com.
  3. Choose Add file, then Upload files.
  4. Drag in everything inside the unzipped folder: the HTML files,
     the three CSS files, site.js, and the fonts and images folders.
     Upload the contents, not the zip itself.
  5. If you want to clear out the old site first, delete the old files
     from the repository, then upload these.
  6. Commit the changes. GitHub Pages publishes within a minute or two.

The 404.html page uses links that start at the root of the site, so it
works on zoedolan22.github.io and on a custom domain. If you ever host
the site inside a sub folder, those links in 404.html need that folder
name added.


THE CONTACT FORM
The form sends to zoedolan22@gmail.com through FormSubmit (formsubmit.co).
The first time anyone sends a message, FormSubmit emails you a one time
activation link. Open that email and confirm it. Messages after that
arrive in your inbox with the sender's email set as the reply address.

If a message fails to send, the page shows your email address so the
visitor can write to you directly.

To change where messages go, open contact.html and site.js, and replace
zoedolan22@gmail.com in the form action and the error message.


CHANGING TEXT
Each page is plain HTML. Open a file in any text editor, change the
words between the tags and save. Keep the tags themselves as they are.
