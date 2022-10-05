import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../constants'

export const filterCoreApi = createApi({
    reducerPath:'filterCoreApi',
    baseQuery:fetchBaseQuery({
        baseUrl:`${BASE_URL}`,
    }),
    endpoints:(builder)=>({
        getAllColor:builder.query<any,void>({query:()=>'/api/colors'})
    })
})

export const {useGetAllColorQuery} = filterCoreApi
