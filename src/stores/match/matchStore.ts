import { getMatchesService } from "@/services/matchService";
import type { CursorPaging } from "@/shared/types/paging";
import type { Sort } from "@/shared/types/sort";
import { writable } from "svelte/store";
import type { MatchConnection } from "./types/matchConnection";
import type { MatchFilter } from "./types/matchFilter";
import  moment  from "moment";

export const matchesList = writable<MatchConnection>(null);
export const todayMatchesList = writable<MatchConnection>(null);

const fetchMatchList = async (params?: {
    paging?: CursorPaging | undefined;
    filter?: MatchFilter | undefined;
    sorting?: Sort[] | undefined;
}) => {
    const data = await getMatchesService(params);
    matchesList.set(data)
}

const fetchTodayMatchList = async ( id?: string) => {
    const d = moment();
    const startDay = moment(moment().format('YYYY-MM-DD') + ' 00:00:01').toISOString();
    const now = d.toISOString();
    const params:{
      paging?: CursorPaging | undefined;
      filter?: MatchFilter | undefined;
      sorting?: Sort[] | undefined;
    } = {filter:id?{ audioId: {eq: parseInt(id)}, playedAt: {between:{lower: startDay, upper: now}}}:{playedAt: {between:{lower: startDay, upper: now}}}};

    const data = await getMatchesService(params);
    todayMatchesList.set(data)
}
fetchMatchList();
fetchTodayMatchList();