var next = document.querySelector(".forward");
var prev = document.querySelector(".backward");
var h1s = document.querySelectorAll(".mid");
let index = 0;

let cards = [...document.querySelectorAll(".cards")];
let page = document.getElementById("page");
// page.style.display="hidden";

const frameCount =479;
let frame = 0;
loadTimer = setInterval(animateload,30);
let img = document.getElementById("animate");

function animateload(){
    let File = "/static/animation/images/frame"+pad(frame,2)+".jpg";    
    
    if(frame == frameCount){
        clearInterval(loadTimer);
        gsap.to(img,{
            opacity:"0",
            duration:0.7,
            ease:"power",
            onComplete: ()=>{
                img.style.display = "none";
                gsap.to(page,{
                    opacity:"1",
                    duration:0.8,
                    ease:"power",
                })
            }
            
        })
        // gsap.to(page,{
        //     opacity:"1",
        //     duration:1,
        //     ease:"power",
        // })
        
        
        // page.style.visibility = "initial";
        //window.location.replace("./second.html");
    }else{
      
        img.src = File;
        frame++;
        // page.style.display="initial";
        // img.style.zindex = "-1";
    }
}

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

console.log(cards); 

let gifs = {
    1:"/static/animation/res/gryffindor.gif", 
    2:"/static/animation/res/hufflepuff.gif",
    3:"/static/animation/res/ravenclaw.gif",
    4:"/static/animation/res/slytherin.gif",
};

function cardsNext(){
    gsap.to(cards[0],{
        left : "-=25%",
        scale : "1",
        duration : 1,
        ease: "power",
        opacity:0,
        onComplete: ()=>{
            gsap.to(cards[cards.length-1],{
                left : "+=100%",
                duration : 0,
                onComplete: ()=>{
                    gsap.to(cards[cards.length-1],{
                        opacity:1,
                    },animating = true)
                }
            })
        }
    })
    gsap.to(cards[1],{
        left : "-=25%",
        scale : "1.2",
        duration : 1,
        ease: "power"
    })
    gsap.to(cards[2],{
        left : "-=25%",
        duration : 1,
        ease: "power"
    })
    gsap.to(cards[3],{
        left : "-=25%",
        duration : 1,
        ease: "power"
    })
}

console.log(page.style);
let gifCount = 1;
animating = true;
next.addEventListener("click",()=>{
    console.log(cards)
    if(animating){
        animating = false;
        cardsNext();
        let k = cards.shift();
        cards.push(k);
        console.log(cards);
        let current = cards[0];
        console.log(current);
        gifCount++;
        if(gifCount > cards.length){
            gifCount = 1;
        }
        console.log(gifs[gifCount]);
        page.style.backgroundImage = `url('${gifs[gifCount]}')`;
        console.log(page.style);
        gsap.to(h1s[index], {
            top: "-=100%",
            ease : "power",
            duration: 1,
            onComplete: ()=>{
                console.log(h1s[index-1 === -1 ? h1s.length-1 : index-1]);
                gsap.set(h1s[index-1 === -1 ? h1s.length-1 : index-1],{top: "100%"});
                animating =true;
            }
        });
        index===h1s.length-1 ? index =0 :index++;
        gsap.to(h1s[index], {
            top: "-=100%",
            ease : Expo.easeInOut,
            duration: 1
        });
    }   
        // gsap.set(container,{
        //     ease : Expo.easeInOut,
        //     delay : 0.5,
        //     duration: 2,
            
        // })
        console.log("hello");


})

prev.addEventListener("click",()=>{
    // console.log(cards)
    if(animating){
        animating = false;
        cards[3].style.opacity = 0;
        gsap.to(cards[3],{
            left : "-=100%",
            duration : 0,
            ease: "power",
            onComplete: ()=>{
                gsap.to(cards[0],{
                    left : "+=25%",
                    scale : "1",
                    duration : 1,
                    ease: "power",
                })
                gsap.to(cards[1],{
                    left : "+=25%",
                    duration : 1,
                    ease: "power"
                })
                gsap.to(cards[2],{
                    left : "+=25%",
                    duration : 1,
                    ease: "power"
                })
                gsap.to(cards[cards.length-1],{
                    left : "+=25%",
                    scale : "1.2",
                    duration: 1,
                    opacity:1,
                    ease: "power",  
                    onComplete: ()=>{
                        animating = true;
                    }
                })
                let k = cards.pop();
                cards.unshift(k);
                // console.log(cards);
                let current = cards[0];
                // console.log(current)
            }
            
        })
        gifCount--;
        if(gifCount < 1){
            gifCount = cards.length;
        }
        page.style.backgroundImage = `url('${gifs[gifCount]}')`;

        gsap.to(h1s[index], {
            top: "-=100%",
            ease : "power",
            duration: 1,
            onComplete: ()=>{
                console.log(h1s[index+1 === 4 ? 0 : index+1]);
                gsap.set(h1s[index+1 === 4 ? 0 : index+1],{top: "100%"});
                animating =true;
            }
        });
        index===0 ? index =3 :index--;
        gsap.to(h1s[index], {
            top: "-=100%",
            ease : Expo.easeInOut,
            duration: 1
        });
       
    }
    

}) 


