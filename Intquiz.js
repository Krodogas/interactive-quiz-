function StartQuiz() {
    document.getElementById('buttonStart').hidden=true;
    document.getElementById('question').innerHTML= "What does HTML stand for? <br> <button onclick=q2()>Hyper Text Markup Language</button> <button onclick=wrongAns()>Hyperlinks and Text Markup Language</button>"
}
function wrongAns() {
    alert("Oops wrong answer, please try again!")
}
function q2() {
    document.getElementById('question').innerHTML = "Which type of loop is based on a condition?<br> <button onclick=q3()>while loop</button> <button onclick=wrongAns()>for loop</button>"
}
function q3() {
    document.getElementById('question').innerHTML = "Which of the following is a programming language?<br> <button onclick=q4()>JAVA</button> <button onclick=wrongAns()>JPEG</button>"
}
function q4() {
    document.getElementById('question').innerHTML = "What is the oldest place in the Pholippines?<br> <button onclick=q5()>Cebu</button> <button onclick=wrongAns()>Manila</button>"
}
function q5() {
    document.getElementById('question').innerHTML = "What does CSS stand for? <br> <button onclick=q6()>Cascading Style Sheets </button> <button onclick=wrongAns()>Creative Style Sheets</button>"
}
