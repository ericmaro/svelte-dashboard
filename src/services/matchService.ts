import { graphQLClient } from "@/graphql/client";
import { getMatchQuery } from "@/graphql/queries/matchesQuery";
import type { CursorPaging } from "@/shared/types/paging";
import type { Sort } from "@/shared/types/sort";
import type { MatchConnection } from "@/stores/match/types/matchConnection";
import type { MatchFilter } from "@/stores/match/types/matchFilter";


export const getMatchesService = async (params?: {
  paging?: CursorPaging;
  filter?: MatchFilter;
  sorting?: Sort[];
}):Promise<MatchConnection> => {
  try {
    const results = await graphQLClient.request( getMatchQuery,
       {
        paging: params && params.paging ? params.paging : undefined,
        filter: params && params.filter ? params.filter : undefined,
        sorting: params && params.sorting ? params.sorting : undefined,
      },
    );
    console.log(results);
    const res: MatchConnection = results.data.matches;
    console.log(res);
    return res;
  } catch (e) {
    console.log(e);
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};
