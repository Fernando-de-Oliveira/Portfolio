import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadialMenuComponent } from '../radial-menu/radial-menu.component';
import { Skill, SKILLS_DATA } from '../../consts/skillsConsts';

@Component({
  selector: 'app-skillset-menu',
  templateUrl: './skillset-menu.component.html',
  styleUrls: ['./skillset-menu.component.scss'],
  imports:[CommonModule, RadialMenuComponent]
})
export class SkillsetMenuComponent{
@ViewChild('container', { static: false}) container!: ElementRef;
@ViewChild('lastRow', { static: false}) lastRow!: ElementRef;
  
skills: Skill[] = SKILLS_DATA
selectedSkill: any = null;
scrolled = false
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
angleStep = 360 / 8;

  toggleRadialMenu(skill: any) {

    let rotationAngle = 0;
    const targetAngle = 180 - (this.angleStep * skill.index);
    rotationAngle = targetAngle;
    if (typeof window !== 'undefined'){
      const circles = this.container.nativeElement.querySelectorAll('.circle'); 
      const screenWidth = window.innerWidth;    
      if (screenWidth < 1280) {
        rotationAngle-= 90;
        if (!this.scrolled) {
          setTimeout(() => {
            this.lastRow.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
          }, 100);
          this.scrolled = true
        }
      } 
      circles.forEach((circle: HTMLElement, index: number) => {
        const angle = (360 / this.skills.length) * index;
        if (screenWidth < 1280) {
          circle.style.transform = `rotate(${angle - 90}deg)`;
        } else {
          let angleCircle = 180 - (this.angleStep * skill.index);
          circle.style.transform = `rotate(${-angleCircle}deg)`;
        }
      });
    }
  this.container.nativeElement.style.transform = `rotate(${rotationAngle}deg)`;
  this.selectedSkill = this.selectedSkill == skill ? null : skill;
 

  }
}