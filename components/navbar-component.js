export default {
  name: 'navbar-component',
  template: /* html */ `
    <nav class="navbar sticky-top bg-white border-bottom px-3">
      <span class="navbar-brand mb-0 h1 d-flex align-items-center">
        <img src="./assets/logo.svg" alt="Medication Assistance Program Finder pill logo" class="me-2" style="height: 2rem; width: 2rem;" />
        Medication Assistance Program Finder
      </span>

      <div class="ms-auto d-flex gap-2">
        <router-link class="btn btn-outline-primary btn-sm" to="/">
          <i class="bi bi-house me-1"></i>Home
        </router-link>
        <router-link class="btn btn-outline-primary btn-sm d-flex align-items-center" to="/items">
          <i class="bi bi-card-list me-1"></i>Medications
        </router-link>
        <router-link class="btn btn-outline-primary btn-sm d-flex align-items-center" to="/saved">
          <i class="bi bi-star-fill me-1"></i>Saved
        </router-link>
        <router-link class="btn btn-outline-primary btn-sm" to="/about">
          <i class="bi bi-info-circle me-1"></i>About
        </router-link>
      </div>
    </nav>
  `,
};
