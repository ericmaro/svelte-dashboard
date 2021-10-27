import type { MenuItem } from "@/shared/types/menuItem";
import { PermissionKey as PK } from '@/shared/types/permission';
export const options: MenuItem[] = [
    {
        name: 'users',
        title: 'Users',
        route: '/app/users',
        icon: 'user',
        permissions: [PK.VIEW_USERS],
    },
    {
        name: 'organizations',
        title: 'Organizations',
        route: '/app/organizations',
        icon: 'briefcase-outline',
        permissions: [PK.VIEW_ORGANIZATIONS],
    },
    {
        name: 'roles',
        title: 'Roles',
        route: '/app/roles',
        icon: 'lock-closed-outline',
        permissions: [PK.VIEW_ROLES],
    },
    {
        name: 'permissions',
        title: 'Permissions',
        route: '/app/permissions',
        icon: 'lock-closed-outline',
        permissions: [PK.VIEW_PERMISSIONS],
    },
    {
        name: 'profile',
        title: 'My Profile',
        route: '/app/profile',
        icon: 'user',
        permissions: [PK.VIEW_USERS],
    },
]