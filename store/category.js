import {defineStore} from "pinia"
import axiosApi from "~/config/axios";
export const useCategoryStore = defineStore("categories", {
  state: () => {
    return {
      categories: [],
      products: [],
      meals: {},
      loading: false,
    };
  },
  getters: {
    getCategories: (state) => state.categories,
  },
  actions: {
    //all categories
    async index() {
      try {
        this.loading = true;
        var response = await axiosApi.get("categories.php");
        if (response.status === 200) {
          this.categories = response.data.categories; //see in url in post man or browser data
        }
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },

    //products by category
     async show(category){
         try{
                this.loading = true;
                var response = await axiosApi.get(`filter.php?c=${category}`)
                if(response.status === 200){
                  this.products = response.data.meals; //see in url in post man or browser data
                }
            }catch(e){
                console.warn(e)
            }finally{
                this.loading = false
            } 
        },

    //product details//single product details
    async details(mealId) {
      try {
        this.loading = true;
        var response = await axiosApi.get(`lookup.php?i=${mealId}`);
        if (response.status === 200) {
          this.meals = response.data.meals[0];
        }
      } catch (e) {
        console.warn(e);
      } finally {
        this.loading = false;
      }
    },
  },
});