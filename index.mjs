"use strict";

import _ from "lodash"
export default class Sable {

  cookie() { return document.cookie; }

  cookies() {
    let result = {}
    _.each( this.cookie().split(";"), (c) => {
      let arr = c.trim().split("=");
      result[arr[0]] =  arr[1];
    });
    return result;
  }

  set(key, value, options = {}) {
    let token = `${key}=${value}`;
    options["max-age"] = options["max-age"] || 31536000;
    options["path"]    = options["path"]    || "/";
    _.each(options, (v,k) => {
      token = `${token}; ${k}=${v}`;
    });
    document.cookie = token;
    return this;
  }

  get(key) { return this.cookies()[key]; }

}
