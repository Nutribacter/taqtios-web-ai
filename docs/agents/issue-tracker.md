# Issue tracker: Local Markdown

Issues y specs de este repo viven como archivos markdown en `.scratch/`. Repo solo local, sin remoto de GitHub (mismo criterio que JUVIT).

## Convenciones

- Una carpeta por feature: `.scratch/<feature-slug>/`
- El spec es `.scratch/<feature-slug>/spec.md`
- Los tickets de implementación son un archivo por ticket en `.scratch/<feature-slug>/issues/<NN>-<slug>.md`, numerados desde `01`, nunca un solo archivo con todos los tickets juntos
- El estado se anota con una línea `Status:` cerca del inicio de cada archivo
- Comentarios e historial de conversación se agregan al final del archivo bajo un encabezado `## Comments`

## Cuando una skill dice "publicá en el issue tracker"

Crear un archivo nuevo bajo `.scratch/<feature-slug>/` (creando la carpeta si hace falta).

## Cuando una skill dice "traé el ticket correspondiente"

Leer el archivo en la ruta referenciada. El dueño normalmente pasa la ruta o el número de ticket directamente.
