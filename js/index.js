function submitme() {
  var mform = document.forms["mform"];
  var fullname = mform["fullname"].value;
  var email = mform["email"].value;
  var password = mform["password"].value;
  var repatpassword = mform["repeatpassword"].value;
  var phone = mform["phonenum"].value;
  var checkVisit = document.querySelector('input[name="checkvisit[]"]:checked');
  var gender = document.getElementsByName("selector");
  var borndate = mform["visitdate"].value;
  var checkAgreement = document.querySelector(
    'input[name="checkAgreement"]:checked'
  );

  //validate name
  if (fullname == "") {
    alert("Please enter your fullname.");
    fullname.focus();
    return false;
  }
  if (fullname.length < 5 || fullname.length > 20){
    alert("fullname's must be between 5 and 20")
  }
  checkName(fullname)

  //validate password
  if(password == ""){
    alert("Please enter a password")
    password.focus();
    return false;
  }

  if(repeatpassword == ""){
    alert("Please repeat a password")
    repatpassword.focus();
    return false;
  }

  if(repeatpassword =! password){
    alert("Please repat a password")
    repatpassword.focus();
    return false;
  }

  //vaidate email
  if (email == "") {
    alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }

  if (email.indexOf("@", 0) < 0) {
    alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }

  if (email.indexOf(".", 0) < 0) {
    alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }

  //validate phone number
  var vnum = isNaN(phone);
  if ((vnum = null)) {
    alert("Please enter your phone number.");
    phone.focus();
    return false;
  } else if (vnum) {
    alert("not a number");
    phone.focus();
    return false;
  }
  if(phone.length < 10 || phone.length > 12){
    alert("Telephone's must be between 10 and 12")
  }

  //validate visit type
  if (!checkVisit) {
    alert("you must select type");
    return false;
  }

  //vaidate gender check
  var check = 0;
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      check++;
      break;
    }
  }
  if (check) {
  } else {
    alert("you must select gender");
    return false;
  }

  //validate born date
  var today = new Date();

  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;

  if (borndate.length == "") {
    alert("Please enter born date.");
    visitdate.focus();
    return false;
  }
  if (borndate == today) {
    alert("date is same, you must input past date");
    visitdate.focus()
    return false;
  }
  if (borndate => today){
    alert("date invalid, you must input past date")
    visitdate.focus();
    return false;
  }

  //validate agrement
  if (!checkAgreement) {
    alert("you must agree");
    return false;
  }
}

function checkName(str){
    for (let i = 0; i < str.length; i++) {
        var bool = isAlpha(str[i])  
        if (bool === true){
            continue
        }else{
            return alert("must character")
        }
    }
    return alert("is character")
}

function isAlpha(str) {
    if(str === " "){
        return true
    }
  else if ((str >= "a" && str <= "z") || (str.length >= "A" && str.length <= "Z")) {
      return true
  }else{
      return false
  }
}

$(document).ready(function(){
  function slide_next(){
    $curr = $('#container img.active');
    $next = $curr.toggleClass().next();

    if($next.length == 0) $('#container img:first-child').toggleClass('active');
    else $next.toggleClass('active');
}

function slide_prev(){
    $curr = $('#container img.active');
    $prev = $curr.toggleClass().prev();

    if($prev.length == 0) $('#container img:last-child').toggleClass('active');
    else $prev.toggleClass('active');
}

setInterval(slide_next, 2000);

$('#right').on('click', slide_next);


$('#left').on('click', slide_prev);
}
