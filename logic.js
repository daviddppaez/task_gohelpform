var userData = JSON.parse(localStorage.getItem('userData')) || [];

// Obtener la referencia a la tabla y su cuerpo
var tabla = document.getElementById('user_table');
var tablaBody = document.getElementById('user_info');

// Crear filas en la tabla para cada dato del formulario
for (var i = 0; i < userData.length; i++) {
  var newUser = userData[i];

  var fila = document.createElement('tr');
  var celdaNombre = document.createElement('td');
  var celdaApellido = document.createElement('td');
  var celdaCedula = document.createElement('td');
  var celdaEdad = document.createElement('td');
  var celdaNumero = document.createElement('td');
  var celdaEspecialidad = document.createElement('td');
  celdaEspecialidad.id = 'goword';

  celdaNombre.textContent = newUser.name;
  celdaApellido.textContent = newUser.surname;
  celdaCedula.textContent = newUser.id
  celdaEdad.textContent = newUser.age
  celdaNumero.textContent = newUser.number
  celdaEspecialidad.textContent = newUser.think

  fila.appendChild(celdaNombre);
  fila.appendChild(celdaApellido);
  fila.appendChild(celdaCedula);
  fila.appendChild(celdaEdad);
  fila.appendChild(celdaNumero);
  fila.appendChild(celdaEspecialidad);

  tablaBody.appendChild(fila);
}

