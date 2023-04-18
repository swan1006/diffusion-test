import { useState, useEffect } from "react";
import {
  TradeContainter,
  TradeWrapper,
  SettingContainer,
  DividerContainer,
  ExchangeBtn,
  ProSelectContainer,
  SwapBtn,
  WalletConnectBtn,
} from "./App.style";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Web3 from "web3";
import { EthereumContext } from "./contexts/EthereumContext";
//interface
import { iTokenListProps } from "./interfaces";

// api
import { getToken, getTokenValue } from "./actions/api";

// import react-icons
import { MdSettings, MdRefresh } from "react-icons/md";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";

// import components
import Exchange from "./components/Exchange";
import ProButton from "./components/ProBtn";
import Fusion from "./components/Fusion";

// import css
import "./App.css";

const defaultPercent = ["25", "50", "75", "100"];
const initSellData = {
  address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  decimals: 18,
  logoURI:
    "https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
  name: "Ethereum",
  symbol: "ETH",
  tags: ["native", "PEG:ETH"],
};

const initBuyData = {
  symbol: "DAI",
  name: "Dai Stablecoin",
  decimals: 18,
  address: "0x6b175474e89094c44da98b954eedeac495271d0f",
  logoURI:
    "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png",
  eip2612: true,
  tags: ["tokens", "PEG:USD"],
};

function App() {
  const [buyValue, setBuyValue] = useState<number>(0);
  const [buyToken, setBuyToken] = useState<iTokenListProps>(initBuyData);
  const [sellValue, setSellValue] = useState<number>(0);
  const [sellToken, setSellToken] = useState<iTokenListProps>(initSellData);
  const [isBuy, setBuyFlag] = useState<boolean>(false);

  const [tokenList, setTokenList] = useState<iTokenListProps[]>([]);
  // const [isMetamaskInstalled, setIsMetamaskInstalled] = useState<boolean>(false);
  const [provider, setProvider] = useState<any>(null);
  const [web3, setWeb3] = useState<any>(null);
  const [accounts, setAccounts] = useState<any>([]);
  const [currentAcc, setCurrentAcc] = useState("");
  const ethereum = (window as any).ethereum;

  useEffect(() => {
    if (ethereum) {
      setProvider(ethereum);
      setWeb3(new Web3(ethereum));
      ethereum.on("accountsChanged", (accs: Array<string>) => {
        setAccounts(accs);
        setCurrentAcc(accs[0]);
      });
      ethereum.on("chainChanged", (chainId: string) => {
        if (chainId === "0x1") {
          toast("Ethereum mainnet connected successfully");
        } else {
          toast.error("Please connect to Ethereum Mainnet", {
            theme: "dark",
          });
        }
      });
    } else {
      toast.error("Please install Metamask wallet in this browser", {
        theme: "dark",
      });
    }
    const getData = async () => {
      let tokens = await getToken();
      setTokenList(tokens);
    };

    getData();
  }, []);
  useEffect(() => {
    const setCurrentlyConnectedAccount = async () => {
      let accounts = await web3.eth.getAccounts();
      if (accounts && accounts.length > 0) {
        setCurrentAcc(accounts[0]);
      }
    };
    if (web3) {
      setCurrentlyConnectedAccount();
    }
  }, [web3]);

  const walletConnectFunc = async (): Promise<void> => {
    ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts: string[]) => {
        setCurrentAcc(accounts[0]);
        setProvider(ethereum);
        setWeb3(new Web3(ethereum));
        toast.success("Metamask wallet connected successfully", {
          theme: "dark",
        });
      })
      .catch((error: any) => {
        toast.error(`Something went wrong: ${error}`, {
          theme: "dark",
        });
      });
  };

  const swapFunc = () => {
    console.log("Swap success");
  };

  const onChangeSellValue = async (value: number) => {
    if (Number(value) === 0) {
      setSellValue(value);
      setBuyValue(0);
      return;
    }
    setSellValue(value);
    const fromTokenAddress = sellToken.address;
    const toTokenAddress = buyToken.address;
    const amount = Math.pow(10, sellToken.decimals) * value;
    const result = await getTokenValue(
      fromTokenAddress,
      toTokenAddress,
      amount
    );
    const tempBuyValue = (
      Number(result.toTokenAmount) / Math.pow(10, result.toToken.decimals)
    ).toFixed(5);
    setBuyValue(Number(tempBuyValue));
    setBuyFlag(false);
  };

  const onExchangeToken = async (
    tokenInfo: iTokenListProps,
    sendAmount: number
  ) => {
    if (Number(sendAmount) === 0) {
      setBuyFlag(true);
      return;
    }
    const fromTokenAddress = tokenInfo.address;
    const toTokenAddress = sellToken.address;
    const amount = Math.pow(10, tokenInfo.decimals) * sendAmount;
    const result = await getTokenValue(
      fromTokenAddress,
      toTokenAddress,
      amount
    );
    const tempBuyValue = (
      Number(result.toTokenAmount) / Math.pow(10, result.toToken.decimals)
    ).toFixed(5);
    setBuyValue(Number(tempBuyValue));
    setSellToken(tokenInfo);
    setBuyFlag(false);
  };

  const onChangSellToken = async (tokenInfo: iTokenListProps) => {
    if (Number(sellValue) === 0) {
      setBuyFlag(true);
      return;
    }
    const fromTokenAddress = tokenInfo.address;
    const toTokenAddress = buyToken.address;
    const amount = Math.pow(10, tokenInfo.decimals) * sellValue;
    const result = await getTokenValue(
      fromTokenAddress,
      toTokenAddress,
      amount
    );
    const tempBuyValue = (
      Number(result.toTokenAmount) / Math.pow(10, result.toToken.decimals)
    ).toFixed(5);
    setBuyValue(Number(tempBuyValue));
    setSellToken(tokenInfo);
    setBuyFlag(false);
  };

  const onChangBuyToken = async (tokenInfo: iTokenListProps) => {
    if (Number(sellValue) === 0) {
      setBuyFlag(true);
      return;
    }
    const fromTokenAddress = sellToken.address;
    const toTokenAddress = tokenInfo.address;
    const amount = Math.pow(10, sellToken.decimals) * sellValue;

    const result = await getTokenValue(
      fromTokenAddress,
      toTokenAddress,
      amount
    );
    const tempBuyValue = (
      Number(result.toTokenAmount) / Math.pow(10, result.toToken.decimals)
    ).toFixed(5);
    setBuyValue(Number(tempBuyValue));
    setBuyToken(tokenInfo);
    setBuyFlag(false);
  };

  const onExchange = () => {
    const tempSellToken = sellToken;
    const tempBuyToken = buyToken;
    const tempBuyValue = buyValue;
    setSellToken(tempBuyToken);
    setBuyToken(tempSellToken);
    setSellValue(tempBuyValue);
    onExchangeToken(tempBuyToken, tempBuyValue);
  };

  return (
    <EthereumContext.Provider value={{ provider, accounts, web3, currentAcc }}>
      <TradeContainter>
        <TradeWrapper>
          <div>
            <SettingContainer>
              <MdRefresh color="#fff" size="27px" onClick={() => {}} />
              <MdSettings color="#fff" size="27px" />
            </SettingContainer>

            <Exchange
              isMinBtn={true}
              tokenList={tokenList}
              amount={sellValue}
              token={sellToken}
              setToken={onChangSellToken}
              onChangeAmount={onChangeSellValue}
            />
            <DividerContainer>
              <ExchangeBtn onClick={onExchange}>
                <FaLongArrowAltDown color="#fff" />
                <FaLongArrowAltUp color="#fff" />
              </ExchangeBtn>
            </DividerContainer>
            <Exchange
              tokenList={tokenList}
              isBuy={true}
              amount={buyValue}
              token={buyToken}
              isEditable={true}
              setToken={onChangBuyToken}
              isload={isBuy}
              onChangeAmount={setBuyValue}
            />
            <ProSelectContainer>
              {defaultPercent.map((pro, index) => (
                <ProButton percent={pro} key={index} />
              ))}
            </ProSelectContainer>
            <Fusion buyToken={buyToken} sellToken={sellToken} />
            {currentAcc ? (
              <SwapBtn onClick={swapFunc}>Swap</SwapBtn>
            ) : (
              <WalletConnectBtn onClick={walletConnectFunc}>
                Wallet Connect
              </WalletConnectBtn>
            )}
          </div>
        </TradeWrapper>
        <ToastContainer />
      </TradeContainter>
    </EthereumContext.Provider>
  );
}

export default App;
