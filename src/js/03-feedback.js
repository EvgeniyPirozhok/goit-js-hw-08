import throttle from "lodash.throttle";
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onTextRead, 500));
form.addEventListener('submit', onFormSubmit);

function onTextRead(evt) {
  const dataStorage = {
    email: email.value,
    message: message.value,
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataStorage));
};

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}
savedTextArea();
function savedTextArea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  email.value = savedMessage.email || '';
  message.value = savedMessage.message || '';
};