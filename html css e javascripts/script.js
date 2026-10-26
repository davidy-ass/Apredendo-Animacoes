// Criação de um timeline do GSAP com animões sicronizadas com o scroll

var tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.two', //começo da animação
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
        markers: true, //DEPURAÇÃO
    }
})

tl.to(
    '#fanta',
    {
        top: '115%', // MOVE O ELEMENTO COM ID FANTA PARA 120% DO TOPO
        left: '0%',
    },
    'orange'
); //NOMEANDO ENTRE TRECHO DE ANIMAÇÃO COMO 'ORANGE' PARA SICRONIZAÇÃO

tl.to(
    '#laranga-contada',
    {
        top: '160%', // MOVE O ELEMENTO COM ID FANTA PARA 120% DO TOPO
        left: '23%', // MOVE O ELEMENTO PARA 23% DA ESQUERDA
    },
    'orange'
); // SICROMIZADO COM A ANIMAÇÃO NOMEADA 'ORANGE'

tl.to(
    '#laranja',
    {
        width: '15%', // REDUZ A LARGURA DO ELEMENTO COM ID 'ORANGE' PARA 15%
        top: '160%', // MOVE O ELEMENTO COM ID FANTA PARA 160% DO TOPO
        right: '10%', // MOVE O ELEMENTO PARA 10% DA DIREITA
    },
    'orange'
); //NOMEADO ENTRE TRECHO DE ANIMAÇÃO COMO 'ORANGE' PARA SICRONIZAÇÃO

tl.to(
    '#folha',
    {   
        top: '120%', // MOVE O ELEMENTO COM ID FANTA PARA 120% DO TOPO
        rotate: '530%',// MOVE O ELEMENTO COM ID 'LEAF' PARA 110% DO TOPO
        left: '70%', // MOVE O ELEMENTO PARA 10% DA ESQUERDA
    },
    'orange'
); // SICRONIZADO COM A ANIMAÇÃO NOMEADA 'ORANGE'

tl.to(
    '#folha2',
    {
        top: '110%', // MOVE O ELEMENTO COM ID FANTA PARA 120% DO TOPO
        rotate: '530', // ROTACIONA O ELEMENTO EM 130 GRAUS
        left: '0%',
    },
    'orange'
); //NOMEADO ENTRE TRECHO DE ANIMAÇÃO COMO 'ORANGE' PARA SICRONIZAÇÃO

// CRIANDO OUTRA TIMELINE

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.three',
        start: '0% 95%',
        end: '20% 50%', // FIM DA ANIMAÇÃO (TOPO DA TELA ATINGE 50% DA ALTURA QUANDO ESTIVER 20% DA SEÇÃO .three)
        scrub: true, 
        markers: true, //DEPURAÇÃO
    },
});


tl2.to(
    '#lemon',
    {
        rotate: '-90deg', // INICIA O ELEMENTO FORA DA TELA, Á ESQUERDA (-100%)
        left: '-100%', // INICIA O ELEMENTO LIGEIRAMENTE ABAIXO DA TELA (110% D0 TOPO)
        top: '110%', //  INICIA O ELEMENTO COM CLASSE 'lemon' ROTACIONADO
    },
    'ca'
);