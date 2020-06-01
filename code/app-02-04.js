// 使用Maybe重写ex4，不要有if语句
const fp = require('lodash/fp')
const { Maybe, Container } = require('./support.js')

let oldEx4 = function(n){
    if (n) {
        return parseInt(n)
    }
}

let  ex4 = Maybe.of("2").map(
    x => parseInt(x)
)
console.log(ex4,ex4._value)


