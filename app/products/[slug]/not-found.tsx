import Link from 'next/link';

export default function ProductNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            The product you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="px-8 py-3 bg-[#0F4679] text-white font-semibold rounded-xl hover:bg-[#0D3A64] transition-colors duration-300"
          >
            Browse All Products
          </Link>
          <Link
            href="/"
            className="px-8 py-3 bg-white text-[#0F4679] border-2 border-[#0F4679] font-semibold rounded-xl hover:bg-[#0F4679] hover:text-white transition-colors duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
