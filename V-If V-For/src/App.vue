<script >
import UserList from './components/UserList.vue';
export default {
  name: 'App',
  components: {UserList}
}
</script>
<template>
  <div class="container mt-3">
    <div class="grid">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">
            App Component
          </p>
          <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident architecto obcaecati blanditiis eum adipisci. Veniam harum possimus natus sapiente asperiores facilis esse maiores, deserunt dignissimos laborum, nesciunt dolorem numquam dolores.
          </p>
         
        </div>
      </div>
    </div>
    <UserList/> 
  </div>
  
</template>

<style>
 
@import "./styles.css"

</style>
