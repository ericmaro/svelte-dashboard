<template lang="jsx">
 <div  class="overflow-x-auto shadow-md rounded-md">
      <table v-if="roles.length>0 && permissions.length>0" class="w-full divide-y divide-gray-200 bg-white">
        <thead class="bg-gray-200">
          <tr class="text-left text-xs font-medium uppercase">
            <th class="p-4 text-left">Permisions</th>
            <th v-for="(role, index) in roles" :key="index" class="p-4 tracking-wider">{{role.node.name}}</th>       
          </tr>

        </thead>
        <tbody class="text-xs divide-y divide-gray-200">
          <tr v-for="(permission, j) in permissions" :key="j">
              <td>
                <div class="m-5">
                   <div class="leading-none uppercase mt-3">{{permission.name}}</div>          
                </div>
              </td>
              <td v-for="(role, index) in roles" :key="index" >
                  <div class="form-check">
                    <input id="checkbox-switch-7" @input="onCheck($event.target.checked, permission, role.node)" :checked="role.node.permissions.some((perm)=>perm.id === permission.id)" class="form-check-switch m-5" type="checkbox">
                  </div>
              </td>
          </tr>
        </tbody>
     </table>
</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Permission } from "@/views/pages/permissions/types/permission";
import { Role } from "@/views/pages/roles/types/role";

export default defineComponent({
  props: {
    roles: {
      type: Array,
      required: true,
    },
    permissions: {
      type: Array,
      required: true,
    },
  },
  setup(props, context) {
    const onCheck = (value: boolean, permission: Permission, role: Role) => {
      context.emit("onCheck", { value, permission, role });
    };
    return {
      onCheck,
    };
  },
});
</script>
