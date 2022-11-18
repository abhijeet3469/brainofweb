function makeTable() {
  let table = document.getElementById("table");
  let rows = document.getElementById("rows").value;
  let cols = document.getElementById("cols").value;


  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    let tr = document.createElement("tr");
    for (let colIndex = 0; colIndex < cols; colIndex++) {
      let td = document.createElement("td");
      let text = document.createTextNode("Box" + colIndex);
      td.appendChild(text);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

document.getElementById("make").addEventListener("click", makeTable);
