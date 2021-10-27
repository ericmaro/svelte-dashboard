<template lang="jsx">
  <div class="bg-gray-100 text-gray-600 h-screen font-rubik">
    <div class="container px-5 py-10 lg:py-20 space-y-5">

      <div class="flex flex-col items-center w-full space-y-2">
        <img
            alt="ubiasoko-logo"
            class="w-20 h-auto object-center"
            :src="require('@/assets/images/logo.svg')"
          />

        <div class="text-lg xl:text-2xl text-gray-600 text-center font-medium">
          Sign into your account
        </div>
      </div>

      <!-- BEGIN: Login Form -->
      <div class="flex flex-col items-center w-full">
        <div
          class="w-full md:w-1/2 lg:w-1/3 2xl:w-1/4 bg-white border rounded-md shadow py-8 px-10"
        >
          <form class="w-full" @submit.prevent="login">
            <div
              v-for="(error, i) in errors"
              :key="i"
              class="alert alert-danger-soft show flex items-center mb-2 text-xs lg:text-sm"
              role="alert"
            >
              <AlertOctagonIcon class="w-6 h-6 mr-2" /> {{ error.message }}
            </div>

            <div class="space-y-6">
              <div class="flex flex-col">
                <label class="text-sm font-normal mb-1">Username</label>

                <input
                  :disabled="loading"
                  v-model="form.identifier"
                  type="text"
                  class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-800 shadow-sm rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                />
                <div class="flex flex-col space-y-1 text-xs text-red-600 my-2" v-if="v$.identifier.$error">
                  <span>
                    {{ v$.identifier.$errors[0].$message }}
                  </span>
                </div>
                
              </div>
              
              <div class="flex flex-col">
                <label class="text-sm font-normal mb-1">Password</label>

                <input
                  :disabled="loading"
                  v-model="form.password"
                  type="password"
                  class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-800 shadow-sm rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                />
                <div class="flex flex-col space-y-1 text-xs text-red-600 my-2" v-if="v$.password.$error">
                  <span>
                    {{ v$.password.$errors[0].$message }}
                  </span>
                </div>
              </div>

            </div>
            <div
              class="flex justify-between text-xs sm:text-sm mt-4 mb-6"
            >
              <div class="flex items-center space-x-2">
                <input type="checkbox" class="" disabled>
                <label class="text-sm font-normal">Remember me</label>
              </div>
              <a href="#" class="text-green-600 font-medium cursor-pointer">Forgot Password?</a>
            </div>

            <div class="flex justify-center">
              <img 
                alt="ubiasoko-logo"
                class="w-10 h-10 object-center animate-bounce"
                :src="require('@/assets/images/logo.svg')" v-if="loading" 
              />

              <button
                class="w-full p-2 border border-transparent text-white text-sm font-normal rounded-md bg-green-600 hover:bg-green-700 focus:outline-none" v-else
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { computed, defineComponent, reactive } from "vue";
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const form = reactive({ identifier: "", password: "" });
    const rules = computed(() => {
      return {
        identifier: { required },
        password: { required },
      };
    });
    const v$ = useVuelidate(rules, form, { $lazy: true });
    const login = async () => {
      const isFormCorrect = await v$._value.$validate();
      if (!isFormCorrect) return;
      store.dispatch("users/loginAction", form);
    };
    const errors = computed(() => store.state.users.errors);
    const loading = computed(() => store.state.users.loading);

    return {
      form,
      login,
      v$,
      errors,
      loading,
    };
  },
});
</script>
