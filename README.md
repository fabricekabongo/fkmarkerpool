# fkmarkerpool
 class that help you to show multiple markers on a google map without using a lot of memory.

## Installation

    npm install bower
    bower install fkmarkerpool

## How to use

        add a div and set a style and a id
       <div style="height:100%; min-height:500px">
        <div style="height:100%; min-height:500px" id="map-canvas" width="500px" height="500px"></div>
       </div>
       add google map api and fkmarkerpool.js
       <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js"></script>
       <script src="bower_components/fkmarkerpool/fkmarkerpool.js"></script>
        and then
       <script type="text/javascript">
        var mapOptions = {
         zoom: 10,
         center: new google.maps.LatLng(-26.1374003,28.2423874)
        };
        var pool =  new fkMarkerPool(new google.maps.Map(document.getElementById('map-canvas'),mapOptions));
        function update(traffic){
         pool.clean();
         for(i in traffic){
          pool.setMarker(traffic[i].latitude,traffic[i].longitude,traffic[i].title);
         }
        }
        traffics = [{
         longitude: "25.000",
         latitude: "12.000",
         title: "marker one"
        },{
         longitude: "28.000",
         latitude: "16.000",
         title: "marker two"
        }];
        
        update(traffics);
        
       </script>

## Other

Don't hesitate to ask me for improvement and propose me improvement.

This project is under MIT
