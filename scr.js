
window.onload = function() {
    document.getElementById("my-btn").addEventListener("click", myFunction);
    document.getElementById("cellsInRow").addEventListener("change", changeCells);
    this.changeCells();
    this.clearBoard(document.getElementById("cellsInRow").value);
}


function myFunction() {
    // alert("Works!");
    let algorithmObj = document.getElementById("algorithms");
    let algorithm = algorithmObj.options[algorithmObj.selectedIndex].value;
    let cellsInRow = document.getElementById("cellsInRow").value;
    let board = document.getElementById("boardContainer");
    board.style.width = (board.clientWidth - board.clientWidth % cellsInRow) + 'px';
    board.style.height = board.style.width;

    switch(algorithm) {
        case 'first':
            firstAlgorithm(cellsInRow);
            break;
        case 'second':
            secondAlgorithm(cellsInRow);
            break;
        default:
            alert('cheating :)');
            break;
    }

}

function firstAlgorithm(cellsInRow) {
    // some logics and structures here (algorithm)

    // example result:
    let result = new Array(Number(cellsInRow)); 
    for (let i = 0; i < result.length; ++i) { 
        result[i] = new Array(Number(cellsInRow)); 
    } 
    for (let i = 0; i < result.length; ++i) {
        for (let j = 0; j < result.length; ++j) {
            result[i][j] = Math.round(Math.random()); // 0 or 1
        } 
    }

    // show info
    let info = document.getElementById('info');
    info.textContent = "The first algorithm was implemented";
    
    clearBoard(cellsInRow);
    
    let board = document.getElementById("boardContainer");
    for (let i = 0; i < result.length; ++i) {
        for (let j = 0; j < result.length; ++j) {
            if (result[i][j] == 1) {
                let img = new Image();
                img.src = "img/queen.png";
                img.width = board.clientWidth / cellsInRow;
                img.height = board.clientHeight / cellsInRow;
                img.style.left = img.width * i + 'px';
                img.style.top = img.height * j + 'px';
                board.appendChild(img);
            }
        } 
    }
   
}
function secondAlgorithm(cellsInRow) {
    // another logics and structures here (algorithm)

    // example result:
    let result = new Array(Number(cellsInRow)); 
    for (let i = 0; i < result.length; ++i) { 
        result[i] = new Array(Number(cellsInRow)); 
    } 
    for (let i = 0; i < result.length; ++i) {
        for (let j = 0; j < result.length; ++j) {
            result[i][j] = Math.round(Math.random()); // 0 or 1
        } 
    }

    // show info
    let info = document.getElementById('info');
    info.textContent = "The second algorithm was implemented";
    
    clearBoard(cellsInRow);
 
    let board = document.getElementById("boardContainer");
    for (let i = 0; i < result.length; ++i) {
        for (let j = 0; j < result.length; ++j) {
            if (result[i][j] == 1) {
                let img = new Image();
                img.src = "img/queen.png";
                img.width = board.clientWidth / cellsInRow;
                img.height = board.clientHeight / cellsInRow;
                img.style.left = img.width * i + 'px';
                img.style.top = img.height * j + 'px';
                board.appendChild(img);
            }
        } 
    }
}

function clearBoard(cellsInRow) {
    var board = document.getElementById("boardContainer");
    while (board.hasChildNodes()) {
        board.removeChild(board.childNodes[0]);
    }
    createBoard(cellsInRow);
}

function changeCells() {
    document.getElementById("cellsInRowInfo").value = document.getElementById("cellsInRow").value;
}

function createBoard(cellsInRow) {
    let board = document.getElementById("boardContainer");
    board.style.width = (board.clientWidth - board.clientWidth % cellsInRow) + 'px';
    board.style.height = board.style.width;
    for (let i = 0; i < cellsInRow; ++i) {
        for (let j = 0; j < cellsInRow; ++j) {
            let img = new Image();
            if ((i + j) % 2 == 1) {
                img.src = "img/black.png";
            } else {
                img.src = "img/white.jpg";
            }
            img.width = board.clientWidth / cellsInRow;
            img.height = board.clientHeight / cellsInRow;
            img.style.left = img.width * i + 'px';
            img.style.top = img.height * j + 'px';
            board.appendChild(img);
        } 
    }
}