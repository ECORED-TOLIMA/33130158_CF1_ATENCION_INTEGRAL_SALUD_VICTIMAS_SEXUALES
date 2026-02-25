export default {
  global: {
    Name: 'Atención integral en salud a las victimas de violencias sexuales',
    Description:
      'Este componente formativo desarrolla los fundamentos conceptuales, normativos y procedimentales de la atención integral en salud a personas víctimas de violencias sexuales, conforme a la normatividad vigente y al contexto del servicio de salud. Fortalece competencias para aplicar modelos, protocolos y enfoques de derechos humanos, género, diferencial y ciclo vital, garantizando una atención ética, digna, oportuna y libre de revictimización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Las violencias sexuales como problema de salud pública',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de violencias sexuales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Impacto de las violencias sexuales en la salud física, mental y social',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Rol del sector salud y del talento humano en la atención integral',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Marco conceptual',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Violencias sexuales y derechos humanos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Violencias y salud sexual y reproductiva',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Tipologías de las violencias sexuales',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Caracterización epidemiológica de las violencias sexuales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Magnitud y comportamiento de las violencias sexuales',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Violencias sexuales como evento de interés en salud pública',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Distribución de las violencias sexuales según contexto de ocurrencia',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Factores de riesgo asociados a las violencias sexuales',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Subregistro y barreras de acceso a los servicios de salud',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Marco normativo de la atención integral',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Instrumentos internacionales aplicables',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Normativa nacional sobre violencias sexuales',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Normativa del sector salud aplicable a la atención integral',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Derechos de las víctimas de violencias sexuales en el sector salud',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Responsabilidades del talento humano en salud',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Enfoques para la atención integral frente a la violencia sexual',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Enfoque de derechos humanos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Enfoque de género',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Enfoque diferencial y de ciclo vital',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Enfoque psicosocial',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Prevención de la revictimización',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Proceso de atención integral en salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Principios del proceso de atención integral',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Recepción y atención inicial de la persona víctima',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Evaluación del estado general y del riesgo vital',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Valoración clínica integral',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo:
              'Procedimientos médicos y medidas terapéuticas complementarias',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Orientación diagnóstica inicial',
            hash: 't_6_6',
          },
          {
            numero: '6.7',
            titulo: 'Seguimiento, referencia y contrarreferencia',
            hash: 't_6_7',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Articulación intersectorial y rutas de atención',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Articulación intersectorial en la atención integral',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Consentimiento informado',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Manejo ético de la información',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Responsabilidad ética y legal del talento humano',
            hash: 't_7_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Articulación intersectorial',
      significado:
        'coordinación entre el sector salud y otras entidades del Estado para garantizar la protección y atención integral de las víctimas de violencias sexuales.',
    },
    {
      termino: 'Autonomía',
      significado:
        'capacidad de la persona para tomar decisiones libres e informadas sobre su cuerpo y su salud, sin presiones ni imposiciones.',
    },
    {
      termino: 'Confidencialidad',
      significado:
        'obligación ética y legal de proteger la información personal y clínica de la víctima, limitando su acceso al personal directamente involucrado en la atención.',
    },
    {
      termino: 'Consentimiento informado',
      significado:
        'aceptación libre y voluntaria de la persona para recibir un procedimiento o intervención en salud, luego de recibir información clara y comprensible.',
    },
    {
      termino: 'Enfoque de derechos humanos',
      significado:
        'perspectiva que reconoce a las víctimas como sujetas de derechos y orienta la atención hacia su protección y restablecimiento, sin discriminación.',
    },
    {
      termino: 'Enfoque diferencial',
      significado:
        'reconocimiento de las particularidades de cada persona, edad, género, etnia y discapacidad para brindar una atención pertinente y equitativa.',
    },
    {
      termino: 'Enfoque de género',
      significado:
        'perspectiva que analiza cómo las desigualdades y relaciones de poder influyen en la ocurrencia de las violencias sexuales y en el acceso a la atención.',
    },
    {
      termino: 'Enfoque psicosocial',
      significado:
        'consideración de las dimensiones emocionales, psicológicas y sociales de la víctima, más allá de las afectaciones físicas.',
    },
    {
      termino: 'Historia clínica',
      significado:
        'documento reservado donde se registran de forma clara y objetiva los datos de atención en salud, hallazgos clínicos e intervenciones realizadas.',
    },
    {
      termino: 'Referencia',
      significado:
        'remisión de una persona a otro nivel de atención o servicio especializado cuando la complejidad del caso o el riesgo identificado lo requieren.',
    },
    {
      termino: 'Revictimización',
      significado:
        'daño emocional, psicológico o social que sufre la víctima como consecuencia de prácticas institucionales inadecuadas durante la atención.',
    },
    {
      termino: 'Talento humano en salud',
      significado:
        'personas que, desde distintos roles y niveles de formación, participan en la prestación de servicios de salud y en la atención integral a las víctimas.',
    },
    {
      termino: 'Trato digno',
      significado:
        'atención basada en el respeto, la empatía y el reconocimiento de la persona como sujeta de derechos, libre de discriminación o juicio moral.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (1997). <em>Ley 360 de 1997. Delitos contra la libertad sexual y la dignidad humana</em>.',
      link:
        'https://www.secretariasenado.gov.co/senado/basedoc/ley_0360_1997.html',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2000). <em>Ley 599 de 2000. Código Penal Colombiano</em>.',
      link:
        'https://www.secretariasenado.gov.co/senado/basedoc/ley_0599_2000.html',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2004). <em>Ley 906 de 2004. Código de Procedimiento Penal</em>.',
      link:
        'https://www.secretariasenado.gov.co/senado/basedoc/ley_0906_2004.html',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2006). <em>Ley 1098 de 2006. Código de la Infancia y la Adolescencia</em>.',
      link: 'https://www.icbf.gov.co/cargues/avance/docs/ley_1098_2006.html',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2007). <em>Ley 1146 de 2007. Prevención de la violencia sexual y atención integral a NNA</em>.',
      link:
        'https://www.secretariasenado.gov.co/senado/basedoc/ley_1146_2007.html',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2008). <em>Ley 1257 de 2008. Violencia y discriminación contra las mujeres</em>.',
      link:
        'https://www.secretariasenado.gov.co/senado/basedoc/ley_1257_2008.html',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2000). <em>Resolución 412 de 2000. Guías de atención: mujer y menor maltratado</em>.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/RESOLUCION%20412%20DE%202000.pdf',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2007). <em>Decreto 3039 de 2007. Plan Nacional de Salud Pública</em>.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=26152',
    },
    {
      referencia:
        'Ministerio de la Protección Social & UNFPA. (2011). <em>Modelo de Atención Integral en Salud para Víctimas de Violencia Sexual</em>.',
      link:
        'https://colombia.unfpa.org/sites/default/files/pub-pdf/Modelo%20de%20Atencion%20Integral%20en%20Salud%20para%20Victimas%20de%20Violencia%20Sexual.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2011). <em>Modelo y protocolo de atención integral en salud para víctimas de violencia sexual</em>.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/Modelo-protocolo-atencion-violencia-sexual.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2018). <em>Lineamientos técnicos y operativos para la atención integral a víctimas de violencias sexuales</em>.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/Lineamientos-atencion-integral-violencias-sexuales.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Medicina Legal y Ciencias Forenses. (2009). <em>Reglamento técnico para el abordaje forense integral en la investigación del delito sexual</em> (Versión 03).',
      link:
        'https://www.medicinalegal.gov.co/documents/20143/49493/Reglamento+Tecnico+Abordaje+Forense+Integral+Delito+Sexual.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Medicina Legal y Ciencias Forenses. (2009). <em>Instructivo para manejo de kits de toma de muestras en delitos sexuales</em>.',
      link:
        'https://www.medicinalegal.gov.co/documents/20143/0/Instructivo-uso-kits-delito-sexual.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Medicina Legal y Ciencias Forenses. (2010). <em>CIE-10 aplicado a violencia sexual</em>.',
      link:
        'https://www.medicinalegal.gov.co/documents/20143/0/CIE10-violencia-sexual.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Medicina Legal y Ciencias Forenses. (2009). <em>Forensis: Datos para la vida</em>.',
      link:
        'https://www.medicinalegal.gov.co/documents/20143/49523/Forensis-2009.pdf',
    },
    {
      referencia:
        'Defensoría del Pueblo & Profamilia. (2007). <em>Módulo de la A a la Z en derechos sexuales y reproductivos</em>.',
      link:
        'https://profamilia.org.co/wp-content/uploads/2018/12/Modulo-A-a-Z-DSDR.pdf',
    },
    {
      referencia:
        'Convención Interamericana para Prevenir, Sancionar y Erradicar la Violencia contra la Mujer – Convención de Belém do Pará. (1994).',
      link: 'https://www.oas.org/es/mesecvi/convencion.asp',
    },
    {
      referencia:
        'Naciones Unidas. (1993). <em>Declaración sobre la eliminación de la violencia contra la mujer</em>.',
      link: 'https://www.un.org/es/documents/ag/res/48/104.shtml',
    },
    {
      referencia:
        'Naciones Unidas. (1998). <em>Estatuto de Roma de la Corte Penal Internacional</em>.',
      link: 'https://www.icc-cpi.int/sites/default/files/RS-Spanish.pdf',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2003). <em>Informe mundial sobre la violencia y la salud</em>.',
      link: 'https://apps.who.int/iris/handle/10665/67411',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2003). <em>Guidelines for medico-legal care for victims of sexual violence</em>.',
      link: 'https://apps.who.int/iris/handle/10665/42788',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (2000). <em>Promoción de la salud sexual: recomendaciones para la acción</em>.',
      link: 'https://iris.paho.org/handle/10665.2/51848',
    },
    {
      referencia:
        'Corporación Humanas. (2009). <em>Guía para llevar casos de violencia sexual en el marco del conflicto armado colombiano</em>.',
      link: 'https://www.humanas.org.co/archivos/Guia_violencia_sexual.pdf',
    },
    {
      referencia:
        'Organización Internacional para las Migraciones. (2006). <em>Dimensiones de la trata de personas en Colombia</em>.',
      link:
        'https://publications.iom.int/books/dimensiones-de-la-trata-de-personas-en-colombia',
    },
    {
      referencia:
        'UNICEF. (2002). <em>Explotación sexual comercial de niños, niñas y adolescentes</em>.',
      link: 'https://www.unicef.org/colombia/media/181/file/ESCNNA.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
