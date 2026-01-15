Taller: Página pesada para optimización

Contenido:
- index.html (mal estructurado, imágenes enormes, scripts bloqueantes)
- styles.css (no minificado)
- script.js (sin minificar, con cálculos pesados)

Objetivo: optimizar imágenes, aplicar lazy-loading, mover/minificar scripts, limpiar CSS, reducir peticiones y simular hosting verde.

Instrucciones para el alumno:
1. Analizar la página original (peso, peticiones, Lighthouse, WebsiteCarbon).
2. Optimizar imágenes (resize, convert to WebP), aplicar loading=lazy.
3. Minificar y defer scripts; evitar loops que causen reflows; usar DocumentFragment si es necesario.
4. Limpiar CSS y mover estilos críticos al head mínimo.
5. Documentar los cambios en README_final.md y medir mejoras antes/después.

----------------------------------------------------------------------------------

Taller de Ecodiseño Digital – Optimización Web Sostenible

1. Descripción del proyecto
    En este taller hemos trabajado en equipo para optimizar una página web inicialmente pesada y poco eficiente, aplicando principios de ecodiseño digital. El objetivo ha sido reducir el consumo de recursos, mejorar el rendimiento y disminuir el impacto ambiental asociado a la carga de la página.

    La web final ha sido desplegada en Netlify, simulando un entorno de hosting eficiente y alineado con buenas prácticas de sostenibilidad digital.


2. Análisis inicial
    En la versión original detectamos varios problemas de alto impacto digital:
        - Imágenes grandes sin optimizar (`.jpg`) y sin lazy loading.
        - Peso elevado innecesario en recursos gráficos.
        - Carga de todos los elementos al inicio, aunque no fueran críticos.
        - Falta de optimización orientada al rendimiento y la eficiencia energética.

    Estas características provocaban mayor tiempo de carga, más consumo de datos y una huella de carbono digital más alta por visita.


3. Acciones de optimización realizadas
    Durante el proceso de ecodiseño se aplicaron las siguientes mejoras:

        3.1. Optimización de imágenes:
            - HTML: Estructura simplificada y semántica, eliminando todos los estilos en línea.
            - CSS: Limpieza de reglas no usadas, implementación de Modo Oscuro para ahorro energético y diseño ligero sin dependencias externas.
            - JavaScript: Eliminación de operaciones matemáticas pesadas y bucles bloqueantes para liberar la CPU.

        3.2. Optimización del código:
            - Revisión y simplificación del HTML.
            - CSS limpio y sin reglas innecesarias.
            - JavaScript ligero y sin operaciones costosas.

        3.3. Gestión de recursos:
            - Reducción del número de peticiones.
            - Carga diferida de scripts para evitar bloqueos del renderizado.

4. Resultados obtenidos
    Tras la optimización se consiguió:
        - Reducción significativa del peso total de la página.
        - Mejora notable en la puntuación de rendimiento (Lighthouse).
        - Menor consumo de datos por visita.
        - Disminución estimada de la huella de carbono según Website Carbon Calculator.

    Estos cambios mejoran tanto la experiencia de usuario como la sostenibilidad del sitio.

5. Hosting verde (simulado)
    El proyecto se ha desplegado en Netlify, plataforma que apuesta por infraestructuras eficientes y optimizadas. A efectos del taller, se simula que el sitio se aloja en un proveedor que utiliza energía 100% renovable y centros de datos con políticas de reducción de emisiones de carbono.


6. Conclusión
    Este ejercicio demuestra que pequeñas decisiones técnicas en diseño y desarrollo web pueden tener un impacto positivo real en el medio ambiente, sin comprometer la funcionalidad ni la estética del sitio.

