/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useEffect, useState } from 'react';

export default function UserTable({
  refreshRef,
  onEdit
}: {
  refreshRef: React.MutableRefObject<() => void>;
  onEdit: (user: any) => void;
}) {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch('/api/users');
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
    refreshRef.current = fetchUsers;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = async (id: number) => {
    await fetch(`/api/users?id=${id}`, {
      method: 'DELETE',
    });
    fetchUsers();
  };

  return (
    <table className="w-full text-white mt-4">
      <thead>
        <tr><th>Nom</th><th>Prénom</th><th>Email</th><th>Téléphone</th><th>Actions</th></tr>
      </thead>
      <tbody>
        {users.map((u: any) => (
          <tr key={u.id_users}>
            <td>{u.user_lastname}</td>
            <td>{u.user_firstname}</td>
            <td>{u.user_email}</td>
            <td>{u.user_phone_number}</td>
            <td>
              <button onClick={() => onEdit(u)} className="text-yellow-400 mr-2">Modifier</button>
              <button onClick={() => handleDelete(u.id_users)} className="text-red-400">Supprimer</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
