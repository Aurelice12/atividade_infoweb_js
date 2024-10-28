function maior_palavra(frase) {
  let palavras = frase.split(' ')
  let maior = ''

  for (let palavra of palavras) {
      if (palavra.length > maior.length) {
          maior = palavra
      }
  }
  return maior
}

const frase_maior = 'Isso é definitivamente uma frase'
const maior = maior_palavra(frase_maior)
console.log(maior)
