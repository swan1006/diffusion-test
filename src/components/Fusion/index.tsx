import React, { useEffect, useState } from "react";
import { FusionContainer, TokenContainer, ValueContainer } from "./style";

import { MdInfo } from "react-icons/md";
import { GoChevronDown } from "react-icons/go";
import { iFusion } from "../../interfaces";
import { getTokenValue } from "../../actions/api";
import Loading from "../Loading";

const Fusion = ({ buyToken, sellToken }: iFusion) => {
  const [result, setResult] = useState<any>();
  const [isLoading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const fromTokenAddress = sellToken.address;
      const toTokenAddress = buyToken.address;
      const amount = Math.pow(10, sellToken.decimals);
      const result = await getTokenValue(
        fromTokenAddress,
        toTokenAddress,
        amount
      );
      setResult(result);
      setLoading(false);
    };

    getData();
  }, [buyToken, sellToken]);
  return (
    <FusionContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <TokenContainer>
          <MdInfo color="#7185AA" size="20px" />
          <span>
            1 {sellToken.symbol} ={" "}
            {isNaN(Number(result?.toTokenAmount) / result?.toToken?.decimals)
              ? 1
              : (
                  Number(result?.toTokenAmount) /
                  Math.pow(10, result?.toToken?.decimals)
                ).toFixed(3)}{" "}
            {buyToken.symbol}
          </span>
        </TokenContainer>
      )}
      <ValueContainer>
        <img src="/assets/image/yep.png" alt="" />
        <span>$0</span>
        <GoChevronDown color="#7185AA" />
      </ValueContainer>
    </FusionContainer>
  );
};

export default Fusion;
