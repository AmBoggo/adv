//Efeito do título parte principal parecer depois de alguns segundos
setTimeout(function(){
    document.querySelector('.hidden-paragraph').classList.add("visible-paragraph")
}, 300)


// Efeito da lista de itens incluir informação e mudar estilo botões.
const listItems = document.querySelectorAll('.itens');
const descricao = document.querySelectorAll('.sem');

document.getElementById('missao').classList.add('ativo')
listItems[0].classList.add('itemAtivo')

// Adiciona um evento de clique a cada item da lista
listItems.forEach(item => {
    item.addEventListener('click', () => {
        const selec = item.classList[1]
        const itemDesc = document.getElementById(selec)
        listItems.forEach(i => i.classList.remove('itemAtivo'))
        descricao.forEach(i => i.classList.remove('ativo'))
        item.classList.add('itemAtivo')
        itemDesc.classList.add('ativo')
  });
});

//toggle menu burger

const meuBotao = document.getElementById("ativaMenu");
const ativo = document.getElementById("toggle");
const lateral = document.getElementById("latAtivo");

meuBotao.addEventListener("click", function() {
  ativo.classList.toggle("toggle");
});

lateral.addEventListener("click", function() {  
    ativo.classList.toggle("toggle");
});