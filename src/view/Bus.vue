<template>
<div class="back">
    <Project />
    <div class="header">
        <h1>Ini Bagian Bus</h1>
    </div>

    <div class="bus">
        <div class="bs">
        <img src="https://busbeetrans.co.id/assets/images/bus/big_bus_jetbus_3__shd_151.jpg" alt="" class="img-kpl">
        </div>
        <h1 style="text-align:center">Bus</h1>
        <p>Bus atau omnibus,[1] (disebut juga multibus atau motorbus; ejaan tidak baku bis; sering juga dilafalkan sebagai /bas/ atau /bəs/) adalah kendaraan darat yang dirancang untuk mengangkut banyak penumpang. Bus dapat memiliki kapasitas hingga 300 penumpang.[2] Jenis bus yang paling umum adalah bus tunggal satu lantai; bila muatan yang diangkut lebih besar uumnya dilayani bus bertingkat dan gandeng, dan muatan yang lebih kecil dibawa oleh midibus dan minibus; bus besar digunakan untuk layanan jarak jauh. Banyak jenis bus, seperti bus transit perkotaan dan bus antarkota, menarik tarif. Jenis lain, seperti bus sekolah atau bus kampus tidak selalu menarik tarif. Di banyak yurisdiksi, sopir bus memerlukan SIM atau izin khusus di atas SIM reguler.</p>

<p>Bus dapat digunakan untuk perkotaan terjadwal, perjalanan jauh terjadwal, sekolah, sewa, atau pariwisata; bus promosi dapat digunakan untuk kampanye politik dan yang lainnya dioperasikan secara pribadi untuk berbagai tujuan, termasuk kendaraan wisata grup musik rock dan pop.</p>

<p>Bus yang ditarik kuda digunakan dari tahun 1820-an, diikuti oleh bus uap pada tahun 1830-an, dan bus listrik pertama pada tahun 1882. Bus motor bakar pembakaran dalam pertama, atau bus motor, digunakan pada tahun 1895.[3] Baru-baru ini, dikembangkan bus listrik hibrida, bus sel bahan bakar, dan bus listrik, serta yang didukung oleh gas alam terkompresi atau biodiesel. Pada 2010-an, pemkapasitas bus semakin mengglobal, dengan desain yang sama muncul di seluruh dunia.</p>
    </div>
    <br/>
    <div class="h1">
    <h1>Data Bus</h1>
</div>
        <div class="tbl">
    <div class="label">
    <form @submit.prevent="add">
        <input type="hidden" v-model="form.id" required><br/>
        <label for="">Nama :  </label>
        <input type="text" v-model="form.nama" required><br/><br/>
        <label for="">Tinggi : </label>
        <input type="text" v-model="form.tinggi" required><br/><br/>
        <label for="">Kapasitas : </label>
        <input type="text" v-model="form.kapasitas" required><br/><br/>
        <label for="">Image : </label>
        <input type="text" v-model="form.image" required><br/><br/>
        <button class="add" style="margin-left:-1%" type="submit" v-show="!updateSubmit">  add  </button> <!-- jika tidak update maka tombol update tidak muncul --> 
        <button class="add" type="button" v-show="updateSubmit" @click="update(form)">Update</button> <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
    </form>
    </div>
    <br/>
    <table>
      <tr>
        <th>Nama</th>
        <th>Tinggi</th>
        <th>Kapasitas</th>
        <th>Image</th>
        <th>Action</th>
      </tr>
      <tr v-for="but in buts" :key="but.id" class="ft">
        <td>{{but.nama}}</td>
        <td>{{but.tinggi}}</td>
        <td>{{but.kapasitas}}</td>
        <td><img :src="but.image" alt="" width="150px" height="100px"/></td>
        <td style="text-align:center">
      <button  @click="edit(but)">Edit</button> ||  <button @click="del(but)">Delete</button>
        </td>
      </tr>
    </table>
</div>
<div class="h1"> 
  <h1>Logo Perusahaan Bis</h1>
</div>
  <div class="logo">
    <img src="https://sribu-sg.s3.amazonaws.com/assets/media/contest_detail/2014/3/desain-logo-dan-stationery-untuk-perusahaan-bus-pariwisata-trans-q-5322e87de46e780166000354/a838829a02.jpg" alt="" width="130px">
    <img src="https://tse1.mm.bing.net/th?id=OIP.3ca50srtbUb8NUUT7AjrUwHaHa&pid=Api&P=0" alt="" width="130px">
    <img src="https://logos-download.com/wp-content/uploads/2019/06/American_Bus_Association_Logo.png" alt="" width="130px">
    <img src="https://tse2.mm.bing.net/th?id=OIP.x0dEDMUyylVLRa20ceVU5AHaFS&pid=Api&P=0" alt="" width="130px">
    <img src="https://1.bp.blogspot.com/-sSYEbyO4NSY/YOBn7AI3NJI/AAAAAAAAItg/QKz8FZwS6ewDcW_KwgDzo1V_KFLf9z_qQCLcBGAsYHQ/s16000/logo-agra-mas.png" alt="" width="150px">
  </div>
    </div>
</template>

<script>

import Project from "../components/Project.vue";
import axios from "axios";

    export default {
        name: "BuS",
        components: {
            Project
        }, 
         data(){
    return{
        form: {
          id: "",
          nama: "",
          tinggi: "",
          kapasitas: "",
          image:"",
        },
        buts: "",
        updateSubmit: false,
    }
  },
   mounted() {
    this.load();
  },
  methods: {
    load(){
        axios.get('http://localhost:3000/buts').then((res) => {
        this.buts = res.data //respon dari rest api dimasukan ke buts
      }).catch ((err) => {
        console.log(err);
      })
   }, 
   add(){
      axios.post('http://localhost:3000/buts/', this.form).then(() => {
          this.load()
          this.form.nama = "";
          this.form.tinggi = "";
          this.form.kapasitas = "";
          this.form.image = "";
      })
  },
    edit(but){ 
            this.updateSubmit = true;
            this.form.id = but.id ;
            this.form.nama = but.nama ;
            this.form.tinggi = but.tinggi ;
            this.form.kapasitas = but.kapasitas ;
            this.form.image = but.image;
    },
    update(form){
      return axios.put('http://localhost:3000/buts/' + form.id , {nama: this.form.nama, tinggi: this.form.tinggi, kapasitas: this.form.kapasitas,  image: this.form.image}).then(() => {
      this.load()
      this.form.id = ''
      this.form.nama = ''
      this.form.tinggi = ''
      this.form.kapasitas = ''
      this.form.image = ''
      this.updateSubmit = false
    }).catch((err) => {
      console.log(err);
        
    })
  },
  del(but){
      axios.delete('http://localhost:3000/buts/' + but.id).then((res) =>{
          this.load()
          let index = this.buts.indexOf(res.nama)
          this.buts.splice(index,1)
      })
  },
   
  }
         
    };
</script>

<style scoped>

    .bus {
        display: block;
        text-align: justify;
        width: 50%;
        margin-left: 25%;

    }
    .img-kpl {
        width: 60%;
    }
    .bs {
    display: flex;
    justify-content: center;
  }
  h1 {
    text-align: center;
    background-color: deepskyblue;
    border-radius: 20px;
    border: 1px solid ;
  }
  .label {
    margin-right: 45%;
    margin-left: -6%;
    text-align: right;
    
  }
      table, th, td {
    border: 2px solid deepskyblue;
    text-align: center;
    
  }
  table {
    width: 100%;
  }
  .tbl {
    width: 80%;
    margin-left:13%;
  }
  .header {
    background-color: deepskyblue;
    border-radius: 20px;
  }
    .h1 {
    display: block;
        text-align: justify;
        width: 50%;
        margin-left: 25%;
  }
  .logo {
    display: flex;
    justify-content: space-around;
    width: 60%;
    margin-left: 20%;
    margin-top: 5%;
  }
  th {
    background-color: dodgerblue;
  }
   .ft {
    transition: 1s;
  }
  .ft:hover {
    background-color: dodgerblue;
  }
  .add {
    background-color: deepskyblue;
    border: none;
    padding: 6px;
    width: 100px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 20px;
    transition: 1s;
    margin-right: 5%;
    border: 1px solid ;
  }
  .add:hover {
    background-color: black;
    color: white;
  }
  .p {
    transition: 2s;
  }
  p:hover {
    border: 2px solid deepskyblue;
    padding: 5px;
    border-radius: 20px;
  }

</style>
