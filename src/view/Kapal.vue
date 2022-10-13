<template>
  <div>
    <Project />
    <div>
      <h1>Ini Bagian Kapal Laut</h1>
    </div>
    <div class="kapal">
      <div class="kpl">
        <img
          src="https://upload.wikimedia.org/wikipedia/id/thumb/1/1f/Dewaruci.jpg/800px-Dewaruci.jpg"
          alt=""
          class="img-kpl"
        />
      </div>
      <h1>Kapal Laut</h1>
      <p>
        Kapal (bahasa Inggris: Ship) adalah kendaraan pengangkut penumpang dan
        barang di laut (sungai dsb)[1] seperti halnya sampan atau perahu yang
        lebih kecil. Kapal biasanya cukup besar untuk membawa perahu kecil
        seperti sekoci. Sedangkan dalam istilah inggris, dipisahkan antara ship
        yang lebih besar dan boat yang lebih kecil. Secara kebiasaannya kapal
        dapat membawa perahu tetapi perahu tidak dapat membawa kapal. Ukuran
        sebenarnya di mana sebuah Perahu disebut Kapal selalu ditetapkan oleh
        undang-undang dan peraturan atau kebiasaan setempat.
      </p>
      <p>
        Berabad-abad kapal dipakai oleh manusia untuk mengarungi sungai atau
        lautan yang diawali oleh penemuan perahu. Biasanya manusia pada masa
        lampau menggunakan kano, rakit ataupun perahu, semakin besar kebutuhan
        akan daya muat maka dibuatlah perahu atau rakit yang berukuran lebih
        besar yang dinamakan kapal. Bahan-bahan yang digunakan untuk pembuatan
        kapal pada masa lampau menggunakan kayu, bambu ataupun batang-batang
        papirus seperti yang digunakan bangsa mesir kuno kemudian digunakan
        bahan bahan logam seperti besi/baja karena kebutuhan manusia akan kapal
        yang kuat. Untuk penggeraknya manusia pada awalnya menggunakan dayung
        kemudian angin dengan bantuan layar, mesin uap setelah muncul revolusi
        Industri dan mesin diesel serta Nuklir. Beberapa penelitian memunculkan
        kapal bermesin yang berjalan mengambang di atas air seperti Hovercraft
        dan Ekranoplane. Serta kapal yang digunakan di dasar lautan yakni kapal
        selam.
      </p>

      <p>
        abad kapal digunakan untuk mengangkut penumpang dan barang sampai
        akhirnya pada awal abad ke-20 ditemukan pesawat terbang yang mampu
        mengangkut barang dan penumpang dalam waktu singkat maka kapal-pun
        mendapat saingan berat. Namun untuk kapal masih memiliki keunggulan
        yakni mampu mengangkut barang dengan tonase yang lebih besar sehingga
        lebih banyak didominasi kapal niaga dan tanker sedangkan kapal penumpang
        banyak dialihkan menjadi kapal pesiar seperti Queen Elizabeth dan Awani
        Dream
      </p>
    </div>
    <br />
    <div class="h1">
      <h1>Data Kapal Laut</h1>
    </div>
    <div class="tbl">
      <div class="label">
        <form @submit.prevent="add">
          <input type="hidden" v-model="form.id" required /><br />
          <label for="">Nama : </label>
          <input type="text" v-model="form.nama" required /><br /><br />
          <label for="">Fungsi : </label>
          <input type="text" v-model="form.fungsi" required /><br /><br />
          <label for="">Ukuran : </label>
          <input type="text" v-model="form.ukuran" required /><br /><br />
          <label for="">Image : </label>
          <input type="text" v-model="form.image" required /><br /><br />
          <button class="add" style="margin-left: -1%" type="submit" v-show="!updateSubmit">
            add
          </button>
          <!-- jika tidak update maka tombol update tidak muncul -->
          <button class="add" type="button" v-show="updateSubmit" @click="update(form)">
            Update
          </button>
          <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
        </form>
      </div>
      <br />
      <table>
        <tr>
          <th>Nama</th>
          <th>Fungsi</th>
          <th>Ukuran/Penumpang</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
        <tr v-for="kapal in kapals" :key="kapal.id" class="kl">
          <td>{{ kapal.nama }}</td>
          <td>{{ kapal.fungsi }}</td>
          <td>{{ kapal.ukuran }}</td>
          <td>
            <img :src="kapal.image" alt="" width="150px" height="100px" />
          </td>
          <td style="text-align: center">
            <button @click="edit(kapal)">Edit</button> ||
            <button @click="del(kapal)">Delete</button>
          </td>
        </tr>
      </table>
    </div>
    <div class="h1">
      <h1>Logo Perusahaan/Merk Kapal</h1>
    </div>
    <div class="logo">
      <img src="https://images.bisnis-cdn.com/posts/2018/01/03/723113/djakarta_lloyd-1sah.jpg" alt="" width="120px">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ98cSt8v8OaZKRf0ykr3sBT-VQMx9BRA0bSg&usqp=CAU" alt="" width="120px">
      <img src="https://i0.wp.com/fiberboat-indonesia.com/wp-content/uploads/2013/01/logo-fbi-fix.jpg?fit=448%2C228&ssl=1" alt="" width="120px">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGfg0byki8BAol4KZOAVCkCDwYSZD6fvJY-A&usqp=CAU" alt="" width="120px">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa7nptyXjN4buOlXVAoGDWywYOmRPgYpDLkg&usqp=CAU" alt="" width="120px">
    </div>
  </div>
</template>

<script>
import Project from "../components/Project.vue";
import axios from "axios";

export default {
  name: "KapaL",
  components: {
    Project,
  },
  data() {
    return {
      form: {
        id: "",
        nama: "",
        fungsi: "",
        ukuran: "",
        image: "",
      },
      kapals: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/kapals")
        .then((res) => {
          this.kapals = res.data; //respon dari rest api dimasukan ke kapals
        })
        .catch((err) => {
          console.log(err);
        });
    },
    edit(kapal) {
      this.updateSubmit = true;
      this.form.id = kapal.id;
      this.form.nama = kapal.nama;
      this.form.fungsi = kapal.fungsi;
      this.form.ukuran = kapal.ukuran;
      this.form.image = kapal.image;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/kapals/" + form.id, {
          nama: this.form.nama,
          fungsi: this.form.fungsi,
          ukuran: this.form.ukuran,
          harga: this.form.harga,
          image: this.form.image,
        })
        .then(() => {
          this.load();
          this.form.id = "";
          this.form.nama = "";
          this.form.fungsi = "";
          this.form.ukuran = "";
          this.form.image = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(kapal) {
      axios.delete("http://localhost:3000/kapals/" + kapal.id).then((res) => {
        this.load();
        let index = this.kapals.indexOf(res.nama);
        this.kapals.splice(index, 1);
      });
    },
    add() {
      axios.post("http://localhost:3000/kapals/", this.form).then(() => {
        this.load();
        this.form.nama = "";
        this.form.fungsi = "";
        this.form.ukuran = "";
        this.form.image = "";
      });
    },
  },
};
</script>

<style scoped>
.kapal {
  display: block;
  text-align: justify;
  width: 50%;
  margin-left: 25%;
}
.img-kpl {
  width: 60%;
  border: 1px solid deepskyblue;
}
.kpl {
  display: flex;
  justify-content: center;
}
h1 {
  text-align: center;
  border-radius: 20px;
  border: 1px solid ;
}
table,
th,
td {
  border: 2px solid deepskyblue;
  text-align: center;
}
table {
  width: 100%;
}
.tbl {
  width: 80%;
  margin-left: 13%;
}
.label {
  text-align: center;
  margin-left: -6%;
  text-align: right;
  margin-right: 45%;
}
h1 {
  background-color: deepskyblue;
}
.h1 {
  display: block;
  text-align: justify;
  width: 50%;
  margin-left: 25%;
}
th {
    background-color: dodgerblue;
  }
   .kl {
    transition: 1s;
  }
  .kl:hover {
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
  .logo {
    display: flex;
    justify-content: space-around;
    width: 60%;
    margin-left: 20%;
    margin-top: 5%;
  }
</style>
