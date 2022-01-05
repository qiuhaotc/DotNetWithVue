<template>
  <div>
    <input v-model="A" v-on:input="ChangeA($event.target.value)" />
    <input v-model="B" v-on:input="ChangeB($event.target.value)" />
    <input
      v-model="Title"
      v-on:input="$emit('update:title', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  props: ["value", "title"],
  data: function () {
    return {
      A: this.value.A,
      B: this.value.B,
      Title: this.title,
      NewTitle: "123123",
    };
  },
  methods: {
    ChangeA(value) {
      this.$emit("input", { A: value, B: this.B });
    },
    ChangeB(value) {
      this.$emit("input", { A: this.A, B: value });
    },
  },
};
</script>                                                                                                                                                                                                                                                                                                                                                                                           