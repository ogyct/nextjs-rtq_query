import React from 'react';
import {Button, Center, Flex} from "@chakra-ui/react";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../store/store";
import {increment} from "../store/counterSlice";

const Index = () => {
    const {value} = useSelector((state: RootState) => state.counter)
    const dispatch = useAppDispatch();
    return (
        <div>
            <Center h="100vh">
                <Flex direction={"column"}>
                    <Button onClick={() => dispatch(increment())}>
                        Counter {value}
                    </Button>
                </Flex>

            </Center>
        </div>
    );
};

export default Index;
