
// QUIZZ

const questions =
[
    {
        'que':"What does HTML stand for?",
        'a':"Home Tool Markup Language",
        'b':"Hyperlinks and Text Markup language",
        'c':"Hyper Text Markup Language",
        'd':"None of them",
        'correct': "c"

    },
    {
        'que':"What is the correct HTML element for inserting a line break?",
        'a':"<break>",
        'b':"<br>",
        'c':"<lb>",
        'd':"None of them",
        'correct': "b"

    },
    {
        'que':"Choose the correct HTML element to define important text",
        'a':"<important>",
        'b':"<i>",
        'c':"<b>",
        'd':"<strong>",
        'correct': "a"

    },
    {
        'que':"Choose the correct HTML element to define emphasized text",
        'a':"<italic>",
        'b':"<i>",
        'c':"<em>",
        'd':"None of them",
        'correct': "c"

    },
    {
        'que':"Which character is used to indicate an end tag?",
        'a':"^",
        'b':"*",
        'c':"/",
        'd':"<",
        'correct': "c",

    }



]


let index =0;
let total = questions.length;
let right = 0,
    wrong = 0;

const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () =>{
    if(index === total){
        return endQuiz()
    }
    reset();
    const data = questions[index]
    quesBox.innerText =  `${index+1}) ${data.que} `;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;

 }
 const submitQuiz = () =>{
    
    const data = questions[index]
    const ans = getAnswer()
    if(ans == data.correct){
        right++;

    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
 }

 const getAnswer=() =>{
    let answer;
    // const optionInputs = document.querySelectorAll('.options')
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer = input.value
             }
            
        }
    )
    return answer;

 }
 const reset=() =>{
    optionInputs.forEach(
        (input) => {
            input.checked = false;
            
        }
    )

 } 

 const endQuiz = () =>{
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h3>Thanks!!</h3>
    <h2>${right} / ${total} are correct</h2>
    </div>
    `

 }

 loadQuestion();