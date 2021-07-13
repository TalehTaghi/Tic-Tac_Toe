let player1,
    player2;

let point1 = 0,
    point2 = 0;

let x = "X",
    o = "O";

let array = [];

let count = 1;

Start();

function Start() {
    player1 = (player1 == undefined ? prompt("Player 1 i daxil et", "X") : player1);
    player2 = (player2 == undefined ? prompt("Player 2 i daxil et", "O") : player2);
    document.getElementById("p1").innerHTML = player1 + " : " + point1;
    document.getElementById("p2").innerHTML = player2 + " : " + point2;
    Arr();
    Table();
}


function Table() {
    let tr = `<tr>
                <th> </th>
                <th>a</th>
                <th>b</th>
                <th>c</th>
              </tr>`;
    for (let i = 0; i < 3; i++) {
        tr += `<tr><td>${i + 1}</td>`;
        for (let j = 0; j < 3; j++) {
            let color = array[i][j] == 'X' ? 'red' : 'blue';
            tr += `<td onclick="Click(${i},${j})" class="inner" style="color: ${color}"> ${array[i][j] == undefined ? ' ' : array[i][j]}  </td>`;
        }
        tr += `</tr>`;
    }
    document.getElementById("tbl").innerHTML = tr;
}

function Arr() {
    for (let i = 0; i < 3; i++) {
        array[i] = [];
    }
}

function Click(i, j) {
    if (array[i][j] == undefined) {
        if (count % 2 == 0) {
            array[i][j] = o;
        } else {
            array[i][j] = x;
        }
        count++;
        Table();
        setInterval(Check, 250);
    }
}

function Finish(n, m) {
    alert(array[n][m] == x ? `${player1} is Winner` : `${player2} is Winner`);
    array[n][m] == x ? point1++ : point2++;
    Start();
}

function Check() {
    for (let i = 0; i < 3; i++) {
        if (array[i][0] != undefined && array[i][0] == array[i][1] && array[i][1] == array[i][2]) {
            Finish(i, 0);
        }

        if (array[0][i] != undefined && array[0][i] == array[1][i] && array[1][i] == array[2][i]) {
            Finish(0, i);
        }
    }

    if (array[0][0] != undefined && array[0][0] == array[1][1] && array[1][1] == array[2][2]) {
        Finish(0, 0);
    }

    if (array[2][0] != undefined && array[2][0] == array[1][1] && array[1][1] == array[0][2]) {
        Finish(2, 0);
    }

    else {
        let number = 0;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (array[i][j] != undefined)
                    number++;
            }
        }

        if (number == 3 * 3) {
            alert("Draw!");
            Start();
        }
    }
}