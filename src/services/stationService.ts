import { apolloClient } from "@/graphql/api/client";
import { getStationQuery } from "@/graphql/queries/stationsQuery";
import { CursorPaging } from "@/shared/types/paging";
import { Sort } from "@/shared/types/sort";
import { StationFilter } from "@/views/pages/stations/types/stationFilter";
import { StationConnection } from "@/views/pages/stations/types/stationConnection";
import { CreateOneStationInput } from "@/views/pages/stations/types/createOneStationInput";
import { Station } from "@/views/pages/stations/types/station";
import {
  createOneStationMutation,
  updateOneStationMutation,
} from "@/graphql/mutations/stationMutation";
import { UpdateOneStationInput } from "@/views/pages/stations/types/updateOneStationInput";

export const createOneStationService = async (data: CreateOneStationInput) => {
  try {
    const results = await apolloClient.mutate({
      mutation: createOneStationMutation,
      variables: {
        input: data,
      },
    });
    const res: Station = results.data.createOneStation;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const updateOneStationService = async (data: UpdateOneStationInput) => {
  try {
    const results = await apolloClient.mutate({
      mutation: updateOneStationMutation,
      variables: {
        input: data,
      },
    });
    const res: Station = results.data.updateOneStation;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const getStationsService = async (params?: {
  paging?: CursorPaging;
  filter?: StationFilter;
  sorting?: Sort[];
}) => {
  try {
    const results = await apolloClient.query({
      query: getStationQuery,
      variables: {
        paging: params && params.paging ? params.paging : undefined,
        filter: params && params.filter ? params.filter : undefined,
        sorting: params && params.sorting ? params.sorting : undefined,
      },
    });
    console.log(results);
    const res: StationConnection = results.data.stations;
    console.log(res);
    return res;
  } catch (e) {
    console.log(e);
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};
