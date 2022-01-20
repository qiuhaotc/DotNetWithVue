<template>
  <div>
    {{ Status }}
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      Status: "Loading...",
    };
  },
  methods: {
    clickbutton(params) {
      this.startNumber += params;
      console.log("startNumber: " + this.startNumber);
    },
  },
  mounted: function () {
    axios
      .get("/api/home")
      .then((response) => (this.Status = response.data));
  },
};
</script>
