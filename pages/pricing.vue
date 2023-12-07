<template>
    <div>
       {{ categoryStore.categories }}
    </div>
</template>

<script setup>
import { useCategoryStore } from "`~/store/category`"; //import the category from the store
const categoryStore = useCategoryStore();  //create a categoryStore object as a variable
</script>

<style lang="scss" scoped></style>