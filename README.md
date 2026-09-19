# Catálogo de Apps Educativos para Linux

[![Apps](https://img.shields.io/badge/apps-115+-dcaa50?style=for-the-badge)](https://appsedu.github.io/catalog-apps/)
[![Licença](https://img.shields.io/badge/licença-MIT-63b6a5?style=for-the-badge)](LICENSE)
[![Plataforma](https://img.shields.io/badge/plataforma-Debian%20%7C%20Ubuntu-0e1116?style=for-the-badge)](https://winunix.github.io/debian/)
[![Demo](https://img.shields.io/badge/demo-ao%20vivo-a87828?style=for-the-badge&logo=github&logoColor=white)](https://appsedu.github.io/catalog-apps/)

---

> Um catálogo curado de software livre e open source para **educação**, pensado para o desktop Linux — com foco em Debian, Ubuntu e no [WinuniX OS](https://winunix.github.io).

**Explore agora:** [appsedu.github.io/catalog-apps](https://appsedu.github.io/catalog-apps/)

---

## Sobre

Este projeto reúne aplicações educativas que rodam bem em distribuições Debian/Ubuntu, organizadas por área do conhecimento. Cada entrada traz descrição, página oficial, comando de instalação e screenshot.

Ideal para escolas, laboratórios, professores e quem monta ambientes de estudo no Linux.

---

## Categorias

| Área | Exemplos de foco |
| :--- | :--- |
| Astronomia | Planetários, simuladores espaciais, rastreamento de satélites |
| Biologia | Microscopia, anatomia, ciências da vida |
| Química | Modelagem molecular, laboratórios virtuais |
| Física Geral | Mecânica, gravitação, experimentos |
| Eletricidade | Circuitos, eletrônica, simulação |
| Matemática | Geometria, cálculo, exploração numérica |
| Geografia | Mapas, exploração terrestre |
| Línguas / Português | Aprendizado de idiomas e língua portuguesa |
| História | Linhas do tempo e recursos históricos |
| Desenho Técnico | CAD, projeções, desenho industrial |
| Mecatrônica | Automação, robótica educacional |
| Informática / Desenvolvimento | Programação, ferramentas de estudo |
| Infantil | Apps lúdicos para as primeiras idades |
| Multidisciplinar / Ferramentas | Recursos transversais ao ensino |

---

## Como usar

### Catálogo online

Abra a versão publicada no GitHub Pages:

```text
https://appsedu.github.io/catalog-apps/
```

Navegue por categorias, busque apps e copie o comando de instalação direto da interface.

### Pré-requisito de instalação

A seção **Como instalar** assume que você usa o [WinuniX OS](https://winunix.github.io) **ou** outra distribuição Debian/Ubuntu com o [repositório WinuniX 20](https://winunix.github.io/debian/) configurado.

Sem esse repositório, alguns pacotes podem não estar disponíveis via `apt`.

### Dados do catálogo

A lista completa de apps fica em `apps.json`. Cada item segue este formato:

```json
{
  "app": "Stellarium",
  "text": "Gerador de céu fotorrealístico em tempo real",
  "page": "https://stellarium.org",
  "install": "sudo apt install stellarium",
  "img": "https://screenshots.debian.net/screenshot/stellarium",
  "categories": ["Astronomia"]
}
```

| Campo | Descrição |
| :--- | :--- |
| `app` | Nome do aplicativo |
| `text` | Descrição curta |
| `page` | Site oficial |
| `install` | Comando(s) de instalação (`string` ou `array`) |
| `img` | URL do screenshot |
| `categories` | Lista de categorias |

---

## Estrutura do repositório

```text
catalog-apps/
├── index.html          # Interface principal do catálogo
├── apps.json           # Base de dados dos aplicativos
├── screenshots/        # Imagens locais (quando aplicável)
├── app1/               # Versão alternativa da interface
├── LICENSE             # Licença MIT
└── README.md           # Você está aqui
```

---

## Contribuindo

Encontrou um erro, um link quebrado ou conhece um app open source compatível com Debian/Ubuntu que falta no catálogo?

1. Abra uma [issue](https://github.com/appsedu/catalog-apps/issues)
2. Ou envie um pull request atualizando `apps.json`

Preferimos apps **open source**, com instalação clara e utilidade real em contexto educativo.

---

## Licença

Distribuído sob a licença [MIT](LICENSE).

Copyright © 2019 [Apps Edu](https://github.com/appsedu)

---

*Feito para quem ensina e aprende no Linux.*
