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
    }
  };

  pushUser();
};

var form = document.querySelector('.reg__form');

form.onsubmit = function (event) {
  event.preventDefault();
  var email = document.querySelector('.reg__email-input').value;
  var pass = document.querySelector('.reg__pass-input').value;
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

console.log('hellow');

function initMap() {
  var shop1 = {
    lat: 53.9042003,
    lng: 27.5527376
  }; // nemiga3

  var shop2 = {
    lat: 53.9085695,
    lng: 27.549071
  }; // galery

  var shop3 = {
    lat: 53.8954505,
    lng: 27.5478191
  }; // stolica

  var shop4 = {
    lat: 53.890192,
    lng: 27.5543206
  }; // galileo

  var shop5 = {
    lat: 53.8750097,
    lng: 27.4983578
  }; // globo

  var shop6 = {
    lat: 53.8606445,
    lng: 27.4793797
  }; // titan

  var shop7 = {
    lat: 53.8598192,
    lng: 27.6742621
  }; // MOMO

  var shop8 = {
    lat: 53.9336285,
    lng: 27.6524721
  }; // danaMall

  var shop9 = {
    lat: 53.9463288,
    lng: 27.6882812
  }; // spectr

  var shop10 = {
    lat: 53.9643403,
    lng: 27.6242378
  }; // expobel

  var shop11 = {
    lat: 53.9166062,
    lng: 27.5799693
  }; // siluet

  var shop12 = {
    lat: 53.9263415,
    lng: 27.5178667
  }; // zamok

  var shop13 = {
    lat: 53.9079864,
    lng: 27.4845076
  }; // tivali

  var shop14 = {
    lat: 53.9380965,
    lng: 27.487932
  }; //arenaCity

  var shop15 = {
    lat: 53.9084426,
    lng: 27.4332802
  }; //green

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11.3,
    center: shop1
  });
  var marker = new google.maps.Marker({
    position: shop1,
    map: map,
    title: 'ТЦ НЕМИГА 3'
  });
  var infoMarker = new google.maps.InfoWindow({
    content: "<h5>2 \u044D\u0442\u0430\u0436, \u043F\u0430\u0432\u0438\u043B\u044C\u043E\u043D 228</h5><p>\u0432\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B: 09.00 - 19.00</p>"
  });
  marker.addListener('click', function () {
    infoMarker.open(map, marker);
  });
  var marker2 = new google.maps.Marker({
    position: shop2,
    map: map,
    title: 'ТРЦ Galleria Minsk'
  });
  var infoMarker2 = new google.maps.InfoWindow({
    content: "<h5>3 \u044D\u0442\u0430\u0436, \u043F\u0430\u0432\u0438\u043B\u044C\u043E\u043D 39</h5><p>\u0432\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B: 09.00 - 22.00</p>"
  });
  marker2.addListener('click', function () {
    infoMarker2.open(map, marker2);
  });
  var marker3 = new google.maps.Marker({
    position: shop3,
    map: map,
    title: 'ТЦ Столица'
  });
  var infoMarker3 = new google.maps.InfoWindow({
    content: "<h5>-2 \u044D\u0442\u0430\u0436, \u043F\u0430\u0432\u0438\u043B\u044C\u043E\u043D 201</h5><p>\u0432\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B: 09.00 - 20.00</p>"
  });
  marker3.addListener('click', function () {
    infoMarker3.open(map, marker3);
  });
  var marker4 = new google.maps.Marker({
    position: shop4,
    map: map,
    title: 'ТРЦ Galileo'
  });
  var infoMarker4 = new google.maps.InfoWindow({
    content: "<h5>2 \u044D\u0442\u0430\u0436, \u043F\u0430\u0432\u0438\u043B\u044C\u043E\u043D 23</h5><p>\u0432\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B: 09.00 - 21.30</p>"
  });
  marker4.addListener('click', function () {
    infoMarker4.open(map, marker4);
  });
  var marker5 = new google.maps.Marker({
    position: shop5,
    map: map,
    title: 'ТЦ Globo'
  });
  var infoMarker5 = new google.maps.InfoWindow({
    content: "<h5>1 \u044D\u0442\u0430\u0436, \u043F\u0430\u0432\u0438\u043B\u044C\u043E\u043D 7</h5><p>\u0432\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B: 09.00 - 19.00</p>"
  });
  marker5.addListener('click', function () {
    infoMarker5.open(map, marker5);
  });
  var marker6 = new google.maps.Marker({
    position: shop6,
    map: map,
    title: 'ТРЦ ТИТАН'
  });
  var infoMarker6 = new google.maps.InfoWindow({
    content: "<h5>-1 \u044D\u0442\u0430\u0436, \u043F\u0430\u0432\u0438\u043B\u044C\u043E\u043D 09</h5><p>\u0432\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B: 09.00 - 19.00</p>"
  });
  marker6.addListener('click', function () {
    infoMarker6.open(map, marker6);
  });
  var marker7 = new google.maps.Marker({
    position: shop7,
    map: map,
    title: 'ТЦ МОМО'
  });
  var infoMarker7 = new google.maps.InfoWindow({
    content: "<h5>3 \u044D\u0442\u0430\u0436, \u043F\u0430\u0432\u0438\u043B\u044C\u043E\u043D 34</h5><p>\u0432\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B: 09.00 - 19.00</p>"
  });
  marker7.addListener('click', function () {
    infoMarker7.open(map, marker7);
  });
  var marker8 = new google.maps.Marker({
    position: shop8,
    map: map,
    title: 'ТЦ Dana Mall'
  });
  var infoMarker8 = new google.maps.InfoWindow({
    content: "<h5>1 \u044D\u0442\u0430\u0436, \u043F\u0430\u0432\u0438\u043B\u044C\u043E\u043D 17</h5><p>\u0432\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B: 09.00 - 22.00</p>"
  });
  marker8.addListener('click', function () {
    infoMarker8.open(map, marker8);
  });
  var marker9 = new google.maps.Marker({
    position: shop9,
    map: map,
    title: 'ТЦ Спектр'
  });
  var infoMarker9 = new google.maps.InfoWindow({
    content: "<h5>2 \u044D\u0442\u0430\u0436, \u043F\u0430\u0432\u0438\u043B\u044C\u043E\u043D 175</h5><p>\u0432\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B: 09.00 - 18.30</p>"
  });
  marker9.addListener('click', function () {
    infoMarker9.open(map, marker9);
  });
  var marker10 = new google.maps.Marker({
    position: shop10,
    map: map,
    title: 'ТРЦ EXPOBEL'
  });
  var infoMarker10 = new google.maps.InfoWindow({
    content: "<h5>1 \u044D\u0442\u0430\u0436, \u043F\u0430\u0432\u0438\u043B\u044C\u043E\u043D 64</h5><p>\u0432\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B: 09.00 - 17.30</p>"
  });
  marker10.addListener('click', function () {
    infoMarker10.open(map, marker10);
  });
  var marker11 = new google.maps.Marker({
    position: shop11,
    map: map,
    title: 'ТЦ Силуэт'
  });
  var infoMarker11 = new google.maps.InfoWindow({
    content: "<h5>1 \u044D\u0442\u0430\u0436, \u043F\u0430\u0432\u0438\u043B\u044C\u043E\u043D 22</h5><p>\u0432\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B: 09.00 - 19.30</p>"
  });
  marker11.addListener('click', function () {
    infoMarker11.open(map, marker11);
  });
  var marker12 = new google.maps.Marker({
    position: shop12,
    map: map,
    title: 'ТЦ Замок'
  });
  var infoMarker12 = new google.maps.InfoWindow({
    content: "<h5>4 \u044D\u0442\u0430\u0436, \u043F\u0430\u0432\u0438\u043B\u044C\u043E\u043D 33</h5><p>\u0432\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B: 09.00 - 21.30</p>"
  });
  marker12.addListener('click', function () {
    infoMarker12.open(map, marker12);
  });
  var marker13 = new google.maps.Marker({
    position: shop13,
    map: map,
    title: 'ТЦ ТИВАЛИ'
  });
  var infoMarker13 = new google.maps.InfoWindow({
    content: "<h5>2 \u044D\u0442\u0430\u0436, \u043F\u0430\u0432\u0438\u043B\u044C\u043E\u043D 223</h5><p>\u0432\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B: 09.00 - 17.30</p>"
  });
  marker13.addListener('click', function () {
    infoMarker13.open(map, marker13);
  });
  var marker14 = new google.maps.Marker({
    position: shop14,
    map: map,
    title: 'ТЦ ARENA City'
  });
  var infoMarker14 = new google.maps.InfoWindow({
    content: "<h5>1 \u044D\u0442\u0430\u0436, \u043F\u0430\u0432\u0438\u043B\u044C\u043E\u043D 3</h5><p>\u0432\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B: 09.00 - 21.30</p>"
  });
  marker14.addListener('click', function () {
    infoMarker14.open(map, marker14);
  });
  var marker15 = new google.maps.Marker({
    position: shop15,
    map: map,
    title: 'ТРЦ Green City'
  });
  var infoMarker15 = new google.maps.InfoWindow({
    content: "<h5>1 \u044D\u0442\u0430\u0436, \u043F\u0430\u0432\u0438\u043B\u044C\u043E\u043D 12</h5><p>\u0432\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B: 09.00 - 22.00</p>"
  });
  marker15.addListener('click', function () {
    infoMarker15.open(map, marker15);
  });
}

initMap();