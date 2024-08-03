CREATE TABLE Candidato (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  apellido VARCHAR(255) NOT NULL,
  correo_electronico VARCHAR(255) NOT NULL,
  telefono VARCHAR(20)
);