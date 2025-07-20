var tl=gsap.timeline();


tl.set(".a",{opacity:0 , y:10 })
tl.set(".d",{opacity:0 , y:10, scale:1.6 })

tl.from("#left",{
        width:0,
        ease:Expo.easeInOut,
        duration:1.5
})
tl.from("#right",{
    width:0,
    ease:Expo.easeInOut,
    duration:1.5
})
tl.to(".a",{
    delay:-1.5,
    stagger:0.1,
    opacity:1,
    y:0,
    ease:Expo.easeInOut,
    duration:2 
})
tl.to(".d",{
    delay:-1.8,
    opacity:1,
    y:0,
    scale:1,
    ease:Expo.easeInOut,
    duration:2 
})