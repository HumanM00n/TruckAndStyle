//export default function Page() {
    //return <h1>Bonzoir</h1>;
//}

/*'use client';
import { useRef } from 'react';
import UserForm from '../../ui/userForm';
import UserTable from '../../ui/userTable';


export default function DashboardPage() {
  const refreshRef = useRef(() => {});
  return (
    <div className="p-8 bg-[#1A1A1A] min-h-screen text-white">
      <h1 className="text-2xl mb-4 text-[#D17A61]">Gestion des utilisateurs</h1>
      <UserForm refresh={() => refreshRef.current()} />
      <UserTable refreshRef={refreshRef} />
    </div>
  );
}
*/

'use client';
import { useRef, useState } from 'react';
import UserForm from '../../ui/userForm';
import UserTable from '../../ui/userTable';


export default function UserManagementPage() {
  const refreshRef = useRef<() => void>(() => {});
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedUser, setSelectedUser] = useState<any | null>(null);

  return (
    <div className="p-8">
      <h1 className="text-white text-2xl mb-4">Gestion des utilisateurs</h1>

      <UserForm
        refresh={() => refreshRef.current()}
        selectedUser={selectedUser}
        clearSelection={() => setSelectedUser(null)}
      />

      <UserTable
        refreshRef={refreshRef}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onEdit={(user: any) => setSelectedUser(user)}
      />
    </div>
  );
}




