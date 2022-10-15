const myApp = {
 data(){
     return{
        title:'Curso de Vue 3',
        message: 'Olá',
        name: 'Wiiliam',
        lastName: 'Camargo',
        products:[
            {
                title: 'filme 01',
                description: 'filme muito legal',
                image: './assets/images/filme01.jpg',
                stars: 3,
            },
            {
                title: 'filme 02',
                description: 'filme muito legal',
                image: './assets/images/filme02.jpg',
                stars: 0,
            },
            {
                title: 'filme 03',
                description: 'filme muito legal',
                image: './assets/images/filme03.jpg',
                stars: 0,
            },
            {
                title: 'filme 04',
                description: 'filme muito legal',
                image: './assets/images/filme04.jpg',
                stars: 0,
            },
            {
                title: 'filme 05',
                description: 'filme muito legal',
                image: './assets/images/filme05.jpg',
                stars: 0,
            },
            {
                title: 'filme 06',
                description: 'filme muito legal',
                image: './assets/images/filme06.jpg',
                stars: 0,
            },
            {
                title: 'filme 07',
                description: 'filme muito legal',
                image: './assets/images/filme07.jpg',
                stars: 0,
            },
        ],
        cart: [],
     }
 },

 computed:{
     fullName () {
        return this.name + ' ' + this.lastName
     }

 },

 methods: {
    addCart (product){
       this.cart.push(product)
    },
    inCart (product){
        return this.cart.indexOf(product) != -1
    },
    removeCart(product){
        this.cart = this.cart.filter((prod, index) =>  product != prod)
    },
 },

}

const app = Vue.createApp(myApp)