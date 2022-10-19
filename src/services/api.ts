import axios from 'axios'

const http = axios.create({
  baseURL: 'https://8325-2804-431-e7e2-ade5-a1e2-5d4d-855f-7483.sa.ngrok.io',
  timeout: 1000 * 30, // 30 seconds,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})

export default http
