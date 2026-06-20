const words = [
    "ECE Engineer",
    "Front-End Developer",
    "Web Designer",
    "AI Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;

const typingText =
document.getElementById("typing-text");

function typeEffect(){

    if(charIndex < words[wordIndex].length){

        typingText.textContent +=
        words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }else{

        setTimeout(eraseEffect,1500);
    }
}

function eraseEffect(){

    if(charIndex > 0){

        typingText.textContent =
        words[wordIndex].substring(
            0,
            charIndex - 1
        );

        charIndex--;

        setTimeout(eraseEffect,50);

    }else{

        wordIndex++;

        if(wordIndex >= words.length){

            wordIndex = 0;
        }

        setTimeout(typeEffect,500);
    }
}

typeEffect();

const voiceBtn =
document.getElementById("voice-btn");

voiceBtn.addEventListener("click",()=>{

const speech =
new SpeechSynthesisUtterance(

"Hello, I'm Bhanu Prakash. A Final Year Electronics and Communication Engineering student at Sree Venkateswara College of Engineering. I'm passionate about Web Design, Front End Development, and creating modern digital experiences. Welcome to my portfolio."

);

speech.lang="en-US";

window.speechSynthesis.speak(speech);

});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const loader =
document.getElementById("loader");

const text = "THE BHANU";
const target = document.getElementById("loaderText");

let i = 0;

const roles = [
"Creative Developer",
"AI Enthusiast",
"ECE Engineer",
"Web Designer"
];

let roleIndex = 0;

const roleElement =
document.getElementById("changingRole");

setInterval(()=>{

roleIndex++;

if(roleIndex >= roles.length){
roleIndex = 0;
}

roleElement.textContent =
roles[roleIndex];

},1200);

function typeLoaderName() {

    if(i < text.length){

        target.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeLoaderName,120);

    }

}

setTimeout(()=>{


},2100);

setTimeout(()=>{

loader.classList.add("fade-out");

},4200);

setTimeout(typeLoaderName,1200);


window.addEventListener("load",()=>{



setTimeout(()=>{

loader.classList.add("fade-out");

setTimeout(()=>{

loader.remove();

},800);

},2300);

});

const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

    reveals.forEach((item)=>{

        const top=item.getBoundingClientRect().top;

        if(top<window.innerHeight-100){

            item.classList.add("active");

        }

    });

});

const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";
    glow.style.top=e.clientY+"px";

});
