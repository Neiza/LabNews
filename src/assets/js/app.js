"use strict";
const render = (root) => {
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header());
  wrapper.append(LoUltimo());

  root.append(wrapper);
}


const state = {
  number: null,
  cod: null
}


$( _ => {
  $.get("api/news", (json) => {
    alert("see");
    state.datos = json;
    console.log(json);
    const root = $('.root');
    render(root);
  });
});
