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
