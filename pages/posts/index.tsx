import React from 'react';
import {useGetPostsQuery} from "../../api/postsApi";
import PostsComponent from "../../components/PostsComponent";
import {Button} from "@chakra-ui/react";
import NextLink from "next/link";
import ErrorComponent from "../../components/ErrorComponent";

const PostsPage = () => {
    const {data, isError} = useGetPostsQuery();
    if (isError) {
        return <ErrorComponent/>
    }
    return (
        <>
            <NextLink href={"/posts/create"}>
                <Button>
                    Create
                </Button>
            </NextLink>
            <PostsComponent posts={data}/>
        </>
    );
};

export default PostsPage;
