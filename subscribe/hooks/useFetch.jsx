import { useState, useEffect } from 'react'
import { config } from '../src/utils/CORS/config'

export const useFetch = (url, method = "POST") => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const postProduct = async (url, dataBody) => {
    try {
      const postIt = await fetch(url, {
        ...config,
        method: method,
        body: JSON.stringify(dataBody)
      })
      return postIt
    } catch (e) {
      setError(e)
    }
  }

  useEffect(async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
      setLoading(true)
    } catch (e) {
      setError(e)
    }
  }, [url])

  return { data, loading, error, postProduct }
}
