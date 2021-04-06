const btn = document.querySelector('#btn');

const hello = function(){
  this.style.color = 'red';
  console.log(this)
}

btn.addEventListener('click', hello);