(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const News = () => {
  const loUltimoSection = $('<section class="loultimo"></section>');

   $.each(state.news, function (i, element) {
    console.log( ('<img src="assets/img/news/' + element.img + ' "alt="" class="loultimo__img">'));
    const newsContainer = $('<div class="loultimo__news"></div>');
    const img = $('<img src="assets/img/news/' + element.img + ' "alt="" class="loultimo__img">');
    const titleContainer = $('<div class="loultimo__titleCont"></div>');
    const title = $('<span class="loultimo__title">'+ element.title + '</span>');


    newsContainer.append(img);
    titleContainer.append(title);
    newsContainer.append(titleContainer);
    loUltimoSection.append(newsContainer);

});

loUltimoSection.on('click', () => {
    const root = $('.root');
    root.empty();
    root.append(Header());
    root.append(NewsDetail());
    root.append(Footer());
 });

return loUltimoSection;

}

},{}]},{},[1])