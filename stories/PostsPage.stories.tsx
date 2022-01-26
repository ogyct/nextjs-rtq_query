import {ChakraProvider} from "@chakra-ui/react";
import {ComponentMeta} from "@storybook/react";
import React from "react";
import PostsComponent from "../components/PostsComponent";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {Post, postsApi} from "../api/postsApi";
import PostsPage from "../pages/posts";

const mockStore = configureStore({
    reducer: {
        postsApi: postsApi.reducer
    }
});
export default {
    component: PostsPage,
    decorators: [
        story => <ChakraProvider>{story()}</ChakraProvider>,
        story => <Provider store={mockStore}>{story()}</Provider>,

    ]
} as ComponentMeta<typeof PostsPage>;

export const Default = () => <PostsPage></PostsPage>
