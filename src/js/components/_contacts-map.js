// Contacts map
"use strict"

import {
  Loader
} from "@googlemaps/js-api-loader";

export const loader = new Loader({
  apiKey: "AIzaSyChLhBXieiYNNh_1kk18vibTGOquw4lky0",
  version: "weekly",
});

const latLng = {
  lat: 47.810562328866745,
  lng: 13.048960306591574,
};

const colGraphite = '#313131',
  colOrange = '#fb6700',
  colWhiskey = '#d59563',
  colGray = '#9ca5b3',
  colBlack = '#252525',
  colEbony = '#1f2835',
  colIvory = '#fffbf7',
  colPeach = '#ffd49f',
  colAshGray = '#2b2b2b',
  colLightGray = '#515c6d',
  colYankeesBlue = '#17263c';


loader.load().then(() => {
  const map = new google.maps.Map(document.querySelector(".js-contacts-map"), {
    center: latLng,
    zoom: 16,
    styles: [{
        elementType: "geometry",
        stylers: [{
          color: colGraphite
        }]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [{
          color: colGraphite
        }]
      },
      {
        elementType: "labels.text.fill",
        stylers: [{
          color: colOrange
        }]
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{
          color: colWhiskey
        }],
      },
      {
        featureType: "poi",
        stylers: [{
          "visibility": "off"
        }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
          color: colBlack
        }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{
          color: colGray
        }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{
          color: colOrange
        }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{
          color: colEbony
        }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{
          color: colIvory
        }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.stroke",
        stylers: [{
          "visibility": "off"
        }],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{
          color: colPeach
        }],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [{
          color: colPeach
        }],
      },
      {
        featureType: "transit",
        stylers: [{
          "visibility": "off"
        }],
      },
      {
        featureType: "transit.station",
        stylers: [{
          "visibility": "off"
        }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{
          color: colAshGray
        }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{
          color: colLightGray
        }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{
          color: colYankeesBlue
        }],
      },
    ],
  });

  const svgMarker = {
    path: "m 31.04274,1.0000001 h -0.0857 c -10.36185,0 -18.79159,8.4269454 -18.79159,18.7848269 0,6.789597 3.09211,15.750199 9.19035,26.633383 4.5212,8.068408 9.10587,14.248005 9.15175,14.309429 C 30.63516,60.899031 30.83631,61 31.04942,61 c 0.006,0 0.0122,0 0.0183,0 0.21991,-0.006 0.42287,-0.118564 0.54486,-0.30191 0.0452,-0.0684 4.59714,-6.942374 9.0877,-15.349971 6.0611,-11.348185 9.13427,-19.949034 9.13427,-25.563292 C 49.83419,9.4267635 41.40432,1.0000001 31.04274,1.0000001 Z M 39.7167,20.243907 c 0,4.806614 -3.9103,8.716802 -8.71691,8.716802 -4.80644,0 -8.7168,-3.910306 -8.7168,-8.716802 0,-4.80649 3.9103,-8.716806 8.7168,-8.716806 4.80661,0 8.71691,3.910316 8.71691,8.716806 z",
    fillColor: colOrange,
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: 1,
    anchor: new google.maps.Point(16.9, 30.7),
  };

  new google.maps.Marker({
    position: latLng,
    icon: svgMarker,
    map: map,
  });
});
