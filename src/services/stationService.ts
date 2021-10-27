import { getStationQuery } from "@/graphql/queries/stationsQuery";
import type { CursorPaging } from "@/shared/types/paging";
import type { Sort } from "@/shared/types/sort";
import {
  createOneStationMutation,
  updateOneStationMutation,
} from "@/graphql/mutations/stationMutation";
import { graphQLClient } from "@/graphql/client";
import type { CreateOneStationInput } from "@/stores/station/types/createOneStationInput";
import type { Station } from "@/stores/station/types/station";
import type { UpdateOneStationInput } from "@/stores/station/types/updateOneStationInput";
import type { StationFilter } from "@/stores/station/types/stationFilter";
import type { StationConnection } from "@/stores/station/types/stationConnection";


export const createOneStationService = async (data: CreateOneStationInput):Promise<Station> => {
  try {
    const results = await graphQLClient.request(createOneStationMutation,
       {
        input: data,
      },
    );
    const res: Station = results.data.createOneStation;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const updateOneStationService = async (data: UpdateOneStationInput):Promise<Station> => {
  try {
    const results = await graphQLClient.request(updateOneStationMutation,
       {
        input: data,
      },
    );
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
}):Promise<StationConnection> => {
  try {
    const results = await graphQLClient.request(getStationQuery,
     {
        paging: params && params.paging ? params.paging : undefined,
        filter: params && params.filter ? params.filter : undefined,
        sorting: params && params.sorting ? params.sorting : undefined,
      },
    );
    console.log(results);
    const res: StationConnection = results.data.stations;
    console.log(res);
    return res;
  } catch (e) {
    console.log(e);
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};
