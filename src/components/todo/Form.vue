<template lang="pug">
  div(class="card")
    div(class="card-body")
      form(class="form" @submit.prevent="$emit('submit')")
        div(class="form-group")
          input(class="form-control" type="text" v-model="todo.title" placeholder="Title" required)
        div(class="form-group")
          textarea(class="form-control" v-model="todo.description" placeholder="Description" style="resize: none;")
        div(class="form-group")
          div(class="form-check")
            input(class="form-check-input" type="checkbox" id="done" v-model="todo.done")
            label(class="form-check-label" for="done")
              | Done
        button(class="btn btn-outline-primary btn-sm btn-block" type="submit")
          | Add
</template>

<script>
import getDefaultTodoState from "@/utils/getDefaultTodoState";

export default {
  name: "todo-form",
  props: {
    todo: {
      type: Object,
      default() {
        return { ...getDefaultTodoState() };
      }
    }
  }
};
</script>
