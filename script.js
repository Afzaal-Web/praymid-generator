let character = document.getElementById("symbol");

let totalRowsInput = document.getElementById("count");
let resultSection = document.getElementById("result");
let generateButton = document.getElementById("generateBtn");
let checkBox = document.getElementById("invertToggle");

generateButton.addEventListener('click', generatePyramid);
checkBox.addEventListener('change', generatePyramid);


function generatePyramid() {

  let totalRows = parseInt(totalRowsInput.value);
let symbol = character.value;
  if (totalRows > 12 || totalRows < 3 || isNaN(totalRows)) {
    resultSection.innerText = "Rows must be between 3 and 12";
 
  }
else if(symbol.trim() == ''){
     resultSection.innerText = "Please add symbol";
}
  else {
    const rows = [];
    let isChecked = checkBox.checked;
    for (let i = 1; i <= totalRows; i++) {
      if (isChecked) {
        rows.unshift(padRow(i, totalRows));
      }
      else {
        rows.push(padRow(i, totalRows));
      }
    }

    let output = "";
    for (const row of rows) {
      output = output + "\n" + row;
    }
    resultSection.innerText = output;

  }
  function padRow(rowNumber, rowCount) {
    let symbol = character.value;
    return " ".repeat(rowCount - rowNumber) + symbol.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
  }
}



character.addEventListener('keydown', e => {
  if (e.key === 'Enter') generatePyramid();
});

