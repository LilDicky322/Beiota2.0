// Número total de imágenes
const totalImages = 30; // 30 imágenes

// Contenedor de imágenes
const imageContainer = document.getElementById('image-container');

// Array de rutas de imágenes (asegúrate de tener todas las imágenes en la carpeta 'img')
const imageURLs = [
  '/322/img/imagen1.jpg',
  '/322/img/imagen2.png',
  '/322/img/imagen3.png',
  '/322/img/imagen4.png',
  '/322/img/imagen5.png',
  '/322/img/imagen6.png',
  '/322/img/imagen7.png',
  '/322/img/imagen8.png',
  '/322/img/imagen9.png',
  '/322/img/imagen10.png',
  '/322/img/imagen11.png',
  '/322/img/imagen12.png',
  '/322/img/imagen13.png',
  '/322/img/imagen14.png',
  '/322/img/imagen15.png',
  '/322/img/imagen16.png',
  '/322/img/imagen17.png',
  '/322/img/imagen18.png',
  '/322/img/imagen19.png',
  '/322/img/imagen20.png',
  '/322/img/imagen21.png',
  '/322/img/imagen22.png',
  '/322/img/imagen23.png',
  '/322/img/imagen24.png',
  '/322/img/imagen25.png',
  '/322/img/imagen26.png',
  '/322/img/imagen27.png',
  '/322/img/imagen28.png',
  '/322/img/imagen29.png',
  '/322/img/imagen30.png'
];

// Array de enlaces fijos relacionados con cada imagen
const imageLinks = [
  //1
  '322/pdf/Querida.pdf',
  //2
  '322/pdf/Madera.pdf',
  //3
  'https://www.youtube.com/watch?v=bp_o07ND3Qk&t=62s',
  //4
  'https://www.youtube.com/watch?v=yXhI8-5cL_s',
  //5
  'https://www.youtube.com/watch?v=ukT3V-PQWjI',
  //6
  'https://www.youtube.com/watch?v=zLy2KBjyq3E',
  //7
  '/322/pdf/PARTE_DE_TI.pdf',
  //8
  'https://www.youtube.com/watch?v=NdDUQ4v-3h4',
  //9
  'https://www.youtube.com/watch?v=8H1iy5IR-2I',
  //10
  '/322/pdf/Whisky.pdf',
  //11
  'https://www.youtube.com/watch?v=BNZvVkS1ZY4',
    //12
  '/322/pdf/Amaras.pdf',
  //13
  'https://www.youtube.com/watch?v=tGu1LM7gX4Y',
  //14
  'https://www.youtube.com/watch?v=0_JLszFlD90',
  //15
  'https://www.youtube.com/watch?v=2b-V-nJFy_M',
    //16
  'https://scontent.ftcq3-1.fna.fbcdn.net/v/t1.6435-9/173605622_778189956147139_1648726165880807099_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGvqW8BO7jtqwWuxgHJszO3CS6T-JCko5QJLpP4kKSjlKkggKcTmgwnt6qq220Xz-gDc7cWOStigS6N4YhIgznI&_nc_ohc=cTnSQYHfWZUQ7kNvgEH8T3k&_nc_zt=23&_nc_ht=scontent.ftcq3-1.fna&_nc_gid=AfLI6CA16nDjuCJbh2jerUH&oh=00_AYBjQovM7m3Bu2vs-2H60z0H9uReo2lg0d-stYl1LL6QlQ&oe=676C7ED5',
    //17
  '/322/pdf/MISMO.pdf',
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
