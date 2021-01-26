// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("#init-table");

var tbodyFiltered = d3.select("#filtered-table")

var button = d3.select("#filter-btn");

var form = d3.select("#form");

 
button.on("click", runEnter);
form.on("submit", runEnter);


function init() {
    tableData.forEach(function(entry) {
        console.log(entry);
        var row = tbody.append("tr");
        Object.entries(entry).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });    
    
};




init();

function updateTable() {
    tbody.remove('tr');

    filteredData.forEach(function(entry) {
        var row = tbodyFiltered.append("tr");
        Object.entries(entry).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });  
    
};

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
  
    filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    
    updateTable();

  };
