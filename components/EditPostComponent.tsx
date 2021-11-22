import React, {useEffect, useState} from 'react';
import {Box, Button, Input, Textarea} from "@chakra-ui/react";
import {useCreatePostMutation, useGetPostByIdQuery, useUpdatePostMutation} from "../api/postsApi";
import {useRouter} from "next/router";

const EditPostComponent = () => {

    const router = useRouter();
    const {id} = router.query;
    const {data, isSuccess} = useGetPostByIdQuery(id[0]);

    const [title, setTitle] = useState(data?.title);
    const [body, setBody] = useState(data?.body);

    useEffect(() => {
        setTitle(data.title)
        setBody(data.body)
    }, [isSuccess]);

    const [updatePost] = useUpdatePostMutation();
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
                    updatePost({id: +id[0], title, body});
                    router.push('/posts');
                }}>Update</Button>
            </Box>
        </div>
    );
};

export default EditPostComponent;
