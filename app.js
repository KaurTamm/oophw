document.querySelector('form').addEventListener('submit', saveTask);
document.querySelector('.clear-tasks').addEventListener('click', deleteAllBtn);

const ylesanded = JSON.parse(localStorage.getItem('tasks'));

for(let i = 0; i < ylesanded.length; i++){  
    const liElement = document.createElement('li');
    const link = document.createElement('a');
    liElement.textContent = ylesanded[i];
    liElement.className = 'collection-item';
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fas fa-times-circle"></i>';
    liElement.appendChild(link);
    document.querySelector('ul').appendChild(liElement);
};

const deleteBtns = document.querySelectorAll('.delete-item');

for (deleteBtn of deleteBtns){
    deleteBtn.addEventListener('click', deleteTask);
}

function saveTask(e){
  const uusYlesanne = document.getElementById('task').value;
  let ylesanded;
  if(localStorage.getItem('tasks') === null){
    ylesanded = []; // tekitame massiivi, kui veel ülesandeid pole
  } else {
    ylesanded = JSON.parse(localStorage.getItem('tasks'));
    // loeme LS andmed, teisendame JSON elemendiks - JS struktuuriks
  }
  console.log(ylesanded);
  ylesanded.push(uusYlesanne); // lisame element massiivi lõppu
  console.log('ulesanne lisatud');
  localStorage.setItem('tasks', JSON.stringify(ylesanded)); // lisame andmed LS sisse

  const liElement = document.createElement('li');
  const link = document.createElement('a');
  liElement.textContent = uusYlesanne;
  liElement.className = 'collection-item';
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fas fa-times-circle"></i>'
  liElement.appendChild(link);
  document.querySelector('ul').appendChild(liElement);

  const deleteBtns = document.querySelectorAll('.delete-item');
  for (deleteBtn of deleteBtns){
    deleteBtn.addEventListener('click', deleteTask);
}
}

 // loeme sisestatud ülesanded

 ylesanded.forEach(ylesanne => {
   console.log(ylesanne);
 });


function deleteAllBtn(e){
    document.querySelectorAll('li').forEach(el => el.remove());
    localStorage.clear();
};


function deleteTask(e){
    for(let i = 1; i = ylesanded.length; i++){
        if(ylesanded[i] === document.querySelector(`ul:nth-child(${i})`).textContent){
            console.log(e.target.parentNode.parentNode);
            ylesanded.splice(i, 1);
            i--;
        };
    };
    e.target.parentNode.parentNode.remove();
    localStorage.setItem('tasks', JSON.stringify(ylesanded))
}

