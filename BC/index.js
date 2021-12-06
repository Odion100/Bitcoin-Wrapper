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

const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(rpc));
const rpcModule = methods.reduce((mod, method) => {
  mod[method] = () => rpc[method].bind(rpc);

  return mod;
}, {});

Service.ServerModule("Bitcoin", rpcModule);
Service.startService({ route, port, host });
rpc.getRawMemPool(function (err, ret) {
  if (err) {
    console.error(err);
  } else console.log(ret);
});
