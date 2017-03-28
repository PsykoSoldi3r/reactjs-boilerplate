/**
 * author: Jeffrey Lanters
 * User Service. An example service, it will be consturcted
 * in the app component when the application will be mounted
 * and will be accessible from the whole app.
 */

import React from 'react';
import { GET } from './APIService';

export class UserService {
    constructor() {
        this.userName = "Jeffrey";
    }
    getProfile () {
        return GET('/profile');
    }
}