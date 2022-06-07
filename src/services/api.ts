import axios from 'axios'

const http = axios.create({
  baseURL: 'https://d040-2804-431-e7e2-8d92-a1e2-5d4d-855f-7483.sa.ngrok.io',
  timeout: 1000 * 30, // 30 seconds,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})

export default http
