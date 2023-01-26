<template>
    <div class="container mt-3">
        <div v-if="loading"> <Spinner/>
          </div>
        <div class="row">
            <div class="col">
                <div class="list-group">
                    <li class="list-group-item">
                    Name:<span class="fw-bold"> {{ user.name }}</span>
                    </li>
                    <li class="list-group-item">
                    Username:<span class="fw-bold"> {{ user.username }}</span>
                    </li>
                    <li class="list-group-item">
                    Email:<span class="fw-bold"> {{ user.email }}</span>
                    </li>
                    <li class="list-group-item">
                    Company:<span class="fw-bold"> {{ user.company.name }}</span>
                    </li>
                    <li class="list-group-item">
                    Website:<span class="fw-bold"> {{ user.website }}</span>
                    </li>
                    <li class="list-group-item">
                    Location:<span class="fw-bold"> {{ user.address.city }}</span>
                    </li>
                    <li class="list-group-item">
                    Phone:<span class="fw-bold"> {{ user.phone }}</span>
                    </li>
                    
                </div>
            </div>
        </div>
        <div class="row" v-if="!loading && Object.keys(user).length>0">
            <div class="col">
                <router-link to="/users" class="btn btn-success ms-3 mt-3">Back</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { UserService } from '../services/UserService';
import Spinner from './Spinner.vue';
export default{
    name:"UserDetails",
    data:function(){
        return {
            loading:false,
            user:{},
            errorMessage:null
        };
    },
    created:async function(){
        let userId=this.$route.params.userId;
        try{
            this.loading=true
            let response=await UserService.getUser(userId);
            this.loading=false;
            this.user=response.data;
        }
        catch(error){
            this.loading=false
            this.errorMessage=error
            console.log(error);

        }
    },
    components:{Spinner}
}
</script>
<style scoped>
</style>
