// ==UserScript==
// @name         Auto Check Accept on Steam
// @namespace    https://github.com/abnormalend
// @license      MIT
// @version      0.2
// @description  Automatically add games to your library when clicking a register link for steam.
// @author       Brent Rogers
// @match        https://store.steampowered.com/account/registerkey*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/abnormalend/auto_check_accept/master/auto_check_accept.js
// @downloadURL  https://raw.githubusercontent.com/abnormalend/auto_check_accept/master/auto_check_accept.js
// ==/UserScript==

(function() {
    'use strict';
    checkThem([].slice.call(document.querySelectorAll('input[type="checkbox"]')));
    document.querySelector('#register_btn').click()
    function checkThem(nodes) {
        nodes.forEach(function(n) { n.checked = true });
    }
})();
