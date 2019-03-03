
var tableData = data;

var tr = d3.select("tr");

tableData.forEach(function(submit) {
    console.log(submit);
});

tableData.forEach(function (submit){
    var row = tr.append("th")
    console.log(row);
});



tableData.forEach((submit) => {
    Object.row(submit).forEach(function([key, value]){
        console.log(key, value);
        var cell = row.append("th");
        cell.text(value);
    })});

var withAppendage = tableData.filter(function(filters) { return filters.type === "withAppendage"; });
console.log(withAppendage);
