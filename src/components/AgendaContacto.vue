<template lang="">
  <div>
    <h3>Busqueda por Indice</h3>
    <div class="grid-container">
      <div class="grid-item"><a href="a">A</a></div>
      <div class="grid-item"><a href="b">B</a></div>
      <div class="grid-item"><a href="c">C</a></div>
      <div class="grid-item"><a href="d">D</a></div>
      <div class="grid-item"><a href="e">E</a></div>
      <div class="grid-item"><a href="f">F</a></div>
      <div class="grid-item"><a href="g">G</a></div>
      <div class="grid-item"><a href="h">H</a></div>
      <div class="grid-item"><a href="i">I</a></div>
      <div class="grid-item"><a href="j">J</a></div>
      <div class="grid-item"><a href="k">K</a></div>
      <div class="grid-item"><a href="l">L</a></div>
      <div class="grid-item"><a href="m">M</a></div>
      <div class="grid-item"><a href="n">N</a></div>
      <div class="grid-item"><a href="ñ">Ñ</a></div>
      <div class="grid-item"><a href="o">O</a></div>
      <div class="grid-item"><a href="p">P</a></div>
      <div class="grid-item"><a href="q">Q</a></div>
      <div class="grid-item"><a href="r">R</a></div>
      <div class="grid-item"><a href="s">S</a></div>
      <div class="grid-item"><a href="t">T</a></div>
      <div class="grid-item"><a href="u">U</a></div>
      <div class="grid-item"><a href="v">V</a></div>
      <div class="grid-item"><a href="w">W</a></div>
      <div class="grid-item"><a href="x">X</a></div>
      <div class="grid-item"><a href="y">Y</a></div>
      <div class="grid-item"><a href="z">Z</a></div>
    </div>
    <div v-if="contactos.length > 0">
      <div class="grid-container-agenda mt-5">
        <div class="grid-item-agenda">Foto</div>
        <div class="grid-item-agenda">Apellido</div>
        <div class="grid-item-agenda">Nombre</div>
        <div class="grid-item-agenda">Telefono</div>
        <div class="grid-item-agenda">Email</div>
        <template v-for="contacto in contactos" :key="contacto.id">
          <div class="grid-item">
            <img :src="contacto.fotourl" />
          </div>
          <div class="grid-item">{{ contacto.apellido }}</div>
          <div class="grid-item">{{ contacto.nombre }}</div>
          <div class="grid-item">{{ contacto.telefono }}</div>
          <div class="grid-item">{{ contacto.email }}</div>
        </template>
      </div>
    </div>
    <div class="mt-5" v-else>
      <h1>Sin datos</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "AgendaContacto",
  beforeMount() {
    this.letra_url = this.$route.params.id;
    this.letra = this.asignarLetra();
  },
  data() {
    return {
      letra: null,
      contactos: [],
      status: null,
      letra_url: null,
    };
  },
  methods: {
    async traerContactosPorLetra(letra) {
      let response = await fetch(
        `http://168.194.207.98:8081/api_contacto/get_contactos.php?indice=${letra}`
      );
      this.status = response.status;
      this.contactos = await response.json();
      console.log(this.contactos);
    },
    asignarLetra() {
      if (this.letra_url) {
        this.letra = this.letra_url;
      } else {
        this.letra = "a";
      }
      this.traerContactosPorLetra(this.letra);
    },
  },
};
</script>
<style scoped>
.grid-container-agenda {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  background-color: #fff;
  padding: 2px;
}
.grid-item-agenda {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 2px;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto;
  background-color: #2196f3;
  padding: 2px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 2px;
  font-size: 14px;
  text-align: center;
}
img {
  height: 50px;
}
</style>
