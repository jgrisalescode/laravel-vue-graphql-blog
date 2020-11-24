import Vue from 'vue';
import VueRouter from 'vue-router'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
import './bootstrap';
import PostList from './PostList'
import Post from './Post'
import TopicPostList from './TopicPostList'

window.Vue = Vue;
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'index',
        component: PostList
    },
    {
        path: '/post/:id',
        name: 'post',
        component: Post
    },
    {
        path: '/topics/:slug',
        name: 'topic',
        component: TopicPostList
    }
]

Vue.use(VueApollo);

const apolloClient = new ApolloClient({
    // You should use an absolute URL here
    uri: 'http://blog-ql.test/graphql'
})

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})

const router = new VueRouter({
    mode: 'history',
    routes,
})

const app = new Vue({
    el: '#app',
    apolloProvider,
    router
});
