/* monta tela */
const app = {

    data() {
        return {
            message: 'Hello Vue!',
            count: 0,
            author: {
                firstName: 'John',
                lastName: 'Doe',
                books: [
                    'Vue 1 - Basic Guide',
                    'Vue 2 - Advanced Guide',
                    'Vue 3 - he Mystery',
                ]
            },
            mostrar_div:true,
            nome: '',
            options: [
                'opção 1',
                'opção 2',
                'opção 3',
                'opção 4',
                'opção 5'
            ],
            select:'',
            qtd:0,
        }
    },

    /* criação da aplicação */
    created() {
        console.log('created')
    },

    /* carregamento da aplicação */
    mounted() {
        console.log('mounted')

        let teste = document.querySelector(".div")
        console.log(teste)
    },

    /* executa automaticamente*/
    computed: {
        now() {
            return Date.now()
        },
        publishedBooksMessage() {
            return this.author.books.length > 0 ? 'Yes' : 'No'
        },
        calculateBooksPublished() {
            return this.author.books.length
        },
        fullName() {
            return this.author.firstName + ' ' + this.author.lastName
        }
    },

    /* executa na chamada */
    methods: {
        increment() {
            this.count++
        },

        mostrar(){
            this.mostrar_div = true
        },
        esconder(){
            this.mostrar_div = false
        },

        requisicao() {
            var url = "https://pokeapi.co/api/v2/pokemon";

            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                success: function(response) {
                    console.log(response.results)
                }
            });

            axios({
                method: "get",
                url: url,
                responseType: "json",
            }).then(function (response) {
                console.log(response.data.results)
            });

            fetch(url)
                .then(response => response.json())
                .then(console.log);
        },

        alert(){

            /*switch alert */

            let link = "<a href=''>info</a>";

            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success btn-sm',
                    cancelButton: 'btn btn-danger btn-sm'
                },
                buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
                title: 'Tem certeza?',
                html: "Você não será capaz de reverter isso! " + link,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sim, executar',
                cancelButtonText: 'Não, executar',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire(
                        'Sucesso',
                        'Sua solicitação executada com sucesso.',
                        'success'
                    )
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        'Cancelado',
                        'Sua solicitação foi cancelada.',
                        'error'
                    )
                }
            })
        }

    },

    /* observe */
    watch:{
        select: function(){
            this.qtd++;
        }
    }

}

/* renderiza tela */
Vue.createApp(app).mount('#app')