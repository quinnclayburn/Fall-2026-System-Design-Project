export default {
  name: 'item-detail-page-component',
  setup() {
    const itemsStore = Vue.inject('itemsStore');
    const bookmarksStore = Vue.inject('bookmarksStore');
    const route = VueRouter.useRoute();

    const selectedItem = Vue.computed(() => {
      return itemsStore.items.find((item) => item.id === route.params.id);
    });

    const isBookmarked = Vue.computed(() => {
      return bookmarksStore.isBookmarked(route.params.id);
    });

    const toggleBookmark = () => {
      bookmarksStore.toggle(route.params.id);
    };

    return {
      itemsStore,
      bookmarksStore,
      selectedItem,
      isBookmarked,
      toggleBookmark,
    };
  },
  template: /* html */ `
    <section class="container py-4">
      <router-link to="/items" class="btn btn-link ps-0 mb-3">← Back to collection</router-link>

      <div v-if="itemsStore.isLoading" class="alert alert-secondary" role="status">
        Loading item details...
      </div>

      <div v-else-if="itemsStore.error" class="alert alert-danger" role="alert">
        {{ itemsStore.error }}
      </div>

      <div v-else-if="!selectedItem" class="alert alert-warning" role="alert">
        Item not found.
      </div>

      <article v-else class="card shadow-sm border-0 overflow-hidden">
        <img
          v-if="selectedItem.imageUrl"
          :src="selectedItem.imageUrl"
          :alt="selectedItem.name"
          class="item-detail-image w-100 object-fit-cover" />
        <div
          v-else
          class="item-detail-image w-100 d-flex align-items-center justify-content-center bg-light text-muted">
          No image available
        </div>

        <div class="card-body p-4">
          <div class="d-flex align-items-center justify-content-between gap-2 mb-2">
            <div class="d-flex align-items-center gap-2">
              <h1 class="h3 mb-0">{{ selectedItem.medicationName || selectedItem.name }}</h1>
              <span class="badge text-bg-primary">{{ selectedItem.category || 'General' }}</span>
            </div>
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
              @click="toggleBookmark">
              {{ isBookmarked ? 'Remove bookmark' : 'Save program' }}
            </button>
          </div>

          <div class="mb-3">
            <div class="small text-uppercase fw-semibold text-secondary">Generic name</div>
            <div>{{ selectedItem.genericName || 'Generic name unavailable' }}</div>
          </div>

          <div class="mb-3">
            <div class="small text-uppercase fw-semibold text-secondary">Conditions treated</div>
            <div>{{ selectedItem.conditionsTreated || 'Condition information unavailable' }}</div>
          </div>

          <div class="mb-3">
            <div class="small text-uppercase fw-semibold text-secondary">Program</div>
            <div>{{ selectedItem.programName || selectedItem.manufacturer || 'Program unavailable' }}</div>
          </div>

          <div class="mb-3">
            <span class="badge rounded-pill bg-light text-secondary border">Simulated program details</span>
          </div>

          <p class="lead mb-3">{{ selectedItem.description || 'No description available.' }}</p>
          <p class="mb-0"><strong>Manufacturer:</strong> {{ selectedItem.manufacturer || 'N/A' }}</p>
          <p class="mb-0 mt-2"><strong>Eligibility:</strong> {{ selectedItem.eligibility || 'N/A' }}</p>
          <p class="mb-0 mt-2"><strong>Required documents:</strong> {{ selectedItem.requiredDocuments || 'N/A' }}</p>
          <p class="mb-0 mt-2"><strong>Application instructions:</strong> {{ selectedItem.applicationInstructions || 'N/A' }}</p>
          <p class="mb-0 mt-2"><strong>Program website:</strong>
            <a v-if="selectedItem.programUrl" :href="selectedItem.programUrl" target="_blank" rel="noopener noreferrer">{{ selectedItem.programUrl }}</a>
            <span v-else>N/A</span>
          </p>
        </div>
      </article>
    </section>
  `,
};
