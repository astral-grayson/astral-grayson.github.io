var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/14Ks6Wd6QR0gkshqqvcdSfpr-fCbU4f5SNssG7L7afLM/edit?usp=sharing';

function init() {
  Tabletop.init( { key: publicSpreadsheetUrl,
                   callback: insertData,
                   simpleSheet: true } )
}

function insertData(data, tabletop) {
  data.forEach(function(project) {
    var container = document.getElementById(project["tag"]);
    container.getElementsByTagName("span")[0].innerHTML = project["Name"];
    container.getElementsByTagName("p")[0].innerHTML = project["Content"];
  });
}

window.addEventListener('DOMContentLoaded', init);
