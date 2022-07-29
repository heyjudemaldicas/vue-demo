<template>
  <div>
    <input
      type="text"
      required
      autocomplete="off"
      :value="value"
      @input="newvalue = $event.target.value"
      placeholder="What do you want to do today?"
    />
    <button class="addButton" @click="$emit('add', newvalue)">Add</button>
  </div>
</template>
<script>
export default {
  name: "ToDoInput",
  data() {
    return {
      newvalue: "",
    };
  },
  props: ["value"],
};
</script>
<style scoped></style>
