import axios from 'axios'
let service=axios.create({
    // baseURL:"http://localhost:3000/",
    baseURL:"https://netease-cloud-music-api-seven-silk.vercel.app/",
    timeout:5000
})
export default service