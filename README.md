# 📘 Discovery do Projeto – Escola de Cursos Online

## 👨‍🏫 Nome do Projeto
**Escola de Cursos Online**

## 👥 Time
- Eduardo
- Thiago

## 🎯 Visão Geral
O projeto tem como objetivo criar uma **plataforma EAD** (Ensino a Distância) onde alunos possam se cadastrar, se inscrever em cursos, assistir videoaulas, responder avaliações, gerar certificados e acompanhar seu progresso por trilhas de aprendizagem.

A aplicação contará com um painel de administração para gerenciamento dos cursos, trilhas, conteúdos, usuários, pagamentos e geração de relatórios.

Ao acessar a plataforma pela primeira vez, o aluno cria sua conta informando nome, e-mail e senha. Após confirmar seu cadastro, ele pode explorar o catálogo de cursos disponíveis, organizados por áreas de conhecimento e níveis de dificuldade.

Interessado em um curso, o aluno se inscreve com apenas alguns cliques e já tem acesso imediato às videoaulas, apostilas e materiais de apoio. Cada curso está estruturado em módulos, que seguem uma trilha de aprendizagem clara, permitindo que ele acompanhe seu progresso a cada lição concluída.

Durante o aprendizado, o aluno realiza avaliações para testar seus conhecimentos. Se obtiver o desempenho mínimo exigido, ele avança para as próximas etapas até completar o curso.

Ao finalizar todas as atividades, a plataforma gera automaticamente um certificado digital personalizado, que o aluno pode baixar ou compartilhar. Além disso, ele pode acessar a qualquer momento o histórico de cursos concluídos, acompanhar seu progresso em novos cursos e continuar aprendendo no seu próprio ritmo.

## 🧠 Problema a Ser Resolvido
A dificuldade de professores, escolas e pequenos empreendedores em criar uma plataforma acessível para ensinar e vender seus cursos online com controle de progresso e entrega de conteúdo de forma estruturada.

## 👨‍🎓 Público-Alvo
- Estudantes interessados em aprendizado remoto
- Pequenas instituições de ensino
- Instrutores independentes

---

## ✅ Funcionalidades Mínimas do MVP

### Usuário (Aluno)
- Cadastro/Login
- Visualização de cursos disponíveis
- Inscrição em cursos
- Visualização de trilhas e videoaulas
- Responder avaliações
- Emissão de certificados
- Acompanhamento de progresso

### Admin (Gestor)
- CRUD de cursos
- CRUD de trilhas e aulas
- Upload de videoaulas
- Criar avaliações (questões)
- Emissão de certificados
- Visualização de relatórios
- Simulação de pagamentos

---

## 🧰 Stack de Tecnologias

| Camada         | Tecnologia             |
|----------------|------------------------|
| **Backend**    | Node.js + Express.js   |
| **Frontend**   | React.js (opcional)    |
| **Banco**      | PostgreSQL ou MariaDB  |
| **ORM**        | Prisma ORM             |
| **Testes**     | Jest + Supertest       |
| **Autenticação**| JWT                   |
| **Documentação** | Markdown e Mermaid/Swagger |
| **Gerenciamento** | GitHub Projects     |
| **Prototipação (opcional)** | Figma     |

---

## 📦 Entregáveis

| Entregável                        | Status     |
|----------------------------------|------------|
| Discovery do Projeto              | 🔲 |
| Gerenciamento das Tarefas         | 🔲 |
| Prototipação de telas (opcional)  | 🔲 |
| Implementação Frontend (opcional) | 🔲 |
| API em Node.js                    | 🔲 |
| Documentação dos Endpoints        | 🔲 |
| Desenho do Banco de Dados         | 🔲 |
| Testes automatizados dos endpoints| 🔲 |
| Testes unitários (50%)            | 🔲 |
| Repositório público no GitHub     | ✅ |
| Apresentação final                | 🔲 |

---

```mermaid
classDiagram
  
    Usuario --> Curso: Professor
    Usuario --> Matricula: OneToMany
    Usuario --> ProgressoAula: OneToMany
    Usuario --> Resposta: OneToMany
    Usuario --> Certificado: OneToMany
    Usuario --> Pagamento: OneToMany

    Curso --> Modulo: OneToMany
    Curso --> Matricula: OneToMany
    Curso --> Certificado: OneToMany
    Curso --> Pagamento: OneToMany
    Curso --> TrilhaCurso: OneToMany

    Modulo --> Aula: OneToMany
    Modulo --> Avaliacao: OneToMany

    Aula --> ProgressoAula: OneToMany

    Avaliacao --> Questao: OneToMany

    Questao --> Resposta: OneToMany

    Trilha --> TrilhaCurso: OneToMany

  
    class Usuario {
        + id
        + nome
        + email
        + senha
        + tipo 
        + criado_em
    }

    class Curso {
        + id
        + titulo
        + descricao
        + imagem_capa
        + publico_alvo
        + categoria
        + professor_id
        + criado_em
    }

    class Modulo {
        + id
        + curso_id
        + titulo
        + ordem
    }

    class Aula {
        + id
        + modulo_id
        + titulo
        + descricao
        + video_url
        + ordem
        + duracao (min)
    }

    class Matricula {
        + id
        + aluno_id
        + curso_id
        + data_matricula
        + status 
    }

    class ProgressoAula {
        + id
        + aluno_id
        + aula_id
        + assistido
        + data_assistido
    }

    class Avaliacao {
        + id
        + modulo_id
        + titulo
        + descricao
        + data_disponivel
    }

    class Questao {
        + id
        + avaliacao_id
        + enunciado
        + tipo 
        + alternativa_a
        + alternativa_b
        + alternativa_c
        + alternativa_d
        + alternativa_correta
    }

    class Respostas {
        + id
        + aluno_id
        + questao_id
        + resposta
        + correta
        + respondido_em
    }

    class Certificados {
        + id
        + aluno_id
        + curso_id
        + emitido_em
        + codigo_certificado
    }

    class Pagamento {
        + id
        + aluno_id
        + curso_id
        + valor
        + status
        + metodo_pagamento
        + data_pagamento
    }

    class Trilha {
        + id
        + titulo
        + descricao
    }

    class TrilhaCurso {
        + id
        + trilha_id
        + curso_id
        + ordem
    }

```