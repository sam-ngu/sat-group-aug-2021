CREATE SCHEMA IF NOT EXISTS `employee_cms` ;


-- create dept
DROP TABLE IF EXISTS `employee_cms`.`departments`;

CREATE TABLE `employee_cms`.`departments` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

--   roles
DROP TABLE IF EXISTS `employee_cms`.`roles`;
CREATE TABLE `employee_cms`.`roles` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `salary` DECIMAL NULL DEFAULT NULL,
  `department_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `department_id` (`department_id` ASC) VISIBLE);

ALTER TABLE `employee_cms`.`roles` 
ADD CONSTRAINT `fk_roles_1`
  FOREIGN KEY (`department_id`)
  REFERENCES `employee_cms`.`departments` (`id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION;


-- employee
DROP TABLE IF EXISTS `employee_cms`.`employees`;

CREATE TABLE `employee_cms`.`employees` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `role_id` INT UNSIGNED NOT NULL,
  `manager_id` INT UNSIGNED NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `role_id` (`role_id` ASC) VISIBLE,
  INDEX `manager_id` (`manager_id` ASC) VISIBLE);

ALTER TABLE `employee_cms`.`employees` 
ADD CONSTRAINT `fk_employees_1`
  FOREIGN KEY (`role_id`)
  REFERENCES `employee_cms`.`roles` (`id`)
  ON DELETE CASCADE
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_employees_2`
  FOREIGN KEY (`manager_id`)
  REFERENCES `employee_cms`.`employees` (`id`)
  ON DELETE RESTRICT
  ON UPDATE NO ACTION;

  

