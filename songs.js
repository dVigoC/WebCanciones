// songs.js
const songs = [
  {
    id: 1,
    title: "Mas el Dios de toda gracia",
    artist: "Marcos Witt",
    key: "A",
    cover: "image/1.jpg",
    page: "1.html"
  },
  {
    id: 2,
    title: "Tu fidelidad",
    artist: "Marcos Witt",
    key: "D",
    cover: "image/2.jpg",
    page: "2.html"
  },
  {
    id: 3,
    title: "Hermoso eres",
    artist: "Marcos Witt",
    key: "D",
    cover: "image/2.jpg",
    page: "3.html"
  },
  {
    id: 4,
    title: "Cuan bello es el señor",
    artist: "Marcos Witt",
    key: "Bm",
    cover: "image/1.jpg",
    page: "4.html"
  },
  {
    id: 5,
    title: "Yo te busco",
    artist: "Marcos Witt",
    key: "D",
    cover: "image/2.jpg",
    page: "5.html"
  },
  {
    id: 6,
    title: "Es tiempo",
    artist: "Hillsong",
    key: "A",
    cover: "image/6.jpeg",
    page: "6.html"
  },
  {
    id: 7,
    title: "Su hijo dio",
    artist: "Hillsong",
    key: "Fm",
    cover: "image/7.jpg",
    page: "7.html"
  },
  {
    id: 8,
    title: "Lo haras otra vez",
    artist: "Elevation Worship",
    key: "D#",
    cover: "image/8.jpg",
    page: "8.html"
  },
  {
    id: 9,
    title: "Amor sin condición",
    artist: "Bethel",
    key: "Dm",
    cover: "image/9.jpeg",
    page: "9.html"
  },
  {
    id: 10,
    title: "Dios poderoso",
    artist: "IBI",
    key: "Gm",
    cover: "image/10.jpg",
    page: "10.html"
  },
  {
    id: 11,
    title: "El Dios que adoramos",
    artist: "IBI",
    key: "F#",
    cover: "image/11.jpg",
    page: "11.html"
  },
  {
    id: 12,
    title: "Por encima del sol",
    artist: "Jonathan & Sarah Jerez",
    key: "F",
    cover: "image/12.jpg",
    page: "12.html"
  },
  {
    id: 13,
    title: "Santo por siempre",
    artist: "Eccos",
    key: "G",
    cover: "image/13.jpeg",
    page: "13.html"
  },
  {
    id: 14,
    title: "Desde mi interior",
    artist: "Hillsong",
    key: "F",
    cover: "image/14.jpg",
    page: "14.html"
  },
  {
    id: 15,
    title: "Hossana",
    artist: "Hillsong",
    key: "Cm",
    cover: "image/15.jpg",
    page: "15.html"
  },
  {
    id: 16,
    title: "Dios imparable",
    artist: "Marcos Witt",
    key: "A",
    cover: "image/52.jpg",
    page: "16.html"
  },
  {
    id: 17,
    title: "Te alabare",
    artist: "Rojo",
    key: "E",
    cover: "image/17.jpg",
    page: "17.html"
  },
  {
    id: 18,
    title: "Abre mis ojos oh cristo",
    artist: "Danilo Montero",
    key: "D",
    cover: "image/18.jpeg",
    page: "18.html"
  },
  {
    id: 19,
    title: "Cuan gloriosa sera la mañana",
    artist: "Sonido Cristiano",
    key: "C",
    cover: "image/19.jpg",
    page: "19.html"
  },
  {
    id: 20,
    title: "Grande y poderos oh Dios",
    artist: "Marcos Witt",
    key: "Am",
    cover: "image/2.jpg",
    page: "20.html"
  },
  {
    id: 21,
    title: "Tu haras",
    artist: "Marcos Witt",
    key: "Cm",
    cover: "image/21.jpeg",
    page: "21.html"
  },
  {
    id: 22,
    title: "Gracia sublime",
    artist: "Phil Wickham",
    key: "A",
    cover: "image/22.jpg",
    page: "22.html"
  },
  {
    id: 23,
    title: "Alaba",
    artist: "Evan Craft",
    key: "F",
    cover: "image/23.jpg"
  },
  {
    id: 24,
    title: "Danzando",
    artist: "Christine D’Clario",
    key: "Bm",
    cover: "image/24.jpeg"
  },
  {
    id: 25,
    title: "Dios al mundo amo",
    artist: "Marcos Witt",
    key: "Dm",
    cover: "image/54.jpg",
    page: "23.html"
  },
  {
    id: 26,
    title: "Bartimeo",
    artist: "Puerto Seguro",
    key: "Dm",
    cover: "image/26.jpeg"
  },
  {
    id: 27,
    title: "Contigo",
    artist: "Nezareth",
    key: "A",
    cover: "image/27.jpeg"
  },
  {
    id: 28,
    title: "Socorro",
    artist: "Un corazon",
    key: "A",
    cover: "image/28.jpg"
  },
  {
    id: 29,
    title: "Cara a cara",
    artist: "Marcos Vidal",
    key: "Eb",
    cover: "image/29.jpg"
  },
  {
    id: 30,
    title: "Aire de tu casa",
    artist: "Jesus Adrian Romero",
    key: "Fm",
    cover: "image/30.jpg"
  },
  {
    id: 31,
    title: "Canto de Jubilo",
    artist: "Jaime Murrell",
    key: "Em",
    cover: "image/31.jpg"
  },
  {
    id: 32,
    title: "Un pacto con Dios",
    artist: "Rabito",
    key: "C",
    cover: "image/32.jpg"
  },
  {
    id: 33,
    title: "Hosanna",
    artist: "Marcos Barrientos",
    key: "Bm",
    cover: "image/33.jfif"
  },
  {
    id: 34,
    title: "Tu poeta",
    artist: "Alex Campos",
    key: "G",
    cover: "image/34.jpg"
  },
  {
    id: 35,
    title: "Vuelve a casa",
    artist: "Lily Goodman",
    key: "Cm",
    cover: "image/35.jfif"
  },
  {
    id: 36,
    title: "Mi gozo",
    artist: "Barak",
    key: "D",
    cover: "image/36.jfif"
  },
  {
    id: 37,
    title: "No hay lugar mas alto",
    artist: "Miel San marcos",
    key: "A",
    cover: "image/37.jpg"
  },
  {
    id: 38,
    title: "Supe que me amabas",
    artist: "Marcela Gándara",
    key: "Bb",
    cover: "image/38.avif"
  },
  {
    id: 39,
    title: "Tu mereces gloria",
    artist: "Juan Carlos Alvarado",
    key: "D",
    cover: "image/39.jpg"
  },
  {
    id: 40,
    title: "Eres fiel",
    artist: "Coalo Zamorano",
    key: "D",
    cover: "image/40.jpg"
  },
  {
    id: 41,
    title: "Gracias por Pedro",
    artist: "Santiago Benavides",
    key: "E",
    cover: "image/41.jpg"
  },
  {
    id: 42,
    title: "Santo es el que vive",
    artist: "Montesanto",
    key: "Ebm",
    cover: "image/42.jfif"
  },
  {
    id: 42,
    title: "Tu eres digno de gloria",
    artist: "Gerry Marquez",
    key: "Ebm",
    cover: "image/43.jfif"
  },
  {
    id: 43,
    title: "Yo sé quien soy",
    artist: "Emir Sensini",
    key: "G#m",
    cover: "image/44.jfif"
  },
  {
    id: 44,
    title: "Tu misericordia",
    artist: "Marcos Witt",
    key: "F",
    cover: "image/45.webp",
    page: "24.html"
  },
  {
    id: 45,
    title: "Te amo",
    artist: "Marcos Witt",
    key: "F",
    cover: "image/45.webp",
    page: "25.html"
  },
  {
    id: 46,
    title: "Tu y yo",
    artist: "Marcos Witt",
    key: "Cm",
    cover: "image/46.jfif",
    page: "26.html"
  },
  {
    id: 47,
    title: "Ven y deleitate",
    artist: "Marcos Witt",
    key: "D",
    cover: "image/46.jfif",
    page: "27.html"
  },
  {
    id: 48,
    title: "Has cambiado mi lamento",
    artist: "Marcos Witt",
    key: "C",
    cover: "image/46.jfif",
    page: "28.html"
  },
  {
    id: 49,
    title: "Somos pueblo",
    artist: "Marcos Witt",
    key: "Bm",
    cover: "image/46.jfif",
    page: "29.html"
  },
  {
    id: 50,
    title: "Hoy es tiempo",
    artist: "Marcos Witt",
    key: "Bm",
    cover: "image/46.jfif",
    page: "30.html"
  },
  {
    id: 51,
    title: "Cuan bello es el señor",
    artist: "Marcos Witt",
    key: "D",
    cover: "image/46.jfif",
    page: "31.html"
  },
  {
    id: 52,
    title: "Porque para siempre",
    artist: "Marcos Witt",
    key: "G",
    cover: "image/46.jfif",
    page: "32.html"
  },
  {
    id: 53,
    title: "De gloria en gloria",
    artist: "Marcos Witt",
    key: "D",
    cover: "image/46.jfif",
    page: "33.html"
  },
  {
    id: 54,
    title: "Tu amor por mi",
    artist: "Marcos Witt",
    key: "D",
    cover: "image/46.jfif",
    page: "34.html"
  },
  {
    id: 55,
    title: "Majestuoso, poderoso",
    artist: "Marcos Witt",
    key: "D",
    cover: "image/46.jfif",
    page: "35.html"
  },
  {
    id: 56,
    title: "Como el ciervo",
    artist: "Marcos Witt",
    key: "G",
    cover: "image/46.jfif",
    page: "36.html"
  },
  {
    id: 57,
    title: "Heme aqui",
    artist: "Marcos Witt",
    key: "G",
    cover: "image/46.jfif",
    page: "37.html"
  },
  {
    id: 58,
    title: "Oh gracias, encontre la vida",
    artist: "Marcos Witt",
    key: "G",
    cover: "image/47.jfif",
    page: "38.html"
  },
  {
    id: 59,
    title: "Vivifícame",
    artist: "Marcos Witt",
    key: "Gm",
    cover: "image/47.jfif",
    page: "39.html"
  },
  {
    id: 60,
    title: "Lavame",
    artist: "Marcos Witt",
    key: "D",
    cover: "image/47.jfif",
    page: "40.html"
  },
  {
    id: 61,
    title: "Solo por tu sangre",
    artist: "Marcos Witt",
    key: "Bb",
    cover: "image/47.jfif",
    page: "41.html"
  },
  {
    id: 62,
    title: "Mi pan, mi luz",
    artist: "Marcos Witt",
    key: "C",
    cover: "image/47.jfif",
    page: "42.html"
  },
  {
    id: 63,
    title: "Amarte más",
    artist: "Marcos Witt",
    key: "F",
    cover: "image/47.jfif",
    page: "43.html"
  },
  {
    id: 64,
    title: "Dios de pactos",
    artist: "Marcos Witt",
    key: "A",
    cover: "image/47.jfif",
    page: "44.html"
  },
  {
    id: 65,
    title: "Celebraré, me alegraré",
    artist: "Marcos Witt",
    key: "Gm",
    cover: "image/47.jfif",
    page: "45.html"
  },
  {
    id: 66,
    title: "Al rey",
    artist: "Marcos Witt",
    key: "Gm",
    cover: "image/47.jfif",
    page: "46.html"
  },
  {
    id: 67,
    title: "Alabadle",
    artist: "Marcos Witt",
    key: "G",
    cover: "image/48.jpg",
    page: "47.html"
  },
  {
    id: 68,
    title: "Levantate señor",
    artist: "Marcos Witt",
    key: "Cm",
    cover: "image/48.jpg",
    page: "48.html"
  },
  {
    id: 69,
    title: "Oh Jesus",
    artist: "Marcos Witt",
    key: "Cm",
    cover: "image/48.jpg",
    page: "49.html"
  },
  {
    id: 70,
    title: "Temprano yo te buscaré",
    artist: "Marcos Witt",
    key: "G",
    cover: "image/48.jpg",
    page: "50.html"
  },
  {
    id: 71,
    title: "Mas el Dios de toda gracia",
    artist: "Marcos Witt",
    key: "A",
    cover: "image/48.jpg",
    page: "51.html"
  },
  {
    id: 72,
    title: "Dios sabe lo que hace",
    artist: "Samuel Hernandez",
    key: "C",
    cover: "image/49.jfif",
    
  },
  {
    id: 73,
    title: "Mi nuevo amor",
    artist: "Roberto Orellana",
    key: "C",
    cover: "image/50.jpg",
    
  },
  {
    id: 74,
    title: "Padre que siempre soñe",
    artist: "Abel Zabala",
    key: "D",
    cover: "image/51.jfif",
    
  },
  {
    id: 75,
    title: "Santo santo santo",
    artist: "Marcos Witt",
    key: "Bb",
    cover: "image/48.jpg",
    page: "52.html"
  },
  {
    id: 76,
    title: "Jesus",
    artist: "Marcos Witt",
    key: "Bb",
    cover: "image/52.jpg",
    page: "53.html"
  },
  {
    id: 77,
    title: "Tu nombre es cristo",
    artist: "Marcos Witt",
    key: "Dm",
    cover: "image/52.jpg",
    page: "54.html"
  },
  {
    id: 78,
    title: "Al que es digno",
    artist: "Marcos Witt",
    key: "D",
    cover: "image/53.jfif",
    page: "55.html"
  },
  {
    id: 79,
    title: "Alegrense",
    artist: "Marcos Witt",
    key: "Gm",
    cover: "image/53.jfif",
    page: "56.html"
  },
  {
    id: 80,
    title: "Vencio",
    artist: "Marcos Witt",
    key: "C#m",
    cover: "image/53.jfif",
    page: "57.html"
  },
  {
    id: 81,
    title: "Aleluya",
    artist: "Marcos Witt",
    key: "Bb",
    cover: "image/53.jfif",
    page: "58.html"
  },
  {
    id: 82,
    title: "Amo a cristo",
    artist: "Marcos Witt",
    key: "C",
    cover: "image/53.jfif",
    page: "59.html"
  },
  {
    id: 83,
    title: "Tu mirada",
    artist: "Marcos Witt",
    key: "G",
    cover: "image/53.jfif",
    page: "60.html"
  },
  {
    id: 84,
    title: "Amante de ti señor",
    artist: "Marcos Witt",
    key: "A",
    cover: "image/53.jfif",
    page: "61.html"
  },
  {
    id: 85,
    title: "Gracias",
    artist: "Marcos Witt",
    key: "A",
    cover: "image/53.jfif",
    page: "62.html"
  },
  {
    id: 86,
    title: "Somos el pueblo de Dios",
    artist: "Marcos Witt",
    key: "G",
    cover: "image/54.jpg",
    page: "63.html"
  },
  {
    id: 87,
    title: "Damos honor a ti",
    artist: "Marcos Witt",
    key: "E",
    cover: "image/54.jpg",
    page: "64.html"
  },
  {
    id: 88,
    title: "Tu amor por mi",
    artist: "Marcos Witt",
    key: "D",
    cover: "image/2.jpg",
    page: "65.html"
  },
  {
    id: 89,
    title: "Motivo de mi canción",
    artist: "Marcos Witt",
    key: "G",
    cover: "image/2.jpg",
    page: "66.html"
  },
  {
    id: 90,
    title: "Renuevame",
    artist: "Marcos Witt",
    key: "D",
    cover: "image/2.jpg",
    page: "67.html"
  },
  {
    id: 100,
    title: "Te anhelo",
    artist: "Marcos Witt",
    key: "A",
    cover: "image/2.jpg",
    page: "68.html"
  },
  {
    id: 101,
    title: "Es por ti",
    artist: "Marcos Witt",
    key: "Dm",
    cover: "image/2.jpg",
    page: "69.html"
  },
  {
    id: 102,
    title: "Enciende una luz",
    artist: "Marcos Witt",
    key: "G",
    cover: "image/55.jfif",
    page: "70.html"
  },
  {
    id: 103,
    title: "Dios ha sido fiel",
    artist: "Marcos Witt",
    key: "G",
    cover: "image/55.jfif",
    page: "71.html"
  },
  {
    id: 104,
    title: "Danzaré, cantaré ",
    artist: "Marcos Witt",
    key: "F#",
    cover: "image/55.jfif",
    page: "72.html"
  },
  {
    id: 105,
    title: "Escucharte hablar ",
    artist: "Marcos Witt",
    key: "G",
    cover: "image/55.jfif",
    page: "73.html"
  },
  {
    id: 106,
    title: "Nada especial",
    artist: "Marcos Witt",
    key: "C",
    cover: "image/56.jpg",
    page: "74.html"
  },
  {
    id: 107,
    title: "Te exaltamos",
    artist: "Marcos Witt",
    key: "E",
    cover: "image/57.jfif",
    page: "75.html"
  },
  {
    id: 108,
    title: "Quien como tu ",
    artist: "Marcos Witt",
    key: "G#m",
    cover: "image/58.jfif",
    page: "76.html"
  },
  {
    id: 109,
    title: "Que lindo es mi cristo ",
    artist: "Marcos Witt",
    key: "F",
    cover: "image/59.jfif",
    page: "77.html"
  },
  {
    id: 110,
    title: "Quiero cantar una linda canción ",
    artist: "Marcos Witt",
    key: "E",
    cover: "image/59.jfif",
    page: "78.html"
  },
  {
    id: 111,
    title: "Cristo es la peña de horeb",
    artist: "Marcos Witt",
    key: "Em",
    cover: "image/59.jfif",
    page: "79.html"
  },
  {
    id: 112,
    title: "Usa mi vida",
    artist: "Marcos Witt",
    key: "E",
    cover: "image/59.jfif",
    page: "80.html"
  },
  {
    id: 113,
    title: "Te tengo a ti",
    artist: "Marcos Witt",
    key: "D",
    cover: "image/59.jfif",
    page: "81.html"
  },
  {
    id: 114,
    title: "Me gozare",
    artist: "Marcos Witt",
    key: "Em",
    cover: "image/61.jpg",
    page: "82.html"
  },
  {
    id: 115,
    title: "Shalom, sea la paz",
    artist: "Marcos Witt",
    key: "Dm",
    cover: "image/60.jfif",
    page: "83.html"
  },
  {
    id: 116,
    title: "Hossana",
    artist: "Marcos Witt",
    key: "F#",
    cover: "image/60.jfif",
    page: "84.html"
  },
  {
    id: 117,
    title: "Restaurarás el santo lugar",
    artist: "Marcos Witt",
    key: "Em",
    cover: "image/60.jfif",
    page: "85.html"
  },
  {
    id: 118,
    title: "Alabemos",
    artist: "Marcos Witt",
    key: "Am",
    cover: "image/62.jpg",
    page: "86.html"
  },
  {
    id: 119,
    title: "Vivo para amarte",
    artist: "Marcos Witt",
    key: "Bm",
    cover: "image/62.jpg",
    page: "87.html"
  },
  {
    id: 120,
    title: "Somos",
    artist: "Marcos Witt",
    key: "Em",
    cover: "image/62.jpg",
    page: "88.html"
  },
  {
    id: 121,
    title: "Sananos",
    artist: "Marcos Witt",
    key: "E",
    cover: "image/63.jfif",
    page: "89.html"
  },
  {
    id: 122,
    title: "Sana nuestra tierra",
    artist: "Marcos Witt",
    key: "G",
    cover: "image/63.jfif",
    page: "90.html"
  },
  {
    id: 123,
    title: "Primer amor",
    artist: "Marcos Witt",
    key: "A",
    cover: "image/63.jfif",
    page: "91.html"
  },
  {
    id: 124,
    title: "Levantate y salvame",
    artist: "Marcos Witt",
    key: "Am",
    cover: "image/63.jfif",
    page: "92.html"
  },
  {
    id: 125,
    title: "Las naciones proclamen",
    artist: "Marcos Witt",
    key: "C",
    cover: "image/63.jfif",
    page: "93.html"
  },
  {
    id: 126,
    title: "Acuerdate oh señor",
    artist: "Marcos Witt",
    key: "Eb",
    cover: "image/63.jfif",
    page: "94.html"
  },
  {
    id: 127,
    title: "Esperamos en ti",
    artist: "Marcos Witt",
    key: "A",
    cover: "image/63.jfif",
    page: "95.html"
  },
  {
    id: 128,
    title: "Grandes cosas ha hecho el señor",
    artist: "Marcos Witt",
    key: "G",
    cover: "image/63.jfif",
    page: "96.html"
  },
  {
    id: 129,
    title: "Aleluya a nuestro Dios",
    artist: "Marcos Witt",
    key: "D",
    cover: "image/63.jfif",
    page: "97.html"
  }

];
