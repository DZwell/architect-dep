'use strict';

const items = document.querySelector('.dropdown').children[1];
const len = items.children.length;

for (let i = 0; i < len; i++) {
  items.children[i].addEventListener('click', () => {
    console.log(items.children[i].text);
  });
};
