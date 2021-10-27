<template lang="html">
  <div
    class="flex flex-wrap lg:flex-nowrap lg:space-x-4 space-y-4 lg:space-y-0"
  >
    <div
      class="bg-white border py-6 rounded-md shadow-sm w-full lg:w-1/4 xl:w-1/5 2xl:w-1/6 text-sm h-full"
    >
      <ul>
        <li
          class="py-3"
          @click="activeTab = 'profile'"
          :class="[
            activeTab == 'profile'
              ? 'bg-green-200 border-l-4 border-green-700 text-green-700'
              : 'text-gray-500',
          ]"
        >
          <div class="flex items-center px-6 space-x-3 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Profile</span>
          </div>
        </li>
        <li
          class="py-3"
          @click="activeTab = 'password'"
          :class="[
            activeTab == 'password'
              ? 'bg-green-200 border-l-4 border-green-700 text-green-700'
              : 'text-gray-500',
          ]"
        >
          <div class="flex items-center px-6 space-x-3 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              />
            </svg>
            <span>Password</span>
          </div>
        </li>
        <li
          class="py-3"
          @click="activeTab = 'permissions'"
          :class="[
            activeTab == 'permissions'
              ? 'bg-green-200 border-l-4 border-green-700 text-green-700'
              : 'text-gray-500',
          ]"
        >
          <div class="flex items-center px-6 space-x-3 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"
              ></path>
              <circle cx="12" cy="11" r="1"></circle>
              <line x1="12" y1="12" x2="12" y2="14.5"></line>
            </svg>
            <span>Permissions</span>
          </div>
        </li>
        <li class="py-3">
          <div class="flex items-center px-6 space-x-3 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span class="text-gray-500">Notifications</span>
          </div>
        </li>
      </ul>
    </div>

    <div
      class="bg-white border p-6 rounded-md shadow-sm w-full lg:w-3/4 xl:w-4/5 2xl:w-5/6 h-full"
    >
      <div class="text-gray-600 capitalize" v-if="activeTab == 'profile'">
        <p class="py-4 text-lg border-b-2 border-gray-200">Profile</p>

        <div class="grid grid-cols-1 lg:grid-cols-2 text-sm 2xl:text-base mb-8">
          <!-- Grids -->
          <div class="flex py-4">
            <span class="text-gray-400 w-1/4">Names</span>

            <span>
              {{ profile.firstName }} {{ profile.middleName }}
              {{ profile.lastName }}
            </span>
          </div>
          <div class="flex py-4">
            <span class="text-gray-400 w-1/4">Gender</span>

            <span> {{ profile.gender }} </span>
          </div>
          <div class="flex py-4">
            <span class="text-gray-400 w-1/4">Date of Birth</span>

            <span> {{ profile.dateOfBirth }} </span>
          </div>
          <div class="flex py-4">
            <span class="text-gray-400 w-1/4">Email</span>

            <span> {{ profile.email }} </span>
          </div>
          <div class="flex py-4">
            <span class="text-gray-400 w-1/4">Phone</span>

            <span> {{ profile.phone }} </span>
          </div>
          <div class="flex py-4">
            <span class="text-gray-400 w-1/4">Address</span>

            <span> {{ profile.address }} </span>
          </div>
          <div class="flex py-4">
            <span class="text-gray-400 w-1/4">Region</span>

            <span> {{ profile.region }} </span>
          </div>
          <div class="flex py-4">
            <span class="text-gray-400 w-1/4">Country</span>

            <span> {{ profile.country }} </span>
          </div>
          <div class="flex py-4">
            <span class="text-gray-400 w-1/4">Joined</span>

            <span> {{ profile.createdAt }} </span>
          </div>
          <div class="flex py-4">
            <span class="text-gray-400 w-1/4">Updated</span>

            <span> {{ profile.updatedAt }} </span>
          </div>
          <!-- End Grids -->
        </div>

        <p class="py-4 text-lg border-b-2 border-gray-200">
          Professional Information
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-2 text-sm 2xl:text-base mb-8">
          <!-- Grids -->
          <div class="flex py-4">
            <span class="text-gray-400 w-1/4">Role</span>

            <span> {{ profile.role }} </span>
          </div>
          <div class="flex py-4">
            <span class="text-gray-400 w-1/4">Work ID</span>

            <span> {{ profile.workID }} </span>
          </div>
          <!-- End Grids -->
        </div>
      </div>

      <div
        class="font-medium text-gray-600 capitalize"
        v-if="activeTab == 'password'"
      >
        <p class="py-4 text-lg border-b-2 border-gray-200">Change Password</p>

        <div class="flex">
          <master-form
            :showConfirm="false"
            :loading="loading"
            @onSubmit="onChangePassword"
            :form="updatePasswordForm"
          ></master-form>
        </div>
      </div>

      <div
        class="font-medium text-gray-600 capitalize"
        v-if="activeTab == 'permissions'"
      >
        <p class="py-4 text-lg border-b-2 border-gray-200">Permissions</p>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-4 divide-y divide-gray-200"
        >
          <div
            class="flex items-center space-x-4 py-4 text-gray-500"
            v-for="permission in profile.permissionGrants"
            :key="permission.id"
          >
            <span
              class="bg-green-200 text-green-600 text-sm px-4 py-1 rounded-md"
              >{{ permission.guard }}
            </span>
            <span>{{ permission.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import MasterForm from "@/components/master-form/Main.vue";
import { User } from "@/views/pages/users/types/user";
import { updatePasswordForm } from "@/views/pages/users/forms/updatePassword";
import { UserUpdatePasswordInput } from "@/views/pages/users/types/userUpdatePasswordInput";

export default defineComponent({
  components: {
    MasterForm,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const userEmail = ref();
    const activeTab = ref("profile");
    const selectedUser = ref(null as User | null);

    onMounted(() => {
      route.params.email
        ? (userEmail.value = route.params.email)
        : router.go(-1);
    });

    const loading = computed(() => store.state.users.loading);

    const loggedInUser = computed((): User => store.state.users.loggedInUser);

    const profile = computed((): User => store.state.users.activeViewProfile);

    const onChangePassword = (values: UserUpdatePasswordInput): void => {
      profile.value !== null
        ? (selectedUser.value = profile.value)
        : (selectedUser.value = loggedInUser.value);

      if (selectedUser.value) {
        store.dispatch("users/updateUserPasswordAction", {
          input: values,
          id: selectedUser.value.id,
        });
      }
    };

    return {
      profile,
      activeTab,
      updatePasswordForm,
      onChangePassword,
      loading,
    };
  },
});
</script>
