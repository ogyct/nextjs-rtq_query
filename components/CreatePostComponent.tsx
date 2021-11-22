import React, {useState} from 'react';
import {Box, Button, Input, Textarea} from "@chakra-ui/react";
import {useCreatePostMutation} from "../api/postsApi";
import {useRouter} from "next/router";

const CreatePostComponent = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const router = useRouter();
    const [createPost] = useCreatePostMutation();
    return (
        <div>
            <Box borderWidth="1px" borderRadius="lg">
                <Input value={title} onChange={(e) => {
                    setTitle(e.target.value);
                }}
                       placeholder="Title"/>
                <Textarea value={body} onChange={(e) => {
                    setBody(e.target.value);
                }}
                    placeholder="Post body"/>
                <Button onClick={() => {
                    createPost({title, body});
                    router.push('/posts');
                }}>Create</Button>
            </Box>
        </div>
    );
};

export default CreatePostComponent;
