var php100 = 0;
var php50 = 0;
var php5 = 0;
var php2 = 0;
var total = 0;
var amt_enter = 0;
var phil = 0;
var p1 = 0;
var p2 = 0;
var p3 = 0;
var p4 = 0;

function amount() {
  php100 = parseInt(prompt("enter quantity for 100 notes"));
  document.getElementById("php_hundred").innerHTML = php100;

  php50 = parseInt(prompt("enter quantity for 50 notes"));
  document.getElementById("php_fivehundred").innerHTML = php50;

  php5 = parseInt(prompt("enter quantity for 5 notes"));
  document.getElementById("five").innerHTML = php5;

  php2 = parseInt(prompt("enter quantity for 2 coins"));
  document.getElementById("two").innerHTML = php2;

  total = php100 * 100 + php50 * 50 + php5 * 5 + php2 * 2;
  document.getElementById("tot_Amounts").innerHTML = total;
  document.getElementById("zero").innerHTML = "";
}

function EnteredAmounts() {
  amt_enter = parseInt(prompt("Enter amount You pay: "));
  phil = amt_enter;
  if (amt_enter <= total) {
    total = total - amt_enter;
    document.getElementById("Ent_Amounts").innerHTML = amt_enter;
    document.getElementById("tot_Amounts").innerHTML = total;
    document.getElementById("Balance").innerHTML = total;

    if (amt_enter >= 100) {
      if (amt_enter >= php100 * 100 && php100 > 0) {
        amt_enter = amt_enter - php100 * 100;
        p4 = php100;
        php100 = 0;
      } else {
        if (php100 > 0) {
          p4 = Math.floor(amt_enter / 100);
          php100 = php100 - Math.floor(amt_enter / 100);
          amt_enter = amt_enter - Math.floor(amt_enter / 100) * 100;
        }
      }
      document.getElementById("php_hundred").innerHTML = php100;
    }
    if (amt_enter >= 50) {
      if (amt_enter >= php50 * 50 && php50 > 0) {
        amt_enter = amt_enter - php50 * 50;
        p5 = php50;
        php50 = 0;
      } else {
        if (php50 > 0) {
          p5 = Math.floor(amt_enter / 50);
          php50 = php50 - Math.floor(amt_enter / 50);
          amt_enter = amt_enter - Math.floor(amt_enter / 50) * 50;
        }
      }
      document.getElementById("php_fifty").innerHTML = php50;
    }

    if (amt_enter >= 5) {
      if (amt_enter >= php5 * 5 && php5 > 0) {
        amt_enter = amt_enter - php5 * 5;
        p8 = php5;
        php5 = 0;
      } else {
        if (php5 > 0) {
          p8 = Math.floor(amt_enter / 5);
          php5 = php5 - Math.floor(amt_enter / 5);
          amt_enter = amt_enter - Math.floor(amt_enter / 5) * 5;
        }
      }
      document.getElementById("five").innerHTML = php5;
    }
    if (amt_enter >= 2) {
      if (amt_enter >= php2 * 2 && php2 > 0) {
        amt_enter = amt_enter - php2 * 2;
        p9 = php2;
        php2 = 0;
      } else {
        if (php2 > 0) {
          p9 = Math.floor(amt_enter / 2);
          php2 = php2 - Math.floor(amt_enter / 2);
          amt_enter = amt_enter - Math.floor(amt_enter / 2) * 2;
        }
      }
      document.getElementById("two").innerHTML = php2;
    }

    document.getElementById("zero").innerHTML = "";
  } else {
    document.getElementById("Ent_Amounts").innerHTML =
      "We have insufficient Balance";
    document.getElementById("zero").innerHTML = "";
    document.getElementsByClassName("btn-2")[0].innerHTML = "";
  }
}

function GeneratingSlips() {
  var slip_tot = phil;
  var obj = {
    "Total Amount:": slip_tot,
    "One Hundred Notes:": p1,
    "Fifty Notes:": p2,
    "Five Coins:": p3,
    "Two Coins:": p4,
  };

  document.getElementById("zero").innerHTML +=
    "&emsp;" + "&emsp;" + "&emsp;" + "&emsp;" + "&emsp;" + "Thank You<br>";
  for (var i in obj) {
    if (obj[i] > 0) {
      document.getElementById("zero").innerHTML += i + "&emsp;" + "&emsp;";
      document.getElementById("zero").innerHTML += "\t\t" + obj[i] + "<br>";
    }
  }
  p1 = 0;
  p2 = 0;
  p3 = 0;
  p4 = 0;
}
