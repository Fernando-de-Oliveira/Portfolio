export interface Skill {
    index: number,
    levels: string[],
    name: string,
    icon: string,
    description: string,
    experiences: string[]
}

export const SKILLS_DATA: Skill[] = [
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
    // { 
    //     index: 4, 
    //     levels:['full','full','full','full','full',],
    //     name: 'HTML5', 
    //     icon: 'assets/icons/html5.png', 
    //     description: 'HTML5 é o alicerce de qualquer site que desenvolvo. Ele fornece a estrutura fundamental para o conteúdo, e a evolução dessa tecnologia tem sido essencial para criar experiências mais ricas e interativas na web.', 
    //     experiences: ['Menu de Dados Cadastrais (Bradesco)', 'Hapin (FCamara)'] 
    // },
    // { 
    //     index: 5, 
    //     levels:['full','full','full','full','full',],
    //     name: 'CSS3', 
    //     icon: 'assets/icons/css3.png', 
    //     description: 'CSS3 é crucial para criar uma experiência visual de qualidade. Com ele, consigo garantir que as interfaces fiquem bonitas e funcionais, proporcionando uma navegação agradável e intuitiva.', 
    //     experiences: ['Seção de Extrato (Bradesco)', 'MarketPlace SkyTech Solutions'] 
    // },
    { 
      index: 4, 
      levels: ['full', 'full', 'full', 'empty', 'empty'], 
      name: 'Webpack', 
      icon: 'assets/icons/webpack.png', 
      description: 'Webpack é uma ferramenta essencial para otimizar o desempenho das minhas aplicações. Com ele, consigo modularizar, minificar e gerenciar dependências de forma eficiente, garantindo builds rápidos e organizados.', 
      experiences: ['Pagé Express', 'MarketPlace SkyTech Solutions'] 
  },
  { 
      index: 5, 
      levels: ['full', 'full', 'full', 'half', 'empty'], 
      name: 'Jest', 
      icon: 'assets/icons/jest.png', 
      description: 'Jest me permite escrever testes eficientes e confiáveis para aplicações frontend. Com sua abordagem simples e poderosa, consigo garantir a qualidade do código e evitar regressões.', 
      experiences: ['Seção de Extrato (Bradesco)', 'Menu de Dados Cadastrais (Bradesco)'] 
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