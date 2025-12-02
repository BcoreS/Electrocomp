fetch("Home/JSON/carousel.json")
  .then((resp) => resp.json())
  .then((data) => {
    const indicators = document.getElementById("carousel-indicators");
    const inner = document.getElementById("carousel-inner");

    data.forEach((item, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.bsTarget = "#carouselExampleIndicators";
      button.dataset.bsSlideTo = index;
      if (index === 0) button.classList.add("active");
      indicators.appendChild(button);

      const div = document.createElement("div");
      div.classList.add("carousel-item");
      div.classList.add("carousel2");
      if (index === 0) div.classList.add("active");

      div.innerHTML = `
        <img src="${item.img}" class="d-block w-100" alt="${item.title}">
        <div class="carousel-caption d-none d-md-block animated bounceInDown">
          <h5>${item.title}</h5>
          <p>${item.text}</p>
        </div>
      `;

      inner.appendChild(div);
    });
  })
  .catch((err) => console.error("Error cargando el JSON del carousel:", err));
