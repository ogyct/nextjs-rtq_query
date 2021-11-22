import React, {FC} from 'react';
import {Box, Button, Flex} from "@chakra-ui/react";
import {Post, useDeletePostByIdMutation} from "../api/postsApi";
import {useRouter} from "next/router";

interface PostDetailProps {
    post: Post,
}

const PostsComponent: FC<PostDetailProps> = ({post}) => {
    const router = useRouter();
    const [deletePost] = useDeletePostByIdMutation();
    const renderPost = (post: Post) => {
        return (
            <Box borderWidth="1px" borderRadius="lg" m={'20px'}  p={'10px'}>
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
                <Button colorScheme='blue' onClick={() => {
                    router.push(`/posts/edit/${post.id}`)

                }}>Edit</Button>
                <Button colorScheme='blue' onClick={() => {
                    deletePost(post.id + '');
                    router.push('/posts')
                }}>Delete</Button>
            </Box>
        )
    };

    return (
        <Flex flexDir={"column"}>
            <Box borderWidth="1px" borderRadius="lg">
                {renderPost(post)}
            </Box>
        </Flex>
    );
};

export default PostsComponent;
