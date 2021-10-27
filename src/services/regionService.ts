import { apolloClient } from "@/graphql/api/client";
import { getRegionQuery } from "@/graphql/queries/regionsQuery";
import { Region } from "@/shared/types/region";

export const getRegionsService = async () => {
  try {
    const results = await apolloClient.query({
      query: getRegionQuery,
    });
    const res: Region[] = results.data.regions;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};
