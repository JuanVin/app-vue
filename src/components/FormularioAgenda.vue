<template lang="">
  <div class="centrarDiv text-center">
    <div class="w-50 mt-5">
      {{ respuesta }}
      <div class="form-group">
        <label for="apellido">Apellido</label>
        <input
          type="text"
          v-model="apellido"
          class="form-control"
          id="apellido"
        />
      </div>
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input type="text" v-model="nombre" class="form-control" id="nombre" />
      </div>
      <div class="form-group">
        <label for="telefono">Telefono</label>
        <input
          type="text"
          v-model="telefono"
          class="form-control"
          id="telefono"
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" v-model="email" class="form-control" id="email" />
      </div>
      <div class="form-group">
        <label for="foto">Foto</label>
        <input type="text" v-model="foto" class="form-control" id="foto" />
      </div>
      <button className="btn btn-success mt-3" @click="traerInformacion()">
        Cargar
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormularioAgenda",
  data() {
    return {
      apellido: null,
      nombre: null,
      telefono: null,
      email: null,
      foto: null,
      url_id: null,
      respuesta: null,
    };
  },
  beforeMount() {
    this.url_id = this.$route.params.id;
  },
  methods: {
    traerInformacion() {
      let body;
      if (this.url_id) {
        body = {
          id: this.url_id,
          apellido: this.apellido,
          nombre: this.nombre,
          telefono: parseInt(this.telefono),
          email: this.email,
          fotourl: this.foto,
        };
        this.actualizarContacto(body);
      } else {
        body = {
          apellido: this.apellido,
          nombre: this.nombre,
          telefono: parseInt(this.telefono),
          email: this.email,
          fotourl: this.foto,
        };
        this.crearContacto(body);
      }
    },
    async actualizarContacto(body) {
      let url = `http://168.194.207.98:8081/api_contacto/put_contacto.php`,
        options = {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(body),
          mode: "cors",
        },
        response;
      try {
        response = await fetch(url, options);
        response = await response.json();
      } catch (e) {
        console.log(e);
      }
      this.respuesta = response;
    },
    async crearContacto(body) {
      let url = `http://168.194.207.98:8081/api_contacto/post_contacto.php`,
        options = {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(body),
          mode: "cors",
        },
        response;

      try {
        response = await fetch(url, options);
        response = await response.json();
      } catch (e) {
        console.log(e);
      }
      this.respuesta = response;
    },
  },
};
</script>
<style scoped>
.centrarDiv {
  display: flex;
  justify-content: center;
}
</style>
