function show_hide_password(target){
  var input = document.getElementById('password-input');
  var input2 = document.getElementById('password-input2');
  if (input.getAttribute('type') == 'password') {
    target.classList.add('view');
    input.setAttribute('type', 'text');
    input2.setAttribute('type', 'text');
  } else {
    target.classList.remove('view');
    input.setAttribute('type', 'password');
    input2.setAttribute('type', 'password');
  }
  return false;
}

function checkPolitics(){
  if(!document.getElementById('Politics').checked){
    document.getElementById('Registration').setAttribute('disabled', true);
  }else{
    document.getElementById('Registration').removeAttribute('disabled');
  }
}
window.onresize= function(){
     if(window.innerWidth < 1050){
       document.getElementById("preview").style.display = "none";
       document.getElementById("reg").style.left = "0%";
       document.getElementById("reg").style.width = "100%";
       document.getElementById("reg").setAttribute("align","center");
     }else {
       document.getElementById("preview").style.display = "inline-block";
       document.getElementById("reg").style.left = "50%";
       document.getElementById("reg").style.width = "50%";
       document.getElementById("reg").setAttribute("align","left");
     }
};
