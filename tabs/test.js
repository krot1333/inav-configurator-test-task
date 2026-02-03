'use strict';

const path = require('path');
const { GUI, TABS } = require('./../js/gui');
const i18n = require('./../js/localization');

const test = {};
test.initialize = function (callback) {

    if (GUI.active_tab != 'test') {
        GUI.active_tab = 'test';
    }
    GUI.load(path.join(__dirname, "test.html"), function () {
        i18n.localize();
        GUI.content_ready(callback);
    });

};

test.cleanup = function (callback) {
    if (callback) callback();
};

TABS.test = test;