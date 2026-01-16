<script setup>
import { RouterLink } from 'vue-router'; 
import ProjectCard from '@/components/ProjectCard.vue';
import Card from '../components/Card.vue';
</script>

<template>
  <div class="row mt-2 my-4">
    <div class="col-12">
      <div 
        class="card border-0 rounded-2 overflow-hidden text-center text-white d-flex flex-column align-items-center justify-content-center p-5 shadow"
        style="background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://picsum.photos/1200/400'); background-size: cover; background-position: center; min-height: 300px;"
      >
        <h1 class="display-5 fw-bold mb-3">Welcome to My Portfolio</h1>
        <p class="lead mb-4">Exploring ideas, sharing knowledge, and connecting with readers</p>
        <div>
          <RouterLink to="/blog" class="btn btn-primary px-4 py-2 rounded-3 shadow-sm">Explore Posts</RouterLink>
        </div>
      </div>
    </div>
  </div>
  


  <div class="row g-4 mb-5"> 
    <h4><strong>Featured Projects</strong></h4>
    <div class="col-12 col-md-6 col-lg-4">
      <ProjectCard/>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <ProjectCard/>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <ProjectCard/>
    </div>
    
    <div class="col-12 text-center mt-4">
      <RouterLink to="/about" class="btn btn-outline-primary">View More Projects</RouterLink>
    </div>
  </div>
    <div class="row g-4 mb-5"> 
    <h4><strong>Featured Posts</strong></h4>
    <div class="col-12 col-md-6 col-lg-4">
      <Card title="Title 1" body="Content here..." />
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <Card title="Title 2" body="Content here..." />
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <Card title="Title 3" body="Content here..." />
    </div>
    
    <div class="col-12 text-center mt-4">
      <RouterLink to="/blog" class="btn btn-outline-primary">View More Posts</RouterLink>
    </div>
  </div>
</template>

