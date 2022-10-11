let xOrY = "X";

const start = () => {
    if (document.getElementById("menuButton")) {
        refresh()
        menu()
    }
    else
        menu()
}

const menu = () => {
    createLevel();
}

const refresh = () => {
    const element = document.getElementById("menuButton");
    element.remove();
}

const createLevel = () => {

    const d1 = document.createElement("div");
    d1.setAttribute("id", "d1");

    const d2 = document.createElement("div");
    d2.setAttribute("id", "d2");

    const d3 = document.createElement("div");
    d3.setAttribute("id", "d3");

    const d4 = document.createElement("div");
    d4.setAttribute("id", "d4");

    const d5 = document.createElement("div");
    d5.setAttribute("id", "d5");

    const d6 = document.createElement("div");
    d6.setAttribute("id", "d6");

    const d7 = document.createElement("div");
    d7.setAttribute("id", "d7");

    const d8 = document.createElement("div");
    d8.setAttribute("id", "d8");

    const d9 = document.createElement("div");
    d9.setAttribute("id", "d9");


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

    for (const roundCount = 1; roundCount <= 9; roundCount++) {
        if (xOrY === "X") {
            witchPlayer.innerText = `Runda: ${roundCount}\nRuch gracza: ${xOrY}`;
        }
        else {
            witchPlayer.innerText = `Runda: ${roundCount}\nRuch gracza: ${xOrY}`;
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

    const witchPlayer = document.getElementById("round");
    let roundCount = 1;
    witchPlayer.innerText = `Runda: ${roundCount}\nRuch gracza: ${xOrY}`;

        divArray.forEach(div => {
            div.addEventListener('click', (useBlock) => {
                roundCount++;
                if (div.innerHTML === "") {
                    document.getElementById(div.id).style.cursor = "no-drop";
                    
                    if (xOrY == "X") {
                        document.getElementById(div.id).innerText = xOrY;
                        xOrY = "Y";
                    } else {
                        document.getElementById(div.id).innerText = xOrY;
                        xOrY = "X";
                    }
                }
                witchPlayer.innerText = `Runda: ${roundCount}\nRuch gracza: ${xOrY}`;
            })
        })
}