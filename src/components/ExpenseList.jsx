
import { useContext } from "react"
import { BudgetStateContext } from "../context/BudgetContext"
import { ExpenseDetails } from "./ExpenseDatails";

export const ExpenseList = () => {
    const { expenses } = useContext(BudgetStateContext); // leyendo expense desde el contexto correcto
    const isEmpty = !expenses || expenses.length === 0;
    return (
        <div className="mt-10">
            {isEmpty ? <p className="text-gray-600 text-2xl font-bold">No hay gastos.</p> : (
                <>
                    <p className="text-gray-600 text-2xl font-bold my-5">Listado de gastos.</p>
                    {expenses.map((expense, index) => <ExpenseDetails key={index} expense={expense} />)}
                </>
            )}
        </div>
    );
}