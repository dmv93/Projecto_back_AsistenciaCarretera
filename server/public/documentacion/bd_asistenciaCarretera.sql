#DROP DATABASE proyectoasistencia;

CREATE DATABASE proyectoasistencia;
USE proyectoasistencia;

SELECT * FROM usuarios;
SELECT * FROM coches;
SELECT * FROM solicitudes;
DELETE FROM usuarios WHERE user_id = 16;
DELETE FROM coches WHERE id_coches = 2;
SELECT * FROM usuarios WHERE user_id = (SELECT fk_user_id FROM coches WHERE id_coches = 2);
INSERT INTO usuarios VALUES (NULL, "David", "Molina", "57463746A", "675485745", "david@gmail.com","$2a$10$nEfEu/.PE9T20dUTxfWiuuLBb1bl1e3O6MiqmcB/3JO5ANHCwGAby", "admin", NULL, NULL);
UPDATE solicitudes SET comprobacion = "pendiente" WHERE id_solicitud = 1;

CREATE TABLE usuarios(
	user_id INT AUTO_INCREMENT,
	nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR (200),
    dni CHAR (9) UNIQUE NOT NULL,
    #datospago  VARCHAR (10) NOT NULL, #HAY QUE REVISARLO
    telefono VARCHAR(15),
	email VARCHAR (50) NOT NULL,
    contrasena VARCHAR (100) NOT NULL,
    rol VARCHAR(10),
    createdAt VARCHAR(20),
    updatedAt VARCHAR(20),
	PRIMARY KEY(user_id)
);
INSERT INTO usuarios VALUES (NULL, "Isaac", "Ortega", "57463722A", "675485745", "isaac@gmail.com", NULL, NULL);

CREATE TABLE coches(
id_coches INT AUTO_INCREMENT,
matricula VARCHAR (8) NOT NULL,
marca VARCHAR (20) NOT NULL,
modelo VARCHAR (20) NOT NULL,
fecha VARCHAR (20) NOT NULL,
fk_user_id INT,
createdAt VARCHAR(20),
updatedAt VARCHAR(20),
PRIMARY KEY(id_coches),
FOREIGN KEY (fk_user_id) references usuarios(user_id) ON UPDATE CASCADE ON DELETE CASCADE
);

#DROP TABLE solicitudes
SELECT * FROM solicitudes;
CREATE TABLE solicitudes (
id_solicitud INT AUTO_INCREMENT,
nombre VARCHAR(100) NOT NULL,
apellidos VARCHAR (200) NOT NULL,
email VARCHAR (50) NOT NULL,
nif CHAR (9) UNIQUE NOT NULL,
telefono VARCHAR(15),
marca VARCHAR (20) NOT NULL,
modelo VARCHAR (20) NOT NULL,
direccion VARCHAR (200),
reparacion VARCHAR (30),
comprobacion VARCHAR (10) NOT NULL, #REVISAR
createdAt VARCHAR(20),
updatedAt VARCHAR(20),
#numeroseguimiento VARCHAR (10) UNIQUE, #VER EJERCICIO FIREBASE PARA BASARNOS EN CÓMO HACERLO
#fk_id_usuario INT,
PRIMARY KEY (id_solicitud)
#FOREIGN KEY (fk_id_usuario) references USUARIOS(id_usuarios) ON UPDATE CASCADE ON DELETE CASCADE
);




