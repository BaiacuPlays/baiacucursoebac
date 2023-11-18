const alunos = [
    { nome: 'João', nota: 7 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'Ana', nota: 4 },
    { nome: 'Carlos', nota: 6 },
  ];
  
    const filtrarAlunos = (alunos) => alunos.filter(aluno => aluno.nota >= 6);
  
  const alunosAprovados = filtrarAlunos(alunos);
  console.log(alunosAprovados);