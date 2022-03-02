var app = Vue.createApp({
    data:() =>({
        titulo: "Vuejs do jeito ninja!",
        footer: '© 2021 Company, Inc',
        nome:  'Jon Snow',
        firstName: "",
        lastName: "",
        // fullName: "",
    }),

    computed:{
        toUpperCase(){
            return this.nome.toUpperCase();
        },
        
        fullName(){
            return this.firstName + ' ' + this.lastName;
        }
    },

    watch: {
        fullName(newValue){
            this.updateUser();
        },

        // firstName(newValue){
        //     this.fullName = newValue + ' ' + this.lastName;
        // },

        // lastName(newValue){
        //     this.fullName = this.firstName + ' ' + newValue;
        // },
    },

    methods:{
        // enviar(){
        //     alert('Enviando!');
        // },
        updateUser(){
            console.log('Usuário atualizado!');
        }
    }

}).mount('#app');
