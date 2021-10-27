<template lang="jsx">
  <div class="space-y-2">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 mb-4">
      <div class="flex space-x-2">
        <select class="form-select form-select-sm w-1/3 lg:w-1/3" aria-label=".form-select-sm example">
          <option>Order By</option>
          <option>Date Added</option>
        </select>

        <div class="input-group w-2/3 lg:w-2/3">
          <input type="text" class="form-control" placeholder="Search" aria-label="Amount (to the nearest dollar)"
            :value="seachValue" @input="onSearch" />
          <div class="input-group-text">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 my-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="flex justify-end">
         <button v-if="newAction" @click="onNew"
          class="btn btn-dark w-auto mr-1 mb-2 uppercase">{{newButtonText?newButtonText:'Create new'}}</button>
        <button v-if="selectedItems.length>0" @click="onSelectAction"
          class="btn btn-dark w-auto mr-1 mb-2 uppercase">{{selectButtonText?selectButtonText:'Select'}}</button>
      </div>
    </div>

    <div class="overflow-x-auto shadow-md rounded-md bg-white">
      <div v-if="loading" class="h-56 w-full flex justify-center items-center">
        <LoadingIcon icon="oval" class="w-8 h-8" /><span class="ml-2">Loading</span>
      </div>
      <table v-if="!loading && data != null" class="w-full divide-y divide-gray-200">
        <thead class="bg-gray-100 text-gray-500">
          <tr class="text-left text-xs font-medium uppercase">
            <th class="p-4 whitespace-nowrap"><input type="checkbox" @change="onCheckedAll" class="form-checkbox"/></th>
            <th v-for="(column, index) in columns" :key="index" class="p-4 tracking-wider">{{column.title}}</th>
            <th v-if="editAction || viewAction || deleteAction" class="p-4 text-right">Actions</th>
          </tr>

        </thead>
        <tbody class="text-xs divide-y divide-gray-200">

          <tr v-for="(item, j) in data" :key="j">
            <td class="p-4 whitespace-nowrap"><input type="checkbox" @change="(evt)=>onCheckedOne(evt,item.node)" :checked="selectedItems.includes(item.node)"  class="form-checkbox"/></td>
            <td v-for="(column, i) in columns" :key="i" class="p-4 whitespace-nowrap">
             
              <span v-if="column?.widget && column?.widget === 'audio'">
                <audio :src="item.node[column.name]"/>
              </span>
              <span v-else>
 {{stringComposer(item.node, column.name)}}
              </span>
            </td>
            <td v-if="editAction || viewAction || deleteAction"
              class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <div class="flex item-right justify-end space-x-2">
                <div v-if="viewAction" @click="onView(item.node)"
                  class="border-2 border-indigo-200 rounded-md p-1 transform hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div v-if="editAction" @click="onEdit(item.node)"
                  class="border-2 border-blue-200 rounded-md p-1 transform hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <div v-if="deleteAction" @click="onDelete(item.node)"
                  class="border-2 border-red-200 rounded-md p-1 transform hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <div v-if="moreAction">
                  <Menu as="div" class="relative inline-block text-left">
                    <div>
                      <MenuButton class="inline-flex justify-center focus:outline-none">
                        <MoreHorizontalIcon class="w-4 mr-2  transform hover:text-purple-500 hover:scale-110"
                          aria-hidden="true" />
                      </MenuButton>
                    </div>

                    <transition enter-active-class="transition ease-out duration-100"
                      enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                      leave-active-class="transition ease-in duration-75"
                      leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                      <MenuItems style="z-index:1"
                        class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div class="py-1">
                          <MenuItem v-for="(moreItem, index) in moreMenuItems" :key="index" v-slot="{ active }">
                          <a @click="onMoreItem(moreItem, item.node)"
                            :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">{{moreItem.title}}</a>
                          </MenuItem>

                        </div>
                      </MenuItems>
                    </transition>
                  </Menu>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex justify-end">
      <button v-if="pageInfo?.hasPreviousPage" @click="onPreviousPage"
        class="btn btn-dark w-auto mr-1 mb-2 uppercase"><ChevronLeftIcon class="block mx-auto" /></button>
      <button v-if="pageInfo?.hasNextPage" @click="onNextPage" class="btn btn-dark w-auto mr-1 mb-2 uppercase"><ChevronRightIcon class="block mx-auto" /></button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref, Ref } from "vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import LoadingIcon from "@/components/loading-icon/Main.vue";
import { TableColumn } from "./types/list";
import { MenuItem as MenuItemType } from "@/shared/types/menuItem";
import { PageInfo } from "../../shared/types/paging";
import { combineWithAttributesOn } from "@/utils/helper";
function debounce<T>(fn: T, wait: number) {
  let timer: ReturnType<typeof setTimeout>;
  return (event: Event) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      if (typeof fn === "function") {
        fn(event);
      }
    }, wait);
  };
}
export default defineComponent({
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    LoadingIcon,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
    pageInfo: {
      type: Object as PropType<PageInfo>,
    },
    loading: {
      type: Boolean,
    },
    columns: {
      type: Array as PropType<TableColumn[]>,
      required: true,
    },
    searchColumns: {
      type: Array as PropType<string[]>,
      required: true,
    },
    extractField: {
      type: String,
    },
    editAction: {
      type: Boolean,
    },
    viewAction: {
      type: Boolean,
    },
    deleteAction: {
      type: Boolean,
    },
    moreAction: {
      type: Boolean,
    },
    moreMenuItems: {
      type: Array as PropType<MenuItemType[]>,
    },
    newAction: {
      type: Boolean,
    },
    newButtonText: {
      type: String,
    },
    selectButtonText: {
      type: String,
    },
  },
  setup(props, context) {
    const selectedItems: Ref<any[]> = ref([]);
    const onView = (node: any) => context.emit("onView", node);
    const onEdit = (node: any) => context.emit("onEdit", node);
    const onDelete = (node: any) => context.emit("onDelete", node);
    const onMoreItem = (moreItem: MenuItemType, node: any) =>
      context.emit("onMore", { node: node, item: moreItem });
    const onNew = (node: any) => context.emit("onNew", node);
    const onNextPage = () =>
      context.emit("onNavigate", {
        first: 10,
        after: props?.pageInfo?.endCursor,
      });
    const onPreviousPage = () =>
      context.emit("onNavigate", {
        last: 10,
        before: props?.pageInfo?.startCursor,
      });
    const seachValue = ref("");

    const setSearchValue = (event: Event) => {
      const target = event.target as HTMLInputElement;
      seachValue.value = target.value;

      const searchObject = {
        or: props.searchColumns.map((column: string) => {
          let obj: { [unit: string]: any } = {};
          obj[column] = { iLike: `%${target.value}%` };
          return obj;
        }),
      };
      context.emit("onSearch", searchObject);
    };

    const onSearch = debounce(setSearchValue, 1000);

    const onCheckedAll = (value: any) => {
      if (value.target.checked) {
        selectedItems.value = props.data?.map((d: any) => d.node as any);
      } else {
        selectedItems.value = [];
      }
      context.emit("onSelectItems", selectedItems.value);
    };

    const onCheckedOne = (value: any, node: any) => {
      if (!selectedItems.value.includes(node)) {
        if (value.target.checked) {
          selectedItems.value.push(node);
        } else {
          let index = selectedItems.value.findIndex((d) => d === node);
          selectedItems.value.splice(index, 1);
        }
      } else {
        if (!value.target.checked) {
          let index = selectedItems.value.findIndex((d) => d === node);
          selectedItems.value.splice(index, 1);
        }
      }
      context.emit("onSelectItems", selectedItems.value);
    };

    const onSelectAction = () => {
      context.emit("onSelectAction", selectedItems.value);
    };

    const stringComposer = (object: any, key: string) => {
      console.log(object);
      if (props.extractField) {
        return combineWithAttributesOn(object, props.extractField)[key];
      } else {
        return object[key];
      }
    };

    return {
      onView,
      onEdit,
      onDelete,
      onNew,
      debounce,
      onSearch,
      seachValue,
      onMoreItem,
      onNextPage,
      onPreviousPage,
      stringComposer,
      onCheckedAll,
      selectedItems,
      onCheckedOne,
      onSelectAction,
    };
  },
});
</script>
