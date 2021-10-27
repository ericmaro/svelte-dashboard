
import { currentUserMonitoringQuery, getAudioQuery } from "@/graphql/queries/audiosQuery";
import type { CursorPaging } from "@/shared/types/paging";
import type { Sort } from "@/shared/types/sort";
import {
  createOneAudioMutation,
  updateOneAudioMutation,
} from "@/graphql/mutations/audioMutation";
import { graphQLClient } from "@/graphql/client";
import type { CreateOneAudioInput } from "@/stores/audio/types/createOneAudioInput";
import type { AudioConnection } from "@/stores/audio/types/audioConnection";
import type { AudioFilter } from "@/stores/audio/types/audioFilter";
import type { UpdateOneAudioInput } from "@/stores/audio/types/updateOneAudioInput";
import type { Audio } from "@/stores/audio/types/audio";
import type { ReportInput } from '../shared/types/reportInput';

export const createOneAudioService = async (data: CreateOneAudioInput):Promise<Audio> => {
  try {
    const results = await graphQLClient.request(createOneAudioMutation, {
        input: data,
      },
    );
    const res: Audio = results.data.createOneAudio;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const updateOneAudioService = async (data: UpdateOneAudioInput):Promise<Audio> => {
  try {
    const results = await graphQLClient.request(updateOneAudioMutation,
      {
        input: data,
      },
    );
    const res: Audio = results.data.updateOneAudio;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const getAudiosService = async (params?: {
  paging?: CursorPaging;
  filter?: AudioFilter;
  sorting?: Sort[];
}):Promise<AudioConnection> => {
  try {
    const results = await graphQLClient.request( getAudioQuery,
     {
        paging: params && params.paging ? params.paging : undefined,
        filter: params && params.filter ? params.filter : undefined,
        sorting: params && params.sorting ? params.sorting : undefined,
      },
    );
    const res: AudioConnection = results.data.audio;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const currentUserMonitoringService = async (input: ReportInput):Promise<Audio[]> => {
  try {
    const results = await graphQLClient.request( currentUserMonitoringQuery,
       {
        input:input,
      },
    );
    const res: Audio[] = results.data.currentUserMonitoring;
    console.log(res);
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};
