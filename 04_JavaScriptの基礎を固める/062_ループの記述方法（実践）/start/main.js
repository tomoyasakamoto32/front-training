const todos = [
  {
    id: 1,
    title: 'go to school',
    completed: true
  },
  {
    id: 2,
    title: 'go to museum',
    completed: true
  },
  {
    id: 1,
    title: 'go to shopping',
    completed: true
  }
]

for(let i = 0; i < todos.length; i++){
  console.log(i, todos[i].title);
}