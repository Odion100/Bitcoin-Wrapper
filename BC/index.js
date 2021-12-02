const { Service } = require("sht-tasks");
const route = "rpc";
const port = 5300;
const host = "159.223.150.143";

var RpcClient = require("bitcoind-rpc");

var config = {
  protocol: "http",
  user: "odiferusmaximus",
  pass: "OD+BusiIs100mil",
  host: "127.0.0.1",
  port: "8332",
};
const rpc = new RpcClient(config);

Service.ServerModule("Bitcoin", Object.getPrototypeOf(rpc));
Service.startService({ route, port, host });
