Vue.createApp({
    data:() =>({
        titulo: "Vuejs do jeito ninja!",
        footer: '© 2021 Company, Inc',
    }),

    methods:{
        enviar(){
            alert('Enviando!');
        },

    }

}).mount('#app');
