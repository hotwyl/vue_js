Vue.createApp({
    data() {
        return {
            titulo: "Vuejs do jeito ninja!",
            footer: '© 2021 Company, Inc',
            btnClassLimpar: 'btn btn-danger btn-sm',
            btnClassEnviar: 'btn btn-primary btn-lg',
            btnStyleLimpar: [],
            btnStyleEnviar: {},
        }
    }
}).mount('#app');