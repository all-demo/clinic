const http = require("http");
const data = {};
let key = 0;
const resData = () => {
  data[key++] = Math.random() * 100;
  return JSON.stringify(data);
};
http
  .createServer((req, res) => {
    const data = resData();
    res.end(data);
  })
  .listen(3000, () => {
    console.log("服务启动成功");
  });
