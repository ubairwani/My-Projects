const position = document.querySelectorAll('#pos');
var count = 0;
var arr = [[-1, -2, -3],
[-4, -5, -6],
[-7, -8, -9]
];
var turn = true;
position.forEach(e => {
    e.addEventListener('click', function () {
        count++;
        if (count % 2 == 0) {
            if (e.innerHTML) {

            }
            else {
                e.innerHTML = '<i class="fab fa-opera fa-2x"></i>';
                turn = true;
            }

        }
        else {
            if (e.innerHTML) {

            }
            else {
                e.innerHTML = '<i class="fas fa-times fa-2x"></i>';
                turn = false;
            }

        }
        console.log(count);



    })
});
var won = -1;
function checkWinner(row, col) {
    arr[row][col] = turn;
    const winner = document.querySelector('.wins_container');

    for (let i = 0; i < 1; i++) {
        if (arr[i][0] == arr[i][1] && arr[i][1] == arr[i][2]) {
            console.log('winner');
            winner.style.display = 'block';
            won = arr[i][0];
        }
    }
    for (let i = 1; i < 2; i++) {
        if (arr[i][0] == arr[i][1] && arr[i][1] == arr[i][2]) {
            console.log('winner');
            winner.style.display = 'block';
            won = arr[i][0];
        }
    }
    for (let i = 2; i < 3; i++) {
        if (arr[i][0] == arr[i][1] && arr[i][1] == arr[i][2]) {
            console.log('winner');
            winner.style.display = 'block';
            won = arr[i][0];
        }
    }
    // col
    if (arr[0][0] == arr[1][0] && arr[1][0] == arr[2][0]) {
        console.log('winner');
        winner.style.display = 'block';
        won = arr[0][0];
    }



    if (arr[0][1] == arr[1][1] && arr[1][1] == arr[2][1]) {
        console.log('winner');
        winner.style.display = 'block';
        won = arr[0][1];
    }
    if (arr[0][2] == arr[1][2] && arr[1][2] == arr[2][2]) {
        console.log('winner');
        winner.style.display = 'block';
        won = arr[0][2];
    }
    if (arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0]) {
        console.log('winner');
        winner.style.display = 'block';
        won = arr[0][2];
    }

    // diagonals

    if (arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]) {
        console.log('winner');
        winner.style.display = 'block';
        won = arr[0][0];
    }
    if (arr[0][2] == arr[1][2] && arr[1][2] == arr[2][2]) {
        console.log('winner');
        winner.style.display = 'block';
        won = arr[0][2];
    }

    console.log(arr);
    console.log(won);
    if (won == true) {
        const user = document.querySelector('#wins');
        let text = 'x';
        user.innerText = text;
        user.style.display = 'block';
    }
    else if (won == false) {
        const user = document.querySelector('#wins');
        let text = 0;
        user.innerText = text;
        user.style.display = 'block';
    }

}



