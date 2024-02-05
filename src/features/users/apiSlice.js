// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const api = createApi({
//     baseQuery: fetchBaseQuery({baseUrl:"http://localhost:3000"}),
//     tagTypes: ['users'],
//     endpoints:(builder) =>({
//         getUsers:builder.query({
//             query: ()=>"/users",
//             providesTags:['users']
//         }),
//         addUser: builder.mutation({
//             query: (payload) =>({
//                 url: "/users",
//                 method:'POST',
//                 body:payload
//             }),
//             invalidatesTags:['users']
//         })
//     })
// })

// export const {useGetUsersQuery, useAddUserMutation} = api

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:3000"}),
    tagTypes: ['users'],
    endpoints:(builder) =>({
        getUsers:builder.query({
            query: ()=>"/users",
            providesTags:['users']
        }),
        addUser: builder.mutation({
            query: (payload) =>({
                url: "/users",
                method:'POST',
                body:payload
            }),
            invalidatesTags:['users']
        })
    })
})

export const {useGetUsersQuery, useAddUserMutation} = api