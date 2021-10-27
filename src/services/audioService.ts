import { apolloClient } from "@/graphql/api/client";
import { getAudioQuery } from "@/graphql/queries/audiosQuery";
import { CursorPaging } from "@/shared/types/paging";
import { Sort } from "@/shared/types/sort";
import { AudioFilter } from "@/views/pages/audios/types/audioFilter";
import { AudioConnection } from "@/views/pages/audios/types/audioConnection";
import { CreateOneAudioInput } from "@/views/pages/audios/types/createOneAudioInput";
import { Audio } from "@/views/pages/audios/types/audio";
import {
  createOneAudioMutation,
  updateOneAudioMutation,
} from "@/graphql/mutations/audioMutation";
import { UpdateOneAudioInput } from "@/views/pages/audios/types/updateOneAudioInput";

export const createOneAudioService = async (data: CreateOneAudioInput) => {
  try {
    const results = await apolloClient.mutate({
      mutation: createOneAudioMutation,
      variables: {
        input: data,
      },
    });
    const res: Audio = results.data.createOneAudio;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const updateOneAudioService = async (data: UpdateOneAudioInput) => {
  try {
    const results = await apolloClient.mutate({
      mutation: updateOneAudioMutation,
      variables: {
        input: data,
      },
    });
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
}) => {
  try {
    const results = await apolloClient.query({
      query: getAudioQuery,
      variables: {
        paging: params && params.paging ? params.paging : undefined,
        filter: params && params.filter ? params.filter : undefined,
        sorting: params && params.sorting ? params.sorting : undefined,
      },
    });
    console.log(results);
    const res: AudioConnection = results.data.audio;
    console.log(res);
    return res;
  } catch (e) {
    console.log(e);
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};
