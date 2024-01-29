let arrow_right_ct = document.getElementById("arrow-right-ct");
let arrow_left_comt = document.getElementById("arrow-left-comt");

let currency_table = document.getElementById("currency-table");
let commissions_table = document.getElementById("commissions-table");

function showCommisionsTable() {
  currency_table.style.display = "none";
  commissions_table.style.display = "block";
}

function showCurrencyTable() {
  commissions_table.style.display = "none";
  currency_table.style.display = "block";
}

arrow_right_ct.addEventListener("click", showCommisionsTable);
arrow_left_comt.addEventListener("click", showCurrencyTable);
