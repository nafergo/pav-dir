// Sheetrock.js 1.0 Example 1
// https://chriszarate.github.io/sheetrock/

// The most basic use case of Sheetrock simply fetches the an 
// entire worksheet and loads it into a <table>.

// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1zcf8HFaI2WesW-NkawO0g6pSrg4B8R5uH1l8oMI0K-I/edit#gid=0';

// Load an entire worksheet.
$('#statistics').sheetrock({
  url: mySpreadsheet
});
