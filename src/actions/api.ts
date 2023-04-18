import axios from "axios";
import { iTokenListProps } from "../interfaces";

export const  getToken = async (): Promise<iTokenListProps[]> => {
  const result = await axios.get("https://api.1inch.io/v5.0/1/tokens");
  return Object.values(result.data.tokens);
};

export const getTokenValue = async (fromTokenAddress: string, toTokenAddress: string, amount: number) => {
  const result = await axios.get(`https://api.1inch.io/v5.0/1/quote?fromTokenAddress=${fromTokenAddress}&toTokenAddress=${toTokenAddress}&amount=${amount}`)
  return result.data
}
