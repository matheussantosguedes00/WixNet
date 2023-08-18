-- Criar o banco de dados "almoxarifado"
CREATE DATABASE almoxarifado;

-- Usar o banco de dados recém-criado
USE almoxarifado;

-- Criar a tabela "cadastrodefornecedores"
CREATE TABLE cadastrodefornecedores (
    id int(11) AUTO_INCREMENT PRIMARY KEY,
    Empresa varchar(255),
    Telefone varchar(20),
    Email varchar(100),
    TotalCompras decimal(15,2)
);

-- Inserir 10 registros na tabela "cadastrodefornecedores"
INSERT INTO cadastrodefornecedores (Empresa, Telefone, Email, TotalCompras)
VALUES
    ('Fornecedor A', '111-1111', 'fornecedorA@email.com', 5000.00),
    ('Fornecedor B', '222-2222', 'fornecedorB@email.com', 7500.00),
    ('Fornecedor C', '333-3333', 'fornecedorC@email.com', 12000.00),
    ('Fornecedor D', '444-4444', 'fornecedorD@email.com', 800.50),
    ('Fornecedor E', '555-5555', 'fornecedorE@email.com', 15000.00),
    ('Fornecedor F', '666-6666', 'fornecedorF@email.com', 2200.75),
    ('Fornecedor G', '777-7777', 'fornecedorG@email.com', 980.25),
    ('Fornecedor H', '888-8888', 'fornecedorH@email.com', 600.00),
    ('Fornecedor I', '999-9999', 'fornecedorI@email.com', 1350.50),
    ('Fornecedor J', '101-0101', 'fornecedorJ@email.com', 4500.00);
    
-- Criar a tabela "cadastrodelojas"
CREATE TABLE cadastrodelojas (
    id int(11) AUTO_INCREMENT PRIMARY KEY,
    Loja varchar(255),
    Telefone varchar(20),
    Email varchar(100),
    Endereco varchar(255),
    TotalVendido decimal(15,2)
);

-- Inserir 10 registros na tabela "cadastrodelojas"
INSERT INTO cadastrodelojas (Loja, Telefone, Email, Endereco, TotalVendido)
VALUES
    ('Loja A', '111-1111', 'lojaA@email.com', 'Rua A, 123', 50000.00),
    ('Loja B', '222-2222', 'lojaB@email.com', 'Avenida B, 456', 75000.00),
    ('Loja C', '333-3333', 'lojaC@email.com', 'Praça C, 789', 120000.00),
    ('Loja D', '444-4444', 'lojaD@email.com', 'Rua D, 789', 8000.50),
    ('Loja E', '555-5555', 'lojaE@email.com', 'Avenida E, 1011', 150000.00),
    ('Loja F', '666-6666', 'lojaF@email.com', 'Praça F, 1213', 22000.75),
    ('Loja G', '777-7777', 'lojaG@email.com', 'Rua G, 1415', 9800.25),
    ('Loja H', '888-8888', 'lojaH@email.com', 'Avenida H, 1617', 6000.00),
    ('Loja I', '999-9999', 'lojaI@email.com', 'Praça I, 1819', 13500.50),
    ('Loja J', '101-0101', 'lojaJ@email.com', 'Rua J, 2021', 45000.00);
    
    
    
-- Criar a tabela "cadastrodeprodutos"
CREATE TABLE cadastrodeprodutos (
    id int(11) AUTO_INCREMENT PRIMARY KEY,
    Item varchar(255),
    KM int(11),
    EstoqueMinimo int(11),
    CodigoProduto varchar(50),
    Modelo varchar(100),
    CustoUnitario decimal(10,2),
    UnidadeMedida varchar(50),
    SerialNumero varchar(100)
);

-- Inserir 10 registros na tabela "cadastrodeprodutos"
INSERT INTO cadastrodeprodutos (Item, KM, EstoqueMinimo, CodigoProduto, Modelo, CustoUnitario, UnidadeMedida, SerialNumero)
VALUES
    ('Produto A', 100, 10, 'CP001', 'Modelo A', 50.00, 'Unidade', 'SN001'),
    ('Produto B', 200, 15, 'CP002', 'Modelo B', 75.00, 'Unidade', 'SN002'),
    ('Produto C', 150, 12, 'CP003', 'Modelo C', 120.00, 'Unidade', 'SN003'),
    ('Produto D', 50, 5, 'CP004', 'Modelo D', 8.50, 'Unidade', 'SN004'),
    ('Produto E', 300, 20, 'CP005', 'Modelo E', 150.00, 'Unidade', 'SN005'),
    ('Produto F', 180, 18, 'CP006', 'Modelo F', 22.75, 'Unidade', 'SN006'),
    ('Produto G', 250, 25, 'CP007', 'Modelo G', 98.25, 'Unidade', 'SN007'),
    ('Produto H', 90, 8, 'CP008', 'Modelo H', 60.00, 'Unidade', 'SN008'),
    ('Produto I', 120, 10, 'CP009', 'Modelo I', 35.50, 'Unidade', 'SN009'),
    ('Produto J', 70, 7, 'CP010', 'Modelo J', 45.00, 'Unidade', 'SN010');
    
    
    
-- Selecionar todos os registros da tabela "cadastrodefornecedores"
SELECT * FROM cadastrodefornecedores;

-- Selecionar todos os registros da tabela "cadastrodelojas"
SELECT * FROM cadastrodelojas;

-- Selecionar todos os registros da tabela "cadastrodeprodutos"
SELECT * FROM cadastrodeprodutos;