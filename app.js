//promise creation

const promiseGetUsers = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(typeof USERS !== 'undefined'){
            resolve(USERS);
        }else{
            reject('ACCESS DENIED')
        }
    }, 2000)

})

// recuperation de l'etat de la promesse
promiseGetUsers.then((u)=>{
    let list = '<ul>'
    for (let user of u) {
        list += `<li>${user.name}<li>`;  
    }
    list +='</ul>'
    document.getElementById('users').innerHTML = list
  return u.length
}).then((nbUsers)=>{
console.log(nbUsers);
})
.catch((e)=>{
    console.log(e);
})
