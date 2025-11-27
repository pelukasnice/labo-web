# Laboratorio de Citología Ginecológica - Landing Page

Landing page moderna y profesional para un laboratorio de citología ginecológica, desarrollada con Next.js 14, TypeScript y TailwindCSS.

## 🚀 Características

- **Framework**: Next.js 14 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: TailwindCSS
- **Animaciones**: Framer Motion
- **Diseño**: Moderno, minimalista, médico y 100% responsive
- **Colores**: Paleta suave estilo salud (celeste, blanco, lilas suaves)

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar en producción
npm start
```

## 🎨 Estructura del Proyecto

```
prueba-landing/
├── app/
│   ├── layout.tsx          # Layout principal con meta tags SEO
│   ├── page.tsx            # Página principal
│   ├── globals.css         # Estilos globales
│   ├── turnos/
│   │   └── page.tsx        # Página de turnos
│   └── resultados/
│       └── page.tsx        # Página de consulta de estudios
├── components/
│   ├── Header.tsx          # Header con navegación
│   ├── Hero.tsx            # Sección hero principal
│   ├── Services.tsx        # Sección de servicios
│   ├── Doctor.tsx          # Sección sobre la Dra. Martínez
│   ├── Steps.tsx           # Proceso de atención
│   ├── Testimonials.tsx    # Testimonios de pacientes
│   ├── FinalCTA.tsx        # CTA final
│   └── Footer.tsx          # Footer con contacto
├── tailwind.config.ts      # Configuración de Tailwind
└── package.json
```

## 🎯 Secciones

1. **Header + Navbar**: Navegación con logo, enlaces y botón destacado
2. **Hero**: Imagen, título, subtítulo y CTAs
3. **Servicios**: Listado de estudios principales
4. **La Dra. Martínez**: Información sobre la especialista
5. **Proceso de Atención**: Timeline del proceso
6. **Testimonios**: Testimonios de pacientes
7. **CTA Final**: Llamado a la acción principal
8. **Footer**: Contacto, mapa y enlaces legales

## 🎨 Personalización

### Colores

Los colores están definidos en `tailwind.config.ts`:

- `primary`: Celeste (#87CEEB)
- `primary-light`: Lila suave (#E6E6FA)
- `medical-soft`: Fondo suave (#F8F9FA)

### Fuentes

Las fuentes Inter y Nunito están importadas en `globals.css` desde Google Fonts.

## 📱 Responsive

El diseño es completamente responsive y se adapta a:
- Móviles (< 768px)
- Tablets (768px - 1024px)
- Desktop (> 1024px)

## 🔗 Enlaces

- **Sacar turno**: `/turnos`
- **Consultar estudios**: `/resultados`

## 📝 Notas

- Los placeholders de imágenes pueden ser reemplazados con imágenes reales
- Los datos de contacto en el footer pueden ser actualizados
- El mapa embebido usa una ubicación de ejemplo (Buenos Aires, CABA)

## 🛠️ Tecnologías

- Next.js 14
- React 18
- TypeScript
- TailwindCSS 3
- Framer Motion 11

