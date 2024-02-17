import { HeaderContainer, HeaderContent, NewTransactionButtton } from "./styles";
import LogoImg from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImg} />
        <NewTransactionButtton>
          Nova transação
        </NewTransactionButtton>
      </HeaderContent>
    </HeaderContainer>
  )
}