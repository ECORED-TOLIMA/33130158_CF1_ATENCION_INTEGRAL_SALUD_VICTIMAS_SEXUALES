<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Marco normativo de la atención integral

    .row.align-items-center
      .col-lg-7.bg-12.bg-r8.p-3

        p.mt-3 El marco normativo que regula la atención integral en salud de las personas víctimas de violencias sexuales establece las obligaciones del Estado, las responsabilidades del sector salud y los derechos de las personas afectadas. Este conjunto de disposiciones orienta la actuación del talento humano en salud y garantiza que la atención se brinde con criterios de oportunidad, integralidad, dignidad, confidencialidad y enfoque de derechos, en coherencia con los estándares nacionales e internacionales vigentes.
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/1.svg', alt='', style="width: 490px").m-auto

    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Instrumentos internacionales aplicables

    .row.align-items-start.mt-4
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema4/2.svg', style='width: 90px').m-auto
          
          .col
            p La atención integral en la salud a las personas víctimas de violencias sexuales se fundamenta en un conjunto de instrumentos internacionales de derechos humanos que reconocen estas violencias como graves vulneraciones de derechos y establecen obligaciones claras para los Estados en materia de prevención, atención, protección y reparación. Estos instrumentos constituyen referentes esenciales para la formulación de políticas públicas y la organización de los servicios de salud.

    p.mt-4 De manera general, los instrumentos internacionales reconocen que las violencias sexuales afectan de forma directa derechos fundamentales, entre ellos: 

    .row.justify-content-center.mt-4
      .col-lg-3.mb-4.mb-lg-0
        .tarjeta.clr-paleYellow.p-4.text-center.bg-15.h-100
          .row.justify-content-center.mb-3
            .col-auto
              .circle-morado
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema4/3.svg', alt='Estructura lógica', style='width: 80px')
          p.mb-0 El derecho a la vida, la libertad y la seguridad personal.

      .col-lg-3.mb-4.mb-lg-0
        .tarjeta.clr-paleYellow.p-4.text-center.bg-15.h-100
          .row.justify-content-center.mb-3
            .col-auto
              .circle-morado
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema4/4.svg', alt='Ideas generales', style='width: 80px')
          p.mb-0 El derecho a la dignidad humana y a la integridad física, psicológica y sexual.

      .col-lg-3.mb-4.mb-lg-0
        .tarjeta.clr-paleYellow.p-4.text-center.bg-15.h-100
          .row.justify-content-center.mb-3
            .col-auto
              .circle-morado
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema4/5.svg', alt='Ideas principales', style='width: 80px')
          p.mb-0 El derecho a la salud física y mental.

      .col-lg-3
        .tarjeta.clr-paleYellow.p-4.text-center.bg-15.h-100
          .row.justify-content-center.mb-3
            .col-auto
              .circle-morado
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema4/6.svg', alt='Ideas principales', style='width: 80px')
          p.mb-0 El derecho a la igualdad y a la no discriminación.

    p.mt-4 Estos principios se encuentran consagrados en instrumentos de alcance universal, tales como:

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.justify-content-center 

          .col-lg-8
            AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul").color-primario
              .row(titulo="Declaración Universal de Derechos Humanos")
                ul.lista-ul--color
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 Reconoce la dignidad inherente a todas las personas y el derecho a la vida, la libertad y la seguridad personal.
                    
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 Constituye el fundamento ético y jurídico del sistema internacional de derechos humanos.
                    
              .row(titulo="Pacto Internacional de Derechos Civiles y Políticos")
                ul.lista-ul--color
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 Establece obligaciones estatales para la protección de la integridad personal y la libertad.
                    
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 Prohíbe tratos crueles, inhumanos o degradantes, directamente relacionados con las violencias sexuales.

                    
              .row(titulo="Pacto Internacional de Derechos Económicos, Sociales y Culturales")
                ul.lista-ul--color
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 Reconoce el derecho al disfrute del más alto nivel posible de salud física y mental.
                    
                  li.d-flex.align-items-start
                    i.lista-ul__vineta
                    p.mb-0 Obliga a los Estados a garantizar el acceso a servicios de salud sin discriminación.
                    
          .col-lg-4.d-none.d-lg-block
            figure(data-aos="fade-up")
              img(src='@/assets/curso/tema4/7.svg', alt='', style="width: 390px").m-auto

    p.mt-4 De manera específica, algunos instrumentos abordan de forma directa la violencia sexual y sus impactos diferenciados:

    .row.bg-18
      .col-12
        .p-5
          .row.justify-content-center

            .col-lg-2.d-lg-block.d-none
              figure
                img(src='@/assets/curso/tema4/8.svg', alt='', style='width: 100px').m-auto

            .col-lg-10
              .titulo-fondo: h4 Convención sobre la Eliminación de Todas las Formas de Discriminación contra la Mujer (CEDAW)
              ul.lista-ul--color
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0.text-start Reconoce la violencia sexual como una forma de discriminación contra las mujeres.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0.text-start Exige la adopción de medidas integrales para prevenir la violencia y garantizar servicios de atención, protección y recuperación.

          .row.justify-content-center

            .col-lg-2.d-lg-block.d-none
              figure
                img(src='@/assets/curso/tema4/9.svg', alt='', style='width: 100px').m-auto

            .col-lg-10
              .titulo-fondo: h4 Convención Interamericana para Prevenir, Sancionar y Erradicar la Violencia contra la Mujer (Convención de Belém do Pará)
              ul.lista-ul--color
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0.text-start Reconoce explícitamente la violencia sexual como una violación a los derechos humanos.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0.text-start Establece el deber de actuar con debida diligencia en la prevención, atención y erradicación de la violencia.

          .row.justify-content-center

            .col-lg-2.d-lg-block.d-none
              figure
                img(src='@/assets/curso/tema4/10.svg', alt='', style='width: 100px').m-auto

            .col-lg-10
              .titulo-fondo: h4 Convención sobre los Derechos del Niño
              ul.lista-ul--color
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0.text-start Obliga a proteger a niños, niñas y adolescentes contra toda forma de abuso y explotación sexual.
                  
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0.text-start Establece la garantía de atención integral orientada a la recuperación física, psicológica y social.
          
          p.mt-4 Como complemento técnico, los organismos internacionales del sistema de salud han desarrollado lineamientos que fortalecen la respuesta de los servicios de salud:



    .row.align-items-center
      .col-lg-9.bg-3.bg-r8.p-3
        .row.align-items-start
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema4/11.svg', alt='', style='width: 90px').m-auto
          
          .row.mt-3.m-3.mb-0
            b Directrices y recomendaciones de la Organización Mundial de la Salud (OMS)

            ul.lista-ul--color.mt-3.mb-0

              li.d-flex.align-items-start
                i.lista-ul__vineta
                p.mb-0.text-start Reconocen la violencia sexual como un problema de salud pública.

              li.d-flex.align-items-start
                i.lista-ul__vineta
                p.mb-0.text-start Orientan la prestación de servicios integrales, centrados en la persona, basados en evidencia científica y con enfoque de derechos.

      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/12.svg', alt='', style="width: 100%").m-auto

    p.mt-4 En conjunto, estos instrumentos internacionales conforman un marco de referencia que orienta la actuación del sector salud frente a las violencias sexuales. Este marco reconoce que la atención integral no es una acción opcional, sino una obligación derivada de compromisos internacionales en derechos humanos, y establece las bases para garantizar servicios de salud accesibles, oportunos, integrales y libres de discriminación. Asimismo, constituye el soporte conceptual para el desarrollo de la normativa y los protocolos nacionales aplicables a la atención integral en salud de las personas víctimas de violencias sexuales.
    
    .row.justify-content-center
      .col-lg-10
        .row.align-items-center.bg-r8.p-4.bg-14
          b.mb-1 Para profundizar en la normatividad internacional aplicable, se recomienda consultar:
          ul.lista-ul.mb-0.p-4.bg-r8
            li
              span.icono-img
              p.mb-0 Pacto Internacional de Derechos Civiles y Políticos.

            li
              span.icono-img
              p.mb-0 Pacto Internacional de Derechos Económicos, Sociales y Culturales.

            li
              span.icono-img
              p.mb-0 Convención sobre la Eliminación de Todas las Formas de Discriminación contra la Mujer (CEDAW).

            li
              span.icono-img
              p.mb-0 Convención Interamericana para Prevenir, Sancionar y Erradicar la Violencia contra la Mujer (Convención de Belém do Pará).

            li
              span.icono-img
              p.mb-0 Convención sobre los Derechos del Niño.

    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Normativa nacional sobre violencias sexuales

    .bloque-texto-g.bg-16.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/13.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La normativa nacional colombiana establece un marco jurídico claro para la prevención, atención integral, protección y restablecimiento de derechos de las personas víctimas de violencias sexuales. Este marco define las obligaciones del Estado y, de manera específica, del sector salud, y orienta la actuación del talento humano en coherencia con los principios constitucionales y los compromisos internacionales asumidos por el país.

    .row.align-items-center.mt-2
      .col-lg-7.mt-2
        .row.mt-2.p-3
          .col-12
            p La Constitución Política de Colombia reconoce derechos fundamentales directamente afectados por las violencias sexuales, los cuales orientan la actuación del sector salud:

            ul.lista-ul--color
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Dignidad humana como principio fundante del Estado social de derecho.
    
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Derecho a la vida (artículo 11).
    
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Derecho a la igualdad y a la no discriminación (artículo 13).
 
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Derecho a la integridad personal y al libre desarrollo de la personalidad (artículo 16).

              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Derecho a la salud como servicio público esencial y derecho fundamental (artículos 48 y 49).

      .col-lg-5.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema4/14.png', alt='', style="width: 100%").m-auto 
      
    p.mt-4 Estos mandatos constitucionales obligan a garantizar una atención integral, oportuna y sin discriminación a las personas víctimas de violencias sexuales.

    p.mt-4 En el ámbito penal, el ordenamiento jurídico colombiano reconoce las violencias sexuales como conductas graves:

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center.bg-r8.p-4.bg-12
          .col-lg-8 
            ul.lista-ul.mb-0.bg-r8
              li.d-flex.align-items-start
                i.lista-ul__vineta
                p.mb-0.text-start El Código Penal (Ley 599 de 2000) tipifica los delitos contra la libertad, integridad y formación sexual.

            p.mb-1 Incluye conductas como:

            ul.lista-ul.mb-0.bg-r8
              li.d-flex.align-items-start
                i.lista-ul__vineta
                p.mb-0.text-start Acceso carnal violento.

              li.d-flex.align-items-start
                i.lista-ul__vineta
                p.mb-0.text-start Actos sexuales violentos.

              li.d-flex.align-items-start
                i.lista-ul__vineta
                p.mb-0.text-start Abuso sexual.

              li.d-flex.align-items-start
                i.lista-ul__vineta
                p.mb-0.text-start Explotación sexual y otras formas de violencia sexual.
            
            p.mb-1 Aunque la tipificación penal no regula la atención en salud, sí establece el reconocimiento jurídico de estas violencias y refuerza la obligación institucional de atender integralmente a las víctimas.


          .col-lg-4.d-none.d-lg-block
            figure(data-aos="fade-up")
              img(src='@/assets/curso/tema4/15.svg', alt='', style="width: 100%").m-auto 

    .titulo-tres.mt-5: h3 Normas específicas de protección y atención

</template>

<script>
export default {
  name: 'Tema4',
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
