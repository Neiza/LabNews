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
