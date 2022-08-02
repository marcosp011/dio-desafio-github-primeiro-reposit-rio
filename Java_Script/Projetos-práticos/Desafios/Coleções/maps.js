function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Marcos','Admin');
usuarios.set('Denis','Admin');
usuarios.set('Carlos','User');
usuarios.set('Nathalia','Admin');

console.log(getAdmins(usuarios));