import { UserManagement } from '@/components/user-management'

export default function AdminUsersPage() {
   return (
      <div>
         <h1 className="font-heading mb-6 text-2xl font-bold">
            User Management
         </h1>
         <UserManagement />
      </div>
   )
}
