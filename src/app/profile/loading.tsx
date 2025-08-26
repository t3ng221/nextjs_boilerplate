export default function ProfileLoading() {
  return (
    <div className="animate-pulse max-w-4xl mx-auto p-8">
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
        <div className="space-y-2">
          <div className="h-6 bg-gray-200 rounded w-32"></div>
          <div className="h-4 bg-gray-200 rounded w-48"></div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );
}
