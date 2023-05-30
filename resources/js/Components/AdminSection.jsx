function AdminSection({ children, className = '' }) {
  return (
    <div className={`bg-white drop-shadow-admin p-6 rounded-2xl ${className}`}>
      {children}
    </div>
  );
}

export default AdminSection;
