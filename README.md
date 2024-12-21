El siguiente sitio web fue construido con Vite y React, centrada en la visualización de personajes de Dragon Ball. 

Navegación:
La aplicación tiene un menú con dos secciones principales:
Home: Es la página inicial, donde se muestra una lista de personajes.
Favoritas: Es una sección para ver los personajes marcados como favoritos.

Contexto Global:
use React Context API para manejar el estado global, como los personajes seleccionados como favoritos, compartido entre las diferentes secciones.

Sistema de Favoritos:
el sistema permite 
agregar personajes a favoritos: existe una funcionalidad para guardar los personajes seleccionados en una lista manejada por el Context API.
Desmarcar favoritos: Se puede eliminar un personaje de favoritos, actualizando la lista.
Componentes principales

HomeComponent:
Muestra la lista de personajes.
Incluye botones o elementos interactivos para agregar a favoritos.

FavoritasComponent:
Muestra la lista de personajes que han sido marcados como favoritos.

Header o NavBar:
Contiene los enlaces a Home y Favoritas.

Context Provider:
Proporciona acceso al estado global relacionado con los favoritos.
Uso de API
La aplicación consume una API REST 


Link de la pagina: 

https://context-api-tan.vercel.app/
