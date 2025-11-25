import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-gray-50">
      <h1 className="text-6xl font-bold text-gray-900 mb-3">404</h1>

      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        Page Not Found
      </h2>

      <p className="text-gray-600 max-w-md mb-6">
        Oops! The page you&apos;re looking for doesn&apos;t exist or might have been moved.
      </p>

      <Link href="/">
        <Button className="px-6 py-2">Return Home</Button>
      </Link>
    </div>
  );
}
