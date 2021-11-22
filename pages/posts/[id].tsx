import React from 'react';
import {router} from "next/client";
import PostDetailComponent from "../../components/PostDetailComponent";
import {useGetPostByIdQuery} from "../../api/postsApi";

const Post = () => {
    const {id} = router.query;
    const {data, isSuccess} = useGetPostByIdQuery(id[0]);
    if (!isSuccess) return <></>
    return (
        <div>
            <PostDetailComponent post={data}/>
        </div>
    );
};

export default Post;
