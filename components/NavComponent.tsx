import React from 'react';
import {Button, Flex, HStack} from "@chakra-ui/react";
import NextLink from "next/link";

const NavComponent = () => {
    return (
        <div>
            <Flex as={"nav"} bg={'teal'}>
                <HStack p={"20px"}>
                    <NextLink href={"/"}>
                        <Button>
                            Home
                        </Button>
                    </NextLink>
                    <NextLink href={"/about"}>
                        <Button>
                            About
                        </Button>
                    </NextLink>
                    <NextLink href={"/posts"}>
                        <Button>
                            Posts
                        </Button>
                    </NextLink>
                    {/*<Button>*/}
                    {/*    <TriangleUpIcon />*/}
                    {/*</Button>*/}
                </HStack>
            </Flex>
        </div>
    );
};

export default NavComponent;
