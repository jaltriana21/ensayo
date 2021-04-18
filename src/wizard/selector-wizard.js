import {portafolio} from './data'


const init = ( wizard ) => {
    createUsers(wizard);
};



const createUsers = (wizard)=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapp-portafolio';
    wrapper.classList = 'container';
    wrapper.appendChild(containerUsers(addUsers,deleteUsers));

    const main = document.getElementById(wizard);
    main.appendChild(wrapper);
}


const containerUsers = (event, eventDelete)=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapp-users';
    wrapper.classList = `col-12 col-md-12 col-lg-12`;
    wrapper.innerHTML = `<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Avatar</th>
      </tr>
    </thead>
    <tbody></tbody>
    </table>`;
    const btnUsers = document.createElement('button');
    btnUsers.id = `btn-users`;
    btnUsers.classList = `btn btn-primary`;
    btnUsers.innerText = `Traer`;
    wrapper.appendChild(btnUsers);
    const btnUsersDelete = document.createElement('button');
    btnUsersDelete.id = `btn-delete`;
    btnUsersDelete.classList = `btn btn-danger mx-5`;
    btnUsersDelete.innerText = `Borrar`;
    wrapper.appendChild(btnUsersDelete);
    btnUsers.addEventListener('click', event);
    btnUsersDelete.addEventListener('click', eventDelete);
    return wrapper;
};


let maxUser = 0;


const addUsers = (ev)=>{
    const getUsers = portafolio();
    const btnUsers = document.getElementById('btn-users');
    let contentTable = document.querySelector('tbody');
    let userId = getUsers[maxUser].id;
    maxUser = maxUser+1;
    if(maxUser == getUsers.length) btnUsers.disabled = true;
    getUsers.filter((element)=> element.id == userId).map((element)=>{
        let assignUsers = document.createElement('tr');
        assignUsers.id = `${element.id}`;
        assignUsers.innerHTML = `<td>${element.id}</td>
        <td>${element.first_name}${element.last_name}</td>
        <td>${element.email}</td>
        <td><img src="${element.avatar}" alt="avatar"></td>`;
        contentTable.append(assignUsers); 
    });
    return contentTable;
}


const deleteUsers = ()=>{
    let contentTable = document.querySelector('tbody');
    const btnUsers = document.getElementById('btn-users');
    const idcontentUser = contentTable.lastElementChild.getAttribute('id');
    const contentUser = document.getElementById(`${idcontentUser}`);
    contentTable.removeChild(contentUser);
    maxUser = idcontentUser-1;
    btnUsers.disabled = false;
}


export {init};