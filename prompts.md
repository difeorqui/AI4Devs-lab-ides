# Prompts DFO - LLM ChatGPT

## Historia de usuario: Añadir Candidato al Sistema

"""  
### Añadir Candidato al Sistema

**Como** reclutador,  
**Quiero** tener la capacidad de añadir candidatos al sistema ATS,  
**Para que** pueda gestionar sus datos y procesos de selección de manera eficiente.

**Criterios de Aceptación:**

1. Accesibilidad de la función: Debe haber un botón o enlace claramente visible para añadir un nuevo candidato desde la página principal del dashboard del reclutador.
2. Formulario de ingreso de datos: Al seleccionar la opción de añadir candidato, se debe presentar un formulario que incluya los campos necesarios para capturar la información del candidato como nombre, apellido, correo electrónico, teléfono, dirección, educación y experiencia laboral.
3. Validación de datos: El formulario debe validar los datos ingresados para asegurar que son completos y correctos. Por ejemplo, el correo electrónico debe tener un formato válido y los campos obligatorios no deben estar vacíos.
4. Carga de documentos: El reclutador debe tener la opción de cargar el CV del candidato en formato PDF o DOCX.
5. Confirmación de añadido: Una vez completado el formulario y enviada la información, debe aparecer un mensaje de confirmación indicando que el candidato ha sido añadido exitosamente al sistema.
6. Errores y manejo de excepciones: En caso de error (por ejemplo, fallo en la conexión con el servidor), el sistema debe mostrar un mensaje adecuado al usuario para informarle del problema.
7. Accesibilidad y compatibilidad: La funcionalidad debe ser accesible y compatible con diferentes dispositivos y navegadores web.

**Notas:**

- La interfaz debe ser intuitiva y fácil de usar para minimizar el tiempo de entrenamiento necesario para los nuevos reclutadores.
- Considerar la posibilidad de integrar funcionalidades de autocompletado para los campos de educación y experiencia laboral, basados en datos preexistentes en el sistema.

**Tareas Técnicas:**

- Implementar la interfaz de usuario para el formulario de añadir candidato.
- Desarrollar el backend necesario para procesar la información ingresada en el formulario.
- Asegurar la seguridad y privacidad de los datos del candidato.
"""  
Explica la historia de usuario "Añadir Candidato al Sistema" y los criterios de aceptación asociados.

Para la terea técnica "Desarrollar el backend necesario para procesar la información ingresada en el formulario" ¿cuáles son los pasos que se deben ejecutar?, teniendo en cuenta el contenido del "backend"

Ten en cuenta que en la carpeta "backend" utiliza el ORM Prisma (https://www.prisma.io/docs/orm) e inicia con las actividades 1, 2 y 3

Genera los scripts necesarios para llevar a cabo la historia de usaurio, con el fin de lanzar la migración en PostgreSQL.

```
Para ejecutar la migración

npx prisma migrate dev --name 001_create_candidato_table
npx prisma migrate deploy
```

implementa las rutas necesarias para realizar el CRUD en el backend del candidato, utilizando el ORM prisma y teniendo en cuenta que la tabla quedó de la siguiente manera en postgress:
"""
CREATE TABLE Candidato (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  apellido VARCHAR(255) NOT NULL,
  correo_electronico VARCHAR(255) NOT NULL,
  telefono VARCHAR(20)
);
"""

Crea un script de poblado de datos con 10 registros para la tabla candidato, los datos deben ser de Colombia.

```
Para ejecutar la carga de la semilla

node prisma/seed.js
```

Genera el código necesario en la carpeta "backend" para realizar pruebas unitarias de las rutas para interactuar con el candidato, las rutas se encuentran en "backend\index.js", también ten en cuenta que para realizar las pruebas debes usar jest "backend\jest.config.js"

