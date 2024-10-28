let alunos = [
  ["Ana", [70, 90, 100]],
  ["Carlos", [70, 88, 60]],
  ["João", [32, 60, 78]],
  ["Maria", [85, 90, 95]],
  ["José", [45, 100, 60]]
]

for (let i =1; i<=alunos.length; i+=1){
  let nome = alunos[i][0]
  let notas = alunos[i][1]
  let media = notas.reduce((a,b) => a + b) / notas.length
  
  if(media >= 70){
    console.log('Aluno:', nome ,', Média:', media ,'Aprovado')
  }

  else{
    console.log('Aluno:', nome ,', Média:', media ,'Reprovado')
  }
}
