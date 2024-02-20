import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${props => props.theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background: ${props => props.theme['gray-900']};
      color: ${props => props.theme['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${props => props.theme['gray-500']};
      }
    }

    button[type="submit"] {
      height: 50px;
      border: 0;
      border-radius: 6px;

      background: ${props => props.theme['green-500']};
      color: ${props => props.theme.white};
      font-weight: bold;
      margin-top: 1.5rem;

      cursor: pointer;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${props => props.theme['green-700']};
        transition: .2s;
      }
    }
  }
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: .5rem;
`;

interface TransactionTypeButtonProps {
  variant?: "income" | "outcome";
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  background: ${props => props.theme['gray-700']};
  color: ${props => props.theme['gray-300']};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  border: 0;
  border-radius: 6px;
  cursor: pointer;

  svg {
    color: ${props => props.variant === "income" ? props.theme['green-500'] : props.theme['red-300']};
  }

  &[data-state="unchecked"]:hover {
    transition: .2s;
    background: ${props => props.theme['gray-600']};

  }

  &[data-state="checked"]{
    color: ${props => props.theme.white};
    background: ${props => props.variant === "income" ? props.theme['green-500'] : props.theme['red-300']};

    svg {
      color: ${props => props.theme.white};
    }    
  }

`;



export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${props => props.theme['gray-500']};

`;