export default {
  global: {
    componenteFormativo: 'Producción gráfica',
    descripcionCurso:
      'La producción gráfica está presente en todos los ámbitos de la vida y encuentra en la publicidad su máximo potencial, convirtiéndose en un elemento indispensable a la hora de competir y atraer nuevos clientes. Se debe asegurar que el diseño transmita el mensaje correctamente y pueda utilizar <i>software</i> especializado para solucionar de manera práctica la producción gráfica.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/interno.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Producción gráfica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<i>Software</i> vectorial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Interfaz y áreas de trabajo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Capas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Herramientas de selección',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Herramientas de dibujo e ilustración',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Herramientas de color',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Herramientas de texto',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Herramientas de efectos',
            hash: 't_2_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.8',
            titulo: 'Herramientas de pinceles',
            hash: 't_2_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.9',
            titulo: 'Herramientas de organización de objetos',
            hash: 't_2_9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.10',
            titulo: 'Almacenamiento, importación y exportación',
            hash: 't_2_10',
          },
          {
            icono: 'far fa-file-alt',
            numero: '',
            titulo: 'Sintesis',
            hash: 't_sintesis',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Adobe. (2016). Ayuda de Adobe Illustrator CC.',
      link: 'https://helpx.adobe.com/es/pdf/illustrator_reference.pdf',
    },
    {
      referencia: 'Adobe. (2017). Empaquetado de archivos.',
      link: 'https://helpx.adobe.com/es/illustrator/using/package-files.html',
    },
    {
      referencia: 'Adobe. (s.f.). Resumen de efectos.',
      link: 'https://helpx.adobe.com/es/illustrator/using/summary-effects.html',
    },
    {
      referencia: 'Angie. (2020). Tipos de <i>Branding</i>.',
      link: 'https://www.grupoendor.com/tipos-de-branding/ ',
    },
    {
      referencia:
        'ARD. (2019). Combinar, unir, agrupar CAPAS en Illustrator cc 2019  [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=mpuHqvgeKpc',
    },
    {
      referencia:
        'Capriotti P. (2009). <i>Branding</i> corporativo Fundamentos para la gestión estratégica de la identidad corporativa. ',
      link: 'http://www.analisisdemedios.com/branding/BrandingCorporativo.pdf',
    },
    {
      referencia:
        'Kalous, P. (2010). Una introducción a las herramientas de color de Illustrator.',
      link:
        'https://design.tutsplus.com/es/tutorials/an-introduction-to-illustrators-color-tools--vector-3549',
    },
    {
      referencia:
        'Leyva, V. (s.f.). El diseño gráfico de materiales educativos.',
      link:
        'https://foroalfa.org/articulos/el-diseno-grafico-de-materiales-educativos',
    },
    {
      referencia: 'Ojeda, G. (2010). Producción gráfica.',
      link: 'https://es.slideshare.net/tls02cv/produccion-grafica',
    },
    {
      referencia:
        'Razak, A. (s.f.). <i>Naming</i>: definición, tipos y guía paso a paso. ',
      link: 'https://www.branfluence.com/guia-proceso-de-naming/',
    },
    {
      referencia: 'Rivas, T. (2020). ¿Qué es un acrónimo? ',
      link:
        'https://www.estandarte.com/noticias/idioma-espanol/qu-es-un-acrnimo_2120.html',
    },
    {
      referencia:
        'Samsing, C. (2019). <i>Branding</i> Empresarial: cómo crear un manual de identidad corporativa.',
      link:
        'https://blog.hubspot.es/marketing/branding-e-identidad-corporativa-guias-de-estilo',
    },
    {
      referencia: 'Santarsiero, H. (2008). La Producción Gráfica. ',
      link:
        'https://elblogdelprofenestor.files.wordpress.com/2019/05/produccion-grafica-h-santarsiero.pdf',
    },
  ],
  glosario: [
    {
      termino: '<i>Branding</i>',
      significado:
        'hace referencia al proceso para construir y gestionar una marca, se vincula en forma directa o indirecta al nombre y/o símbolo (logotipo), que la identifican, la hacen única y competitiva.',
    },
    {
      termino: 'Editorial',
      significado:
        'corresponde a un artículo que expresa la opinión sobre un tema determinado, generalmente de interés público; a través de un medio de comunicación como el periódico o la revista.',
    },
    {
      termino: 'Exponencial',
      significado:
        'relativo al crecimiento, que se incrementa cada vez más rápido. ',
    },
    {
      termino: 'Interfaz de usuario',
      significado:
        'en el ámbito de la informática se conoce como el medio que le permite al usuario comunicarse con la máquina. Generalmente los programas informáticos usan una interfaz intuitiva, que facilita la navegación e interacción.',
    },
    {
      termino: 'Marca',
      significado:
        'se entiende como una identificación comercial, conformada por atributos y valores que la hacen única.',
    },
    {
      termino: 'Publicidad',
      significado:
        'es una forma de comunicación con el propósito de presentar, divulgar o promocionar productos o servicios.',
    },
    {
      termino: '<i>Software</i> vectorial',
      significado:
        'permite la creación de diseños con gran valor artístico a través de vectores, y con la ventaja que se pueden ampliar o reducir sin perder la calidad.',
    },
  ],
  complementario: [
    {
      texto: 'Ojeda, G. (2010). Producción gráfica.',
      tipo: 'Presentación',
      link: 'https://es.slideshare.net/tls02cv/produccion-grafica',
    },
    {
      texto: 'Santarsiero, H. (2008) La Producción Gráfica.',
      tipo: 'PDF',
      link:
        'https://elblogdelprofenestor.files.wordpress.com/2019/05/produccion-grafica-h-santarsiero.pdf',
    },
    {
      texto: 'Adobe. (2016). Ayuda de Adobe Illustrator CC.',
      tipo: 'PDF',
      link: 'https://helpx.adobe.com/es/pdf/illustrator_reference.pdf',
    },
    {
      texto:
        'Capriotti, P. (2009). <i>Branding</i> corporativo, fundamentos para la gestión estratégica de la identidad corporativa. ',
      tipo: 'PDF',
      link: 'http://www.analisisdemedios.com/branding/BrandingCorporativo.pdf',
    },
    {
      texto:
        'ARD (2019). Combinar, unir, agrupar CAPAS en Illustrator cc 2019 [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=mpuHqvgeKpc',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Guillermo Eduardo González',
        cargo: 'Instructor',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Eduardo José Velasco',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital ',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Revisión de estilo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
