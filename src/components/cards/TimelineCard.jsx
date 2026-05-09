const TimelineCard = () => {
  return (
    <div class="relative pb-stack-lg">
      <div class="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-white"></div>
      <div class="flex flex-col md:flex-row gap-stack-lg">
        <div class="flex-1">
          <h3 class="font-h3 text-h3">Day 1-2: Eternal Beginnings in Rome</h3>
          <p class="font-body-md text-on-surface-variant mt-2">
            Board your luxury sanctuary at Civitavecchia. Enjoy a private sunset
            reception as we set sail toward the horizon.
          </p>
        </div>
        <div class="w-full md:w-48 h-32 rounded-xl overflow-hidden shadow-sm">
          <img
            class="w-full h-full object-cover"
            data-alt="A sophisticated architectural detail of the Roman Colosseum captured during the golden hour. The ancient stone is bathed in warm, orange light, creating deep shadows that emphasize its historical texture. The style is editorial and clean, following a light-mode aesthetic with high contrast and premium travel vibes."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRHHxpwXfdfjH7S5ndmmtGGV-ENMhSAei6yT50BXMw73pn97KjC4YFQHog65kANx1yU0j_3fUAH-UoioMmPQs7rAI_RaG49rt6BtuICz0wwZgGeoi4rGRAZ9BQbVsYkAoRhZ0lA9IJoycOQYUZgt0d8L6r0gQni0WOjhcnNcdnjt-90BPfaphtvKz9mFZ6ydzcz5ScAXFJ01g2nhS2w56DYFbz4uQnEbam9F0mu10ZvC4Og3NVQXHlEPmp7gyxvhsE11LS9iYiRSc"
          />
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
