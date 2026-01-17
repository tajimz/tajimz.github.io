<script setup>
defineProps({
    title: {
        default: 'The Future of Sustainable Design'
    },
    body: {
        default: 'Exploring how minimalist architecture and renewable materials are shaping the urban landscapes of 2026...'
    },
    category: {
        default: 'Architecture'
    },
    date: {
        default: '24 May, 2026'
    },
    image: {
        default: 'https://picsum.photos/800/600'
    },
    avatar: {
        default: 'https://picsum.photos/100/100'
    },
    id: {
        default: '1'
    }
});
</script>

<template>
    <div class="card h-100 border-1 shadow-sm overflow-hidden hover-shadow-lg">
        <div class="ratio ratio-16x9">
            <img :src="image" class="object-fit-cover" alt="Header Image">
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

            <h5 class="card-title fw-bold mb-2">
                {{ title }}
            </h5>
            <p class="card-text text-muted small mb-4 text-truncate">
                {{ body }}
            </p>

            <div class="mt-auto pt-3 border-top">
                <RouterLink :to="`/blog/${id}`" class="link-primary text-decoration-none fw-bold small text-uppercase">
                    Read Article <i class="bi bi-chevron-right ms-1"></i>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.hover-shadow-lg {
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.hover-shadow-lg:hover {
    transform: translateY(-4px);
    box-shadow: 0 1rem 3rem rgba(0,0,0,.125) !important;
}
.object-fit-cover {
    object-fit: cover;
}
.text-truncate {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.card-title {
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Limits title to 2 lines */
    -webkit-box-orient: vertical;
    overflow: hidden;
    min-height: 3rem; /* Keeps cards aligned even with 1-line titles */
}
</style>