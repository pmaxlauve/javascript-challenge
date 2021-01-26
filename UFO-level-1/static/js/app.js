// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("#init-table");

var tbodyFiltered = d3.select("#filtered-table")

var button = d3.select("#filter-btn");

var form = d3.select("#form");

 
button.on("click", runEnter);
form.on("submit", runEnter);


function createTable(selectData) {
    tbody.html("");

    selectData.forEach(function(entry) {
        
        var row = tbody.append("tr");
        Object.entries(entry).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });    
    
};



createTable(tableData);



function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    let filteredData = tableData;

    if (inputValue) {
        filteredData = tableData.filter(sighting => sighting.datetime ===inputValue);
    };
  
    
    
    createTable(filteredData);

  };
