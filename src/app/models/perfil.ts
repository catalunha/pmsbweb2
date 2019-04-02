export class Perfil {
    constructor(
        public atributo: string,
        public valor: string,
        public status: string,
        public acao: string) { }
}

export var perfilLista: Perfil[] = []

perfilLista.push(new Perfil('CERTIDAO DE QUITAÇÃO ELEITORAL','','Não preenchido','preencher'))
perfilLista.push(new Perfil('COMPROVANTE DE RESIDENCIA','','Não preenchido','preencher'))
perfilLista.push(new Perfil('COMPROVANTE DE VANIÇÃO','','Não preenchido','preencher' ))
perfilLista.push(new Perfil('NUMERO DO TÍTULO DE ELEITOR','123','Preenchido','editar'))