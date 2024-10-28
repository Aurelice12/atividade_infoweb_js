function contar_letras(frase){
  let vogais = 'aeiouAEIOU'
  let num_vogais = 0
  let num_consoantes = 0

  for (let i =0; i<=frase.length; i+=1){
    if (vogais.includes(i)){
      num_vogais += 1
    }
    else{
      num_consoantes += 1
    }
  }
  return {
    vogais: num_vogais,
    consoantes: num_consoantes
  }
}

console.log(contar_letras('Isso é definitivamente uma frase'))
