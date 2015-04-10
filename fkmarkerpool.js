/**
* fkMarkerPool is a class that allow you to add markers and remove markers on a google map without having memory issues.
* @license MIT
* @author fabrice kabongo <fabrice.k.kabongo[at]gmail.com
* @param map google.maps.Map object 
*/
function fkMarkerPool(map){
  this.map = map;
  this.count  = 0;
  this.markers = [];
  /**
  * clean the pool, by detach marker from the map
  */
  this.clean = function(){
    for(i in this.markers){
      this.markers[i].setMap(null);
    }
    this.count = 0;
  };
  /**
  * set new coordinate to a marker, will result on a marker added on the map
  */
  this.setMarker =function(lat,lng,title){
    if(typeof this.markers[this.count] == "undefined"){
      this.markers[this.count] = new google.maps.Marker({
        position: new google.maps.LatLng(lat,lng),
        map: this.map,
        title: title
      });
    }else{
      this.markers[this.count].setPosition(new google.maps.LatLng(lat,lng));
      this.markers[this.count].setMap(this.map);
    }
    this.count++;
  };
}
