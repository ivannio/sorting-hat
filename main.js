console.log("main.js is linked");

const printToDOM = (stringToPrint, divID) => {
  document.getElementById(divID).innerHTML = stringToPrint;
};

const houses = ["Snakeboys", "Bird", "Griffindoor", "Hooflepoof"];

const printForm = () => {
  const htmlString = `
      <div class="container card">
            <form>
                <div class="form-group">
                    <h2>Enter First Year's Name</h2>
                    <label for="studentName">Student:</label>
                    <input type="text" class="form-control" id="studentNameInput" placeholder="Henry Putter">
                </div>
                <button type="submit" class="btn btn-primary">Sort</button>            
            </form>
        </div>`;
    printToDOM(htmlString, "form-zone");
    document.getElementById("jumbotron").className = "d-none";
};

document.getElementById('startSorting').addEventListener('click', () => {
    printForm();
})

// const cardPrinter = () => {


// }





// Math.floor(Math.random() * 4);
