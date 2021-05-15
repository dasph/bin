<template>
  <Form class='flex flex-col xl:flex-row mx-2' @submit='submit' v-slot='{ errors, isSubmitting }' :validation-schema='schema'>
    <div class='w-full flex flex-grow flex-col xl:w-4/5 xl:pr-10'>
      <h2 className='text-lg sm:text-xl px-1 pb-1 border-l-1 border-current select-none'>your bin</h2>
      <Field name='value' v-slot='{ field }'>
        <Textarea v-bind='field' :disabled='isSubmitting' autofocus placeholder='paste goes in here...' class='flex-grow w-full mt-2 border-current border-1 font-mono font-light text-sm disabled:opacity-50' />
      </Field>
    </div>

    <div class='xl:flex-grow mt-5 xl:mt-0'>
      <h2 className='text-lg sm:text-xl px-1 pb-1 border-l-1 border-current select-none'>settings</h2>
      <div class='grid grid-cols-5 gap-y-4 max-w-lg items-center mx-auto xl:mx-0 pt-5 text-sm sm:text-base'>
        <h3 class='col-span-1 sm:text-lg ml-1.5 select-none font-light'>title</h3>
        <Field name='title' v-slot='{ field }'>
          <InputText v-bind='field' placeholder="bin's title" class='col-span-4 disabled:opacity-50' :disabled='isSubmitting' />
        </Field>
        <span class='col-span-full text-sm mt-2' v-if='errors.value'>⛔️ {{ errors.value }}</span>
        <span class='col-span-full text-sm' v-if='errors.title'>⛔️ {{ errors.title }}</span>

        <InputSubmit value='create' class='col-span-full m-auto px-6 py-1 select-none cursor-pointer disabled:opacity-50 disabled:cursor-default' :disabled='isSubmitting' />
      </div>
    </div>
  </Form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Form, Field } from 'vee-validate'
import { request } from '../utils'
import Textarea from '../components/Textarea.vue'
import InputText from '../components/InputText.vue'
import InputSubmit from '../components/InputSubmit.vue'

type Payload = {
  title: string;
  value: string;
}

type SubmitResponse = {
  id: string;
}

export default defineComponent({
  name: 'BinSubmit',
  components: {
    Form,
    Field,
    Textarea,
    InputText,
    InputSubmit
  },
  data () {
    return {
      schema: {
        value (value: string) {
          if (!value || value.trim() === '') return 'Your bin is empty'
          return true
        },
        title (value: string) {
          if (!value || value.trim() === '') return 'Title is required'
          return true
        }
      }
    }
  },
  methods: {
    submit (payload: Payload) {
      return request<SubmitResponse>('pastes-post', { method: 'post', body: JSON.stringify(payload) }).then(({ id }) => {
        this.$router.push({ name: 'bin', params: { id } })
      })
    }
  }
})
</script>
