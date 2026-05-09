const CabinExperience = () => {
  return (
    <section>
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:gap-gutter">
        {/* Image */}
        <div className="order-1">
          <img
            className="aspect-video w-full rounded-2xl object-cover sm:rounded-3xl"
            alt="Luxury airplane seat"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVMFWPZ3WdWrmTe7fwjYOiMiMszclCA3YlZIsvQ2yHXyul7oLxo7D1Jo8B1sWJE0JWp1ER02NVCNX9VcDPILDy1r-D8GWKkXvYJMY6YROKbLWSlCjFBpWs7-i5rFPD1j8p0vHivnQodToH6SB9rRQIjat3YWYG5WlQdrFZn2f-JO6duezoA3fvWuQFT8nGjJQZmYr6nOipETmQuicYhq4cVvEeW810UGQOOdfu8wZqtIDmwmb6MERH08yOXewF9kKdg6eEhQAHArU"
          />
        </div>

        {/* Content */}
        <div className="order-2">
          <h3 className="mb-4 text-2xl font-h2 text-on-surface sm:text-3xl">
            The Apex Suite
          </h3>

          <p className="mb-6 text-sm leading-relaxed text-on-surface-variant sm:text-base">
            Experience unparalleled privacy and comfort in our award-winning
            First Class suites.
          </p>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "23-inch HD Display",
              "Privacy Partition",
              "Direct Aisle Access",
              "AC & USB Ports",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm text-on-surface sm:text-base"
              >
                <span className="material-symbols-outlined text-primary">
                  check_circle
                </span>

                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CabinExperience;
