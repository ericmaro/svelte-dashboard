<template>
  <div id="app">
    <router-view />
    <master-modal></master-modal>
    <modals-container></modals-container>
  </div>
</template>

<script lang="ts">
import { watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { defineComponent } from "vue";
import MasterModal from "@/components/master-modal/Main.vue";
export default defineComponent({
  components: {
    MasterModal,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    watchEffect(() => {
      if (route.path !== "/login") {
        //check login status
        store.dispatch("users/loginCheckAction");
      }
    });
  },
});
</script>
<style lang=""></style>
