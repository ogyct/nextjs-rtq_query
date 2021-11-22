import React from 'react';
import {useGetPostsQuery} from "../../api/postsApi";
import PostsComponent from "../../components/PostsComponent";
import {Button, Center, Flex} from "@chakra-ui/react";
import NextLink from "next/link";

const PostsPage = () => {
    const {data} = useGetPostsQuery();
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
