import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-gray-50">
      <div className="bg-white p-10 rounded-xl shadow-sm max-w-md w-full">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-2">404</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>

        <Link href="/" className="w-full flex justify-center">
          <Button className="px-6 py-2">Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
