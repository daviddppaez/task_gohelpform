var doctorData = JSON.parse(localStorage.getItem('doctorData')) || [];

// Obtener la referencia a la tabla y su cuerpo
var tabla = document.getElementById('user_table');
var tablaBody = document.getElementById('user_info');

// Crear filas en la tabla para cada dato del formulario
for (var i = 0; i < doctorData.length; i++) {
  var newDoctor = doctorData[i];

  var fila = document.createElement('tr');
  var celdaNombre = document.createElement('td');
  var celdaApellido = document.createElement('td');
  var celdaCedula = document.createElement('td');
  var celdaEspecialidad = document.createElement('td');
  celdaEspecialidad.id = 'goword';
  var celdaConsultorio = document.createElement('td');
  var celdaCorreo = document.createElement('td');

  celdaNombre.textContent = newDoctor.name;
  celdaApellido.textContent = newDoctor.surname;
  celdaCedula.textContent = newDoctor.id
  celdaConsultorio.textContent = newDoctor.site
  celdaCorreo.textContent = newDoctor.email
  celdaEspecialidad.textContent = newDoctor.think

  fila.appendChild(celdaNombre);
  fila.appendChild(celdaApellido);
  fila.appendChild(celdaCedula);
  fila.appendChild(celdaConsultorio);
  fila.appendChild(celdaCorreo);
  fila.appendChild(celdaEspecialidad);

  tablaBody.appendChild(fila);
}

