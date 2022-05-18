<script setup>
const name = useRoute().params.name;
const { data: posts } = await useFetch("/api/topics/" + name);
</script>

<template>
  <div v-for="post in posts" :key="post.date">
    <Post v-bind="post" />
  </div>
</template>
