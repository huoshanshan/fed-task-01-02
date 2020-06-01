//基于以下代码完成下面的四个练习
const fp = require('lodash/fp')


// 数据
// horsepower 马力，dollar_value 价格，in_stock 库存

const cars = [{
    name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true
},{
    name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false
},{
    name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false
},{
    name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true
},{
    name: "Pagani", horsepower: 700, dollar_value: 1300000, in_stock: false
}]


// 使用帮助函数_average重构averageDollarValue，使用函数组合的方式实现

let _average = function(xs){
    return fp.reduce(fp.add, 0, xs) / xs.length
}

let averageDollarValue = function(cars){
    let dollar_value = fp.map(function(car){
        return car.dollar_value
    },cars)
    return _average(dollar_value)
}

//改造后
 let dollar_value = cars => fp.map(car=> car.dollar_value,cars)
 let adv = fp.flowRight(_average, dollar_value)

console.log(averageDollarValue(cars))
console.log(adv(cars))
