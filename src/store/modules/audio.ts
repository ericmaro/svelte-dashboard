import { CursorPaging } from "@/shared/types/paging";
import { Sort } from "@/shared/types/sort";
import { AudioFilter } from "@/views/pages/audios/types/audioFilter";
import { Audio } from "@/views/pages/audios/types/audio";
import { AudioConnection } from "@/views/pages/audios/types/audioConnection";
import {
  createOneAudioService,
  getAudiosService,
  updateOneAudioService,
} from "@/services/audioService";
import { CreateOneAudioInput } from "../../views/pages/audios/types/createOneAudioInput";
import { UpdateOneAudioInput } from "@/views/pages/audios/types/updateOneAudioInput";

interface Error {
  message: string;
}

export interface AudioState {
  loading: boolean;
  errors: Error[];
  audioConnection: AudioConnection | null;
}

export const audios = {
  namespaced: true,
  state(): AudioState {
    return {
      loading: false,
      errors: [],
      audioConnection: null,
    };
  },
  mutations: {
    setLoading(state: AudioState, value: any) {
      state.loading = value;
    },
    setError(state: AudioState, errors: any) {
      state.errors = errors;
    },
    setAddToAudios(state: AudioState, value: Audio) {
      if (state.audioConnection != null) {
        state.audioConnection.edges.unshift({
          node: value,
          cursor:
            state.audioConnection.edges[state.audioConnection.edges.length - 1]
              .cursor,
        });
      }
    },
    setUpdateToAudios(state: AudioState, value: Audio) {
      if (state.audioConnection != null) {
        state.audioConnection.edges.map((edge) => {
          if (edge.node.id === value.id) edge.node = value;
        });
      }
    },
    setAudioConnection(state: AudioState, value: AudioConnection) {
      state.audioConnection = value;
    },
  },
  actions: {
    async resetErrorsStateAction(context: any): Promise<void> {
      context.commit("setError", []);
    },

    async createOneAudioAction(
      context: any,
      data: CreateOneAudioInput
    ): Promise<void> {
      context.commit("setLoading", true);
      try {
        const audio = await createOneAudioService(data);
        context.commit("setAddToAudios", audio);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },

    async updateOneAudioAction(
      context: any,
      data: UpdateOneAudioInput
    ): Promise<void> {
      context.commit("setLoading", true);
      try {
        const audio = await updateOneAudioService(data);
        context.commit("setUpdateToAudios", audio);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },
    async getAudioAction(
      context: any,
      params?: {
        paging?: CursorPaging | undefined;
        filter?: AudioFilter | undefined;
        sorting?: Sort[] | undefined;
      }
    ) {
      console.log("get audios");
      context.commit("setLoading", true);
      try {
        const data = await getAudiosService(params);
        console.log(data);
        if (data) context.commit("setAudioConnection", data);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },
  },
};
