function palavra_inclusa(palavra, frase){
  if(frase.includes(palavra)){
    return console.log('A palavra está na frase')
  }
  else{
    return console.log('A palavra não está na frase')
  }
}

console.log(palavra_inclusa('definitivamente', 'Isso é definitivamente uma frase'))
