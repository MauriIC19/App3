window.addEventListener('load', localizar, true);
        
        function localizar(){
            navigator.geolocation.getCurrentPosition(ubicacion);   
        }
        
        function ubicacion(datos){
            longitud = datos.coords.longitude;
            latitud = datos.coords.latitude;
            initMap();
        }
        
        var map;
        function initMap() {
                map = new google.maps.Map(document.getElementById('mapa'), {
                center: {lat: latitud, lng: longitud},
                zoom: 17,
                disableDefaultUI: true
            });
            
             var marker = new google.maps.Marker({
                position: {lat: latitud, lng: longitud},
                animation: google.maps.Animation.DROP,
                map: map,
                label: 'Tú',
                draggable: true
             });
            
             marker.addListener('click', toggleBounce);
            function toggleBounce() {
                  if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                  } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                  }
            }
        }