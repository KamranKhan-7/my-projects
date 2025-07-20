var menu=document.querySelector("#nav2 i");
var full=document.querySelector("#fullscrnav");

var flag=0;
menu.addEventListener("click",function(){
    
    if(flag==0){
        full.style.top="0%";
        document.querySelector("#nav h2").style.color="black";
        document.querySelector("#nav h3").style.color="black";
        document.querySelector("#nav2 i").style.color="black";
        document.querySelector("#page1 h1").style.display="none"
        document.querySelector("#page1 h2").style.display="none"
        document.querySelector("#page1 h3").style.display="none"
        document.querySelector("#page1 img").style.display="none";
        flag++;
    }
        else{
            full.style.top="-100%";
            document.querySelector("#nav h2").style.color="white";
            document.querySelector("#nav h3").style.color="white";
            document.querySelector("#nav2 i").style.color="white";
            document.querySelector("#page1 h1").style.display="flex"
            document.querySelector("#page1 h2").style.display="flex";
            document.querySelector("#page1 h3").style.display="flex";
            document.querySelector("#page1 img").style.display="flex";
            
            flag=0;
        }
})
var tl=gsap.timeline();
 tl.from("#page1 h1",{
           y:60,
           opacity:0,
           duration:0.9
 })

 tl.from("#page1 h2",{
            y:70,
            opacity:0,
            duration:0.7,
            delay:-0.4
  })
  tl.from("#page1 h3",{
    y:70,
    opacity:0,
    duration:0.7,
    delay:-0.4
})

gsap.to("#page2 img",{
    scale:1.2,
   scrollTrigger:{
           trigger:"#page2 img",
        //    markers:true,
           scroller:"body",
           start:"top 70%",
           scrub:2
   }
})
gsap.from("#page2 h2",{
     opacity:"0",
     rotateX:"90deg",   
     duration:0.6,
     delay:-0.8,
     scrollTrigger:{
            trigger:"#page2 h2",
            // markers :true,
            scroller:"body",
         start:"top 55%",
        scrub:1
     }
})   
gsap.to("#page3 #line",{
            width:"90%",
            // ease:Expo.easeInOut,
            duration:2.2,
            
            scrollTrigger:{
                trigger:"#page3 #line",
                // markers :true,
                scroller:"body",
            start:"top 65%",
            scrub:2
         }
})
var slide1h1= document.querySelectorAll("#page6 .slideoneofh1 h1");
slide1h1.forEach(function(elem){
            gsap.to(elem,{
                 transform:`translateX(-100%)`,
                 duration:4,
                 scrollTrigger:{
                           trigger:'#page6',
                           scroller:'body',
                           scrub:3
                 }
            })
})
var slide2h1= document.querySelectorAll("#page6 .slide2ofh1 h1");
slide2h1.forEach(function(elem){
            gsap.to(elem,{
                 transform:`translateX(0%)`,
                 duration:4,
                 scrollTrigger:{
                           trigger:'#page6',
                           scroller:'body',
                           scrub:3
                 }
            })
})

