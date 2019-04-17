<template>
  <div>
    <b-button @click="toggle" :variant="color">Open Modal</b-button>
    <b-modal ref="piterJsModal" :title="modalTitle">
      {{ text }}
      <b-form-input v-model="text"></b-form-input>
    </b-modal>
  </div>
</template>
<script>
  export default {
      props: {
          color: { type: String, default: 'primary' },
          modalTitle: { type: String, default: 'Hello, PiterJS' },
      },
      data: () => ({
          text: 'Hello, PiterJS'
      }),
      methods: {
          toggle() {
              this.$refs.piterJsModal.toggle()
          }
      }
  }
</script>
