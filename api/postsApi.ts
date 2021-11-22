import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export interface Post {
    id?: number,
    userId?: number,
    title?: string,
    body?: string,
}

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => `posts?userId=1`,
            providesTags: _ => ['Post']
        }),
        getPostById: builder.query<Post, string>({
            query: (id) => `posts/${id}`,
            providesTags: _ => ['Post']
        }),
        deletePostById: builder.mutation<void, string>({
            query: id => ({
                url: `/posts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: _ => ['Post']
        }),
        createPost: builder.mutation<void, Partial<Post>>({
            query: post => ({
                url: `/posts`,
                method: 'POST',
                body: post
            }),
            invalidatesTags: _ => ['Post']
        }),
        updatePost: builder.mutation<void, Partial<Post>>({
            query: post => {
                const {id, ...patch} = post
                return ({
                    url: `/posts/${id}`,
                    method: 'PUT',
                    body: patch
                });
            },
            invalidatesTags: _ => ['Post']
        }),
    }),
})

export const {
    useGetPostsQuery, useGetPostByIdQuery, useDeletePostByIdMutation,
    useCreatePostMutation, useUpdatePostMutation
} = postsApi;
