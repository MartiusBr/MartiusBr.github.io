var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada-depa",
      "name": "ENTRADA DEPA",
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
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4013389225909472
      },
      "linkHotspots": [
        {
          "yaw": -0.7579396911744318,
          "pitch": 0.22652410879953067,
          "rotation": 4.71238898038469,
          "target": "3-hall"
        },
        {
          "yaw": 0.7697948982078557,
          "pitch": 0.27865253751436825,
          "rotation": 1.5707963267948966,
          "target": "4-lavandera"
        },
        {
          "yaw": -0.35018423783449926,
          "pitch": 0.22260479166316038,
          "rotation": 5.497787143782138,
          "target": "5-bao-de-visitas"
        },
        {
          "yaw": 0.2150136898102648,
          "pitch": 0.2451170959801523,
          "rotation": 0.7853981633974483,
          "target": "6-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrada-principal",
      "name": "ENTRADA PRINCIPAL",
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
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.23072228937108896,
        "pitch": 0.327570853852027,
        "fov": 1.454370201344696
      },
      "linkHotspots": [
        {
          "yaw": 0.30788609750023355,
          "pitch": 0.2357756405169873,
          "rotation": 0,
          "target": "2-recepcin"
        },
        {
          "yaw": 0.02776608973455552,
          "pitch": -0.0662250347334794,
          "rotation": 0,
          "target": "0-entrada-depa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-recepcin",
      "name": "RECEPCIÓN",
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
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1673977231234609,
          "pitch": 0.19129844618676373,
          "rotation": 0,
          "target": "1-entrada-principal"
        },
        {
          "yaw": 0.937692218384214,
          "pitch": 0.35143790193272295,
          "rotation": 1.5707963267948966,
          "target": "0-entrada-depa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hall",
      "name": "HALL",
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
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4910988615112304,
          "pitch": 0.11844886248982789,
          "rotation": 0,
          "target": "4-lavandera"
        },
        {
          "yaw": 1.7182130425776094,
          "pitch": 0.2784843224440987,
          "rotation": 1.5707963267948966,
          "target": "0-entrada-depa"
        },
        {
          "yaw": 0.9310288680526106,
          "pitch": 0.2525661646238593,
          "rotation": 7.0685834705770345,
          "target": "6-cocina"
        },
        {
          "yaw": -0.7652173545553431,
          "pitch": 0.19086275815370435,
          "rotation": 6.283185307179586,
          "target": "11-dormitorio-1"
        },
        {
          "yaw": -1.2492004126470597,
          "pitch": 0.24222105572313524,
          "rotation": 1.5707963267948966,
          "target": "14-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-lavandera",
      "name": "LAVANDERÍA",
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
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1086006871293446,
          "pitch": 0.2751161553427366,
          "rotation": 0,
          "target": "0-entrada-depa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bao-de-visitas",
      "name": "BAÑO DE VISITAS",
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
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7326191066605663,
          "pitch": 0.23337823115171474,
          "rotation": 1.5707963267948966,
          "target": "0-entrada-depa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-cocina",
      "name": "COCINA",
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
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0345233312667466,
          "pitch": 0.1843321911516611,
          "rotation": 0,
          "target": "5-bao-de-visitas"
        },
        {
          "yaw": 2.6349695867959255,
          "pitch": 0.16228202522687418,
          "rotation": 0,
          "target": "3-hall"
        },
        {
          "yaw": 2.2215838157378,
          "pitch": 0.2570539638142968,
          "rotation": 5.497787143782138,
          "target": "0-entrada-depa"
        },
        {
          "yaw": -0.7774756506695173,
          "pitch": 0.2587996525730958,
          "rotation": 0,
          "target": "10-comedor"
        },
        {
          "yaw": -0.5702218829668908,
          "pitch": 0.09306266081146575,
          "rotation": 0,
          "target": "15-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bao-principal",
      "name": "BAÑO PRINCIPAL",
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
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.353279815989552,
          "pitch": 0.2821101958123009,
          "rotation": 0,
          "target": "9-closet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bao-",
      "name": "BAÑO ",
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
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.734353030761497,
          "pitch": 0.339094546390589,
          "rotation": 6.283185307179586,
          "target": "14-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-closet",
      "name": "CLOSET",
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
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "7-bao-principal"
        },
        {
          "yaw": -1.0237546327954767,
          "pitch": 0.2112010081198079,
          "rotation": 6.283185307179586,
          "target": "14-pasillo"
        },
        {
          "yaw": -2.4217413105010195,
          "pitch": 0.29534629236514576,
          "rotation": 0,
          "target": "13-dormitorio-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-comedor",
      "name": "COMEDOR",
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
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8395406235633374,
          "pitch": 0.29929511785942964,
          "rotation": 0,
          "target": "6-cocina"
        },
        {
          "yaw": 2.0095133486735097,
          "pitch": 0.13038721682919885,
          "rotation": 0,
          "target": "0-entrada-depa"
        },
        {
          "yaw": 2.174037025832246,
          "pitch": 0.2146152312573335,
          "rotation": 7.0685834705770345,
          "target": "3-hall"
        },
        {
          "yaw": 2.292333835405924,
          "pitch": 0.3713681408161271,
          "rotation": 1.5707963267948966,
          "target": "5-bao-de-visitas"
        },
        {
          "yaw": -0.9189911755995901,
          "pitch": 0.33478536158171757,
          "rotation": 0,
          "target": "15-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-dormitorio-1",
      "name": "DORMITORIO 1",
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
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0667020071357376,
          "pitch": 0.2867960907477549,
          "rotation": 7.853981633974483,
          "target": "14-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-dormitorio-2-",
      "name": "DORMITORIO 2 ",
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
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1480853494718586,
          "pitch": 0.14664516259366422,
          "rotation": 0,
          "target": "14-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-dormitorio-principal",
      "name": "DORMITORIO PRINCIPAL",
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
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.778098386795353,
          "pitch": 0.14955240813796955,
          "rotation": 5.497787143782138,
          "target": "14-pasillo"
        },
        {
          "yaw": -0.10677299319800682,
          "pitch": 0.16112627226477372,
          "rotation": 0,
          "target": "9-closet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-pasillo",
      "name": "PASILLO",
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
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.732724611830041,
          "pitch": 0.34908053353372637,
          "rotation": 20.420352248333668,
          "target": "3-hall"
        },
        {
          "yaw": 1.6743475973010877,
          "pitch": 0.10794135747753586,
          "rotation": 7.0685834705770345,
          "target": "0-entrada-depa"
        },
        {
          "yaw": 1.476547106128134,
          "pitch": 0.035868747909542975,
          "rotation": 0,
          "target": "4-lavandera"
        },
        {
          "yaw": -0.6646742251848394,
          "pitch": 0.2577148097957913,
          "rotation": 4.71238898038469,
          "target": "11-dormitorio-1"
        },
        {
          "yaw": -0.3601144115099153,
          "pitch": 0.15038033279085994,
          "rotation": 5.497787143782138,
          "target": "13-dormitorio-principal"
        },
        {
          "yaw": -0.20059345790713756,
          "pitch": 0.0663195458515915,
          "rotation": 0,
          "target": "12-dormitorio-2-"
        },
        {
          "yaw": -0.05266588755328705,
          "pitch": 0.1676173363855824,
          "rotation": 0.7853981633974483,
          "target": "8-bao-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-sala",
      "name": "SALA",
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
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1136014083884476,
          "pitch": 0.2939398557332886,
          "rotation": 0,
          "target": "10-comedor"
        },
        {
          "yaw": -0.9116257478270704,
          "pitch": 0.14263907510029483,
          "rotation": 18.06415775814132,
          "target": "6-cocina"
        },
        {
          "yaw": -0.8297865887829907,
          "pitch": -0.027183919425816327,
          "rotation": 0,
          "target": "1-entrada-principal"
        },
        {
          "yaw": -0.7237031365516149,
          "pitch": 0.13070670463630663,
          "rotation": 13.351768777756625,
          "target": "3-hall"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
