Vue.createApp({
    data() {
        return {
            titulo: "Vuejs do jeito ninja!",
            footer: '© 2021 Company, Inc',
            linguagens: [
                { nome: 'Javascript' },
                { nome: 'PHP' },
                { nome: 'C#' },
                { nome: 'Java' },
                { nome: 'Pyton' },
            ]
        }
    }
}).mount('#app');