const input_1 = document.getElementById("input-1");
const select_1 = document.getElementById("select-1");
const select_2 = document.getElementById("select-2");
const boton = document.getElementById("submit__btn");
const invitados = [];

boton.addEventListener("click", () => {
  let inputInvitados = input_1.value;
  let vegetariano = select_1.value;
  let asistencia = select_2.value;
  if (inputInvitados === "" || vegetariano === "" || asistencia === "") {
    alert("Debes Rellenar todos los campos");
  } else {
    invitados.push({
      nombres: inputInvitados,
      vegetariano: vegetariano,
      asistencia: asistencia,
    });
    input_1.value = "";
  }

  console.log(invitados);
});
