export interface Locatario {
    id: number,
    nome: string,
    documento: string,
    residencial : string,
    comercial : string,
    celular : string,
    email : string,
    rua : string,
    numero : string,
    bairro : string,
    cidade : string,
    uf : string,
    cep : string,
    aluguel : number,
    dataInicio : Date,
    dataFim : Date,
    dataVencimento : Date,
    descricao : string,
    inadimplente : Boolean,
    inadimplenteString : string,
    loja : number
}