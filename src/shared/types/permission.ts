/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export enum PermissionKey {
    VIEW_CUSTOMERS = 'view customers',
    MANAGE_CUSTOMERS = 'manage customers',
    DELETE_CUSTOMERS = 'delete customers',

    VIEW_ASSOCIATIONS = 'view associations',
    MANAGE_ASSOCIATIONS = 'manage associations',
    DELETE_ASSOCIATIONS = 'delete associations',
  
    VIEW_PRODUCTS = 'view products',
    MANAGE_PRODUCTS = 'manage products',
    DELETE_PRODUCTS = 'delete products',

    VIEW_ORGANIZATIONS = 'view organizations',
    MANAGE_ORGANIZATIONS = 'manage organizations',
    DELETE_ORGANIZATIONS = 'delete organizations',
  
    VIEW_USERS = 'view users',
    MANAGE_USERS = 'manage users',
    DELETE_USERS = 'delete users',

    VIEW_ROLES = 'view roles',
    MANAGE_ROLES = 'manage roles',
  
    VIEW_PERMISSIONS = 'view permissions',
    MANAGE_PERMISSIONS = 'manage permissions',
  
    VIEW_SYSCONF = 'view sysconf',
    MANAGE_SYSCONF = 'manage sysconf',
  
    VIEW_SETTINGS = 'view settings',
    MANAGE_SETTINGS = 'manage settings',
  

  
  }
  
  export const isPermissionKey = (key: any): key is PermissionKey => {
    return Object.values(PermissionKey).includes(key);
  };
  
  export const isPermissionKeyArray = (arr: any): arr is PermissionKey[] => {
    return typeof arr === 'object' && Object.values(arr).every((key) => isPermissionKey(key));
  };
  