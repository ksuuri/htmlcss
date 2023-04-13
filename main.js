var area = document.getElementById('area');
var cell = document.getElementsByClassName('cell');
var currentPlayer = document.getElementById('curPlyr');
circle = '<svg width="199" height="199" viewBox="0 0 199 199" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_1906_104)"><circle cx="98.4999" cy="98.5" r="77.1667" stroke="url(#paint0_radial_1906_104)" stroke-width="20"/></g><defs><filter id="filter0_d_1906_104" x="0.333252" y="0.333313" width="198.333" height="198.333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="1" dy="1"/><feGaussianBlur stdDeviation="6"/><feColorMatrix type="matrix" values="0 0 0 0 0.420718 0 0 0 0 0.290978 0 0 0 0 0.338156 0 0 0 0.2 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1906_104"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1906_104" result="shape"/></filter><radialGradient id="paint0_radial_1906_104" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(98.4999 98.5) rotate(90) scale(77.1667)"><stop stop-color="#EB0057"/><stop offset="1" stop-color="#E38BAC"/></radialGradient></defs></svg>'
var player = "x";
var stat = {
    'x': 0,
    'o': 0,
    'd': 0
}
var winIndex = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

for(var i = 1; i <= 9; i++) {
    area.innerHTML += "<div class='cell' pos=" + i + "></div>";
}

for (var i = 0; i< cell.length; i++) {
    cell[i].addEventListener('click', cellClick, false);
}

function cellClick() {

    var data = [];
    
    if(!this.innerHTML) {
        this.innerHTML = player;
    }else {
        alert("Ячейка занята");
        return;
    }

    for(var i in cell){
        if(cell[i].innerHTML == player){
            data.push(parseInt(cell[i].getAttribute('pos')));
        }
    }

    if(checkWin(data)) {
        stat[player] += 1;
        restart("Выграл: " + player);
    }else {
        var draw = true;
        for(var i in cell) {
            if(cell[i].innerHTML == '') draw = false;
        }
        if(draw) {
            stat.d += 1;
            restart("Ничья");
        }
    }

    player = player == "x" ? "o" : "x";
    currentPlayer.innerHTML = player.toUpperCase();
}

function checkWin(data) {
    for(var i in winIndex) {
        var win = true;
        for(var j in winIndex[i]) {
            var id = winIndex[i][j];
            var ind = data.indexOf(id);

            if(ind == -1) {
                win = false
            }
        }

        if(win) return true;
    }
    return false;
}

function restart(text) {
    
    alert(text);
    for(var i = 0; i < cell.length; i++) {
        cell[i].innerHTML = '';
    }
    updateStat();
}

function updateStat() {
    document.getElementById('sX').innerHTML = stat.x;
    document.getElementById('sO').innerHTML = stat.o;
    document.getElementById('sD').innerHTML = stat.d;
}