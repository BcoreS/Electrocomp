//formulario contacto
document.addEventListener("DOMContentLoaded", function () {
  const nacimientoInput = document.getElementById("nacimiento");
  const edadInput = document.querySelector("input[name='edad']");
  const form = document.getElementById("registro-form");
  const statusDiv = document.getElementById("status");

  // Calcular edad automáticamente
  nacimientoInput.addEventListener("change", function () {
    if (!this.value) return;

    const [anio, mes, dia] = this.value.split("-").map(Number);
    const hoy = new Date();
    let edad = hoy.getFullYear() - anio;

    if (
      hoy.getMonth() + 1 < mes ||
      (hoy.getMonth() + 1 === mes && hoy.getDate() < dia)
    ) {
      edad--;
    }

    edadInput.value = edad;
  });

  // Capturar y enviar datos con EmailJS
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.querySelector("input[name='nombre']").value;
    const email = document.querySelector("input[name='email']").value;
    const fechaNacimiento = document.querySelector(
      "input[name='nacimiento']"
    ).value;
    const edad = document.querySelector("input[name='edad']").value;
    const ingreso = document.querySelector("input[name='ingreso']").value;
    const genero = document.querySelector("select[name='genero']").value;
    const grado = Array.from(
      document.querySelector("select[name='grado']").selectedOptions
    ).map((opt) => opt.value);

    console.log({
      nombre,
      email,
      fechaNacimiento,
      edad,
      ingreso,
      genero,
      grado,
    });

    emailjs
      .send("service_rwg4i09", "template_6t6l8aw", {
        nombre: nombre,
        email: email,
        nacimiento: fechaNacimiento,
        edad: edad,
        ingreso: ingreso,
        genero: genero,
        grado: grado.join(", "),
      })
      .then(() => {
        statusDiv.innerHTML =
          "<span class='text-success'>¡Registro enviado con éxito!</span>";
        form.reset();
      })
      .catch((error) => {
        statusDiv.innerHTML =
          "<span class='text-danger'>Error: " +
          JSON.stringify(error) +
          "</span>";
      });
  });

  //boton Autores y Dueño
  document.getElementById("BotonAcer").addEventListener("click", function () {
    window.location.href = "../../Autores/Autores.html";
  });
  document.getElementById("BotonDirec").addEventListener("click", function () {
    window.location.href = "../../Dueño/Dueño.html";
  });
});
