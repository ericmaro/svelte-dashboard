import { CursorPaging } from "@/shared/types/paging";
import { Sort } from "@/shared/types/sort";
import { MatchFilter } from "@/views/pages/matches/types/matchFilter";
import { MatchConnection } from "@/views/pages/matches/types/matchConnection";
import { getMatchesService } from "@/services/matchService";

interface Error {
  message: string;
}

export interface MatchState {
  loading: boolean;
  errors: Error[];
  matchConnection: MatchConnection | null;
}

export const matches = {
  namespaced: true,
  state(): MatchState {
    return {
      loading: false,
      errors: [],
      matchConnection: null,
    };
  },
  mutations: {
    setLoading(state: MatchState, value: any) {
      state.loading = value;
    },
    setError(state: MatchState, errors: any) {
      state.errors = errors;
    },
    setMatchConnection(state: MatchState, value: MatchConnection) {
      state.matchConnection = value;
    },
  },
  actions: {
    async resetErrorsStateAction(context: any): Promise<void> {
      context.commit("setError", []);
    },

    async getMatchAction(
      context: any,
      params?: {
        paging?: CursorPaging | undefined;
        filter?: MatchFilter | undefined;
        sorting?: Sort[] | undefined;
      }
    ) {
      console.log("get matches");
      context.commit("setLoading", true);
      try {
        const data = await getMatchesService(params);
        console.log(data);
        if (data) context.commit("setMatchConnection", data);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },
  },
};
