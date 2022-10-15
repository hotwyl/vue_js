import Cookie from 'js-cookie';

export default {
    auth(to, from, next) {
        const token = Cookie.get('_myapp_token');

        //fazer ajax pro backend para checar a validade do token

        if (!token) {
            next('/login');
        }

        next();
    },
}