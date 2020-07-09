const fetchUsers = async () => 
  // await (await fetch('http://localhost:9000/getusers')).json();
  await (await fetch('/.netlify/functions/get/users')).json();
  


fetchUsers().then(data => {
  console.log(data)
  const userList = document.querySelector('#root');
  const ul = document.createElement('ul');

  data.forEach(user => {
    const li = document.createElement('li');
    const text = document.createTextNode(user.login)
    li.appendChild(text);
    ul.appendChild(li);
    
  })

  userList.appendChild(ul);
})
  

