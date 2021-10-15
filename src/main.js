import Vue from 'vue'
import App from './App'
import './assets/styles/index.less'
import img from './assets/img/222.jpg'
var bigImg = document.createElement('img') //创建一个img元素
var oDiv = document.createElement('div')
document.body.appendChild(oDiv)
oDiv.id = 'myDiv'
var mydiv = document.getElementById('oDiv') //获得dom对象
bigImg.width = '200' //200个像素 不用加px
bigImg.src = img //给img元素的src属性赋值
myDiv.appendChild(bigImg) //为dom添加子元素img

console.log('1111111')

let arr = [1, 2, 3, 3, 4, 4, 5, 5]
var aaa = new Set(arr)
console.log([...aaa],)
new Vue({
  render: h => h(App)
}).$mount('#app')

