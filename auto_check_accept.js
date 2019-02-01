// ==UserScript==
// @name         Auto Check Accept on Steam
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically add games to your library when clicking a register link for steam.
// @author       Brent Rogers
// @match        https://store.steampowered.com/account/registerkey*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    // maybe the elements are already on the page
    checkThem([].slice.call(document.querySelectorAll('input[type="checkbox"]')));

    document.querySelector('#register_btn').click()

    function checkThem(nodes) {
        nodes.forEach(function(n) { n.checked = true });
    }

})();
