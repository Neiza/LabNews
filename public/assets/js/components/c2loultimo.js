(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const LoUltimo = () => {
  const LoUltimoSection = ('<section class="loultimo"></section>');
  const principalNews = ('<div class="loultimo__principal"><img src="" alt="" class="loultimo__img--principal"><span class="loultimo__newstitle loultimo__newstitle--principal"></span></div>');
  const secondaryNews = ('<div class="loultimo__secundary"><img src="" alt="" class="loultimo__img--secondary"><span class="loultimo__newstitle loultimo__newstitle--secondary"></span></div>');

  LoUltimoSection.append(principalNews);
  LoUltimoSection.append(secondaryNews);

  return LoUltimoSection;
}

},{}]},{},[1])