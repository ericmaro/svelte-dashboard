import type { MenuSection } from "@/shared/types/menuItem";
import { PermissionKey as PK } from '@/shared/types/permission';

export const navigation: MenuSection[] = [
    {
        title: 'Dashboard',
        items: [
            {
                name: 'overview',
                title: 'Overview',
                route: '/app',
                icon: 'view-grid-outline'
            },
                  
        ]
    },
    {
        title: 'Users',
        permissions: [PK.VIEW_USERS,],
        items: [
            {
                name: 'customers',
                title: 'Customers',
                route: '/app/customers',
                icon: 'users-outline',
                permissions: [PK.VIEW_USERS,]
        
            },      
          
        ]
    },
    {
        title: 'Products',
        permissions: [PK.VIEW_PRODUCTS],
        items: [
          
            {
                name: 'products',
                title: 'Products',
                route: '/app/products',
                icon: 'archive-outline',
                permissions: [PK.VIEW_PRODUCTS]
            },  
          
        ]
    },
    {
        title: 'Settings',
        permissions: [PK.VIEW_USERS, PK.VIEW_ROLES, PK.VIEW_PERMISSIONS],
        items: [
           
            {
                name: 'settings',
                title: 'Settings',
                route: '/app/settings',
                icon: 'cog-outline',
                permissions: [PK.VIEW_USERS, PK.VIEW_ROLES, PK.VIEW_PERMISSIONS],
            },
          
        ]
    }

]