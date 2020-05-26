export interface Locatario{
    id : number,
    nome : string,
    documento : string,
    contato : string,
    endereco : string,
    contrato : string
}

export interface Contato{
    id : number
    residencial : string,
    comercial : string,
    celular : string,
    email : string,
    fax : string
}

export interface Endereco{
    id : number
    rua : string,
    numero : string,
    bairro : string,
    cidade : string,
    uf : string,
    cep : string
}

export interface Contrato{
    id : number,
    aluguel : number,
    dataInicio : Date,
    dataFim : Date,
    dataVencimento : Date,
    descricao : string,
    inadimplente : Boolean
}