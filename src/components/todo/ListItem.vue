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
      Button(class="mr-0" modificators="danger sm" type="button" @click="$emit('remove')")
        Icon(class="mr-0" type="fas" name="trash")
        span(class="pl-2")
          | Remove
      router-link(class="btn btn-success btn-sm" :to="to")
        Icon(class="mr-0" type="fas" name="edit")
        span(class="pl-2")
          | Edit
</template>

<script>
import { format } from "date-fns";
import Icon from "@/components/shared/Icon";
import Button from "@/components/shared/Button";

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
  },
  components: {
    Icon,
    Button
  }
};
</script>
