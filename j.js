const URL = 'https://jsonplaceholder.typicode.com'

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res=>res.json())
//     .then(data=>console.log(data))

document.getElementById('load').addEventListener('click',()=>{
    const countUserId = document.getElementById('count-user')
    const count = parseInt(countUserId.value)
    
    fetchUsers(count)
})


const fetchUsers = async (c) =>{
   const res = await fetch(`${URL}/users`)
   let data = await res.json()
   data = data.slice(0,c)
   const userContainer = document.getElementById('users')
   userContainer.innerHTML = ''
   for (let i = 0; i < data.length; i++) {
       const user = data[i];
       const h = document.createElement('h3')
    //    h.innerText = user.name
       h.innerHTML =`${user.id} - <i>${user.name}</i> <button onclick="fetchSingleUser(${user.id})">details</button>` 
       userContainer.appendChild(h)
       
    
   }
}


const fetchSingleUser = async (id) =>{
    const res = await fetch(`${URL}/users/${id}`)
    const data = await res.json()
    console.log(data)
    document.getElementById('user-details').innerHTML = `
    <hr/>
    <h2> Details of ${data.name}</h2>
        <ul>
            <li>id - ${data.id}</li>
            <li>username : ${data.username}</li>
            <li>email : ${data.email}</li>
            <li>phone : ${data.phone}</li>
            <li>address : street - ${data.address.street}, city - ${data.address.city}</li>
        </ul>
    `
}

