function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  // document.getElementsByClassName("sidenav")[0].style.display="block";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("mobile_header").style.marginLeft = "250px";
  // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  // document.getElementsByClassName("sidenav")[0].style.display="block";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("mobile_header").style.marginLeft = "50px";
  // document.body.style.backgroundColor = "rgba(0,0,0,0)";
}


// let closer = document.getElementById('myClose');
let openbtn = document.getElementsByClassName('openbtn')[0];
function bodyClose(e){
  var snav = document.getElementById('mySidenav');
  if (e.target.id !== snav.id && !snav.contains(e.target) && !e.target.className.match('openbtn'))
    closeNav();
  // console.log("Hello" + snav.id)
}
 window.addEventListener("click", bodyClose);
