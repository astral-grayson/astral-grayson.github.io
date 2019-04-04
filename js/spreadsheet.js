var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/14Ks6Wd6QR0gkshqqvcdSfpr-fCbU4f5SNssG7L7afLM/edit?usp=sharing';

function init() {
  // populate projects
  Tabletop.init( { key: publicSpreadsheetUrl,
                   callback: insertData,
                   simpleSheet: true } );

  // make age correct
  var date = new Date();
  if (date.getMonth() < 4) {
    document.getElementById("age").innerHTML = date.getFullYear() - 2001;
  }
  else {
    document.getElementById("age").innerHTML = date.getFullYear() - 2000;                
  }
}

function insertData(data, tabletop) {
  data.forEach(function(project) {
    var container = document.getElementById(project["tag"]);
    container.getElementsByTagName("span")[0].innerHTML = project["Name"];
    container.getElementsByTagName("p")[0].innerHTML = project["Content"];
  });
}

window.addEventListener('DOMContentLoaded', init);
