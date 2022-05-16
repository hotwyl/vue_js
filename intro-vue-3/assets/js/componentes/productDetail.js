const productDetail = {
    template: `
            <div class="card my-3">
            <div class="card-header d-flex justify-content-between">
                <div><strong> Titulo: </strong> <em> {{product.title}} </em></div>
                <div v-if="product.stars > 0"> <strong>Nota: </strong> <em>{{product.stars}}</em></div>
            </div>
            <div class="card-body d-flex justify-content-center">
                <img :src="product.image" :alt="product.title" class="img">
            </div>
            <div class="card-footer text-muted d-flex justify-content-center">
                <button class="btn btn-outline-danger" @click.prevent="removeCart(product)"
                    v-if="productInCart">REMOVE CART</button>
                <button class="btn btn-outline-success" @click.prevent="addCart(product)" v-else>ADD
                    CART</button>
            </div>
        </div>
        `,

    props:{
        product:{
            type: Object,
            required:true,
        },
        productInCart: {
            type: Boolean,
            required:true,
        }
    },

    data(){
        return {
            example: 123,
        }
    },

    emits:['add-prod-cart', 'remove-prod-cart'],

    methods:{
        addCart(product){
            this.$emit('add-prod-cart', product)
        },
        removeCart(product){
            this.$emit('remove-prod-cart', product)
        }
    }
}

app.component('product-detail', productDetail)
