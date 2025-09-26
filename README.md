Js_clock

A simple, lightweight JavaScript clock built to practice and improve core front-end basics (HTML, CSS, and JavaScript).

Project goal: learn and demonstrate how to build a working analog/digital clock using plain JavaScript and DOM manipulation.

Demo-
Open index.html in your browser to see the clock in action.

File Structure-
index.html — HTML structure for the clock and UI.
style.css — Styles to position and design the clock.
script.js — JavaScript that calculates the time, updates the DOM, and animates the clock hands (or updates the digital display).

Features-
Real-time clock using JavaScript Date object.
Smooth updates / animation for clock hands (if implemented in script.js).
Clean, minimal CSS styling for easy customization.
Great starter project for practicing DOM selection, time calculations, and CSS transforms.

How it works-
script.js reads the current time from new Date().
It converts hours/minutes/seconds to angles (for analog hands) or to a formatted string (for digital display).
It updates the DOM at an interval (usually setInterval or requestAnimationFrame) to show the current time.
style.css uses transforms (e.g., transform: rotate(...)) and layout rules to place and animate the clock hands.

Customize-
You can easily tweak or extend the project:
Change colors, sizes, fonts in style.css.
Add AM/PM or 24-hour toggle in script.js.
Add a date display (day/month/year).
Add themes (light/dark) and a settings panel.
Make the clock responsive for small screens.

Development & contributions-
This project was made to practice fundamentals — contributions are welcome but keep them simple and educational.