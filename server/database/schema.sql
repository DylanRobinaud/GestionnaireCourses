DROP TABLE IF EXISTS Categories;
DROP TABLE IF EXISTS Status;
DROP TABLE IF EXISTS Courses;
CREATE TABLE Categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE Status (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE Courses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    category_id INT,
    status_id INT,
    quantity INT,
    FOREIGN KEY (category_id) REFERENCES Categories(id),
    FOREIGN KEY (status_id) REFERENCES Status(id)
);

INSERT INTO Categories (name) VALUES 
('Fruits'), 
('Légumes'), 
('Produits Laitiers'), 
('Viandes');

INSERT INTO Status (name) VALUES 
('A acheter'), 
('Acheté'), 
('Annulé');

INSERT INTO Courses (name, category_id, quantity, status_id) VALUES 
('Pommes', 1, 1, 1),
('Lait', 3, 1, 1),
('Carottes', 2, 1, 1),
('Bananes', 1, 1, 1),
('Yaourt', 3, 1, 1),
('Poulet', 4, 1, 1),
('Fromage', 3, 1, 1),
('Poivrons', 2, 1, 1),
('Tomates', 2, 1, 1),
('Oranges', 1, 1, 1),
('Beurre', 3, 1, 1),
('Poisson', 4, 1, 1),
('Poires', 1, 1, 1),
('Laitue', 2, 1, 1),
('Crème fraîche', 3, 1, 1);
