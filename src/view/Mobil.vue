<template>
<div>
    <Project />
    <div class="hd">
        <h1>Ini Adalah Mobil</h1>
    </div>
    <div class="mobil">
        <div class="mb">
    <img src="https://cdn.motor1.com/images/mgl/jbo47/s3/toyota-avanza-generasi-baru.jpg" alt="" class="img-kpl">
    </div>
    <h1>Mobil</h1>
    <p>Mobil (bahasa Belanda: Mobiel) adalah kendaraan yang menggunakan bahan bakar untuk menghidupkan mesinnya. Mobil kependekan dari otomobil yang berasal dari Bahasa Yunani 'autos' (sendiri) dan Latin 'movére' (bergerak).</p>

    <p>Dalam bahasa Inggris, kata mobile diserap langsung dari kata aslinya dalam bahasa Latin yaitu 'movére' yang berati bergerak walaupun sering juga diartikan sebagai 'mobil' atau 'seluler'</p>
    <h1>Sejarah Mobil</h1>
    <p>Kendaraan pertama yang bekerja dengan uap mungkin pertama kali didesain oleh Ferdinand Verbiest, sekitar tahun 1672. Ia mendesain mainan kendaraaan berukuran 65cm untuk kerajaan, yang tidak bisa membawa penumpang.Tidak diketahui apakah model kendaraan yang dibuat Verbiest pernah diproduksi atau tidak.</p>

    <p>Tahun 1752, Leonty Shamshurenkov, membuat konstruksi sebuah kendaraan bertenaga manusia. Ia juga melengkapi kendaraan buatannya dengan odometer. Kendaraan yang ia buat mirip dengan sebuah kereta salju.</p>

    <p>Kendaraan tenaga uap pertama dibuat pada akhir abad 18. Nicolas-Joseph Cugnot dengan sukses mendemonstrasikan kendaraan roda tiga itu pada tahun 1769. Kendaraan pertama menggunakan tenaga mesin uap, mungkin peningkatan mesin uap yang paling dikenal, dikembangkan di Birmingham, Inggris oleh Lunar Society. Dan juga di Birmingham mobil tenaga bensin pertama kali dibuat di Britania pada tahun 1896 oleh Frederick William Lanchester yang juga mematenkan rem cakram. Pada tahun 1890-an, etanol digunakan sebagai sumber tenaga di Amerika Serikat.</p>
</div>
<br/>
<div class="h1">
    <h1>Data Mobil</h1>
</div>
<div class="tbl">
    <div class="label">
    <form @submit.prevent="add">
        <input type="hidden" v-model="form.id" required><br/>
        <label for="">Merk :  </label>
        <input type="text" v-model="form.merk" required><br/><br/>
        <label for="">Versi : </label>
        <input type="text" v-model="form.versi" required><br/><br/>
        <label for="">Harga : </label>
        <input type="text" v-model="form.harga" required><br/><br/>
        <label for="">Buatan : </label>
        <input type="text" v-model="form.buatan" required><br/><br/>
        <label for="">Image : </label>
        <input type="text" v-model="form.gambar" required><br/><br/>
        <button class="add" style="margin-left:-1%" type="submit" v-show="!updateSubmit">  add  </button> <!-- jika tidak update maka tombol update tidak muncul --> 
        <button class="add" type="button" v-show="updateSubmit" @click="update(form)">Update</button> <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
    </form>
    </div>
    <br/>
    <table>
      <tr>
        <th>Merk</th>
        <th>Versi</th>
        <th>Harga</th>
        <th>Buatan</th>
        <th>Image</th>
        <th>Action</th>
      </tr>
      <tr v-for="mobil in mobils" :key="mobil.id" class="ml">
        <td>{{mobil.merk}}</td>
        <td>{{mobil.versi}}</td>
        <td>{{mobil.harga}}</td>
        <td>{{mobil.buatan}}</td>
        <td><img :src="mobil.gambar" alt="" width="150px" height="100px"/></td>
        <td style="text-align:center">
      <button @click="edit(mobil)">Edit</button> ||  <button @click="del(mobil)">Delete</button>
        </td>
      </tr>
    </table>
</div>
<br/>
<div class="mobil">
  <h1>Logo Merk Mobil</h1>
</div>
<div class="sj">
  <div class="sj1">
  
  <img src="https://tse3.mm.bing.net/th?id=OIP.8HiEnjr-a1uGDcveMDHRgQHaJ3&pid=Api&P=0" alt=" " style="width: 90px">
  </div>
  <div class="sj2">
    <img src="https://autonetmagz.com/wp-content/uploads/2017/03/Nissan-logo-2013-640x514.jpg" alt="" style="width: 90px">
  </div>
  <div class="sj3">
   
    <img src="https://logodownload.org/wp-content/uploads/2019/11/mazda-logo-1.png" alt="" style="width: 90px">
  </div>
  
  <div class="sj4">
     <img src="https://tse1.mm.bing.net/th?id=OIP.mXbeKpe2sndOAsWi_q9e7wHaHa&pid=Api&P=0" alt="" style="width: 80px">
  </div>
  <div class="sj5">
    <img src="https://www.soundandmachine.com/images/content/1/2021/2021-01-04/6c6b6f7cb5f7ed812199a5090663fa45.jpg" alt="" style="width: 90px">
  </div>
  </div>
</div>
</template>
<script>
import Project from "../components/Project.vue";
import axios from "axios";

    export default {
        name: "MobiL",
        components: {
            Project
        }, 
         data(){
    return{
        form: {
          id: "",
          merk: "",
          versi: "",
          harga: "",
          buatan: "",
          gambar:"",
        },
        mobils: "",
        updateSubmit: false,
    }
  },
   mounted() {
    this.load();
  },
  methods: {
    load(){
        axios.get('http://localhost:3000/mobils').then((res) => {
        this.mobils = res.data //respon dari rest api dimasukan ke mobils
      }).catch ((err) => {
        console.log(err);
      })
   }, 
   add(){
      axios.post('http://localhost:3000/mobils/', this.form).then(() => {
          this.load()
          this.form.merk = "";
          this.form.versi = "";
          this.form.harga = "";
          this.form.buatan = "";
          this.form.gambar = "";
      })
  },
    edit(mobil){ 
            this.updateSubmit = true;
            this.form.id = mobil.id ;
            this.form.merk = mobil.merk ;
            this.form.versi = mobil.versi ;
            this.form.harga = mobil.harga ;
            this.form.buatan = mobil.buatan ;
            this.form.gambar = mobil.gambar;
    },
    update(form){
      return axios.put('http://localhost:3000/mobils/' + form.id , {merk: this.form.merk, versi: this.form.versi, harga: this.form.harga, buatan: this.form.buatan,  gambar: this.form.gambar}).then(() => {
      this.load()
      this.form.id = ''
      this.form.merk = ''
      this.form.versi = ''
      this.form.buatan = ''
      this.form.harga = ''
      this.form.gambar = ''
      this.updateSubmit = false
    }).catch((err) => {
      console.log(err);
        
    })
  },
  del(mobil){
      axios.delete('http://localhost:3000/mobils/' + mobil.id).then((res) =>{
          this.load()
          let index = this.mobils.indexOf(res.merk)
          this.mobils.splice(index,1)
      })
  },
   
  }
         
    };
</script>

<style scoped>
    .mobil {
        display: block;
        text-align: justify;
        width: 50%;
        margin-left: 25%;
    }
    .img-kpl {
        width: 50%;
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
  .hd {
    background-color: deepskyblue;
    /* position: fixed; */
    width: 100%;
    text-align: center;
    margin-top: -9px;
    color: white;
    padding: -10%;
    border-radius: 20px;
  }
  .mb {
    display: flex;
    justify-content: center;
  }
  h1 {
    text-align: center;
    background-color: deepskyblue;
    color: black;
    border-radius: 20px;
     border: 1px solid ;

  }
  .label {
    text-align: center;
    margin-left: -6%;
    text-align: right;
    margin-right: 45%;
  }
  .h1 {
    display: block;
        text-align: justify;
        width: 50%;
        margin-left: 25%;
       
  }
  .sj {
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin-left: 25%;
    margin-top: 5%;
  }
  th {
    background-color: dodgerblue;
  }
   .ml {
    transition: 1s;
  }
  .ml:hover {
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