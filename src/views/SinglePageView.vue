<script setup>
import {onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

    const postId = useRoute().params.id;
    const post = ref({});
    onMounted(async()=>{
        const response = await fetch(`/blogs/${postId}`);
        const data = await response.json();
        post.value = data[0]; 
    })
</script>

<template>
  <div class="row mt-2 my-4">
    <div class="col-12 mb-3">
      <button @click="$router.back()" class="btn btn-link text-decoration-none text-muted p-0 transition-base fw-semibold">
        <i class="bi bi-arrow-left me-1"></i> Back
      </button>
    </div>

    <div class="col-12">
      <div class="card border shadow-sm overflow-hidden rounded-3">
        
        <div class="p-0">
          <img src="https://picsum.photos/1200/500" class="img-fluid w-100" style="max-height: 450px; object-fit: cover;" alt="Hero">
        </div>

        <div class="p-4 p-md-5 bg-light bg-opacity-10 border-bottom">
          <div class="d-flex align-items-center">
            <div class="rounded-3 bg-dark bg-opacity-10 text-dark d-flex align-items-center justify-content-center shadow-sm overflow-hidden" style="width: 56px; height: 56px;">
              <img src="https://picsum.photos/100/100" class="img-fluid" alt="Author">
            </div>
            <div class="ms-3">
              <div class="text-uppercase small fw-bold text-secondary" style="letter-spacing: 0.5px;">Published By</div>
              <div class="fw-bold text-dark fs-5">Tajim <span class="text-muted fw-normal fs-6 mx-2">•</span> <span class="text-muted fw-normal fs-6">{{ post.date }}</span></div>
            </div>
          </div>
        </div>

        <div class="p-4 p-md-5">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <h1 class="display-6 fw-bold mb-4">{{ post.title }}</h1>
              <div class="article-content text-secondary fs-5" style="line-height: 1.8;">
                <p>
                  {{ post.body }}
                </p>
                
                <hr class="my-5 border-secondary-subtle">

                <div class="d-flex justify-content-between align-items-center">
                  <p class="small text-muted text-uppercase tracking-wider mb-0">End of Article</p>
                  
                  <div class="d-flex align-items-center gap-3">
                    <span class="small text-muted text-uppercase fw-bold tracking-wider d-none d-sm-inline">Share:</span>
                    <a href="#" class="text-primary transition-base"><i class="bi bi-facebook fs-5"></i></a>
                    <a href="#" class="text-dark transition-base"><i class="bi bi-twitter-x fs-5"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.transition-base {
  transition: all 0.2s ease-in-out;
}

.tracking-wider {
  letter-spacing: 1px;
}

.btn-link:hover {
  color: #0d6efd !important;
  transform: translateX(-3px);
}

.article-content {
  color: #4b5563;
}

.card {
  border-color: rgba(0,0,0,0.08) !important;
}

.article-content a:hover {
  opacity: 0.7;
  transform: translateY(-2px);
}
</style>

<!-- ok -->