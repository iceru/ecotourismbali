import Navbar from '@/Components/Navbar';

export default function Guest({ children }) {
  return (
    <div>
      <Navbar />

      <div className="min-h-[82vh] container bg-white">
        <div className="py-16">{children}</div>
      </div>
    </div>
  );
}
