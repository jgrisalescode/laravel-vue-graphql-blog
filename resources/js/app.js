import Vue from 'vue';
import VueRouter from 'vue-router'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
import moment from 'moment'
import './bootstrap';
import PostList from './PostList'
import Post from './Post'
import TopicPostList from './TopicPostList'
import AuthorPostList from './AuthorPostList'
import NotFound from './Notfound'

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
    },
    {
        path: '/authors/:id',
        name: 'author',
        component: AuthorPostList
    },
    {
        path: '*',
        name: '404',
        component: NotFound
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

Vue.filter("timeago", date => moment(date).fromNow())
Vue.filter("longdate", date => moment(date).format('MMMM Do YYYY'))

const app = new Vue({
    el: '#app',
    apolloProvider,
    router
});
