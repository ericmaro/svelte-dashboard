import { loginMutation } from "@/graphql/mutations/loginMutation";
import { goto } from '$app/navigation';
import { graphQLClient } from "@/graphql/client";
import type { LoginRequestType } from "@/stores/user/types/loginRequestType";
import { LoginResponseType } from "@/stores/user/types/loginResponseType";

export const loginService = async (data: LoginRequestType): Promise<void> => {
  try {
    const results = await graphQLClient.request(
      loginMutation,
      data,
    );
    const res: LoginResponseType = results.login;
    localStorage.setItem(
      "login",
      LoginResponseType.LoginResponseTypeToJson(res)
    );
    goto("/app")
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const loginCheckService = async (): Promise<void> => {
  if (typeof window !== 'undefined') {
    // do your stuff with sessionStorage
    const respString = await localStorage.getItem("login");

    if (!respString) {
      goto("/auth/login");
      return
    }
    const results = respString
      ? LoginResponseType.toLoginResponseType(respString)
      : null;
    if (!results) {
      goto("/auth/login");
      return
    };

    goto("/app");
    return
  }

};
export const logoutService = async (): Promise<void> => {
  await localStorage.removeItem("login");
  goto("/auth/login");
};

export const getLoginDataService = async (): Promise<LoginResponseType | null> => {
  const respString = await localStorage.getItem("login");
  if (!respString) return null;
  const results = respString
    ? LoginResponseType.toLoginResponseType(respString)
    : null;
    console.log(results)
  if (!results) return null;
  return results;
};
