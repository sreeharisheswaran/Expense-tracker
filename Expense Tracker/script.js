// Load saved transactions from localStorage
let transactions = JSON.parse(localStorage.getItem("txns"));
if (transactions === null) {
  transactions = [];
}

let filter = "all";

// Get elements from the page
let list = document.getElementById("transaction-list");
let balanceEl = document.getElementById("total-balance");
let descInput = document.getElementById("desc");
let amountInput = document.getElementById("amount");
let categoryInput = document.getElementById("category");
let addBtn = document.getElementById("add-btn");
let filterBtns = document.querySelectorAll(".filter-btn");

//Function to update UI
function updateUI() {

  //Simulating async delay
  setTimeout(function () {

    //To Save data
    localStorage.setItem("txns", JSON.stringify(transactions));

    //To calculate total balance
    let total = 0;
    for (let i = 0; i < transactions.length; i++) {
      total += transactions[i].amount;
    }

    balanceEl.innerText = "₹" + total.toFixed(2);
    balanceEl.style.color = total < 0 ? "var(--danger)" : "var(--text-main)";

    //To Clear list
    list.innerHTML = "";

    //To Show transactions based on filter
    for (let i = 0; i < transactions.length; i++) {

      let t = transactions[i];

      if (filter === "income" && t.amount <= 0) continue;
      if (filter === "expense" && t.amount >= 0) continue;

      let item = document.createElement("li");

      if (t.amount < 0) {
        item.className = "item minus";
      } else {
        item.className = "item plus";
      }

      item.innerHTML =
        "<div>" +
          "<strong>" + t.text + "</strong>" +
          "<small>  " + t.date + " | " + t.category + "</small>" +
        "</div>" +
        "<div class='right-side'>" +
          "<span>" + (t.amount > 0 ? "+" : "") + t.amount + "</span>" +
          "<button class='delete-btn' data-id='" + t.id + "'>&times;</button>" +
        "</div>";

      list.appendChild(item);
    }

    // If no items shown
    if (list.innerHTML === "") {
      list.innerHTML =
        "<li style='opacity:0.5; text-align:center;'>No entries yet</li>";
    }

  }, 300);
}

//To Add new transaction
function addTransaction() {
  let desc = descInput.value.trim();
  let amt = parseFloat(amountInput.value);

  if (desc === "" || isNaN(amt)) {
    return;
  }

  let newTransaction = {
    id: Date.now(),
    text: desc,
    amount: amt,
    category: categoryInput.value,
    date: new Date().toLocaleDateString()
  };

  transactions.push(newTransaction);

  descInput.value = "";
  amountInput.value = "";

  updateUI();
}

//To Delete transaction
function deleteItem(id) {
  transactions = transactions.filter(t => t.id !== id);
  updateUI();
}

// Button click
addBtn.onclick = function () {
  addTransaction();
};

//To Filter buttons
for (let i = 0; i < filterBtns.length; i++) {
  filterBtns[i].onclick = function () {

    document.querySelector(".filter-btn.active").classList.remove("active");
    this.classList.add("active");

    filter = this.dataset.filter;
    updateUI();
  };
}

// Event delegation for delete
list.onclick = function (e) {
  if (e.target.classList.contains("delete-btn")) {
    let id = Number(e.target.dataset.id);
    deleteItem(id);
  }
};

// First load
updateUI();
