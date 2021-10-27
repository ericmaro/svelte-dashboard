import { currentUserMonitoringService, getAudiosService } from "@/services/audioService";
import type { CursorPaging } from "@/shared/types/paging";
import type { Sort } from "@/shared/types/sort";
import { writable } from "svelte/store";
import type { AudioConnection } from "./types/audioConnection";
import type { AudioFilter } from "./types/audioFilter";
import type { ReportInput } from '../../shared/types/reportInput';
import type { Audio } from "@/stores/audio/types/audio";

export const audiosList = writable<AudioConnection>(null);
export const currentUserMonitoring = writable<Audio[]>(null);

const fetchAudioList = async (params?: {
    paging?: CursorPaging | undefined;
    filter?: AudioFilter | undefined;
    sorting?: Sort[] | undefined;
}) => {
    const data = await getAudiosService(params);
    audiosList.set(data)
}


const currentUserMonitoringList= async () => {
    const input:ReportInput = {userId:3}
    const data = await currentUserMonitoringService(input);
    currentUserMonitoring.set(data)
}
fetchAudioList();
currentUserMonitoringList();