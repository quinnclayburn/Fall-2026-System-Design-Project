export default {
  name: 'saved-page-component',
  setup() {
    const itemsStore = Vue.inject('itemsStore');
    const bookmarksStore = Vue.inject('bookmarksStore');
    const bookmarkNotice = Vue.ref('');
    let bookmarkTimer = null;

    const sortDirection = Vue.ref('asc');

    const savedItems = Vue.computed(() => {
      return itemsStore.items.filter((item) => bookmarksStore.isBookmarked(item.id));
    });

    const sortedSavedItems = Vue.computed(() => {
      const items = [...savedItems.value];
      return items.sort((a, b) => {
        const left = String(a.medicationName || a.name || '').toLowerCase();
        const right = String(b.medicationName || b.name || '').toLowerCase();

        if (sortDirection.value === 'desc') {
          return right.localeCompare(left);
        }

        return left.localeCompare(right);
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
      showBookmarkNotice(itemId, isSaved ? 'Saved' : 'Removed');
    };

    const isBookmarked = (itemId) => {
      return bookmarksStore.isBookmarked(itemId);
    };

    return {
      itemsStore,
      bookmarkNotice,
      savedItems,
      sortedSavedItems,
      sortDirection,
      toggleBookmark,
      isBookmarked,
    };
  },
  template: /* html */ `
    <section class="container py-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h1 class="h3 mb-0">Saved Medications</h1>
        <span class="badge text-bg-light border">{{ savedItems.length }} saved</span>
      </div>

      <div class="d-flex justify-content-end mb-3">
        <label class="d-flex align-items-center gap-2 small text-muted mb-0" for="saved-sort-order">
          Sort
          <select id="saved-sort-order" v-model="sortDirection" class="form-select form-select-sm" style="width: auto;">
            <option value="asc">A–Z</option>
            <option value="desc">Z–A</option>
          </select>
        </label>
      </div>

      <p class="text-muted">Quick access to medications you have bookmarked for later review.</p>

      <div v-if="itemsStore.isLoading" class="alert alert-secondary" role="status">
        Loading saved medications...
      </div>

      <div v-else-if="itemsStore.error" class="alert alert-danger" role="alert">
        {{ itemsStore.error }}
      </div>

      <div v-else-if="savedItems.length === 0" class="alert alert-warning" role="alert">
        No saved medications yet. Save a medication from the collection to see it here.
      </div>

      <div v-else class="row g-3">
        <div class="col-12 col-md-6 col-lg-4" v-for="item in sortedSavedItems" :key="item.id">
          <article class="card h-100 shadow-sm border-0 medication-card position-relative">
            <div class="position-absolute top-0 end-0 m-2 d-flex align-items-center gap-2">
              <div
                v-if="bookmarkNotice && bookmarkNotice.itemId === item.id"
                class="small text-white bg-dark rounded px-2 py-1">
                {{ bookmarkNotice.message }}
              </div>

              <button
                type="button"
                class="btn btn-light border d-flex flex-column align-items-center justify-content-center p-0"
                style="width: 2.5rem; height: 2.5rem;"
                @click="toggleBookmark(item.id)"
                :aria-label="isBookmarked(item.id) ? 'Remove bookmark' : 'Save program'"
                :title="isBookmarked(item.id) ? 'Remove bookmark' : 'Save program'">
                <i :class="isBookmarked(item.id) ? 'bi bi-star-fill text-warning' : 'bi bi-star text-muted'" aria-hidden="true" style="font-size: 0.9rem;"></i>
                <span
                  v-if="isBookmarked(item.id)"
                  class="text-dark"
                  style="font-size: 0.52rem; line-height: 1; letter-spacing: -0.02em; max-width: 2.6rem; text-align: center; white-space: nowrap;">
                  Saved
                </span>
              </button>
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
