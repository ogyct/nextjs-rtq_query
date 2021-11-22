import React, {FC} from 'react';
import {Box, Button, Center, Flex} from "@chakra-ui/react";
import {Post, useDeletePostByIdMutation} from "../api/postsApi";
import {useRouter} from "next/router";

interface PostsComponentProps {
    posts: Post[],
}

const PostsComponent: FC<PostsComponentProps> = ({posts}) => {
    const router = useRouter();
    const [deletePost] = useDeletePostByIdMutation();
    const renderPost = (post: Post) => {
        return (
            <Box borderWidth="1px" borderRadius="lg" m={'20px'} p={'10px'}>
                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    {post.title}
                </Box>
                <Box>
                    {post.body}
                </Box>
                <Button onClick={() => router.push(`/posts/${post.id}`)}>Detail</Button>
                <Button onClick={() => deletePost(post.id+'')}>Delete</Button>
            </Box>
        )
    };

    return (
            <Flex flexDir={"column"}>
                <Box borderWidth="1px" borderRadius="lg">
                    {posts?.map(renderPost)}
                </Box>
            </Flex>

    );
};

export default PostsComponent;
