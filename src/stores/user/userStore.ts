import { createOneUserService, getUsersService, updateOneUserService, updateUserPasswordService } from "@/services/userService";
import type { CursorPaging } from "@/shared/types/paging";
import type { Sort } from "@/shared/types/sort";
import { writable } from "svelte/store";
import type { UserConnection } from "./types/userConnection";
import type { UserFilter } from "./types/userFilter";
import type { LoginRequestType } from "./types/loginRequestType";
import { getLoginDataService, loginCheckService, loginService, logoutService } from "@/services/authService";
import type { LoginResponseType } from "./types/loginResponseType";
import type { RequestError } from '../../shared/types/RequestError';
import type { CreateOneUserInput } from "./types/createOneUserInput";
import type { UpdateOneUserInput } from "./types/updateOneUserInput";
import { setIsLoading } from "@/stores/appStore";
import type { UserUpdatePasswordInput } from "./types/userUpdatePasswordInput";

export const usersList = writable<UserConnection>(null);
export const isLoading = writable<boolean>(false);
export const currentUser = writable<LoginResponseType>(null);
export const errorList = writable<RequestError[]>([]);
let data: UserConnection = null
export const getUserAction = async (params?: {
    paging?: CursorPaging | undefined;
    filter?: UserFilter | undefined;
    sorting?: Sort[] | undefined;
}): Promise<void> => {
    setIsLoading(true)
    try {
        data = await getUsersService(params);
        usersList.set(data)
        setIsLoading(false)
    } catch (errors) {
        const e: RequestError[] = errors;
        errorList.set(e);
        setIsLoading(false)
    }


}
export const loginCheckAction = async (): Promise<void> => {
    await loginCheckService();
}


export const createOneUserAction = async (input: CreateOneUserInput): Promise<void> => {
    setIsLoading(true)
    try {
        const value = await createOneUserService(input);
        data.edges.unshift({
            node: value,
            cursor:
                data.edges[data.edges.length - 1]
                    .cursor,
        })
        usersList.set(data)
        setIsLoading(false)
    } catch (errors) {
        const e: RequestError[] = errors;
        errorList.set(e);
        setIsLoading(false)
    }

}

export const updateOneUserAction = async (input: UpdateOneUserInput): Promise<void> => {
    setIsLoading(true)
    try {
        const value = await updateOneUserService(input);

        data.edges.map((edge) => {
            if (edge.node.id === value.id) edge.node = value;
        });

        usersList.set(data)
        setIsLoading(false)
    } catch (errors) {
        const e: RequestError[] = errors;
        errorList.set(e);
        setIsLoading(false)
    }

}

export const updateUserPasswordAction = async (data: { input: UserUpdatePasswordInput, id: number }): Promise<void> => {
    setIsLoading(true)
    try {
        await updateUserPasswordService(data.input, data.id);
        setIsLoading(false)
    } catch (errors) {
        const e: RequestError[] = errors;
        errorList.set(e);
        setIsLoading(false)
    }
}



export const loginAction = async (data: LoginRequestType): Promise<void> => {
    setIsLoading(true)
    try {
        await loginService(data);
        setIsLoading(false)
    } catch (errors) {
        const e: RequestError[] = errors;
        errorList.set(e);
        setIsLoading(false)
    }

}



export const logoutAction = async (): Promise<void> => {
    await logoutService();
}

export const getLoggedInUserAction = async (): Promise<void> => {
    const data: LoginResponseType | null = await getLoginDataService();
    console.log(data)
    currentUser.set(data);

}