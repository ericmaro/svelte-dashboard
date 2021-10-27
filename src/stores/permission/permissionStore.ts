import { getPermissionsService } from "@/services/permissionService";
import type { CursorPaging } from "@/shared/types/paging";
import type { Sort } from "@/shared/types/sort";

import { writable } from "svelte/store";


import type { RequestError } from '../../shared/types/RequestError';
import type { Permission } from "./types/permission";
import type { PermissionFilter } from "./types/permissionFilter";

export const permissionsList = writable<Permission[]>([]);
export const isLoading = writable<boolean>(false);
export const errorList = writable<RequestError[]>([]);
import { setIsLoading } from "@/stores/appStore";


export const getPermissionAction = async (params?: {
    paging?: CursorPaging | undefined;
    filter?: PermissionFilter | undefined;
    sorting?: Sort[] | undefined;
  }): Promise<void> => {
    setIsLoading(true)
    try {
        const data = await getPermissionsService(params);
        permissionsList.set(data)
        setIsLoading(false)
    } catch (errors) {
        const e: RequestError[] = errors;
        errorList.set(e);
        setIsLoading(false)
    }


}
