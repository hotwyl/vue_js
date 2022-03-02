Vue.createApp({
    data:() =>({
        titulo: "Vuejs do jeito ninja!",
        footer: '© 2021 Company, Inc',
        usuarios: [
            {nome: 'Jon Snow'},
            {nome: 'Tyrion Lannister'},
            {nome: 'Daenerys Targaryen'},
        ],
    }),

    filters:{
        toUpperCase(str){
            return str.toUpperCase();
        }
    },

    methods:{
        enviar(){
            alert('Enviando!');
        },

    }

}).mount('#app');
