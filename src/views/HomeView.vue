<script setup>
import { RouterLink } from 'vue-router'; 
import ProjectCard from '@/components/ProjectCard.vue';
import Card from '../components/Card.vue';
import {  onMounted, ref } from 'vue';

const blogs = ref([]);
const projects = ref([]);

onMounted( async()=>{
  const blogResponse = await fetch('/featured-blogs');
  const projectResponse = await fetch('/featured-projects');
  blogs.value = await blogResponse.json();
  projects.value = await projectResponse.json();
})

</script>

<template>
  <div class="row mt-2 my-4">
    <div class="col-12">
      <div 
        class="card border-0 rounded-2 overflow-hidden text-center text-white d-flex flex-column align-items-center justify-content-center p-5 shadow"
        style="background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://picsum.photos/1200/400'); background-size: cover; background-position: center; min-height: 300px;"
      >
        <h1 class="display-5 fw-bold mb-3">Building Digital Experiences That Matter</h1>
        <p class="lead mb-4">I bridge the gap between complex problems and elegant solutions. Explore my work, my process, and how we can collaborate.</p>
        <div>
          <RouterLink to="/about" class="btn btn-primary px-4 py-2 rounded-3 shadow-sm">Explore Projects</RouterLink>
        </div>
      </div>
    </div>
  </div>
  


  <div class="row g-4 mb-5"> 
    <h4><strong>Featured Projects</strong></h4>
     <div v-for="project in projects" :key="project.id" class="col-12 col-md-6 col-lg-4">
      <ProjectCard :name="project.name" :image="project.image" :description="project.description" :github="project.github" :languages="project.languages" />
    </div>

    <div class="col-12 text-center mt-4">
      <RouterLink to="/about" class="btn btn-outline-primary">View More Projects</RouterLink>
    </div>
      <h4 class="mt-5"><strong>Featured Posts</strong></h4>

    <div v-for="blog in blogs" :key="blog.id" class="col-12 col-md-6 col-lg-4">
      <Card :slug="blog.slug" :title="blog.title" :body="blog.body" :image="blog.image" :avatar="blog.avatar" :date="blog.date" :category="blog.category" />
    </div>
    <div class="col-12 text-center mt-4">
      <RouterLink to="/blog" class="btn btn-outline-primary">View More Posts</RouterLink>
    </div>
  </div>
</template>
<!-- ok -->
