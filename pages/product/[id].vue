<template>
    <div>
<!-- {{ product.meals[0].strMeal }} -->
<!-- <div class="container">
    <div class="row">
        <div class="col-md-4">
            <img :src="categoryStore.meals.strMealThumb" class="img-fluid" alt="">
        </div>
        <div class="col-md-5">
            <h2>{{ categoryStore.meals.strMeal }}</h2>
            <p>{{ categoryStore.meals.strInstructions }}</p>
            <h5 class="text-danger">Watch On YouTube</h5>
           <a target="_blank" :href="categoryStore.meals.strYoutube"> <i class="fa-brands fa-youtube text-danger fs-1"></i></a>
        </div>
    </div>
</div> -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex items-center justify-center md:justify-end">
            <img :src="categoryStore.meals.strMealThumb" class="w-full md:w-auto" alt="">
        </div>
        <div class="flex flex-col justify-center">
            <h2 class="text-2xl font-bold">{{ categoryStore.meals.strMeal }}</h2>
            <p>{{ categoryStore.meals.strInstructions }}</p>
            <h5 class="text-danger">Watch On YouTube</h5>
            <a target="_blank" :href="categoryStore.meals.strYoutube">
                <i class="fab fa-youtube text-danger text-3xl"></i>
            </a>
        </div>
    </div>

    </div>
</template>

<script setup> 
import { useCategoryStore } from "~/store/category";
const categoryStore = useCategoryStore();
const route = useRoute();
await categoryStore.details(route.params.id);
</script>

<style lang="scss" scoped>

</style>