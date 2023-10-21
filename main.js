const carrodojoao = {
    modelo: "Fiesta",
    fabricante: 'Ford',
    anomodelo: 2020,
    anofabricacao: 2019,
    acelerar: function() {
        console.log('Vruuuum');
    }
}

const carrodamaria = {
    modelo: "Ka",
    fabricante: 'Ford',
    anomodelo: 2021,
    anofabricacao: 2020,
    acelerar: function() {
        console.log('Vruum');
    }
}
// objetos literais //

function Carro(modelo, fabricante, anomodelo, anofabricacao) {
    this.modelo = modelo;
    this.fabricante= fabricante;
    this.anomodelo= anomodelo;
    this.anofabricacao= anofabricacao;
    this.acelerar= function (){
        console.log("acelerar");
    }
}

const carrodojoao2 = new Carro('Fiesta', 'ford', 2020, 2019);
const carrodamaria2 = new Carro('Ka', 'ford', 2021, 2010); // função contrutora //


console.log(carrodojoao2);
console.log(carrodamaria2);

const nome = "gian"
const idade = 30
const maioridade = true
const conhecimentos = ["html", "css", "javascript"]

const pessoa = {
    nome:nome,
    idade:idade,
    maioridade:maioridade,
    conhecimentos:conhecimentos,
}

function exibeatributo (nomeatributo) {
    console.log(pessoa[nomeatributo])
}

exibeatributo('nome');

pessoa.sobrenome = undefined

Object.freeze(pessoa)

pessoa.nome = 'joao';

if (pessoa['sobrenome']) {
    console.log ('soberndmdo')
}

if ('sobrenome' in pessoa) {
    console.log('saebefreews');
}

function pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz olá");
    }
}

function funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    let _salario = salario;

    this.getSalario = function() {
        return _salario;
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }

    this.dizCargo = function() {
        console.log(this.cargo);
    }

    pessoa.call(this, nome);
}

function estagiario(nome) {
    funcionario.call(this, nome, "estagiario", 2000);
}

function gerente(nome) {
    funcionario.call(this, nome, "gerente", 10000);

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario);
    }
}

const funcionario1 = new funcionario("Maria", "estuda", 5000);
const funcionario2 = new estagiario("Pedro");
const funcionario3 = new gerente("Paula");

funcionario1.aumento();
console.log(funcionario1.getSalario());

funcionario2.aumento();
console.log(funcionario2.getSalario());

funcionario3.aumento();
console.log(funcionario3.getSalario());
