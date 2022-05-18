<script setup>
const props = defineProps(["title", "date", "content"]);
</script>

<template>
  <article>
    <h5>{{ title }}</h5>
    <h6>{{ date }}</h6>
    <p>{{ content }}</p>
  </article>
</template>
