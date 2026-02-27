<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Enfoques para la atención integral frente a la violencia sexual

    .row.align-items-center
      
      .col-lg-3.d-none.d-lg-block
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema5/1.svg', alt='', style="width: 100%").m-auto
      .col-lg-9.bg-14.bg-r8.p-3
        .row.align-items-start
          .col-lg-2.d-none.d-lg-block
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema5/2.svg', alt='', style='width: 90px').m-auto
          
          .row.mt-3.m-3.mb-0
            p El abordaje integral de las violencias sexuales desde el sector salud exige la aplicación de enfoques que orienten la atención más allá de la intervención clínica inmediata, permitiendo responder de manera adecuada a la complejidad del fenómeno y a las necesidades específicas de las personas víctimas. Estos enfoques se encuentran reconocidos en la normativa vigente, en los modelos y lineamientos del sector salud y en los compromisos internacionales del Estado colombiano, y constituyen criterios obligatorios para la prestación de servicios de salud.
    separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Enfoque de derechos humanos

    .row.align-items-center.mt-4
      .col-lg-8
        p.mt-4 El enfoque de derechos humanos constituye el eje central del abordaje integral de las violencias sexuales y orienta la actuación del sector salud hacia la garantía, protección y restablecimiento de los derechos de las personas víctimas. Este enfoque reconoce a las personas como sujetos de derechos y no únicamente como receptoras de servicios, y exige que la atención se brinde con base en los principios de dignidad humana, igualdad, autonomía, participación y no discriminación.
        .row.mt-4.p-3.bg-r8
          .col-12
            .row.align-items-center
              .col-lg-2.d-none.d-lg-block
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema5/3.svg', alt='', style="width: 100px").m-auto 
              .col-lg-10
                p En el contexto colombiano, este enfoque se fundamenta en la Constitución Política y se desarrolla a través de la normativa vigente que regula la atención integral en salud a personas víctimas de violencias sexuales. Dicho marco establece que la atención debe ser integral, oportuna, confidencial y libre de barreras, y que no puede condicionarse a la denuncia previa de los hechos.
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/4.svg', alt='', style="width: 390px").m-auto


    .row.justify-content-center
      .col-lg-10
        .row.align-items-center.bg-r8.p-4.bg-14
          .col-lg-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema5/5.png', alt='', style="width: 390px").m-auto
          .col-lg-8
            p.mb-3 La aplicación del enfoque de derechos humanos en la atención en salud implica:
            ul.lista-ul.mb-0.bg-r8
              li
                span.icono-img
                p.mb-0 Garantizar el acceso efectivo a los servicios de salud requeridos.
              li
                span.icono-img
                p.mb-0 Respetar la autonomía y las decisiones informadas de la persona víctima.
              li
                span.icono-img
                p.mb-0 Asegurar el consentimiento informado para los procedimientos clínicos y médico-legales.
              li
                span.icono-img
                p.mb-0 Proteger la confidencialidad y la reserva de la información.
              li
                span.icono-img
                p.mb-0 Prevenir cualquier forma de revictimización institucional.
              li
                span.icono-img
                p.mb-0 Adoptar prácticas de atención respetuosas, dignas y humanizadas.
    
    p.mt-4 Desde este enfoque, el sector salud debe articular su actuación con otros sectores responsables de la protección y el restablecimiento de derechos, facilitando el acceso a las rutas correspondientes y respetando en todo momento la voluntad y las decisiones de la persona víctima. El enfoque de derechos humanos, por tanto, orienta de manera transversal la respuesta institucional frente a las violencias sexuales y constituye un criterio esencial de calidad en la atención integral en salud.

    separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Enfoque de género
    
    .bloque-texto-g.bg-16.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La normativa nacional colombiana establece un marco jurídico claro para la prevención, atención integral, protección y restablecimiento de derechos de las personas víctimas de violencias sexuales. Este marco define las obligaciones del Estado y, de manera específica, del sector salud, y orienta la actuación del talento humano en coherencia con los principios constitucionales y los compromisos internacionales asumidos por el país.

    .row.mt-4.align-items-center
      .col-lg-9
        .row.align-items-center.bg-r8.p-4.bg-1
          .col-lg
            p.mb-3 Desde este enfoque, se reconoce que las violencias sexuales:
            ul.lista-ul.mb-0.bg-r8
              li
                span.icono-img
                p.mb-0 Están relacionadas con desigualdades históricas de género.
              li
                span.icono-img
                p.mb-0 Se ven reforzadas por estereotipos y normas sociales que naturalizan la violencia.
              li
                span.icono-img
                p.mb-0 Generan impactos diferenciados en la salud física, mental y emocional de las personas víctimas.

        p.mt-3 En el contexto colombiano, la normativa vigente reconoce la violencia sexual como una violación a los derechos humanos y una manifestación de las desigualdades de género, y asigna al sector salud la obligación de garantizar una atención integral con enfoque de género. Este enfoque exige:
        
        .row.align-items-center.mt-4.bg-14.p-3.bg-r8
              .col-lg-4
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/tema5/7.png', style='width: 100%').m-auto
              
              .col
                ol.lista-ol--cuadro.lista-ol--separador
                  li 
                    .lista-ol--cuadro__vineta
                      span 1
                    | Identificar y cuestionar estereotipos de género presentes en la atención.

                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    | Evitar prácticas discriminatorias o revictimizantes.
                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    | Reconocer las experiencias y necesidades específicas de las personas víctimas.

      .col-lg-3.d-none.d-lg-block
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema5/8.svg', alt='', style="width: 290px").m-auto

</template>

<script>
export default {
  name: 'Tema5',
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
