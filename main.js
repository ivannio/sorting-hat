console.log("main.js is linked");

const printToDOM = (stringToPrint, divID) => {
  document.getElementById(divID).innerHTML += stringToPrint;
};

const houses = ["Snakeboys", "Bird", "Gryffynndoor", "Hooflepoof"];

const printForm = () => {
  const htmlString = `
      <div class="container card">
            <form>
                <div class="form-group">
                    <h2>Enter First Year's Name</h2>
                    <label for="studentName">Student:</label>
                    <input type="text" class="form-control" id="studentNameInput" placeholder="Henry Putter">
                </div>
                <button type="button" id="sort" class="btn btn-primary">Sort</button>            
            </form>
        </div>`;
  printToDOM(htmlString, "form-zone");
  document.getElementById("jumbotron").className = "d-none";
  document.getElementById("sort").addEventListener("click", () => {
    cardPrinter();
  });
};

document.getElementById("startSorting").addEventListener("click", () => {
  printForm();
});

let printedStudents = [];

const cardPrinter = () => {
  let htmlString = `<div class="col-4">`;
  htmlString += `    
        <div class="card" id="${document.getElementById('studentNameInput').value}">
                <div class="card-body">
                    <h5 class="card-title">${document.getElementById('studentNameInput').value}</h5>
                    <p class="card-text">${
                      houses[Math.floor(Math.random() * 4)]
                    }</p>
                    <a href="#" class="btn btn-primary" id="${document.getElementById('studentNameInput').value}-expel">expel</a>
                </div>
        </div>
      `;
  htmlString += `</div>`;
  printToDOM(htmlString, "card-zone");  
  document.getElementById('studentNameInput').value = '';
  
};

const expel = () = {
  // Get back to this later
}


