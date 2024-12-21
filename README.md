El sitio web fue construido con Vite y React, centrado en la visualización de personajes de Dragon Ball.

Navegación:
La aplicación tiene un menú con dos secciones principales:

Home: Página inicial que muestra una lista de personajes.

Favoritas: Sección para ver los personajes marcados como favoritos.

Contexto Global:
Utiliza React Context API para manejar el estado global, como los personajes seleccionados como favoritos, compartido entre las diferentes secciones.

Sistema de Favoritos:

Agregar favoritos: Funcionalidad para guardar personajes seleccionados en una lista manejada por Context API.

Desmarcar favoritos: Permite eliminar personajes de favoritos, actualizando la lista.

Componentes principales:

HomeComponent: Muestra la lista de personajes e incluye opciones para agregar a favoritos.

FavoritasComponent: Presenta los personajes marcados como favoritos.

Header o NavBar: Contiene enlaces a Home y Favoritas.

Context Provider: Proporciona acceso al estado global relacionado con favoritos.

Uso de API:
Consume una API REST para obtener los datos de los personajes.

Link del sitio:
https://context-api-tan.vercel.app/
