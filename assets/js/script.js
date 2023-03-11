// docstring
/* runs runGame() after loading body.
<body onload="runGame();">
*/

/** 
 * Hides not relavent elements - initial screen
 */
function runGame () {
    // initial style
    document.getElementById('image').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('reset').style.display = 'none';
}
