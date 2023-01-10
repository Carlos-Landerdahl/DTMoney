import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { SearchForm } from "./components/SearchForm";

import { PriceHighLight, TransacitonContainer, TransacitonsTable } from "./styles";

export function Transactions() {
  const { transactions } = useContext(TransactionContext)

    return (
    <div>
      <Header/> 
      <Summary />


      <TransacitonContainer>
      <SearchForm />

        <TransacitonsTable>
          <tbody>
            {transactions.map(transactions => {
              return (
                <tr key={transactions.id}>
                  <td width="50%">{transactions.description}</td>
                    <td>
                      <PriceHighLight variant={transactions.type}>
                        {transactions.type === 'outcome' && '- '}
                        {priceFormatter.format(transactions.price)}
                      </PriceHighLight>
                    </td>
                    <td>{transactions.category}</td>
                  <td>{dateFormatter.format(new Date(transactions.createdAt))}</td>
            </tr>
              )
            })}
          </tbody>
        </TransacitonsTable>
      </TransacitonContainer>
    </div>
  )
}