import { Box, Button, Flex, Heading, Icon, Table, Th, Thead, Tr, Checkbox, Td, Tbody, Text, Divider, SimpleGrid, VStack, HStack } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUSer(){
    return(
        <Box>
            <Header/>
            <Flex w='80%' my='6' maxWidth={1480} mx='auto'> 
                <Sidebar/>

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Heading size='lg' fontWeight="normal">Criar usuário</Heading>

                    <Divider my='6' borderColor='gray.700'/>
                
                    <VStack spacing='8'>
                        <SimpleGrid minWidth='240px' spacing="8" w="100%">
                            <Input name="name" label="Nome completo"/>
                            <Input name="email" type="email" label="E-mail"/>
                        </SimpleGrid>
                    
                        <SimpleGrid minWidth='240px' spacing="8" w="100%">
                            <Input name="password" type="password" label="Senha"/>
                            <Input name="password_confirmation" type="password" label="Confirmação da senha"/>
                        </SimpleGrid>
                    </VStack>

                    <Flex mt='8' justify="flex-end" >
                        <HStack spacing='4'>
                            <Button colorScheme="whiteAlpha">Cancelar</Button>
                            <Button colorScheme="pink">Cancelar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>

        </Box>
    )
}