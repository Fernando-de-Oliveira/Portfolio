import { Component } from '@angular/core';
import { UrlShorterComponent } from "../../url-shorter/url-shorter.component";
import { CommonModule } from '@angular/common';
// projects-data.ts
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
      description: 'Desenvolvimento do menu de Dados Cadastrais para o aplicativo do Bradesco, garantindo funcionalidades modernas e responsivas.',
      images: [
        "assets/img/bradesco.jpg"
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
  id: 'redesign-mip',
  title: 'Projeto MIP 3.0',
  description: 'Redesign completo das aplicações internas da empresa IAUDIT, modernizando interfaces e otimizando a experiência do usuário.',
  images: [
    "assets/img/iaudit.png"
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
  description: 'Desenvolvimento e manutenção do marketplace da Galeria Pagé, com funcionalidades robustas para gerenciar produtos e vendas.',
  images: [
    "assets/img/galeria-page.jpg"
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
  id: 'itmidia-projects',
  title: 'Sistemas ITMidia',
  description: 'Desenvolvimento de sistemas e plugins para a ITMidia, incluindo os sites ITTrends, ITFórum e oxfam.org.br.',
  images: [
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
  description: 'Desenvolvimento do website Hapin, com funcionalidades dedicadas a candidatos e plataformas internas, utilizando NodeJS e MongoDB.',
  images: [
    "assets/img/fcamara.jpg"
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
   {
      id: 'marketplace-skytech',
      title: 'MarketPlace SkyTech Solutions',
      description: 'Criação e manutenção do marketplace SkyTech Solutions. Projeto desenvolvido com Angular 10 e SASS, aplicando conceitos de Pixel Perfect, SOLID e TDD para garantir alta qualidade e consistência.',
      images: [
        "assets/img/skytech.jpg"
      ],
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
      id: 'extrato-bradesco',
      title: 'Extrato - Banco Bradesco',
      description: 'Desenvolvimento da seção de Extrato de um novo banco vinculado ao Bradesco. Utilizando Angular 13 e CI/CD para garantir desempenho e escalabilidade.',
      images: [
        "assets/img/bradesco.jpg"
      ],
      technologies: [
        'Angular 13',
        'SASS',
        'CI/CD',
        'Jest',
        'GitFlow'
      ],
      githubUrl: '/',
      demoUrl: '/'
    }
  
  // Adicionar os outros projetos aqui...
];


@Component({
  selector: 'app-home',
  imports: [UrlShorterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  projects: ProjectDetails[] = PROJECTS_DATA;
  selectedProject?: ProjectDetails;
  isDetailsSidebarOpen = false;

  openProjectDetails(id: string): void {
    this.selectedProject = this.projects.find(project => project.id === id);
    this.isDetailsSidebarOpen = true;
  }

  closeProjectDetails(): void {
    this.selectedProject = undefined;
    this.isDetailsSidebarOpen = false;
  }
}

