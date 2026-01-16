<script setup>
defineProps({
    title: {
        default: 'Post title'
    },
    body: {
        default: 'This is a brief description of the content inside this card...'
    },
    category: {
        default: 'General'
    },
    image: {
        default: 'https://picsum.photos/800/600'
    },
    avatar: {
        default: 'https://picsum.photos/100/100'
    }
});
</script>

<template>
    <div class="card h-100 shadow-sm border-1 transition-hover">
        <div class="card-img-top-container">
            <img :src="image" class="card-img-top" alt="Header Image">
        </div>

        <div class="card-body p-4">
            <div class="d-flex align-items-center mb-3">
                <img :src="avatar" class="rounded-circle me-2" width="40" height="40" alt="Author">
                <span class="badge rounded-pill bg-primary-soft text-primary">
                    {{ category }}
                </span>
            </div>

            <h4 class="card-title fw-bold mb-2">
                {{ title}}
            </h4>
            <p class="card-text text-muted mb-4">
                {{ body}}
            </p>

            <div class="mt-auto">
                <a href="#" class="text-decoration-none fw-semibold d-inline-flex align-items-center">
                    Read More <i class="bi bi-arrow-right ms-2"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.transition-hover {
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.transition-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 1rem 3rem rgba(0,0,0,.1) !important;
}

.card-img-top-container {
    height: 200px;
    overflow: hidden;
}

.card-img-top {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.bg-primary-soft {
    background-color: #e7f1ff;
}
</style>