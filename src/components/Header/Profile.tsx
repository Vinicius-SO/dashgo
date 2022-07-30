import { Flex, Text, Box, Avatar } from "@chakra-ui/react";
import React from "react";


export function Profile(){
    return(
        <Flex align='center'>
            <Box mr="4" textAlign="right">
                <Text>Vinicius Soares</Text>
                <Text color="gray.300" fontSize="small">
                    vhisoares39@gmail.com
                </Text>
            </Box>

            <Avatar size="md" name="Vinicius Soares" src="https://github.com/Vinicius-SO.png"/>
        </Flex>
    )
}