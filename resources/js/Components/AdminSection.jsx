function AdminSection({ children, className = '' }) {
  return (
    <div className={`bg-white drop-shadow-admin p-4 rounded-2xl ${className}`}>
      {children}
    </div>
  );
}

export default AdminSection;
