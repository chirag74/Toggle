var toggled =false;
var htag=document.getElementsByTagName("h1")[0];
var bodytag=document.getElementsByTagName("body")[0];
var circle=document.getElementById("circle");
document.getElementById("toggle").onclick =function(){
    if(!toggled){
        htag.classList.add("color-white");
        bodytag.classList.add("bck-color-black");
        circle.style.marginLeft="100px";
        toggled=true;
    }
    else{
        htag.classList.remove("color-white");
        bodytag.classList.remove("bck-color-black");
        circle.style.marginLeft="1px";
        toggled=false;
    }
}