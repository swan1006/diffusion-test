import { useEffect } from "react";
import {
  ExchangeContainer,
  ValueContainer,
  TokenListContainer,
  SubTitle,
  TokenSelecter,
  MinBtn,
  TokenDropDown,
  TokenDownListContainer,
  TokenDropDownWrapper,
  TokenListItem,
  LoadingContainer,
} from "./style";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { iExchangeForm, iTokenListProps } from "../../interfaces";
import { useState } from "react";
import Loading from "../Loading";

const ExchangeForm = ({
  isMinBtn,
  isBuy,
  tokenList,
  amount,
  onChangeAmount,
  token,
  setToken,
  isEditable,
  isload,
}: iExchangeForm) => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [selected, setSelected] = useState<iTokenListProps>(token);
  const [buyAmount, setAmount] = useState<number>();

  useEffect(() => {
    setSelected(token);
    setAmount(amount);
  }, [token, amount]);

  const handleDropDownClick = (item: iTokenListProps) => {
    setSelected(item);
    setToken(item);
    setDropdown(false);
  };

  return (
    <ExchangeContainer>
      <ValueContainer>
        <SubTitle isAlign={true}>~$10921.69</SubTitle>
        {isload ? (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        ) : (
          <input
            type="number"
            value={buyAmount}
            readOnly={isEditable}
            onChange={(e) => onChangeAmount(e.target.value)}
          />
        )}
      </ValueContainer>
      <TokenListContainer>
        <SubTitle>You {isBuy ? "buy" : "sell"}</SubTitle>
        <TokenSelecter>
          {isMinBtn && <MinBtn onClick={() => onChangeAmount(1)}>MIN</MinBtn>}
          <TokenDropDownWrapper>
            <TokenDropDown onClick={() => setDropdown((prev) => !prev)}>
              <img src={selected.logoURI} alt="" draggable={false} />
              <span>
                {selected.symbol.length > 3
                  ? `${selected.symbol.slice(0, 3) + "..."}`
                  : selected.symbol}
              </span>
              {dropdown ? (
                <GoChevronUp
                  color="#fff"
                  style={{ position: "absolute", right: "10px" }}
                />
              ) : (
                <GoChevronDown
                  color="#fff"
                  style={{ position: "absolute", right: "10px" }}
                />
              )}
            </TokenDropDown>
            {dropdown && (
              <TokenDownListContainer>
                {tokenList?.map((item, key) => (
                  <TokenListItem
                    key={key}
                    onClick={() => handleDropDownClick(item)}
                  >
                    <img src={item.logoURI} alt="" />
                    <span>
                      {item.symbol.length > 3
                        ? `${item.symbol.slice(0, 3) + "..."}`
                        : item.symbol}
                    </span>
                  </TokenListItem>
                ))}
              </TokenDownListContainer>
            )}
          </TokenDropDownWrapper>
        </TokenSelecter>
      </TokenListContainer>
    </ExchangeContainer>
  );
};

export default ExchangeForm;
