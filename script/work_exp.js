var tbody = document.getElementById('tbody');
var obj = require('../dummy.json');

for (var i = 0; i < Object.keys(obj).length; i++) {
    var tr = "<tr>";
    if (obj[i].value.toString().substring(obj[i].value.toString().indexOf('.'), obj[i].value.toString().length) < 2) obj[i].value += "0";

    tr += "<td>" + obj[i].key + "</td>" + "<td>$" + obj[i].value.toString() + "</td></tr>";
    tbody.innerHTML += tr;
}
