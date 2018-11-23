//// MAIN!!!////////////////////////
// var UName = new ActiveXObject('WScript.Network');
//document.getElementById("PCName").value = UName.UserName;
var screen = "";
//Event Keydown
document.addEventListener("keydown", keyDown);
function keyDown(keyP) {
    if (document.getElementById("cmdLine").value && 13 === (keyP.which || keyP.keyCode))
        executeCMD();
}
function executeCMD() {
    var cmd = document.getElementById("cmdLine");
    innerLine(cmd);
    cmd.value = "";
}
function innerLine(cmd) {
    var line = checkLine(cmd.value);
    line = checkLine(line)
    line = line +'<br/>';
    screen = screen + line;
    document.getElementById("screen").innerHTML = screen;
}
function checkLine(line) {
    line = " " + line;
    line.replace(' sudo ','<strong style="color:red"> sudo </strong>');
    line.replace(' sudo ','<strong style=\'color:red\'> sudo </strong>');
    line.replace(' sudo ',"<strong style='color:red'> sudo </strong>");

    return line;
}

