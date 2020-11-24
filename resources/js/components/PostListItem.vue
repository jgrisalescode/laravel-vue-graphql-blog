<template>
    <div>
        <router-link :to="{name: 'post', params:{id: post.id}}">
            <h4 class="text-2xl pb-3 font-semibold hover:underline">{{post.title}}</h4>
        </router-link>
        <p class="pb-3 text-gray-600">{{post.lead}}</p>
        <div class="text-sm text-gray-600">
            By {{post.author.name}} in
            <router-link :to="{name: 'topic', params:{slug: post.topic.slug}}" class="underline hover:text-black">
                {{post.topic.name}}
            </router-link>
            * 3 hours ago
        </div>
    </div>
</template>
<script>
export default {
    props: {
        post: Object
    }
}
</script>
