export default function DashboardLoading() {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-200 h-32 rounded"></div>
        <div className="bg-gray-200 h-32 rounded"></div>
        <div className="bg-gray-200 h-32 rounded"></div>
      </div>
    </div>
  );
}
