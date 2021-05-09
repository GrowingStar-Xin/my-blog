import request from './request'
import "@/mock"
export async function fetchData() {
    return await request.get('/api/about')
}