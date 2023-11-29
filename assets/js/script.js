const input_1 = document.getElementById("input-1");
const select_1 = document.getElementById("select-1");
const select_2 = document.getElementById("select-2");
const boton = document.getElementById("submit__btn");
const registrado = document.getElementById("registered");
const warningAlert_1 = document.getElementById("warning-1");
const warningAlert_2 = document.getElementById("warning-2");
const warningAlert_3 = document.getElementById("warning-3");
const invitados = [];

boton.addEventListener("click", () => {
  let inputInvitados = input_1.value;
  let vegetariano = select_1.value;
  let asistencia = select_2.value;
  const nombreCompleto = input_1.value.split(" ").filter(function (n) {
    return n != "";
  }).length;

  if (inputInvitados === "") {
    warningAlert_1.innerHTML = "Debes rellenar este campo.";
  } else if (nombreCompleto < 2) {
    warningAlert_1.innerHTML = "Debes ingresar tu nombre y apellido";
  } else if (vegetariano === "sel") {
    warningAlert_1.innerHTML = "";
    warningAlert_2.innerHTML = "selecciona una opcion";
  } else if (asistencia === "sel") {
    warningAlert_1.innerHTML = "";
    warningAlert_3.innerHTML = "selecciona una opcion";
  } else {
    invitados.push({
      nombres: inputInvitados,
      vegetariano: vegetariano,
      asistencia: asistencia,
    });
    input_1.value = "";
    warningAlert_1.innerHTML = "";
    warningAlert_2.innerHTML = "";
    warningAlert_3.innerHTML = "";
    registrado.innerHTML = `<b>¡TE HAS REGISTRADO!</b> Después de la fiesta, nos iremos de luna de miel a Europa. si quieres 
    aportanos para poder realizar nuestro sueño, puedes hacerlo a la siguiente cuenta.
    cta. Corriente Banco ITAU: <b>210972591</b> RUT: <b>18.764.812-2</b>. También en la fiesta habrá un buzón. 
    <b>¡Te esperamos!</b>`;
  }

  console.log(invitados);
});
