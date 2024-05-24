import { api } from '@/lib/axios'

// Esta pasta serve para tipar o input e o output das rotas do backend
export interface RegisterRestaurantBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaurant({
  restaurantName,
  managerName,
  email,
  phone,
}: RegisterRestaurantBody) {
  await api.post('/restaurants', { restaurantName, managerName, email, phone })
}
