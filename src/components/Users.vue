<template>
  <div class="p-grid">
    <div class="p-col-12 p-md-6 p-lg-3" v-for="user in users" :key="user.id">
      <User
        @remove-user="$emit('remove-user', user._id)"
        :user="user"
        @update-user="$emit('update-user', user)"
      />
    </div>
  </div>
</template>

<script>
import User from "./User.vue";
export default {
  props: {
    users: Array,
  },
  components: { User },
  emits: ["remove-user"],
  emits: ["update-user"],
};
</script>

<style></style>
