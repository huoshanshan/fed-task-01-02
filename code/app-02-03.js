// 实现一个函数ex3，使用safeProp和fp.first找到user的名字的首字母
const fp = require('lodash/fp')
const { Maybe, Container } = require('./support.js')
let safeProp = fp.curry(function (x, o) {
    return Maybe.of(o[x])
})

let user = { id: 2, name: "Albert" }
let ex3 = safeProp("name", user)
    .map(x => fp.first(x))
console.log(ex3,ex3._value)


