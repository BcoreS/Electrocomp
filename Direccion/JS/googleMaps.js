        
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
