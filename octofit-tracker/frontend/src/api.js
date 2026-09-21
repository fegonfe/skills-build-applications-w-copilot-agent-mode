import { useEffect, useState } from 'react'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

export const API_BASE_URL = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api'

function normalizeCollection(payload, resource) {
  if (Array.isArray(payload)) return payload

  const candidates = [
    payload?.[resource],
    payload?.results,
    payload?.items,
    payload?.data,
    payload?.data?.[resource],
    payload?.data?.results,
    payload?.data?.items,
  ]

  return candidates.find(Array.isArray) ?? []
}

export function useApiCollection(resource) {
  const [state, setState] = useState({ data: [], loading: true, error: '' })

  useEffect(() => {
    const controller = new AbortController()

    async function loadCollection() {
      setState({ data: [], loading: true, error: '' })
      try {
        const response = await fetch(`${API_BASE_URL}/${resource}/`, { signal: controller.signal })
        if (!response.ok) throw new Error(`Request failed with status ${response.status}`)

        const payload = await response.json()
        setState({ data: normalizeCollection(payload, resource), loading: false, error: '' })
      } catch (error) {
        if (error.name !== 'AbortError') {
          setState({ data: [], loading: false, error: error.message })
        }
      }
    }

    loadCollection()
    return () => controller.abort()
  }, [resource])

  return state
}