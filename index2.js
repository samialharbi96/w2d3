const sizeChange = ( ) => {
    const chH1 = document.querySelector("#h1")
    chH1.style.fontSize = "x-large";
}


const styleChange = ( ) => {
    const styP = document.querySelector(".par1")
    styP.style.fontStyle = "italic";
}

const styleBK = ( ) => {
    const styBK = document.querySelector(".par1")
    styBK.style.backgroundColor = "green";
}


const repImg = ( ) => {
    const repI = document.querySelector("#img2")
    repI.style.display = "none";
    const repI2 = document.querySelector("#img3")
    repI2.style.visibility = "visible";
}

const backImg = ( ) => {
    const backI = document.querySelector("#img2")
    backI.style.visibility = "none";
    
}

const rightClick = (ev) => {
const  rightC = document.querySelectorAll("img")

    window.alert("Hello! I am an alert box!");
    // ev.preventDefault();
    // alert('success!');
    // return false;

}

const bkGround = () => {
    const  bkGround = document.querySelectorAll("p")
    
       bkGround.style.backgroundColor = "green";
    
    }
    

const btn1 = document.querySelector('#btn1')
btn1.addEventListener("click", sizeChange);


const btn2 = document.querySelector('#btn2');
btn2.addEventListener("click",styleChange );

const btn3 = document.querySelector('#btn3');
btn3.addEventListener("click",styleBK );

const img1 = document.querySelector("#img1")
img1.style.display = "none";


const img2 = document.querySelector("#img2")
img2.addEventListener("mouseenter", repImg)
img2.addEventListener("mouseleave",backImg )


const imgS = document.querySelectorAll("img")
imgS.addEventListener("contextmenu", rightClick ); 

// const img3 = document.querySelector("#img3")
// img3.style.display = "none";

const hP = document.querySelectorAll("p");
hP.addEventListener("mouseenter" , bkGround)