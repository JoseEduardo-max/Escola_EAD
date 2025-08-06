-- Criar banco
CREATE DATABASE IF NOT EXISTS escola_ead;
USE escola_ead;

-- Usuários (alunos, professores e admins)
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    tipo ENUM('aluno', 'professor', 'admin') NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Cursos
CREATE TABLE cursos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descricao TEXT,
    imagem_capa VARCHAR(255),
    publico_alvo TEXT,
    categoria VARCHAR(50),
    professor_id INT,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (professor_id) REFERENCES usuarios(id)
);

-- Módulos (trilhas dentro de cursos)
CREATE TABLE modulos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    curso_id INT NOT NULL,
    titulo VARCHAR(100),
    ordem INT,
    FOREIGN KEY (curso_id) REFERENCES cursos(id) ON DELETE CASCADE
);

-- Aulas (vídeo aulas)
CREATE TABLE aulas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    modulo_id INT NOT NULL,
    titulo VARCHAR(100),
    descricao TEXT,
    video_url VARCHAR(255),
    ordem INT,
    duracao INT COMMENT 'em minutos',
    FOREIGN KEY (modulo_id) REFERENCES modulos(id) ON DELETE CASCADE
);

-- Matriculas
CREATE TABLE matriculas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    aluno_id INT NOT NULL,
    curso_id INT NOT NULL,
    data_matricula TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('ativa', 'concluida', 'cancelada') DEFAULT 'ativa',
    FOREIGN KEY (aluno_id) REFERENCES usuarios(id),
    FOREIGN KEY (curso_id) REFERENCES cursos(id)
);

-- Progresso por aula
CREATE TABLE progresso_aulas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    aluno_id INT,
    aula_id INT,
    assistido BOOLEAN DEFAULT FALSE,
    data_assistido TIMESTAMP NULL,
    FOREIGN KEY (aluno_id) REFERENCES usuarios(id),
    FOREIGN KEY (aula_id) REFERENCES aulas(id)
);

-- Avaliações (provas ou testes por módulo)
CREATE TABLE avaliacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    modulo_id INT NOT NULL,
    titulo VARCHAR(100),
    descricao TEXT,
    data_disponivel TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (modulo_id) REFERENCES modulos(id)
);

-- Questões das avaliações
CREATE TABLE questoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    avaliacao_id INT,
    enunciado TEXT,
    tipo ENUM('multipla_escolha', 'dissertativa'),
    alternativa_a TEXT,
    alternativa_b TEXT,
    alternativa_c TEXT,
    alternativa_d TEXT,
    alternativa_correta CHAR(1),
    FOREIGN KEY (avaliacao_id) REFERENCES avaliacoes(id)
);

-- Respostas dos alunos
CREATE TABLE respostas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    aluno_id INT,
    questao_id INT,
    resposta TEXT,
    correta BOOLEAN,
    respondido_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (aluno_id) REFERENCES usuarios(id),
    FOREIGN KEY (questao_id) REFERENCES questoes(id)
);

-- Certificados
CREATE TABLE certificados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    aluno_id INT,
    curso_id INT,
    emitido_em DATE,
    codigo_certificado VARCHAR(100) UNIQUE,
    FOREIGN KEY (aluno_id) REFERENCES usuarios(id),
    FOREIGN KEY (curso_id) REFERENCES cursos(id)
);

-- Pagamentos
CREATE TABLE pagamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    aluno_id INT,
    curso_id INT,
    valor DECIMAL(10,2),
    status ENUM('pendente', 'aprovado', 'cancelado') DEFAULT 'pendente',
    metodo_pagamento VARCHAR(50),
    data_pagamento TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (aluno_id) REFERENCES usuarios(id),
    FOREIGN KEY (curso_id) REFERENCES cursos(id)
);

-- Trilhas de aprendizagem
CREATE TABLE trilhas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100),
    descricao TEXT
);

-- Cursos em trilhas
CREATE TABLE trilha_cursos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    trilha_id INT,
    curso_id INT,
    ordem INT,
    FOREIGN KEY (trilha_id) REFERENCES trilhas(id),
    FOREIGN KEY (curso_id) REFERENCES cursos(id)
);
