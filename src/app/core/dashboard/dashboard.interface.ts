import { Client, ClientStatusEnum } from './../../client/client.interfaces'
import { ShoppingCart } from './../../shopping-cart/shopping-cart.interface'

interface ShoppingCartValuable {
    shoppingCartId: Pick<ShoppingCart, 'id'>
    value: number
}

interface ClientValuable {
    client: Pick<Client, 'id' | 'name'>
    value: number
}

interface ClothesAvailabilityMetrics {
    status: string
    quantity: number
}

interface ClientAvailability { 
    name: MonthEnum, 
    value: number
}

interface StatisticsResponse {
    number_of_shopping_carts_created_current_month: number,
    shopping_cart_rank: ShoppingCartValuable[],
    customer_rank: ClientValuable[],
    clothes_availability_quantity: ClothesAvailabilityMetrics[],
    client_registered_current_year_by_month: { label: string, data: ClientAvailability[] }
    client_availability_quantity: {status: ClientStatusEnum, quantity: number}[]
    quantity_of_clients_registered_in_current_month: number
}

enum MonthEnum {
    JAN = 'Jan',
    FEV = 'Fev',
    MAR = 'Mar',
    APR = 'Apr',
    MAY = 'May',
    JUN = 'Jun',
    JUL = 'Jul',
    AUG = 'Aug',
    SEP = 'Sep',
    OCT = 'Oct',
    NOV = 'Nov',
    DEC = 'Dec'
}
  
interface Month {
    name: MonthEnum,
    value: number
}

export {
    ShoppingCartValuable, 
    ClientValuable, 
    ClothesAvailabilityMetrics,
    ClientAvailability,
    StatisticsResponse,
    Month,
    MonthEnum
}