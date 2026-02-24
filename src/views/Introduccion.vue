<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.align-items-center
      .col-lg-9
        p.p-4.bg-1.bg-r8 Las violencias sexuales constituyen una grave violación a los derechos humanos y un problema prioritario de salud pública, debido a su alta prevalencia y a las profundas afectaciones que generan en la salud física, mental y social de las personas víctimas, sus familias y la comunidad. Estas violencias impactan de manera diferencial a niñas, niños, adolescentes, mujeres, hombres y personas con orientaciones sexuales e identidades de género diversas, y requieren una respuesta integral, oportuna, ética y humanizada por parte del sector salud.

      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/intro/1.svg', alt='', style="width: 290px").m-auto

    p.mt-4 Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:

    .row.justify-content-center.align-items-center.mt-4           
      .col-lg-12
        figure(data-aos="fade-down")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)




</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
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
