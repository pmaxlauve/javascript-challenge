// from data.js
var tableData = data;

// YOUR CODE HERE!


// set up variables
// tbody to reference HTML location where the table body goes 
var tbody = d3.select("#init-table");
// button to reference HTML location where the button goes
var button = d3.select("#filter-btn");
// form to reference HTML location where the form goes
var form = d3.select("#form");

 // create events that activate the runEnter()
button.on("click", runEnter);
form.on("submit", runEnter);

//Create funciton to build the table
function createTable(selectData) {
    //clear tbody
    tbody.html("");

    //use another function to build the table
    selectData.forEach(function(entry) {
        
        //append rows based on the length of the dataset
        var row = tbody.append("tr");
        //assign data to cells
        Object.entries(entry).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });    
    
};


//run the full dataset when page initially loads
createTable(tableData);


// create function to filter data when event is triggered
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    
    let filteredData = tableData;

    // filter the data based on the input value
    if (inputValue) {
        filteredData = tableData.filter(sighting => sighting.datetime ===inputValue);
    };
  
    
    //run createTable() with filteredData
    createTable(filteredData);

  };
