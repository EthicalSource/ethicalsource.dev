'use strict';

const LOAD_EVENT = 'load';
const LOADING_CLASS = 'loading';

const imgEls = document.querySelectorAll('img.lazy-load');

imgEls.forEach((el) => {
  const url = el.dataset.src;

  el.classList.add(LOADING_CLASS);

  el.addEventListener(LOAD_EVENT, (event) => {
    el.classList.remove(LOADING_CLASS);
  });

  el.src = url;
  el.dataset.src = null;
});

const form = document.getElementsByTagName('form')[0];

if (form) {
  form.addEventListener('submit', (e) => {
    this.formDidSubmit(e);
    e.preventDefault();
  });
}

function formDidSubmit(event) {
  const formData = new FormData(event.target);

  fetch(event.target.action, {
    method: 'POST',
    body: formData
  }).then((res) => {
    if (!res.ok) throw new Error(`There was an error submitting the form. (${res.status})`);
    return res.text();
  }).then(() => {
    document.getElementsByTagName('form')[0].style.display = "none"
    document.getElementsByTagName('h3')[0].style.display = "block"
  }, (err) => {
    console.error(`Oh no, something went wrong: ${err}`);
  });
}

const fontLink = document.getElementById('font-stylesheet');
fontLink.rel = 'stylesheet';
