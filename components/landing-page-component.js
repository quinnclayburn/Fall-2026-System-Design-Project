export default {
  name: 'landing-page-component',
  template: /* html */ `
    <div class="container py-4">
      <h1 class="mb-3">Medication Assistance Program Finder</h1>
      <p class="lead">Browse medication support programs and quickly find the information needed to help patients access treatment.</p>
      <router-link to="/items" class="btn btn-primary mb-4"><i class="bi bi-list-check me-1"></i>View Medications</router-link>

      <h2 class="h4 mt-3">How this app helps</h2>
      <p>
        This application helps healthcare staff search medication assistance programs by brand name or generic name, review program details, and find key information such as eligibility requirements, required documents, and application instructions.
      </p>
      <p>
        The medication collection is designed to make program information easier to find in one place, helping staff compare options and bookmark programs they use often.
      </p>
    </div>
  `,
};
