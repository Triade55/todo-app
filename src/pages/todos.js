import ProtectedRoute from '../components/ProtectedRoute';

export default function Todos() {
  return (
    <ProtectedRoute>
      <div>
        <h1>Vos tâches</h1>
        {/* Vos composants de todo list */}
      </div>
    </ProtectedRoute>
  );
}
