////////////////// MAIN!!!////////////////////////
document.getElementById('PCName').setAttribute('name','User:Testing=§');
var PCName = document.getElementById('PCName').getAttribute('name');
var cmdList = ['info', 'help', 'cal'];
var screen = "";

/////////Event/////////
document.addEventListener("keydown", keyDown);

///////Function////////
function keyDown(keyP) {
    if (document.getElementById("cmdLine").value && 13 === (keyP.which || keyP.keyCode))
        startToDo();
}
//F--keyDown()__startToDo() 
function startToDo() {
    var cmd = document.getElementById("cmdLine").value;
    document.getElementById("cmdLine").value = "";
    innerLine(cmd);
}
//F--startToDo()__innerLine()=>checkLine()
function innerLine(cmd) {  //\=>executeCMD()
    var line = checkLine(cmd);
    executeCMD(line);
    screen = screen + PCName + line + '<br/>';
    document.getElementById("screen").innerHTML = screen;
}
//F--checkLine()X
function checkLine(line) {
    line = " " + line;
    //problem: non vengono aggiunti gli elelemnti <> sulla stringa
    line.replace(' info', '<strong style="color:red"> info </strong>');
    line.replace(' help', '<strong style="color:red"> help </strong>');
    line.replace(' cal ', '<strong style="color:red"> cal </strong>');
    return line;
}
//F--innerLine()__makeArray()<return 
function executeCMD(cmdLine) {
    var cmdSplit = makeArray(cmdLine)
    switch (cmdSplit.length) {
        case 2:
            switch (cmdSplit[1]) {
                case "info":
                    alert('test case  Info!');
                    break;
                case "help":
                    alert('test case  HELP!');
                    break;
                default:
                    cmdSplit = 'Error: command not found.'
                    break;
            }
            break;
        case 4:
            switch (cmdSplit[1]) {
                case "?2?":
                    alert('test case  ?2?!');
                    break;
                default:
                    cmdSplit = 'Error: command not found.'
                    break;
            }
            break;
        default:
            switch (cmdSplit[1]) {
                case "???":
                    alert('test case  Info!');
                    break;
                default:
                    cmdSplit = 'Error: command not found.'
                    break;
            }
            break;
    }
    return cmdSplit;
}
//F--executeCMD()__makeArray()<return
function makeArray(cmdLine) {
    cmdLine = cmdLine.split(' '); // split string on space
    return cmdLine;
}
