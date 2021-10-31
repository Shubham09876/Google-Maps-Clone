mapboxgl.accessToken = 'pk.eyJ1Ijoic2F2YWdlY29kZXI3IiwiYSI6ImNrdmVyamFiZDNpNGEybmx1ZmZ0eWY0cHMifQ.W4T9S_eeeLrMsDFju_D_Rg';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy:true})

function successLocation(position){

    setupMap([position.coords.longitude, position.coords.latitude])

}

function errorLocation(){
    setupMap([-2.24 , 53.48])
}

function setupMap(center){

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
      });

      const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    var directions = new MapboxDirection({
        accessToken: mapboxgl.accessToken
    });

    map.addControl(directions , 'top-left');

}
