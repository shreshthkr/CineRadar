import React from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link
} from '@chakra-ui/react';
import {useNavigate} from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  
  const redirectToSignup = () => {
    return navigate("/signup")
  }



  return (
    <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}
    mt={"45px"}>
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        <Text fontSize={'lg'} color={'gray.600'} display={"flex"} gap={"5px"}>
          to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
        </Text>
      </Stack>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={10}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Text color={'blue.400'}>Forgot password?</Text>
            </Stack>
            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Sign in
            </Button>
          </Stack>
          <Stack pt={6}>
              <Text align={'center'} fontWeight={600}>
                Didn't have account with us? <Link onClick={redirectToSignup} color={'blue.400'} >Signup</Link>
              </Text>
            </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>
  )
}

export default Login;
