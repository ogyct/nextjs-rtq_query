// import App from "next/app";
import type {AppProps} from 'next/app'
import {Box, Center, ChakraProvider} from "@chakra-ui/react";
import {Provider} from 'react-redux'
import {store} from "../store/store";
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
