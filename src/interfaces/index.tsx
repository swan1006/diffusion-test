export interface iExchangeForm {
  isMinBtn?: boolean;
  isBuy?: boolean;
  tokenList?: Array<iTokenListProps> | undefined;
  amount: number;
  token: iTokenListProps;
  onChangeAmount: Function;
  setToken: Function;
  isEditable?: boolean;
  isload?: boolean;
}

export interface iPercent {
  percent: string;
}

export interface iSelectedDropdownProps {
  img: string;
  name: string;
}

export interface iTokenListProps {
  address: string;
  decimals: number;
  logoURI: string;
  name: string;
  symbol: string;
  tags: Array<string>;
}

export interface iFusion {
  buyToken: iTokenListProps;
  sellToken: iTokenListProps;
}

export interface iTokenValue {
  fromTokenAddress: string;
  toTokenAddress: string;
  decimals: number;
}
