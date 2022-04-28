<template>
    <div>{{ userStore.name }}</div>
</template>

<script lang="ts" setup>
    import { useUserStore } from '@/store/user'
    const userStore = useUserStore()
    userStore.updateName('hanxx')
</script>

<style scoped>

</style>