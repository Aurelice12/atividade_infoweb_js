function inverter_num(num){
  return parseInt(num.toString().split('').reverse().join(''))
}

let num1 = 12356

console.log('Número invertido:', inverter_num(num1))
