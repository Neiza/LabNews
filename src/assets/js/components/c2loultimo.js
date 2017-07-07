"use strict";

const LoUltimo = () => {
  const loUltimoSection = $('<section class="loultimo"></section>');
  const principalNews = $('<div class="loultimo__principal"><img src="" alt="" class="loultimo__img--principal"><span class="loultimo__newstitle loultimo__newstitle--principal"></span></div>');
  const secondaryNews = $('<div class="loultimo__secundary"><img src="" alt="" class="loultimo__img--secondary"><span class="loultimo__newstitle loultimo__newstitle--secondary"></span></div>');

  loUltimoSection.append(principalNews);
  loUltimoSection.append(secondaryNews);

  return loUltimoSection;
}
