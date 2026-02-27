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
          img(src='@/assets/curso/tema5/8.png', alt='', style="width: 290px").m-auto


    p.mt-4 En la atención en salud, la aplicación del enfoque de género implica:

    .row.justify-content-center.mt-4
      .row.justify-content-center
        .col-lg-2.d-flex.mt-4.mt-lg-0
          .crd.bg-14.bg-r8.p-4.h-100.w-100
            figure.mb-2(data-aos="zoom-in")
              img(src='@/assets/curso/tema5/9.svg', style='width: 40px')
            p.mb-0 Garantizar el acceso a servicios de salud sexual y reproductiva.
  
        .col-lg-2.d-flex.mt-4.mt-lg-0
          .crd.bg-14.bg-r8.p-4.h-100.w-100
            figure.mb-2(data-aos="zoom-in")
              img(src='@/assets/curso/tema5/10.svg', style='width: 40px')
            p.mb-0 Brindar una atención libre de juicios morales y estigmatización.

        .col-lg-2.d-flex.mt-4.mt-lg-0
          .crd.bg-14.bg-r8.p-4.h-100.w-100
            figure.mb-2(data-aos="zoom-in")
              img(src='@/assets/curso/tema5/11.svg', style='width: 40px')
            p.mb-0 Reconocer los impactos diferenciados de la violencia sexual en mujeres, hombres y personas con identidades de género diversas.

        .col-lg-2.d-flex.mt-4.mt-lg-0
          .crd.bg-14.bg-r8.p-4.h-100.w-100
            figure.mb-2(data-aos="zoom-in")
              img(src='@/assets/curso/tema5/12.svg', style='width: 40px')
            p.mb-0 Fortalecer la autonomía y la capacidad de decisión de las personas atendidas.

        .col-lg-2.d-flex.mt-4.mt-lg-0
          .crd.bg-14.bg-r8.p-4.h-100.w-100
            figure.mb-2(data-aos="zoom-in")
              img(src='@/assets/curso/tema5/13.svg', style='width: 40px')
            p.mb-0 Adoptar medidas orientadas a prevenir la revictimización institucional.


    p.mt-4 El enfoque de género, articulado con el enfoque de derechos humanos, orienta una atención en salud más equitativa, sensible y pertinente, y constituye un criterio esencial para responder de manera integral a las violencias sexuales desde el sector salud.

    separador
    #t_5_3.titulo-segundo.color-acento-contenido
      h2 5.3 Enfoque diferencial y de ciclo vital   

    .row.align-items-center
      .col-lg-8
        p El enfoque diferencial reconoce que las personas víctimas de violencias sexuales no son un grupo homogéneo y que factores como la edad, la discapacidad, la pertenencia étnica, la orientación sexual, la identidad de género y las condiciones socioeconómicas influyen en la forma en que se vive la violencia y en las necesidades de atención. Este enfoque se encuentra respaldado por la Constitución Política y desarrollado en normas como la Ley 1098 de 2006, la Ley 1618 de 2013 y otros instrumentos de protección de poblaciones con especial protección constitucional.

        p.mt-4.p-4.bg-12 El enfoque de ciclo vital, como parte del enfoque diferencial, exige que la atención en salud se adecúe a las características y necesidades propias de cada etapa de la vida, desde la infancia hasta la vejez. En el caso de niños, niñas y adolescentes, este enfoque implica la adopción de medidas reforzadas de protección, la articulación con los procesos de restablecimiento de derechos y el respeto por el interés superior del niño, conforme a la normativa vigente.

        .row.align-items-start.mt-4
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema5/14.svg', style='width: 84px').m-auto
          
          .col
            p La aplicación del enfoque diferencial y de ciclo vital permite al sector salud brindar una atención más pertinente, efectiva y respetuosa, y constituye un criterio obligatorio en la atención integral de las violencias sexuales.

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/15.png', alt='', style="width: 395px").m-auto


    
    separador
    #t_5_4.titulo-segundo.color-acento-contenido
      h2 5.4 Enfoque psicosocial  

    .row.align-items-center
      .col-lg-9
        p El enfoque psicosocial reconoce que las violencias sexuales generan impactos que trascienden lo físico y afectan profundamente la salud mental, las relaciones sociales y el proyecto de vida de las personas. Este enfoque orienta la atención en salud hacia la comprensión integral de las afectaciones emocionales, psicológicas y sociales, y hacia la implementación de intervenciones que contribuyan a la recuperación y al fortalecimiento de capacidades de afrontamiento.

        .row.align-items-center.mt-4.bg-3.bg-r8.p-3
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema5/16.svg', style='width: 84px').m-auto
          
          .col
            p Los lineamientos del sector salud establecen que la atención psicosocial debe ser un componente obligatorio del abordaje integral de las violencias sexuales, e incluir la valoración del estado mental, la identificación de riesgos psicosociales y el acceso a intervenciones oportunas y adecuadas. Este enfoque también exige reconocer la influencia del entorno familiar y social en el proceso de recuperación y promover la articulación con redes de apoyo cuando sea pertinente.
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/17.png', alt='', style="width: 395px").m-auto    


    separador
    #t_5_5.titulo-segundo.color-acento-contenido
      h2 5.5 Prevención de la revictimización

    p La prevención de la revictimización constituye un enfoque transversal en la atención integral de las violencias sexuales y orienta todas las actuaciones del sector salud. La revictimización se presenta cuando las prácticas institucionales reproducen o profundizan el daño sufrido por la persona víctima, afectando su dignidad, su confianza en los servicios y su proceso de recuperación.

    .row.bg-20.m-30
      .col-12
        .p-5
          p La revictimización puede manifestarse a través de:

          .row.justify-content-center.mt-4
            .row.justify-content-center
              .col-lg-2.d-flex.mt-4.mt-lg-0
                .crd.bg-14.bg-r8.p-4.h-100.w-100
                  figure.mb-2(data-aos="zoom-in")
                    img(src='@/assets/curso/tema5/18.svg', style='width: 40px')
                  p.mb-0 Barreras injustificadas para el acceso oportuno a los servicios de salud.
        
              .col-lg-2.d-flex.mt-4.mt-lg-0
                .crd.bg-14.bg-r8.p-4.h-100.w-100
                  figure.mb-2(data-aos="zoom-in")
                    img(src='@/assets/curso/tema5/19.svg', style='width: 40px')
                  p.mb-0 Trato irrespetuoso, descalificador o carente de empatía.

              .col-lg-2.d-flex.mt-4.mt-lg-0
                .crd.bg-14.bg-r8.p-4.h-100.w-100
                  figure.mb-2(data-aos="zoom-in")
                    img(src='@/assets/curso/tema5/20.svg', style='width: 40px')
                  p.mb-0 Emisión de juicios de valor o actitudes culpabilizantes.

              .col-lg-2.d-flex.mt-4.mt-lg-0
                .crd.bg-14.bg-r8.p-4.h-100.w-100
                  figure.mb-2(data-aos="zoom-in")
                    img(src='@/assets/curso/tema5/21.svg', style='width: 40px')
                  p.mb-0 Exposición indebida de la información personal o clínica.

              .col-lg-2.d-flex.mt-4.mt-lg-0
                .crd.bg-14.bg-r8.p-4.h-100.w-100
                  figure.mb-2(data-aos="zoom-in")
                    img(src='@/assets/curso/tema5/22.svg', style='width: 40px')
                  p.mb-0 Interrogatorios innecesarios o repetitivos.

        .row.align-items-center.p-5
          .col-lg-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema5/23.png', alt='', style="width: 396px").m-auto
          .col-lg-8
            p La normativa vigente y los lineamientos técnicos del sector salud establecen la obligación de adoptar medidas orientadas a prevenir la revictimización, garantizando una atención digna, confidencial y centrada en la persona. En este sentido, el talento humano en salud debe actuar con sensibilidad, respeto y profesionalismo, y revisar de manera permanente sus prácticas para asegurar una atención humanizada, ética y de calidad.

            .row.mt-4.bg-base.p-4.bg-r8
              .col-12
                p La prevención de la revictimización implica:
                ul.lista-ul--color
                  li.d-flex.align-items-start
                    span.icono-img
                    p.mb-0 Evitar la repetición innecesaria del relato de los hechos.
        
                  li.d-flex.align-items-start
                    span.icono-img
                    p.mb-0 Brindar información clara y suficiente sobre los procedimientos.

                  li.d-flex.align-items-start
                    span.icono-img
                    p.mb-0 Respetar la autonomía y las decisiones informadas de la persona.
        
                  li.d-flex.align-items-start
                    span.icono-img
                    p.mb-0 Adoptar un trato empático y libre de discriminación.



    p.mt-4 Este enfoque contribuye a fortalecer la confianza en los servicios de salud, a mejorar la calidad de la atención y a proteger de manera efectiva los derechos de las personas víctimas de violencias sexuales.

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
