import { usePage, router } from '@inertiajs/react';

export default function Error403() {
  const { auth } = usePage().props;

  const handleLogout = () => {
    router.post(route('logout'));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">403</h1>
      <p className="text-xl text-primary mt-4">Access Denied</p>
      <p className="text-primary mt-2">
        You don't have permission to view this page.
      </p>

      <div className="mt-6 flex space-x-4">
        <a
          href="/"
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
        >
          Go Home
        </a>

        {auth?.user && (
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
