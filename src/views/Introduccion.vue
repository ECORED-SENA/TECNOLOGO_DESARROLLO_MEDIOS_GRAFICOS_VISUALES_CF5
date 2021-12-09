<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 Apreciado aprendiz, bienvenido a este momento de aprendizaje, orientado a la producción gráfica y las diversas herramientas que se utilizan para alcanzar el proyecto gráfico deseado. Antes de empezar se sugiere revisar el siguiente video, con el fin de identificar el contexto de aprendizaje:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2D1GRrvmpLw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    


</template>

<script>
import BannerInterno from '@/components/BannerInterno.vue'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
