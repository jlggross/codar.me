import Link from 'next/link'
import { useFormik } from 'formik'
import * as yup from 'yup'

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

import { Logo } from '../components'
import firebase from '../config/firebase'

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

export default function Home() {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    values,
    touched,
    isSubmitting,
  } = useFormik({
    onSubmit: async (values, form) => {
      try {
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(values.email, values.password)
        console.log(user)
      } catch (error) {
        console.log('Error:', error)
      }
    },
    validate,
    //validateSchema, // Used with Yup object
    initialValues: {
      email: '',
      password: '',
    },
  })

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
