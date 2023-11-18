"use strict";

var alunos = [{
  nome: 'João',
  nota: 7
}, {
  nome: 'Maria',
  nota: 5
}, {
  nome: 'Pedro',
  nota: 8
}, {
  nome: 'Ana',
  nota: 4
}, {
  nome: 'Carlos',
  nota: 6
}];
var filtrarAlunos = function filtrarAlunos(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
};
var alunosAprovados = filtrarAlunos(alunos);
console.log(alunosAprovados);