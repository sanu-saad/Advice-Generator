let span = document.querySelector("span");
let advice = document.querySelector("h3");
let button = document.getElementById("btn-Next");
let sound = document.getElementById("btn-sound");


const newAdvice = async () => {
    await fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((result) => {
        advice.innerText = result.slip.advice;
        span.innerText++  
    }); 
}

button.addEventListener("click", () =>{
    newAdvice();
});

sound.addEventListener("click", () =>{
    let utterance = new SpeechSynthesisUtterance(`${advice.innerText}`);
    speechSynthesis.speak(utterance);
})
