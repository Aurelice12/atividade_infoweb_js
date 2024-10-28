function max_min(lista){
  let maior = Math.max(...lista)
  let menor = Math.min(...lista)

  return{
    maior: maior,
    menor: menor
  }
}

let lista = [10, 5, 3, 8, 2, 20, 15, 6, 9, 12]

console.log(max_min(lista))
