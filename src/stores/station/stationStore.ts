import { getStationsService } from "@/services/stationService";
import type { CursorPaging } from "@/shared/types/paging";
import type { Sort } from "@/shared/types/sort";
import { writable } from "svelte/store";
import type { StationConnection } from "./types/stationConnection";
import type { StationFilter } from "./types/stationFilter";

export const stationsList = writable<StationConnection>(null);

const fetchStationList = async (params?: {
    paging?: CursorPaging | undefined;
    filter?: StationFilter | undefined;
    sorting?: Sort[] | undefined;
}) => {
    const data = await getStationsService(params);
    stationsList.set(data)
}
fetchStationList();