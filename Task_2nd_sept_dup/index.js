
const arr = [];
var arrLen = arr.length;
count = 0


function result() {
    return false
}


function data() {
    var fullname = document.getElementById('name').value;
    var fatherName = document.getElementById('fname').value;
    var motherName = document.getElementById('mname').value;
    var gender=document.getElementById("gender").value;
    var qualification = document.getElementById('edu').value;
    var technology = document.getElementById("technology").value;
    var address= document.getElementById("address").value;

    var obj = new addPerson(fullname,fatherName,motherName,gender,qualification,technology,address)

    arr.push(obj)
    console.log(arr)

}

function getData() {
    var table = "<table border='1|1'>";
    table += "<thead> <th>Full name</th> <th>Father Name</th> <th>Mother Name</th> \
    <th>Gender</th> <th>Qualification</th> <th>Technology</th> <th> Address </th> </thead>"

    for (i = 0; i < arr.length; i++) {
        table += "<tr>";
        table += "<td>" + arr[i].fullname + "</td>";
        table += "<td>" + arr[i].fatherName + "</td>";
        table += "<td>" + arr[i].motherName + "</td>";
        table += "<td>" + arr[i].gender + "</td>";
        table += "<td>" + arr[i].qualification + "</td>";
        table += "<td>" + arr[i].technology + "</td>";
        table += "<td>" + arr[i].address + "</td>";
        table += "</tr>";
    }

    table += "</table>";

    document.getElementById("myTable").innerHTML = table;
}