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


    
    const videoModal =
    document.getElementById("video-modal");

    const introVideo =
    document.getElementById("intro-video");

    if(videoModal && introVideo){

        videoModal.classList.add("show");

        introVideo.currentTime = 0;

        introVideo.play();

    }

});

const introVideo =
document.getElementById("intro-video");

if(introVideo){

  introVideo.addEventListener("ended",()=>{

 
    setTimeout(()=>{

        document
        .getElementById("video-modal")
        .classList
        .remove("show");

     
    });

});

}

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



const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";
    glow.style.top=e.clientY+"px";

});

/* =========================
   STATS COUNTER
========================= */

const counters =
document.querySelectorAll(".counter");

const statsSection =
document.querySelector(".stats");

let started = false;

window.addEventListener("scroll",()=>{

if(started) return;

const top =
statsSection.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

started = true;

counters.forEach(counter=>{

const target =
+counter.getAttribute("data-target");

let count = 0;

const updateCounter = ()=>{

const increment =
target / 50;

if(count < target){

count += increment;

counter.innerText =
Math.ceil(count) + "+";

requestAnimationFrame(updateCounter);

}else{

counter.innerText =
target + "+";

}

};

updateCounter();

});

}

});

const progressBars = document.querySelectorAll(".progress-fill");

const progressObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }
    });
});

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});

/*
const themeToggle =
document.getElementById("theme-toggle");

themeToggle.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

});
*/

const aiBtn = document.getElementById("bhanu-ai-btn");
const aiPopup = document.getElementById("bhanu-ai-popup");

aiBtn.addEventListener("click", () => {

    if(aiPopup.style.display === "block"){
        aiPopup.style.display = "none";
    } else {
        aiPopup.style.display = "block";
    }

});


const aiButtons = document.querySelectorAll(".ai-suggestions button");
const aiResponse = document.getElementById("ai-response");

const answers = {

"👨‍💻 Who is Bhanu?":
"Bhanu Prakash Is An ECE Student, Frontend Developer and AI Enthusiast Passionate About Building Modern Websites and Smart AI Projects.",

"⚡ Skills":
"HTML, CSS, JavaScript, Responsive Design, AI Tools, GitHub, Frontend Development And UI/UX Design.",

"🚀 Projects":
"Portfolio Website, Student Reminder App, AI Assistant Integration And Multiple Academic Projects.",

"🎓 Education":
"B.Tech ECE Student At Sree Venkateswara Engineering College.",

"📜 Certifications":
"AICTE, EduSkills, Java Full Stack, Python Full Stack And Various Technology Certifications.",

"📄 Resume":
"You Can Download Bhanu's Resume From The Resume Section.",

"📞 Contact":
"Reach Bhanu Through The Contact Section Available On This Portfolio.",

"💻 GitHub":
"Explore Bhanu's Projects And Repositories Through GitHub."
};

aiButtons.forEach(button => {

button.addEventListener("click", () => {

const text = button.textContent.trim();

aiResponse.innerHTML =
answers[text] || "Information Coming Soon...";
});

});


const input = document.getElementById("ai-question");
const sendBtn = document.getElementById("send-btn");
const response = document.getElementById("ai-response");

input.addEventListener("keydown", function(event) {


if(event.key === "Enter") {
    event.preventDefault();
    sendBtn.click();
}


});

sendBtn.addEventListener("click", () => {


const question = input.value.toLowerCase().trim();

if(question === "") return;

input.value = "";

response.innerHTML = `
🤖 Bhanu AI Is Thinking...
<div class="typing-animation">
    <span></span>
    <span></span>
    <span></span>
</div>
`;

setTimeout(() => {

    let answer = "";

    if(question.includes("bhanu")) {

        answer = "Bhanu Prakash Is An ECE Student, Frontend Developer and AI Enthusiast Passionate About Building Modern Websites and Smart AI Projects.";

    } else if(question.includes("skill")) {

        answer = "HTML, CSS, JavaScript, AI Tools, GitHub and Frontend Development.";

    } else if(question.includes("project")) {

        answer = "Portfolio Website, Student Reminder App And AI Assistant Integration.";

    } else if(question.includes("education")) {

        answer = "B.Tech ECE Student At Sree Venkateswara Engineering College.";

    } else {

        answer = "🐝 Bhanu AI Is Still Learning. Try Asking About Bhanu, Skills, Projects Or Education.";

    }

    response.innerHTML = `
    <div class="user-msg">
        🧑 <b>You:</b> ${question}
    </div>

    <br>

    <div class="bot-msg">
        🤖 <b>Bhanu AI:</b><br>
        ${answer}
    </div>
    `;

}, 800);


});

