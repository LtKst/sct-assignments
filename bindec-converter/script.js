var byteValue = document.getElementById("byteValue");
var decimalValue = document.getElementById("decimalValue");
var hexadecimalValue = document.getElementById("hexadecimalValue");

function Update(changedFrom) {
    if (byteValue.value != "") {
        decimalValue.value = parseInt(byteValue.value, 2);
        hexadecimalValue.value = byteToHex(decimalValue.value);
    }
    else {
        decimalValue.value = "";
        hexadecimalValue.value = "";
    }
}

function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}

var hexChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

function byteToHex(b) {
    return hexChar[(b >> 4) & 0x0f] + hexChar[b & 0x0f];
}
