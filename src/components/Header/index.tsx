import { HeaderContainer, HeaderContent, NewTransactionButtton } from "./styles";
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

          <Dialog.Portal>
            <Dialog.Overlay/>
            <Dialog.Content>
             <Dialog.Title>
              Nova Transação
             </Dialog.Title>
             <Dialog.Close/>
            </Dialog.Content>          
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}