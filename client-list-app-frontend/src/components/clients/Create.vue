<template>
   <div>
        <div class="col-md-12 form-wrapper">
          <h2> Create Client </h2>
          <form id="create-post-form" @submit.prevent="createClient">
            <div class="form-group col-md-12">
                <label for="title"> Имя </label>
                <input type="text" id="first_name" v-model="first_name" name="title" class="form-control" placeholder="Введите имя">
               </div>
            <div class="form-group col-md-12">
                <label for="title"> Фамилия </label>
                <input type="text" id="last_name" v-model="last_name" name="title" class="form-control" placeholder="Введите фамилию">
               </div>
            <div class="form-group col-md-12">
                <label for="title"> Адрес </label>
                <input type="text" id="address" v-model="address" name="title" class="form-control" placeholder="Введите адрес">
            </div>
             <div class="form-group col-md-12">
                <label for="title"> Email </label>
                <input type="text" id="email" v-model="email" name="title" class="form-control" placeholder=" Введите email">
            </div>
            <div class="form-group col-md-12">
                <label for="title"> Телефон </label>
                <input type="text" id="phone_number" v-model="phone" name="title" class="form-control" placeholder="Введите номер телефона">
            </div>
              <div class="form-group col-md-4 pull-right">
                  <button class="btn btn-success" type="submit"> Создать </button>
              </div>           </form>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { server } from "../../helper";
import router from "../../router";
export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      address: "",
      email: "",
      phone: "",
    };
  },
  methods: {
    createClient() {
      let clientData = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        phone: this.phone,
        address: this.address,
      };
      this.__submitToServer(clientData);
    },
    __submitToServer(data) {
      axios.post(`${server.baseURL}/clients/create`, data).then(() => {
        router.push({ name: "home" });
      });
    }
  }
};
</script>