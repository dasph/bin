export class ApiError extends Error {
  constructor (public code: number, message?: string) { super(message) }
}

export async function request <T> (webhook: string, init: RequestInit = {}) {
  const baseUrl = 'https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/bin-ugumv/service/api/incoming_webhook/'
  const { headers, ...rest } = init

  const opts: RequestInit = {
    headers: {
      ...typeof init.body === 'string' && { 'Content-Type': 'application/json' },
      ...headers
    },
    ...rest
  }

  const res = await fetch(`${baseUrl}${webhook}`, opts)
  const { error, ...data } = await res.json()

  if (error) throw new ApiError(res.status, error)

  return data as T
}

export const downloadBin = async (id: string) => {
  // const blob = await fetch(`/api/files/${file.id}`).then((res) => res.blob())
  // const a = document.createElement('a')
  // a.href = URL.createObjectURL(blob)
  // a.setAttribute('download', file.name)
  // a.click()
}
