'use strict';

// The page and native FAQ controls work without JavaScript.
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
