(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict"
const Header = () => {
  const header = $('<header class="header"></header>');
  const head = $('<div class="header__elem header__elem--head"></div>');
  const headSections = $('<div class="header__sections"><img src="assets/img/menu.png" alt="" class="header__icon--menu">  SECTIONS</div>');
  const headSearch = $('<div class="header__search"><img src="" alt="" class="header__icon header__icon--search">SEARCH</div>');
  const headRedes =$('<div class="header__redes"><img src="assets/img/fb.png" class="header__icon header__icon--face"><img class="header__icon header__icon--twitter"> <img src="assets/img/in.png" alt="" class="header__icon header__icon--in"></div>')
  const logoContainer = $('<div class="header__elem header__elem--logo "></div>');
  const imgLogo = $('<img src="assets/img/logoicon.png" alt="" class="header__logo">');
  const date = $('<span class="header__date">Lunes Junio, 12 de 20017</span>');
  const weather = $('<img src="assets/img/cloud.png" alt="" class="header__icon header__icon--cloud"><span class="header__weather">22°</span>');
  const nav = $('<div class="header__elem header__elem--nav "></div>');
  const loUltimo = $('<a href="" class="header__navElem">Lo último</a>');
  const opinion = $('<a href="" class="header__navElem">Opinión</a>');
  const cultura = $('<a href="" class="header__navElem">Cultura</a>');
  const peru = $('<a href="" class="header__navElem">Perú</a>');
  const tecnologia = $('<a href="" class="header__navElem">Tecnología</a>');
  const mundo = $('<a href="" class="header__navElem">Mundo</a>');
  const economia = $('<a href="" class="header__navElem">Economía</a>');
  const lifestyle = $('<a href="" class="header__navElem">Lifestye</a>');
  const deporte = $('<a href="" class="header__navElem">Deporte</a>');

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
  nav.append(cultura);
  nav.append(peru);
  nav.append(tecnologia);
  nav.append(mundo);
  nav.append(economia);
  nav.append(lifestyle);
  nav.append(deporte);


  return header;

}

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


"use strict";
 const Footer = () => {
   const footerContainer = $('<div class="footer"></div>');

   return footerContainer;
 }

"use strict";
const NewsDetail = () => {
  const divContainer = $('<div class="detail"></div>');
  const title = $('<span class="detail__title">'+ state.news[0].title +'</span>');
  const brief = $('<span class="detail__brief">'+ state.news[0].brief +'</span>')
  const img = $('<img class="detail__img" src="assets/img/news/' + state.news[0].img + ' "alt="">');
  const author = $('<div class="detail__author"></div>');
  const imgAuthor = $('<img class="detail__author--img" src="assets/img/authors/'+state.news[0].author.picture+'" alt="">');
  const name = $('<span class="detail__name">'+ state.news[0].author.name+'</span>');
  const date = $('<span class="detail__date">22.06.17 12:26 pm</span>');
  const email = $('<span class="detail__email">@photosynthetica</span>');
  const text = $('<p class="detail__text">'+state.news[0].body+'</p>');

  divContainer.append(title);
  divContainer.append(brief);
  divContainer.append(img);
  divContainer.append(author);
  divContainer.append(text);
  author.append(imgAuthor);
  author.append(date);
  author.append(email);

  return divContainer;
}

"use strict";
const render = (root) => {
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header());
  wrapper.append(News());
  wrapper.append(Footer());
  root.append(wrapper);
}


const state = {
  number: null,
  cod: null
}


$( _ => {
  $.get("api/news", (json) => {
    state.news = json;
    console.log(json);
    const root = $('.root');
    render(root);
  });
});

},{}]},{},[1])