// ==UserScript==
// @name         hdrezka player
// @namespace    http://top-kek.ml/
// @version      0.1.4
// @description  try to take over the world!
// @author       Chilli
// @match        https://rezka.ag/*
// @match        https://hdrezka.tv/*
// @match        https://standby-rezka.tv/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
    li.b-translator__item {
        min-width: 232.7px !important;
    }

    li.b-simple_season__item {
        min-width: 69.1px !important;
    }

    li.b-simple_episode__item {
        min-width: 69.1px !important;
    }

    div.b-content__columns {
        padding-right: 0;
    }

    div[id^="cdnplayer"] {
        width: 100% !important;
        height: auto !important;
        aspect-ratio: 16 / 9 !important;
    }

    pjsdiv:has(> pjsdiv > pjsdiv > button#pjs_cast_button_cdnplayer) {
        top: 20px !important;
    }
`);

(function () {
    'use strict';

})();