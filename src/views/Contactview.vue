<template>
  <div class="row mt-2 my-4">
    <div class="col-12">
      <div class="card border shadow-sm overflow-hidden rounded-3">
        <div class="p-4 p-md-5 border-bottom bg-light bg-opacity-50">
          <div class="row">
            <div class="col-lg-8">
              <h2 class="fw-bold mb-3">Get in touch</h2>
              <p class="text-muted mb-0">
                Have a question or want to collaborate? I am a passionate app developer dedicated to building innovative solutions. 
              </p>
            </div>
          </div>
        </div>

        <div class="p-4 p-md-5">
          <div class="row g-4">
            <div class="col-md-6">
              <label class="form-label small fw-bold text-secondary text-uppercase">Name</label>
              <input type="text" class="form-control form-control-lg fs-6 shadow-none border-secondary-subtle" placeholder="Your Name">
            </div>
            <div class="col-md-6">
              <label class="form-label small fw-bold text-secondary text-uppercase">Email Address</label>
              <input type="email" class="form-control form-control-lg fs-6 shadow-none border-secondary-subtle" placeholder="name@example.com">
            </div>
            <div class="col-12">
              <label class="form-label small fw-bold text-secondary text-uppercase">Subject</label>
              <input type="text" class="form-control form-control-lg fs-6 shadow-none border-secondary-subtle" placeholder="What is this regarding?">
            </div>
            <div class="col-12">
              <label class="form-label small fw-bold text-secondary text-uppercase">Message</label>
              <textarea class="form-control shadow-none border-secondary-subtle" rows="5" placeholder="How can I help you?"></textarea>
            </div>
            <div class="col-12 mt-4">
              <button class="btn btn-primary px-5 py-2 fw-bold shadow-sm rounded-2 transition-base">
                Send Message <i class="bi bi-send-fill ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row g-4 mb-5">
    <div class="col-md-4">
      <div class="card border shadow-sm h-100 p-4 border-hover-primary transition-base">
        <div class="d-flex align-items-center">
          <div class="rounded-3 bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center" style="width: 48px; height: 48px;">
            <i class="bi bi-envelope-fill fs-5"></i>
          </div>
          <div class="ms-3">
            <div class="text-uppercase small fw-bold text-muted" style="letter-spacing: 0.5px;">Email</div>
            <div class="fw-semibold text-break">com.tajim@gmail.com</div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card border shadow-sm h-100 p-4 border-hover-success transition-base">
        <div class="d-flex align-items-center">
          <div class="rounded-3 bg-success bg-opacity-10 text-success d-flex align-items-center justify-content-center" style="width: 48px; height: 48px;">
            <i class="bi bi-geo-alt-fill fs-5"></i>
          </div>
          <div class="ms-3">
            <div class="text-uppercase small fw-bold text-muted" style="letter-spacing: 0.5px;">Location</div>
            <div class="fw-semibold text-dark">Rangpur, Bangladesh</div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card border shadow-sm h-100 p-4 border-hover-dark transition-base position-relative">
        <div class="d-flex align-items-center">
          <div class="rounded-3 bg-dark bg-opacity-10 text-dark d-flex align-items-center justify-content-center" style="width: 48px; height: 48px;">
            <i class="bi bi-github fs-5"></i>
          </div>
          <div class="ms-3">
            <div class="text-uppercase small fw-bold text-muted" style="letter-spacing: 0.5px;">GitHub</div>
            <a href="https://github.com/tajimz" target="_blank" class="text-decoration-none stretched-link fw-semibold text-dark">github.com/tajimz</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Smooth transition for hover effects */
.transition-base {
  transition: all 0.2s ease-in-out;
}

/* UI-only Hover Interactions */
.border-hover-primary:hover { border-color: #0d6efd !important; transform: translateY(-3px); }
.border-hover-success:hover { border-color: #198754 !important; transform: translateY(-3px); }
.border-hover-dark:hover { border-color: #212529 !important; transform: translateY(-3px); }

/* Improved visual focus for inputs */
.form-control:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.15);
}
</style>