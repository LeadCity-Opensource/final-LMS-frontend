const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  console.log("Checking Auth:", { token: !!token, role: role, allowed: allowedRoles });

  if (!token || (allowedRoles && !allowedRoles.includes(role))) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
