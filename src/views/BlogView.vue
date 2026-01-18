<script setup>
import { onMounted, ref } from 'vue';
import Card from '../components/Card.vue';
  const blogs = ref([]);
  const allBlogs = ref([]) ;
  const LastBlogId = ref(0);

  onMounted(async()=>{
    const response = await fetch('/blogs');
    const data = await response.json();
    allBlogs.value = data;
    blogs.value = data.slice(0,10);

  })

  const loadMore = ()=>{
    LastBlogId.value += 10;
    const nextblogs = allBlogs.value.slice(LastBlogId.value, LastBlogId.value+10);
    
    blogs.value = [...blogs.value, ...nextblogs];
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
            <button class="btn btn-dark btn-sm rounded-pill px-3">All blogs</button>
            <button class="btn btn-outline-secondary btn-sm rounded-pill px-3">Android</button>
            <button class="btn btn-outline-secondary btn-sm rounded-pill px-3">Vue.js</button>
            <button class="btn btn-outline-secondary btn-sm rounded-pill px-3">Architecture</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row g-4 "> 
    <div v-for="blog in blogs" :key="blog.id" class="col-12 col-md-6 col-lg-4">
      <Card :slug="blog.slug" :title="blog.title" :body="blog.body" :image="blog.image" :category="blog.category"/>
  </div>
    <button @click="loadMore()" class="btn btn-outline-primary mx-3 p-2" v-if="blogs.length < allBlogs.length">Show More Blogs</button>
  </div>
</template>

<!-- ok -->