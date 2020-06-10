-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-05-2020 a las 18:24:09
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `agendadb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

CREATE TABLE `eventos` (
  `id` int(11) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `fecha_inicio` varchar(20) NOT NULL,
  `fecha_fin` varchar(20) DEFAULT NULL,
  `hora_inicio` varchar(20) DEFAULT NULL,
  `hora_fin` varchar(20) DEFAULT NULL,
  `allday` tinyint(1) DEFAULT NULL,
  `fk_usuarios` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`id`, `titulo`, `fecha_inicio`, `fecha_fin`, `hora_inicio`, `hora_fin`, `allday`, `fk_usuarios`) VALUES
(71, 'Descanso', '2020-05-29', '2020-05-29', ':00', ':00', 1, 'rodolfopuc@gmail.com'),
(72, '9:00 AM a 18:00 PM', '2020-05-30', '2020-05-30', ':00', ':00', 1, 'rodolfopuc@gmail.com'),
(73, 'Prueba 1', '2020-05-31', '2020-05-31', '07:00:00', '07:00:00', 0, 'rodolfopuc@gmail.com'),
(74, 'Test', '2020-05-29', '2020-05-30', '12:00:00', '19:00:00', 0, 'admin@admin.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `email` varchar(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fecha_nacimiento` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`email`, `nombre`, `password`, `fecha_nacimiento`) VALUES
('admin@admin.com', 'Administrador', '$2y$10$WLxjurTz3qGdoi3igK1l9.Qr424lMdXL9ly8OM40jC2ezJjnFPfxm', '2020-03-16'),
('prueba@prueba.com', 'Prueba', '$2y$10$NEGoE1W4jJzO.g1Qf8fDNOZCPiaeXBZv4KYawndu96S34QzYjDm8K', '2020-03-16'),
('rodolfopuc@gmail.com', 'Rodolfo Puc Chi', '$2y$10$1/bn.36LNtCHBJpN6U80G.mXy.scVu68RSXC085tzNTbEmHIr0eqm', '1992-11-01');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_usuarios` (`fk_usuarios`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `eventos`
--
ALTER TABLE `eventos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD CONSTRAINT `fk_usuarioemail_evento` FOREIGN KEY (`fk_usuarios`) REFERENCES `usuarios` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
