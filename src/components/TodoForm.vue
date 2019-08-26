<template>
  <div class="card">
    <div class="card-body">
      <form class="form todo-form mb-0" @submit.prevent="$emit('submit')">
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            v-model="todo.title"
            placeholder="Title"
            required
          />
        </div>
        <div class="form-group">
          <textarea
            class="form-control"
            v-model="todo.description"
            placeholder="Description"
            style="resize: none;"
          />
        </div>
        <div class="form-group">
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="done"
              v-model="todo.done"
            />
            <label class="form-check-label" for="done">Done</label>
          </div>
        </div>
        <button class="btn btn-outline-primary btn-sm btn-block" type="submit">
          Add
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "todo-form",
  props: {
    todo: {
      type: Object,
      default() {
        return {
          title: "",
          description: "",
          done: false
        };
      }
    }
  }
};
</script>
