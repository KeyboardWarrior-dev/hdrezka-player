// ==UserScript==
// @name         hdrezka player
// @namespace    http://top-kek.ml/
// @version      0.1.0
// @description  try to take over the world!
// @author       Chilli
// @match        https://rezka.ag/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
    div.b-content__columns {
        padding-right: 0;
    }
    
    div#cdnplayer-container, 
    .div#cdnplayer {
        width: 100% !important;
        height: auto !important;
        aspect-ratio: 16 / 9 !important;
    }
`);

(function () {
    'use strict';

})();