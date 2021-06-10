import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'

import {
  Container,
  Box,
  Input,
  Button,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  InputLeftAddon,
  InputGroup,
} from '@chakra-ui/react'

import { Logo, useAuth } from '../components'

const validate = (values) => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Preenchimento obrigatório'
  }

  if (!values.password) {
    errors.password = 'Preenchimento obrigatório'
  } else if (values.password.length < 6) {
    errors.password = 'Senha deve ter pelo menos 6 caracteres'
  }

  if (!values.email) {
    errors.email = 'Preenchimento obrigatório'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'E-mail Inválido'
  }

  return errors
}

export default function Home() {
  const [auth, { signup }] = useAuth()

  const router = useRouter()

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    values,
    touched,
    isSubmitting,
  } = useFormik({
    onSubmit: signup,
    validate,
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
  })

  useEffect(() => {
    auth.user && router.push('/agenda')
  }, [auth.user])

  return (
    <div>
      <Container p={4} centerContent>
        <Logo size={200} />
        <Box p={4} mt={8}>
          <Text>Crie sua agenda compartilhada</Text>
        </Box>

        <Box>
          <FormControl id="email" p={4} isRequired>
            <FormLabel>E-mail:</FormLabel>
            <Input
              size="lg"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && (
              <FormHelperText textColor="#e74c3c">
                {errors.email}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl id="password" p={4} isRequired>
            <FormLabel>Senha:</FormLabel>
            <Input
              size="lg"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && (
              <FormHelperText textColor="#e74c3c">
                {errors.password}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl id="username" p={4} isRequired>
            <FormLabel>Nome de Usuário:</FormLabel>
            <InputGroup size="lg">
              <InputLeftAddon children="clocker.work/" />
              <Input
                type="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </InputGroup>
            {touched.username && (
              <FormHelperText textColor="#e74c3c">
                {errors.username}
              </FormHelperText>
            )}
          </FormControl>

          <Box p={4}>
            <Button
              colorScheme="blue"
              width="100%"
              onClick={handleSubmit}
              isLoading={isSubmitting}
            >
              Cadastrar
            </Button>
          </Box>
        </Box>

        <Link href="/">Já tem uma conta? Faça o Login</Link>
      </Container>
    </div>
  )
}
