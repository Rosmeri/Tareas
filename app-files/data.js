var APP_DATA = {
  "scenes": [
    {
      "id": "0-admision",
      "name": "ADMISION",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.1061483031454156,
        "pitch": 0.26346760919192924,
        "fov": 1.4786968108086929
      },
      "linkHotspots": [
        {
          "yaw": -1.9963004947437977,
          "pitch": 0.05693853723897746,
          "rotation": 1.5707963267948966,
          "target": "1-bazar"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.092227461187795,
          "pitch": -0.27635511363986964,
          "title": "Admision",
          "text": "Se te brinda informacion de las carreras"
        }
      ]
    },
    {
      "id": "1-bazar",
      "name": "BAZAR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7635741226285777,
          "pitch": 0.05396876483265345,
          "rotation": 1.5707963267948966,
          "target": "0-admision"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.858874504461559,
          "pitch": -0.09001054072259507,
          "title": "Bazar",
          "text": "Encontraras abarrotes de primera necesidad"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
