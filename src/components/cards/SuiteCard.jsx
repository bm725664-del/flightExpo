const SuiteCard = () => {
  return (
    <div class="bg-white rounded-2xl overflow-hidden soft-shadow border border-outline-variant/30 flex flex-col">
      <div class="h-48 overflow-hidden">
        <img
          class="w-full h-full object-cover"
          data-alt="A modern and elegant ship cabin featuring a private veranda with views of the sea. The interior uses light wood tones, crisp white linens, and soft blue accents. The lighting is natural and bright, creating a spacious and airy feel consistent with a premium travel experience."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_bF4D1ca__ekhHhSjGeUcDQ0tspJOHDv3hlexOerzsWKpcCxXyqMNva0AV5SMmIpRuoEPC3YgD7XN9x14ErkEdozt6XrxLWL3MXvAVDrxAjSwNjIEgtWJIzBOg2898-NNfQARq9fYzB_6y2jf9OQHmTYnPxCf8X3h4sxrl2Wobqetbuax_tO24qZ2NdTbuQ-VCxJvOhOZOWQf-Szk0Titjbnancq-1LplIFA0CgJJEl7iIULWY0V0lTx45Zz2GtDbZbAZkbpoOls"
        />
      </div>
      <div class="p-stack-lg flex-1">
        <h4 class="font-h3 text-h3 mb-2">Veranda Suite</h4>
        <div class="text-on-surface-variant text-label-sm uppercase tracking-wider mb-4">
          320 SQ. FT. • PRIVATE BALCONY
        </div>
        <p class="text-body-md text-on-surface-variant mb-stack-lg">
          Floor-to-ceiling glass doors opening to a private furnished veranda.
        </p>
        <button class="w-full py-3 rounded-full border border-primary text-primary font-label-md hover:bg-primary hover:text-white transition-all">
          Select Suite
        </button>
      </div>
    </div>
  );
};

export default SuiteCard;
