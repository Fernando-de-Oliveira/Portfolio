import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadialMenuComponent } from '../radial-menu/radial-menu.component';
import { Skill, SKILLS_DATA } from '../../consts/skillsConsts';

@Component({
  selector: 'app-skillset-menu',
  templateUrl: './skillset-menu.component.html',
  styleUrls: ['./skillset-menu.component.scss'],
  imports:[CommonModule, RadialMenuComponent]
})
export class SkillsetMenuComponent {
  
skills: Skill[] = SKILLS_DATA
selectedSkill: any = null;

getSkillPosition(index: number): string {
  const total = this.skills.length;
  const angle = (360 / total) * index;
  let distance = 120; // Valor padrão
  if (typeof window !== 'undefined'){
  
    // Calcular a distância de deslocamento com base no tamanho da tela
    const screenWidth = window.innerWidth;
  
    if (screenWidth < 768) {
      distance = 100; // Ajustar para telas pequenas (ex: mobile)
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      distance = 100; // Ajustar para tablets e telas médias
    }
  }
  return `rotate(${angle}deg) translate(${distance}px) rotate(-${angle}deg)`;
}

  getIconPosition(index: number) {
    const angle = (360 / this.skills.length) * index;
    const radius = 100;
    return {
      top: `${50 + radius * Math.sin((angle * Math.PI) / 180)}%`,
      left: `${50 + radius * Math.cos((angle * Math.PI) / 180)}%`,
    };
  }

  toggleRadialMenu(skill: any) {
    this.selectedSkill = this.selectedSkill == skill ? null : skill;
    
  }
}