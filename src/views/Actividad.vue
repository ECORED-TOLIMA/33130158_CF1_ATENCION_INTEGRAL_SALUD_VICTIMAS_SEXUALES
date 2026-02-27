<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Fundamentos y normatividad de la atención integral en violencias sexuales',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los fundamentos conceptuales, normativos y éticos que orientan la atención integral en salud a personas víctimas de violencias sexuales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: 'Opción a)\tSolo ocurre en el ámbito privado.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Afecta principalmente a mujeres y niñas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se basa en relaciones desiguales de poder.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Siempre implica contacto físico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes instrumentos orienta la política pública en salud sexual y reproductiva en Colombia?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ley 100 de 1993.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Política Nacional de Salud Sexual y Reproductiva.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Código Sustantivo del Trabajo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Resolución 1956 de 2008.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: 'El CONPES Social 161 se relaciona principalmente con:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Atención hospitalaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Vigilancia epidemiológica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Seguridad social en pensiones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Equidad de género para las mujeres.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Las violencias sexuales deben entenderse como un problema de salud pública porque:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Generan costos económicos al sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Afectan la salud física, mental y social de las víctimas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Son frecuentes en contextos urbanos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Requieren intervención policial inmediata.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'El enfoque de derechos en la atención a víctimas de violencias sexuales implica:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Garantizar el respeto, la dignidad y la autonomía de la persona.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Priorizar los procedimientos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Remitir todos los casos a la autoridad judicial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aplicar únicamente el enfoque médico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de los siguientes es un principio ético de la atención integral en salud?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Jerarquización del servicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Confidencialidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Productividad institucional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Optimización de recursos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'El consentimiento informado en la atención a víctimas de violencias sexuales se caracteriza por ser:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Implícito.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Obligatorio solo en menores de edad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Libre, previo e informado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Exclusivo del ámbito judicial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Opción a)\tReconocer las particularidades según edad, género y contexto.\tX',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicar el mismo procedimiento a todas las personas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Priorizar la atención especializada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir los tiempos de atención.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de los siguientes elementos hace parte del Sistema Obligatorio de Garantía de Calidad?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Vigilancia policial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Auditoría para el mejoramiento de la calidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Investigación penal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Inspección laboral.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'La no revictimización implica:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Repetir el relato para confirmar los hechos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar prácticas que generen daño adicional a la víctima',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solicitar pruebas antes de la atención.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Priorizar el proceso legal por encima del bienestar de la persona atendida.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es una condición básica de infraestructura para la atención integral?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Atención en espacios compartidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Atención exclusivamente ambulatoria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Uso obligatorio de uniformes clínicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Garantizar privacidad y confidencialidad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: 'Opción a)\tLa legislación laboral.',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La política económica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El sistema judicial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los derechos humanos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: 'El sistema de referencia y contrarreferencia permite:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar estadísticas nacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Coordinar la atención entre distintos niveles y servicios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Garantizar la atención judicial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Priorizar la atención hospitalaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Reconocer los tipos de violencias sexuales permite principalmente:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Clasificar delitos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aplicar sanciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Realizar un abordaje integral adecuado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Activar medidas de protección policial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'La construcción cultural de la identidad influye en las violencias sexuales porque:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Define los protocolos de atención.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Refuerza estereotipos y relaciones de poder.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Determina la atención clínica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Regula el sistema de salud.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Cuál de los siguientes es un recurso necesario para la atención integral?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Infraestructura, insumos y equipos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo talento humano.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Exclusivamente apoyo judicial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Atención domiciliaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: 'El trato digno en la atención a víctimas implica:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Atención rápida.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Lenguaje técnico especializado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Respeto, empatía y escucha activa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aplicación estricta del protocolo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'La normatividad internacional en violencias sexuales se relaciona con:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tratados comerciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estándares de derechos humanos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Normas laborales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reglamentos internos de salud.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Identificar signos y síntomas de violencia sexual es importante porque:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permite confirmar un delito.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Facilita la intervención judicial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Orienta la atención integral en salud.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sustituye el relato de la víctima.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'El abordaje integral de las víctimas de violencias sexuales debe ser:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Exclusivamente clínico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Centrado en el diagnóstico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ético, oportuno y con enfoque de derechos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Prioritariamente judicial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
