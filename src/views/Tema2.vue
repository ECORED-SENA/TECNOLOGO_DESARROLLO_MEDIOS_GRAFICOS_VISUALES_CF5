<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Software vectorial
    p.mb-5 Un software vectorial es aquel que permite la creación y edición de gráficos por medio de vectores y líneas que se pueden, modificar para crear dibujos, ilustraciones, logotipos, tipografías y demás; los gráficos vectoriales a diferencia de los pixeles, se componen por ecuaciones y se podrán ampliar tantas veces sea necesario. 
    .row.mb-5
      .col-lg-4(data-aos="fade-right"): img(src='@/assets/curso/14.svg')
      .col-lg-4(data-aos="fade-down"): img(src='@/assets/curso/15.svg')
      .col-lg-4(data-aos="fade-left"): img(src='@/assets/curso/16.svg')
    p.mb-5 Para una mejor comprensión es importante definir qué es una imagen vectorial y qué es una imagen de mapas de bits, sus diferencias, manejos y usos; esto es:
    .row.mb-5.justify-content-center
      .col-lg-5
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false" style='height: 472px')
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor.d-flex.justify-content-center.align-items-center
            .tarjeta-flip__img
              .animacion-imagenes
            .tarjeta-flip__contenido.p-4.p-xl-5.text-center
              h3 Imagen vectorial 
              p Una imagen vectorial es aquella realizada por medio de vectores, objetos definidos a partir de puntos unidos por líneas que forman figuras geométricas, para realizar dibujos, ilustraciones, logotipos, etc.  
      .col-lg-5
        .tarjeta.tarjeta-flip.color-acento-botones(style='height: 472px')
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .animacion-imagenes2
            .tarjeta-flip__contenido.p-4.p-xl-5.text-center
              h3 Imagen mapa de bits
              p La imagen de mapa de bits es una imagen conformada por pequeños puntos de color llamados píxeles, cada uno contiene un color y ciertas características. A mayor cantidad de puntos se obtiene una mayor resolución y a menor cantidad de estos una baja en la calidad de imagen. Estas imágenes son las que generalmente conocemos como fotografías y están representadas por dos números que simbolizan la cantidad de puntos a lo largo y ancho, por ejemplo 1280 x 720.
    p.mb-5 Para explicar lo anterior, a continuación, se presenta un cuadro comparativo para imagen vectorial e imagen mapa de bits:
    .titulo-sexto.color-acento-contenido
      h5 Tabla 1
      span Cuadro comparativo
    .tabla-a.color-acento-contenido.mb-5 
      table
        thead
          tr.text-center
            th.h3 Imagen vectorial
            th.h3 Imagen mapa de bits 
        tbody
          tr.p-0
            td.p-0: img(src='@/assets/curso/23.svg')
            td.p-0: img(src='@/assets/curso/24.jpg') 
          tr
            td Es una imagen realizada por medio de vectores.
            td Su captura se hace por medios tecnológicos como cámaras fotográficas, video y celulares.
          tr
            td La imagen vectorial no depende de la resolución, su calidad siempre se mantiene. 
            td Dependen de la resolución.
          tr
            td La imagen vectorial se puede agrandar o contraer y no pierde calidad.
            td La calidad de la imagen fotográfica depende del número de píxeles por la cual  este compuesta, por esto perderá calidad si aumentamos o disminuimos su  tamaño, en proporciones fuera de su rango.
          tr
            td Las imágenes vectoriales ocupan muy poco espacio. 
            td A mayor resolución, mayor peso.
          tr
            td Son imágenes destinadas a la representación gráfica de elementos.
            td Su ventaja principal, es el realismo con el cual se ve la imagen. 
          tr
            td Mantienen su calidad y aspecto. 
            td Van perdiendo calidad cada vez que se guardan o modifican. 
          tr
            td Generalmente se utilizan programas como CorelDraw o Illustrator, ya que son programas para dibujar y no para retocar.  
            td Se utiliza Photoshop, ya que buscamos retocar la imagen para un mejor resultado. 
          tr
            td En Illustrator, se pueden realizar piezas como carteles, logotipos, dibujos, ilustraciones, aplicaciones, papelería, bocetos etc.
            td En Photoshop se retocan imágenes para restaurar, modificar o cambiar la apariencia. De igual manera es posible realizar piezas publicitarias. 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Interfaz y áreas de trabajo
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-3 El programa o software de <i>Illustrator</i> que se presenta a continuación es uno o el más usado en la industria actualmente, es uno de tantos programas de la familia Adobe y es el especializado en diseño vectorial, revise sus principales características y herramientas y logre familiarizarse.
          br
          br
          |Para empezar a trabajar en Illustrator, abra el programa en su equipo y siga las instrucciones dadas en los videos <b>01. Espacios de Trabajo y 02. Zoom y desplazamiento</b>, en los cuales se refieren los siguientes elementos.
          br
          br
          |Recuerde que también podrá ver un documento que explica estos dos videos: 
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/25.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    .row.mb-5
      .col-lg-3
        .tarjeta.color-acento-botones--borde.p-5.px-4.h-100.hover
          img(src='@/assets/curso/26.svg' style="width: 73px").mb-3
          h4 La barra de menús
          p En la parte superior de la ventana muestra los menús Archivo, Edición y otros que te permiten acceder a gran variedad de comandos, ajustes, configuraciones y paneles. 
      .col-lg-3
        .tarjeta.color-acento-botones--borde.p-5.px-4.h-100.hover
          img(src='@/assets/curso/26.svg' style="width: 73px").mb-3
          h4 El panel de herramientas 
          p A la izquierda contiene herramientas para la creación de ilustraciones y edición; estas herramientas se agrupan juntas y se puede acceder a ellas haciendo clic en el panel de herramientas.
      .col-lg-3
        .tarjeta.color-acento-botones--borde.p-5.px-4.h-100.hover
          img(src='@/assets/curso/26.svg' style="width: 73px").mb-3
          h4 Los paneles 
          p Están situados a la derecha y entre ellos se encuentran las propiedades, capas y otros paneles que contienen otros controles de cada herramienta, se puede ver una lista completa de los paneles en el menú Ventana.
      .col-lg-3
        .tarjeta.color-acento-botones--borde.p-5.px-4.h-100.hover
          img(src='@/assets/curso/26.svg' style="width: 73px").mb-3
          h4 La ventana documento
          p Muestra el archivo donde se está trabajando en el momento, cuando existen varios documentos abiertos se muestran por pestañas en la parte superior del documento.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    //todo! PENDIENTE VINCULAR EL ENLACE 
    .tarjeta.bg--amarillo.p-4.mb-5.rounded-0.mt-5
      .row.justify-content-around.align-items-center.position-relative
        img.position-absolute.d-none.d-lg-block(src="@/assets/curso/27.svg" alt="Adornos flotantes" style="width: 117px ; left: 3% ; top: -80% ")
        .col-4.col-sm-2.col-lg-1
        .col-lg-10
          .row.justify-content-between.align-items-center
            .col-6.mb-3.mb-sm-0
              p.mb-0.fw-bold Para una mayor información, se invita al aprendiz a descargar Anexo_Explicación videos 1 y 2 (Pdf)
            .col-sm-auto
              a.boton.color-acento-botones.tb(href='https://www.youtube.com/watch?v=I7gIIby02aw&t=8s' target='_blank')
                span Descargar
                i.fas.fa-download
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2. Capas
    .row.mb-5.align-items-center
      .col-lg-7(data-aos="fade-right")
        p.mb-3 En un documento, podemos encontrar varias capas, estas permiten trabajar con los elementos en distintos niveles; se puede pensar en cada capa como una lámina transparente que permite trabajar por independiente y que al momento de juntarlos se logra un solo proyecto. 
          br
          br
          |El orden de cada capa, determina el orden de los objetos, lo que hace que al momento de adjuntar un objeto se localice encima y para abajo las capas inferiores. Esto facilita el trabajo sobre todo en documentos más complejos, pudiendo tener capas por separado y la posibilidad de controlarlas.
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/28.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    p.mb-5 En la siguiente figura se observa la apariencia de las capas:
    .titulo-sexto.color-acento-contenido
      h5 Figura 1
      span Capas
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/29.svg', alt='Texto que describa la imagen')
          

      .tarjeta.bg-white.p-3(x="45%" y="10%")
        .h5.mb-0 Capa Seleccionada
      .tarjeta.bg-white.p-3(x="58%" y="15%")
        .h5.mb-0 Botón Panel de capas  
      .tarjeta.bg-white.p-3(x="38%" y="25%")
        .h5.mb-0 Capa Bloqueada
      .tarjeta.bg-white.p-3(x="35%" y="34%")
        .h5.mb-0 Capa visible 
      .tarjeta.bg-white.p-3(x="52%" y="34%")
        .h5.mb-0 Seleccionar Elementos
      .tarjeta.bg-white.p-3(x="55%" y="35%")
        .h5.mb-0 Apariencia
      .tarjeta.bg-white.p-3(x="44%" y="83%")
        .h5.mb-0 Máscara de Recorte
      .tarjeta.bg-white.p-3(x="48%" y="85%")
        .h5.mb-0 Crear Subcapa
      .tarjeta.bg-white.p-3(x="51%" y="83%")
        .h5.mb-0 Crear Capa
      .tarjeta.bg-white.p-3(x="54%" y="85%")
        .h5.mb-0 Borrar Capa
    .row.mb-5.align-items-center
      .col-lg-7(data-aos="fade-right")
        p.mb-3 En el panel Capas se puede disponer de las capas para poder movernos y tener más control de cada una, en el panel encontramos las capas. Al creare un archivo nuevo solo encontraremos una sola. A la izquierda de cada capa encontraremos un triángulo que contrae o expande cada una, mostrando todos los objetos que la contienen, esta a su vez puede contener más sub-capas o nuevos objetos.
          br
          br
          |A la izquierda tenemos dos columnas con íconos que aparecen o desaparecen según la cantidad de clics; en la primera se aparecerá un ojo 
          span
            img(src="@/assets/curso/ojo.jpg" alt="Candado" style="width: 18px; height: 18px; display: inline-block").mx-1
          |,  que oculta o muestra la capa y encontramos también un candado 
          span
            img(src="@/assets/curso/candado.jpg" alt="Candado" style="width: 18px; height: 18px; display: inline-block").mx-1
          |que bloquea la edición de la capa en todos sus sentidos.   
          br
          br
          |En la parte inferior se localizan los controles que permiten la creación o eliminación de las capas y sub capas, al hacer doble clic, se accede a las propiedades, con edición de sus características; se debe tener en cuenta que, al momento de trabajar en alguna capa, esta se verá resaltada en azul. 
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/30.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    //todo! PENDIENTE VINCULAR EL ENLACE 
    .tarjeta.bg--amarillo.p-4.mb-5.rounded-0.mt-5
      .row.justify-content-around.align-items-center.position-relative
        img.position-absolute.d-none.d-lg-block(src="@/assets/curso/31.svg" alt="Adornos flotantes" style="width: 120px ; left: 3% ; top: -40% ")
        .col-4.col-sm-2.col-lg-1
        .col-lg-10
          .row.justify-content-between.align-items-center
            .col-8.mb-3.mb-sm-0
              p.mb-0 Lo invitamos a revisar el video en el material complementario, con el que se profundiza sobre <b>capas</b>, cómo crearlas, borrarlas, unirlas, separarlas, etc., no dudes en visitarlo. <b>Combinar, unir, agrupar CAPAS en Illustrator cc 2019</b>.
            .col-sm-auto
              a.boton.color-acento-botones.tb(href='https://www.youtube.com/watch?v=I7gIIby02aw&t=8s' target='_blank')
                span Descargar
                i.fas.fa-download
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3  Herramientas de selección
    p.mb-5 Para modificar, trabajar, editar o lo que sea que quiera hacer con un objeto en Illustrator, lo primero que se debe es seleccionarlo, todas estas propiedades las podemos editar en el panel de control; la forma más simple de seleccionar un objeto es haciendo clic sobre él, o haciendo una selección con esta misma herramienta, que abarque el elemento total o parcial del elemento o varios elementos.
      br
      br
      |Cuando el objeto aparece seleccionado se verá un recuadro que lo delimita, si son más 2 o más objetos, el recuadro abarca la selección, como lo puede observar en la siguiente figura:
    .titulo-sexto.color-acento-contenido
      h5 Figura 2
      span Objeto seleccionado
    .row.mb-5.justify-content-center
      .col-lg-5: img(src="@/assets/curso/32.jpg" alt="Adornos flotantes")
      .col-lg-5: img(src="@/assets/curso/33.jpg" alt="Adornos flotantes")
    .row.justify-content-center
      .col-lg-12
        #carouselExampleIndicators2.carousel.slide(data-bs-ride='carousel')
      
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='2' aria-label='Slide 3')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='3' aria-label='Slide 1')
          .carousel-inner
            .row.justify-content-center
              .col-lg-10
                .carousel-item.active.p-4
                  .row.mb-5
                    .col-sm-6.col-xl-4.mb-4.mb-xl-0
                      .tarjeta.rounded-0.bg--2-claro.p-4
                        img(src="@/assets/curso/34.svg" alt="Adornos flotantes" style="width: 84px").m-auto.mb-3
                        .textos-contenido.text-center(style="height: 236px ").mb-5
                          h4 Selección directa 
                          p  Está más enfocada a seleccionar puntos de ancla o segmentos de trazado individuales, haciendo clic en ellos o seleccionando un trazado o grupo entero haciendo clic en cualquier parte del elemento; también se puede seleccionar uno o varios objetos de un grupo de objetos.
                        img(src="@/assets/curso/38.svg" ).m-auto
                    .col-sm-6.col-xl-4.mb-4.mb-xl-0
                      .tarjeta.rounded-0.bg--2-claro.p-4
                        img(src="@/assets/curso/35.svg" alt="Adornos flotantes" style="width: 84px").m-auto.mb-3
                        .textos-contenido.text-center(style="height: 236px ").mb-5
                          h4 Selección de grupos
                          p  Permite seleccionar un objeto dentro de un grupo, un único grupo dentro de varios grupos o un conjunto de grupos dentro de la ilustración. Cada clic adicional añade todos los objetos del siguiente grupo de la jerarquía.
                        img(src="@/assets/curso/39.svg" ).m-auto
                    .col-sm-6.col-xl-4.mb-4.mb-xl-0
                      .tarjeta.rounded-0.bg--2-claro.p-4
                        img(src="@/assets/curso/36.svg" alt="Adornos flotantes" style="width: 84px").m-auto.mb-3
                        .textos-contenido.text-center(style="height: 236px ").mb-5
                          h4 Herramienta lazo 
                          p  Permite seleccionar objetos, puntos de ancla o segmentos de trazado al arrastrarla alrededor de todo el objeto o parte de este, generalmente se guía por las gamas de color.
                        img(src="@/assets/curso/40.svg" ).m-auto
                .carousel-item.p-4
                  .row.mb-5
                    .col-sm-6.col-xl-4.mb-4.mb-xl-0
                      .tarjeta.rounded-0.bg--2-claro.p-4
                        img(src="@/assets/curso/37.svg" alt="Adornos flotantes" style="width: 84px").m-auto.mb-3
                        .textos-contenido.text-center(style="height: 236px ").mb-5
                          h4 Varita mágica  
                          p  Permite seleccionar objetos del mismo color, grosor de trazado, color de trazo, opacidad o modo de fusión, haciendo clic en el objeto.
                        img(src="@/assets/curso/41.svg" ).m-auto

          button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next
    .tarjeta.bg--4-claro.p-4.mb-5.rounded-0.mt-5
      .row.justify-content-around.align-items-center.position-relative
        img.position-absolute.d-none.d-lg-block(src="@/assets/curso/31.svg" alt="Adornos flotantes" style="width: 117px ; left: 3% ; top: -80% ")
        .col-4.col-sm-2.col-lg-1
        .col-lg-10
          .row.justify-content-between.align-items-center
            .col-8.mb-3.mb-sm-0
              p.mb-0 Lo invitamos a revisar el <b>video 03</b>, Herramientas de Selección en el que se hace un repaso de <b>las herramientas de selección</b>.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Herramientas de dibujo e ilustración
    p.mb-5 En este apartado se abordarán las herramientas que ayudarán a construir elementos básicos, que a su vez serán los elementos para construir diversas formas, estas son numerosas y con diferentes opciones, por lo que es muy importante que se practique mucho, ya que la imaginación y la práctica determinarán el límite y calidad de los trabajos.
      br
      br
      |Con el siguiente recurso puede estudiar los conceptos básicos y sus principales propiedades, se debe recordar que es un programa vectorial y sus elementos se basan en trazado:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .tarjeta.bg--4-claro.p-4.mb-5.rounded-0.mt-5
      .row.justify-content-around.align-items-center.position-relative
        img.position-absolute.d-none.d-lg-block(src="@/assets/curso/31.svg" alt="Adornos flotantes" style="width: 117px ; left: 3% ; top: -80% ")
        .col-4.col-sm-2.col-lg-1
        .col-lg-10
          .row.justify-content-between.align-items-center
            .col-8.mb-3.mb-sm-0
              p.mb-0 Lo invitamos a revisar el <b>video 04</b>. Herramientas de Dibujo en el que se hace un repaso de <b>las herramientas de dibujo de Illustrator y sus características</b>.
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5 Herramientas de color
    .row.mb-5.align-items-center
      .col-lg-7(data-aos="fade-right")
        p.mb-3 Illustrator presenta una gran variedad de herramientas que permitirán la elaboración de miles de formas vectoriales y a su vez posee varios modos de color, que ayudan a la configuración de los elementos a utilizar, al igual que la información como vendrá contenida la mesa de trabajo, adicional al tradicional CMYK. 
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/42.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    p.mb-5 Estos son los modos que facilita el programa: 
    .row.justify-content-center
      .col-lg-12
        #carouselExampleIndicators1.carousel.slide(data-bs-ride='carousel')
      
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselExampleIndicators1' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselExampleIndicators1' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselExampleIndicators1' data-bs-slide-to='2' aria-label='Slide 3')
            button(type='button' data-bs-target='#carouselExampleIndicators1' data-bs-slide-to='3' aria-label='Slide 1')
          .carousel-inner
            .row.justify-content-center
              .col-lg-10
                .carousel-item.active.p-4
                  .row.mb-5.justify-content-center
                    .col-sm-6.col-xl-6.mb-4.mb-xl-0
                      .tarjeta.tarjeta-img-up.rounded-0.bg--2-claro.p-5
                        img(src="@/assets/curso/44.svg" alt="Adornos flotantes" style="width: 67px").mb-3
                        .imagen: img(src="@/assets/curso/43.jpg" alt="Adornos flotantes" ).mb-3
                        .textos-contenido.mb-5
                          h4 CMYK
                          p Este modelo de color se basa en la absorción de la tinta en el papel impreso. 
                            br
                            br
                            |Trabaja con cian (1), magenta (2), amarillo (3) y negro (4), y cualquier color se obtiene a través de valores porcentuales de estos colores. Menor porcentaje equivale a colores más claros y mayor porcentaje equivale a colores más oscuros.
                    .col-sm-6.col-xl-6.mb-4.mb-xl-0
                      .tarjeta.tarjeta-img-up.rounded-0.bg--2-claro.p-5
                        img(src="@/assets/curso/44.svg" alt="Adornos flotantes" style="width: 67px").mb-3
                        .imagen: img(src="@/assets/curso/43.jpg" alt="Adornos flotantes" ).mb-3
                        .textos-contenido
                          h4 RGB
                          p Este modelo de color se crea superponiendo las luces de color rojo (1), verde (2) y azul (3). representa una amplia gama de matices de color. Cada uno de estos tres colores tiene rango de 0 a 255 que representa su intensidad.  
                .carousel-item.p-4
                  .row.mb-5.justify-content-center
                    .col-sm-6.col-xl-6.mb-4.mb-xl-0
                      .tarjeta.tarjeta-img-up.rounded-0.bg--2-claro.p-5
                        img(src="@/assets/curso/44.svg" alt="Adornos flotantes" style="width: 67px").mb-3
                        .imagen: img(src="@/assets/curso/43.jpg" alt="Adornos flotantes" ).mb-3
                        .textos-contenido.mb-5
                          h4 HSB
                          p Este modelo de color es más cercano a la percepción humana de los colores.
                            br
                            br
                            |HSB contiene tres elementos base, tono (1), saturación (2), y brillo (3). Este modelo de color puede encontrarse también como HSV que traduce Tono, Saturación y Valor, y es similar a HSB.
                    .col-sm-6.col-xl-6.mb-4.mb-xl-0
                      .tarjeta.tarjeta-img-up.rounded-0.bg--2-claro.p-5
                        img(src="@/assets/curso/44.svg" alt="Adornos flotantes" style="width: 67px").mb-3
                        .imagen: img(src="@/assets/curso/44.jpg" alt="Adornos flotantes" ).mb-3
                        .textos-contenido
                          h4 LAB
                          p Este modelo de color se basa en como se ve el color, en lugar de su valor en los medios digitales. Representa el valor absoluto de color independientemente de las computadoras. El valor de color se mezcla a través de tres ejes. L (1) que significa claridad y tiene valor de 0/negro a 100/blanco, A (2) que representa los ejes del verde al rojo y B (3) que representa los ejes del azul al amarillo (Kalous, 2010).  
                .carousel-item.p-4
                  .row.mb-5.justify-content-center
                    .col-sm-6.col-xl-6.mb-4.mb-xl-0
                      .tarjeta.tarjeta-img-up.rounded-0.bg--2-claro.p-5
                        img(src="@/assets/curso/44.svg" alt="Adornos flotantes" style="width: 67px").mb-3
                        .imagen: img(src="@/assets/curso/45.jpg" alt="Adornos flotantes" ).mb-3
                        .textos-contenido.mb-5
                          h4 Escala de grises
                          p Este modelo utiliza la escala de grises con un brillo comprendido del 0 % de blanco, hasta el 100 % de negro.

          button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators1' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators1' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next
    .tarjeta.bg--4-claro.p-4.mb-5.rounded-0.mt-5
      .row.justify-content-around.align-items-center.position-relative
        img.position-absolute.d-none.d-lg-block(src="@/assets/curso/31.svg" alt="Adornos flotantes" style="width: 117px ; left: 3% ; top: -80% ")
        .col-4.col-sm-2.col-lg-1
        .col-lg-10
          .row.justify-content-between.align-items-center
            .col-8.mb-3.mb-sm-0
              p.mb-0 Lo invitamos a revisar el <b>video 05.</b> Herramientas de Color, con el cual aprenderá a manejar muestras de color, <b>crear nuevos colores y gestionar paletas de colores.</b>
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.6 Herramientas de texto
    p.mb-5 La herramienta texto, es una herramienta muy importante con la que permitirá añadir líneas y cajas de texto, crear columnas y adaptar textos sobre algún trazado específico, además de poder editar cada letra o carácter como un elemento individual. 
      br
      br
      |Al utilizar la herramienta “texto” es muy importante tener en cuenta todas las variaciones y características en la barra de herramientas, entre las que se pueden distinguir las siguientes:
    ImagenInfografica.color-acento-contenido.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/48.jpg', alt='Texto que describa la imagen')

      .tarjeta.color-secundario.p-3(x="13%" y="6%" numero="1")
        .h5.mb-0 Relleno de forma
      .tarjeta.color-secundario.p-3(x="17.5%" y="10%" numero="2")
        .h5.mb-0 Color contorno
      .tarjeta.color-secundario.p-3(x="25%" y="5%" numero="3")
        .h5.mb-0 Grosor del contorno de línea
      .tarjeta.color-secundario.p-3(x="32%" y="13%" numero="4")
        .h5.mb-0 Anchura variable tipo pincel
      .tarjeta.color-secundario.p-3(x="45%" y="6%" numero="5")
        .h5.mb-0 Opacidad del color
      .tarjeta.color-secundario.p-3(x="64%" y="10%" numero="6")
        .h5.mb-0 Carácter de tipografía, desde este podemos cambiar la tipografía usada
      .tarjeta.color-secundario.p-3(x="74%" y="8%" numero="7")
        .h5.mb-0 Estilo, puede ser bold, negrita, itálica, etc
      .tarjeta.color-secundario.p-3(x="82%" y="9%" numero="8")
        .h5.mb-0 Tamaño de fuente o letra, el cual se mide en puntos
      .tarjeta.color-secundario.p-3(x="85%" y="5%" numero="9")
        .h5.mb-0 Párrafo, alinear a la derecha, centrar o a la izquierda
    .tarjeta.bg--4-claro.p-3.mb-5.rounded-0.mt-5
      .row.justify-content-around.align-items-center.position-relative
        img.position-absolute.d-none.d-lg-block(src="@/assets/curso/31.svg" alt="Adornos flotantes" style="width: 132px ; left: 3% ; top: -30% ")
        .col-4.col-sm-2.col-lg-1
        .col-lg-10
          .row.justify-content-between.align-items-center
            .col-10.mb-3.mb-sm-0
              p.mb-0 Lo invitamos a revisar el <b>video 06. Herramientas de Texto</b>, podrá reconocer las diferentes herramientas de texto y párrafo; modificar y editar texto, y generar efectos y sus herramientas principales. 
                br
                br
                <b>Además, podrá revisar el anexo explicativo de la herramienta Texto.</b>
            .col-sm-auto
              a.boton.color-acento-botones.tb(href='https://www.youtube.com/watch?v=I7gIIby02aw&t=8s' target='_blank')
                span Descargar
                i.fas.fa-download
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    #t_2_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.7 Herramientas de efectos
    .row.mb-5.align-items-center
      .col-lg-7(data-aos="fade-right")
        p.mb-3 Illustrator permite trabajar varios efectos, estos se pueden aplicar sobre objetos grupos o capas. A partir de formas básicas realizar objetos tridimensionales.  En el panel superior del menú principal, se encuentra el comando “efecto”, donde puede encontrar dichas herramientas; se pueden distinguir dos tipos de efectos, los que corresponden a efectos vectoriales, que se ubican de la línea hacia arriba; y los del menú inferior son efectos de rasterizado y se aplican a objetos de mapa de bits en su mayoría. 
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/49.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    p.mb-5 En la siguiente figura se muestra el efecto Aplicar Girar, el cual permite que el objeto gire en su propio eje y que surja un elemento tridimensional:
    .titulo-sexto.color-acento-contenido
      h5 Figura 3
      span  Efecto Aplicar Girar
    figure.mb-5
      img(src="@/assets/curso/50.jpg" )
    p.mb-5 A continuación, puede revisar algunos de los efectos de Illustrator:
    .row.mb-3
      .col-lg-4
        .tarjeta.tarjetas-text.rounded-0(@mouseover="mostrarIndicador= false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src="@/assets/curso/51.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
          .tarjetas-text__contenido.px-5.pb-5.pt-3.mb-3
            h3 3D
            p Convierte los trazos abiertos o cerrados, o los mapas de bits, en objetos tridimensionales (3D) que se pueden rotar, iluminar y sombrear.
              br
              br
              |En esta herramienta se encuentran 3 parámetros para trabajar, extrusión y biselado, girar y rotar, cada uno utilizado con una función específica.
      .col-lg-4
        .tarjeta.tarjetas-text.rounded-0
          img(src="@/assets/curso/52.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
          .tarjetas-text__contenido.px-5.pb-5.pt-3.mb-3
            h3 Buscatrazos
            p Combina grupos, capas o subcapas en objetos editables sencillos.
      .col-lg-4
        .tarjeta.tarjetas-text.rounded-0
          img(src="@/assets/curso/53.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
          .tarjetas-text__contenido.px-5.pb-5.pt-3.mb-3
            h3 Deformar
            p Distorsiona o deforma los objetos, incluidos trazados, texto, mallas, fusiones e imágenes rasterizadas.
    .row.mb-5
      .col-lg-4
        .tarjeta.tarjetas-text.rounded-0
          img(src="@/assets/curso/54.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
          .tarjetas-text__contenido.px-5.pb-5.pt-3.mb-3
            h3 Distorsionar y deformar
            p Reforma objetos vectoriales o aplica los efectos a un relleno o un trazo añadido a un objeto de mapa de bits con el panel apariencia (Adobe, s.f.).
      .col-lg-4
        .tarjeta.tarjetas-text.rounded-0
          img(src="@/assets/curso/55.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
          .tarjetas-text__contenido.px-5.pb-5.pt-3.mb-3
            h3 Rasterizar
            p Convierte un gráfico vectorial en una imagen de mapa de bits.
      .col-lg-4
        .tarjeta.tarjetas-text.rounded-0
          img(src="@/assets/curso/56.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
          .tarjetas-text__contenido.px-5.pb-5.pt-3.mb-3
            h3 Marcas de recorte
            p Muestra marcas de recorte del objeto.
    .tarjeta.bg--4-claro.p-3.mb-5.rounded-0.mt-5
      .row.justify-content-around.align-items-center.position-relative
        img.position-absolute.d-none.d-lg-block(src="@/assets/curso/31.svg" alt="Adornos flotantes" style="width: 132px ; left: 3% ; top: -30% ")
        .col-4.col-sm-2.col-lg-1
        .col-lg-10
          .row.justify-content-between.align-items-center
            .col-10.mb-3.mb-sm-0
              p.mb-0 Lo invitamos a revisar el <b>video 07</b>. Video Tridimensional, aprenderá a seleccionar y construir una <b>forma bidimensional y transformarla en un elemento tridimensional</b>.
    p.mb-5 Complementando lo anterior, en la siguiente tabla puede revisar algunos efectos y una pequeña descripción de cada uno:
    .titulo-sexto.color-acento-contenido
      h5 Tabla 2
      span Efectos y su descripción
    .row.mb-5.justify-content-center
      .col-lg-9
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr
                th.h3 Efecto 
                th.h3 Acción
            tbody
              tr
                td.fw-bold 3D
                td Convierte los trazados abiertos o cerrados, o los mapas de bits, en objetos tridimensionales (3D) que se pueden rotar, iluminar y sombrear. 
              tr
                td.fw-bold Artístico
                td Simulan una apariencia pictórica sobre un soporte tradicional. 
              tr
                td.fw-bold Desenfocar
                td Retocan las imágenes y suavizan las transiciones promediando los píxeles próximos a los bordes fuertes de las líneas definidas y las áreas sombreadas de una imagen.
              tr
                td.fw-bold Trazos de pincel
                td Crean una apariencia pictórica o artística mediante el uso de diferentes trazos de pincel y tinta. 
              tr
                td.fw-bold Convertir en forma
                td Reforma un objeto vectorial o de mapa de bits.
              tr
                td.fw-bold Marcas de recorte
                td Aplica marcas de recorte al objeto seleccionado. 
              tr
                td.fw-bold Distorsionar y Transformar
                td Reforma objetos vectoriales o aplica los efectos a un relleno o un trazo añadido a un objeto de mapa de bits con el panel Apariencia. 
              tr
                td.fw-bold Distorsionar
                td Distorsiona geométricamente y reforma una imagen. 
              tr
                td.fw-bold Trazado
                td Desplaza el trazado de un objeto con respecto a su posición original, convierte el texto en un conjunto de trazados compuestos que se pueden modificar y manipular como otro objeto gráfico y cambia el trazo de un objeto seleccionado por un objeto relleno que tiene la misma anchura que el trazo del objeto original. 
              tr
                td.fw-bold Busca trazos
                td Combina grupos, capas o subcapas en objetos editables sencillos. 
              tr
                td.fw-bold Pixelizar
                td Definen claramente una selección mediante el agrupamiento de los píxeles con valores de color similares. 
              tr
                td.fw-bold Rasterizar
                td Convierte un objeto vectorial en un objeto de mapa de bits. 
              tr
                td.fw-bold Enfocar
                td Enfocan imágenes borrosas aumentando el contraste de los píxeles adyacentes. 
              tr
                td.fw-bold Bosquejar
                td Añaden textura a las imágenes, a veces para obtener un efecto tridimensional. Los efectos también son útiles para crear una apariencia más elaborada o de dibujos hechos a mano. 
              tr
                td.fw-bold Estilizar<br>
                  span.text-small 
                    | (sección superior del menú)
                td Añaden puntas de flecha, sombras paralelas, vértices redondeados y apariencias de bordes desvanecidos, con resplandor y de estilo de garabateado a los objetos. 
              tr
                td.fw-bold Bordes iluminados
                td El comando Bordes iluminados produce un efecto impresionista en una selección al desplazar píxeles y buscar y realzar el contraste de la imagen. 
              tr
                td.fw-bold Filtros SVG
                td Añaden a la ilustración propiedades gráficas basadas en XML, por ejemplo, sombras paralelas. 
              tr
                td.fw-bold Textura
                td Proporcionan a las imágenes un aspecto de profundidad, de solidez o una apariencia más natural. 
              tr
                td.fw-bold Vídeo
                td Optimiza las imágenes capturadas de un vídeo o ilustración para formatos destinados a televisión.  
              tr
                td.fw-bold Deformar
                td Distorsiona o deforma los objetos, incluidos trazados, texto, mallas, fusiones e imágenes rasterizadas. 
    #t_2_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.8 Herramientas de pinceles
    p.mb-5 La herramienta pincel y su panel de herramientas, es muy poderosa y útil, por lo que se profundizará sobre la misma y sus características. Con el pincel se puede dar detalles y características a los trazos y vectores; trabaja de la misma forma que la herramienta Lápiz, permitiendo hacer un clip para comenzar el trazo y arrastrando los trazos que se deseen.
      br
      br
      |Existen cuatro tipos de pinceles, cada uno, ofrece unas características y comportamientos diferentes con el trazo; ellos son:
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-contenido--borde.bg-naranja.p-4(titulo="1. Pincel Caligráfico")
        .row
          .col-lg-5
            h4 1. Pincel Caligráfico
            p Este pincel, crea un trazo que parece haber sido hecho por una pluma o un marcador o algún trazo que pueda tener tinta o por el contrario un pincel; este trazo se define se plasma el trazo con puntos o vectores. 
          .col-lg-7
            .titulo-sexto.color-acento-botones
              h5 Figura 4
              span Pincel caligráfico
            img(src="@/assets/curso/57.png")
      .tarjeta.color-acento-contenido--borde.bg-naranja.p-4(titulo="2. Pincel de Dispersión: ")
        .row
          .col-lg-5
            h4 2. Pincel de Dispersión: 
            p Este pincel, definirá un diseño o arte vectorial y será el trazo el que copiará dicho arte y lo replicará como un trazo.
          .col-lg-7
            .titulo-sexto.color-acento-botones
              h5 Figura 5
              span Pincel de dispersión
            img(src="@/assets/curso/58.png")
      .tarjeta.color-acento-contenido--borde.bg-naranja.p-4(titulo="3. Pincel de Arte: ")
        .row
          .col-lg-5
            h4 3. Pincel de Arte: 
            p Este pincel, definirá el trazo como un “pincel” y entenderá cada trazo con dichas características, recuerde que cada pincel tiene la opción de definir y adecuar sus atributos según la necesidad.
          .col-lg-7
            .titulo-sexto.color-acento-botones
              h5 Figura 6
              span Pincel de Arte
            img(src="@/assets/curso/59.png")
      .tarjeta.color-acento-contenido--borde.bg-naranja.p-4(titulo="4. Pincel Motivo: ")
        .row
          .col-lg-5
            h4 4. Pincel Motivo: 
            p Similar al pincel de dispersión, copia elementos a lo largo de un trazado, a diferencia del anterior, sus elementos son exactamente iguales ya que se sitúan sobre un plano igual siguiendo sus pasos, se puede entender como si fuesen azulejos juntos.
          .col-lg-7
            .titulo-sexto.color-acento-botones
              h5 Figura 7
              span Pincel Motivo
            img(src="@/assets/curso/60.png")
    p.mb-5 Es importante conocer las principales características del panel de pinceles, así que revise el siguiente recurso:
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/61.jpg', alt='Texto que describa la imagen')

      .tarjeta.bg-white.p-3(x="24%" y="7%" numero="A")
        p.mb-0 Así que empiece con reconocer que en panel se diferencian dos opciones de visualización, una en forma <b>cuadrada (A)</b> que serán los pinceles caligráficos y de dispersión y otra de forma <b>rectangular (B),</b> que serán los pinceles de arte y de motivos.
      .tarjeta.bg-white.p-3(x="48%" y="40%" numero="B")
        p.mb-0 Por último, tenemos los botones <b>nuevo pincel (G)</b> y borrar pincel, que son los encargados de poder crear un pincel desde cero, acá aparecerá una nueva pestaña que dará características para la configuración, si por el contrario no es de su agrado, podrá eliminarlo con el siguiente icono.
      .tarjeta.bg-white.p-3(x="54%" y="7%" numero="C")
        p.mb-0 En el <b>menú desplegable (C)</b>, podemos encontrar opciones donde configurar las opciones de visualización y las opciones de obras bibliotecas que se podrán ir actualizando o generando, al momento de ir trabajando con el programa. 
      .tarjeta.bg-white.p-3(x="23%" y="78%" numero="D")
        p.mb-0 En el menú inferior se encuentra el ícono de Menú de <b>Biblioteca de Pinceles (D)</b>, donde se encontrarán todos los pinceles, estos estarán separados por características, aunque pueden crearse y configurarse para tener un trabajo más eficaz, 
      .tarjeta.bg-white.p-3(x="42%" y="78%" numero="E")
        p.mb-0 Seguidamente encontramos el ícono Quitar <b>Trazo de Pincel (E)</b>, que quita la característica del trazo a cualquier segmento seleccionado; 
      .tarjeta.bg-white.p-3(x="45%" y="85%" numero="F")
        p.mb-0 Encontramos las <b>opciones de trazo (F)</b>, donde se abrirá otro menú que cambiará según el trazo seleccionado y dará características a los trazos. 
      .tarjeta.bg-white.p-3(x="50%" y="78%" numero="G")
        p.mb-0 Por último, tenemos los botones <b>nuevo pincel (G)</b> y borrar pincel, que son los encargados de poder crear un pincel desde cero, acá aparecerá una nueva pestaña que dará características para la configuración, si por el contrario no es de su agrado, podrá eliminarlo con el siguiente icono.
    .bg--1-claro.p-5.position-relative.hover.hover-flip.mb-5
      .img-up(style='position: absolute; top: -20%; left: 0% ; width: 100%; height: 100%;')
        figure
          img(src="@/assets/curso/62.svg" style='width: 70px').m-auto
      .texto(style='margin-top: 20px')
        p.text-center Recuerde que se pueden dar opciones a cada uno de los pinceles, independiente de su característica, se puede ingresar en el ícono <b>opciones de objeto en el panel de pinceles</b>, tipo de pincel tiene características específicas, como las que se presentan en las siguientes figuras:
    .row.mb-5
      .col-lg-3
        .titulo-sexto.color-acento-botones
              h5 Figura 8
              span Pincel Caligráfico
        img(src="@/assets/curso/63.jpg").hover
      .col-lg-3
        .titulo-sexto.color-acento-botones
              h5 Figura 9
              span Pincel Dispersión
        img(src="@/assets/curso/64.jpg").hover
      .col-lg-3
        .titulo-sexto.color-acento-botones
              h5 Figura 10
              span Pincel de Arte
        img(src="@/assets/curso/65.jpg").hover
      .col-lg-3
        .titulo-sexto.color-acento-botones
              h5 Figura 11
              span Pincel de Motivo
        img(src="@/assets/curso/66.jpg").hover
    .bg-texture.p-5.mb-5
      .imagen-adornos-flotantes(style='width: 100%; height: 100%; position: absolute; top: -20%; left: 0%;')
        .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
        .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top: 20% ; bottom: ; width: 60px ")
        .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: -10% ; width: 60px ")
      .row.align-items-center.justify-content-center.mb-5
        .col-lg-5: img(src="@/assets/curso/67.svg")
        .col-lg-5
          h2 Recuerde que puede encontrar muestras gratis de pinceles que harán más interesante su trabajo, no dude en descargar algunos y empezar a trabajar con ellos. 
    #t_2_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.9 Herramientas de organización de objetos   
    p.mb-5 Una herramienta importante al momento de hablar de la selección de la organización de los objetos es la posibilidad de alinearlos y distribuirlos, dado que es una necesidad constante al momento de diseñar y organizar los elementos en los espacios de trabajo.
      br
      br
      |Para que acciones como alinear elementos a la derecha o a la izquierda o distribuir dejando espacios entre unos y otros, se cuenta con una herramienta en los paneles de control que se llama 
      <span class="color-azul"> Alinear</span>, (figura 11) en este panel se tienen 3 opciones que son: alinear objetos, distribuir objetos y distribuir espaciado; en el ejemplo podemos observar cómo se representan las alineaciones (figura 12), estas alineaciones se pueden hacer hacia las cuatro esquinas, hacia el centro y hacia el medio. 
    .titulo-sexto.color-acento-botones
      h5 Figura 12
      span Alinear
    figure
      img(src="@/assets/curso/68.svg").m-auto
    .row.mb-5.align-items-center
      .col-lg-7(data-aos="fade-right")
        p Otra de las características es la distribución y la distribución espaciada, que hace que la distribución de los objetos se haga con la misma distancia entre ellos mismos; la distribución se puede realizar de manera horizontal o vertical, colocando los objetos a partir del objeto clave.
          br
          br
          |De la mano y agrupada en el mismo panel de acción (dependiendo de su configuración), se puede encontrar el <b>Buscatrazos</b> o <b><i>PathFinder</i></b> (figura 13), que hace parte de un método de combinación de objetos; resolviendo y creando formas diferentes, que varían según el método utilizado, entre ellos se pueden hallar:  
      .col-lg-5(data-aos="fade-left")
        .titulo-sexto.color-acento-botones
          h5 Figura 13
          span Buscatrazos o Pathfinder
        img(src="@/assets/curso/69.jpg").m-auto
    p.mb-5 En los <b>buscatrazos</b> se pueden encontrar los siguientes modos de forma (Shape Modes), como se observa en la siguiente tabla: 
    .titulo-sexto.color-acento-botones
      h5 Tabla 3 
      span Modos de forma
    .row.mb-5
      .col-lg-5
        .bg--3-claro.p-5(style="height: 441px;")
          h4.text-center.mb-5 Figura original
          img(src="@/assets/curso/70.svg" style="width: 337px").m-auto
      .col-lg-7
        #carouselExampleIndicators3.carousel.slide(data-bs-ride='carousel')
      
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselExampleIndicators3' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselExampleIndicators3' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselExampleIndicators3' data-bs-slide-to='2' aria-label='Slide 3')
            button(type='button' data-bs-target='#carouselExampleIndicators3' data-bs-slide-to='3' aria-label='Slide 1')
          .carousel-inner
            .row.justify-content-center
              .col-lg-10
                .carousel-item.active.px-4
                  .tarjeta.rounded-0.bg--4-claro.p-4.text-center(style="height: 441px;")
                    h4 Efecto
                    img(src="@/assets/curso/71.svg" alt="Adornos flotantes" style="width: 337px").m-auto.mb-3
                    h4 Añadir a área de forma
                    p Añade el área del componente a la geometría subyacente. (dos elementos uno se superpone al otro).
                .carousel-item.px-4
                  .tarjeta.rounded-0.bg--4-claro.p-4.text-center(style="height: 441px;")
                    h4 Efecto
                    img(src="@/assets/curso/72.svg" alt="Adornos flotantes" style="width: 337px").m-auto.mb-3
                    h4 Restar de área de forma
                    p Recorta el área del componente de la geometría subyacente.
                .carousel-item.px-4
                  .tarjeta.rounded-0.bg--4-claro.p-4.text-center(style="height: 441px;")
                    h4 Efecto
                    img(src="@/assets/curso/73.svg" alt="Adornos flotantes" style="width: 337px").m-auto.mb-3
                    h4 Formar intersección con áreas de formas
                    p  Utiliza el área del componente para recortar la geometría subyacente como lo haría una máscara.
                .carousel-item.px-4
                  .tarjeta.rounded-0.bg--4-claro.p-4.text-center(style="height: 441px;")
                    h4 Efecto
                    img(src="@/assets/curso/74.svg" alt="Adornos flotantes" style="width: 337px").m-auto.mb-3
                    h4 Excluir áreas de formas superpuestas
                    p Utiliza el área del componente para invertir la geometría subyacente, vaciando áreas rellenas y viceversa.

          button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators3' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators3' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next
      figcaption.mt-3 Nota: se puede observar que el elemento fuerte es el elemento que está encima. 
    .tarjeta.bg--2-claro.p-4.mb-5.rounded-0.mt-5
      .row.justify-content-around.align-items-center.position-relative
        img.position-absolute.d-none.d-lg-block(src="@/assets/curso/31.svg" alt="Adornos flotantes" style="width: 132px ; left: 3% ; top: -60% ")
        .col-4.col-sm-2.col-lg-1
        .col-lg-10
          .row.justify-content-between.align-items-center
            .col-10.mb-3.mb-sm-0
              p.mb-0 Lo invitamos a revisar el <b>video 08.</b> Video Buscatrazos, aprenderá a manejar <b>la herramienta buscatrazos</b> para crear nuevas formas a partir de formas básicas.
    p.mb-5 A continuación, se describen algunos de los denominados efectos buscatrazos <b><i>(PathFinder)</i></b>:










</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  data: () => ({
    indicadorTarjetaFlip: true, // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.animacion-imagenes
    width: 100%
    height: 100%
    background-size: cover
    background-position: center
    background-repeat: no-repeat
    transition: background-image 1s ease-in-out
    animation-name: imagenes1
    animation-timing-function: linear
    animation-iteration-count: infinite
    animation-duration: 8s
.animacion-imagenes2
    width: 100%
    height: 100%
    background-size: cover
    background-position: center
    background-repeat: no-repeat
    transition: background-image 1s ease-in-out
    animation-name: imagenes2
    animation-timing-function: linear
    animation-iteration-count: infinite
    animation-duration: 8s
@keyframes imagenes1
  0%
    background-image: url(../assets/curso/17.svg)
  33.3%
    background-image: url(../assets/curso/18.svg)

  66.6%
    background-image: url(../assets/curso/19.svg)


  99.9%
    background-image: url(../assets/curso/17.svg)
@keyframes imagenes2
  0%
    background-image: url(../assets/curso/20.jpg)
  33.3%
    background-image: url(../assets/curso/21.jpg)

  66.6%
    background-image: url(../assets/curso/22.jpg)


  99.9%
    background-image: url(../assets/curso/20.jpg)
.bg--amarillo
  background-color: #fee98d
.candado
  background-image: url(../assets/curso/candado.jpg)
  background-size: cover
  background-position: center
  background-repeat: no-repeat
  width: 30px
  height: 30px
.tarjeta-img-up
  position: relative
  height: 640px
  overflow: hidden
  .imagen
    position: absolute
    top: -110%
    left: 0
    transition: top .5s ease-in-out
    img
      width: 100%
      height: 100%
  &:hover
    .imagen
      top: 0
.bg-naranja
  background-color: #FFD3A7 !important
.bg-texture
  position: relative
  background-image: url(../assets/curso/bg-texture.png)
  background-size: cover
  background-position: center
  background-repeat: no-repeat
.color-azul
  span
  color: $color-acento-botones
  font-weight: bold
</style>
