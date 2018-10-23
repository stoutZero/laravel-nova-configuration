<template>
  <modal @modal-close="handleClose">
    <form
      class="bg-white rounded-lg shadow-lg overflow-hidden"
      style="width: 460px"
      slot-scope="props"
      @submit.prevent="handleConfirm"
    >
      <slot :uppercaseMode="uppercaseMode" :mode="mode">
        <div class="p-8">
          <heading class="mb-6" :level="2"
          >{{ __(uppercaseMode + ' Resource') }}</heading>

          <p class="text-80 leading-normal"
          >{{__('Are you sure you want to '+mode+' the selected resources?')}}</p>
        </div>
      </slot>

      <div class="bg-30 px-6 py-3 flex">
        <div class="ml-auto">
          <button
            class="btn text-80 font-normal h-9 px-3 mr-3 btn-link"
            type="button"
            data-testid="cancel-button"
            dusk="cancel-delete-button"
            @click.prevent="handleClose"
          >{{__('Cancel')}}</button>

          <button
            class="btn btn-default btn-danger"
            id="confirm-delete-button"
            ref="confirmButton"
            data-testid="confirm-button"
            type="submit"
          >{{ __(uppercaseMode) }}</button>
        </div>
      </div>
    </form>
  </modal>
</template>

<script>
  export default {
    props: {
      mode: {
        type: String,
        default: 'delete',
        validator: function(value) {
          return ['force delete', 'delete', 'detach'].indexOf(value) !== -1
        },
      },
    },

    methods: {
      handleClose() {
        this.$emit('close')
      },

      handleConfirm() {
        this.$emit('confirm')
      },
    },

    mounted() {
      this.$refs.confirmButton.focus()
    },

    computed: {
      uppercaseMode() {
        return _.startCase(this.mode)
      },
    },
  }
</script>
