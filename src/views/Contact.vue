<template>
  <div class="contact">
    <h1>This is a contact page</h1>
  </div>
  <div v-for="(todo, index) in xtodos" :key="index">{{todo}}</div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    return {
      xtodos: computed(() => {
        return store.state.toDoItems ? store.state.toDoItems : {};
      }),
    };
  },
}
</script>
