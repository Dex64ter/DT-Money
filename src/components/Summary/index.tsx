import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryCard, SummaryContainer } from "./styles";
import { TransactionContext } from '../../contexts/TransactionContext';
import { useContext } from 'react';

export function Summary() {
  const { transactions } = useContext(TransactionContext)

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'income') {
      acc.income += transaction.price
      acc.total += transaction.price
    } else {
      acc.outcome -= transaction.price
      acc.total -= transaction.price
    }
    
    return acc
  }, {
    income: 0,
    outcome: 0,
    total: 0
  })


  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color='#00B37E'/>
        </header>
        <strong>R$ {summary.income},00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color='#F75A68'/>
        </header>
        <strong>R$ {summary.outcome},00</strong>
      </SummaryCard>

      <SummaryCard variant='green'>
        <header>
          <span>Entradas</span>
          <CurrencyDollar size={32} color='#fff'/>
        </header>
        <strong>R$ {summary.total},00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}