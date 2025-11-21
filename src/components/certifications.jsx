const Certifications = () => {
  return (
    <section className="mt-20 px-8">
      <h2 className="text-3xl font-bold text-white text-center mb-10">
        Learning Journey
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Card */}
        <div className="p-5 rounded-2xl bg-[#111] border border-purple-700/40 shadow-lg hover:shadow-purple-600/20 transition">
          <h3 className="text-xl text-purple-400 font-semibold mb-2">
            Front-End Foundations
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Learned through YouTube tutorials and full series covering HTML,
            CSS, JavaScript and UI best practices. All content applied in real
            projects available on this portfolio.
          </p>
          <span className="block text-xs text-gray-500 mt-3">
            Source: Youtube • 90h+
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-[#111] border border-purple-700/40 shadow-lg hover:shadow-purple-600/20 transition">
          <h3 className="text-xl text-purple-400 font-semibold mb-2">
            React & Ecosystem
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Hooks, Router, state management, reusable components, public API
            consumption and deploy workflows. Knowledge developed through videos
            and hands-on projects.
          </p>
          <span className="block text-xs text-gray-500 mt-3">
            Source: YouTube • 120h+
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-[#111] border border-purple-700/40 shadow-lg hover:shadow-purple-600/20 transition">
          <h3 className="text-xl text-purple-400 font-semibold mb-2">
            UI/UX & Design System
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Studies on user experience, iconography, spacing, color theory, and
            the creation of visual identities based on a gamer/dark/neon style.
          </p>
          <span className="block text-xs text-gray-500 mt-3">
            Source: YouTube • 40h+
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-[#111] border border-purple-700/40 shadow-lg hover:shadow-purple-600/20 transition">
          <h3 className="text-xl text-purple-400 font-semibold mb-2">
            Version Control & Deploy
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Git, GitHub, GitHub Pages, Vercel and modern versioning workflows.
            Applied across all personal projects.
          </p>
          <span className="block text-xs text-gray-500 mt-3">
            Source: YouTube • 18h+
          </span>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
