// document.querySelector(".class1").addEventListener("click",function(){
    
// })
// document.querySelector(".class2").addEventListener("click",function(){
//     document.querySelector("#upar").style.left = "0";
    
// })
// document.querySelector(".class3").addEventListener("click",function(){
//     document.querySelector("#upar").style.left = "0";
    
// })
// document.querySelector(".class4").addEventListener("click",function(){
//     document.querySelector("#upar").style.display = "flex";
    
// })
var arr = ["https://images.unsplash.com/photo-1613230564591-5f842c3ff8b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1934&q=80",
"https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
"https://images.unsplash.com/photo-1607591605294-3bc7de56e5c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80",
"https://images.unsplash.com/photo-1555817129-2fa6b81bd8e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
"https://images.unsplash.com/uploads/14110635637836178f553/dcc2ccd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
"https://images.unsplash.com/photo-1553729784-e91953dec042?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
"https://images.unsplash.com/photo-1486649567693-aaa9b2e59385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
"https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
"https://images.unsplash.com/photo-1520512571425-be5116940a2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"]


arrt = ["Masses","Invisible","Expense","Mechnaism","Millions","Continuous","Irrestible","Pressure","Intrests","Think"];

var ph = document.querySelectorAll(".class1");
ph.forEach(function(elem){
    elem.addEventListener("click",function(dets){
    document.querySelector("#upar").style.left = "0";
        document.querySelector("#right").style.backgroundImage = `url(${arr[elem.dataset.index]})`
        console.log(elem.dataset.index);
    })
    
})


var grid = document.querySelectorAll(".class2");
grid.forEach(function(elem){
    elem.addEventListener("click",function(dets){
    document.querySelector("#upar").style.left = "0";
        document.querySelector("#right").style.backgroundImage = `url(${arr[elem.dataset.index]})`;
        document.querySelector("left h2").textContent = "hello";
        console.log(elem.dataset.index);
    })
    
})
let tl = gsap.timeline();

    tl.from("#upar",{
        y:-100,
        x:-100,
        duration:3,
        opacity:0,
        ease: 'Expo.easeInOut'
    })
    tl.from("#left",{
        onStart:function(){
            $('h5').textillate({
                in:{
                    effect:'flipInX'
                }
            })
        }
    })
    tl.from("#left",{
        onStart:function(){
            $('h2').textillate({
                in:{
                    effect:'flipInX'
                }
            })
        }
    })
    tl.from("#left",{
        onStart:function(){
            $('p').textillate({
                in:{
                    effect:'sync',
                    duration:2
                }
            })
        }
    })
var a = document.querySelector("#arrow");
a.addEventListener("click",function(){
    document.querySelector("#upar").style.left = "-100%";
    
})    