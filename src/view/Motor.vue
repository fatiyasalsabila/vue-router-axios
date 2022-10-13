<template>
<div class="Mtr">
    <Project />
    <div>
         <h1>Ini Bagian Sepeda Motor</h1>
    </div>
    <div class="motor">
        <div class="honda">
        <img src="https://akcdn.detik.net.id/visual/2020/12/10/honda-pcx-160-dok-honda-7_169.jpeg?w=715&q=90" alt="" class="img-kpl">
        </div>
        <h1>Sepeda Motor</h1>
        <p>Sepeda motor adalah kendaraan beroda dua yang digerakkan oleh sebuah mesin. Letak kedua roda sebaris lurus dan pada kecepatan tinggi sepeda motor tetap stabil disebabkan oleh gaya giroskopik. Sedangkan pada kecepatan rendah, kestabilan atau keseimbangan sepeda motor bergantung kepada pengaturan setang oleh pengendara. Penggunaan sepeda motor di Indonesia sangat populer karena harganya yang relatif murah, terjangkau untuk sebagian besar kalangan dan penggunaan bahan bakarnya, serta biaya operasionalnya cukup hemat.</p>
        <h1>Sejarah</h1>
        <p>Sepeda motor merupakan pengembangan dari sepeda konvensional yang lebih dahulu ditemukan. Pada tahun 1868, Michaux ex Cie, suatu perusahaan pertama di dunia yang memproduksi sepeda dalam skala besar, mulai mengembangkan mesin uap sebagai tenaga penggerak sepeda. Namun usaha tersebut masih belum berhasil dan kemudian dilanjutkan oleh Edward Butler, seorang penemu asal Inggris. Butler membuat kendaraan roda tiga dengan suatu motor melalui pembakaran dalam. Sejak penemuan tersebut, semakin banyak dilakukan percobaan untuk membuat motor dan mobil. Salah satunya dilakukan oleh Gottlieb Daimler dan Wilhelm Maybach dari Jerman.</p>

        <p>Kedua penemu tersebut bertemu ketika bekerja bersama di Deutz-AG-Gasmotorenfabrik, produsen mesin stasioner terbesar pada tahun 1872. Pemilik Deutz-AG-Gasmotorenfabrik yang bernama Nikolaus Otto berhasil membuat mesin empat langkah atau yang disebut juga mesin empat tak dan penemuan tersebut dipatenkan pada tahun 1877. Walaupun mesin empat tak tersebut masih terlalu sederhana dan kurang efisien, tetapi mesin tersebut diharapkan dapat menggantikan mesin uap. Pada tahun 1880, Daimler dan Maybach dipecat dari perusahaan tersebut dan keduanya mendirikan sebuah bengkel di Stuttgart. Pada tahun 1885, keduanya menciptakan karburator untuk mencampur bensin dan udara sehingga dapat digunakan sebagai bahan bakar mesin empat tak ciptaan Otto. Mereka mengembangkan mesin empat tak tersebut menjadi silinder 100 cc dan meletakkan mesin tersebut pada sebuah sepeda kayu. Sepeda kayu bermesin tersebut disebut sebagai Reitwagen ("riding car") dan menjadi sepeda motor pertama di dunia.</p>
    </div>
    <br/>
    <div class="h1">
        <h1>Data Sepeda Motor</h1>
    </div>
    <div class="tbl">
    <div class="label">
    <form @submit.prevent="add">
        <input type="hidden" v-model="form.id" required><br/>
        <label for="">Merk :  </label>
        <input type="text" v-model="form.merk" required><br/><br/>
        <label for="">Versi : </label>
        <input type="text" v-model="form.versi" required><br/><br/>
        <label for="">Negara : </label>
        <input type="text" v-model="form.negara" required><br/><br/>
        <label for="">harga : </label>
        <input type="text" v-model="form.harga" required><br/><br/>
        <label for="">Image : </label>
        <input type="text" v-model="form.image" required><br/><br/>
        <button class="add" style="margin-left:-1%" type="submit" v-show="!updateSubmit">  add  </button> <!-- jika tidak update maka tombol update tidak muncul --> 
        <button class="add" type="button" v-show="updateSubmit" @click="update(form)">Update</button> <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
    </form>
    </div>
    <br/>
    <table>
      <tr>
        <th>Merk</th>
        <th>Versi</th>
        <th>negara</th>
        <th>harga</th>
        <th>Image</th>
        <th>Action</th>
      </tr>
      <tr v-for="motor in motors" :key="motor.id" class="mot">
        <td >{{motor.merk}}</td>
        <td>{{motor.versi}}</td>
        <td>{{motor.negara}}</td>
        <td>{{motor.harga}}</td>
        <td><img :src="motor.image" alt="" width="150px" height="100px"/></td>
        <td style="text-align:center">
      <button @click="edit(motor)">Edit</button> ||  <button @click="del(motor)">Delete</button>
        </td>
      </tr>
    </table>
</div>
<div class="motor">
  <h1>Logo merk Motor</h1>
</div>
<div class="logo">
  <div class="logo1">
    <img src="https://www.fortuna-motor.co.id/wp-content/uploads/2020/04/filosofi-logo-yamaha-motor-dan-sejarahnya-e1587123850172.jpg" alt="" style="width:100px">
  </div>
  <div class="logo2">
    <img src="https://media.pricebook.co.id/article/6194a59eb42c2e822a54239e/6194a59eb42c2e822a54239e_thumb1.jpg" alt="" style="width:100px">
  </div>
  <div class="logo3">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Harley-Davidson_logo.svg/1200px-Harley-Davidson_logo.svg.png" alt="" style="width:100px">
  </div>
  <div  class="logo4">
    <img src="https://i.pinimg.com/736x/f0/5f/f2/f05ff20771a8ba0cefa28ff841faf4bf.jpg" alt="" style="width:100px">
  </div>
  <div class="logo5">
    <img src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//893/bmw_bmw-logo-mobil-bmw-original-emblem-mobil_full02.jpg" alt="" style="width:100px">
  </div>
</div>
</div>

</template>

<script>
import Project from "../components/Project.vue";
import axios from "axios";

    export default {
        name: "MotoR",
        components: {
            Project
        }, 
         data(){
    return{
        form: {
          id: "",
          merk: "",
          versi: "",
          negara: "",
          harga: "",
          image:"",
        },
        motors: "",
        updateSubmit: false,
    }
  },
   mounted() {
    this.load();
  },
  methods: {
    load(){
        axios.get('http://localhost:3000/motors').then((res) => {
        this.motors = res.data //respon dari rest api dimasukan ke motors
      }).catch ((err) => {
        console.log(err);
      })
   }, 
    edit(motor){ 
            this.updateSubmit = true;
            this.form.id = motor.id ;
            this.form.merk = motor.merk ;
            this.form.versi = motor.versi ;
            this.form.negara = motor.negara ;
            this.form.harga = motor.harga ;
            this.form.image = motor.image;
    },
    update(form){
      return axios.put('http://localhost:3000/motors/' + form.id , {merk: this.form.merk, versi: this.form.versi,  harga: this.form.harga,negara: this.form.negara,  image: this.form.image}).then(() => {
      this.load()
      this.form.id = ''
      this.form.merk = ''
      this.form.versi = ''
      this.form.harga = ''
      this.form.negara = ''
      this.form.image = ''
      this.updateSubmit = false
    }).catch((err) => {
      console.log(err);
        
    })
  },
  del(motor){
      axios.delete('http://localhost:3000/motors/' + motor.id).then((res) =>{
          this.load()
          let index = this.motors.indexOf(res.merk)
          this.motors.splice(index,1)
      })
  },
   add(){
      axios.post('http://localhost:3000/motors/', this.form).then(() => {
          this.load()
          this.form.merk = "";
          this.form.versi = "";
          this.form.negara = "";
          this.form.harga = "";
          this.form.image = "";
      })
  }
  }
         
    };
</script>

<style scoped>
    .motor {
        display: block;
        text-align: justify;
        width: 50%;
        margin-left: 25%;

    }
    .honda {
        display: flex;
        justify-content: center;
    }
    .img-kpl {
        width: 50%;
    }
    h1 {
        text-align: center;
        background-color: deepskyblue;
        border-radius: 20px;
        border: 1px solid ;
    }
    table, th, td {
    border: 2px solid deepskyblue;
    text-align: center;
    transition: 2s;
  }
  table {
    width: 100%;
  }
  .tbl {
    width: 80%;
    margin-left:13%;
  }
  .label {
    margin-right: 45%;
    margin-left: -6%;
    text-align: right;
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
    width: 50%;
    margin-left: 25%;
    margin-top: 5%;
  }
  th {
    background-color: dodgerblue;
  }
  .mot {
    transition: 1s;
  }
  .mot:hover {
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
  /* .Mtr {
    background-image: url("https://static.vecteezy.com/system/resources/thumbnails/006/852/804/small/abstract-blue-background-simple-design-for-your-website-free-vector.jpg");
  } */
</style>