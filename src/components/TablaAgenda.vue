<template lang="">
  <div class="text-center">
    <h3>{{this.respuesta}}</h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Foto</th>
          <th scope="col">Apellido</th>
          <th scope="col">Nombre</th>
          <th scope="col">Telefono</th>
          <th scope="col">Email</th>
          <th scope="col">Modificar</th>
          <th scope="col">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(contacto, index) in contactos" :key="contacto.id">
          <th><img :src="contacto.fotourl" lang="imagen"></th>
          <td>{{contacto.apellido}}</td>
          <td>{{contacto.nombre}}</td>
          <td>{{contacto.telefono}}</td>
          <td>{{contacto.email}}</td>
          <td><a class="btn btn-success" :href="'/modificar/'+contacto.id">Modificar</a></td>
          <td><button class="btn btn-warning" @click="eliminarContacto(contacto.id,index)">Eliminar</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "TablaAgenda",
  data() {
    return {
      contactos: [],
      status: null,
      respuesta: null
    };
  },
  beforeMount() {
    this.traerContactos();
  },
  methods: {
    async traerContactos() {
      let respuesta = await fetch(
        "http://168.194.207.98:8081/api_contacto/get_contactos.php"
      );
      this.status = respuesta.status;
      this.contactos = await respuesta.json();
      console.log(this.contactos);
    },
    async eliminarContacto(id, index){
        let url = `http://168.194.207.98:8081/api_contacto/delete_contacto.php?id=${id}`
        let response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        response = await response.json()
        this.respuesta = response
        if(response.rta === "OK"){
            this.contactos.splice(index,1)
        }
    }
  },
};
</script>
<style lang=""></style>
