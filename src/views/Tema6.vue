<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Proceso de atención integral en salud

    .row.mt-4.align-items-center
      .col-lg-9
        .row.align-items-center.bg-12.p-4.bg-r8
              .col-lg-2
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/tema6/1.svg', style='width: 80px').m-auto
              
              .col
                p La atención integral en salud frente a las violencias sexuales comprende un conjunto de acciones articuladas, secuenciales y obligatorias que deben implementarse desde el primer contacto con la persona afectada. Estas acciones se fundamentan en los principios de dignidad, enfoque de derechos humanos, confidencialidad, oportunidad y no revictimización, conforme a la normativa vigente y a los lineamientos técnicos del Ministerio de Salud y Protección Social.
      .col-lg-3.d-none.d-lg-block
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema6/2.svg', alt='', style="width: 290px").m-auto

    p.mt-4 La atención no se limita a la respuesta inmediata en urgencias ni a la resolución de las consecuencias físicas iniciales. Por el contrario, implica un abordaje integral que incluye las siguientes etapas:

    .row
      .col-12
        .p-5
          .row.align-items-center.bg-21
            .col-lg-4.d-lg-block.d-none
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema6/3.png',  style='width: 396px').m-auto

            .col-lg-8
              SlyderF(columnas="col-lg-6 col-xl-4")
                .tarjeta.bg-11.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema6/4.svg', alt='').img100.m-auto
                  p.text-center.mb-0 Recepción y primer contacto con enfoque humanizado.

                .tarjeta.bg-11.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema6/5.svg', alt='').img100.m-auto
                  p.text-center.mb-0 Valoración clínica integral del estado general de salud.

                .tarjeta.bg-11.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema6/6.svg', alt='').img100.m-auto
                  p.text-center.mb-0 Identificación y atención de lesiones físicas.

                .tarjeta.bg-11.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema6/7.svg', alt='').img100.m-auto
                  p.text-center.mb-0 Valoración del estado mental y emocional.

                .tarjeta.bg-11.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema6/8.svg', alt='').img100.m-auto
                  p.text-center.mb-0 Orientación diagnóstica inicial.

                .tarjeta.bg-11.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema6/9.svg', alt='').img100.m-auto
                  p.text-center.mb-0 Implementación de medidas preventivas y terapéuticas.

                .tarjeta.bg-11.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema6/10.svg', alt='').img100.m-auto
                  p.text-center.mb-0 Atención en salud mental y apoyo psicosocial.

                .tarjeta.bg-11.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema6/11.svg', alt='').img100.m-auto
                  p.text-center.mb-0 Articulación con las rutas de atención, protección y justicia.

                .tarjeta.bg-11.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema6/12.svg', alt='').img100.m-auto
                  p.text-center.mb-0 Seguimiento y continuidad de la atención.
    
    p.mt-4 Este proceso responde a los estándares definidos en el Modelo de Atención Integral en Salud para Víctimas de Violencia Sexual y en los lineamientos técnicos del sector salud, los cuales establecen los componentes mínimos que deben garantizar los servicios de salud para una atención integral, oportuna y sin revictimización.

    separador
    #t_6_1.titulo-segundo.color-acento-contenido
      h2 6.1 Principios del proceso de atención integral

    p.mt-4 El proceso de atención integral en salud a personas víctimas de violencias sexuales se rige por un conjunto de principios que orientan la actuación del talento humano y garantizan una respuesta ética, técnica y legalmente adecuada. Estos principios son de obligatorio cumplimiento y se derivan del marco constitucional, legal y sectorial vigente. Para profundizar en su comprensión, se invita a acceder al siguiente pódcast:          

    .row.justify-content-center.mt-4
      .col-lg-10.bg-2
        figure(data-aos="zoom-in-down")
          img(src='@/assets/curso/tema6/13.svg').m-auto
        .row.bg-14.p-4.align-items-center.justify-content-center
          .col-12.bg-6.bg-r8.p-4
            TarjetaAudio.color-acento-botones.mb-3.bg-6.p-3(
                texto="podcast"
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
    
    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-12(data-aos="fade-right").bg-r8
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema6/14.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                p En conjunto, estos principios orientan de manera transversal el proceso de atención integral en salud a personas víctimas de violencias sexuales y constituyen criterios esenciales de calidad, ética y legalidad en la actuación del sector salud y del talento humano involucrado.

    separador
    #t_6_2.titulo-segundo.color-acento-contenido
      h2 6.2 Recepción y atención inicial de la persona víctima

    .row.mt-4.align-items-center
      .col-lg-9

        p.mt-3 La recepción y atención inicial de la persona víctima de violencias sexuales constituye el primer momento del proceso de atención integral en salud y tiene un impacto determinante en la calidad de la respuesta institucional, la protección de la salud integral y la prevención de la revictimización. Este momento se rige por la normativa vigente y debe desarrollarse conforme a los principios de atención inmediata, dignidad humana, confidencialidad y enfoque de derechos.
        
        .row.align-items-center.mt-4.bg-3.p-2.bg-r8
              .col-lg-5
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/tema6/15.svg', style='width: 100%').m-auto
              
              .col
                p La atención inicial debe brindarse:
                ul.lista-ul--color
                  li.d-flex.align-items-start
                    span.icono-img
                    p.mb-0 De manera inmediata y prioritaria.

                  li.d-flex.align-items-start
                    span.icono-img
                    p.mb-0 Sin barreras administrativas, económicas o judiciales.

                  li.d-flex.align-items-start
                    span.icono-img
                    p.mb-0 Independientemente de:
                      ul.list.lista-ul--color.mb-0.bg-r8
                        li.d-flex.align-items-start
                          i.lista-ul__vineta
                          p.mb-0.text-start El tiempo transcurrido desde el hecho.
                        
                        li.d-flex.align-items-start
                          i.lista-ul__vineta
                          p.mb-0.text-start El régimen de afiliación al sistema de salud.
                        
                        li.d-flex.align-items-start
                          i.lista-ul__vineta
                          p.mb-0.text-start La presentación de denuncia previa.


      .col-lg-3.d-none.d-lg-block
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema6/16.png', alt='', style="width: 290px").m-auto


    .row.justify-content-center.mt-4
      .col-lg-10

        p.mt-4 Ninguna institución prestadora de servicios de salud puede negar o retrasar la atención, dado que se trata de una situación que compromete la integridad física, mental y la dignidad de la persona.

        .row.align-items-center.mt-4.bg-12.p-2.bg-r8
              .col
                p Durante la recepción, el talento humano en salud debe garantizar:
                ul.lista-ul--color
                  li.d-flex.align-items-start
                    span.icono-img
                    p.mb-0 Un ambiente seguro, privado y confidencial.

                  li.d-flex.align-items-start
                    span.icono-img
                    p.mb-0 Un trato respetuoso, empático y libre de juicios.

                  li.d-flex.align-items-start
                    span.icono-img
                    p.mb-0 La prevención de la revictimización, evitando:
                      ul.list.lista-ul--color.mb-0.bg-r8
                        li.d-flex.align-items-start
                          i.lista-ul__vineta
                          p.mb-0.text-start Interrogatorios innecesarios o repetitivos.
                        
                        li.d-flex.align-items-start
                          i.lista-ul__vineta
                          p.mb-0.text-start Actitudes culpabilizantes.
                        
                        li.d-flex.align-items-start
                          i.lista-ul__vineta
                          p.mb-0.text-start Exposición indebida de la información.
              .col-lg-5
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/tema6/17.png', style='width: 100%').m-auto

    p.mt-4 La atención inicial constituye un momento clave del proceso integral, ya que define la calidad de la respuesta institucional y la protección de los derechos de la persona. En este contexto, el talento humano en salud desempeña un papel determinante para garantizar una intervención oportuna, segura y libre de revictimización. A partir de esta responsabilidad, se establecen acciones específicas que deben desarrollarse durante la atención inicial.
    
    .row.justify-content-center.mt-4
      .col-lg-10  
        .row.justify-content-center 
          .col-lg-4.d-none.d-lg-block
            figure(data-aos="fade-up")
              img(src='@/assets/curso/tema6/18.svg', alt='', style="width: 390px").m-auto
          .col-lg-8
            AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul").color-primario
              .row(titulo="Talento humano")
                ul.lista-ul--color
                  li.d-flex.align-items-start
                    span.icono-img
                    p.mb-0 Identificar de manera oportuna la posible situación de violencia sexual
                  
                  li.d-flex.align-items-start
                    span.icono-img
                    p.mb-0 Reconocer que la consulta puede presentarse por
                      ul.list.lista-ul--color.mb-0.bg-r8
                        li.d-flex.align-items-start
                          i.lista-ul__vineta
                          p.mb-0.text-start Síntomas físicos inespecíficos.
                        
                        li.d-flex.align-items-start
                          i.lista-ul__vineta
                          p.mb-0.text-start Manifestaciones emocionales o psicológicas.

                  li.d-flex.align-items-start
                    span.icono-img
                    p.mb-0 Actuar conforme a los protocolos establecidos:
                      ul.list.lista-ul--color.mb-0.bg-r8
                        li.d-flex.align-items-start
                          i.lista-ul__vineta
                          p.mb-0.text-start Sin forzar el relato de los hechos.
                        
                        li.d-flex.align-items-start
                          i.lista-ul__vineta
                          p.mb-0.text-start Respetando la autonomía y el ritmo de la persona.

              .row(titulo="Acciones inmediatas")
                ul.lista-ul--color
                  li.d-flex.align-items-start
                    span.icono-img
                    p.mb-0 Brindar información clara y comprensible sobre:
                      ul.list.lista-ul--color.mb-0.bg-r8
                        li.d-flex.align-items-start
                          i.lista-ul__vineta
                          p.mb-0.text-start Derechos en salud.
                        
                        li.d-flex.align-items-start
                          i.lista-ul__vineta
                          p.mb-0.text-start Servicios disponibles.
                        
                        li.d-flex.align-items-start
                          i.lista-ul__vineta
                          p.mb-0.text-start Etapas del proceso de atención.
                  
                  li.d-flex.align-items-start
                    span.icono-img
                    p.mb-0 Garantizar el derecho al consentimiento informado.
                    
                  li.d-flex.align-items-start
                    span.icono-img
                    p.mb-0 Adaptar la información a las condiciones, capacidades y necesidades de la persona.

              .row(titulo="Atención inicial")
                ul.lista-ul--color
                  li.d-flex.align-items-start
                    span.icono-img
                    p.mb-0 La clasificación de la urgencia.

                  li.d-flex.align-items-start
                    span.icono-img
                    p.mb-0 La identificación de riesgos inmediatos para la vida o la salud.

                  li.d-flex.align-items-start
                    span.icono-img
                    p.mb-0 La definición de la prioridad de atención y de las acciones a seguir.

    p.mt-4 La atención inicial a personas víctimas de violencias sexuales exige consideraciones específicas según la población atendida y los componentes que garantizan una respuesta oportuna e integral. A continuación, se presentan dos aspectos fundamentales que orientan este proceso:


    .row.justify-content-center.mt-4.bg-22
      .col-lg-10
        .row.justify-content-center.mt-4.p-5
          .col-lg-5.mb-4.mb-lg-0
            .tarjeta.clr-paleYellow.p-4.bg-10.h-100
              .row.justify-content-center.mb-3
                .col-auto
                  .circle-morado
                    figure(data-aos="zoom-in")
                      img(src='@/assets/curso/tema6/19.svg' style='width: 80px')
              h4.text-start Atención a niños, niñas y adolescentes

              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Aplicar el principio del interés superior del niño.
      
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Garantizar medidas reforzadas de protección.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Asegurar la confidencialidad.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Articular la atención con las autoridades competentes para el restablecimiento de derechos.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Evitar cualquier retraso en la atención en salud.


          .col-lg-5.mb-4.mb-lg-0
            .tarjeta.clr-paleYellow.p-4.bg-10.h-100
              .row.justify-content-center.mb-3
                .col-auto
                  .circle-morado
                    figure(data-aos="zoom-in")
                      img(src='@/assets/curso/tema6/20.svg', style='width: 80px')
              h4.text-start Componentes de la recepción inicial

              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 La activación temprana de:
                    ul.list.lista-ul--color.mb-0.bg-r8
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start La valoración clínica integral.
                      
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start La atención en salud mental.
                      
                      li.d-flex.align-items-start
                        i.lista-ul__vineta
                        p.mb-0.text-start Las rutas intersectoriales de protección y justicia.
                
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 La participación informada de la persona en las decisiones relacionadas con su atención.
    
    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-11(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-1(data-aos="fade-right").bg-r8
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema6/21.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                p En este sentido, la recepción y atención inicial no constituye un acto meramente administrativo, sino un componente fundamental del proceso de atención integral en salud a personas víctimas de violencias sexuales. Su adecuada implementación contribuye de manera decisiva a la protección de la salud integral, al restablecimiento de derechos y a la prevención de daños adicionales derivados de una atención inadecuada o revictimizante.

    separador
    #t_6_3.titulo-segundo.color-acento-contenido
      h2 6.3 Evaluación del estado general y del riesgo vital

    p.mt-4 Es un componente fundamental del proceso de atención integral en salud a personas víctimas de violencias sexuales, ya que permite identificar de manera temprana situaciones que comprometen la vida o la estabilidad clínica y orientar de forma adecuada las intervenciones prioritarias. Esta evaluación debe realizarse de manera inmediata, sistemática y conforme a los lineamientos técnicos vigentes del sector salud.

    .bloque-texto-g.bloque-texto-g--invertido.bg-16.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/22.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Toda persona víctima de violencia sexual que ingresa a los servicios de salud debe ser evaluada inicialmente para determinar su estado general de salud y la existencia de riesgos vitales, sin que este procedimiento pueda verse retrasado por trámites administrativos u otras actuaciones no urgentes. La prioridad de esta evaluación responde a la necesidad de proteger la vida, la integridad física y la salud mental de la persona.


    .row.align-items-start.mt-4
          .col-lg-1.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema6/23.svg', style='width: 90px').m-auto
          
          .col
            p La valoración del estado general comprende la identificación de signos y síntomas que indiquen compromiso hemodinámico, neurológico o respiratorio, así como la detección de lesiones físicas evidentes o potenciales. Esta evaluación debe realizarse de forma integral, considerando tanto las manifestaciones clínicas visibles como aquellas que pueden no ser evidentes en el primer contacto, en coherencia con los principios de atención integral y de calidad.

    .row.align-items-center.mt-4
      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema6/24.png', alt='', style="width: 500px").m-auto
      .col-lg-7
        p La identificación del riesgo vital implica reconocer condiciones que requieren intervención inmediata, tales como:
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span.text-black 1
            p.mb-0 Hemorragias activas.

          li 
            .lista-ol--cuadro__vineta
              span.text-black 2
            p.mb-0 Traumatismos severos.

          li 
            .lista-ol--cuadro__vineta
              span.text-black 3
            p.mb-0 Alteraciones del estado de conciencia.

          li 
            .lista-ol--cuadro__vineta
              span.text-black 4
            p.mb-0 Dolor intenso.

          li 
            .lista-ol--cuadro__vineta
              span.text-black 5
            p.mb-0 Signos de infección aguda.

          li 
            .lista-ol--cuadro__vineta
              span.text-black 6
            p.mb-0 Otras situaciones que comprometan la vida o la estabilidad clínica.

    separador
    #t_6_4.titulo-segundo.color-acento-contenido
      h2 6.4 Valoración clínica integral

    .row.mt-4.align-items-center
      .col-lg-8

        p.mt-3 Es un componente central del proceso de atención en salud a personas víctimas de violencias sexuales. Su finalidad es identificar de manera sistemática las afectaciones físicas, mentales y emocionales derivadas del hecho, orientar las decisiones clínicas y garantizar una atención acorde con los lineamientos técnicos y normativos vigentes. Esta valoración debe realizarse una vez asegurada la estabilidad clínica y el control del riesgo vital, bajo criterios de integralidad, dignidad y no revictimización.

        .row.align-items-center.mt-4.bg-12.p-2.bg-r8              
              .col
                p La normativa del sector salud establece que la valoración clínica integral debe:
                ul.lista-ul--color
                  li.d-flex.align-items-start
                    span.icono-img
                    p.mb-0 Centrarse en las necesidades de salud de la persona.

                  li.d-flex.align-items-start
                    span.icono-img
                    p.mb-0 Evitar la reconstrucción detallada del evento con fines judiciales.

                  li.d-flex.align-items-start
                    span.icono-img
                    p.mb-0 Prevenir prácticas invasivas innecesarias.

                  li.d-flex.align-items-start
                    span.icono-img
                    p.mb-0 Evitar la repetición injustificada del relato de los hechos.

      .col-lg-4.d-none.d-lg-block
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema6/25.png', alt='', style="width: 100%").m-auto

    .row.align-items-center.mt-3
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema6/26.png', alt='', style="width: 100%").m-auto
      .col-lg-9.bg-14.bg-r8.p-3
        p La anamnesis debe realizarse de manera:

        ul.lista-ul--color
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Cuidadosa, respetuosa y focalizada.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Orientada a recoger solo la información necesaria para la atención en salud.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Respetando:            
              ul.list.lista-ul--color.mb-0.bg-r8
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0.text-start El ritmo de la persona.
                
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0.text-start Su autonomía.
                
                li.d-flex.align-items-start
                  i.lista-ul__vineta
                  p.mb-0.text-start Su derecho a no responder determinadas preguntas.
      
      p.mt-4 El examen físico se desarrolla en tres momentos fundamentales que orientan al talento humano en la salud hacia una atención clínica ordenada, segura y respetuosa de los derechos de la persona víctima:


      .row.justify-content-center.mt-4
        .col-lg-4.mb-4.mb-lg-0
          .tarjeta.clr-paleYellow.p-4.bg-23.h-100
            .row.justify-content-center.mb-3
              .col-auto
                .circle-morado
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/tema6/27.svg' style='width: 80px')
            h4.text-center Realización del exámen

            ul.lista-ul--color
              li.d-flex.align-items-start
                i.lista-ul__vineta
                p.mb-0 De la cabeza a los pies.
    
              li.d-flex.align-items-start
                i.lista-ul__vineta
                p.mb-0 Con registro fotográfico cuando aplique.

              li.d-flex.align-items-start
                i.lista-ul__vineta
                p.mb-0 Documentando hallazgos en la historia clínica.

        .col-lg-4.mb-4.mb-lg-0
          .tarjeta.clr-paleYellow.p-4.bg-23.h-100
            .row.justify-content-center.mb-3
              .col-auto
                .circle-morado
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/tema6/28.svg', style='width: 80px')
            h4.text-center Identificación de hallazgos

            ul.lista-ul--color
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Lesiones visibles o no visibles.
    
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Signos de trauma.

              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Infecciones u otras alteraciones relacionadas con la violencia sexual.

        .col-lg-4.mb-4.mb-lg-0
          .tarjeta.clr-paleYellow.p-4.bg-23.h-100
            .row.justify-content-center.mb-3
              .col-auto
                .circle-morado
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/tema6/29.svg', style='width: 80px')
            h4.text-center Principios éticos de la atención

            ul.lista-ul--color
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Privacidad.
    
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Confidencialidad.

              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 Consentimiento informado.

    .row.align-items-center.mt-4
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema6/30.png', alt='', style="width: 300px").m-auto
      .col-lg-9
        p Previo a su realización, se debe explicar a la persona el procedimiento y respetar su decisión de aceptar o rechazar determinadas intervenciones.

        p.mt-3 Cuando exista indicación clínica, los exámenes genitales y anogenitales deben realizarse bajo criterios de confidencialidad, consentimiento informado y estricto apego a los protocolos vigentes.
        ul.lista-ul--color
          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Realizarse únicamente con consentimiento informado expreso.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Ser practicados por personal capacitado.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Ajustarse a los protocolos vigentes del sector salud.

          li.d-flex.align-items-start
            span.icono-img
            p.mb-0 Evitar su uso rutinario o sin justificación clínica.

    .row.justify-content-center.mt-4
      .col-lg-10
        LineaTiempoD.color-primario.linea-bold
          .row(numero="1" titulo="La valoración del estado mental")
            .col-md-12.mb-4.mb-md-0
              p Permite identificar afectaciones emocionales y psicológicas derivadas de la violencia sexual:
              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Afectaciones emocionales.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Síntomas de ansiedad o depresión.
              
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Manifestaciones de estrés postraumático.
              
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Ideación suicida u otros riesgos en salud mental.
              
              p.mt-3 Esta valoración debe integrarse desde el primer contacto y no limitarse a una intervención posterior, permitiendo la adopción de medidas oportunas de atención y seguimiento.
              
          .row(numero="2" titulo="Identificación de riesgos adicionales")
            .col-md-12.mb-4.mb-md-0
              p Durante la valoración clínica integral se deben identificar riesgos asociados, tales como:
              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Riesgo de embarazo.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Infecciones de transmisión sexual, incluido el VIH.
              
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Otras complicaciones derivadas del hecho.
              
              p.mt-3 Esta identificación orienta la implementación de medidas preventivas y terapéuticas conforme a los protocolos vigentes.
              
          .row(numero="3" titulo="Registro en la historia clínica")
            .col-md-12.mb-4.mb-md-0
              p La valoración clínica integral debe documentarse de manera clara y completa en la historia clínica, consignando:
              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Hallazgos relevantes.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Decisiones clínicas adoptadas.
              
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Intervenciones realizadas.
              
              p.mt-3 Este registro es fundamental para garantizar la continuidad de la atención, la calidad del proceso asistencial y el cumplimiento de las responsabilidades técnicas y legales del sector salud.
        
        .row.mt-4.p-3.bg-r8.bg-14
          .col-12
            .row.align-items-center
              .col-lg-2.d-none.d-lg-block
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema6/31.svg', alt='', style="width: 100px").m-auto 
              .col-lg-10
                p En conjunto, la valoración clínica integral permite al sector salud comprender de manera completa el impacto de la violencia sexual sobre la salud de la persona y orientar una respuesta adecuada, oportuna y centrada en la protección de la salud integral y de los derechos, en cumplimiento de la normativa vigente y de los estándares técnicos del sector.
    separador
    #t_6_5.titulo-segundo.color-acento-contenido
      h2 6.5 Procedimientos médicos y medidas terapéuticas complementarias

    .row.align-items-center.mt-4
      .col-lg-8
        p.mt-4 Los procedimientos médicos y las medidas terapéuticas complementarias hacen parte del proceso de atención integral en salud a personas víctimas de violencias sexuales y se realizan con el propósito de prevenir complicaciones, tratar las afectaciones identificadas durante la valoración clínica integral y proteger la salud física y mental de la persona. Estas intervenciones deben aplicarse únicamente cuando estén clínicamente indicadas, bajo criterios de necesidad, proporcionalidad y respeto por los derechos de la persona víctima.

        .row.mt-5.p-3.bg-r8.bg-14
          .col-12
            .row.align-items-center
              .col-lg-2.d-none.d-lg-block
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema6/32.svg', alt='', style="width: 150px").m-auto 
              .col-lg-10
                p De conformidad con los lineamientos técnicos del sector salud, los procedimientos médicos deben realizarse una vez asegurada la estabilidad clínica, garantizando en todo momento el consentimiento informado, la privacidad y la confidencialidad. El talento humano en salud debe explicar de manera clara y comprensible el objetivo de cada intervención, sus beneficios, posibles riesgos y alternativas, respetando la decisión de la persona de aceptar o rechazar los procedimientos, salvo las excepciones previstas en la ley.
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema6/33.png', alt='', style="width: 390px").m-auto

    .row.justify-content-center.mt-4
      .col-lg-3.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema6/34.png', alt='', style="width: 290px").m-auto

      .col-lg-9
        LineaTiempoD.color-primario.linea-bold
          .row(numero="1" titulo="Exámenes físicos específicos")
            .col-md-12.mb-4.mb-md-0
              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Realizados únicamente cuando aporten información relevante para la atención en salud.
      
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Orientados al manejo clínico y no a la reconstrucción judicial de los hechos.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Aplicados con trato respetuoso y evitando exposiciones innecesarias.
          
          .row(numero="2" titulo="Exámenes genitales y anogenitales")
            .col-md-12.mb-4.mb-md-0
              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Indicados solo cuando sean clínicamente necesarios.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Requieren consentimiento informado expreso.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Deben ser realizados por personal capacitado.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 No son procedimientos rutinarios ni obligatorios.


          .row(numero="3" titulo="Pruebas diagnósticas y de laboratorio")
            .col-md-12.mb-4.mb-md-0
              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Pruebas para infecciones de transmisión sexual, incluido el VIH.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Evaluación de riesgo de embarazo.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Otros exámenes según los hallazgos clínicos.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Su indicación debe responder exclusivamente a criterios clínicos.

          .row(numero="4" titulo="Medidas preventivas y terapéuticas")
            .col-md-12.mb-4.mb-md-0
              ul.lista-ul--color
                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Profilaxis postexposición para infecciones de transmisión sexual, incluido el VIH, cuando esté indicada.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Anticoncepción de emergencia, de acuerdo con los protocolos vigentes.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Tratamiento inicial de lesiones físicas o infecciones identificadas.

                li.d-flex.align-items-start
                  span.icono-img
                  p.mb-0 Intervenciones orientadas a prevenir complicaciones posteriores.

    p.mt-4 Estas medidas deben brindarse de manera oportuna y sin barreras, en cumplimiento del derecho fundamental a la salud y de los estándares de atención definidos para la atención integral de las violencias sexuales.

    .row.align-items-center
      .col-lg-8
        p.bg-14.bg-r8.p-3 Todos los procedimientos realizados y las medidas adoptadas deben quedar debidamente registrados en la historia clínica, consignando de forma clara las intervenciones efectuadas, las decisiones clínicas tomadas y el consentimiento otorgado por la persona. Este registro es un deber técnico y legal y garantiza la continuidad de la atención y la calidad del proceso asistencial.

        .row.align-items-center
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema6/35.svg', style='width: 100px').m-auto
          
          .col
            p En los casos que involucren a niños, niñas y adolescentes, los procedimientos médicos y las medidas terapéuticas complementarias deben aplicarse bajo el principio del interés superior del niño, garantizando medidas de protección reforzada, la participación de personal capacitado y la articulación con las autoridades competentes para el restablecimiento de derechos, sin que ello implique retrasos en la atención en salud ni vulneración de la dignidad de la persona.
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema6/36.png', alt='', style="width: 390px").m-auto
    
    p.mt-4 En conjunto, los procedimientos médicos y las medidas terapéuticas complementarias constituyen una fase operativa del proceso de atención integral en salud, orientada a proteger la salud, prevenir daños adicionales y garantizar una respuesta clínica adecuada, ética y acorde con la normativa vigente frente a las violencias sexuales.
  
    separador
    #t_6_6.titulo-segundo.color-acento-contenido
      h2 6.6 Orientación diagnóstica inicial

    .row.align-items-center
      .col-lg-8
        p Constituye una fase de integración clínica dentro del proceso de atención integral en salud a personas víctimas de violencias sexuales. Su finalidad es analizar de manera conjunta los hallazgos obtenidos durante la valoración clínica integral y los procedimientos realizados, con el fin de definir las decisiones clínicas inmediatas y garantizar la continuidad de la atención.
        
        .row.align-items-center
          .col-lg-4.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema6/37.png', style='width: 2000px').m-auto
          
          .col
            p En el contexto de la atención en salud, la orientación diagnóstica tiene un carácter exclusivamente clínico y sanitario. No corresponde a una calificación judicial de los hechos, sino a la identificación de condiciones de salud, riesgos y necesidades de atención que orientan el plan terapéutico y preventivo. El talento humano en salud debe centrar su actuación en el abordaje integral de la persona, evitando emitir juicios o conclusiones con fines legales.
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema6/38.png', alt='', style="width: 100%").m-auto

    .row.justify-content-center.mt-4.bg-24.p-5
      .col-lg-10
        .row.justify-content-center.mt-4.p-5
          p.mt-4 La orientación diagnóstica inicial permite:
          .col-lg-10
            .row.align-items-center.p-4.bg-14
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

            p.mt-4 Las decisiones adoptadas en esta fase deben comunicarse de manera clara y comprensible a la persona, respetando su autonomía, garantizando el consentimiento informado y la confidencialidad de la información. Asimismo, deben quedar debidamente registradas en la historia clínica, como parte del plan inicial de atención.
            
            .row.mt-4.p-3.bg-r8.bg-17
              .col-12
                .row.align-items-center
                  .col-lg-2.d-none.d-lg-block
                    figure(data-aos="fade-up")
                      img(src='@/assets/curso/tema6/39.svg', alt='', style="width: 100px").m-auto 
                  .col-lg-10
                    p En los casos que involucren a niños, niñas y adolescentes, la orientación diagnóstica inicial debe realizarse aplicando el principio del interés superior del niño y articulando las acciones necesarias para el restablecimiento de derechos, sin que ello limite o retrase la atención en salud.

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-11(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-14(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema6/40.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                p En síntesis, la orientación diagnóstica inicial no constituye una nueva evaluación clínica, sino un momento decisorio que consolida la respuesta sanitaria frente a las violencias sexuales y orienta un plan de atención integral, continuo y centrado en la protección de la salud y los derechos de la persona víctima.

    separador
    #t_6_7.titulo-segundo.color-acento-contenido
      h2 6.7 Seguimiento, referencia y contrarreferencia

    .row.align-items-center
      .col-lg-8
        p Son componentes esenciales del proceso de atención integral en salud a personas víctimas de violencias sexuales, ya que permiten garantizar la continuidad del cuidado, dar respuesta a las necesidades identificadas y reducir el riesgo de complicaciones a corto, mediano y largo plazo. Estas acciones deben desarrollarse conforme a la normativa vigente y a los lineamientos técnicos del sector salud.

        p.bg-1.bg-r8.p-3 El seguimiento en salud tiene como propósito evaluar la evolución clínica, física y mental de la persona, verificar la efectividad de las intervenciones realizadas y detectar oportunamente nuevas necesidades de atención. Este seguimiento debe definirse desde la orientación diagnóstica inicial y ajustarse a los riesgos y condiciones particulares de cada caso, en coherencia con los principios de integralidad y continuidad de la atención.

        .row.align-items-center
          .col-lg-2.mb-lg-0.mb-4
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema6/41.svg', style='width: 100px').m-auto
          
          .col
            p En el ámbito de la salud mental, el seguimiento adquiere especial relevancia, dado que las afectaciones emocionales y psicológicas asociadas a la violencia sexual pueden manifestarse de manera diferida o persistir en el tiempo. Por ello, el sector salud debe garantizar el acceso a intervenciones psicosociales continuas y, cuando sea necesario, a servicios especializados, de forma oportuna y pertinente.
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema6/42.png', alt='', style="width: 390px").m-auto

    .row.align-items-center.mt-4
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema6/43.png', alt='', style="width: 390px").m-auto
      .col-lg-8
        p La referencia corresponde a la remisión de la persona a otro nivel de atención o a un servicio especializado cuando la complejidad del caso o las condiciones clínicas así lo requieren. Esta decisión debe basarse en criterios técnicos y clínicos, garantizar la continuidad del proceso de atención y brindarse con información clara a la persona, respetando su autonomía y evitando cargas o barreras injustificadas.
        
        p La contrarreferencia permite el retorno de la persona al servicio de origen o a un nivel de menor complejidad, una vez se ha proporcionado la atención especializada requerida. Este proceso es fundamental para asegurar la continuidad del cuidado y la adecuada coordinación entre los diferentes niveles del sistema de salud, y debe realizarse con información clínica suficiente y oportuna.
        
        p.bg-17.bg-r8.p-3 En los casos que involucren a niños, niñas y adolescentes, el seguimiento y los procesos de referencia y contrarreferencia deben aplicarse con especial cuidado, bajo el principio del interés superior del niño, y articularse con las autoridades competentes para el restablecimiento de derechos, sin retrasar la atención en salud ni vulnerar la confidencialidad.
        
    .row.align-items-center.mt-3
      .col-lg-8
        .row.mt-5.p-3.bg-r8.bg-14
          .col-12
            .row.align-items-center
              .col-lg-2.d-none.d-lg-block
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema6/44.svg', alt='', style="width: 150px").m-auto 
              .col-lg-10
                p Todas las acciones de seguimiento, referencia y contrarreferencia deben quedar debidamente registradas en la historia clínica, consignando las decisiones adoptadas y las remisiones realizadas. Este registro garantiza la trazabilidad del proceso de atención y el cumplimiento de las responsabilidades técnicas y legales del sector salud.

        p.mt-4 En conjunto, estos componentes aseguran que la atención a las personas víctimas de violencias sexuales se desarrolle como un proceso continuo, articulado y centrado en la protección de la salud integral y los derechos de las personas, y no como una intervención aislada o limitada en el tiempo.

      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema6/45.png', alt='', style="width: 390px").m-auto

</template>

<script>
export default {
  name: 'Tema6',
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
