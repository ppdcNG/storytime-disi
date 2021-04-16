const startForm = document.getElementById("start");
const main = document.getElementById("main");
const scene1 = document.getElementById("scene-1");
var playerName;
startForm.addEventListener('submit', function(e){
    e.preventDefault();
    let formdata = new FormData(this);
    playerName = formdata.get("name");
    main.style.animation = "1s rotate"
    setTimeout(()=>{
        main.classList.add("d-none");
    scene1.classList.remove("d-none");
    scene1.style.animation = "1s rotate reverse";
    }, 1000)  

    setTimeout(()=>{
        playScene1();
    }, 2000)
})



function playScene1 (){
    const odian = document.getElementById("odian");
    const nafisat = document.getElementById("nafisat");
    const timi = document.getElementById("timi");
    var tl = gsap.timeline();
    tl.to("#odian", { scale: 1, duration : .4 })
    .to("#odian", {scale: 0, delay: 3, duration: .4, onComplete: function(){
        odian.innerText = "Wow! You should have secured your phone. It also protects your device in case it gets stolen. Well, I’ll check online when I get home and study today’s math module"
    }})
    .to("#nafisat", {scale: 1, duration :.4})
    .to("#nafisat", {scale: 0, duration: .4, delay: 3})
    .to("#timi", {scale: 1, duration: .4})
    .to("#timi", {scale: 0, duration: .4, delay:3})
    .to("#odian",{scale: 1, duration: .4})
    .to("#odian", {scale: 0, duration: .4, delay: 3 })
    .from("#question-section", {scale:0, opacity: 0, duration: 1});
}



