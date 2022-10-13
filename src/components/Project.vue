<template>
    <div class="all">
        <div class="ab">
            <router-link to="/"><i class="fas fa-motorcycle"></i> Motor</router-link>
        </div>
        <div class="ab">
            
            <router-link to="/mobil"><i class="fas fa-car"></i> Mobil</router-link>
        </div>
        <div class="ab">
            
            <router-link to="/pesawat"><i class="fas fa-plane"></i> Pesawat</router-link>
        </div>
        <div class="ab">
            
            <router-link to="/kapal"><i class="fas fa-ship"></i> Kapal</router-link>
        </div>
        <div class="ab">
            
            <router-link to="/bus"><i class="fas fa-bus-alt"></i> Bus</router-link> 
        </div>

    </div>
</template>

<script>
export default {
    name:"ProjecT"
}
</script>

<style scoped>
    .all {
        display:block;
        background-color: deepskyblue;
        /* background-image: url("https://i.pinimg.com/564x/e4/6e/21/e46e21dba925274fcd2c153c092973f0.jpg");
        background-size: cover; */
        padding: 1%;
        width: 7%;
        position: fixed;
        height: 75%;
        margin-top: 4%;
        justify-items: center;
        line-height: 600%;
        border-radius: 20px;
        transition: 1s;
        border: 1px solid ;
    }
    .all:hover {
        background-color: dodgerblue;
    }
    a {
        font-size: 120%;
        color: black;
        text-decoration: none;
        font-weight: bold;

    }
    a:hover {
       color: white;
    }
</style>

