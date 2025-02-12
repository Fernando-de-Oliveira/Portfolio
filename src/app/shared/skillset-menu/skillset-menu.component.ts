import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { RadialMenuComponent } from '../radial-menu/radial-menu.component';

@Component({
  selector: 'app-skillset-menu',
  templateUrl: './skillset-menu.component.html',
  styleUrls: ['./skillset-menu.component.scss'],
  imports:[CommonModule, RadialMenuComponent]
})
export class SkillsetMenuComponent {
skills = [
  { 
      index: 0, 
      levels:['full','full','full','full','full'],
      name: 'Angular', 
      icon: 'assets/icons/angular.png', 
      description: 'Angular é o framework com o qual me sinto mais confortável e produtivo. Sua estrutura robusta e ferramentas poderosas tornam o desenvolvimento de aplicações complexas muito mais eficiente e organizado.', 
      experiences: ['Menu de Dados Cadastrais (Bradesco)', 'Seção de Extrato (Bradesco)'] 
  },
  { 
      index: 1, 
      levels:['full','full','full','full','half',],
      name: 'TypeScript', 
      icon: 'assets/icons/ts.png', 
      description: 'TypeScript trouxe uma nova dimensão para o meu trabalho. Com sua tipagem estática, consigo escrever código mais seguro e fácil de refatorar, o que facilita muito a manutenção a longo prazo.', 
      experiences: ['Pagé Express', 'Menu de Dados Cadastrais (Bradesco)'] 
  },
  { 
      index: 2, 
      levels:['full','full','full','full','full',],
      name: 'SASS', 
      icon: 'assets/icons/sass.png', 
      description: 'SASS é uma ferramenta essencial para a minha produtividade no frontend. Ele me permite escrever CSS de maneira modular e eficiente, o que resulta em código mais limpo e fácil de manter.', 
      experiences: ['Seção de Extrato (Bradesco)', 'MarketPlace SkyTech Solutions'] 
  },
  { 
      index: 3, 
      levels:['full','full','full','half','empty',],
      name: 'JavaScript', 
      icon: 'assets/icons/js.png', 
      description: 'JavaScript é a linguagem central para a maioria dos projetos que trabalho. Sua flexibilidade e a enorme comunidade de desenvolvedores fazem dele uma escolha poderosa para qualquer aplicação web moderna.', 
      experiences: ['oxfam.org.br', 'itmidia.com.br'] 
  },
  { 
      index: 4, 
      levels:['full','full','full','full','full',],
      name: 'HTML5', 
      icon: 'assets/icons/html5.png', 
      description: 'HTML5 é o alicerce de qualquer site que desenvolvo. Ele fornece a estrutura fundamental para o conteúdo, e a evolução dessa tecnologia tem sido essencial para criar experiências mais ricas e interativas na web.', 
      experiences: ['Menu de Dados Cadastrais (Bradesco)', 'Hapin (FCamara)'] 
  },
  { 
      index: 5, 
      levels:['full','full','full','full','full',],
      name: 'CSS3', 
      icon: 'assets/icons/css3.png', 
      description: 'CSS3 é crucial para criar uma experiência visual de qualidade. Com ele, consigo garantir que as interfaces fiquem bonitas e funcionais, proporcionando uma navegação agradável e intuitiva.', 
      experiences: ['Seção de Extrato (Bradesco)', 'MarketPlace SkyTech Solutions'] 
  },
  { 
      index: 6, 
      levels:['full','full','full','full','full',],
      name: 'RxJs', 
      icon: 'assets/icons/rxjs.png', 
      description: 'RxJs tem sido um divisor de águas quando se trata de gerenciar dados assíncronos. Sua abordagem reativa me permite construir soluções eficientes para fluxos complexos de dados em Angular.', 
      experiences: ['Menu de Dados Cadastrais (Bradesco)', 'Seção de Extrato (Bradesco)'] 
  },
  { 
      index: 7, 
      levels:['full','full','full','empty','empty',],
      name: 'Node.js', 
      icon: 'assets/icons/node.svg', 
      description: 'Node.js é a solução perfeita para unir o frontend e o backend com a mesma linguagem. Ele me permite criar APIs escaláveis e rápidas, tornando o desenvolvimento mais ágil e integrado.', 
      experiences: ['Hapin (FCamara)'] 
  }
];


getSkillPosition(index: number): string {
  const total = this.skills.length;
  const angle = (360 / total) * index;
  let distance = 120; // Valor padrão
  if (typeof window !== 'undefined'){

  
    // Calcular a distância de deslocamento com base no tamanho da tela
    const screenWidth = window.innerWidth;
  
    if (screenWidth < 768) {
      distance = 70; // Ajustar para telas pequenas (ex: mobile)
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      distance = 110; // Ajustar para tablets e telas médias
    }
  
    return `rotate(${angle}deg) translate(${distance}px) rotate(-${angle}deg)`;
  } else {
    return `rotate(${angle}deg) translate(${distance}px) rotate(-${angle}deg)`
  }
}


  selectedSkill: any = null;

  getIconPosition(index: number) {
    const angle = (360 / this.skills.length) * index;
    const radius = 100;
    return {
      top: `${50 + radius * Math.sin((angle * Math.PI) / 180)}%`,
      left: `${50 + radius * Math.cos((angle * Math.PI) / 180)}%`,
    };
  }

  openRadialMenu(skill: any) {
    this.selectedSkill = skill;
    console.log(skill);
    
  }

  closeRadialMenu() {
    this.selectedSkill = null;
  }

}