const products = [
  {
    id: "1",
    stock: 60,
    category: "novedades",
    title: "El Nervio Óptico",
    author: "María Gainza",
    description:
      "Una voz sorprendente, un bellísimo y osado ejercicio de literatura que mezcla obras de arte, vidas de artistas y la intimidad de la narradora. Este es un libro hecho de miradas. Miradas sobre cuadros, sobre los artistas que los pintaron y sobre la intimidad de la narradora y su entorno. Este es un libro singular y fascinante, inclasificable, en el que la vida y el arte se entretejen. Consta de once partes: once partes que son once capítulos de una novela que relata una historia personal y familiar, pero que también pueden leerse como once cuentos, u once incursiones furtivas en la historia de la pintura, u once ensayos narrativos que tratan de desentrañar los misteriosos vínculos entre una obra pictórica y quien la contempla.",
    price: 3285,
    pictureUrl: "https://i.postimg.cc/YS5QbCK4/el-nervio-optico.png",
  },
  {
    id: "2",
    stock: 22,
    category: "clasicos",
    title: "Frankenstein",
    author: "Mary Shelley",
    description:
      "Esta es una de las novelas de terror más famosas de todos los tiempos. Cuenta la historia de Victor Frankenstein, un científico que logra infundir vida a un ser formado a partir de trozos de cadáveres. Sin medir las consecuencias de ese acto, Victor crea un monstruo. La criatura, que es rechazada por él y por cuantos se encuentra en su camino, se rebela contra su creador y decide vengarse. El terror lo invadirá todo..",
    price: 2147,
    pictureUrl: "https://i.postimg.cc/65WnHPSh/frankenstein.png",
  },
  {
    id: "3",
    stock: 10,
    category: "clasicos",
    title: "La mujer Rota",
    author: "Simone de Beauvoir",
    description:
      "La mujer rota es la víctima estupefacta de la vida que ella misma eligió: una dependencia conyugal que la deja despojada de todo y de su ser mismo cuando el amor le es rehusado. Sería en vano buscar moralejas en estos relatos; proponer lecciones, no; mi intención ha sido totalmente diferente. No se vive más que una sola vida, pero, por la simpatía, a veces es posible salirse de la propia piel. Me siento solidaria de las mujeres que han asumido su vida y que luchan por lograr sus objetivos; pero eso no me impide, al contrario, interesarme por aquellas que, de un modo u otro, han fracasado y, en general, por esa parte de fracaso que hay en toda existencia.",
    price: 2285,
    pictureUrl: "https://i.postimg.cc/RCRnnRFJ/la-mujer-rota.png",
  },
  {
    id: "4",
    stock: 20,
    category: "bestsellers",
    title: "El cuento de la criada",
    author: "Margaret Atwood",
    description:
      "Amparándose en la coartada del terrorismo islámico, unos políticos teócratas se hacen con el poder y, como primera medida, suprimen la libertad de prensa y los derechos de las mujeres. Esta trama, inquietante y oscura, que bien podría encontrarse en cualquier obra actual, pertenece en realidad a esta novela escrita por Margaret Atwood a principios de los ochenta, en la que la afamada autora canadiense anticipó con llamativa premonición una amenaza latente en el mundo de hoy.",
    price: 2587,
    pictureUrl: "https://i.postimg.cc/bJP61yzp/el-cuento-de-la-criada.png",
  },
  {
    id: "5",
    stock: 20,
    category: "clasicos",
    title: "Una habitación propia",
    author: "Virginia Woolf",
    description:
      "Una habitación propia tal vez sea la obra más famosa de Virginia Woolf. Se trata de un célebre ensayo publicado en 1929 cuya tesis fundamental es: «Una mujer tiene que tener dinero y una habitación propia para poder escribir novela». Un clásico sobre escritura y género.",
    price: 1836,
    pictureUrl: "https://i.postimg.cc/FzBrV188/una-habitacion-propia.png",
  },
  {
    id: "6",
    stock: 40,
    category: "novedades",
    title: "Nadie viene sin un mundo",
    author: "Virginia Cano",
    description:
      "Nadie viene sin un mundo es un libro de ensayos coordinado por Virginia Cano (Ética tortillera), inquietante y hermoso. Trae la palabra, la amistad, la filosofía en la lengua. Se habla sobre sexualidades, dietas, militancias, plataformas audiovisuales, docencias, activismos y redes sociales. Lxs autorxs han escrito éstos textos para dejar testimonio del temblor que puso en jaque la tiranía de la norma injusta y para reinventar la feliz aventura de lo posible.",
    price: 1125,
    pictureUrl: "https://i.postimg.cc/9MygBkSh/nadie-viene-sin-un-mundo.png",
  },
  {
    id: "7",
    stock: 4,
    category: "",
    title: "La rebelión del Atlas",
    author: "Ayn Rand",
    description:
      "En un Estados Unidos en crisis, con empresas cerradas, sin productos básicos en las tiendas y con un gobierno empeñado en salir del bache con intervenciones y regulaciones económicas, un hombre decide detener el motor del mundo y luchar por su propia libertad y felicidad. Ayn Rand realiza, en 'La rebelión de Atlas', una interesante mezcla entre thriller y reflexión económica y filosófica en lo que ha resultado ser la obra cumbre de la libertad individual frente a los excesos del Estado.",
    price: 2087,
    pictureUrl:
      "https://planetadelibrosar2.cdnstatics.com/usuaris/libros/fotos/302/m_libros/portada_la-rebelion-de-atlas_ayn-rand_201907101626.jpg",
  },
  {
    id: "8",
    stock: 20,
    category: "",
    title: "Mujeres, Raza y Clase",
    author: "Angela Davis",
    description:
      "Habiéndose gestado el feminismo norteamericano como movimiento y teoría política en el seno de las luchas abolicionistas y obreras de finales del siglo xix, ¿cómo es posible que la voz y las reivindicaciones de las mujeres negras hayan sido sistemáticamente invisibilizadas por el feminismo blanco liberal? A partir de esta pregunta, Angela Davis traza una nueva genealogía de los movimientos radicales de liberación norteamericanos en la que desvela las raíces comunes de las luchas antiesclavistas y de los movimientos de defensa de los derechos de las mujeres.",
    price: 5494,
    pictureUrl:
      "https://static.cegal.es/imagenes/marcadas/9788446/978844602093.gif",
  },
  {
    id: "9",
    stock: 10,
    category: "",
    title: "Teoría King Kong",
    author: "Virgine Despentes",
    description:
      "Un incisivo ensayo en el que Despentes comparte su propia experiencia para hablarnos sin tapujos ni concesiones sobre la prostitución, la violación, la represión del deseo, la maternidad y la pornografía, y para contribuir al derrumbe de los cimientos patriarcales de la sociedad actual. «Escribo desde la fealdad, y para las feas, las viejas, las camioneras, las frígidas, las mal folladas, las infollables, todas las excluidas del gran mercado de la buena chica, pero también para los hombres que no tienen ganas de proteger, para los que querrían hacerlo pero no saben cómo, los que no son ambiciosos, ni competitivos, ni la tienen grande. Porque el ideal de la mujer blanca, seductora, que nos ponen delante de los ojos es posible incluso que no exista.»",
    price: 2849,
    pictureUrl:
      "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/650576.jpg",
  },
  {
    id: "10",
    stock: 10,
    category: "clasicos",
    title: "Cuentos de Terramar",
    author: "Ursula K. Le Guin",
    description:
      "Los cinco cuentos reunidos en este libro, que fueron ganadores de los Premios Locus y Endeavour en 2002, exploran y extienden el mundo creado en las Historias de Terramar. El volumen también contiene un ensayo sobre los habitantes, las lenguas, la historia y la magia de Terramar. Esta aclamada continuación del reino mágico de Terramar confirma a Ursula K. Le Guin como una de las más brillantes escritoras de nuestro tiempo.",
    price: 3781,
    pictureUrl:
      "https://imagessl7.casadellibro.com/a/l/t7/07/9788445076507.jpg",
  },
  {
    id: "11",
    stock: 20,
    category: "bestsellers",
    title: "Las Malas",
    author: "Camila Sosa Villada",
    description:
      "Las malas es un rito de iniciación, un cuento de hadas y de terror, un retrato de grupo, un manifiesto explosivo, una visita guiada a la imaginación de su autora y una crónica distinta de todas. En su adn convergen las dos facetas trans que más repelen y aterran a la buena sociedad: la furia travesti y la fiesta de ser travesti. En su voz literaria conviven Marguerite Duras, Wislawa Szymborska y Carson McCullers, con tonada cordobesa. Las malas es esa clase de libro que, en cuanto terminamos de leer, queremos que lo lea el mundo entero.",
    price: 2563,
    pictureUrl: "https://i.postimg.cc/dtsN84jb/las-malas.png",
  },
  {
    id: "12",
    stock: 20,
    category: "bestsellers",
    title: "Nuestra parte de noche",
    author: "Mariana Enriquez",
    description:
      "El lector encontrará en estas páginas casas cuyo interior muta; pasadizos que esconden monstruos inimaginables; rituales con fieros y extáticos sacrificios humanos; andanzas en el Londres psicodélico de los años sesenta, donde la madre de Gaspar conoció a un joven cantante de aire andrógino llamado David; párpados humanos convertidos en fetiches; enigmáticas liturgias sexuales; la relación entre padres e hijos, con la carga de una herencia atroz; y, de fondo, la represión de la dictadura militar, los desaparecidos y, más adelante, la incierta llegada de la democracia, los primeros brotes del sida en Buenos Aires... El terror sobrenatural se entrecruza con terrores muy reales en esta novela perturbadora y deslumbrante, que consagra a Mariana Enriquez como una escritora fundamental de las letras latinoamericanas del siglo XXI.",
    price: 6999,
    pictureUrl:
      "https://www.anagrama-ed.es/uploads/media/portadas/0001/23/9931fa307ceb1ff16718890a064f7522d498e7ef.jpeg",
  },
  {
    id: "13",
    stock: 20,
    category: "novedades",
    title: "Días sin tí",
    author: "Elvira Sastre",
    description:
      "Elvira Sastre ha sido galardonada con el Premio Biblioteca Breve 2019 por esta novela; una obra que indaga en el descubrimiento del amor; en el dolor de la pérdida y en la importancia de trazar un vínculo afectivo con el pasado a través de la memoria individual transmitida entre generaciones que han vivido en mundos muy distintos y que; aun así; encuentran en los sentimientos un idioma común.",
    price: 4299,
    pictureUrl:
      "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/660895.jpg",
  },
  {
    id: "14",
    stock: 20,
    category: "",
    title: "Biografía del hambre",
    author: "Amélie Nothomb",
    description:
      "Nos hallamos ante un libro resueltamente autobiográfico que también es una apología contagiosa del apetito. La autora afirma que, aunque todo lo relatado es real, lo que diferencia la novela de la realidad es la escritura. No obstante haber padecido anorexia durante dos años, en el relato explica su vida a través del hambre y reivindica una avidez y una glotonería en muchos registros: hambre de lenguas, de libros, de alcohol, de chocolate, ansia de belleza y de descubrimientos... Amélie Nothomb afirma que tiene «un apetito absoluto», un deseo jamás colmado, que no parece tener fin y al que la autora asedia en este relato en todas sus formas, del éxtasis al horror, con brío, dolor, amor, humor y lucidez, mientras se dibuja en filigrana la complicada paradoja de existir.",
    price: 3999,
    pictureUrl:
      "https://www.anagrama-ed.es/uploads/media/portadas/0001/27/5fcbc925953ff9b2bf631817893490dc6c50a3be.jpeg",
  },
  {
    id: "15",
    stock: 20,
    category: "clasicos",
    title: "La campana de cristal",
    author: "Sylvia Plath",
    description:
      "Esta es la historia de una chica que tiene todo lo que una joven puede desear en el Nueva York de los años cincuenta: una carrera prometedora, un pretendiente que estudia medicina y toda una vida por delante. Esther Greenwood ha ganado una beca para trabajar en una revista de moda en la gran ciudad y siente que por fin podrá realizar su sueño de ser escritora. Pero entre cócteles, noches de fiesta y pilas de manuscritos descubre una sociedad que repudia las aspiraciones de las mujeres y su vida empieza a desmoronarse. Esther (alter ego de la autora) se encierra en sí misma, como si estuviera atrapada en una campana de cristal: respirando continuamente el mismo aire viciado y sin posibilidad de escapar.",
    price: 7396,
    pictureUrl:
      "https://images.cdn3.buscalibre.com/fit-in/360x360/13/4f/134f3f887ee447c8fb9eb36bbb83d1ea.jpg",
  },
  {
    id: "16",
    stock: 20,
    category: "novedades",
    title: "Las Lealtades",
    author: "Delphine De Vigan",
    description:
      "Todos estos personajes son seres heridos. Marcados por demonios íntimos. Por la soledad, las mentiras, los secretos y los autoengaños. Seres que caminan hacia la autodestrucción, y a los que acaso puedan salvar (o tal vez condenar definitivamente) las lealtades que los conectan, esos «lazos invisibles que nos vinculan a los demás (...) las leyes de la infancia que dormitan en el interior de nuestros cuerpos, los valores en cuyo nombre actuamos con rectitud, los fundamentos que nos permiten resistir, los principios ilegibles que nos corroen y nos aprisionan.",
    price: 2475,
    pictureUrl: "https://i.postimg.cc/mDShCLbW/las-lealtades.png",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(
        products.filter((product) => product.category === categoryId)
      );
    }, 2000);
  });
};

export const getItemById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // console.log("setTimeout", { products, id });
      // console.log(products.find((product) => product.id === id));
      return resolve(products.find((product) => product.id === id));
    }, 2000);
  });
};
