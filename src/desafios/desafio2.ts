enum Trabalho {
  Desenvolvedor,
  Analista,
  Advogado
}

type Humano = {
  nome: string,
  idade: number,
  profissao: Trabalho
}

let pessoa1: Humano = {
  nome: 'Victor',
  idade: 22,
  profissao: Trabalho.Desenvolvedor
};

let pessoa2: Humano = {
  nome: 'Felipe',
  idade: 19,
  profissao: Trabalho.Analista
};

let pessoa3: Humano = {
  nome: 'Mario',
  idade: 36,
  profissao: Trabalho.Advogado
};

let pessoa4: Humano = {
  nome: "Paulo",
  idade: 26,
  profissao: Trabalho.Desenvolvedor
}