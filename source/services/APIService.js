/**
 * author: Jeffrey Lanters
 * API Service. This script has to be cleaned up!
 * You can import GET, POST, PUT and DELETE as methods
 * to use in other services.
 */

import React from 'react';
import 'whatwg-fetch';

let baseUrl = '...';

function createPromise(status, data, useReject = false) {
    return new Promise((resolve, reject) => {
        if (useReject === true) {
            reject({
                status: status,
                data: data
            });
        } else {
            resolve({
                status: status,
                data: data
            });
        }
    });
}

module.exports.GET = function (query) {
    let status = 400;

    return fetch(baseUrl + query, {
        method: 'GET',
        headers: {
            'Bearer': '...',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        status = response.status;
        if (response.status >= 400) {
            return createPromise(response.status, null, true);
        }

        return response.json();
    }).then((responseJson) => {
        return createPromise(status, responseJson, false);
    });
}

module.exports.POST = function (query, data) {
    let status = 400;

    return fetch(baseUrl + query, {
        method: 'POST',
        headers: {
            'Bearer': '...',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((response) => {
        status = response.status;
        if (response.status >= 400) {
            return createPromise(response.status, null, true);
        }
        return response.json();
    }).then((responseJson) => {
        return createPromise(status, responseJson, false);
    });
}

module.exports.PUT = function (query, data) {
    let status = 400;

    return fetch(baseUrl + query, {
        method: 'PUT',
        headers: {
            'Bearer': '...',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((response) => {
        status = response.status;
        if (response.status >= 400) {
            return createPromise(response.status, null, true);
        }

        return response.json();
    }).then((responseJson) => {
        return createPromise(status, responseJson, false);
    });
}

module.exports.DELETE = function (query) {
    let status = 400;

    return fetch(baseUrl + query, {
        method: 'DELETE',
        headers: {
            'Bearer': '...',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        status = response.status;
        if (response.status >= 400) {
            return createPromise(response.status, null, true);
        }

        return response.json();
    }).then((responseJson) => {
        return createPromise(status, responseJson, false);
    });
}