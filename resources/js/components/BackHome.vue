<template>
  <div>
      <button
        class="btn btn-link py-3 px-4 text-80 opacity-50"
        rel="prev"
        dusk="previous"
        @click="goHome"
      >
          Previous
      </button>
  </div>
</template>

<script>
  export default {
    methods:{
      goHome(){
        this.$router.push({ name: 'laravel-nova-configuration' })
      }
    }
  }
</script>
