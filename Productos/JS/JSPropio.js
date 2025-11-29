const audio = document.getElementById("audioFondo");
const btn = document.getElementById("btnAudio");
const icon = document.getElementById("iconAudio");

btn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    icon.classList.remove("bi-music-note-beamed");
    icon.classList.add("bi-pause-fill");
  } else {
    audio.pause();
    icon.classList.remove("bi-pause-fill");
    icon.classList.add("bi-music-note-beamed");
  }
});

$(document).ready(function () {
  function cargarProductos() {
    $.getJSON("JSON/productos.json", function (data) {
      $("#productosContainer").empty();

      data.forEach(function (producto) {
        let card = `
          <div class="col-sm-6 col-md-4 col-lg-3 producto-item" 
               data-category="${producto.categoria}">
            <div class="card h-100 shadow-sm">
              <img src="${producto.imagen}" class="card-img-top" alt="${
          producto.nombre
        }">
              <div class="card-body text-center">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text small">${producto.descripcion}</p>
                <span class="badge bg-primary fs-6">₡${producto.precio.toLocaleString()}</span>
              </div>
            </div>
          </div>
        `;

        $("#productosContainer").append(card);
      });
    });
  }

  cargarProductos();

  $(".filter-btn").click(function () {
    let filtro = $(this).data("filter");

    $(".filter-btn").removeClass("active");
    $(this).addClass("active");

    if (filtro === "all") {
      $(".producto-item").fadeIn();
    } else {
      $(".producto-item").hide();
      $(`.producto-item[data-category="${filtro}"]`).fadeIn();
    }
  });
});
