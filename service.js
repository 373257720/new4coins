const proxy = require('http-proxy-middleware');
const express = require('express');

let app = express();

app.use(express.static('./'))

// app.all('*', function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With");
//   res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");

//   //跨域请求CORS中的预请求
// //   if (req.method == "OPTIONS") {
// //     res.send(200); //让options请求快速返回
// //   } else {
// //     next();
// //   }
// // });
// // app.use('/walletapi', proxy({
// //   'target': "https://113.52.134.95:8004",
// //   " changeOrigin": true,
// //   // 'ws': true,
// //   "pathRewrite":{
// //     "^/haha":""
// //   }
// });
// app.use('/newlogin', proxy({
//   "target": "http://192.168.1.37:8080",
//   "changeOrigin": true,
//   // 'ws': true,
//   "pathRewrite": {
//     "^/newlogin":""
//   }
// }));
// app.listen(8008, function () {
//   console.log('Server running on httplocalhost8008');
// });
