<script setup>
defineProps({
    name: {
        type: String,
        default: 'Project Name'
    },
    description: {
        type: String,
        default: 'A brief overview of the technical challenges solved and the impact of the project.'
    },
    image: {
        type: String,
        default: 'https://picsum.photos/600/400'
    },
    languages: {
        type: Array,
        default: () => []
    },
    github: {
        type: String,
        default: 'https://github.com/tajimz'
    }
    
});


</script>

<template>
    <div class="card h-100 shadow-sm border-0 project-card">
        <div class="card-img-container">
            <img :src="image" class="card-img-top" :alt="name">
            
        </div>

        <div class="card-body p-4 d-flex flex-column">
            <div class="mb-3">
                <span v-for="language in languages" :key="language.id" 
                      class="badge bg-light text-primary border me-1 fw-medium">
                    {{ language.name }}
                </span>
            </div>

            <h5 class="card-title fw-bold mb-2 text-dark">
                {{ name }}
            </h5>
            
            <p class="card-text text-muted small mb-4">
                {{ description }}
            </p>

            <div class="mt-auto d-flex gap-2">
                
                <a :href="github" target="_blank" class="btn btn-outline-secondary btn-sm px-3 flex-grow-1">
                    <i class="bi bi-github"></i> View on Github
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.project-card {
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    overflow: hidden;
}

.project-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1) !important;
}

.card-img-container {
    height: 180px;
    position: relative;
    overflow: hidden;
}

.card-img-top {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.project-card:hover .card-img-top {
    transform: scale(1.1);
}

.card-img-overlay {
    background: rgba(13, 110, 253, 0.2);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.card-img-container:hover .card-img-overlay {
    opacity: 1;
}
</style>

<!-- ok -->