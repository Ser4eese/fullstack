<template>
    <form>
    <v-text-field
      v-model="first_name"
      :error-messages="firstnameErrors"
      :counter="15"
      label="Имя"
      required
      @input="$v.first_name.$touch()"
      @blur="$v.first_name.$touch()"
    ></v-text-field>
     <v-text-field
      v-model="last_name"
      :error-messages="lastnameErrors"
      :counter="15"
      label="Фамилия"
      required
      @input="$v.last_name.$touch()"
      @blur="$v.last_name.$touch()"
    ></v-text-field>
     <v-text-field
      v-model="address"
      :error-messages="addressErrors"
      :counter="25"
      label="Адрес"
      required
      @input="$v.address.$touch()"
      @blur="$v.address.$touch()"
    ></v-text-field>
     <v-text-field
      v-model="phone"
      :error-messages="phoneErrors"
      :counter="9"
      label="Телефон"
      required
      @input="$v.phone.$touch()"
      @blur="$v.phone.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>

    <v-btn
      class="mr-4"
      @click="submit"
    >
      Добавить
    </v-btn>
    <v-btn @click="clear">
      Очистить поля
    </v-btn>
  </form>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email, numeric } from 'vuelidate/lib/validators'
import axios from "axios";
import { server } from "../../helper";
import router from "../../router";
export default {
   mixins: [validationMixin],

    validations: {
      first_name: { required, maxLength: maxLength(15) },
      last_name: { required, maxLength: maxLength(15) },
      address: { required, maxLength: maxLength(25) },
      phone: { required, maxLength: maxLength(9), numeric},
      email: { required, email },
    },
  data() {
    return {
      first_name: "",
      last_name: "",
      address: "",
      phone: "",
      email: "",
    };
  },
  computed: {

      
      firstnameErrors () {
        const errors = []
        if (!this.$v.first_name.$dirty) return errors
        !this.$v.first_name.maxLength && errors.push('Имя должно состоять не более чем из 15 символов.')
        !this.$v.first_name.required && errors.push('Имя обязательно.')
        return errors
      },
      lastnameErrors () {
        const errors = []
        if (!this.$v.last_name.$dirty) return errors
        !this.$v.last_name.maxLength && errors.push('Фамилия должна состоять не более чем из 25 символов.')
        !this.$v.last_name.required && errors.push('Фамилия обязательно.')
        return errors
      },
      addressErrors () {
        const errors = []
        if (!this.$v.address.$dirty) return errors
        !this.$v.address.maxLength && errors.push('Адрес должнн состоять не более чем из 25 символов.')
        !this.$v.address.required && errors.push('Адрес обязательно.')
        return errors
      },
      phoneErrors () {
        const errors = []
        if (!this.$v.phone.$dirty) return errors
        !this.$v.phone.maxLength && errors.push('Телефон должен состоять не более чем из 9 символов.')
        !this.$v.phone.required && errors.push('Телефон обязательно.')
        !this.$v.phone.numeric && errors.push('Телефон должен состоять из цифр')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Должен быть действующий e-mail')
        !this.$v.email.required && errors.push('E-mail обязательен')
        return errors
      },
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
      axios.post(`${server.baseURL}/clients`, data).then(() => {
        router.push({ name: "Home" });
      });
    },
    submit () {
        this.$v.$touch()
        let clientData = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        phone: this.phone,
        address: this.address,
        datereg: new Date(),
      };
      this.__submitToServer(clientData);
      },
    clear () {
        this.$v.$reset()
        this.last_name = ''
        this.first_name = ''
        this.address = ''
        this.phone = ''
        this.email = ''

      },
  },
};
</script>