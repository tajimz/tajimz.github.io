<script setup>
import Card from '../components/Card.vue';
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
    <div class="col-12 col-md-6 col-lg-4">
      <Card title="Title 1" body="Content here..." />
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <Card title="Title 2" body="Content here..." />
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <Card title="Title 3" body="Content here..." />
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <Card title="Title 4" body="Content here..." />
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <Card title="Title 5" body="Content here..." />
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <Card title="Title 1" body="Content here..." />
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <Card title="Title 1" body="Content here..." />
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <Card title="Title 1" body="Content here..." />
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <Card title="Title 1" body="Content here..." />
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <Card title="Title 1" body="Content here..." />
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <Card title="Title 1" body="Content here..." />
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <Card title="Title 1" body="Content here..." />
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <Card title="Title 1" body="Content here..." />
    </div>
  </div>
</template>