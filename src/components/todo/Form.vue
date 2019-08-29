<template lang="pug">
  //- Card
  div(class="card")
    div(class="card-body")
      //- Form
      form(class="form mb-0" @submit.prevent="$emit('submit')")
        //- Form Group
        div(class="form-group")
          input(class="form-control" type="text" v-model="todo.title" placeholder="Title" required)
        //- Form Group
        div(class="form-group")
          textarea(class="form-control" v-model="todo.description" placeholder="Description" style="resize: none;")
        //- Form Group
        div(class="form-group")
          div(class="form-check")
            input(class="form-check-input" type="checkbox" id="done" v-model="todo.done")
            label(class="form-check-label" for="done")
              | Done
        //- Submit Button
        Button(modificators="outline-primary sm block" type="submit")
          | Add
</template>

<script>
import Todo from "@/models/Todo";
import Button from "@/components/shared/Button";

export default {
  name: "todo-form",
  props: {
    todo: {
      type: Object,
      default() {
        return { ...Todo.defaultState };
      }
    }
  },
  components: {
    Button
  }
};
</script>
