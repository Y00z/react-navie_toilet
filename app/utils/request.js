/**
 * Created by Yooz on 2017/4/17.
 */

'use strict'

var queryString = require('query-string')
var _ = require('lodash')
var conf = require('./conf')
var request = {}

request.get = function (url, params) {
    if (params) {
        url += '?' + queryString.stringify(params)
    }
    return fetch(url)
        .then((response) => response.json())
}

request.post = function (url, body) {
    var options = _.extend(conf.header, {
        body: JSON.stringify(body)
    });
    return fetch(url, options)
        .then(response => response.json())
}

module.exports = request;