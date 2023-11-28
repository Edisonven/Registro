const input_1 = document.getElementById("input-1");
const select_1 = document.getElementById("select-1");
const select_2 = document.getElementById("select-2");
const boton = document.getElementById("submit__btn");
const registrado = document.getElementById("registered");
const invitados = [];

boton.addEventListener("click", () => {
  let inputInvitados = input_1.value;
  let vegetariano = select_1.value;
  let asistencia = select_2.value;
  if (
    inputInvitados === "" ||
    vegetariano.value == "" ||
    asistencia.value == ""
  ) {
    alert("Debes Rellenar todos los campos");
  } else {
    invitados.push({
      nombres: inputInvitados,
      vegetariano: vegetariano,
      asistencia: asistencia,
    });
    input_1.value = "";
    registrado.innerHTML = `<b>¡TE HAS REGISTRADO!</b> Después de la fiesta, nos iremos de luna de miel a Europa. si quieres 
    aportanos para poder realizar nuestro sueño, puedes hacerlo a las siguientes cuenta
    cta. Corriente Banco ITAU: <b>210972591</b> RUT: <b>18.764.812-2</b>. También en la fiesta habrá un buzón. 
    <b>¡Te esperamos!</b>`;
  }

  console.log(invitados);
});
