let red1=document.getElementById("red1");
let red2=document.getElementById("red2");
let red3=document.getElementById("red3");
let red4=document.getElementById("red4");

let big=document.getElementById("big");

red1.onclick=function(){
    big.src="red_shoes1.png";
    console.log(red1.src);
    console.log("hi")
}
red2.onclick=function(){
    big.src="red_shoes2.png"
}
red3.onclick=function(){
    big.src="red_shoes3.png";
}
red4.onclick=function(){
    big.src="red_shoes4.png"
}

let nameelement=document.getElementById("name");
let passwordelement=document.getElementById("password");

let nameerrorelement=document.getElementById("nameerror");
let passworderrorelement=document.getElementById("passworderror");
let loginmsgelement=document.getElementById("loginmsg");
let loginbuttonelement=document.getElementById("loginbutton");

nameelement.addEventListener("blur",change);

passwordelement.addEventListener("blur",change1)
function change(){
    let a=nameelement.value;
   
    if(a==""){
        nameerrorelement.textContent="Required!";
    }
    else{
        nameerrorelement.textContent="";
    }
    
}
function change1(){
    let b=passwordelement.value;
    if(b==""){
        passworderrorelement.textContent="Required!";
    }
    else{
        passworderrorelement.textContent="";
    }
}

loginbuttonelement.onclick=function(){
    if(nameelement.value != "" && passwordelement.value != ""){
        loginmsgelement.textContent="Successfully Logined";
        loginmsgelement.classList.add("login-msg");
        nameelement.value="";
        passwordelement.value=""
    }
    else{
        loginmsgelement.textContent="Login Failed";
        loginmsgelement.classList.add("login-fail");

    }
    

}