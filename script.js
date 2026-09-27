let income = 0;
let expenses = [];

function setIncome() {

    income = Number(
        document.getElementById("incomeInput").value
    );

    if (income <= 0) {
        alert("Enter valid income");
        return;
    }

    calculate();
}

function addExpense() {

    let name =
        document.getElementById("expenseName").value;

    let category =
        document.getElementById("expenseCategory").value;

    let amount =
        Number(
            document.getElementById("expenseAmount").value
        );

    if (
        name == "" ||
        category == "" ||
        amount <= 0
    ) {
        alert("Fill all fields");
        return;
    }

    let expense = {
        name: name,
        category: category,
        amount: amount
    };

    expenses.push(expense);

    showExpenses();
    calculate();

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseCategory").value = "";
    document.getElementById("expenseAmount").value = "";
}

function showExpenses() {

    let table =
        document.getElementById("expenseTableBody");

    table.innerHTML = "";

    for (let i = 0; i < expenses.length; i++) {

        table.innerHTML +=
        "<tr>" +
        "<td>" + expenses[i].name + "</td>" +
        "<td>" + expenses[i].category + "</td>" +
        "<td>₹" + expenses[i].amount + "</td>" +
        "<td><button class='btn btn-danger btn-sm' onclick='deleteExpense(" + i + ")'>Delete</button></td>" +
        "</tr>";
    }
}

function deleteExpense(index) {

    expenses.splice(index, 1);

    showExpenses();
    calculate();
}

function calculate() {

    let totalExpense = 0;

    for (let i = 0; i < expenses.length; i++) {

        totalExpense =
            totalExpense + expenses[i].amount;
    }

    let balance =
        income - totalExpense;

    document.getElementById("incomeDisplay").innerHTML =
        income;

    document.getElementById("expenseDisplay").innerHTML =
        totalExpense;

    document.getElementById("balanceDisplay").innerHTML =
        balance;
}

// Show current date in header

const date = new Date();

document.getElementById("currentDate").innerHTML =
    date.toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

// Sidebar Close and Open
const sidebar =
document.querySelector(".sidebar");

const toggleBtn =
document.getElementById("toggleSidebar");

toggleBtn.addEventListener("click", () => {

    sidebar.classList.toggle("collapsed");

});