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



// 使用fp.flowRight()、fp.porp()和fp.first()获取第一个car的name

let firstCar = arr => fp.first(arr)
let firstCarName = firstData => fp.prop("name", firstData)

let fcn = fp.flowRight(firstCarName, firstCar)
console.log(fcn(cars))
