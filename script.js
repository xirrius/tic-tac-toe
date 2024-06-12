const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9");

const headline = document.getElementById("headline");
const reset = document.getElementById("reset");

let lastTurn = "X"
let turn = "X";

const check = () => {
  if (b1.value == "0" && b2.value == "0" && b3.value == "0") {
    headline.innerHTML = "Player 0 won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;

    b1.style.color = "red";
    b2.style.color = 'red';
    b3.style.color = 'red';
  } else if (b1.value == "0" && b4.value == "0" && b7.value == "0") {
    headline.innerHTML = "Player 0 won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;

    b1.style.color = 'red';
    b4.style.color = 'red';
    b7.style.color = 'red';
  } else if (b2.value == "0" && b5.value == "0" && b8.value == "0") {
    headline.innerHTML = "Player 0 won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;

    b2.style.color = 'red';
    b5.style.color = 'red';
    b8.style.color = 'red';
  } else if (b4.value == "0" && b5.value == "0" && b6.value == "0") {
    headline.innerHTML = "Player 0 won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;

    b4.style.color = 'red';
    b5.style.color = 'red';
    b6.style.color = 'red';
  } else if (b7.value == "0" && b8.value == "0" && b9.value == "0") {
    headline.innerHTML = "Player 0 won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;

    b7.style.color = 'red';
    b8.style.color = 'red';
    b9.style.color = 'red';
  } else if (b3.value == "0" && b6.value == "0" && b9.value == "0") {
    headline.innerHTML = "Player 0 won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;

    b3.style.color = 'red';
    b6.style.color = 'red';
    b9.style.color = 'red';
  } else if (b1.value == "0" && b5.value == "0" && b9.value == "0") {
    headline.innerHTML = "Player 0 won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;

    b1.style.color = 'red';
    b5.style.color = 'red';
    b9.style.color = 'red';
  } else if (b3.value == "0" && b5.value == "0" && b7.value == "0") {
    headline.innerHTML = "Player 0 won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;

    b5.style.color = 'red';
    b7.style.color = 'red';
    b3.style.color = 'red';
  }
  if (b1.value == "X" && b2.value == "X" && b3.value == "X") {
    headline.innerHTML = "Player X won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;

    b1.style.color = 'red';
    b2.style.color = 'red';
    b3.style.color = 'red';
  } else if (b1.value == "X" && b4.value == "X" && b7.value == "X") {
    headline.innerHTML = "Player X won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;

    b1.style.color = 'red';
    b4.style.color = 'red';
    b7.style.color = 'red';
  } else if (b2.value == "X" && b5.value == "X" && b8.value == "X") {
    headline.innerHTML = "Player X won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;

    b2.style.color = 'red';
    b5.style.color = 'red';
    b8.style.color = 'red';
  } else if (b4.value == "X" && b5.value == "X" && b6.value == "X") {
    headline.innerHTML = "Player X won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;

    b4.style.color = 'red';
    b5.style.color = 'red';
    b6.style.color = 'red';
  } else if (b7.value == "X" && b8.value == "X" && b9.value == "X") {
    headline.innerHTML = "Player X won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;

    b7.style.color = 'red';
    b8.style.color = 'red';
    b9.style.color = 'red';
  } else if (b3.value == "X" && b6.value == "X" && b9.value == "X") {
    headline.innerHTML = "Player X won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;

    b3.style.color = 'red';
    b6.style.color = 'red';
    b9.style.color = 'red';
  } else if (b1.value == "X" && b5.value == "X" && b9.value == "X") {
    headline.innerHTML = "Player X won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;

    b1.style.color = 'red';
    b5.style.color = 'red';
    b9.style.color = 'red';
  } else if (b3.value == "X" && b5.value == "X" && b7.value == "X") {
    headline.innerHTML = "Player X won";
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;

    b5.style.color = 'red';
    b7.style.color = 'red';
    b3.style.color = 'red';
  }
};


b1.addEventListener("click", () => {
  if (b1.value == "") {
    b1.value = turn;
    b1.style.backgroundColor = "#f1f1f1"
    if (turn == "X") turn = "0";
    else turn = turn = "X";
    headline.innerHTML = `Player ${turn} turn`
    check();
  }
});
b2.addEventListener("click", () => {
  if (b2.value == "") {
    b2.value = turn;
    b2.style.backgroundColor = "#f1f1f1"
    if (turn == "X") turn = "0";
    else turn = turn = "X";
    headline.innerHTML = `Player ${turn} turn`
    check();
  }
});
b3.addEventListener("click", () => {
  if (b3.value == "") {
    b3.value = turn;
    b3.style.backgroundColor = "#f1f1f1"
    if (turn == "X") turn = "0";
    else turn = turn = "X";
    headline.innerHTML = `Player ${turn} turn`
    check();
  }
});
b4.addEventListener("click", () => {
  if (b4.value == "") {
    b4.value = turn;
    b4.style.backgroundColor = "#f1f1f1"
    if (turn == "X") turn = "0";
    else turn = turn = "X";
    headline.innerHTML = `Player ${turn} turn`
    check();
  }
});
b5.addEventListener("click", () => {
  if (b5.value == "") {
    b5.value = turn;
    b5.style.backgroundColor = "#f1f1f1"
    if (turn == "X") turn = "0";
    else turn = turn = "X";
    headline.innerHTML = `Player ${turn} turn`
    check();
  }
});
b6.addEventListener("click", () => {
  if (b6.value == "") {
    b6.value = turn;
    b6.style.backgroundColor = "#f1f1f1"
    if (turn == "X") turn = "0";
    else turn = turn = "X";
    headline.innerHTML = `Player ${turn} turn`
    check();
  }
});
b7.addEventListener("click", () => {
  if (b7.value == "") {
    b7.value = turn;
    b7.style.backgroundColor = "#f1f1f1"
    if (turn == "X") turn = "0";
    else turn = turn = "X";
    headline.innerHTML = `Player ${turn} turn`
    check();
  }
});
b8.addEventListener("click", () => {
  if (b8.value == "") {
    b8.value = turn;
    b8.style.backgroundColor = "#f1f1f1"
    if (turn == "X") turn = "0";
    else turn = turn = "X";
    headline.innerHTML = `Player ${turn} turn`
    check();
  }
});
b9.addEventListener("click", () => {
  if (b9.value == "") {
    b9.value = turn;
    b9.style.backgroundColor = "#f1f1f1"
    if (turn == "X") turn = "0";
    else turn = turn = "X";
    headline.innerHTML = `Player ${turn} turn`
    check();
  }
});


reset.addEventListener("click", () => {
    b1.value = ""
    b2.value = ""
    b3.value = ""
    b4.value = ""
    b5.value = ""
    b6.value = ""
    b7.value = ""
    b8.value = ""
    b9.value = ""

    b1.style.backgroundColor = "white"
    b2.style.backgroundColor = "white"
    b3.style.backgroundColor = "white"
    b4.style.backgroundColor = "white"
    b5.style.backgroundColor = "white"
    b6.style.backgroundColor = "white"
    b7.style.backgroundColor = "white"
    b8.style.backgroundColor = "white"
    b9.style.backgroundColor = "white"

    b1.disabled = false;
    b2.disabled = false;
    b3.disabled = false;
    b4.disabled = false;
    b5.disabled = false;
    b6.disabled = false;
    b7.disabled = false;
    b8.disabled = false;
    b9.disabled = false;

    b1.style.color = "black"
    b2.style.color = "black"
    b3.style.color = "black"
    b4.style.color = "black"
    b5.style.color = "black"
    b6.style.color = "black"
    b7.style.color = "black"
    b8.style.color = "black"
    b9.style.color = "black"

    if(lastTurn == "X") {
        lastTurn = "0"
        turn = lastTurn
        headline.innerHTML = `Player ${turn} turn`
    } else {
        lastTurn = "X"
        turn = lastTurn
        headline.innerHTML = `Player ${turn} turn`
    }
})
