$(document).ready(function() {
  // Calcular edad
  $("#nacimiento").on("change", function() {
    let fechaStr = $(this).val();
    let partes = fechaStr.split("-");
    let anio = parseInt(partes[0]);
    let mes = parseInt(partes[1]);
    let dia = parseInt(partes[2]);

    const hoy = new Date();
    let edad = hoy.getFullYear() - anio;
    if (hoy.getMonth() + 1 < mes || (hoy.getMonth() + 1 === mes && hoy.getDate() < dia)) {
      edad--;
    }

    $("input[name='edad']").val(edad);
    $("#edad").val(edad);
  });

  // Capturar y enviar datos
  $("#registro-form").on("submit", function(e) {
    e.preventDefault();

    var nombre = $("input[name='nombre']").val();
    var email = $("input[name='email']").val();
    var fechaNacimiento = $("input[name='nacimiento']").val();
    var edad = $("input[name='edad']").val();
    var ingreso = $("input[name='ingreso']").val();
    var genero = $("select[name='genero']").val();
    var grado = $("select[name='grado']").val();

    console.log({nombre, email, fechaNacimiento, edad, ingreso, genero, grado});

    emailjs.send("service_rwg4i09", "template_6t6l8aw", {
      nombre: nombre,
      email: email,
      nacimiento: fechaNacimiento,
      edad: edad,
      ingreso: ingreso,
      genero: genero,
      grado: grado.join(", ")
    }).then(function() {
      $("#status").html("<span class='text-success'>¡Registro enviado con éxito!</span>");
      $("#registro-form")[0].reset();
    }, function(error) {
      $("#status").html("<span class='text-danger'>Error: " + JSON.stringify(error) + "</span>");
    });
  });
});
