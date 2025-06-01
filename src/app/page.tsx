"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white px-4">
      {/* Main content center */}
      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Your Personal Journal
          </h1>
          <p className="text-lg text-gray-500 mb-10">
            A simple space to capture your thoughts, memories, and reflections.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push("/login")}
              className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
            >
              Get Started
            </button>

            <button
              onClick={() => router.push("/about")}
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-100 transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </main>

      {/* Footer always at bottom */}
      <footer className="py-6 text-center text-gray-400 text-sm">
        © 2025 Personal Journal App
      </footer>
    </div>
  );
}
