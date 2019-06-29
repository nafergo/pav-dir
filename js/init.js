// Sheetrock.js 1.0 Example 4
// https://chriszarate.github.io/sheetrock/

// Let’s group some data. For a more straightforward template, we’ll 
// specify the labels we want Sheetrock to use when it returns the 
// data using the labels option.

// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1qT1LyvoAcb0HTsi2rHBltBVpUBumAUzT__rhMvrz5Rk/edit#gid=0';

// Compile Handlebars template for team RBI leaders.
var RBITemplate = Handlebars.compile($('#team-rbi-template').html());

// Load top five team RBI leaders.
$('#team-rbi').sheetrock({
  url: mySpreadsheet,
  sql: "select A,sum(J) group by A order by sum(J) desc",
  chunkSize: 5,
  labels: ['TeamName', 'TeamRBI'],
  rowHandler: RBITemplate
});
