
<template>
  <nav class="d-flex align-items-center justify-content-between p-3 bg-white border-bottom shadow-sm">
    
    <div class="ps-2">
      <h3 class="mb-0 fw-bold text-dark l-spacing">
        <strong>

        TR Tajim
        </strong>
      </h3>
    </div>

    <div class="pe-2">
      <div class="input-group border rounded-1 bg-white" style="width: 450px;">
        <span class="input-group-text border-0 bg-transparent ps-3">
          <i class="bi bi-search text-muted small"></i>
        </span>
        
        <input 
          type="text" 
          class="form-control border-0 bg-transparent shadow-none py-2" 
          placeholder="Search projects..."
        >
        
        <button class="btn btn-dark px-4 fw-medium border-0 rounded-0" type="button">
          Search
        </button>
      </div>
    </div>

  </nav>
</template>

<style scoped>

.l-spacing {
  letter-spacing: 0.5px;
  font-family: 'Inter', sans-serif; 
}

.input-group:focus-within {
  border-color: #0d6efd !important; 
  box-shadow: 0 0 0 1px #0d6efd;
}
</style>