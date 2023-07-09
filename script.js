const DOMElements = (function () {
    const nombres = document.querySelector('#nombres')
    const apellidos = document.querySelector("#apellidos")
    const cedula = document.querySelector("#cedula")
    const edad = document.querySelector("#edad")
    const numero = document.querySelector("#numero")
    const especialidad = document.querySelector("#especialidad")
    const submit = document.querySelector("#button_submit")
    const contactForm = document.querySelector("#contact_form")
    return {
        nombres,apellidos,cedula,edad,numero,especialidad,submit,contactForm
    }
}) ();

const {
    nombres,apellidos,cedula,edad,numero,especialidad,submit,contactForm
} = DOMElements;

const validConditions = {
    isNameCorrect : false,
    isSurnameCorrect : false,
    isAgeCorrect : false,
    isIDCorrect : false,
    isNumberCorrect : false,
}

//Expresiones
const validName = /[A-Z][a-z]{1,}/g;
const validSurname = /[A-Z][a-z]{1,}/g;
const validAge = /^(?:[0-9]|[1-9][0-9])$/g;
const validID = /^([0-9]{1,10})$/g;
const validNumber = /^(?:[1-9][0-9]{8}|[1-9][0-9]{9}|[1-9][0-9]{10})$/g;

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

edad.onblur = () => {
    if(validAge.test(edad.value)){
        validConditions.isAgeCorrect = true
    } else {
        validConditions.isAgeCorrect = false
    }
}

numero.onblur = () => {
    if(validNumber.test(numero.value)){
        validConditions.isNumberCorrect = true
    } else {
        validConditions.isNumberCorrect = false
    }
}

//Submit
contactForm.onsubmit = (e) => {

    var gonombres = document.querySelector('#nombres').value,
    goapellidos = document.querySelector("#apellidos").value,
    gocedula = document.querySelector("#cedula").value,
    goedad = document.querySelector("#edad").value,
    gonumero = document.querySelector("#numero").value,
    goespecialidad = document.querySelector("#especialidad").value;
    var newUser = {
        name : gonombres,
        surname : goapellidos,
        id : gocedula,
        age : goedad,
        number : gonumero,
        think : goespecialidad
    }

    var userData = JSON.parse(localStorage.getItem('userData')) || [];
    userData.push(newUser);
    localStorage.setItem('userData', JSON.stringify(userData));

    e.preventDefault()
    console.log(validConditions);
    console.log(
      Object.values(validConditions).every((condition) => condition === true)
    );

    setTimeout(function() {
        window.location.href = 'userlist.html';
      }, 5000); // 5000 milisegundos = 5 segundos

    if(Object.values(validConditions).every(condition=>condition === true)) {
        console.log(`Enviando formulario`);
        return true
    } else {
        console.log(`Falta completar algún campo`);
        return false
    }



}
