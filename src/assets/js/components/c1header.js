"use strict"
const Header = () => {
  const header = $('<header class="header"></header>');
  const head = $('<div class="header__elem header__elem--head"></div>');
  const headSections = $('  <div class="header__sections"><img src="assets/img/menu.png" alt="" class="header__icon--menu">SECTIONS</div>');
  const headSearch = $('<div class="header__search"><img src="" alt="" class="header__icon header__icon--search">SEARCH</div>');
  const headRedes =$('<div class="header__redes"><img src="assets/img/fb.png" class="header__icon header__icon--face"><img class="header__icon header__icon--twitter"> <img src="assets/img/in.png" alt="" class="header__icon header__icon--in"></div>')

  const logoContainer = $('<div class="header__elem header__elem--logo "></div>');
  const imgLogo = $('<img src="assets/img/logoicon.png" alt="" class="header__logo">');
  const date = $('<span class="header__date">Lunes Junio, 12 de 20017</span>');
  const weather = $('<img src="assets/img/cloud.png" alt="" class="header__logo"><span class="header__weather">22°</span>');

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
