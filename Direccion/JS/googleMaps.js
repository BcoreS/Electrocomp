        
function initMap() {
      const destino = { lat:  10.07200, lng: -84.30977 };
      const mapa = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: destino
      });

      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer({ map: mapa });

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const origen = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          directionsService.route({
            origin: origen,
            destination: destino,
            travelMode: google.maps.TravelMode.DRIVING
          }, function(response, status) {
            if (status === "OK") {
              directionsRenderer.setDirections(response);
            } else {
              alert("Error al calcular la ruta: " + status);
            }
          });
        }, function() {
          alert("No se pudo obtener tu ubicación.");
        });
      } else {
        alert("Tu navegador no soporta geolocalización.");
      }
    }


    //wheather api 

// Función para consumir la API de OpenWeatherMap
function obtenerClima() {// Reemplaza con tu API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=10.0722&lon=-84.3111&appid=fcb999651861374dfdcd703b90d25923&units=metric&lang=es`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            mostrarClima(data);
        })
        .catch(error => console.error("Error al obtener clima:", error));
}

// Función para mostrar datos del clima en el HTML

function mostrarClima(data) {
    document.getElementById("city").textContent = `Clima en ${data.name}`;
    document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById("temp").textContent = `${data.main.temp} °C`;
    document.getElementById("humidity").textContent = `${data.main.humidity}%`;
    document.getElementById("wind").textContent = `${data.wind.speed} m/s`;
    document.getElementById("weather").innerHTML = tablaHTML;
}


// Ejecutar al cargar la página
window.onload = obtenerClima;