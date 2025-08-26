export default function Projects() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* 프로젝트 카드 예시 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Vocab King</h2>
          <p className="text-gray-400 mb-4">
            A desktop vocabulary learning app built with Electron and React.
          </p>
          <a
            href="https://github.com/username/vocab-king"
            target="_blank"
            className="text-indigo-400 hover:underline"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </main>
  );
}