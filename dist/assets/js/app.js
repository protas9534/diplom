"use strict";

var registration = document.querySelector('.reg__registration');

var regBlock = function regBlock() {
  document.querySelector('.reg__window-entry').style.display = 'none';
  document.querySelector('.reg__window-reg').style.display = 'flex';
};

registration.addEventListener('click', regBlock);
var entry = document.querySelector('.reg__entry-reg');

var entryBlock = function entryBlock() {
  document.querySelector('.reg__window-entry').style.display = 'flex';
  document.querySelector('.reg__window-reg').style.display = 'none';
};

entry.addEventListener('click', entryBlock);
var users = [];
var formReg = document.querySelector('.reg__form-reg');

formReg.onsubmit = function (event) {
  event.preventDefault();
  var email = document.querySelector('.reg__email-input-reg').value;
  var tel = document.querySelector('.reg__tel-input-reg').value;
  var pass1 = document.querySelector('.reg__pass-input-reg').value;
  var pass2 = document.querySelector('.pass').value;

  var checkPass = function checkPass() {
    if (pass1 === pass2) {
      return pass1;
    } else {
      document.querySelector('.reg__err').style.opacity = '1';
    }
  };

  var person = {
    email: email,
    tel: tel,
    pass: checkPass()
  };

  var pushUser = function pushUser() {
    if (!!person.pass == true) {
      users.push(person);
      entryBlock();
      console.log(users);
    }
  };

  pushUser();
};

var form = document.querySelector('.reg__form');

form.onsubmit = function (event) {
  event.preventDefault();
  var email = document.querySelector('.reg__email-input').value;
  var pass = document.querySelector('.reg__pass-input').value;
  console.log(email + ' ' + pass);
  var allPass = users.map(function (person) {
    return person.pass;
  });
  var allEmail = users.map(function (person) {
    return person.email;
  });

  var checkUser = function checkUser() {
    if (allEmail.includes(email) && allPass.includes(pass)) {
      document.querySelector('.registration').style.display = 'none';
    } else {
      document.querySelector('.reg__pass-err').style.opacity = '1';
    }
  };

  checkUser();
};

console.log(users);