import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const filterCoreApi = createApi({
    reducerPath:'filterCoreApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'',
    }),
    endpoints:(builder)=>({
        
    })
})
