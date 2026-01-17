<script setup>
import { onBeforeMount, ref } from 'vue';
import Card from '../components/Card.vue';
  const posts = ref([]);
  const allPosts = ref([]) ;
  const lastPostId = ref(0);

  onBeforeMount(async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    allPosts.value = data;
    posts.value = data.slice(0,10);

  })

  const loadMore = ()=>{
    lastPostId.value += 10;
    const nextPosts = allPosts.value.slice(lastPostId.value, lastPostId.value+10);
    
    posts.value = [...posts.value, ...nextPosts];
  }

  
</script>
<template>
<div class="my-4 pt-2"> 
    <div class="row">
      <div class="col-12">
        <div class="card border-1 p-4 shadow-sm">
          <span class="badge rounded-pill bg-primary bg-opacity-10 text-primary px-3 py-2 mb-3 w-fit-content" style="width: fit-content;">
            My Journal
          </span>
          <h2 class="fw-bold mb-4">Resources & Guides</h2>
          
          <div class="d-flex flex-wrap gap-2">
            <button class="btn btn-dark btn-sm rounded-pill px-3">All Posts</button>
            <button class="btn btn-outline-secondary btn-sm rounded-pill px-3">Android</button>
            <button class="btn btn-outline-secondary btn-sm rounded-pill px-3">Vue.js</button>
            <button class="btn btn-outline-secondary btn-sm rounded-pill px-3">Architecture</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row g-4 "> 
    <div v-for="post in posts" :key="post.id" class="col-12 col-md-6 col-lg-4">
      <Card :id="`${post.id}`" :title="post.title" :body="post.body" :image="`https://picsum.photos/800/600?random=${post.id}`" :avatar="`https://picsum.photos/100/100?random=${post.id}`"/>
    </div>
    <button @click="loadMore()" class="btn btn-outline-primary mx-3 p-2" >Show More Blogs</button>
  </div>
</template>