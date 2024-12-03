// Número total de imágenes
const totalImages = 30; // 30 imágenes

// Contenedor de imágenes
const imageContainer = document.getElementById('image-container');

// Array de rutas de imágenes (asegúrate de tener todas las imágenes en la carpeta 'img')
const imageURL = [
  '/img/imagen1.jpg',
  'https://drive.google.com/file/d/1LVCB6pMbzwaAntzCYkLReT6t_lth0kG9/view?usp=drive_link',
  'https://drive.google.com/file/d/1uxveS-t31DqjOul6VomC4Uof5a-2LWFi/view?usp=drive_link',
  'https://drive.google.com/file/d/1rk1mbc8T3Qvu0pCMDYWIDhnIHNCiCH12/view?usp=drive_link',
  'https://drive.google.com/file/d/1zqNNvzNtPbmGLS4JEM0U1OHTl0IgC-Ue/view?usp=drive_link',
  'https://drive.google.com/file/d/1KTsd9t2se3Q_bDUmW7kQb5irZqUqaDL-/view?usp=drive_link',
  'https://drive.google.com/file/d/1mYbO5XSdxYnLo_91BNGC_0fp-t9RiO37/view?usp=drive_link',
  'https://drive.google.com/file/d/1MuuikGBGoDw4UJr12E5Eqhm-tJSWT23C/view?usp=drive_link',
  'https://drive.google.com/file/d/1h5KOVSWBL5l9bi1wys6TRCENAD54DcUF/view?usp=drive_link',
  'https://drive.google.com/file/d/13tXu5F8goAirNB-UDMxQFQrjQfm_4cUX/view?usp=drive_link',
  'https://drive.google.com/file/d/1j-E2n0DMmLTo1XKj8gT9flDeZ_qu02P5/view?usp=drive_link',
  'https://drive.google.com/file/d/17wCK-65sz60fHUAK0xAMvDvEb0lNmv6w/view?usp=drive_link',
  'https://drive.google.com/file/d/1vxltntG_2842ef0ZQULRdbouNl-BmaDi/view?usp=drive_link',
  'https://drive.google.com/file/d/1SikGWvx5gpJnPB7loG8oeLX1X6PnCFbE/view?usp=drive_link',
  'https://drive.google.com/file/d/1gHjKvUx6HBNr-ByuGZ4koJP_hI1fR403/view?usp=drive_link',
  'https://drive.google.com/file/d/1ArZqo1BO3J_Nd1K9e7zA5flwxbC2y1Eb/view?usp=drive_link',
  'https://drive.google.com/file/d/14lgoyvG9uQPIPNfntvtEYrU5OTLBuJ4O/view?usp=drive_link',
  'https://drive.google.com/file/d/1_Gyuu-1H0Qp2sN6U2V9iAUvujZfhyuYM/view?usp=drive_link',
  'https://drive.google.com/file/d/1QglqNWgnmPv97GiOSH8Iwr57xjOL4w-5/view?usp=drive_link',
  'https://drive.google.com/file/d/1qTQV_AeuOynaE4GncX6R1AHlE0n0zBiP/view?usp=drive_link',
  'https://drive.google.com/file/d/1fO3Hh_4cRBX60ExsScZ30GAXRWP6vvCf/view?usp=drive_link',
  'https://drive.google.com/file/d/1NRjUYZYviXvpkgil37UdesJVFG4YAy3m/view?usp=drive_link',
  'https://drive.google.com/file/d/1qoUk-4qvgdrm_XuFgs2-TeMKBDiU1g-Q/view?usp=drive_link',
  'https://drive.google.com/file/d/1Pgz82C_pqYI57aYzcj6PSuLWKXXYnyVZ/view?usp=drive_link',
  'https://drive.google.com/file/d/1U4hBm4wixNVCjLbaDd4_6nm-Bx26XC0t/view?usp=drive_link',
  'https://drive.google.com/file/d/1NYiHf1ugYhnnWoS3SilkZG3Jm0RUNQLq/view?usp=drive_link',
  'https://drive.google.com/file/d/1dUExnsGehbcUapYvcwas_L7OkFF9Y4oV/view?usp=drive_link',
  'https://drive.google.com/file/d/1aRDpMOtdLdAi7HdYNmmuu4wryQS0yIXu/view?usp=drive_link',
  'https://drive.google.com/file/d/1_Q-nQa0j4U4m9H956XxKyFjOH9Uctx9S/view?usp=drive_link',
  'https://drive.google.com/file/d/1p8HfZyF2P171E0TH-lYCZf1TOKiI1Svv/view?usp=drive_link',
];

// Array de enlaces fijos relacionados con cada imagen
const imageLinks = [
  //1
  'pdf/Querida.pdf',
  //2
  'pdf/Madera.pdf',
  //3
  'https://www.youtube.com/watch?v=bp_o07ND3Qk&t=62s',
  //4
  'https://www.youtube.com/watch?v=yXhI8-5cL_s',
  //5
  'https://www.youtube.com/watch?v=ukT3V-PQWjI',
  //6
  'https://www.youtube.com/watch?v=zLy2KBjyq3E',
  //7
  'pdf/PARTE_DE_TI.pdf',
  //8
  'https://www.youtube.com/watch?v=NdDUQ4v-3h4',
  //9
  'https://www.youtube.com/watch?v=8H1iy5IR-2I',
  //10
  'pdf/Whisky.pdf',
  //11
  'https://www.youtube.com/watch?v=BNZvVkS1ZY4',
    //12
  'pdf/Amaras.pdf',
  //13
  'https://www.youtube.com/watch?v=tGu1LM7gX4Y',
  //14
  'https://www.youtube.com/watch?v=0_JLszFlD90',
  //15
  'https://www.youtube.com/watch?v=2b-V-nJFy_M',
    //16
  'https://scontent.ftcq3-1.fna.fbcdn.net/v/t1.6435-9/173605622_778189956147139_1648726165880807099_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGvqW8BO7jtqwWuxgHJszO3CS6T-JCko5QJLpP4kKSjlKkggKcTmgwnt6qq220Xz-gDc7cWOStigS6N4YhIgznI&_nc_ohc=cTnSQYHfWZUQ7kNvgEH8T3k&_nc_zt=23&_nc_ht=scontent.ftcq3-1.fna&_nc_gid=AfLI6CA16nDjuCJbh2jerUH&oh=00_AYBjQovM7m3Bu2vs-2H60z0H9uReo2lg0d-stYl1LL6QlQ&oe=676C7ED5',
    //17
  'pdf/MISMO.pdf',
    //18
  'https://www.youtube.com/watch?v=2zOGc6UcIUs',
  //19
  'https://www.youtube.com/watch?v=pbhs9gFLp1Q',
  //20
  'https://www.youtube.com/watch?v=PUpgyoNCzVc',
  //21
  'https://www.youtube.com/watch?v=mPkBG-o8Em4',
  //22
  'https://www.youtube.com/watch?v=bgt4ZR7WVf8',
  //23
  'https://www.youtube.com/watch?v=0JTN5tLGS1A',
  //24
  'https://www.youtube.com/watch?v=hK-vZhJuDY4',
    //25
  'https://www.youtube.com/watch?v=RaNr43IjFqU',
  //26
  'https://www.youtube.com/watch?v=34xtgJWqGmE',
  //27
  'https://www.youtube.com/watch?v=pFaqvHu__RI',
  //28
  'https://www.youtube.com/watch?v=v9VYEjeuB0w',
  //29
  'https://www.youtube.com/watch?v=URgYQ8KmaVg',
  //30
  'https://www.youtube.com/watch?v=a2x7AV3NBfI'

];

// Crear y posicionar dinámicamente las imágenes
for (let i = 0; i < totalImages; i++) {
  // Crear elemento <img>
  const img = document.createElement('img');
  img.src = imageURLs[i]; // Asignar la ruta de la imagen desde el array
  img.alt = `Imagen ${i + 1}`;
  img.className = `image image-${i + 1}`; // Asignar clases dinámicamente
  img.setAttribute('data-link', imageLinks[i]); // Asignar el enlace fijo de cada imagen
  imageContainer.appendChild(img);
}

// Seleccionar todas las imágenes generadas
const images = document.querySelectorAll('.image');

// Función para mover las imágenes aleatoriamente
function moveImages() {
  images.forEach(image => {
    const x = Math.random() * window.innerWidth; // Coordenada aleatoria en X
    const y = Math.random() * window.innerHeight; // Coordenada aleatoria en Y

    // Posicionar la imagen
    image.style.top = `${y}px`;
    image.style.left = `${x}px`;
  });
}

// Mover las imágenes automáticamente cada segundo
setInterval(moveImages, 1000);

// Mover las imágenes al cargar la página
moveImages();

// Agregar evento de clic a cada imagen para abrir el enlace correspondiente
images.forEach(image => {
  image.style.position = 'absolute'; // Hacer que las imágenes sean posicionables
  image.addEventListener('click', () => {
    const link = image.getAttribute('data-link'); // Obtener el enlace
    window.open(link, '_blank'); // Abrir el enlace en una nueva pestaña
  });
});
