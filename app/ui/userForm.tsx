/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useEffect, useState } from 'react';

const initialFormState = {
  id: 0,
  lastName: '',
  firstName: '',
  email: '',
  password: '',
  birthdate: '',
  phone_number: '',
  department: '',
  city: '',
  user_type: '',
};

export default function UserForm({
  refresh,
  selectedUser,
  clearSelection
}: {
  refresh: () => void;
  selectedUser: any | null;
  clearSelection: () => void;
}) {
  const [form, setForm] = useState(initialFormState);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (selectedUser) {
      setForm({
        id: selectedUser.id_users,
        lastName: selectedUser.user_lastname,
        firstName: selectedUser.user_firstname,
        email: selectedUser.user_email,
        password: '',
        birthdate: selectedUser.user_birthdate?.slice(0, 10) || '',
        phone_number: selectedUser.user_phone_number,
        department: selectedUser.user_department,
        city: selectedUser.user_city,
        user_type: selectedUser.user_type,
      });
    } else {
      setForm(initialFormState);
    }
  }, [selectedUser]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!form.lastName || !form.firstName || !form.email) {
      setError('Champs requis manquants');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateForm()) return;

    const isEditing = selectedUser !== null;

    const res = await fetch('/api/users', {
      method: isEditing ? 'PUT' : 'POST',
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || 'Erreur serveur');
      return;
    }

    setSuccess(isEditing ? 'Utilisateur mis à jour !' : 'Utilisateur créé !');
    setForm(initialFormState);
    clearSelection();
    refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-900 text-black rounded grid grid-cols-2 gap-4">
      {error && <div className="text-red-400 col-span-2">{error}</div>}
      {success && <div className="text-green-400 col-span-2">{success}</div>}

      <input name="lastName" placeholder="Nom" value={form.lastName} onChange={handleChange} className="p-2 rounded" />
      <input name="firstName" placeholder="Prénom" value={form.firstName} onChange={handleChange} className="p-2 rounded" />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="p-2 rounded" />
      <input name="password" placeholder="Mot de passe" value={form.password} onChange={handleChange} className="p-2 rounded" type="password" />
      <input name="birthdate" placeholder="Date de naissance" value={form.birthdate} onChange={handleChange} className="p-2 rounded" type="date" />
      <input name="phone_number" placeholder="Téléphone" value={form.phone_number} onChange={handleChange} className="p-2 rounded" />
      <input name="department" placeholder="Département" value={form.department} onChange={handleChange} className="p-2 rounded" />
      <input name="city" placeholder="Ville" value={form.city} onChange={handleChange} className="p-2 rounded" />
      <select name="user_type" value={form.user_type} onChange={handleChange} className="p-2 rounded">
        <option value="">Type d utilisateur</option>
        <option value="Client">Client</option>
        <option value="Coiffeur">Coiffeur</option>
        <option value="Admin">Admin</option>
      </select>

      <div className="col-span-2 flex gap-2">
        <button type="submit" className="bg-orange-500 px-4 py-2 rounded">
          {selectedUser ? 'Mettre à jour' : 'Créer'}
        </button>
        {selectedUser && (
          <button type="button" onClick={() => {
            setForm(initialFormState);
            clearSelection();
          }} className="bg-gray-500 px-4 py-2 rounded">
            Annuler
          </button>
        )}
      </div>
    </form>
  );
}
