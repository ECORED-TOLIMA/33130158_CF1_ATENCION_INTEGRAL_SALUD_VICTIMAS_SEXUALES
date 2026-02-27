<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo aborda los fundamentos y lineamientos que orientan la atención integral en salud frente a las violencias sexuales en Colombia. Se reflexiona sobre su impacto en la salud de las víctimas, el marco normativo vigente y los enfoques de derechos humanos, género y psicosocial que guían cada intervención. Asimismo, se desarrollan los procesos clínicos esenciales y las competencias éticas del talento humano para garantizar una atención humanizada, digna e intersectorial. A continuación, se presenta el mapa conceptual que ilustra de manera visual la estructura del componente formativo y las relaciones entre sus ejes temáticos.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Imagen de un mapa conceptual que resume la síntesis del componente formativo “ Fundamentos y lineamientos para la atención integral en salud de las violencias sexuales”. Presenta tres ejes temáticos principales: el reconocimiento de las violencias sexuales como problema de salud pública, que incluye su conceptualización y caracterización epidemiológica; el marco normativo y los enfoques que orientan la atención integral; y la articulación intersectorial con los actores del proceso de atención en Colombia.  ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
