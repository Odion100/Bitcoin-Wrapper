const { App } = require("sht-tasks");
const os = require("os");
const bitcoind = require("bitcoind-rpc");
const route = "rpc";
const port = 5300;
const host = "159.223.150.143";

console.log(os.hostname(), "test");
App.ServerModule("BC", function () {
  const BC = this;
  BC.test = (data, cb) => {
    console.log(data);
    data.testPassed = true;
    cb(null, data);
  };
});

App.startService({ route, port, host });
