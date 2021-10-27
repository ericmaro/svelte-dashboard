import { addPermissionsToRoleService, createOneRoleService, deleteOneRoleService, getRolesService, removePermissionsToRoleService, updateOneRoleService } from "@/services/roleService";
import type { DeleteOneInput } from "@/shared/types/DeleteOneInput";
import type { CursorPaging } from "@/shared/types/paging";
import type { RelationsInput } from "@/shared/types/relationsInput";
import type { Sort } from "@/shared/types/sort";

import { writable } from "svelte/store";

import { setIsLoading } from "@/stores/appStore";
import type { RequestError } from '../../shared/types/RequestError';
import type { CreateOneRoleInput } from "./types/createOneRoleInput";
import type { RoleConnection } from "./types/roleConnection";
import type { RoleFilter } from "./types/roleFilter";
import type { UpdateOneRoleInput } from "./types/updateOneRoleInput";

export const rolesList = writable<RoleConnection>(null);
export const isLoading = writable<boolean>(false);
export const errorList = writable<RequestError[]>([]);
const data: RoleConnection = null

export const createOneRoleAction = async (input: CreateOneRoleInput): Promise<void> => {
    setIsLoading(true)
    try {
        const value = await createOneRoleService(input);
        data.edges.unshift({
            node: value,
            cursor:
                data.edges[data.edges.length - 1]
                    .cursor,
        })
        rolesList.set(data)
        setIsLoading(false)
    } catch (errors) {
        const e: RequestError[] = errors;
        errorList.set(e);
        setIsLoading(false)
    }

}

export const updateOneRoleAction = async (input: UpdateOneRoleInput): Promise<void> => {
    setIsLoading(true)
    try {
        const value = await updateOneRoleService(input);

        data.edges.map((edge) => {
            if (edge.node.id === value.id) edge.node = value;
        });

        rolesList.set(data)
        setIsLoading(false)
    } catch (errors) {
        const e: RequestError[] = errors;
        errorList.set(e);
        setIsLoading(false)
    }

}

export const deleteOneRoleAction = async (input: DeleteOneInput): Promise<void> => {
    setIsLoading(true)
    try {
        const value = await deleteOneRoleService(input);
        const i = data.edges.findIndex((edge) => edge.node.id === value.id);
        if (i !== -1) data.edges.splice(i, 1)
        rolesList.set(data)
        setIsLoading(false)
    } catch (errors) {
        const e: RequestError[] = errors;
        errorList.set(e);
        setIsLoading(false)
    }

}
export const getRoleAction = async (params?: {
    paging?: CursorPaging | undefined;
    filter?: RoleFilter | undefined;
    sorting?: Sort[] | undefined;
}): Promise<void> => {
    setIsLoading(true)
    try {
        const data = await getRolesService(params);
        rolesList.set(data)
        setIsLoading(false)
    } catch (errors) {
        const e: RequestError[] = errors;
        errorList.set(e);
        setIsLoading(false)
    }


}

export const addPermissionsToRoleAction = async (input: RelationsInput): Promise<void> => {
    setIsLoading(true)
    try {
        const value = await addPermissionsToRoleService(input);

        data.edges.unshift({
            node: value,
            cursor:
                data.edges[data.edges.length - 1]
                    .cursor,
        });
        rolesList.set(data)
        setIsLoading(false)
    } catch (errors) {
        const e: RequestError[] = errors;
        errorList.set(e);
        setIsLoading(false)
    }

}

export const removePermissionsToRoleAction = async (input: RelationsInput): Promise<void> => {
    setIsLoading(true)
    try {
        const value = await removePermissionsToRoleService(input);

        data.edges.unshift({
            node: value,
            cursor:
                data.edges[data.edges.length - 1]
                    .cursor,
        });
        rolesList.set(data)
        setIsLoading(false)
    } catch (errors) {
        const e: RequestError[] = errors;
        errorList.set(e);
        setIsLoading(false)
    }

}
