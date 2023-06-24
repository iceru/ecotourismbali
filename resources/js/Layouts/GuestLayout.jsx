import Navbar from '@/Components/Navbar';

export default function Guest({ children }) {
  return (
    <div>
      <Navbar />

      <div className="min-h-[80vh] container bg-white">
        <div className="py-12">{children}</div>
      </div>
    </div>
  );
}
