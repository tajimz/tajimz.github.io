<script setup>
// No logic needed for basic navigation
</script>

<template>
  <nav class="nav flex-column bg-white border shadow-sm p-3" id="nav">    
    <ul class="nav flex-column nav-pills gap-1">
      <li class="nav-item">
        <RouterLink class="nav-link d-flex align-items-center" to="/">
          <i class="bi bi-house fs-5 me-3"></i> 
          <span>Home</span>
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link d-flex align-items-center" to="/about">
          <i class="bi bi-info-circle fs-5 me-3"></i> 
          <span>About</span>
        </RouterLink>
      </li>
      
      <li class="nav-item">
        <RouterLink class="nav-link d-flex align-items-center" to="/blog">
          <i class="bi bi-journal-text fs-5 me-3"></i> 
          <span>Blog</span>
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link d-flex align-items-center" to="/contact">
          <i class="bi bi-envelope fs-5 me-3"></i> 
          <span>Contact</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
#nav {
  width: 270px;
  flex-shrink: 0;
  margin-top: 2px;
}

.nav-link {
  color: #212529; /* Standard dark text */
  transition: all 0.2s ease;
  border-radius: 8px; 
  padding: 0.8rem 1rem;
}

/* Hover state for inactive links */
.nav-link:not(.router-link-active):hover {
  background-color: #c1ddf8;
  color: #1f1f1f;
}

/* Active state (Vue Router automatically applies this class) */
.router-link-active {
  background-color: #006ff7 !important; 
  color: white !important;            
}
</style>