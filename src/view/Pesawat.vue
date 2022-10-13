<template>
<div>
    <Project />
    <div>
         <h1>Ini Bagian Pesawat</h1>
    </div>
    <div class="pesawat">
        <div class="ps">
        <img src="https://cdn-2.tstatic.net/makassar/foto/bank/images/Sriwijaya-Air-dengan-nomor-registrasi-PK-CRE-1102022.jpg" alt="" class="img-ps">
        </div>
        <h1>Pesawat</h1>
        <p>Pesawat terbang (bahasa Inggris: Airplane) adalah pesawat udara yang lebih berat dari udara, bersayap tetap, dan dapat terbang dengan tenaga sendiri.[1] Secara umum istilah pesawat terbang sering juga disebut dengan pesawat udara, kapal terbang atau pesawat saja, dengan tujuan pendefenisian yang sama sebagai kendaraan yang mampu terbang di atmosfer atau udara. Namun dalam dunia penerbangan, istilah pesawat terbang berbeda dengan pesawat udara, istilah pesawat udara jauh lebih luas pengertiannya karena telah mencakup pesawat terbang dan helikopter.</p>
        <h1>Sejarah Pesawat</h1>
        <p>Abbas bin Firnas atau Abbas Ibn Firnas adalah penemu mesin penerbangan pertama, seribu tahun sebelum pesawat bermotor ditemukan.

        <p>Abbas Ibn Firnas lahir pada tahun 810 di Izn-Rand-Onda di Andalusia, yang sekarang bernama Ronda di Spanyol. Pada masanya, Andalusia adalah pusat pembelajaran bagi para insinyur, arsitek, dan ilmuwan. Cordova (atau Cordoba) serta Baghdad adalah pusat budaya kembar seni dan sains Islam.</p>

        <p>Ia menghabiskan sebagian besar masa dewasanya di Emirat Cordoba, salah satu pusat pembelajaran utama di era Kekhalifahan Umayyah.</p>

        <p>Abbas Ibn Firnas merupakan keturunan Berber. Akar namanya adalah Afernas yang sekarang menjadi nama umum dan tersebar luas di Maroko dan Aljazair.
            

            Ia meninggal antara tahun 890-895 Masehi. Sejarawan mengatakan, cedera Abbas Ibn Firnas saat mencoba terbang mungkin turut menjadi penyebab kematiannya.
            

        Beberapa catatan sejarah menunjukkan Abbas Ibn Firnas dipengaruhi oleh Armen Firman, yang bukan ilmuwan atau polymath tetapi pengamat alam yang cerdik.
        

        Firman-lah yang pertama membuat sayap dari papan kayu dibungkus sutra dan bulu burung.
        

        Pada awal 850-an, Firman naik ke puncak menara masjid tertinggi di Qurtuba dan melompat dengan sayap.
        

        Meskipun usahanya gagal dan dia jatuh ke darat, mesin terbang itu mengembang tepat pada waktunya dan memperlambat penurunannya. Dia cukup beruntung tidak patah tulang dan penundaan pendaratannya terbukti bisa menyelamatkan nyawa.</p>

        <p>Abbas Ibn Firnas menyaksikan eksperimen Firman dengan berdiri di antara kerumunan orang banyak yang memandangi langit</p>

        <p>Wright Bersaudara memang merupakan penemu pesawat pertama, tetapi Abbas Ibn Firnas yang hidup pada abad ke-8 disebut sebagai manusia pertama yang terbang dengan bantuan kerangka bambu, sepasang sayap dari sutra, kayu, dan bulu asli.</p>

        <p>Abbas bin Firnas adalah penerbang pertama yang terbang dengan mesin lebih berat, karena eksperimen terbang pertama dilakukan oleh dua filsuf China yaitu Mozi dan Lu Ban pada abad ke-5 tetapi dengan benda. Mereka disebut sebagai penemu layang-layang. Menurut para sejarawan yang dikutip TRT World, ketika Abbas Ibn Firnas berusia antara 65-70 tahun, dia melompat dari tebing gunung Jabal Al-Arus di Yaman.</p>

        <p>Abbas Ibn Firnas meluncur ke angkasa dan terbang selama setidaknya 10 menit, kemudian jatuh lalu terluka.

        Ia kemudian menyadari kesalahannya yaitu tidak menghitung mekanisme pendaratan, sehingga tak bisa menyeimbangkan penerbangannya dan mendarat secara paksa.

        Selama 12 tahun selanjutnya di sisa hidupnya, Abbas Ibn Firnas menemukan bahwa pendaratan dilakukan dengan koordinasi ekor dan sayap. Ia pun mempelajari cara burung terbang dan mendarat.

        Abbas Ibn Firnas mengeklaim sebagai dalang teori penciptaan ornithopter, pesawat yang meniru burung dan terbang dengan mengepakkan sayap.

        Desain mesin terbangnya kemudian menjadi dasar teknik penerbangan pada akhir abad ke-20.</p>

        <p>Pesawat terbang yang lebih berat dari udara ini diterbangkan pertama kali oleh Wright Bersaudara (Orville Wright dan Wilbur Wright) dengan menggunakan pesawat rancangan sendiri yang dinamakan Flyer yang diluncurkan pada tahun 1903 di sekitar Amerika Serikat. Selain Wright bersaudara, tercatat beberapa penemu pesawat lain yang menemukan pesawat terbang antara lain Samuel Franklin Cody yang melakukan aksinya di lapangan Farnborough, Inggris tahun 1910. Sedangkan untuk pesawat yang lebih ringan dari udara sudah terbang jauh sebelumnya. Penerbangan pertama kalinya dengan menggunakan balon udara panas yang ditemukan seorang berkebangsaaan Prancis oleh Montgolfier Besaudara (Joseph Montgolfier dan Etiene Montgolfier) terjadi pada tahun 1782, kemudian disempurnakan seorang Jerman yang bernama Ferdinand von Zeppelin dengan memodifikasi balon berbentuk cerutu yang digunakan untuk membawa penumpang dan barang pada tahun 1900. Pada tahun tahun berikutnya balon Zeppelin mengusai pengangkutan udara sampai musibah kapal Zeppelin pada perjalanan trans-Atlantik di New Jersey 1936 yang menandai berakhirnya era Zeppelin meskipun masih dipakai menjelang Perang Dunia II. Setelah zaman Wright, pesawat terbang banyak mengalami modifikasi baik dari rancang bangun, bentuk dan mesin pesawat untuk memenuhi kebutuhan transportasi udara.Pesawat komersial yang lebih besar dibuat pada tahun 1949 bernama Bristol Brabazon.Sampai sekarang pesawat penumpang terbesar di dunia di buat oleh airbus industrie dari eropa dengan pesawat A380</p>
    </div>
    <br/>
    <div class="h1">
    <h1>Data Pesawat</h1>
</div>
    <div class="tbl">
    <div class="label">
    <form @submit.prevent="add">
        <input type="hidden" v-model="form.id" required><br/>
        <label for="">nama :  </label>
        <input type="text" v-model="form.nama" required><br/><br/>
        <label for="">Kapasitas : </label>
        <input type="text" v-model="form.bermuatan" required><br/><br/>
        <label for="">Jarak Tempuh : </label>
        <input type="text" v-model="form.tempuh" required><br/><br/>
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
        <th>Kapasitas</th>
        <th>Jarak jempuh</th>
        <th>Image</th>
        <th>Action</th>
      </tr>
      <tr v-for="pesawat in pesawats" :key="pesawat.id" class="pt">
        <td>{{pesawat.nama}}</td>
        <td>{{pesawat.bermuatan}}</td>
        <td>{{pesawat.tempuh}}</td>
        <td><img :src="pesawat.image" alt="" width="150px" height="100px"/></td>
        <td style="text-align:center">
      <button @click="edit(pesawat)">Edit</button> ||  <button @click="del(pesawat)">Delete</button>
        </td>
      </tr>
    </table>
</div>
<div class="pesawat">
  <h1>Logo Bandara Indonesia</h1>
</div>
<div class="logo">
  <img src="https://2.bp.blogspot.com/-qTHWSE_Tbk8/Ut6S4dkZf1I/AAAAAAAAPho/9tOJov9887U/s1600/LOGO+BANDARA+SOEKARNO+HATTA.png" alt="" width="100px">
  <img src="https://australianaviation.com.au/wp-content/uploads/2013/04/Garuda-Logo-Vertical-800.jpg" alt="" width="100px">
  <img src="https://1.bp.blogspot.com/-JfeclafXKLo/U2cppf_qmvI/AAAAAAAAB64/vZZc7CQHwq8/s1600/Logo+Lion+Air.JPG" alt="" width="100px">
  <img src="https://pbs.twimg.com/profile_images/1368783255973990403/CsuBVeGx_400x400.jpg" alt="" width="100px">
  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/AirAsia_New_Logo.svg" alt="" width="100px">
</div>
</div>
</template>

<script>
import Project from "../components/Project.vue";
import axios from "axios";

    export default {
        name: "PesawaT",
        components: {
            Project
        }, 
         data(){
    return{
        form: {
          id: "",
          nama: "",
          bermuatan: "",
          tempuh: "",
          image:"",
        },
        pesawats: "",
        updateSubmit: false,
    }
  },
   mounted() {
    this.load();
  },
  methods: {
    load(){
        axios.get('http://localhost:3000/pesawats').then((res) => {
        this.pesawats = res.data //respon dari rest api dimasukan ke pesawats
      }).catch ((err) => {
        console.log(err);
      })
   }, 
   add(){
      axios.post('http://localhost:3000/pesawats/', this.form).then(() => {
          this.load()
          this.form.nama = "";
          this.form.bermuatan = "";
          this.form.tempuh = "";
          this.form.buatan = "";
          this.form.image = "";
      })
  },
    edit(pesawat){ 
            this.updateSubmit = true;
            this.form.id = pesawat.id ;
            this.form.nama = pesawat.nama ;
            this.form.bermuatan = pesawat.bermuatan ;
            this.form.tempuh = pesawat.tempuh ;
            this.form.buatan = pesawat.buatan ;
            this.form.image = pesawat.image;
    },
    update(form){
      return axios.put('http://localhost:3000/pesawats/' + form.id , {nama: this.form.nama, bermuatan: this.form.bermuatan, tempuh: this.form.tempuh, buatan: this.form.buatan,  image: this.form.image}).then(() => {
      this.load()
      this.form.id = ''
      this.form.nama = ''
      this.form.bermuatan = ''
      this.form.buatan = ''
      this.form.tempuh = ''
      this.form.image = ''
      this.updateSubmit = false
    }).catch((err) => {
      console.log(err);
        
    })
  },
  del(pesawat){
      axios.delete('http://localhost:3000/pesawats/' + pesawat.id).then((res) =>{
          this.load()
          let index = this.pesawats.indexOf(res.nama)
          this.pesawats.splice(index,1)
      })
  },
   
  }
         
    };
</script>
<style scoped>
    .pesawat {
        display: block;
        text-align: justify;
        width: 50%;
        margin-left: 25%;
    }
    .img-ps {
        width: 50%;
    }
    .ps {
    display: flex;
    justify-content: center;
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
  }
  th {
    background-color: dodgerblue;
   }
  table {
    width: 100%;
   
  }
  .tbl {
    width: 80%;
    margin-left:13%;
  }

  p:hover {
    border: 2px solid deepskyblue;
    padding: 8px;
    border-radius: 20px;
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
  .pt {
    transition: 1s;
  }
  .pt:hover {
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
</style>