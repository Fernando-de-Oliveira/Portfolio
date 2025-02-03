export interface ProjectDetails {
    id: string;
    title: string;
    description: string;
    images: string[];
    technologies: string[];
    githubUrl: string;
    demoUrl: string;
    imgSize?: string;
}

export const PROJECTS_DATA: ProjectDetails[] = [

    {
        id: 'dados-cadastrais',
        title: 'Dados Cadastrais - Bradesco',
        description: 'Trabalhei no desenvolvimento do menu de Dados Cadastrais do aplicativo do Bradesco, usando Angular 16 e SASS para uma interface moderna e bem estilizada. Utilizando GitFlow para versionamento e CI/CD com Jenkins para automação de deploys. Escrita de testes unitários automatizados com Jest.',
        images: [
            "assets/img/bradesco.jpg",
            "assets/img/solutis-app.png"
        ],
        imgSize: 'small',
        technologies: [
            'Angular 16',
            'SASS',
            'CI/CD',
            'Jest',
            'Jenkins'
        ],
        githubUrl: '/',
        demoUrl: '/'
    },
    {
        id: 'marketplace-skytech',
        title: 'MarketPlace SkyTech Solutions',
        description: 'Criei e mantive o MarketPlace da SkyTech Solutions utilizando Angular 10 e SASS. No projeto, apliquei princípios de Pixel Perfect para precisão visual, SOLID para um código bem estruturado e TDD para assegurar a qualidade e confiabilidade do sistema desde o início.',
        images: [
            "assets/img/skytech.jpg"
        ],
        imgSize: 'small',
        technologies: [
            'Angular 10',
            'SASS',
            'TDD',
            'SOLID',
        ],
        githubUrl: '/',
        demoUrl: '/'
    },
    {
        id: 'redesign-mip',
        title: 'Projeto MIP 3.0',
        description: 'Redesign de todas as aplicações da empresa, criação de uma biblioteca com SASS que atendeu as necessidades dos projetos e transformou os layouts como um todo em aplicações simples, responsivas e User Friendly.',
        images: [
            "assets/img/grupo_iaudit_logo.jpeg"
        ],
        imgSize: 'small',
        technologies: [
            'Angular 11',
            'SASS',
            'GitFlow',
            'HTML',
            'CSS'
        ],
        githubUrl: '/',
        demoUrl: '/'
    },
    {
        id: 'galeria-page',
        title: 'Marketplace Galeria Pagé',
        description: 'Tive a oportunidade de atuar sozinho construíndo o Front-End do sistema da central de transportadoras PageExpress, área logada para os encarregados emitirem etiquetas de envio e área comum para publico rastrear encomendas (API do correios). Construído com Angular 10, Docker, GitFlow, Typescript, estratégias de Pixel Perfect, CI/CD, e vivencia com SCRUM.',
        images: [
            "assets/img/1630530300774.jpeg"
        ],
        imgSize: 'small',
        technologies: [
            'Angular 9',
            'SASS',
            'GitFlow',
            'HTML',
            'CSS'
        ],
        githubUrl: '/',
        demoUrl: '/'
    },
    {
        id: 'extrato-bradesco',
        title: 'Extrato - Banco Bradesco',
        description: 'Na CAPCO, desenvolvi a seção de Extrato para uma aplicação de um banco novo vinculado ao Bradesco, utilizando Angular 13 para a estrutura do front-end e SASS para estilização. O processo contou com GitFlow para controle de versão e CI/CD com Jenkins para automatizar deploys, além de testes automatizados com Jest para garantir a qualidade do código.',
        images: [
            "assets/img/bradesco.jpg"
        ],
        imgSize: 'small',
        technologies: [
            'Angular 13',
            'SASS',
            'CI/CD',
            'Jest',
            'GitFlow'
        ],
        githubUrl: '/',
        demoUrl: '/'
    },
    {
        id: 'okn',
        title: 'OKN',
        description: 'Atuei fazendo manutenção de portais de notícias da rede ITMidia com Wordpress(PHP), construção de plugins com Javascript, Embedded Google Ads, construção e estilização de landing pages com HTML e Sass. Desenvolvimento do portal da oxfam.org.br (Wordpress e Javascript). Estilização com CSS e Scss de paginas e portais utilizando o padrão BEM.',
        images: [
            "assets/img/okngroup_logo.jpeg",
            "assets/img/itmidia.jpg",
            "assets/img/rede-itmidia.png"
        ],
        imgSize: 'small',
        technologies: [
            'WordPress',
            'PHP',
            'JavaScript',
            'SASS'
        ],
        githubUrl: '/',
        demoUrl: '/'
    },
    {
        id: 'hapin-platforms',
        title: 'Plataformas Hapin',
        description: 'Pude participar como aprendiz de Full-Stack em um projeto do setor de recrutamento e seleção, construído com a Stack MEAN, fui capaz de contribuir positivamente para o projeto na construção de pequenas features no Front-End(Angular 4, SASS, Typescript) e no BackEnd(Node e Express), correções de bugs e versionamento de código (GIT).',
        images: [
            "assets/img/grupofcamara_logo.jpeg"
        ],
        imgSize: 'small',
        technologies: [
            'NodeJS',
            'Angular 4',
            'MongoDB',
            'HTML',
            'CSS'
        ],
        githubUrl: '/',
        demoUrl: '/'
    },
    {
        id: 'url-shorter',
        title: 'Encurtador de URL',
        description: 'Um serviço de encurtamento de URLs desenvolvido com Java 17 e AWS Lambda Functions. Este projeto permite aos usuários encurtar links longos em URLs mais gerenciáveis, além de fornecer análises de cliques e gerenciamento de links.',
        images: [
            "assets/img/java-code.png",
            "assets/img/aws-panel.png"
        ],
        technologies: [
            'Java 17',
            'Spring',
            'AWS',
            'Lambda Functions',
        ],
        githubUrl: 'https://github.com/Fernando-de-Oliveira/urlShortener',
        demoUrl: '/'
    },
];
