<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                    <div v-if="isLoggedIn">
                        <p class="h3 fw-bold text-success"> Welcome User</p>
                        <p class="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque exercitationem voluptas sit ipsum doloribus tempore minima, possimus ut quo at asperiores, corrupti quisquam eligendi neque ullam velit sed cupiditate debitis.</p>
                    </div>
                    </div>
                    <div class="card-body">
                    <div v-if="!isLoggedIn">
                        <p class="h3 fw-bold text-danger"> Thank You!</p>
                        <p class="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque exercitationem voluptas sit ipsum doloribus tempore minima, possimus ut quo at asperiores, corrupti quisquam eligendi neque ullam velit sed cupiditate debitis.</p>
                    </div>
                    </div>
                    <div>
                        <button class="btn btn-success btn-sm m-1" @click="login()">Login</button>
                        <button class="btn btn-danger btn-sm m-1" @click="logout()">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script> 
export default{
    name:"Authentication",
    data: function(){
        return {
            isLoggedIn:false
        };
    },
    methods:{
        login:function(){
            this.isLoggedIn=true;
        },
        logout:function(){
            this.isLoggedIn=false;
        }
    }

}</script>
<style></style>