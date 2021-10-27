import { CursorPaging } from "@/shared/types/paging";
import { Sort } from "@/shared/types/sort";
import { StationFilter } from "@/views/pages/stations/types/stationFilter";
import { Station } from "@/views/pages/stations/types/station";
import { StationConnection } from "@/views/pages/stations/types/stationConnection";
import {
  createOneStationService,
  getStationsService,
  updateOneStationService,
} from "@/services/stationService";
import { CreateOneStationInput } from "../../views/pages/stations/types/createOneStationInput";
import { UpdateOneStationInput } from "@/views/pages/stations/types/updateOneStationInput";

interface Error {
  message: string;
}

export interface StationState {
  loading: boolean;
  errors: Error[];
  stationConnection: StationConnection | null;
}

export const stations = {
  namespaced: true,
  state(): StationState {
    return {
      loading: false,
      errors: [],
      stationConnection: null,
    };
  },
  mutations: {
    setLoading(state: StationState, value: any) {
      state.loading = value;
    },
    setError(state: StationState, errors: any) {
      state.errors = errors;
    },
    setAddToStations(state: StationState, value: Station) {
      if (state.stationConnection != null) {
        state.stationConnection.edges.unshift({
          node: value,
          cursor:
            state.stationConnection.edges[
              state.stationConnection.edges.length - 1
            ].cursor,
        });
      }
    },
    setUpdateToStations(state: StationState, value: Station) {
      if (state.stationConnection != null) {
        state.stationConnection.edges.map((edge) => {
          if (edge.node.id === value.id) edge.node = value;
        });
      }
    },
    setStationConnection(state: StationState, value: StationConnection) {
      state.stationConnection = value;
    },
  },
  actions: {
    async resetErrorsStateAction(context: any): Promise<void> {
      context.commit("setError", []);
    },

    async createOneStationAction(
      context: any,
      data: CreateOneStationInput
    ): Promise<void> {
      context.commit("setLoading", true);
      try {
        const station = await createOneStationService(data);
        context.commit("setAddToStations", station);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },

    async updateOneStationAction(
      context: any,
      data: UpdateOneStationInput
    ): Promise<void> {
      context.commit("setLoading", true);
      try {
        const station = await updateOneStationService(data);
        context.commit("setUpdateToStations", station);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },
    async getStationAction(
      context: any,
      params?: {
        paging?: CursorPaging | undefined;
        filter?: StationFilter | undefined;
        sorting?: Sort[] | undefined;
      }
    ) {
      console.log("get stations");
      context.commit("setLoading", true);
      try {
        const data = await getStationsService(params);
        console.log(data);
        if (data) context.commit("setStationConnection", data);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },
  },
};
