import { createStore } from "vuex";
import { users } from "@/store/modules/user";
import { roles } from "@/store/modules/role";
import { organizations } from "@/store/modules/organization";
import { permissions } from "@/store/modules/permission";
import { customers } from "@/store/modules/customer";
import { stations } from "@/store/modules/station";
import { audios } from "@/store/modules/audio";
import { matches } from "@/store/modules/match";

export const store = createStore({
  modules: {
    users,
    roles,
    organizations,
    permissions,
    customers,
    stations,
    audios,
    matches,
  },
});
