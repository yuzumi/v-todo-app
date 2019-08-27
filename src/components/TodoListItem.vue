<template lang="pug">
  div(class="card" style="flex: 1 1;")
    div(class="card-body mr-0")
      h5(class="card-title")
        | {{todo.title}}
      p(class="card-text" v-if="todo.description")
        | {{todo.description}}
      div(class="d-flex align-items-center justify-content-between")
        p(class="card-text mb-0")
          | {{todo.done ? 'Done' : 'Work in process'}}
        p(class="card-text text-muted")
          | {{createdAt}}
    div(class="card-footer")
      button(class="btn btn-danger btn-sm mr-0" type="button" @click="$emit('remove')")
        i(class="fas fa-trash mr-0") 
        span(class="pl-2")
          | Remove
      router-link(class="btn btn-success btn-sm" :to="to")
        i(class="fas fa-edit mr-0") 
        span(class="pl-2")
          | Edit
</template>

<script>
import { format } from "date-fns";

export default {
  name: "todo-list-item",
  props: {
    todo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    createdAt() {
      return format(this.todo.createdAt, "dd/MM/yy, HH:mm");
    },
    to() {
      return `/edit/${this.todo.id}`;
    }
  }
};
</script>
