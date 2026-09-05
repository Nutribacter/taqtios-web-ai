# Domain Docs

Cómo deberían las skills de ingeniería consumir la documentación de dominio de este repo al explorar el código.

## Antes de explorar, leer esto

- **`CONTEXT.md`** en la raíz del repo, si existe.
- **`docs/adr/`**: leer los ADR que toquen el área en la que se va a trabajar.

Si estos archivos no existen todavía, **seguir en silencio**. No marcar su ausencia ni sugerir crearlos de antemano — se crean cuando un término o una decisión realmente lo necesite.

## Estructura (repo single-context — es este caso)

```
/
├── CONTEXT.md
├── docs/adr/
└── src/
```

## Usar el vocabulario del glosario

Cuando el output nombre un concepto de dominio (título de un issue, propuesta de refactor, nombre de test), usar el término tal como está definido en `CONTEXT.md`. No derivar hacia sinónimos que el glosario evita explícitamente.

## Marcar conflictos con ADR

Si el output contradice un ADR existente, decirlo explícitamente en vez de pisarlo en silencio.
