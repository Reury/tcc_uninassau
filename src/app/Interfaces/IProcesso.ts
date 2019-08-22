export interface IProcesso {
    processo_id?: number;
    cd_cliente?: number;
    processo?: string;
    polo_ativo?: string;
    polo_passivo?: string;
    valor?: number;
    parcelado?: number;
    parcelas?: number;
    vencimento?: Date;
    status?: string;
    tipo?: string;
    multa?: number;
    desconto?: number;
    isShowMore?: boolean;
}
