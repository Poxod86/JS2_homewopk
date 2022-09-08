Vue.component('filter-el', {
    data(){
      return {
          userSearch: ''
      }
    },
    template:
		`<form action="#" class="page-header-search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
		<input type="text" class="search-field" v-model="userSearch" id="search-btn">
		<button type="submit" class="search-btn">
		<img src="img/system/search.svg" alt="search">
		</button>
		</form>`
})
