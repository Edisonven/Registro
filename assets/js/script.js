const input_1 = document.getElementById("input-1");
const input_2 = document.getElementById("input-2");
const input_3 = document.getElementById("input-3");
const boton = document.getElementById("submit__btn");
const invitados = [];

boton.addEventListener("click", () => {
  let inputInvitados = input_1.value;
  let vegetariano = input_2.value;
  let asistencia = input_3.value;
  if (inputInvitados === "" || vegetariano === "" || asistencia === "") {
    alert("Debes Rellenar todos los campos");
  } else {
    invitados.push({
      nombres: inputInvitados,
      vegetariano: vegetariano,
      asistencia: asistencia,
    });
    input_1.value = "";
    input_2.value = "";
    input_3.value = "";
  }

  console.log(invitados);
});
