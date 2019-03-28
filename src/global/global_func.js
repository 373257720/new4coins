// import { _ } from "core-js";

var global_func = {}
// 1.路由传参的函数
global_func.goto = function (name, id) {
  let obj = {
    name
  };
  if (id) {
    obj.params = {
      id
    };
  }
  this.$router.push(obj);
}
// global_func.goto = function (){
//       console.log(111)
// }
export default global_func
