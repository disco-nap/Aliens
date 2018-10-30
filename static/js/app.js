// from data.js
var tableData = data;

// YOUR CODE HERE!
// Console.log the UFO sightings data table
console.log(data);

// Get a reference to the table body
var tbody = d3.select("tbody");

// append a row to the table for each object
// fill in each row with values from each object using cell.text
data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
  

  // Select the filter button
var submit = d3.select("filter-btn");

// create function that filters by date field
// replace the above appending of data value to only match objects with that date

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
  
    var filteredData = data.filter(sighting => sighting.datetime === inputValue);
  
    console.log(filteredData);

});
  

