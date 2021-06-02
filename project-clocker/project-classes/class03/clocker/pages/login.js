import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
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
} from '@chakra-ui/react'

import { Logo, useAuth } from './../components'

const validate = (values) => {
  const errors = {}

  if (!values.password) {
    errors.password = 'Preenchimento Obrigatório'
  } else if (values.password.length < 6) {
    errors.password = 'Senha deve ter pelo menos 6 caracteres'
  }

  if (!values.email) {
    errors.email = 'Preenchimento Obrigatório'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'E-mail Inválido'
  }

  return errors
}

export default function Login() {
  const [auth, { login }] = useAuth()
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
    onSubmit: login,
    validate,
    initialValues: {
      email: '',
      password: '',
    },
  })

  useEffect(() => {
    auth.user ? router.push('/agenda') : router.push('/login')
  }, [auth.user])

  return (
    <div>
      <Container p={4} centerContent>
        <Logo />
        <Box p={4} mt={8}>
          <Text>Crie sua agenda compartilhada</Text>
        </Box>

        <Box>
          <FormControl id="email" p={4} isRequired>
            <FormLabel>E-mail</FormLabel>
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
            <FormLabel>Senha</FormLabel>
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

          <Box p={4}>
            <Button
              colorScheme="blue"
              width="100%"
              onClick={handleSubmit}
              isLoading={isSubmitting}
            >
              Entrar
            </Button>
          </Box>
        </Box>

        <Link href="/signup">Ainda não tem uma conta? Cadastre-se</Link>
      </Container>
    </div>
  )
}
