

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl:"http://34.143.212.163:3000/api/category/create"}),
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
        }),
        updateUser: builder.mutation({
            query:(payload)=>({
                url:`/users/${payload.id}`,
                method:'PUT',
                body:payload
            }),
            invalidatesTags:['users']
        }),
        deleteUser: builder.mutation({
            query:(id)=>({
                url: `/users/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:['users']
        })
    })
})

export const {useGetUsersQuery, useAddUserMutation,useUpdateUserMutation,useDeleteUserMutation} = api




