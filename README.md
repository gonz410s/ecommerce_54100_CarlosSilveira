

# Gonzo Store

Bienvenido a Gonzo Store, un proyecto desarrollado como parte del curso de React en Coderhouse. Este proyecto fue creado por Gonzalo Silveira.

## Descripción del Proyecto

Gonzo Store es una tienda en línea que permite a los usuarios navegar por diferentes categorías de productos, ver detalles de cada producto, agregar productos al carrito y confirmar compras. El proyecto está construido con React y utiliza Firebase para la gestión de datos.

## Funcionalidades

- **Listado de Productos por Categoría**: Navega por categorías como herramientas manuales, herramientas eléctricas y más.
- **Detalle de Producto**: Ve detalles específicos de cada producto.
- **Carrito de Compras**: Añade productos al carrito, ajusta las cantidades y elimina productos.
- **Confirmación de Compra**: Completa la compra con un formulario de datos personales.


## Paquetes a instalar

npm install vite
npm install react-router-dom
npm install react
npm install firebase
npm install bootstrap


## Estructura del Proyecto

gonzo-store/
├── node_modules/
├── src/                  # Código fuente del proyecto
│   ├── components/       # Componentes React
│   │   ├── Card/         # Componente relacionados con tarjetas de producto
│   │   ├── CartContext/  # Componente de Contexto del carrito
│   │   ├── CartPage/     # Página del carrito de compras y de los items del mismo   
│   │   ├── CartWidget/   # Componente del widget del carrito en la barra de navegación
│   │   ├── Footer/       # Footer que contiene datos de redes, ubicación y contacto
│   │   ├── Header/       # Header, contiene la imagen de la tienda
│   │   ├── ItemCount/    # Contiene el componente ItemCount.jsx que se utiliza en varios componentes
│   │   ├── ItemDetailContainer/  # Componente para mostrar los detalles de un producto
│   │   ├── ItemListContainer/    # Componente para listar productos por categoría
│   │   └── Navbar/       # Componente de la barra de navegación 
│   ├── main.js           # Configuración principal de Firebase
│   └── App.js            # Componente principal de la aplicación
│
├── .gitignore            # Archivo de gitignore
├── index.html            # Página de index
├── package-lock.json
├── package.json          # Archivo de configuración de npm
└── README.md             # Documentación del proyecto


