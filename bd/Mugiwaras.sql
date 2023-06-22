
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

create database mugiiwaras;

use mugiiwaras;

--
-- Table structure for table `categoria`
--


CREATE TABLE platos(
idPlato  INT NOT NULL AUTO_INCREMENT PRIMARY KEY PRIMARY KEY,
nombre VARCHAR(70) NOT NULL,
descripcion VARCHAR(70),
precio INT,
tipoPlato varchar(10),
imagen LONGBLOB
);

CREATE TABLE clientes(
idClientes INT NOT NULL AUTO_INCREMENT PRIMARY KEY PRIMARY KEY,
nombre VARCHAR(70),
direccion VARCHAR(70),
numero int,
correo VARCHAR(100),
tipoPago VARCHAR(30)
);


CREATE TABLE ordenes(
idOrden INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
idCliente INT NOT NULL,
fecha VARCHAR(15) NOT NULL,
idPlatos INT NOT NULL,
total INT
);

CREATE TABLE opiniones(
idOpinion INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
idPlato INT NOT NULL,
idCliente INT NOT NULL,
calificacion int,
comentario VARCHAR(160),
fecha VARCHAR(15)
);

CREATE TABLE metodopago(
idMetodo INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
descripcion VARCHAR(70)
);

CREATE TABLE pago (
idPago INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
idCliente INT NOT NULL,
idOrden INT NOT NULL,
metodo INT NOT NULL,
fecha INT NOT NULL
);

CREATE TABLE tipo_comprobante(
idTipoComp INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
descripcion varchar(70)
);

CREATE TABLE comprobante(
idComprobante INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
idPago INT NOT NULL,
idCliente INT NOT NULL,
fecha VARCHAR(100) NOT NULL,
tipo_comprobante INT NOT NULL,
monto varchar(15)
);

CREATE TABLE personal (
idPersonal INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(40),
dni int,
cargo VARCHAR(20),
imagen VARCHAR(100)
);



ALTER TABLE ordenes ADD FOREIGN KEY (idCliente) REFERENCES clientes (idClientes);
ALTER TABLE ordenes ADD FOREIGN KEY (idPlatos) REFERENCES platos (idPlato);
ALTER TABLE opiniones ADD FOREIGN KEY (idCliente) REFERENCES clientes (idClientes);
ALTER TABLE opiniones ADD FOREIGN KEY (idPlato) REFERENCES platos (idPlato);
ALTER TABLE pago ADD FOREIGN KEY (idCliente) REFERENCES clientes (idClientes);
ALTER TABLE pago ADD FOREIGN KEY (idOrden) REFERENCES ordenes (idOrden);
ALTER TABLE pago ADD FOREIGN KEY (metodo) REFERENCES metodopago (idMetodo);
ALTER TABLE comprobante ADD FOREIGN KEY (idPago) REFERENCES pago (idPago);
ALTER TABLE comprobante ADD FOREIGN KEY (idCliente) REFERENCES clientes (idClientes);
ALTER TABLE comprobante ADD FOREIGN KEY (tipo_comprobante) REFERENCES tipo_comprobante (idTipoComp);

INSERT INTO personal (idPersonal, nombre, dni, cargo) VALUES 
(1, 'Juan', 12345678, 'Chef'),
(2, 'Maria', 87654321, 'Asistente'),
(3, 'Pedro', 13579024, 'Cajero'),
(4, 'Lucia', 24680135, 'Mesera'),
(5, 'Carlos', 36985214, 'Marketing'),
(6, 'Oliver', 76868182, 'Tik toker');

INSERT INTO clientes (nombre, direccion, numero, correo, tipoPago) VALUES
('Juan Perez', 'Jirón Los Plateros 123, Rimac', 993456789, 'jperez@gmail.com', 'En efectivo'),
('Maria Rios', 'Av. El Sol 456, Cusco', 994567890, 'mrios@hotmail.com', 'Con tarjeta'),
('Pedro Alvarado', 'Calle Las Flores 789, Miraflores', 977654321, 'palvarado@gmail.com', 'Transferencia bancaria'),
('Luisa Gonzales', 'Jr. Lima 234, Trujillo', 998765432, 'lgonzales@yahoo.com', 'Con cheque'),
('Omar Sosa', 'Av. 28 de Julio 567, Lima', 966123456, 'ososa@hotmail.com', 'Con tarjeta');

INSERT INTO platos (nombre, descripcion, precio, tipoPlato, imagen) VALUES
 ('Nigiri Sushi','Nigiris','25','sushi','https://acortar.link/gu3DFC'),
 ('Maki sushi','Makis','25','sushi','https://acortar.link/3wHGXp'),
 ('Uramaki sushi','Naruto','25','sushi','https://acortar.link/kVuVEf'),
 ('Temaki sushi','Sanji sushi','25','sushi','https://acortar.link/JRj28p'),
 ('Sashimi','Luffy sushi','25','sushi','https://acortar.link/Ou1JDe');
	
 INSERT INTO opiniones (idPlato, idCliente, calificacion, comentario, fecha) VALUES
 ('3','1','5','Esta buenisima','25/04/03'),
 ('1','2','5','Feliz cum al tiktoker','27/04/03'),
 ('4','3','1','Nah Ramen goku está mejor','03/05/03'),
 ('2','4','3','Masomenos','01/05/03'),
 ('5','5','5','Esta buenisima','02/05/03');
 
 SELECT * FROM clientes;
 
 INSERT INTO ordenes (idCliente, fecha, IdPlatos, total) VALUES
 ('1','25/04/03',4, '150'),
 ('2','25/04/03',1, '125'),
 ('3','26/04/03',2, '130'),
 ('4','26/04/03',3, '75'),
 ('5','26/04/03',3, '100');