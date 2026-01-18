<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
import {  onMounted, ref } from 'vue';

  const projects = ref([]);
  const allProjects = ref([]);
  const lastProjectId = ref(0);

  onMounted(async()=>{
    const response = await fetch('/projects');
    const data = await response.json();
    allProjects.value = data;
    projects.value = data.slice(0,10);

  })

  const loadMore = ()=>{
    lastProjectId.value += 10;
    const nextProjects = allProjects.value.slice(lastProjectId.value, lastProjectId.value+10);
    projects.value = [...projects.value, ...nextProjects];
  }
</script>

<template>
    <div class="row mt-2 my-4">
    <div class="col-12">
      <div class="card border-1 shadow-sm p-4">
            <h2><strong>Passionate Developer Building for Social Impact</strong></h2>
            <p class="mt-1">Welcome to my portfolio.<br/> I am a Passionate app & web developer dedicated to building innovative solutions. Offering free app & web development for non-profit organizations.<br/><br/>Feel free to ask me to develop anything for good. </p>
            <a class="btn btn-outline-primary px-4" href="https://facebook.com/trtajim" target="_blank">Let's build something for good</a>
        </div>
    </div>
  </div>
  
  <div class="row g-4"> 
    <h4><strong>Projects I've done</strong></h4>
    <div v-for="project in projects" :key="project.id" class="col-12 col-md-6 col-lg-4">
      <ProjectCard :name="project.name" :description="project.description" :image="project.image" :github="project.github" :languages="project.languages"/>
      
    </div>
    

    
    
  </div>
  <div class="row mt-5" v-if="projects.length < allProjects.length" ><button @click="loadMore()" class="btn btn-outline-primary mx-3 p-2" >Show More Projects</button></div>
</template>

<!-- ok -->