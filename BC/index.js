const { App } = require("sht-tasks");
const os = require("os");
const bitcoind = require("bitcoind-rpc");
const route = "rpc";
const port = 5300;
const host = "local";

console.log(os.hostname());
App.ServerModule("BC", function () {});

App.startService();
