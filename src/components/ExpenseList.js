import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './ExpenseList.css'

function ExpenseList(props) {
    const expenses = props.items;
    const expenseItens = expenses.map((item) => 
        <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}></ExpenseItem>
    );
    return (
        <Card className="expenses">
            {expenseItens}
        </Card>
    );
}

export default ExpenseList;