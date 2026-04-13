export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5EBE0]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#6F4E37] to-[#8B6F47] text-white">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Bean There
          </h1>
          <p className="text-2xl md:text-4xl font-light italic">
            Life&apos;s too short for bad coffee
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-[#6F4E37]">
            Our Menu
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">☕</div>
              <h3 className="text-2xl font-bold text-[#6F4E37] mb-2">
                Espresso
              </h3>
              <p className="text-gray-600 mb-4">
                Rich, bold, and full-bodied
              </p>
              <p className="text-3xl font-bold text-[#8B6F47]">$4</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">🥛</div>
              <h3 className="text-2xl font-bold text-[#6F4E37] mb-2">
                Latte
              </h3>
              <p className="text-gray-600 mb-4">
                Smooth espresso with steamed milk
              </p>
              <p className="text-3xl font-bold text-[#8B6F47]">$5</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">🧊</div>
              <h3 className="text-2xl font-bold text-[#6F4E37] mb-2">
                Cold Brew
              </h3>
              <p className="text-gray-600 mb-4">
                Smooth, refreshing, perfectly chilled
              </p>
              <p className="text-3xl font-bold text-[#8B6F47]">$5.50</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 text-[#6F4E37]">
            About Us
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Welcome to Bean There, where every cup tells a story. We&apos;re passionate about
            crafting the perfect coffee experience, from sourcing the finest beans to
            creating a warm, inviting space for our community.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            Our expert baristas take pride in every pour, ensuring that whether you&apos;re
            grabbing a quick espresso or settling in with a latte, you&apos;re getting
            the best coffee in Portland.
          </p>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="bg-[#6F4E37] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Visit Us</h3>
          <p className="text-xl mb-2">Bean There Coffee Shop</p>
          <p className="text-lg text-[#F5EBE0]">123 Brew St, Portland OR</p>
          <div className="mt-8 text-sm text-[#F5EBE0]">
            © 2026 Bean There. Life&apos;s too short for bad coffee.
          </div>
        </div>
      </footer>
    </div>
  );
}
