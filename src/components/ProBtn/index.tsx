import { ButtonContainer } from "./style";
import { iPercent } from "../../interfaces";

const PercentButton = ({ percent }: iPercent) => {
  return <ButtonContainer>{percent}%</ButtonContainer>;
};

export default PercentButton;
