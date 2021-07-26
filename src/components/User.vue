<template>
  <div class="user">
    <Card>
      <template #header>
        <img
          src="https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png"
        />
      </template>
      <template #title> {{ user.firstName }} {{ user.lastName }} </template>
      <template #subtitle>
        {{ user.email }}
      </template>
      <template #heading>
        {{ user.age }}
      </template>
      <template #footer>
        <Button icon="pi pi-check" @click="updateUser(user)" label="Update" />
        <Button
          @click="onRemove(user._id)"
          icon="pi pi-times"
          label="Remove"
          class="p-button-secondary"
          style="margin-left: .5em"
        />
      </template>
    </Card>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
  methods: {
    onRemove(_id) {
      this.$emit("remove-user", _id);
    },
    updateUser(user) {
      this.$emit("update-user", user);
    },
  },
};
</script>

<style></style>
