import {  graphQLClient } from "@/graphql/client";
import { getRegionQuery } from "@/graphql/queries/regionsQuery";
import type { Region } from "@/shared/types/region";

export const getRegionsService = async ():Promise<Region[]> => {
  try {
    const results = await graphQLClient.request(getRegionQuery);
    const res: Region[] = results.regions;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};
