<template>
  <div>
      Hello From Page 1, ID: {{username}}
  </div>
</template>

<script>

export default({
  computed: {
    username() {
      // 我们很快就会看到 `params` 是什么
      // 动态路由 :id
      return this.$route.params.id;
    },
  },
})
</script>
