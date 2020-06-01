// 使用fp.add(x,y)和fp.map(f,x)创建一个能让functor里的值增加的函数exl
const fp = require('lodash/fp')
const { Maybe, Container } = require('./support.js')
let maybe = Maybe.of([5,6,1])

let exl = maybe
.map(x=> fp.map(nub=> fp.add(nub,1),x))
console.log(exl,exl._value)


