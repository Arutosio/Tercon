//// MAIN!!!////////////////////////
// var UName = new ActiveXObject('WScript.Network');
//document.getElementById("PCName").value = UName.UserName;
var screen = "";
//Event Keydown
document.addEventListener("keydown", keyDown);

function keyDown(keyP) {
    if (document.getElementById("cmdLine").value && 13 === (keyP.which || keyP.keyCode))
        startToDo();
}
function startToDo() {
    var cmd = document.getElementById("cmdLine").value;
    document.getElementById("cmdLine").value = "";
    innerLine(cmd);
}
function innerLine(cmd) {
    var line = checkLine(cmd);
    executeCMD(line);
    screen = screen + line +'<br/>';
    document.getElementById("screen").innerHTML = screen;
}
function checkLine(line) {
    line = " " + line;
    //problem: non vengono aggiunti gli elelemnti <> sulla stringa
    line.replace(' info','<strong style="color:red"> info </strong>');
    line.replace(' help','<strong style="color:red"> help </strong>');
    line.replace(' cal ','<strong style="color:red"> cal </strong>');
    return line;
}
function executeCMD(cmdLine) {
    var cmdSplit = makeArray(cmdLine)
    if(cmdLine.indexOf(' info ') !== -1)
        alert('there is! info!!!');
        if(cmdLine.indexOf('> help') !== -1)
        alert('there is! help!!!');
        if(cmdLine.indexOf('> cal') !== -1)
        alert('there is! cal!!!');
}
function makeArray(cmdLine) {
    cmdLine = cmdLine.split(' '); // split string on comma space
    console.log(cmdLine); // [ "apple", "orange", "pear", "banana", "raspberry", "peach" ]
    return cmdLine
}

