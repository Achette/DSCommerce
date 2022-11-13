import { Props } from "../../types"
import './styles.css'

export const ButtonPrimary = ({ title }: Props) => {

  return <div className="dsc-btn dsc-btn-blue">{title}</div>;
};
