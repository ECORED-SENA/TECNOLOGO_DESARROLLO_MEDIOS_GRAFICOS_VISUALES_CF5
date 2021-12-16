<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Producción gráfica
    p.mb-5 En el siguiente mapa se explica el concepto de producción gráfica:
    figure.mb-5(data-aos='zoom-in-up')
      img(src='@/assets/curso/0.svg') 
    p.mb-5  El proceso de la producción gráfica, parte desde el <i>brief</i>, donde encontraremos toda la información que hará que se realice un proceso impecable desde su comienzo, hasta la entrega del producto final. Una vez definidos los procesos y los medios, se definirán características como los formatos, los tipos de material y sus respectivos acabados, número de ejemplares, sistemas de impresión, así como los plazos de producción y los de entrega. 
    .bloque-texto-f.bg--1-claro.pt-5.px-5.mb-5
      h4.text-regular.bloque-texto-f__texto.px-5.text-center El término <b>“impresión gráfica”</b> comienza a utilizarse tras la invención de la imprenta hacia 1450, intentado agrupar los oficios que se relacionaban a esta actividad como lo era la misma impresión, pero sin dejar de lado los procesos de encuadernación y acabados.
      .bloque-texto-f__avatar
        .bloque-texto-f__avatar__img
          img(src='@/assets/curso/1.svg', alt='Texto que describa la imagen')
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-3 Para la elaboración de las piezas finales, se prepararán documentos con todas sus especificaciones, perfiles de color, resolución, formatos y demás características; se verificarán todas las características por parte de la imprenta como las pruebas de color antes de iniciar el proceso de impresión. Finalmente y no menos importante, la distribución y entrega del material al cliente.
          br
          br
          |Se puede decir que el proceso de producción gráfica básicamente tiene dos fases, una que comprende el proceso de creación o el proceso creativo y otra que estructura el proceso industrial o el proceso de producción; por lo que es importante conocer cada una con sus características, que ayudarán a dar claridad al momento de ubicar las acciones en un cronograma, ya que los procesos que incluyen elementos externos no se pueden controlar y es preciso organizarlos para no tener problemas en el futuro.
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/2.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    p.mb-5 De acuerdo con lo anterior, revise en el siguiente recurso el proceso en sus dos fases:
    SlyderB.mb-5(:datos="datosSlyder")






</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
  },
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Proceso de la producción gráfica',
        texto:
          'En una primera fase comprendida como el <b>proceso creativo</b>, se pueden definir las ideas que darán sentido y serán las que orientarán el proyecto. En esta primera etapa se encuentra la planificación que será la encargada de combinar todas las ideas con las que se comenzará el proceso. ',
        imagen: require('@/assets/curso/3.jpg'),
      },
      {
        titulo: '1. Planificación estratégica',
        texto:
          'Al momento de iniciar una planificación, se debe planear una junta con el cliente y con todos los elementos humanos que participarán en este proceso; se completará el <i>brief</i> y se recibirán todas las indicaciones que se deben seguir al momento de la creación de conceptos y líneas creativas que serán las encargadas de darle sentido a todo el proceso de producción. En esta fase se conocerán objetivos principales, el <i>target</i> objetivo y los elementos de salida; toda esta información se incluirá en un cronograma de actividades, se estipularán fechas de entregas parciales y las fechas finales. ',
        imagen: require('@/assets/curso/4.jpg'),
      },
      {
        titulo: 'Propuesta creativa',
        texto:
          'Una vez conocidas las necesidades y los objetivos entregados por el <i>brief</i>, se comenzará la fase de creación de la propuesta creativa por parte del diseñador y todo el equipo creativo, donde se expondrán diferentes caminos, los que estarán apoyados en la información contenida en dicho <i>brief</i>, acá se definirán características más técnicas, se presentarán bocetos y diseños, características de <i>packaging</i> y sus acabados, al igual que se definirán características o paletas de color y en general, toda la información que pueda orientar mejor el proyecto para poder definir presupuestos. ',
        imagen: require('@/assets/curso/5.jpg'),
      },
      {
        titulo: 'Finalización propuesta creativa',
        texto:
          'Al finalizar esta fase se obtienen conceptos de diseño claros que estarán en constante revisión con el cliente, quien será el encargado de dar el visto bueno, para así poder pasar a una fase de realización.',
        imagen: require('@/assets/curso/6.jpg'),
      },
      {
        titulo: '2. Finalización del proceso de producción',
        texto:
          'En una segunda instancia,  teniendo definidos los formatos, los materiales a utilizar, los acabados y toda la información que se ha contenido en la fase anterior, es necesario dar paso a la fase de <b>finalización del proceso de producción</b>, es importante que las personas que hacen parte de los procesos, den indicaciones con las especificaciones necesarias, para así hacer los respectivos controles y verificaciones de calidad, las impresiones finales y las entregas pactadas. ',
        imagen: require('@/assets/curso/7.jpg'),
      },
      {
        titulo: 'Realización de artes finales',
        texto:
          'Una vez encontrado el camino creativo y la aprobación del cliente se pasa a un proceso de bocetación y entrega de artes o piezas finales, las cuales en esta época se realizan con programas o <i>software</i> como  InDesign, PhotoShop o Illustrator, este último programa será el que tendremos presente para la creación de ilustraciones y elementos a partir de vectores. <br><br>Este proceso deberá incluir especificaciones como los perfiles de color, las líneas de corte y otras características que se deberán tener presentes como las tipografías o la resolución de las imágenes, elementos que se deberán chequear y tener presentes al momento del paso de los archivos a los impresores. ',
        imagen: require('@/assets/curso/8.jpg'),
      },
      {
        titulo: 'Pruebas de color',
        texto:
          'Antes de empezar el proceso de impresión, es importante realizar unas pruebas de color, que serán las encargadas de no echar a perder todo el trabajo que se realizará al momento de imprimir. <br><br>Estas, son unas pruebas que el impresor entrega al diseñador para que se verifique y supervise que todos los colores concuerden con sus gamas tonales, sus brillos y demás características que el diseñador debe detectar como errores, los cuales deberán solucionarse antes de pasar al proceso de impresión final.',
        imagen: require('@/assets/curso/9.jpg'),
      },
      {
        titulo: 'Impresión',
        texto:
          'Luego de la aprobación de las pruebas de color por parte del diseñador y del cliente (es muy importante que este proceso de aprobación se lleve a cabo), se procede a la impresión de las piezas. Existen diversos sistemas de impresión que van desde el <i>offset</i>, serigrafía y flexografía (siendo estos sistemas de impresión indirecta) o impresión digital y <i>plotter</i> (siendo estos de impresión directa) que se elegirán según los materiales finales del sustrato o la versatilidad en cuanto a la parte económica y de tiempos.',
        imagen: require('@/assets/curso/10.jpg'),
      },
      {
        titulo: 'Acabados',
        texto:
          'Algunos de los elementos que están una vez impresos necesitan acabados como lo pueden ser plastificaciones, troqueles, hendidos, estampaciones y otros procesos o acabados de calidad que le darán un toque de distinción a los proyectos realizados, dándole características que ayudarán a mejorar el elemento.<br><br>Otros procesos de acabado se deben realizar manualmente y requiere contemplar otro proceso y es la manipulación del producto, como el doblado, la encuadernación, los troquelados y los guillotinados. ',
        imagen: require('@/assets/curso/11.jpg'),
      },
      {
        titulo: 'Distribución y entrega',
        texto:
          'Por último, no se debe descuidar el proceso de la entrega final, es de igual importancia entregar al cliente todos los elementos impresos y finalizados donde de estipule según los cronogramas y las fechas de entrega, haciendo final el llamado proceso de producción.',
        imagen: require('@/assets/curso/12.jpg'),
      },
    ],
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

<style lang="sass"></style>
