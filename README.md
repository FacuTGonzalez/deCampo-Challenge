# Pokédex Challenge

Una aplicación web para explorar el mundo Pokémon, construida con React, TypeScript y la PokéAPI.

## 🚀 Características

- **Listado de Pokémon** con paginación de 10 elementos por página
- **Detalles completos** de cada Pokémon (altura, peso, habilidades, estadísticas)
- **Navegación persistente** - URLs reflejan el estado actual
- **Recarga sin pérdida de estado** - mantiene la página y datos al refrescar
- **Interfaz responsiva** y fácil de usar

## 🛠️ Tecnologías

- **Frontend**: React 19 + TypeScript
- **Bundler**: Vite
- **HTTP Client**: Axios
- **Styling**: Styled Components
- **API**: [PokéAPI](https://pokeapi.co/)
- **Routing**: React Router DOM

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── elements/          # Componentes reutilizables
│   │   ├── Button/
│   │   │   ├── Button.tsx           # Componente principal
│   │   │   ├── Button.styles.tsx    # Estilos con styled-components
│   │   │   └── Button.types.tsx     # Tipados del componente
│   │   └── ...
│   └── modules/           # Componentes específicos de funcionalidad
│       ├── PokemonList/
│       │   ├── PokemonList.tsx      # Componente principal
│       │   ├── PokemonList.styles.tsx # Estilos con styled-components
│       │   └── PokemonList.types.tsx  # Tipados del componente
│       └── ...
├── models/                # Tipos y interfaces de TypeScript
├── pages/                 # Páginas y configuración de rutas
├── services/              # Hooks para llamadas a la API
└── store/                 # Gestión del estado (Pokémon seleccionado)
```

## 🎯 Funcionalidades

### Página Principal (`/`)
- Listado paginado de Pokémon (10 por página)
- Navegación entre páginas
- URL persistente que mantiene la página actual

### Página de Detalle (`/pokemon/:id`)
- Información completa del Pokémon seleccionado
- Datos mostrados: altura, peso, habilidades, estadísticas
- Carga automática usando el ID de la URL si el estado está vacío

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/FacuTGonzalez/deCampo-Challenge.git

# Navegar al directorio
cd pokedex-challenge

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles
```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Previsualizar build de producción
npm run lint         # Ejecutar linter
```

## 🏗️ Arquitectura

### Gestión del Estado
- **Store**: Maneja el Pokémon seleccionado globalmente

### Servicios
- **API Service**: Hook personalizado que maneja las llamadas a PokéAPI
- **Hooks de servicio**: Encapsulan la lógica de llamadas a la API y retornan datos limpios

### Tipado y Estilos
- **Models**: Definiciones de tipos TypeScript para respuestas de la API
- **Component Types**: Tipados específicos para cada componente (`.types.tsx`)
- **Styled Components**: Estilos encapsulados por componente (`.styles.tsx`)

## 🔧 Decisiones Técnicas

### Persistencia de Estado
- **URL como fuente de verdad**: La paginación y el ID del Pokémon se reflejan en la URL
- **Recuperación automática**: Si el estado está vacío, se utiliza el ID de la URL para obtener los datos

### Organización de Componentes
- **Estructura de 3 archivos**: Cada componente tiene su archivo principal, estilos y tipados
- **Elements**: Componentes pequeños y reutilizables
- **Modules**: Componentes complejos con funcionalidad específica

### Patrones de Arquitectura
- **Separación de responsabilidades**: Lógica, estilos y tipos en archivos separados
- **Hooks de servicio**: Encapsulan llamadas a la API y retornan datos procesados
- **Tipado estricto**: TypeScript en toda la aplicación para mayor robustez

## 📱 Navegación

La aplicación mantiene la navegación intuitiva con:
- URLs amigables que reflejan el estado actual
- Capacidad de compartir enlaces directos
- Funcionalidad completa al recargar la página

---

**Desarrollado con ❤️ como parte del challenge técnico**
