<script setup>
defineProps({
    title: {
        type: String,
        default: 'The Future of Sustainable Design'
    },
    body: {
        type: String,
        default: 'Exploring how minimalist architecture and renewable materials are shaping the urban landscapes of 2026...'
    },
    category: {
        type: String,
        default: 'Architecture'
    },
    date: {
        type: String,
        default: '24 May, 2026'
    },
    image: {
        type: String,
        default: 'https://picsum.photos/800/600'
    },
    avatar: {
        type: String,
        default: 'https://picsum.photos/100/100'
    },
    slug: {
        type: String,
        required: true
    }});
    
</script>

<template>
    <div class="card h-100 border shadow-sm overflow-hidden custom-hover-effect">
        
        <div class="ratio ratio-16x9">
            <img :src="image" class="card-img-top object-fit-cover" :alt="title">
        </div>

        <div class="card-body p-4 d-flex flex-column">
            <div class="d-flex align-items-center justify-content-between mb-3">
                <div class="d-flex align-items-center">
                    <img :src="avatar" class="rounded-circle border border-2 me-2" width="32" height="32" alt="Author">
                    <span class="badge bg-light text-primary border">
                        {{ category }}
                    </span>
                </div>
                <small class="text-muted fw-medium">{{ date }}</small>
            </div>

            <h5 class="card-title fw-bold mb-2 text-line-clamp-2">
                {{ title }}
            </h5>

            <p class="card-text text-muted small mb-4 text-line-clamp-2">
                {{ body }}
            </p>

            <div class="mt-auto pt-3 border-top">
                <RouterLink :to="`/blog/${slug}`" class="link-primary text-decoration-none fw-bold small text-uppercase d-inline-flex align-items-center">
                    Read Article <i class="bi bi-chevron-right ms-1"></i>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>

.custom-hover-effect {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.custom-hover-effect:hover {
    transform: translateY(-4px);
    box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important; 
}

.text-line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

}

h5.text-line-clamp-2 {
    min-height: 3rem; 
}
</style>

<!-- ok -->