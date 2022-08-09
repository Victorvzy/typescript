// Resposta 1
const funcionario = {
  codigo: 44,
  nome: 'Victor'
};

// Resposta 2
const funcionario2: {codigo: number, nome: string} = {
  codigo: 44,
  nome: 'Victor'
}

// Respostas 3 e 4
interface Funcionario {  // interfaces https://blog.logrocket.com/types-vs-interfaces-in-typescript/
  codigo: number,
  nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 44;
funcionarioObj.nome = 'Victor';

const funcionarioObj2: Funcionario = {
  codigo: 44,
  nome: 'Victor'
}