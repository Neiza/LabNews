(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict"
const Header = () => {
  const header = $('<header class="header"></header>');
  const head = $('<div class="header__elem header__elem--head"></div>');
  const headSections = $('  <div class="header__sections"><img src="" alt="" class="header__icon--menu">SECTIONS</div>');
  const headSearch = $('<div class="header__search"><img src="" alt="" class="header__icon header__icon--search">SEARCH</div>');
  const headRedes =$('<div class="header__redes"><img class="header__icon header__icon--face"><img class="header__icon header__icon--twitter"> <img src="" alt="" class="header__icon header__icon--in"></div>')

  const logoContainer = $('<div class="header__elem header__elem--logo "></div>');
  const imgLogo = $('<img src="" alt="" class="header__logo">');
  const date = $('<span class="header__date"></span>');
  const weather = $('<span class="header__weather"></span>');

  const nav = $('<div class="header__elem header__elem--nav "></div>');
  const loUltimo = $('<a href="" class="header__navElem">Lo último</a>');
  const opinion = $('<a href="" class="header__navElem">Opinión</a>');

  header.append(head);
  header.append(logoContainer);
  header.append(nav);

  head.append(headSections);
  head.append(headSearch);
  head.append(headRedes);

  logoContainer.append(imgLogo);
  logoContainer.append(date);
  logoContainer.append(weather);

  nav.append(loUltimo);
  nav.append(opinion);
  // nav.append();

  return header;

}

},{}]},{},[1])