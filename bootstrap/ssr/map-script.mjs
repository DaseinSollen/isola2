(function($) {
  window.onload = MapLoadScript;
  function GmapInit() {
    var Gmap = $(".map-canvas");
    Gmap.each(function() {
      var $this = $(this), lat = "", lng = "", zoom = 12, scrollwheel = false, zoomcontrol = true, draggable = true, mapType = google.maps.MapTypeId.ROADMAP, title = "", contentString = "", theme_icon_path = $this.data("icon-path"), dataLat = $this.data("lat"), dataLng = $this.data("lng"), dataZoom = $this.data("zoom"), dataType = $this.data("type"), dataScrollwheel = $this.data("scrollwheel"), dataZoomcontrol = $this.data("zoomcontrol"), dataHue = $this.data("hue"), dataTitle = $this.data("title"), dataContent = $this.data("content");
      if (dataZoom !== void 0 && dataZoom !== false) {
        zoom = parseFloat(dataZoom);
      }
      if (dataLat !== void 0 && dataLat !== false) {
        lat = parseFloat(dataLat);
      }
      if (dataLng !== void 0 && dataLng !== false) {
        lng = parseFloat(dataLng);
      }
      if (dataScrollwheel !== void 0 && dataScrollwheel !== null) {
        scrollwheel = dataScrollwheel;
      }
      if (dataZoomcontrol !== void 0 && dataZoomcontrol !== null) {
        zoomcontrol = dataZoomcontrol;
      }
      if (dataType !== void 0 && dataType !== false) {
        if (dataType == "satellite") {
          mapType = google.maps.MapTypeId.SATELLITE;
        } else if (dataType == "hybrid") {
          mapType = google.maps.MapTypeId.HYBRID;
        } else if (dataType == "terrain") {
          mapType = google.maps.MapTypeId.TERRAIN;
        }
      }
      if (dataTitle !== void 0 && dataTitle !== false) {
        title = dataTitle;
      }
      if (navigator.userAgent.match(/iPad|iPhone|Android/i)) {
        draggable = false;
      }
      var mapOptions = {
        zoom,
        scrollwheel,
        zoomControl: zoomcontrol,
        draggable,
        center: new google.maps.LatLng(lat, lng),
        mapTypeId: mapType
      };
      var map = new google.maps.Map($this[0], mapOptions);
      var image = theme_icon_path;
      if (dataContent !== void 0 && dataContent !== false) {
        contentString = '<div class="map-data"><h6>' + title + '</h6><div class="map-content">' + dataContent + "</div></div>";
      }
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        map,
        icon: image,
        title
      });
      if (dataContent !== void 0 && dataContent !== false) {
        google.maps.event.addListener(marker, "click", function() {
          infowindow.open(map, marker);
        });
      }
      if (dataHue !== void 0 && dataHue !== false) {
        var styles = [
          {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#444444"
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
              {
                "color": "#fafafa"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
              {
                "saturation": -100
              },
              {
                "lightness": 45
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "simplified"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
              {
                "color": "#ededed"
              },
              {
                "visibility": "on"
              }
            ]
          }
        ];
        map.setOptions({ styles });
      }
    });
  }
  function MapLoadScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    GmapInit();
    document.body.appendChild(script);
  }
})(window.jQuery);
