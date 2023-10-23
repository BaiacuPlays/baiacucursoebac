class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    dizOi() {
        console.log(this.nome + " diz olá");
    }
}

class Funcionario extends Pessoa {
    constructor(nome, cargo, salario) {
        super(nome);
        this.cargo = cargo;
        this._salario = salario;
    }

    get salario() {
        return this._salario;
    }

    set salario(valor) {
        if (typeof valor === 'number') {
            this._salario = valor;
        }
    }

    aumento() {
        this._salario *= 1.1;
    }

    dizCargo() {
        console.log(this.cargo);
    }
}

class Estagiario extends Funcionario {
    constructor(nome) {
        super(nome, "estagiario", 2000);
    }
}

class Gerente extends Funcionario {
    constructor(nome) {
        super(nome, "gerente", 10000);
    }

    aumento() {
        this._salario *= 1.15;
    }
}

const funcionario1 = new Funcionario("Maria", "estuda", 5000);
const funcionario2 = new Estagiario("Pedro");
const funcionario3 = new Gerente("Paula");

funcionario1.aumento();
console.log(funcionario1.salario);

funcionario2.aumento();
console.log(funcionario2.salario);

funcionario3.aumento();
console.log(funcionario3.salario);
