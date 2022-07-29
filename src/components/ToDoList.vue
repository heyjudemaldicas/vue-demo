<template>
  <div id="todo-list">
    <h2>Your Todos for Today : {{ dateToday }}</h2>

    <ToDoInput :value="newTodo" @add="addToDo"></ToDoInput>

    <transition-group name="list" enter-active-class="animated bounceInUp">
      <ToDoItem
        v-for="(todo, index) in xtodos"
        v-on:delete="xtodos.splice(index, 1)"
        v-on:edit="editTodo(index)"
        :key="index"
        :description="todo"
      ></ToDoItem>
    </transition-group>
  </div>
</template>
<script>
import ToDoItem from "./ToDoItem.vue";
import ToDoInput from "./ToDoInput.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "ToDoList",
  components: {
    ToDoItem,
    ToDoInput,
  },
  data() {
    return {
      newTodo: "",
      currentIndex: -1,
      //todos: ["Finish meal", "Go to mall", "2-hour gym exercise"],
      dateToday: new Date().toLocaleDateString(),
    };
  },
  setup() {
    const store = useStore();

    return {
      xtodos: computed(() => {
        return store.state.toDoItems ? store.state.toDoItems : [];
      }),
    };
  },
  methods: {
    addToDo(value) {
      if (value) {
        if (this.currentIndex === -1) {
          var todo = value;
          //this.todos.push(todo);
          var todos = this.xtodos;
          todos.push(todo);
          this.$store.dispatch("updateToDoItems", todos);
          this.newTodo = "";
        } else {
          this.xtodos[this.currentIndex] = value;
          this.newTodo = "";
          this.currentIndex = -1;
        }
      }
    },
    editTodo(index) {
      this.newTodo = this.xtodos[index];
      this.currentIndex = index;
    },
  },
};
</script>
<style scoped>
#todo-list {
  margin-top: 0px;
}
</style>
