import { getRegionsService } from "@/services/regionService";
import { Region } from "@/shared/types/region";

interface Error {
  message: string;
}

export interface RegionState {
  loading: boolean;
  errors: Error[];
  regions: Region[] | null;
}

export const regions = {
  namespaced: true,
  state(): RegionState {
    return {
      loading: false,
      errors: [],
      regions: null,
    };
  },
  mutations: {
    setLoading(state: RegionState, value: any) {
      state.loading = value;
    },
    setError(state: RegionState, errors: any) {
      state.errors = errors;
    },
    setRegions(state: RegionState, value: Region[]) {
      state.regions = value;
    },
  },
  actions: {
    async resetErrorsStateAction(context: any): Promise<void> {
      context.commit("setError", []);
    },

    async getRegionAction(context: any) {
      console.log("get regions");
      context.commit("setLoading", true);
      try {
        const data = await getRegionsService();
        console.log(data);
        if (data) context.commit("setRegions", data);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },
  },
};
