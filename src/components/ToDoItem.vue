<template>
  <div class="todo-items">
    <span>{{ description }}</span>
    <div class="item-buttons">
      <button class="editbutton" v-on:click="$emit('edit')">Edit</button>
      <button class="deletebutton" v-on:click="$emit('delete')">Delete</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ToDoItem",
  props: ["description"],
};
</script>
<style lang="scss" scoped></style>
