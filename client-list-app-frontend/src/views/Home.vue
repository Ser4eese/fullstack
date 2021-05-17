<template>
      <v-data-table
    :headers="headers"
    :items="clients"
    :items-per-page="25"
    class="elevation-1"
  ></v-data-table>
</template>
<script>

import { server } from "../helper";
import axios from "axios";
export default {
  data() {
    return {
      headers: [
          {
            text: 'id',
            align: 'start',
            value: 'id',
          },
          { text: 'Имя', value: 'first_name' },
          { text: 'Фамилия', value: 'last_name'},
          { text: 'Адрес', value: 'address'},
          { text: 'Телефон', value: 'phone'},
          { text: 'E-mail', value: 'email'},
          { text: 'Дата регистарции', value: 'datareg'}
        ],
      clients: []
    };
  },
  created() {
    this.fetchClients();
  },
  methods: {
    fetchClients() {
      axios
        .get(`${server.baseURL}/clients`)
        .then(data => (this.clients = data.data));
    },
    deleteClients(id) {
      axios
        .delete(`${server.baseURL}/clients/delete?clientID=${id}`)
        .then(data => {
          console.log(data);
          window.location.reload();
        });
    }
  }
};
</script>
