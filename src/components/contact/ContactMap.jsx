const ContactMap = () => {
  return (
    <div className="relative h-full min-h-[300px] rounded-3xl overflow-hidden shadow-lg border border-outline-variant/20">
      {/* Map Image */}
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa9y0Noc5OdZVKsotmYn6KrAvzXgVaCH3BbDI_lg1POfrnyVNAOxTVH7c6rgfDqiPZLhxFqUP33Rl9fCZ5x-lNw_Zpgdw16C15u3KvIG1BA1LlCFcxPEZ1dGmcC-ubhwAwT0cP-CoQUXywZbg9PVa8sgYFLQtQgR3OzDvD-PTGeAKRm6Fx3cGZixiFAX0kNas9r78S7fwwHorxYIf6Mt9CWv_78Nr2uNYG_05khqZLNjOYI4qDz8EkkGs7QoOS9vfCoI-YX7JQ-WU"
        alt="New York Map"
        className="w-full h-full object-cover grayscale brightness-110 opacity-80"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest/60 to-transparent flex items-end p-stack-md">
        <button className="bg-surface/90 backdrop-blur-md px-stack-md py-stack-sm rounded-full flex items-center gap-unit shadow-md hover:bg-white transition-colors">
          <span className="material-symbols-outlined text-sm">open_in_new</span>

          <span className="font-label-sm text-label-sm">
            Open in Google Maps
          </span>
        </button>
      </div>
    </div>
  );
};

export default ContactMap;
