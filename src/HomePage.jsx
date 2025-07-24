export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <section className="bg-black text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">TruePath Fitness</h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto">
          Fitness designed to fit your life — not consume it. Sustainable coaching to help you move better, live longer, and feel stronger.
        </p>
        <button className="mt-8 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
          Get Started
        </button>
      </section>
    </main>
  );
}