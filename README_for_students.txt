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

---------------------------------------------------------------------------

# Optimización de Web - Grupo Ecodiseño

## Simulación de Hosting Verde
Nuestra web optimizada está alojada simuladamente en **GreenServe Cloud**, un proveedor que utiliza servidores alimentados al 100% por energía hidroeléctrica certificada.
* **Datacenter:** Localizado en Noruega para aprovechar la refrigeración natural (Free Cooling), eliminando el aire acondicionado.
* **PUE (Eficiencia):** 1.1 (Líder en la industria).

## Mejoras Aplicadas

### 1. Imágenes
* Conversión de formato JPG a **WebP** (reducción de peso del 85%).
* Implementación de `loading="lazy"` en imágenes secundarias.
* Dimensiones explícitas para evitar CLS (saltos de contenido).

### 2. Código y Rendimiento
* **JS:** Se eliminó el bucle que causaba 5000 reflows. Se implementó `DocumentFragment` para renderizar la lista en una sola operación de pintado.
* **Bloqueo:** Scripts movidos al final con atributo `defer` para no bloquear el primer renderizado (FCP).
* **CSS:** Unificación de estilos inline y externos. Adición de soporte para **Dark Mode** (ahorro energético en pantallas OLED).

### Resultados
* **Peso Inicial:** ~4.5 MB | **Peso Final:** ~400 KB
* **Huella de Carbono:** Reducida de 1.8g a 0.15g por visita (Estimación Website Carbon).