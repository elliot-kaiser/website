import Link from "next/link";
import Nav from "./components/Nav";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        <Nav active="projects" />
        <div className="flex flex-col items-center justify-center py-32 space-y-6 text-center">
          <p className="text-8xl font-extrabold text-green-400">404</p>
          <h1 className="text-3xl font-bold text-white">Page not found</h1>
          <p className="text-zinc-400 max-w-sm">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="px-5 py-2.5 rounded-lg bg-green-700 hover:bg-green-600 text-white font-medium transition"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    </main>
  );
}

