// Generated by BUCKLESCRIPT VERSION 1.0.1 , PLEASE EDIT WITH CARE
'use strict';

var Express = require("express");

var __dirname = (__dirname);

var app = Express();

app.get("/", function (_, res) {
      return res.json({
                  root: __dirname
                });
    });

exports.__dirname = __dirname;
exports.app       = app;
/* __dirname Not a pure module */