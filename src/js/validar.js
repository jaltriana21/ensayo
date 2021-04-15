const   nombre = document.getElementById('exampleInputText'),
        email = document.getElementById('exampleInputEmail1'),
        contrasena = document.getElementById('exampleInputPassword1'),
        selector = document.getElementById('exampleCheck1'),
        enviar = document.getElementById('submit'),
        resultado = document.getElementById('resultado');



enviar.addEventListener("click",(e)=>{
    e.preventDefault();
    error = validarCampos();
    if(error[0]){
        resultado.classList.remove("bg-success");
        resultado.classList.add("bg-danger");    
        resultado.innerHTML = error[1];
    }else{
        resultado.classList.remove("bg-danger");
        resultado.classList.add("bg-success");      
        resultado.innerHTML = 'Solicitud enviada correctamente';
        nombre.value = '';
        email.value = '';
        contrasena.value = '';
        selector.checked=false;
    }
})

function validarCampos(){
    error = [];
    if(nombre.value.length < 5 ){
        error[0] = true;
        error [1] = 'Por favor ingrese un nombre valido';
        return error;
    }else if(nombre.value.length > 40 ){
        error[0] = true;
        error [1] = 'Por favor ingrese un nombre valido';
        return error;
    }else if(email.value.length < 5 || email.value.indexOf("@")==-1 || email.value.indexOf(".")==-1 || email.value.indexOf(",")!=-1 || email.value.indexOf("*")!=-1 || email.value.indexOf("$")!=-1 || email.value.indexOf("#")!=-1 || email.value.indexOf("<")!=-1 || email.value.indexOf(">")!=-1 || email.value.indexOf("-")!=-1 || email.value.indexOf("[")!=-1 || email.value.indexOf("]")!=-1){
        error[0] = true;
        error [1] = 'Por favor ingrese un correo valido';
        return error;
    }else if(contrasena.value.length < 5 || contrasena.value.indexOf("*")!=-1 || contrasena.value.indexOf("$")!=-1 || contrasena.value.indexOf("#")!=-1 || contrasena.value.indexOf("<")!=-1 || contrasena.value.indexOf(">")!=-1 || contrasena.value.indexOf("-")!=-1 || contrasena.value.indexOf("[")!=-1 || contrasena.value.indexOf("]")!=-1){
        error[0] = true;
        error [1] = 'Por favor ingrese una contraseña valida';
        return error;
    }else if(selector.checked==false){
        error[0] = true;
        error [1] = 'Por favor acepte los terminos';
        return error;
    }
    error[0]=false;
    return error[0];
}