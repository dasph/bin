<template>
  <Form class='flex flex-col xl:flex-row mx-2' @submit='submit' v-slot='{ errors, isSubmitting, values }' :validation-schema='schema' ref='form'>
    <div class='w-full flex flex-grow flex-col xl:w-4/5 xl:pr-10'>
      <h2 className='text-lg sm:text-xl px-1 pb-1 border-l-1 border-current select-none'>your bin</h2>
      <Field name='value' v-slot='{ field }' :validateOnBlur='!!errors.value' :validateOnChange='true' :validateOnInput='true'>
        <Textarea v-bind='field' :disabled='isSubmitting' autofocus placeholder='paste goes in here...' class='flex-grow w-full mt-2 border-current border-1 font-mono font-light text-sm disabled:opacity-50' />
      </Field>
    </div>

    <div class='xl:w-1/5 mt-5 xl:mt-0'>
      <h2 className='text-lg sm:text-xl px-1 pb-1 border-l-1 border-current select-none'>settings</h2>
      <div class='grid grid-cols-10 gap-y-4 max-w-lg items-center mx-auto xl:mx-0 pt-5 text-sm sm:text-base'>
        <h3 class='col-span-3 xs:col-span-2 sm:text-lg ml-1.5 select-none font-light'>title</h3>
        <Field name='title' v-slot='{ field }' :validateOnBlur='!!errors.title' :validateOnChange='true' :validateOnInput='true'>
          <InputText v-bind='field' placeholder="bin's title" maxlength='64' class='col-span-7 xs:col-span-8 disabled:opacity-50' :disabled='isSubmitting' />
        </Field>

        <Field name='password' v-slot='{ field }' :validateOnBlur='!!errors.password' :validateOnChange='true' :validateOnInput='false'>
          <h3 class='col-span-3 xs:col-span-2 sm:text-lg ml-1.5 select-none font-light' :class="{ 'opacity-50': !field.value}">pass</h3>
          <InputText type='password' v-bind='field' maxlength='32' class='col-span-7 xs:col-span-8 disabled:opacity-50' :class="{ 'opacity-50': !field.value}" :disabled='isSubmitting' />
        </Field>

        <Field name='confirmation' v-slot='{ field }' v-if='values.password' :validateOnBlur='!!errors.confirmation' :validateOnChange='true' :validateOnInput='!!errors.confirmation'>
          <h3 class='col-span-3 xs:col-span-2 sm:text-lg ml-1.5 select-none font-light'>confirm</h3>
          <InputText type='password' v-bind='field' maxlength='32' class='col-span-7 xs:col-span-8 disabled:opacity-50' :disabled='isSubmitting' />
        </Field>

        <Field name='expiration' v-slot='{ field }' :validateOnBlur='!!errors.expiration' :validateOnChange='true' :validateOnInput='!!errors.expiration'>
          <h3 class='col-span-3 xs:col-span-2 sm:text-lg ml-1.5 select-none font-light' :class="{ 'opacity-50': !field.value}">expire on</h3>
          <InputText
            type='date' v-bind='field' class='col-span-7 xs:col-span-8 disabled:opacity-50 w-full' :class="{ 'opacity-50': !field.value}" :disabled='isSubmitting'
            :min='minExpireAt'
          />
        </Field>

        <span class='col-span-full ml-1.5 text-sm mt-2' v-if='errors.value'><Error class='w-4 inline text-red-500' /> {{ errors.value }}</span>
        <span class='col-span-full ml-1.5 text-sm' v-if='errors.title'><Error class='w-4 inline text-red-500' /> {{ errors.title }}</span>
        <span class='col-span-full ml-1.5 text-sm' v-if='errors.password'><Error class='w-4 inline text-red-500' /> {{ errors.password }}</span>
        <span class='col-span-full ml-1.5 text-sm' v-if='errors.confirmation'><Error class='w-4 inline text-red-500' /> {{ errors.confirmation }}</span>

        <InputSubmit
          value='create' class='col-span-full m-auto px-6 py-1 select-none cursor-pointer disabled:opacity-50 disabled:cursor-default'
          :disabled='isSubmitting || errors.value || errors.title'
        />
      </div>
    </div>
  </Form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Form, Field } from 'vee-validate'
import { request } from '../utils'
import { Error } from '../icons'
import Textarea from '../components/Textarea.vue'
import InputText from '../components/InputText.vue'
import InputSubmit from '../components/InputSubmit.vue'

interface FieldContext {
  field: string;
  value: unknown;
  form: Record<string, unknown>;
  rule?: {
      name: string;
      params?: Record<string, unknown> | unknown[];
  };
}

type Payload = {
  title: string;
  value: string;
  password?: string;
  expiration?: string;
}

type SubmitResponse = {
  id: string;
}

export default defineComponent({
  name: 'BinSubmit',
  components: {
    Form,
    Error,
    Field,
    Textarea,
    InputText,
    InputSubmit
  },
  data () {
    return {
      minExpireAt: new Date(Date.now() + 8.64e7).toJSON().slice(0, 10),
      schema: {
        value (value: string) {
          if (!value || value.trim() === '') return 'your bin is empty'
          return true
        },
        title (value: string) {
          if (!value || value.trim() === '') return 'title is required'
          if (value.length > 64) return 'title is too long'
          return true
        },
        password (value: string) {
          if (!value) return true
          if (value?.length < 3) return 'password is too short'
          if (value?.length > 32) return 'password is too long'
          return true
        },
        confirmation (value: string, ctx: FieldContext) {
          if (ctx.form['password'] && value !== ctx.form['password']) return 'passwords do not match'
          return true
        }
      }
    }
  },
  methods: {
    submit (payload: Payload) {
      const { expiration, password, ...data } = payload
      const body = { ...data, ...password && { password }, ...expiration && { expiration }  }

      return request<SubmitResponse>('bins', { method: 'post', body: JSON.stringify(body) }).then(({ id }) => {
        this.$router.push({ name: 'bin', params: { id }, query: { ...payload.password && { password:  payload.password } } })
      })
    }
  }
})
</script>
