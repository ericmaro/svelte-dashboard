import { apolloClient } from "@/graphql/api/client";
import { getMatchQuery } from "@/graphql/queries/matchesQuery";
import { CursorPaging } from "@/shared/types/paging";
import { Sort } from "@/shared/types/sort";
import { MatchFilter } from "@/views/pages/matches/types/matchFilter";
import { MatchConnection } from "@/views/pages/matches/types/matchConnection";

export const getMatchesService = async (params?: {
  paging?: CursorPaging;
  filter?: MatchFilter;
  sorting?: Sort[];
}) => {
  try {
    const results = await apolloClient.query({
      query: getMatchQuery,
      variables: {
        paging: params && params.paging ? params.paging : undefined,
        filter: params && params.filter ? params.filter : undefined,
        sorting: params && params.sorting ? params.sorting : undefined,
      },
    });
    console.log(results);
    const res: MatchConnection = results.data.matches;
    console.log(res);
    return res;
  } catch (e) {
    console.log(e);
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};
