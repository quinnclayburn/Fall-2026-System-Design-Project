export default {
  name: 'collection-page-component',
  setup() {
    const itemsStore = Vue.inject('itemsStore');
    const bookmarksStore = Vue.inject('bookmarksStore');
    const searchTerm = Vue.ref('');
    const bookmarkNotice = Vue.ref('');
    let bookmarkTimer = null;

    const filteredItems = Vue.computed(() => {
      const key = searchTerm.value.trim().toLowerCase();

      if (!key) {
        return itemsStore.items;
      }

      return itemsStore.items.filter((item) => {
        const medicationName = String(item.medicationName || item.name || '').toLowerCase();
        const genericName = String(item.genericName || '').toLowerCase();
        const programName = String(item.programName || item.manufacturer || '').toLowerCase();

        return (
          medicationName.includes(key) ||
          genericName.includes(key) ||
          programName.includes(key)
        );
      });
    });

    const showBookmarkNotice = (itemId, message) => {
      if (bookmarkTimer) {
        clearTimeout(bookmarkTimer);
      }

      bookmarkNotice.value = { itemId, message };
      bookmarkTimer = setTimeout(() => {
        bookmarkNotice.value = '';
      }, 1200);
    };

    const toggleBookmark = (itemId) => {
      bookmarksStore.toggle(itemId);
      const isSaved = bookmarksStore.isBookmarked(itemId);
      showBookmarkNotice(itemId, isSaved ? 'Saved' : 'Unsaved');
    };

    const isBookmarked = (itemId) => {
      return bookmarksStore.isBookmarked(itemId);
    };

    return {
      itemsStore,
      bookmarksStore,
      searchTerm,
      filteredItems,
      bookmarkNotice,
      toggleBookmark,
      isBookmarked,
    };
  },
  template: /* html */ `
    <section class="container py-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h1 class="h3 mb-0">Medication Collection</h1>
        <span class="badge text-bg-light border">{{ filteredItems.length }} medications</span>
      </div>

      <p class="text-muted">Browse available medication assistance programs and manufacturer support options.</p>

      <div class="search-bar mb-4">
        <label for="medication-search" class="form-label">Search by medication or generic name</label>
        <input
          id="medication-search"
          v-model="searchTerm"
          type="search"
          class="form-control"
          placeholder="Search by brand or generic name"
          aria-label="Search medications by medication or generic name" />
      </div>

      <div v-if="itemsStore.isLoading" class="alert alert-secondary" role="status">
        Loading medications...
      </div>

      <div v-else-if="itemsStore.error" class="alert alert-danger" role="alert">
        {{ itemsStore.error }}
      </div>

      <div v-else-if="filteredItems.length === 0" class="alert alert-warning" role="alert">
        No medication programs match your search.
      </div>

      <div v-else class="row g-3">
        <div class="col-12 col-md-6 col-lg-4" v-for="item in filteredItems" :key="item.id">
          <article class="card h-100 shadow-sm border-0 medication-card position-relative">
            <button
              type="button"
              class="btn btn-light border d-flex align-items-center justify-content-center position-absolute top-0 end-0 m-2 p-0"
              style="width: 2.5rem; height: 2.5rem;"
              @click="toggleBookmark(item.id)"
              :aria-label="isBookmarked(item.id) ? 'Remove bookmark' : 'Save program'"
              :title="isBookmarked(item.id) ? 'Remove bookmark' : 'Save program'">
              <i :class="isBookmarked(item.id) ? 'bi bi-star-fill text-warning' : 'bi bi-star text-muted'" aria-hidden="true"></i>
            </button>

            <div
              v-if="bookmarkNotice && bookmarkNotice.itemId === item.id"
              class="position-absolute top-0 start-0 m-2 small text-white bg-dark rounded px-2 py-1">
              {{ bookmarkNotice.message }}
            </div>

            <img
              v-if="item.imageUrl"
              :src="item.imageUrl"
              :alt="item.medicationName || item.name"
              class="card-img-top collection-card-image object-fit-cover" />
            <div
              v-else
              class="collection-card-image d-flex align-items-center justify-content-center bg-light text-muted">
              No image available
            </div>

            <div class="card-body d-flex flex-column">
              <div class="d-flex justify-content-between align-items-start mb-2 gap-2">
                <div>
                  <h2 class="h5 card-title mb-1">{{ item.medicationName || item.name }}</h2>
                  <div class="small text-muted">{{ item.genericName || 'Generic name unavailable' }}</div>
                </div>
                <span class="badge text-bg-primary ms-2">{{ item.category || 'General' }}</span>
              </div>

              <div class="mb-2">
                <div class="fw-semibold small text-uppercase text-secondary">Program</div>
                <div class="small">{{ item.programName || item.manufacturer || 'Program unavailable' }}</div>
              </div>

              <p class="card-text text-muted flex-grow-1 collection-description">
                {{ item.description || 'No description available.' }}
              </p>

              <div class="mt-auto">
                <span class="badge rounded-pill bg-light text-secondary border">Simulated program details</span>
              </div>

              <div class="d-grid mt-3">
                <router-link :to="'/items/' + item.id" class="btn btn-outline-secondary btn-sm">
                  View details
                </router-link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
};
