/*function initMap() {
            // Crear mapa inicial
            const mapa = new google.maps.Map(document.getElementById("map"), {
                zoom: 17,
                center: { lat: 0, lng: 0 } // Se ajustará luego
            });

            // Obtener ubicación actual
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    const miUbicacion = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };

                    // Centrar mapa en mi ubicación
                    mapa.setCenter(miUbicacion);

                    // Agregar marcador
                    new google.maps.Marker({
                        position: miUbicacion,
                        map: mapa,
                        title: "Estás aquí"
                    });
                }, function() {
                    alert("No se pudo obtener tu ubicación.");
                });
            } else {
                alert("Tu navegador no soporta geolocalización.");
            }
        };      */
        
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
