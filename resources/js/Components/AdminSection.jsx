function AdminSection({ children, addClass = '' }) {
  return (
    <div className={`bg-white drop-shadow-admin p-6 rounded-2xl ${addClass}`}>
      {children}
    </div>
  );
}

export default AdminSection;
