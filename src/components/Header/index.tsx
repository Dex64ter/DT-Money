import { HeaderContainer, HeaderContent, NewTransactionButtton } from "./styles";
import { NewTransactionModal } from "../NewTransactionModal";
import * as Dialog from '@radix-ui/react-dialog';
import LogoImg from '../../assets/Logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImg} />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButtton>
              Nova transação
            </NewTransactionButtton>
          </Dialog.Trigger>

          <NewTransactionModal/>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}