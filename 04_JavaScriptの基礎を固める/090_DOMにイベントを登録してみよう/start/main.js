const btn = document.querySelector('#btn')

btn.addEventListener('click', ()=>{
  btn.style.color = "red";
  console.log(this);
});

btn.addEventListener('click', ()=>{
  btn.style.backgroundColor = "blue"
}) 