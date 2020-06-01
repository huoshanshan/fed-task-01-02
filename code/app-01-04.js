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
let names = [
    'Ferrari FF',
    'Spyker C12 Zagato',
    'Jaguar XKR-S',
    'Aston Martin One-77',
    'Pagani'
  ]


// 使用flowRight写一个sanitizeNames()函数，返回一个下划线连接的小写字符串，把数组中的name转换为这种形式：例如：sanitizeNames(["Hello World"]) => ["hello_world"]
fp.toLower()
let _underscore = fp.replace(/\W+/g, "_")
let getName = cars => fp.map(car => car.name,cars)
let split = str => fp.split(",",str)
let replace = arrs => fp.map(arr=>_underscore(arr),arrs)

let sanitizeNames = fp.flowRight(replace,split,fp.toLower,getName)
console.log(sanitizeNames(cars))