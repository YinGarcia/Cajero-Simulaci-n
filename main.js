/*var cuentas = [
    {nombre: "Usuario 1", saldo: 800}
    {nombre: "Usuario 2", saldo: 10}
    {nombre: "Usuario 3", saldo: 990}
];

function ejecutar(){
    if(!login()){
        alert("Usuario o contraseña invalido")
        return
    }
};

alert("¿Que deseas hacer?")
_option = parseInt(prompt("consultar saldo + ingresar monto + retirar monto"))
let ok, saldo = accion(_opcion)
if(!ok){
    alert("No se realizo la accion, saldo: " + saldo)
} else{
    alert("Accion realizada correctamemte, saldo" + saldo)
}
*/

/*
// User objects with initial balance
let users = {
    user1: {
        balance: 800
    },
    user2: {
        balance: 10
    },
    user3: {
        balance: 990
    }
};

  // Function to display the user's balance
function checkBalance(user) {
    console.log(`${user} balance: $${users[user].balance}`);
}

  // Function to deposit money
function deposit(user, amount) {
    users[user].balance += amount;
    console.log(`$${amount} deposited successfully. New balance: $${users[user].balance}`);
}

  // Function to withdraw money
function withdraw(user, amount) {
    if (amount <= users[user].balance) {
        users[user].balance -= amount;
        console.log(`$${amount} withdrawn successfully. New balance: $${users[user].balance}`);
    } else {
        console.log(`Insufficient funds. Withdrawal unsuccessful.`);
    }
}

  // Example usage
  checkBalance('user1'); // Display initial balance for user1

  deposit('user2', 500); // Deposit $500 into user2's account
  checkBalance('user2'); // Display updated balance for user2

  withdraw('user3', 1000); // Attempt to withdraw $1000 from user3's account
  checkBalance('user3'); // Display balance for user3 after attempted withdrawal
*/
//user objects with initial balance with password
let users = {
    user1: {
        balance: 990,
        password: "pass1"
    },
    user2: {
        balance: 10,
        password: "pass2"
    },
    user3: {
        balance: 600,
        password: "pass3"
    }
};

function authenticateUser() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (users[username] && users[username].password === password) {
        displayBalance(username);
    } else {
    document.getElementById("output").innerHTML = "Incorrect username or password. Please try again.";
    }
}

function displayBalance(user) {
    let output = document.getElementById("output");
    output.innerHTML = `<p>${user} balance: $${users[user].balance}</p>`;
    output.innerHTML += `<button onclick="deposit('${user}')">Deposit</button>`;
    output.innerHTML += `<button onclick="withdraw('${user}')">Withdraw</button>`;
}

function deposit(user) {
    let amount = prompt("Enter the deposit amount:");
    amount = parseFloat(amount);
    if (!isNaN(amount) && amount > 9) {
        users[user].balance += amount;
        displayBalance(user);
    } else {
        alert("Invalid amount. Please enter a valid positive number.");
    }
}

function withdraw(user) {
    let amount = prompt("Enter the withdrawal amount:");
    amount = parseFloat(amount);
    if (!isNaN(amount) && amount > 9 && amount <= users[user].balance) {
        users[user].balance -= amount;
        displayBalance(user);
    } 
    else {
        alert("Invalid amount or insufficient funds. Please try again.");
    }
}