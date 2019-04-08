var Perfil = /** @class */ (function () {
    function Perfil(atributo, valor, status, acao) {
        this.atributo = atributo;
        this.valor = valor;
        this.status = status;
        this.acao = acao;
    }
    return Perfil;
}());
export { Perfil };
export var perfilLista = [];
perfilLista.push(new Perfil('CERTIDAO DE QUITAÇÃO ELEITORAL', '', 'Não preenchido', 'preencher'));
perfilLista.push(new Perfil('COMPROVANTE DE RESIDENCIA', '', 'Não preenchido', 'preencher'));
perfilLista.push(new Perfil('COMPROVANTE DE VANIÇÃO', '', 'Não preenchido', 'preencher'));
perfilLista.push(new Perfil('NUMERO DO TÍTULO DE ELEITOR', '123', 'Preenchido', 'editar'));
//# sourceMappingURL=perfil.js.map