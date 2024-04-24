
const products = [
  // Herramientas manuales
  {
    id: 1,
    idCategory: ["manual"],
    category: ["manual", "all"],
    name: "Martillo",
    price: 12.99,
    stock: 20,
    description: "Martillo de acero con mango de madera",
    descriptionLong: "El martillo es una herramienta manual ampliamente utilizada en la construcción y trabajos de carpintería. Su diseño simple pero efectivo permite golpear con fuerza sobre diversos materiales, como clavos, para fijarlos o ajustarlos.",
    imageURL: "https://media.istockphoto.com/id/183759696/es/foto/martillo.jpg?s=2048x2048&w=is&k=20&c=iJotIsH8Ee9KNu3FaNS3X4GcBur2ijs3L5oLo_u0Fns="
  },
  {
    id: 2,
    idCategory: ["manual"],
    category: ["manual", "all"],
    name: "Destornillador",
    price: 8.99,
    stock: 15,
    description: "Destornillador Phillips con mango ergonómico",
    descriptionLong: "El destornillador es una herramienta manual esencial en cualquier caja de herramientas. Este destornillador Phillips está diseñado para apretar y aflojar tornillos con cabezas en forma de cruz.",
    imageURL: "https://media.istockphoto.com/id/1372107224/es/foto/destornillador-de-cabeza-phillips-negro-y-rojo.jpg?s=2048x2048&w=is&k=20&c=v6vRZPVe23ytCD0onR9IwvokEB2QAlO4xgK6hHCEn2c="
  },
  {
    id: 3,
    idCategory: ["manual"],
    category: ["manual", "all"],
    name: "Serrucho de mano",
    price: 24.99,
    stock: 10,
    description: "Serrucho de mano con hoja de acero templado",
    descriptionLong: "El serrucho de mano es una herramienta manual utilizada para cortar madera u otros materiales similares. Su hoja de acero templado garantiza cortes precisos y limpios.",
    imageURL: "https://media.istockphoto.com/id/881019946/es/foto/arco-de-sierra-aislado.jpg?s=2048x2048&w=is&k=20&c=gJHlBS2Im32Pbcc9AiIJAFSYcuJi2X63scyabOfNSRs="
  },
  {
    id: 4,
    idCategory: ["manual"],
    category: ["manual", "all"],
    name: "Llave inglesa",
    price: 15.99,
    stock: 18,
    description: "Llave ajustable de acero con mango antideslizante",
    descriptionLong: "La llave inglesa, también conocida como llave ajustable, es una herramienta manual utilizada para apretar o aflojar tuercas y tornillos.",
    imageURL: "https://media.istockphoto.com/id/529128054/es/foto/franc%C3%A9s-llave-aislado-sobre-un-fondo-blanco.jpg?s=2048x2048&w=is&k=20&c=nyrwJztm_vM9PKuQhjmXVUA1HJSFBRELsgbocMxtUNo="
  },
  {
    id: 5,
    idCategory: ["manual"],
    category: ["manual", "all"],
    name: "Alicate",
    price: 10.99,
    stock: 25,
    description: "Alicate de corte diagonal con mangos engomados",
    descriptionLong: "El alicate de corte diagonal es una herramienta manual diseñada para cortar alambre y otros materiales blandos. Sus mandíbulas afiladas y de corte preciso permiten realizar cortes limpios con facilidad.",
    imageURL: "https://media.istockphoto.com/id/676041152/es/foto/herramienta-de-mano-de-alicates-sobre-fondo-blanco-aislada-con-trayectoria-de-recorte.jpg?s=2048x2048&w=is&k=20&c=Ld2FAAsSo1LjeyU0nz7JpOTj8U-DwD_QfxRaHwUqJqI="
  },
  {
    id: 6,
    idCategory: ["manual"],
    category: ["manual", "all"],
    name: "Cinta métrica",
    price: 7.99,
    stock: 30,
    description: "Cinta métrica de 3 metros con carcasa de plástico resistente",
    descriptionLong: "La cinta métrica es una herramienta de medición esencial en cualquier caja de herramientas. Esta cinta métrica de 3 metros está fabricada con una carcasa de plástico resistente que protege la cinta y permite un fácil almacenamiento.",
    imageURL: "https://media.istockphoto.com/id/829331274/es/foto/construcci%C3%B3n-ruleta-render-3d-sobre-un-fondo-blanco.jpg?s=2048x2048&w=is&k=20&c=yF85wZpnsIwqZWQ4aiTaNI3Rz_DtURYHUK5Y9UsD4Lw="
  },
  {
    id: 7,
    idCategory: ["manual"],
    category: ["manual", "all"],
    name: "Nivel de burbuja",
    price: 6.99,
    stock: 20,
    description: "Nivel de burbuja magnético de 9 pulgadas",
    descriptionLong: "El nivel de burbuja es una herramienta utilizada para determinar si una superficie está nivelada o inclinada. Este nivel de burbuja magnético de 9 pulgadas proporciona lecturas precisas gracias a su burbuja de aire y su función magnética permite una fácil fijación a superficies metálicas.",
    imageURL: "https://media.istockphoto.com/id/184933463/es/foto/nivel-de-burbuja.jpg?s=2048x2048&w=is&k=20&c=oNr84oWh2UrARBD2AqlE3237UqTnyRB9UqdzjmsBe50="
  },
  {
    id: 8,
    idCategory: ["manual"],
    category: ["manual", "all"],
    name: "Cincel",
    price: 9.99,
    stock: 12,
    description: "Cincel de acero con mango de madera",
    descriptionLong: "El cincel es una herramienta manual utilizada para cortar, tallar o raspar materiales como madera, piedra o metal. Es ideal para trabajos de carpintería, escultura y artesanía.",
    imageURL: "https://media.istockphoto.com/id/927315788/es/foto/martillo-en-fondo-blanco.jpg?s=2048x2048&w=is&k=20&c=PgmZVPGIQWbPjM5Ob2pnUNl0gm7lGeMLSjhzdCqrIRc="
  },

  // Herramientas eléctricas
  {
    id: 9,
    idCategory: ["electrical"],
    category: ["electrical", "all"],
    name: "Taladro eléctrico",
    price: 59.99,
    stock: 8,
    description: "Taladro percutor con cable de 500W",
    descriptionLong: "El taladro eléctrico es una herramienta esencial en cualquier taller o sitio de construcción. ",
    imageURL: "https://media.istockphoto.com/id/490097722/es/foto/taladro-el%C3%A9ctrico.jpg?s=2048x2048&w=is&k=20&c=8LnHMht9mNo4oThaM5iO5WKAR1IajbzPXyDkpDylOo0="
  },
  {
    id: 10,
    idCategory: ["electrical"],
    category: ["electrical", "all"],
    name: "Sierra circular",
    price: 79.99,
    stock: 6,
    description: "Sierra circular de 1200W con hoja de 7 pulgadas",
    descriptionLong: "La sierra circular es una herramienta eléctrica versátil utilizada para realizar cortes rectos y precisos en una variedad de materiales, desde madera hasta plástico y metal delgado.",
    imageURL: "https://media.istockphoto.com/id/470862472/es/foto/sierra-circular.jpg?s=2048x2048&w=is&k=20&c=6zRHCsqu0IxAl1ka8L_Js55lNoLWPq3ul8LazhufvAs="
  },
  {
    id: 11,
    idCategory: ["electrical"],
    category: ["electrical", "all"],
    name: "Amoladora angular",
    price: 49.99,
    stock: 10,
    description: "Amoladora angular de 900W con disco de 4.5 pulgadas",
    descriptionLong: "La amoladora angular es una herramienta eléctrica esencial en trabajos de metalurgia y construcción.",
    imageURL: "https://media.istockphoto.com/id/170927731/es/foto/m%C3%A1quina-de-esmerilado-foto-de-estudio-sobre-fondo-blanco.jpg?s=2048x2048&w=is&k=20&c=ekLS5pIoihdUjoPGU6czSMwRTEleyMF_A2W2q_LBmqk="
  },
  {
    id: 12,
    idCategory: ["electrical"],
    category: ["electrical", "all"],
    name: "Atornillador eléctrico",
    price: 34.99,
    stock: 12,
    description: "Atornillador eléctrico inalámbrico de 12V con accesorios",
    descriptionLong: "El atornillador eléctrico es una herramienta imprescindible para la fijación rápida y eficiente de tornillos en una variedad de materiales.",
    imageURL: "https://media.istockphoto.com/id/184294297/es/foto/atornillador-inal%C3%A1mbrico.jpg?s=2048x2048&w=is&k=20&c=yn-9r04WrCje0WvVG-CoD9pxjOJnrGsGzJlfr1MNqmQ="
  },
  {
    id: 13,
    idCategory: ["electrical"],
    category: ["electrical", "all"],
    name: "Pistola de calor",
    price: 29.99,
    stock: 15,
    description: "Pistola de calor de 2000W con ajuste de temperatura",
    descriptionLong: "La pistola de calor es una herramienta eléctrica utilizada para aplicar calor controlado a superficies y materiales.",
    imageURL: "https://media.istockphoto.com/id/1406594655/es/foto/pistola-de-aire-caliente.jpg?s=2048x2048&w=is&k=20&c=gAm-ComHQIDYmracM4hCkHS5zAzG41esyNPnXbABMuY="
  },
  {
    id: 14,
    idCategory: ["electrical"],
    category: ["electrical", "all"],
    name: "Sierra de sable",
    price: 69.99,
    stock: 8,
    description: "Sierra de sable inalámbrica de 20V con hoja intercambiable",
    descriptionLong: "La sierra de sable es una herramienta eléctrica versátil utilizada para cortar una variedad de materiales, incluyendo madera, metal y plástico. ",
    imageURL: "https://media.istockphoto.com/id/1226763208/es/foto/mano-masculina-con-una-sierra-de-sable-rec%C3%ADproco-obras-de-construcci%C3%B3n.jpg?s=2048x2048&w=is&k=20&c=BDHLmHMpwtG5MW8R3zT6agfT0ROK7YU9vov8j8_f13U="
  },
  {
    id: 15,
    idCategory: ["electrical"],
    category: ["electrical", "all"],
    name: "Lijadora orbital",
    price: 39.99,
    stock: 10,
    description: "Lijadora orbital de 300W con sistema de recolección de polvo",
    descriptionLong: "La lijadora orbital es una herramienta eléctrica utilizada para alisar superficies mediante la eliminación de material. Esta lijadora orbital de 300W cuenta con un sistema de recolección de polvo que mantiene el área de trabajo limpia y libre de residuos.",
    imageURL: "https://media.istockphoto.com/id/1185649269/es/foto/lijadora-orbital-aislada-sobre-un-fondo-blanco.jpg?s=2048x2048&w=is&k=20&c=lEit9ZU3ORLbitaQQYwGFIPsJJr4gXMMB-x0DvztTWo="
  },
  {
    id: 16,
    idCategory: ["electrical"],
    category: ["electrical", "all"],
    name: "Rotomartillo",
    price: 89.99,
    stock: 6,
    description: "Rotomartillo percutor de 2000w de potencia",
    descriptionLong: "El rotomartillo es una herramienta eléctrica potente diseñada para perforar agujeros en materiales duros como concreto, ladrillo y piedra. Este rotomartillo percutor de 2000W de potencia ofrece la fuerza necesaria para tareas exigentes en proyectos de construcción y renovación.",
    imageURL: "https://media.istockphoto.com/id/1492045331/es/foto/vista-lateral-de-un-moderno-rotomartillo-el%C3%A9ctrico-con-motor-vertical-taladro-montado-y-mango.jpg?s=2048x2048&w=is&k=20&c=tZMfEq3ja7m7pmxnGsw89mSmm_DFcwRGTWj6XT9hSec="
  }
];
const GetProducts = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products);
  }, 3000);
});


GetProducts.catch(error => {
  console.error('Error obteniendo los productos:', error);
});


export default GetProducts;

