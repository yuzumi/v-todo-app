<template lang="pug">
  //- Card
  div(class="card")
    div(class="card-body mr-0")
      //- Title
      h5(class="card-title")
        | {{todo.title}}
      //- Description
      p(class="card-text" v-if="todo.description")
        | {{todo.description}}
      //- Status: Done | Work In Process
      //- Date
      div(class="d-flex align-items-center justify-content-between")
        p(class="card-text mb-0")
          | {{todo.done ? $t("todo.done") : $t("todo.wip")}}
        p(class="card-text text-muted")
          | {{createdAt}}
    div(class="card-footer")
      //- Remove
      btn(class="mr-0" modificators="danger sm" type="button" @click="$emit('remove')")
        icon(class="mr-0" type="fas" name="trash")
        span(class="pl-2")
          | {{$t("remove")}}
      //- Edit
      router-link(class="btn btn-success btn-sm" :to="to")
        icon(class="mr-0" type="fas" name="edit")
        span(class="pl-2")
          | {{$t("edit")}}
</template>

<script>
import format from "date-fns/format";
import Icon from "@/components/shared/Icon";
import Btn from "@/components/shared/Btn";

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
    Btn
  }
};
</script>

<style scoped>
.card {
  flex: 1 1;
}
</style>
