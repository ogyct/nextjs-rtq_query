// import App from "next/app";
import type {AppProps /*, AppContext */} from 'next/app'
import {Box, Button, Center, ChakraProvider, Flex, HStack, Link, Spacer, Text} from "@chakra-ui/react";
import {Provider} from 'react-redux'
import {store} from "../store/store";
import NextLink from 'next/link'
import {TriangleUpIcon} from "@chakra-ui/number-input/src/icons";
import NavComponent from "../components/NavComponent";


function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <ChakraProvider>
                <Provider store={store}>
                    <NavComponent/>
                    <Center>
                        <Box w={'800px'}>
                            <Component {...pageProps} />
                        </Box>
                    </Center>
                </Provider>
            </ChakraProvider>
        </>);
}

export default MyApp
