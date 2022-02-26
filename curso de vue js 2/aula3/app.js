Vue.createApp({
    data() {
        return {
            cardTitulo: 'Aula 3',
            cardSubTitulo: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            cardText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora recusandae maxime molestiae vero omnis officiis, tempore quo possimus id eos laudantium corrupti repellendus veritatis explicabo asperiores unde aliquam qui odit!',
            footer: '© 2021 Company, Inc',
            status: true,
            usuario: {
                id: 1,
                nome: "Jon Snow",
                profissao: "ator",
            }
        }
    }
}).mount('#app');