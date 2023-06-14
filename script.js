const input = document.querySelector('form input');
const tag = document.querySelector('form .tag');
const counter = document.querySelector('form .counter');
const maxLength = input.getAttribute('maxlength');

input.onkeyup = () => {
  counter.innerText = maxLength - input.value.length;

  if (counter.innerText == '0') {
    counter.classList.add('error');
    tag.classList.add('error');
    input.classList.add('error');
  } else {
    counter.classList.remove('error');
    tag.classList.remove('error');
    input.classList.remove('error');
  }
};