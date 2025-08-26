export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6">
      {/* 이름 & 직무 */}
      <h1 className="text-5xl font-bold mb-4 text-center">
        HoSeok Shin<span className="text-indigo-400">.</span>
      </h1>
      <p className="text-lg text-gray-300 mb-8 text-center">
        App Developer · Digital Product Designer
      </p>

      {/* CTA 버튼 */}
      <a
        href="/projects"
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
      >
        View My Projects 🚀
      </a>
    </main>
  );
}