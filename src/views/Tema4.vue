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

    p.mt-4 En el ámbito nacional, el marco jurídico colombiano establece disposiciones orientadas a la protección y atención integral de las personas víctimas de violencias sexuales, de acuerdo con la población y el tipo de violencia involucrada:
    
    .row.justify-content-center.mt-4.bg-19
      .col-12.mb-lg-0
        .p-5
          .row.justify-content-center
            LineaTiempoE.color-primario.lte-r
              .row(titulo="Ley 1146 de 2007" subtitulo="")
                .col-lg-2.d-none.d-lg-block
                  figure(data-aos="fade-up")
                    img(src='@/assets/curso/tema4/16.svg', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  ul.lista-ul--color
                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Orientada a la prevención de la violencia sexual y la atención integral de niños, niñas y adolescentes.
    
                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Asigna responsabilidades al sector salud, entre ellas:
                    
                  ul.list.lista-ul--color.mb-0.bg-r8
                    li.d-flex.align-items-start
                      i.lista-ul__vineta
                      p.mb-0.text-start Atención médica integral y de urgencias.

                    li.d-flex.align-items-start
                      i.lista-ul__vineta
                      p.mb-0.text-start Garantía de confidencialidad.

                    li.d-flex.align-items-start
                      i.lista-ul__vineta
                      p.mb-0.text-start Prohibición de condicionar la atención a la denuncia previa.

              .row(titulo="Ley 1257 de 2008" subtitulo="")
                .col-lg-2.d-none.d-lg-block
                  figure(data-aos="fade-up")
                    img(src='@/assets/curso/tema4/17.svg', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  ul.lista-ul--color
                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Desarrolla medidas de sensibilización, prevención y sanción de las violencias contra las mujeres.

                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Reconoce la violencia sexual como una forma de violencia basada en género.
                    
                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Obliga al sector salud a garantizar:
                    
                  ul.list.lista-ul--color.mb-0.bg-r8
                    li.d-flex.align-items-start
                      i.lista-ul__vineta
                      p.mb-0.text-start Atención integral y humanizada.

                    li.d-flex.align-items-start
                      i.lista-ul__vineta
                      p.mb-0.text-start Enfoque de derechos humanos y diferencial.

                    li.d-flex.align-items-start
                      i.lista-ul__vineta
                      p.mb-0.text-start Prevención de la revictimización.

              .row(titulo="Ley 1098 de 2006 " subtitulo="")
                .col-lg-2.d-none.d-lg-block
                  figure(data-aos="fade-up")
                    img(src='@/assets/curso/tema4/18.svg', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  b Código de la Infancia y la Adolescencia
                  ul.lista-ul--color
                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Reconoce a niños, niñas y adolescentes como sujetos de derechos prevalentes.

                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Establece la obligación de protección integral frente a toda forma de violencia sexual.
                    
                    li.d-flex.align-items-start
                      span.icono-img
                      p.mb-0 Asigna al sector salud un rol prioritario en:
                    
                  ul.list.lista-ul--color.mb-0.bg-r8
                    li.d-flex.align-items-start
                      i.lista-ul__vineta
                      p.mb-0.text-start Detección temprana.

                    li.d-flex.align-items-start
                      i.lista-ul__vineta
                      p.mb-0.text-start Atención integral.

                    li.d-flex.align-items-start
                      i.lista-ul__vineta
                      p.mb-0.text-start Articulación con las autoridades para el restablecimiento de derechos.

    .titulo-tres.mt-5: h3 Derecho fundamental a la salud

    p.mt-4 En materia de salud, la normativa refuerza el carácter obligatorio de la atención:

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center.bg-r8.p-4.bg-12
          .col-lg-8 
            ul.lista-ul.mb-0.bg-r8
              li.d-flex.align-items-start
                i.lista-ul__vineta
                b.mb-0.text-start Ley Estatutaria 1751 de 2015

                  ul.lista-ul.mb-0.bg-r8
                    li.d-flex.align-items-start
                      i.lista-ul__vineta
                      p.mb-0.text-start Reconoce la salud como un derecho fundamental autónomo e irrenunciable.

                    li.d-flex.align-items-start
                      i.lista-ul__vineta
                      p.mb-0.text-start Establece la obligación de eliminar barreras de acceso a los servicios de salud.

                    li.d-flex.align-items-start
                        i.lista-ul__vineta
                        div.w-100
                          p.mb-0.text-start Exige que la atención en casos de violencia sexual sea:
                          //- Sublista como subhijo
                          ul.lista-ul.mb-0.mt-2
                            li.d-flex.align-items-start
                              i.lista-ul__vineta
                              p.mb-0.text-start Inmediata.
                            li.d-flex.align-items-start
                              i.lista-ul__vineta
                              p.mb-0.text-start Continua.
                            li.d-flex.align-items-start
                              i.lista-ul__vineta
                              p.mb-0.text-start Libre de condicionamientos administrativos, económicos o judiciales.
            
          .col-lg-4.d-none.d-lg-block
            figure(data-aos="fade-up")
              img(src='@/assets/curso/tema4/19.svg', alt='', style="width: 100%").m-auto 

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center.bg-r8.p-4.bg-14
          b.mb-1 Para profundizar en la normatividad internacional aplicable, se recomienda consultar:
          ul.lista-ul.mb-0.p-4.bg-r8
            li
              span.icono-img
              p.mb-0 Constitución Política de Colombia.

            li
              span.icono-img
              p.mb-0 Ley 599 de 2000 – Código Penal Colombiano.

            li
              span.icono-img
              p.mb-0 Ley 1146 de 2007 – Medidas de prevención y atención integral de la violencia sexual, especialmente en niños, niñas y adolescentes

            li
              span.icono-img
              p.mb-0 Ley 1257 de 2008 – Medidas de sensibilización, prevención y sanción de las violencias contra las mujeres.

            li
              span.icono-img
              p.mb-0 Ley 1098 de 2006 – Código de la Infancia y la Adolescencia.

    separador
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3 Normativa del sector salud aplicable a la atención integral

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-3(data-aos="fade-right").bg-r8
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema4/20.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                p La atención integral en salud a las personas víctimas de violencias sexuales se rige por normas, lineamientos y disposiciones técnicas emitidas por el Ministerio de Salud y Protección Social, las cuales desarrollan los mandatos constitucionales y legales y orientan de manera específica la actuación de los prestadores de servicios de salud y del talento humano.

    p.mt-4 Entre los principales referentes normativos y técnicos del sector salud se destacan:

    .row.justify-content-center.mt-4
      .col-lg-10
        LineaTiempoD.color-primario.linea-bold
          .row(numero="1" titulo="Modelo de Atención Integral en Salud para Víctimas de Violencia Sexual")
            .col-md-12.mb-4.mb-md-0
              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Define los principios, componentes y procesos que orientan la atención desde el sector salud.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Establece que la atención debe ser:
                    ul.list.lista-ul--color.mb-0.bg-r8
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start Integral, oportuna y continua.
                      
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start Humanizada y centrada en la persona.
                      
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start Con abordaje en salud física, mental y psicosocial.
                
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Promueve la articulación con las rutas intersectoriales de protección y justicia.
              
          .row(numero="2" titulo="Resolución 459 de 2012")
            .col-md-12.mb-4.mb-md-0
              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Adopta el protocolo y el modelo de atención integral en salud para víctimas de violencia sexual.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Establece lineamientos técnicos para:
                    ul.list.lista-ul--color.mb-0.bg-r8
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start Atención inicial y valoración clínica integral.
                      
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start Atención en salud mental.
                      
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start Profilaxis postexposición.
                     
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start Orientación diagnóstica y seguimiento.
                
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Señala de manera expresa que la atención en salud:
                    ul.list.lista-ul--color.mb-0.bg-r8
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start No puede condicionarse a la denuncia previa.
                      
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start Debe aplicarse de forma inmediata y sin barreras.
              
          .row(numero="3" titulo="Atención en salud y atención de urgencias")
            .col-md-12.mb-4.mb-md-0
              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 La normativa del sector salud establece que la atención debe ser:
                    ul.list.lista-ul--color.mb-0.bg-r8
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start Inmediata y prioritaria.
                      
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start Libre de barreras administrativas.
                      
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Incluye
                    ul.list.lista-ul--color.mb-0.bg-r8
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start Evaluación del estado general y del riesgo vital.
                      
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start Atención de lesiones físicas. 
                      
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start Prevención de complicaciones posteriores. 

          .row(numero="4" titulo="Atención en salud mental")
            .col-md-12.mb-4.mb-md-0
              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Constituye un componente obligatorio del abordaje integral.
                      
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Establece:
                    ul.list.lista-ul--color.mb-0.bg-r8
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start Valoración del estado mental de toda persona víctima.
                      
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start Acceso a intervenciones psicosociales oportunas.
                      
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start Adecuación de la atención al contexto y necesidades de la persona.
                
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Busca prevenir afectaciones a largo plazo y reducir el riesgo de revictimización.
              
          .row(numero="5" titulo="Vigilancia en salud pública")
            .col-md-12.mb-4.mb-md-0
              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Los lineamientos del Sistema de Vigilancia en Salud Pública (Sivigila) establecen:
                    ul.list.lista-ul--color.mb-0.bg-r8
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start La obligatoriedad de la notificación de los casos atendidos.
                      
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start El uso de la información con fines epidemiológicos y de gestión en salud pública.
                      
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 La notificación debe realizarse garantizando:
                    ul.list.lista-ul--color.mb-0.bg-r8
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start Confidencialidad.
                      
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start Protección de los derechos de las personas víctimas.
              
          .row(numero="6" titulo="Consentimiento informado y confidencialidad")
            .col-md-12.mb-4.mb-md-0
              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 La normativa sectorial exige:
                    ul.list.lista-ul--color.mb-0.bg-r8
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start Consentimiento libre e informado para los procedimientos, salvo excepciones legales.
                      
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start Manejo ético de la información clínica y médico-legal.
                      
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start Protección de la privacidad y los datos personales.
                      
              
          .row(numero="7" titulo="Prevención de la revictimización institucional")
            .col-md-12.mb-4.mb-md-0
              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 La atención debe:
                    ul.list.lista-ul--color.mb-0.bg-r8
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start Evitar interrogatorios innecesarios o repetitivos.

                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start Garantizar privacidad y trato respetuoso.
                      
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start Brindar información clara sobre procedimientos, derechos y opciones.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Este enfoque se fundamenta en:
                    ul.list.lista-ul--color.mb-0.bg-r8
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start La dignidad humana.

                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start El enfoque de derechos.
                      
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start La atención centrada en la persona.
    
    p.mt-4 En conjunto, la normativa del sector salud configura un marco técnico y operativo que define estándares mínimos de calidad, oportunidad y humanización en la atención integral de las personas víctimas de violencias sexuales. El cumplimiento de estas disposiciones constituye una obligación legal y ética para los prestadores de servicios de salud y el talento humano involucrado en la atención.

    separador
    #t_4_4.titulo-segundo.color-acento-contenido
      h2 4.4 Derechos de las víctimas de violencias sexuales en el sector salud

    .row.align-items-start.mt-4
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema4/21.svg', style='width: 90px').m-auto
          
          .col
            p Las personas víctimas de violencias sexuales son titulares de derechos específicos en el ámbito del sector salud, derivados de la Constitución Política, la normativa nacional vigente y los compromisos internacionales asumidos por el Estado colombiano. Estos derechos orientan la prestación de los servicios de salud y constituyen obligaciones de cumplimiento obligatorio para los prestadores y el talento humano en salud.
            p.mt-4 Entre los principales derechos se destacan:

    .row.justify-content-center.mt-4
      .row.justify-content-center
        .col-lg-3.d-flex.mt-4.mt-lg-0
          .crd.bg-14.bg-r8.p-4.h-100.w-100
            figure.mb-2(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/22.svg', style='width: 40px')
            p.mb-0 Derecho a la atención integral, oportuna y sin barreras.
  
        .col-lg-3.d-flex.mt-4.mt-lg-0
          .crd.bg-14.bg-r8.p-4.h-100.w-100
            figure.mb-2(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/23.svg', style='width: 40px')
            p.mb-0 Derecho a una atención digna, humanizada y sin discriminación.
  
        .col-lg-3.d-flex.mt-4.mt-lg-0
          .crd.bg-14.bg-r8.p-4.h-100.w-100
            figure.mb-2(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/24.svg', style='width: 40px')
            p.mb-0 Derecho a la información clara y comprensible.

        .col-lg-3.d-flex.mt-4.mt-lg-0
          .crd.bg-14.bg-r8.p-4.h-100.w-100
            figure.mb-2(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/25.svg', style='width: 40px')
            p.mb-0 Derecho al consentimiento informado.

    .row.justify-content-center.mt-4
      .row.justify-content-center
        .col-lg-3.d-flex.mt-4.mt-lg-0
          .crd.bg-14.bg-r8.p-4.h-100.w-100
            figure.mb-2(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/26.svg', style='width: 40px')
            p.mb-0 Derecho a la confidencialidad y reserva de la información.
  
        .col-lg-3.d-flex.mt-4.mt-lg-0
          .crd.bg-14.bg-r8.p-4.h-100.w-100
            figure.mb-2(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/27.svg', style='width: 40px')
            p.mb-0 Derecho a la atención en salud mental y apoyo psicosocial.
  
        .col-lg-3.d-flex.mt-4.mt-lg-0
          .crd.bg-14.bg-r8.p-4.h-100.w-100
            figure.mb-2(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/28.svg', style='width: 40px')
            p.mb-0 Derecho a la articulación intersectorial.

        .col-lg-3.d-flex.mt-4.mt-lg-0
          .crd.bg-14.bg-r8.p-4.h-100.w-100
            figure.mb-2(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/29.svg', style='width: 40px')
            p.mb-0 Derecho a la no revictimización.

    .row.align-items-center.mt-4
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/30.svg', alt='', style="width: 400px").m-auto
      .col-lg-8.p-3
        p.mt-4 Estos derechos deben garantizarse de manera transversal en todos los momentos de la atención en salud, desde el primer contacto con los servicios hasta el seguimiento posterior, y no pueden entenderse como acciones aisladas. Su reconocimiento y aplicación efectiva orientan la actuación del talento humano y de los prestadores de servicios de salud, fortalecen la confianza de las personas víctimas en el sistema sanitario y contribuyen a una atención integral, digna y libre de revictimización.

    separador
    #t_4_5.titulo-segundo.color-acento-contenido
      h2 4.5 Responsabilidades del talento humano en salud

    p.mt-4 El talento humano en salud asume responsabilidades éticas, técnicas y legales en la atención integral de las personas víctimas de violencias sexuales. Estas responsabilidades se fundamentan en el marco constitucional, la normativa vigente y los lineamientos técnicos del sector salud, y orientan la actuación profesional hacia la garantía de una atención integral, oportuna, digna y respetuosa de los derechos humanos.

    p.mt-4 Entre las principales responsabilidades se encuentran:

    .row.justify-content-center.mt-4
      .col-lg-10
        LineaTiempoD.color-primario.linea-bold
          .row(numero="1" titulo="Garantizar la atención inmediata e integral")
            .col-md-12.mb-4.mb-md-0
              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Asegurar el acceso oportuno a los servicios de salud requeridos.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Evitar barreras administrativas, económicas o judiciales.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 No condicionar la atención a la afiliación al sistema ni a la denuncia previa.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Priorizar la protección de la vida, la integridad y la salud de la persona víctima.

          .row(numero="2" titulo="Realizar la valoración clínica integral")
            .col-md-12.mb-4.mb-md-0
              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Evaluar el estado general de salud.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Identificar lesiones físicas y riesgos asociados.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Valorar el estado mental y emocional.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Actuar conforme a los lineamientos del modelo y los protocolos vigentes del sector salud.

          .row(numero="3" titulo="Garantizar el consentimiento informado")
            .col-md-12.mb-4.mb-md-0
              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Brindar información clara, suficiente y comprensible sobre los procedimientos.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Respetar la autonomía y las decisiones de la persona.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Obtener y documentar la autorización libre y voluntaria para las intervenciones.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Actuar de acuerdo con los principios éticos y legales aplicables.

          .row(numero="4" titulo="Proteger la confidencialidad y la información clínica")
            .col-md-12.mb-4.mb-md-0
              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Garantizar la reserva de la historia clínica y de los datos personales.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Compartir información únicamente en los casos autorizados por la ley.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Aplicar un manejo ético y responsable de la información.

          .row(numero="5" titulo="Prevenir la revictimización institucional")
            .col-md-12.mb-4.mb-md-0
              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Evitar interrogatorios innecesarios o repetitivos.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Abstenerse de emitir juicios de valor o actitudes culpabilizantes.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Garantizar un trato respetuoso, empático y digno durante toda la atención.

          .row(numero="6" titulo="Cumplir con la vigilancia en salud pública")
            .col-md-12.mb-4.mb-md-0
              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Realizar la notificación obligatoria de los casos de violencia sexual.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Seguir los protocolos establecidos para la vigilancia epidemiológica.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Garantizar la confidencialidad y el respeto por los derechos de la persona atendida.

          .row(numero="7" titulo="Articular con otros sectores cuando corresponda")
            .col-md-12.mb-4.mb-md-0
              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Facilitar el acceso a rutas de protección, justicia y apoyo social.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Respetar la voluntad y las decisiones informadas de la persona víctima.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Actuar de manera obligatoria en los casos que involucren niños, niñas y adolescentes. 

          .row(numero="8" titulo="Actualizar permanentemente sus competencias")
            .col-md-12.mb-4.mb-md-0
              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Fortalecer conocimientos técnicos y normativos.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Incorporar enfoques de derechos humanos, género y diferencial.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Garantizar una atención basada en la evidencia y en estándares de calidad.
    
    .row.align-items-center.mt-4
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/31.svg', alt='', style="width: 390px").m-auto
      .col-lg-8
        p.mt-4 El cumplimiento de estas responsabilidades permite que la atención en salud a las personas víctimas de violencias sexuales se realice de manera coherente con el marco normativo y los principios éticos del ejercicio profesional, contribuyendo a la protección de la salud integral y al restablecimiento de derechos.
        
        .row.mt-4.p-3.bg-r8.bg-3
          .col-12
            .row.align-items-center
              .col-lg-2.d-none.d-lg-block
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/32.svg', alt='', style="width: 80px").m-auto 
              .col-lg-10
                p El cumplimiento de estas responsabilidades asegura que la atención en salud a las personas víctimas de violencias sexuales se desarrolle en coherencia con el marco normativo vigente, los estándares técnicos del sector salud y los principios éticos que rigen el ejercicio profesional, contribuyendo de manera efectiva a la protección de la salud integral y al restablecimiento de derechos.



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
