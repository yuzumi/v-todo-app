<template>
  <div class="card" style="flex: 1 1">
    <div class="card-body mr-0">
      <h5 class="card-title">{{ todo.title }}</h5>
      <p class="card-text" v-if="todo.description">{{ todo.description }}</p>
      <div class="d-flex align-items-center justify-content-between">
        <p class="card-text mb-0">
          {{ todo.done ? "Done" : "Work in process" }}
        </p>
        <p class="card-text text-muted">{{ createdAt }}</p>
      </div>
    </div>
    <footer class="card-footer">
      <button
        class="btn btn-danger btn-sm mr-0"
        type="button"
        @click="$emit('remove')"
      >
        <i class="fas fa-trash mr-0"></i> Remove
      </button>
      <router-link
        class="btn btn-success btn-sm"
        :to="{ path: `/edit/${todo.id}` }"
      >
        <i class="fas fa-edit mr-0"></i> Edit
      </router-link>
    </footer>
  </div>
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
    }
  }
};
</script>
