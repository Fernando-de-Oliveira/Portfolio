import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetails, PROJECTS_DATA } from '../../consts/projectsConsts';
import { SkillsetMenuComponent } from "../../shared/skillset-menu/skillset-menu.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, SkillsetMenuComponent],
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

