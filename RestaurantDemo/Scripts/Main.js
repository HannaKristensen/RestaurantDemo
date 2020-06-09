var orderId;
var elems = document.querySelectorAll('[id^="addButton_"]');

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
});

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
    for (var i = 0; i < elems.length; i++) {
        elems[i].disabled = false;
    }
}

function errorOnAjax() {
    console.log('Error on AJAX Return');
}

function add(foodTitle) {
}