

<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
import { onBeforeMount, ref } from 'vue';

  const projects = ref([]);
  const allProjects = ref([]);
  const lastProjectId = ref(0);
  onBeforeMount(async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    allProjects.value = data;
    projects.value = data.slice(10,20);

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
            <h2><strong>About Me</strong></h2>
            <p class="mt-1">Welcome to my portfolio.<br/> I am a Passionate app developer dedicated to building innovative solutions. Offering free app development for non-profit organizations.<br/><br/>Fell free to ask me to develop anything for good. </p>
            <button class="btn btn-outline-primary px-4">Let's build something for good</button>
        </div>
    </div>
  </div>
  
  <div class="row g-4"> 
    <h4><strong>Projects I've done</strong></h4>
    <div v-for="project in projects" :key="project.id" class="col-12 col-md-6 col-lg-4">
      <ProjectCard :title="`${project.title}`" :body="`${project.body}`" :image="`https://picsum.photos/600/400?random=${project.id}`"/>
    </div>
    <button @click="loadMore()" class="btn btn-outline-primary mx-3 p-2" >Show More Projects</button>

    
    
  </div>
</template>