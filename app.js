import LandingPageComponent from './components/landing-page-component.js';
import AboutPageComponent from './components/about-page-component.js';
import NavbarComponent from './components/navbar-component.js';
import CollectionPageComponent from './components/collection-page-component.js';
import ItemDetailPageComponent from './components/item-detail-page-component.js';

const routes = [
  {
    path: '/',
    component: LandingPageComponent,
  },
  {
    path: '/about',
    component: AboutPageComponent,
  },
  {
    path: '/items',
    component: CollectionPageComponent,
  },
  {
    path: '/items/:id',
    component: ItemDetailPageComponent,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const BOOKMARK_STORAGE_KEY = 'medication-program-bookmarks';

const readStoredBookmarks = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(BOOKMARK_STORAGE_KEY) || '[]');
    return Array.isArray(stored) ? stored.map(String) : [];
  } catch (error) {
    return [];
  }
};

const bookmarksStore = Vue.reactive({
  ids: readStoredBookmarks(),
  isBookmarked(id) {
    return this.ids.includes(String(id));
  },
  toggle(id) {
    const normalizedId = String(id);

    if (this.ids.includes(normalizedId)) {
      this.ids = this.ids.filter((bookmarkId) => bookmarkId !== normalizedId);
    } else {
      this.ids = [...this.ids, normalizedId];
    }

    try {
      localStorage.setItem(BOOKMARK_STORAGE_KEY, JSON.stringify(this.ids));
    } catch (error) {
      // Ignore storage failures and keep the in-memory state working.
    }
  },
});

const app = Vue.createApp({
  setup() {
    const itemsStore = Vue.reactive({
      items: [],
      isLoading: true,
      error: '',
    });

    fetch('items-template.csv')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not load CSV data file.');
        }
        return response.text();
      })
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: ({ data, errors }) => {
            if (errors.length > 0) {
              itemsStore.error = 'There was a problem reading the CSV data.';
              itemsStore.items = [];
            } else {
              itemsStore.items = data.map((row) => {
                const id = String(row.id || '').trim();
                const medicationName = String(row.medication_name || row.name || '').trim();
                const genericName = String(row.generic_name || '').trim();
                const programName = String(row.program_name || row.program || '').trim();
                const manufacturer = String(row.manufacturer || '').trim();
                const description = String(row.description || '').trim();
                const category = String(row.category || '').trim();
                const conditionsTreated = String(row.conditions_treated || '').trim();
                const eligibility = String(row.eligibility || '').trim();
                const requiredDocuments = String(row.required_documents || '').trim();
                const applicationInstructions = String(row.application_instructions || '').trim();
                const programUrl = String(row.program_url || '').trim();
                const imageUrl = String(row.image_url || '').trim();

                return {
                  id,
                  name: medicationName,
                  medicationName,
                  genericName,
                  programName,
                  manufacturer,
                  description,
                  category,
                  conditionsTreated,
                  eligibility,
                  requiredDocuments,
                  applicationInstructions,
                  programUrl,
                  imageUrl,
                  location: programName || manufacturer || '',
                };
              });
              itemsStore.error = '';
            }
            itemsStore.isLoading = false;
          },
          error: () => {
            itemsStore.error = 'There was a problem parsing CSV data.';
            itemsStore.items = [];
            itemsStore.isLoading = false;
          },
        });
      })
      .catch(() => {
        itemsStore.error = 'There was a problem loading data.';
        itemsStore.items = [];
        itemsStore.isLoading = false;
      });

    Vue.provide('itemsStore', itemsStore);
    Vue.provide('bookmarksStore', bookmarksStore);

    return {};
  },
});

app.component('navbar-component', NavbarComponent);

app.use(router);
app.mount('#app');
