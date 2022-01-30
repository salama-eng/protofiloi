var icon=document.getElementById("icon");
icon.onclick=function()
{
    document.body.classList.toggle("dark");
    if( document.body.classList.contains("dark"))
    {document.getElementById("icon").src="assets/sun.png";}

else{document.getElementById("icon").src="assets/sun.png";}

}


/************valdition************* */

function myFunction()
{
  let comment=document.getElementById('comment').value;
let uname=document.getElementById('username').value;
let email=document.getElementById('email').value;


  if(uname.value=="")
  {
    document.getElementById("error1").innerHTML = "Input not valid";
  }

}






/************* menu ************ */



function togglemobile(menu)
 {
	menu.classList.toggle('open');
}





/***************   effected *************** */

function effectedimg(x) {
  x.style.border="#ffffff 4px solid";


}

function normalimg(x) {
  x.style.border="#ffffff 40px solid";
 
 
}




/*************** Dark mood ************** */