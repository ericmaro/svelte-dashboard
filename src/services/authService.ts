import { apolloClient } from "@/graphql/api/client";
import { loginMutation } from "@/graphql/mutations/loginMutation";
import router from "@/router";
import { LoginRequestType } from "@/views/pages/users/types/loginRequestType";
import { LoginResponseType } from "@/views/pages/users/types/loginResponseType";

export const loginService = async (data: LoginRequestType) => {
  try {
    const results = await apolloClient.mutate({
      mutation: loginMutation,
      variables: data,
    });
    const res: LoginResponseType = results.data.login;
    localStorage.setItem(
      "login",
      LoginResponseType.LoginResponseTypeToJson(res)
    );
    router.push({ path: "/" });
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const loginCheckService = async () => {
  const respString = await localStorage.getItem("login");
  if (!respString) router.push({ path: "/login" });
  const results = respString
    ? LoginResponseType.toLoginResponseType(respString)
    : null;
  if (!results) router.push({ path: "/login" });
};
export const logoutService = async () => {
  await localStorage.removeItem("login");
  router.push({ path: "/login" });
};

export const getLoginDataService = async (): Promise<LoginResponseType | null> => {
  const respString = await localStorage.getItem("login");
  if (!respString) return null;
  const results = respString
    ? LoginResponseType.toLoginResponseType(respString)
    : null;
  if (!results) return null;
  return results;
};
