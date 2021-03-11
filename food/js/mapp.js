function initMap(){
    var options = {
        zoom:10,
        center: {lat: 44.711403, lng: 20.383567}
    }
   var map =new google.maps.Map(document.getElementById('map'), options);
   
   addMarker({
        coords:{lat: 44.711403, lng: 20.383567}
    })
   

    function addMarker(props){
        var marker = new google.maps.Marker({
        position:props.coords,
        map:map
    });

    if(props.content){
        var info = new google.maps.InfoWindow({
        content: props.content
    });

    marker.addListener('click', () => {
        info.open(map,marker);
    })
            
        }
    }
}