let soma_pares = 0
let soma_impares = 0

for (let i =0; i<=99; i+=1){
  if(i%2 == 0){
    soma_pares += i
  } 
  else{
    soma_impares += i
  }
}

console.log('A soma dos números pares é: ', soma_pares)
console.log('A soma dos números ímpares é: ', soma_impares)
