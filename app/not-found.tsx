import Link from "next/link";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto flex max-w-4xl flex-col items-center px-6 pb-24 pt-32 text-center">
        <p className="mb-4 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
          Page Not Found
        </p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
          The page you were looking for is not available.
        </h1>
        <p className="mb-10 max-w-2xl text-lg leading-8 text-slate-600">
          You can head back to the homepage, explore our courses, or browse career resources to keep moving.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-500"
          >
            Go to Homepage
          </Link>
          <Link
            href="/courses"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-slate-900 transition-colors hover:bg-slate-100"
          >
            View Courses
          </Link>
          <Link
            href="/blog"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-slate-900 transition-colors hover:bg-slate-100"
          >
            Read the Blog
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
