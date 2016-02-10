/* global Trello:false, moment:false, faker:false */
(function() {
    //'use strict';

    if (typeof Trello == 'undefined') Trello = 'Very simple stub. Kids, do not do things like that'; // jshint ignore:line

    angular
        .module('app.core')
        .constant('moment', moment)
        .constant('Trello', Trello) // KEEP AN EYE! Trello is exposed by client.js from index file
        .constant('faker', faker)
        .constant('d3', d3) // jshint ignore:line
        .constant('apiUrl', apiUrl());

    function apiUrl() {
        return {
            host: 'http://localhost:3000',
            defects: '/api/v1/Defects',
            runs: '/api/v1/Runs',
            projects: '/api/v1/Projects',
            suites: '/api/v1/Suites',
            users: '/api/v1/Users/:id',
            suiteTests: '/api/v1/suitetests',
            runTests: '/api/v1/runTests'
        };
    }
})();
