import React from 'react';
import CounterComponent from "../components/counter/CounterComponent";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import {ChakraProvider} from "@chakra-ui/react";

const mockStore = configureStore({
    reducer: {
        counter: createSlice({
                name: 'counter',
                // `createSlice` will infer the state type from the `initialState` argument
                initialState: {value: 0},
                reducers: {
                    increment: (state) => {
                        state.value += 1
                    },
                    decrement: (state) => {
                        state.value -= 1
                    },
                    incrementByAmount: (state, action: PayloadAction<number>) => {
                        state.value += action.payload
                    },
                },
            }
        ).reducer,
    }
});

export default {
    component: CounterComponent,
    decorators: [
        story => <Provider store={mockStore}>{story()}</Provider>,
        story => <ChakraProvider>{story()}</ChakraProvider>,

    ]
} as ComponentMeta<typeof CounterComponent>;

const Template: ComponentStory<typeof CounterComponent> = (args) => <CounterComponent {...args} />;

export const Default = Template.bind({});
