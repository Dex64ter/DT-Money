import * as Dialog from "@radix-ui/react-dialog";
import { Overlay, Content, CloseButton, TransactionType, TransactionTypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as z from 'zod';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionContext";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionContext)

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: {isSubmitting}
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  async function handleNewTransaction(data: NewTransactionFormInputs) {
    const { description, category, price, type } = data;

    await createTransaction({
      description,
      price,
      category,
      type
    })
    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay/>
      <Content>
        <Dialog.Title> Nova Transação </Dialog.Title>
        <CloseButton>
          <X size={24}/>
        </CloseButton>
        <form onSubmit={handleSubmit(handleNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price', {valueAsNumber: true})}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />
          
          <Controller
            name="type"
            control={control}
            render={({ field }) => {
              return (
                <TransactionType onValueChange={field.onChange} value={field.value}>
                  <TransactionTypeButton
                    type="button"
                    variant="income"
                    value="income"                
                  >
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>
                  
                  <TransactionTypeButton
                    type="button"
                    variant="outcome"
                    value="outcome"
                  >
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>Cadastrar</button>
        </form>

      </Content>          
    </Dialog.Portal>
  )
}