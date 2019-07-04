class Util {
  Random (sex) {
    var arr = ['的价格', '的时间', '的感受', '的变化']
    var a = ''
    if (sex === 0) {
      a = '问一问她'
    } else {
      a = '问一问他'
    }
    var index = Math.floor((Math.random() * arr.length))
    return a + arr[index]
  }
}
let UtilDs = new Util()
export default UtilDs
