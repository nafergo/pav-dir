// Sheetrock.js 1.0 Example 4
// https://chriszarate.github.io/sheetrock/

// Let’s group some data. For a more straightforward template, we’ll 
// specify the labels we want Sheetrock to use when it returns the 
// data using the labels option.

// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1qT1LyvoAcb0HTsi2rHBltBVpUBumAUzT__rhMvrz5Rk/edit#gid=0';

// Compile Handlebars template for team RBI leaders.
var PhotogrammetryTemplate = Handlebars.compile($('#photogrammetry-template').html());

// Load top five team RBI leaders.
$('#photogrammetry').sheetrock({
  url: mySpreadsheet,
  sql: "select A,E,N order by N desc",
  chunkSize: 5,
  labels: ['Title', 'Photogrammetry'],
  rowHandler: PhotogrammetryTemplate
});
