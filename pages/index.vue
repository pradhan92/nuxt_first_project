<template>
      <div>
        <div v-if="categoryStore.loading">Loading...</div>
      <!-- {{ categoryStore.categories }} data see or not conformation & where to see in store/category.js/state categories: [],-->
      <div class="container py-5 grid lg:grid-cols-4 md:grid-cols-2 gap-5" v-else>
        <div v-for="(category, index) in categoryStore.categories " :key="index">
          <CategoryCard :category = "category"/>
        <!-- <CategoryCard :props = "data"/> details of CategoryCard-->
        </div>
      </div>
      </div>
</template>

<script setup>
import{useCategoryStore} from "`~/store/category`"; //import the category from the store
const categoryStore = useCategoryStore();  //create a categoryStore object as a variable
await categoryStore.index();  //method to index is called from the categoryStore{store/index method like laravel}
</script>

<style lang="scss" scoped></style>