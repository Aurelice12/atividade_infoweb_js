let nome = 'Maria Aurelice Moreira'
let partes = nome.split('');

let primeiro_nome = partes[0];

let iniciais = partes.slice(1).map(part => part.charAt(0) + '.').join('');

console.log(iniciais, primeiro_nome);
