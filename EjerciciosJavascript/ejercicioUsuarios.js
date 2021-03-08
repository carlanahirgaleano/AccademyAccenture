let listaDeUsuarios = [
    {
        id: 0,
        nombre: "Carla",
        telefono: 1545628984,
        email: "carla@gmail.com"
    },
    {
        id: 1,
        nombre: "Pedro",
        telefono: 1545251245,
        email: "pedro@gmail.com"

    },
    {
        id: 2,
        nombre: "Lucas",
        telefono: 1523357849,
        email: "lucas@gmail.com"

    },
    {
        id: 3,
        nombre: "Ana",
        telefono: 15789456,
        email: "ana@gmail.com"
    }
]


function menuDeOperaciones() {
    let opcionIngresada = prompt("Menu : 1.Buscar Usuario 2.Listar Usuarios 3.Salir del programa ");
    switch (parseInt(opcionIngresada)) {
        case 1:
            buscarUsuario(listaDeUsuarios);
            break;
        case 2:
            listarUsuarios();
            break;
        case 3:
            let respuesta = confirm("¿Desea confirmar la operacion?")
            if (respuesta == true) {
                alert("Que tenga buenos dias.")
            } else {
                menuDeOperaciones();
            }

            break;

        default:
            break;
    }
}
function buscarUsuario(listaDeUsuarios) {
    let datoABuscar = prompt("Por que dato desea buscar? 1.ID 2.Nombre 3.Telefono 4.Email ")
    switch (parseInt(datoABuscar)) {
        case 1:
            let busqueda1 = buscarUsuarioPorID(listaDeUsuarios)
            if (busqueda1 != true) {
                usuarioNoExistente();
            }


            break;
        case 2:

            let busqueda2 = buscarPorNombre(listaDeUsuarios)
            if (busqueda2 != true) {
                usuarioNoExistente();
            }

            break;
        case 3:

            let busqueda3 = buscarPorTelefono(listaDeUsuarios);
            if (busqueda3 != true) {
                usuarioNoExistente();
            }
            break;
        case 4:
            let busqueda4 = buscarPorEmail(listaDeUsuarios);
            if (busqueda4 != true) {
                usuarioNoExistente();
            }


            break;

        default:
            break;
    }
}


function buscarUsuarioPorID(listaDeUsuarios) {
    let ingreso = parseInt(prompt("Ingrese el id a buscar"));
    if(Number.isInteger(ingreso)){
        for (let i = 0; i < listaDeUsuarios.length; i++) {
            if (ingreso == listaDeUsuarios[i].id) {
                alert("ID: " + listaDeUsuarios[i].id + "\nNombre: " + listaDeUsuarios[i].nombre + "\n Telefono:" + listaDeUsuarios[i].telefono + "\nEmail:" + listaDeUsuarios[i].email);
                return true;
            }
        }
    }else{
        alert("Solo debe ingresar numeros ")
        buscarUsuarioPorID();

    }
} 


function buscarPorNombre(listaDeUsuarios) {
    let ingreso = prompt("Ingrese el dato a buscar");
    for (let i = 0; i < listaDeUsuarios.length; i++) {
        if (ingreso == listaDeUsuarios[i].nombre) {
            alert("ID: " + listaDeUsuarios[i].id + "\nNombre: " + listaDeUsuarios[i].nombre + "\n Telefono:" + listaDeUsuarios[i].telefono + "\nEmail:" + listaDeUsuarios[i].email);
            return true;
        }

    }
}

function buscarPorEmail(listaDeUsuarios) {
    let ingreso = prompt("Ingrese el dato a buscar");
    for (let i = 0; i < listaDeUsuarios.length; i++) {
        if ("carla@gmail.com" == listaDeUsuarios[i].email) {
            alert("ID: " + listaDeUsuarios[i].id + "\nNombre: " + listaDeUsuarios[i].nombre + "\n Telefono:" + listaDeUsuarios[i].telefono + "\nEmail:" + listaDeUsuarios[i].email);
            return true;
        }
    }
}

function buscarPorTelefono(listaDeUsuarios) {
    
    let ingreso = prompt("Ingrese el dato a buscar");
    if(Number.isInteger(ingreso)){
    for (let i = 0; i < listaDeUsuarios.length; i++) {
        if (ingreso == listaDeUsuarios[i].telefono) {
            alert("ID: " + listaDeUsuarios[i].id + "\nNombre: " + listaDeUsuarios[i].nombre + "\n Telefono:" + listaDeUsuarios[i].telefono + "\nEmail:" + listaDeUsuarios[i].email);
            return true;
        }
    }
    }else{
        alert("Solo debe ingresar numeros")
        buscarPorTelefono();
    }
}

function listarUsuarios() {
    for (let i = 0; i < listaDeUsuarios.length; i++) {
        alert("ID: " + listaDeUsuarios[i].id + "\nNombre: " + listaDeUsuarios[i].nombre + "\n Telefono:" + listaDeUsuarios[i].telefono + "\nEmail:" + listaDeUsuarios[i].email);
    }
}

function usuarioNoExistente() {
    let confirmar = confirm("El usuario no existe."+"\nAceptar: Volver a buscar " + "\nCancelar: Volver al menu principal" )
    if (confirmar == true) {
        buscarUsuario();
    } else {
        menuDeOperaciones();
    }
}

menuDeOperaciones();





/*function buscar(){
    let ingresoDato=prompt("Ingrese")
if(buscarUsuarioPorID(listaDeUsuarios,ingresoDato) == false){
   return console.log( false);
}else{
    return console.log( true);
}
}

*/
