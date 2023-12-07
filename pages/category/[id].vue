<template>
    <div>
        <!-- {{ route.params.id }} to check the params passing value-->
        <!-- {{ categoryStore.products }} data see or not conformation & where to  see in store/category.js/state products: [],-->
        <div v-if="categoryStore.loading">loading...</div>
        <div class="container py-5 grid lg:grid-cols-4 md:grid-cols-2 gap-5" v-else>
            <div v-for="(product, index) in categoryStore.products" :key="index">
                <ProductCard :product="product" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCategoryStore } from "~/store/category"; //import the category from the store
const categoryStore = useCategoryStore();  //create a categoryStore object as a variable
const route = useRoute(); //route syn(category/id)ex(category/1) this is products by category(category->[id].vue this folder & file
await categoryStore.show(route.params.id);  //method to show is called from the categoryStore{store/show method like laravel} and route and params of products by category(category->[id].vue this folder & file )
</script>

<style lang="scss" scoped></style>