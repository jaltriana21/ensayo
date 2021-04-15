import '../css/componentes.css';


const container = document.getElementById('container');
const row = document.createElement('div');
row.classList.add('row','align-items-center','justify-content-center','mt-5');
container.appendChild(row);

const col = document.createElement('div');
col.classList.add('col-12','col-lg-6','col-md-6','border');
row.appendChild(col);


const contenedor_formulario = document.createElement('div');
contenedor_formulario.classList.add('contenedor_formulario');
col.appendChild(contenedor_formulario);

const formulario = document.createElement('form');
formulario.classList.add('formulario');
contenedor_formulario.appendChild(formulario);
formulario.innerHTML = `<div class="mb-3 mt-3">
<label for="exampleInputText" class="form-label">Nombre:</label>
<input type="text" class="form-control" id="exampleInputText" name="nombre">
</div>
<div class="mb-3">
<label for="exampleInputEmail1" class="form-label">Email:</label>
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email">
<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
</div>
<div class="mb-3">
<label for="exampleInputPassword1" class="form-label">Contraseña:</label>
<input type="password" class="form-control" id="exampleInputPassword1" name="contrasena">
</div>
<div class="mb-3 form-check">
<input type="checkbox" class="form-check-input" id="exampleCheck1" >
<label class="form-check-label" for="exampleCheck1">Aceptar terminos</label>
</div>
<button type="submit" class="btn btn-primary mb-3" id='submit' name='submit'>Submit</button>
<div class="mb-3 fw-normal text-white text-center" id="resultado"></div>`;


