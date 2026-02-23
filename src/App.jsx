import { BudgetForm } from "./components/BudgetForm.jsx"
import { useContext } from "react"
import { BudgetStateContext } from "./context/BudgetContext.jsx"
import { BudgetTracker } from "./components/BudgetTracker.jsx"



function App() {
    const state=useContext(BudgetStateContext)
    const isValidBudget= state.budget>0;
    return (
        <>
            <header className="bg-blue-600 py-8 max-h-72">
                <h1 className="uppercase text-center font-black text-4xl textwhite">
                    Planificador de gastos
                </h1>
            </header>
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
            {isValidBudget? <BudgetTracker/> : <BudgetForm/>}
            </div>
        </>
    )
}
export default App