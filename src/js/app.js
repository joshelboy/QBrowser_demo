function BarcodeData(barcode, type, typeText) {
    //PrintOutput("Type(" + type + "):" + typeText + " Barcode: " + barcode + "<br/>")
    //document.body.innerHTML += type + "<br/>";
    //document.body.innerHTML += typeText + "<br/>";
    //document.body.innerHTML += barcode + "<br/>";
    document.getElementById("type").innerHTML = type;
    document.getElementById("typeText").innerHTML = typeText;
    document.getElementById("barcode").innerHTML = barcode;
    document.getElementById("barcodeField_automatic").value = barcode;
    QBrowser.Notify.vibrate();
}

function BarcodeStatus(info)
{
    if (info.connected)
    document.body.innerHTML += "Connected barcode reader <b>" + info.name + " " + info.version + "</b>";
    else
    document.body.innerHTML += "Barcode reader disconnected<br/>";
}

function BatteryLevel(){
    let battery = QBrowser.Settings.getBatteryLevel();
    document.getElementById("battery").innerHTML = battery;
    
}

window.onload = function() {
    BatteryLevel();
}