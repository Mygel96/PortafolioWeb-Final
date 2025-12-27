
const semanas = [
  {
    id: 'sem1',
    titulo: 'Semana 1',
  temas: ['HTML Básico', 'HTML Avanzado'],
    descripcion: `Comenzamos con los fundamentos de HTML incluyendo la estructura de un documento, etiquetas de texto, imágenes y enlaces. Luego avanzamos hacia prácticas más complejas: formularios accesibles, tablas semánticas y técnicas para estructurar contenido que facilite la indexación y la accesibilidad. Se hizo especial énfasis en escribir un HTML limpio y comprensible, evitando hacks innecesarios y manteniendo la compatibilidad entre navegadores. También se introdujeron conceptos de optimización de carga relacionados con el marcado.`,
    definicion: `Para mí, HTML es el lenguaje con el que organizo y doy sentido al contenido; es la primera capa que construyo para que la información sea entendible por usuarios y por máquinas.`,
    procedimientos: [
      'Crear la estructura básica <!DOCTYPE html>, <html>, <head> y <body>.',
      'Usar etiquetas semánticas (header, main, nav, footer, article) para organizar el contenido.',
      'Etiquetar correctamente imágenes con alt y crear formularios accesibles.',
      'Validar el HTML y evitar prácticas que comprometan la accesibilidad.'
    ],
    detalles: `En mis ejercicios suelo empezar por bosquejar la estructura en papel, luego trazar el marcado mínimo y finalmente ir agregando atributos semánticos. Evito usar elementos por conveniencia cuando su propósito no coincide con la semántica.`,
    reflexion: 'Un HTML sólido es la base para construir buenas interfaces; la semántica mejora la accesibilidad y el SEO.',
    enlaces: []
  },
  {
    id: 'sem2',
    titulo: 'Semana 2',
    temas: ['CSS Básico', 'CSS Avanzado'],
    descripcion: `Esta semana cubrimos selectores, cascada, especificidad y el modelo de caja. Practicamos layout con flexbox y grid, y revisamos cómo organizar hojas de estilo con variables y metodologías sencillas para mantenerlas escalables. Trabajamos además en la optimización de CSS y la reducción de reglas redundantes para mejorar rendimiento.`,
    definicion: `Veo al CSS como la herramienta que transforma la estructura en experiencia; me permite controlar disposición, color y comportamiento visual en distintos dispositivos.`,
    procedimientos: [
      'Definir variables globales (colores, tipografías) en :root.',
      'Construir layouts con Flexbox para componentes y Grid para estructuras complejas.',
      'Aplicar mobile-first y probar en distintos tamaños de pantalla.',
      'Refactorizar reglas repetidas y eliminar estilos no utilizados.'
    ],
    detalles: `Normalmente organizo los estilos por bloques (componentes) y prefiero usar convenciones sencillas para mantener claridad. Hago uso de herramientas de inspección para depurar problemas de cascada y especificidad.`,
    reflexion: 'El dominio del CSS permite transformar la estructura en experiencias visuales coherentes y accesibles.',
    enlaces: []
  },
  {
    id: 'sem3',
    titulo: 'Semana 3',
    temas: ['CSS con Bootstrap', 'CSS con Tailwind'],
    descripcion: `Comparativa práctica entre Bootstrap (componentes listos) y Tailwind (utilidades). Implementamos logos y pequeñas interfaces con ambos para entender las ventajas de cada enfoque: rapidez de prototipado vs control fino del diseño. Aprendimos a integrar un framework en proyectos existentes y a personalizar variables para mantener coherencia visual.`,
    definicion: `Aprendí que los frameworks ofrecen atajos: yo los uso para acelerar prototipos, pero mantengo control cuando necesito un diseño específico.`,
    procedimientos: [
      'Evaluar requisitos del proyecto para decidir entre componentes listos o utilidades.',
      'Integrar el framework escogido y personalizar variables o temas.',
      'Probar el resultado en diferentes resoluciones y ajustar estilos personalizados.'
    ],
    detalles: `En las prácticas integré ambos frameworks en pequeños proyectos; con Bootstrap pude armar una página rápida y con Tailwind afinar detalles visuales sin escribir CSS largo.`,
    reflexion: 'Elegir un framework depende del proyecto; conocer ambos ofrece flexibilidad en la elección de herramientas.',
    enlaces: []
  },
  {
    id: 'sem4',
    titulo: 'Semana 4',
    temas: ['JavaScript Básico', 'JavaScript Avanzado', 'TypeScript'],
    descripcion: `Iniciamos con los fundamentos de JavaScript: tipos, funciones, objetos y manipulación básica del DOM. Progresamos hacia promesas, async/await y patrones comunes para manejar asincronía y errores. Se introdujo TypeScript para añadir tipado estático, definiendo interfaces simples y comprobando tipos en funciones y componentes pequeños. Discutimos ventajas del tipado y cómo mejora mantenibilidad.`,
    definicion: `Para mí, JavaScript es la capa de comportamiento: lo uso para responder a la interacción del usuario, manipular el DOM y comunicarme con servidores de forma controlada. TypeScript lo veo como una ayuda para evitar errores en código compartido.`,
    procedimientos: [
      'Practicar manipulación del DOM de forma segura y no invasiva.',
      'Usar promesas y async/await para manejar llamadas asíncronas con control de errores.',
      'Escribir tipos básicos con TypeScript y agregar anotaciones en funciones críticas.'
    ],
    detalles: `Al desarrollar scripts empiezo por definir el flujo de eventos, luego extraigo funciones puras y finalmente incorporo control de errores. En TypeScript suelo tipar entradas y salidas de funciones para mayor seguridad.`,
    reflexion: 'Combinar buenas prácticas en JS con TypeScript reduce errores y facilita la colaboración en proyectos grandes.',
    enlaces: []
  },
  {
    id: 'sem5',
    titulo: 'Semana 5',
    temas: ['Introducción al desarrollo con React'],
    descripcion: `Semana introductoria a React: JSX, creación de componentes, props y estado local. Se desarrollaron componentes funcionales con hooks básicos (useState, useEffect) y se revisó la gestión de eventos y comunicación entre componentes padre-hijo. También se tocó la estructura de un proyecto React y cómo organizar componentes para mantener la escalabilidad.`,
    definicion: `Veo a React como una forma de pensar en UI: dividir en componentes reutilizables y describir la interfaz como una función del estado.`,
    procedimientos: [
      'Crear componentes pequeños y composables.',
      'Usar hooks para manejar estado y efectos de forma declarativa.',
      'Organizar carpetas por dominio y documentar props importantes.'
    ],
    detalles: `En mis ejercicios con React me esfuerzo por mantener componentes enfocados en una sola responsabilidad y extraer lógica repetida en hooks personalizados.`,
    reflexion: 'React permite diseñar UIs reactivas; comprender su mentalidad es clave antes de abordar proyectos más complejos.',
    enlaces: []
  },
  {
    id: 'sem6',
    titulo: 'Semana 6',
    temas: ['Componentes', 'JSX', 'TypeScript y Estilos en React'],
    descripcion: `Profundizamos en la creación de componentes reutilizables, composición y patrones para compartir lógica (hooks personalizados). Vimos cómo tipar componentes con TypeScript y cómo aplicar estilos: CSS Modules, styled-components y utilidades como Tailwind en React. Se trabajó en accesibilidad de componentes interactivos y pruebas básicas de comportamiento.`,
    definicion: `Aprendí a priorizar la reutilización y la accesibilidad al diseñar componentes; cada componente debe ser claro en su API y fácil de testear.`,
    procedimientos: [
      'Diseñar la API del componente (props) antes de implementarlo.',
      'Escribir pruebas simples de comportamiento y verificar accesibilidad.',
      'Tipar componentes con TypeScript y documentar casos de uso.'
    ],
    detalles: `Al construir componentes reutilizables, siempre considero cómo serán usados y qué props son obligatorios; así reduzco errores y hago componentes más previsibles.`,
    reflexion: 'La combinación de React y TypeScript junto a una estrategia de estilos consistente produce componentes robustos y mantenibles.',
    enlaces: []
  }
  ,
  {
    id: 'sem7',
    titulo: 'Semana 7',
    temas: ['Desarrollo del parcial', 'Implementación', 'Pruebas y entrega'],
    descripcion: `Durante esta semana se desarrolló el parcial práctico: implementación de requisitos, integración de componentes y preparación para la entrega y evaluación. Se trabajó en completar funcionalidades, realizar pruebas básicas y preparar la documentación para la evaluación.`,
    definicion: `La semana del parcial es la consolidación de lo aprendido; es cuando integro conceptos en un entregable funcional.`,
    procedimientos: [
      'Revisar los requisitos del parcial y priorizar tareas.',
      'Implementar funcionalidades críticas primero y realizar pruebas unitarias básicos.',
      'Documentar instrucciones de uso y preparar la presentación/demostración.',
      'Subir el entregable al repositorio y verificar que la evaluación pueda reproducir el proyecto.'
    ],
    detalles: `El enfoque fue iterativo: primero una versión mínima funcional, luego mejoras y corrección de errores detectados en pruebas manuales. Se priorizó la claridad en la entrega para facilitar la evaluación.`,
    reflexion: 'Entregar un parcial es un ejercicio de priorización y comunicación: no siempre todo queda perfecto, pero sí debe ser reproducible y explicable.',
    enlaces: []
  },
  {
    id: 'sem8',
    titulo: 'Semana 8',
    temas: ['Evaluación del parcial', 'Retroalimentación', 'Mejoras'],
    descripcion: `Semana dedicada a la evaluación del parcial, recepción de retroalimentación y aplicación de correcciones. Se analizaron puntos débiles, se corrigieron errores y se registraron lecciones aprendidas para proyectos futuros.`,
    definicion: `La evaluación permite medir resultados y orientar mejoras; la retroalimentación es esencial para crecer como desarrollador.`,
    procedimientos: [
      'Recibir y organizar la retroalimentación de los evaluadores.',
      'Priorizar correcciones según impacto y esfuerzo.',
      'Aplicar mejoras y documentar los cambios realizados.'
    ],
    detalles: `La retroalimentación facilitó detectar problemas de usabilidad y falta de casos de prueba; se implementaron ajustes rápidos y se dejó constancia de los puntos pendientes para versión futura.`,
    reflexion: 'Aprender de la evaluación acelera la mejora continua; la crítica bien aplicada es una guía para perfeccionar el trabajo.' ,
    enlaces: []
  },
  {
    id: 'sem9',
    titulo: 'Semana 9',
    temas: ['Arquitectura Backend', 'Modelo Cliente–Servidor', 'Arquitectura en capas', 'Patrón MVC', 'Principios de diseño backend'],
    descripcion: `En esta semana se abordaron los fundamentos de la arquitectura backend, entendiendo cómo se estructuran los sistemas web desde el servidor y cómo se separan responsabilidades para lograr aplicaciones mantenibles y escalables. Se estudió el modelo cliente-servidor, la arquitectura en capas y el patrón MVC como base para organizar la lógica de negocio, la presentación y el acceso a datos. Además, se introdujeron principios como desacoplamiento, reutilización y control del flujo de ejecución.`,
    definicion: `Para mí, la arquitectura backend es el esqueleto del sistema; define cómo se comunican los componentes y determina si una aplicación podrá crecer sin volverse frágil o caótica.`,
    procedimientos: [
      'Analizar el flujo de una petición desde el cliente hasta la base de datos.',
      'Separar responsabilidades en capas: controlador, servicio y modelo.',
      'Aplicar el patrón MVC para organizar proyectos backend.',
      'Identificar dependencias y reducir el acoplamiento entre componentes.'
    ],
    detalles: `En mis prácticas aprendí a pensar primero en la estructura antes de escribir código, entendiendo que una mala arquitectura se paga caro cuando el sistema empieza a crecer o cambiar.`,
    reflexion: 'Un backend bien diseñado no se nota cuando funciona, pero se sufre cuando está mal hecho; por eso la arquitectura es una decisión estratégica.',
    enlaces: []
  },
  {
    id: 'sem10',
    titulo: 'Semana 10',
    temas: ['Spring Framework', 'Inversión de Control (IoC)', 'Inyección de Dependencias (DI)', 'Beans y Spring Container'],
    descripcion: `Se estudió Spring Framework como un entorno robusto para el desarrollo backend en Java, enfocado en la inversión de control y la inyección de dependencias. Se comprendió cómo el Spring Container administra el ciclo de vida de los objetos, permitiendo aplicaciones más flexibles, modulares y fáciles de mantener.`,
    definicion: `Spring representa para mí una forma profesional de desarrollar backend en Java, donde el framework gestiona la complejidad y el desarrollador se enfoca en la lógica del negocio.`,
    procedimientos: [
      'Definir beans mediante configuración XML.',
      'Delegar la creación y gestión de objetos al contenedor Spring.',
      'Aplicar inyección de dependencias mediante setters o constructores.',
      'Comprender el principio de “Hollywood": no llames al framework, el framework te llama a ti.'
    ],
    detalles: `Al inicio parece más complejo que la programación tradicional, pero una vez entendido, Spring reduce errores y mejora enormemente la organización del proyecto.`,
    reflexion: 'Spring enseña disciplina arquitectónica; obliga a pensar en diseño antes que en soluciones rápidas.',
    enlaces: []
  },
  {
    id: 'sem11',
    titulo: 'Semana 11',
    temas: ['Spring Boot', 'Configuración automática', 'Servidor embebido', 'Arquitectura de aplicaciones Spring'],
    descripcion: `Spring Boot fue presentado como una evolución de Spring que elimina configuraciones innecesarias, integra dependencias automáticamente y permite ejecutar aplicaciones backend de forma rápida. Se utilizó para crear APIs REST sin necesidad de configurar manualmente servidores externos.`,
    definicion: `Spring Boot es productividad pura; permite pasar de la idea a una API funcional en minutos sin perder robustez.`,
    procedimientos: [
      'Crear proyectos desde Spring Initializr.',
      'Configurar dependencias con Maven.',
      'Ejecutar aplicaciones con servidor embebido.',
      'Definir controladores REST y endpoints.'
    ],
    detalles: `Spring Boot simplifica tanto el desarrollo que permite concentrarse en la lógica y no en la infraestructura, lo cual es clave en proyectos reales.`,
    reflexion: 'Entender Spring Boot es dar un paso hacia el desarrollo backend profesional y escalable.',
    enlaces: []
  },
  {
    id: 'sem12',
    titulo: 'Semana 12',
    temas: ['Framework Laravel', 'Patrón MVC', 'Rutas, controladores y modelos', 'ORM Eloquent'],
    descripcion: `En esta semana se trabajó con Laravel como framework backend en PHP, comprendiendo su estructura MVC y el uso de rutas, controladores y modelos. Se exploró el ORM Eloquent para interactuar con bases de datos de forma segura y eficiente.`,
    definicion: `Laravel es para mí un framework que equilibra elegancia y productividad, permitiendo desarrollar backend limpio y ordenado en PHP.`,
    procedimientos: [
      'Definir rutas web y API.',
      'Crear controladores para manejar la lógica.',
      'Modelar entidades con Eloquent.',
      'Conectar la aplicación a una base de datos MySQL.'
    ],
    detalles: `Laravel destaca por su estructura clara y su ecosistema, lo que facilita el desarrollo rápido sin sacrificar buenas prácticas.`,
    reflexion: 'Un buen framework no reemplaza al desarrollador, pero sí potencia su capacidad de construir soluciones sólidas.',
    enlaces: []
  },
  {
    id: 'sem13',
    titulo: 'Semana 13',
    temas: ['Python Backend', 'Framework Flask', 'APIs REST', 'Lógica de negocio y rutas'],
    descripcion: `Se introdujo Flask como un microframework para el desarrollo backend en Python, enfocado en la simplicidad y el control total por parte del desarrollador. Se trabajó en la creación de rutas, controladores y lógica de negocio para construir APIs ligeras.`,
    definicion: `Flask es minimalismo aplicado al backend; solo incluye lo esencial y deja el resto en manos del desarrollador.`,
    procedimientos: [
      'Crear aplicaciones Flask desde cero.',
      'Definir rutas y métodos HTTP.',
      'Procesar datos de entrada y generar respuestas JSON.',
      'Separar lógica de negocio y presentación.'
    ],
    detalles: `Flask obliga a entender realmente cómo funciona un backend, ya que no oculta la estructura detrás del framework.`,
    reflexion: 'Trabajar con Flask fortalece la comprensión de los fundamentos del desarrollo backend.',
    enlaces: []
  },
  {
    id: 'sem14',
    titulo: 'Semana 14',
    temas: ['Sistemas Inteligentes', 'Arquitectura de sistemas cognitivos', 'Redes neuronales', 'Deep Learning', 'Algoritmos de toma de decisiones'],
    descripcion: `En esta semana se abordaron los sistemas inteligentes como una extensión del desarrollo web tradicional, integrando percepción, razonamiento, aprendizaje y acción. Se estudiaron arquitecturas de sistemas inteligentes, redes neuronales, deep learning y modelos generativos y discriminativos aplicados a problemas reales.`,
    definicion: `Un sistema inteligente es software que no solo responde, sino que aprende, decide y se adapta.`,
    procedimientos: [
      'Analizar componentes de un sistema inteligente.',
      'Identificar módulos de percepción, razonamiento y aprendizaje.',
      'Comprender modelos de redes neuronales y deep learning.',
      'Aplicar lógica IF–THEN en sistemas expertos simples.'
    ],
    detalles: `Se trabajaron ejemplos reales como diagnóstico médico, vehículos autónomos y sistemas predictivos, conectando la teoría con aplicaciones concretas.`,
    reflexion: 'Los sistemas inteligentes representan el siguiente nivel del desarrollo web: software que evoluciona junto con el usuario.',
    enlaces: []
  },
  {
    id: 'sem15',
    titulo: 'Semana 15',
    temas: ['Integración Backend y Frontend', 'API REST con Flask', 'Autenticación con JWT', 'Base de datos MySQL', 'Integración de modelos de IA'],
    descripcion: `Durante esta semana se desarrolló el proyecto parcial integrador del curso, cuyo objetivo fue construir una aplicación web inteligente completa utilizando Flask como backend, MySQL como sistema gestor de base de datos y React como frontend. El enfoque estuvo en aplicar de manera práctica todos los conceptos aprendidos a lo largo del semestre: arquitectura backend, autenticación segura, consumo de APIs y uso de modelos de inteligencia artificial para el procesamiento de texto.`,
    definicion: `Este parcial representó para mí la transición de aprender tecnologías por separado a integrarlas en un sistema funcional y coherente, cercano a un entorno real de producción.`,
    procedimientos: [
      'Diseñar la arquitectura general de la aplicación (frontend, backend y base de datos).',
      'Crear una API en Flask con rutas REST para registro, login, perfil y análisis de texto.',
      'Implementar autenticación y autorización usando JWT.',
      'Conectar el backend con MySQL para la persistencia de usuarios y resultados.',
      'Integrar un modelo de IA para análisis de sentimientos o resumen de texto.',
      'Construir un dashboard inicial para mostrar resultados del modelo inteligente.'
    ],
    detalles: `El desarrollo se realizó en equipo, lo que implicó coordinar responsabilidades, dividir módulos y mantener coherencia en el código. Se priorizó la correcta comunicación entre frontend y backend antes que el aspecto visual final.`,
    reflexion: 'Desarrollar este parcial permitió comprender que una aplicación inteligente no depende solo del modelo de IA, sino de una arquitectura sólida que lo soporte e integre correctamente.',
    enlaces: []
  },
  {
    id: 'sem16',
    titulo: 'Semana 16',
    temas: ['Presentación del proyecto', 'Validación funcional', 'Experiencia de usuario (UX)', 'Seguridad y persistencia de sesión', 'Evaluación integral del sistema'],
    descripcion: `En esta semana se realizó la evaluación final del curso mediante la presentación del proyecto desarrollado. Se evaluó el correcto funcionamiento de la aplicación web inteligente, verificando la autenticación de usuarios, el manejo de tokens, la interacción con la API y la visualización de los resultados generados por el modelo de inteligencia artificial.`,
    definicion: `La evaluación final fue la demostración tangible de todo lo aprendido: un sistema funcional que combina desarrollo web moderno e inteligencia artificial.`,
    procedimientos: [
      'Probar el registro e inicio de sesión de usuarios desde el frontend.',
      'Validar el uso correcto de JWT en rutas protegidas.',
      'Ejecutar el análisis de texto y visualizar resultados generados por la IA.',
      'Verificar la persistencia de sesión mediante almacenamiento local.',
      'Presentar el sistema explicando la arquitectura y decisiones técnicas.'
    ],
    detalles: `Más allá de que la aplicación funcionara, se valoró la claridad del código, la organización del proyecto y la capacidad de explicar cómo interactúan sus componentes.`,
    reflexion: 'Este parcial consolidó mi comprensión del desarrollo web full stack con IA, demostrando que es posible construir soluciones inteligentes cuando se integran correctamente backend, frontend y modelos de aprendizaje automático.',
    enlaces: []
  }
];


document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.querySelector('.semanas');
  const menu = document.getElementById('cuaderno-menu');
  if (!contenedor || !menu) return console.warn('Elementos de cuaderno no encontrados');

  // attach generic image fallback handlers for elements that used inline onerror
  function attachImageFallbacks() {
    const headerFallback = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='480' height='180'><rect width='100%25' height='100%25' fill='%23004aad'/><text x='50%25' y='50%25' font-size='60' fill='white' text-anchor='middle' dominant-baseline='central' font-family='Inter, Arial, sans-serif'>UNCP</text></svg>";
    const heroFallback = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='960' height='540'><rect width='100%25' height='100%25' fill='%23004aad'/><text x='50%25' y='50%25' font-size='72' fill='white' text-anchor='middle' dominant-baseline='central' font-family='Inter, Arial, sans-serif'>MA</text></svg>";
    const avatarFallback = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><rect width='100%25' height='100%25' fill='%23004aad'/><text x='50%25' y='50%25' font-size='60' fill='white' text-anchor='middle' dominant-baseline='central' font-family='Inter, Arial, sans-serif'>MA</text></svg>";

    document.querySelectorAll('.header-logo').forEach(img => {
      img.addEventListener('error', () => { img.onerror = null; img.src = headerFallback; });
    });
    document.querySelectorAll('.hero-img').forEach(img => {
      img.addEventListener('error', () => { img.onerror = null; img.src = heroFallback; });
    });
    document.querySelectorAll('.mi-foto').forEach(img => {
      img.addEventListener('error', () => { img.onerror = null; img.src = avatarFallback; });
    });
  }

  attachImageFallbacks();

  // crear botones (sin select)
  semanas.forEach((s, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = idx === 0 ? 'active' : '';
    btn.textContent = s.titulo;
    btn.dataset.id = s.id;
    btn.addEventListener('click', () => showSemana(s.id));
    menu.appendChild(btn);
  });

  // mostrar primera semana por defecto
  showSemana(semanas[0].id);

  function showSemana(id) {
  // actualizar botones
  menu.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.id === id));

    contenedor.innerHTML = '';
    const s = semanas.find(x => x.id === id);
    if (!s) return;

    const div = document.createElement('div');
    div.className = 'semana';

    const temasHtml = s.temas.map(t => `<li>${escapeHtml(t)}</li>`).join('');

    let html = `
      <h3>${escapeHtml(s.titulo)}</h3>
      <p><strong>Temas:</strong></p>
      <ul>${temasHtml}</ul>
      <p><strong>Descripción:</strong> ${escapeHtml(s.descripcion)}</p>
      <p><strong>Definición:</strong> ${escapeHtml(s.definicion || '')}</p>
    `;

    if (Array.isArray(s.procedimientos) && s.procedimientos.length) {
      const procHtml = s.procedimientos.map(p => `<li>${escapeHtml(p)}</li>`).join('');
      html += `<p><strong>Procedimientos:</strong></p><ol>${procHtml}</ol>`;
    }

    if (s.detalles) html += `<p><strong>Detalles:</strong> ${escapeHtml(s.detalles)}</p>`;

    if (s.enlaces?.length) {
      const enlacesHtml = s.enlaces.map(e => `<li><a href="${escapeHtml(e.href)}" target="_blank" rel="noopener">${escapeHtml(e.label)}</a></li>`).join('');
      html += `<p><strong>Enlaces:</strong></p><ul class="enlaces-list">${enlacesHtml}</ul>`;
    }

    if (s.reflexion) html += `<p><strong>Reflexión:</strong> ${escapeHtml(s.reflexion)}</p>`;

    // añadir botón para agregar enlaces
    html += `<p><button type="button" class="add-link" data-id="${escapeHtml(s.id)}">Añadir enlace</button></p>`;

    div.innerHTML = html;
    contenedor.appendChild(div);

  // mostrar inmediatamente (sin transición)
  // (anteriormente se aplicaba una animación; ahora se omite para mostrar el contenido sin retrasos)
  div.classList.add('show');

    // attach add-link handler
    const addBtn = div.querySelector('.add-link');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        const id = addBtn.dataset.id;
        const url = prompt('Introduce la URL (incluya https://):');
        if (!url) return;
        const href = url.startsWith('http://') || url.startsWith('https://') ? url : 'https://' + url;
        const label = prompt('Etiqueta para el enlace (opcional):', href) || href;
        const semana = semanas.find(x => x.id === id);
        if (!semana) return;
        if (!Array.isArray(semana.enlaces)) semana.enlaces = [];
        semana.enlaces.push({ href, label });
        // re-render same week to show new enlace
        showSemana(id);
      });
    }
  }
});

function escapeHtml(text) {
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}