function getReadyTables() {
    const readyTables = []
    for (let i = 0; i < 2; i++) {
        readyTables.push(Math.round(Math.random()*20) + 1)
    }
    return readyTables
}

function displayTables(){
    const nowServingTables = getReadyTables();
    nowServingTables.map((table) => {
        tables.innerHTML += `<div class="table">${table}</div>`;
    })
}
displayTables();