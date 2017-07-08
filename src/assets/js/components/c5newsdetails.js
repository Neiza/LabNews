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
