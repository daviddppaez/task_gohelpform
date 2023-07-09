const DOMElements = (function () {
    const nombres = document.querySelector('#nombres')
    const apellidos = document.querySelector("#apellidos")
    const cedula = document.querySelector("#cedula")
    const consultorio = document.querySelector("#consultorio")
    const correo = document.querySelector("#correo")
    const especialidad = document.querySelector("#especialidad")
    const submit = document.querySelector("#button_submit")
    const contactForm = document.querySelector("#doctor_form")
    return {
        nombres,apellidos,cedula,consultorio,correo,especialidad,submit,contactForm
    }
}) ();

const {
    nombres,apellidos,cedula,consultorio,correo,especialidad,submit,contactForm
} = DOMElements;

const validConditions = {
    isNameCorrect : false,
    isSurnameCorrect : false,
    isSiteCorrect : false,
    isIDCorrect : false,
    isEmailCorrect : false,
}

//Expresiones
const validName = /[A-Z][a-z]{1,}/g;
const validSurname = /[A-Z][a-z]{1,}/g;
const validSite = /^(?:[0-9]|[1-9][0-9]{1,2})$/g;
const validID = /^([0-9]{1,10})$/g;
const validEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/g;

//Funciones Útiles

nombres.onblur = () => {
    if(validName.test(nombres.value)){
        validConditions.isNameCorrect = true
    } else {
        validConditions.isNameCorrect = false
    }
}

apellidos.onblur = () => {
    if(validSurname.test(apellidos.value)){
        validConditions.isSurnameCorrect = true
    } else {
        validConditions.isSurnameCorrect = false
    }
}

cedula.onblur = () => {
    if(validID.test(cedula.value)){
        validConditions.isIDCorrect = true
    } else {
        validConditions.isIDCorrect = false
    }
}

consultorio.onblur = () => {
    if(validSite.test(consultorio.value)){
        validConditions.isSiteCorrect = true
    } else {
        validConditions.isSiteCorrect = false
    }
}

correo.onblur = () => {
    if(validEmail.test(correo.value)){
        validConditions.isEmailCorrect = true
    } else {
        validConditions.isEmailCorrect = false
    }
}

//Submit
contactForm.onsubmit = (e) => {

    var gonombres = document.querySelector('#nombres').value,
    goapellidos = document.querySelector("#apellidos").value,
    gocedula = document.querySelector("#cedula").value,
    goconsultorio = document.querySelector("#consultorio").value,
    gocorreo = document.querySelector("#correo").value,
    goespecialidad = document.querySelector("#especialidad").value;
    var newDoctor = {
        name : gonombres,
        surname : goapellidos,
        id : gocedula,
        site : goconsultorio,
        email : gocorreo,
        think : goespecialidad
    }

    var doctorData = JSON.parse(localStorage.getItem('doctorData')) || [];
    doctorData.push(newDoctor);
    localStorage.setItem('doctorData', JSON.stringify(doctorData));

    e.preventDefault()
    console.log(validConditions);
    console.log(
      Object.values(validConditions).every((condition) => condition === true)
    );

    setTimeout(function() {
        window.location.href = 'doctorlist.html';
      }, 5000); // 5000 milisegundos = 5 segundos

    if(Object.values(validConditions).every(condition=>condition === true)) {
        console.log(`Enviando formulario`);
        return true
    } else {
        console.log(`Falta completar algún campo`);
        return false
    }



}
