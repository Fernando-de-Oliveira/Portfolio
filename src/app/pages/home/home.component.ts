import { Component } from '@angular/core';
import { UrlShorterComponent } from "../../url-shorter/url-shorter.component";
import { CommonModule } from '@angular/common';
interface ProjectDetails {
  id: string;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

@Component({
  selector: 'app-home',
  imports: [UrlShorterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isDetailsSidebarOpen = false;
  selectedProject: ProjectDetails | null = null;

  private projectsData: { [key: string]: ProjectDetails } = {
    'url-shorter': {
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
      githubUrl: 'https://github.com/seu-usuario/url-shorter',
      demoUrl: 'https://url-shorter-demo.com'
    }
  };

  openProjectDetails(projectId: string): void {
    this.selectedProject = this.projectsData[projectId];
    this.isDetailsSidebarOpen = true;
  }

  closeProjectDetails(): void {
    this.isDetailsSidebarOpen = false;
    this.selectedProject = null;
  }
}
