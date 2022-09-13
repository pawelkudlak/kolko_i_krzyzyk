const start = () => {
    if (document.getElementById("menuButton")) {
        refresh()
        menu()
    }
    else
        menu()
}

const menu = () => {
    // const menu = document.createElement("div");
    // menu.setAttribute("id", "menuButton");
    // const textMenu = document.createTextNode("Hello in New Game");

    // menu.appendChild(textMenu);

    // document.getElementById("mainDiv").appendChild(menu);
    createLevel();
    // roundXO();
}

const refresh = () => {
    const element = document.getElementById("menuButton");
    element.remove();
}

const createLevel = () => {
    const d1 = document.createElement("div");
    d1.setAttribute("id", "d1");
    // d1.addEventListener('click', click);
    const d2 = document.createElement("div");
    d2.setAttribute("id", "d2");
    // d2.addEventListener('click', click);
    const d3 = document.createElement("div");
    d3.setAttribute("id", "d3");
    // d3.addEventListener('click', click);
    const d4 = document.createElement("div");
    d4.setAttribute("id", "d4");
    // d4.addEventListener('click', click);
    const d5 = document.createElement("div");
    d5.setAttribute("id", "d5");
    // d5.addEventListener('click', click);
    const d6 = document.createElement("div");
    d6.setAttribute("id", "d6");
    // d6.addEventListener('click', click);
    const d7 = document.createElement("div");
    d7.setAttribute("id", "d7");
    // d7.addEventListener('click', click);
    const d8 = document.createElement("div");
    d8.setAttribute("id", "d8");
    // d8.addEventListener('click', click);
    const d9 = document.createElement("div");
    d9.setAttribute("id", "d9");
    // d9.addEventListener('click', click);

    document.getElementById("mainDiv").appendChild(d1);
    document.getElementById("mainDiv").appendChild(d2);
    document.getElementById("mainDiv").appendChild(d3);

    document.getElementById("mainDiv").appendChild(d4);
    document.getElementById("mainDiv").appendChild(d5);
    document.getElementById("mainDiv").appendChild(d6);

    document.getElementById("mainDiv").appendChild(d7);
    document.getElementById("mainDiv").appendChild(d8);
    document.getElementById("mainDiv").appendChild(d9);

    click();
}

const roundXO = () => {
    const witchPlayer = document.getElementById("round");
    const roundCount = 1;
    const player = "X";

    for (roundCount; roundCount <= 8; roundCount++) {
        if (player === "X") {
            witchPlayer.innerText = `Runda: ${roundCount}\nRuch gracza: ${player}`;
            player = "Y";
        }
        else {
            witchPlayer.innerText = `Runda: ${roundCount}\nRuch gracza: ${player}`;
            player = "X";
        }
    }
}

const click = () => {
    const d1 = document.querySelector('#d1');
    const d2 = document.querySelector('#d2');
    const d3 = document.querySelector('#d3');
    const d4 = document.querySelector('#d4');
    const d5 = document.querySelector('#d5');
    const d6 = document.querySelector('#d6');
    const d7 = document.querySelector('#d7');
    const d8 = document.querySelector('#d8');
    const d9 = document.querySelector('#d9');

    const divArray = [d1, d2, d3, d4, d5, d6, d7, d8, d9];

    divArray.forEach(div => {
        div.addEventListener('click', (useBlock) => {
            document.getElementById(div.id).style.cursor="no-drop";
        })
    })
}