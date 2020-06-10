var orderId;
var elems = document.querySelectorAll('[id^="addButton_"]');
var menu;

$(document).ready(function () {
    console.log("ready!");
    if (orderId == null) {
        for (var i = 0; i < elems.length; i++) {
            elems[i].disabled = true;
        }
    }
    else {
        document.getElementById("orderButton").style.display = 'none';
    }
    $.ajax({
        type: 'GET',
        contentType: "application/json",
        url: '/Home/Menu',
        success: setUpMenu,
        error: errorOnAjax
    });
});

function setUpMenu(data) {
    menu = JSON.parse(data);
}

function show(title) {
    var addTask = document.getElementById(title);
    var displaySetting = addTask.style.display;

    if (displaySetting == 'block') {
        addTask.style.display = 'none';
    }

    else {
        addTask.style.display = 'block';
    }
}

function makeOrder() {
    var userName = document.getElementById("userName").innerText;
    var currentDate = new Date().toLocaleString();

    var dataSend = JSON.stringify({
        'Table_ID': userName,
        'OrderTime': currentDate,
        'Active': 1
    });
    $.ajax({
        type: 'POST',
        data: dataSend,
        contentType: "application/json",
        url: '/Orders/CreateOrder',
        success: storeOrder,
        error: errorOnAjax
    });
}

function storeOrder(data) {
    orderId = data;

    document.getElementById("orderButton").style.display = 'none';
    document.getElementById("orderMenu").style.display = 'block';

    for (var i = 0; i < elems.length; i++) {
        elems[i].disabled = false;
    }
}

function errorOnAjax() {
    console.log('Error on AJAX Return');
}

function add(foodTitle, price) {
    var table = document.getElementById("tableOrder");
    var row = table.insertRow(0);

    row.id = foodTitle;

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell2.id = "comment" + foodTitle;

    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = menu[foodTitle - 1];
    cell2.innerHTML = "Comment";
    cell3.innerHTML = "<button onclick=\"editItem(" + foodTitle + ")\">edit</button>";
    cell4.innerHTML = "<button onclick=\"deleteItem(this)\">delete</button>"
    cell5.innerHTML = price;

    var currentPrice = document.getElementById("price").innerHTML;
    document.getElementById("price").innerHTML = +currentPrice + +price;
 
}

function editItem(id){
 var tdObj = document.getElementById("comment" + id)
    var preText = tdObj.textContent.trim();
    var inputObj = $("<input class=\"form-control\" type=\"text\" maxlength=\"1000\" />");
    tdObj.textContent = "";
    inputObj.val(preText).appendTo(tdObj).trigger("focus").trigger("select");
    inputObj.keyup(function (event) {
        if (13 == event.which) { // press ENTER-key
            var text = $(this).val();
            tdObj.textContent = text;
        }
        else if (27 == event.which) {  // press ESC-key
            tdObj.textContent = preText;
        }
    });
    inputObj.click(function () {
        return false;
    });
}

function deleteItem(btn) {
    var row = btn.parentNode.parentNode;
    var price = row.cells[4].innerHTML
    var currentPrice = document.getElementById("price").innerHTML;
    document.getElementById("price").innerHTML = +currentPrice - +price;
    row.parentNode.removeChild(row);
}

function openNav() {
    var width = document.getElementById("mySidepanel").style.width;
    if (width == "0px") {
        document.getElementById("mySidepanel").style.width = "350px";
    }
    else {
        document.getElementById("mySidepanel").style.width = "0px";
    }
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}