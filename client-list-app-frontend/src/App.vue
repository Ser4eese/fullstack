<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-btn class="mr-4" to='/'>
      Главная
    </v-btn>

    <v-btn class="mr-4" to='/create'> 
      Создать
    </v-btn>
    
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
  
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
