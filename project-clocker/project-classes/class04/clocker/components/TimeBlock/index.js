import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react'

import { Input } from '../Input'

const ModalTimeBlock = ({ isOpen, onClose, onComplete, children }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Faça sua reserva</ModalHeader>
      <ModalCloseButton />
      <ModalBody>{children}</ModalBody>

      <ModalFooter>
        <Button variant="ghost" onClick={onClose}>
          Cancelar
        </Button>
        <Button colorScheme="blue" mr={3} onClick={onComplete}>
          Reservar Horário
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
)

export const TimeBlock = ({ time }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen((prevState) => !prevState)

  const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
    useFormik({
      onSubmit: () => {},
      initialValues: {
        name: '',
        email: '',
      },
      validationSchema: yup.object().shape({
        name: yup.string().required('Preenchimento obrigatório'),
        phone: yup.string().required('Preenchimento obrigatório'),
      }),
    })

  return (
    <Button p={8} bg="blue.500" color="white" onClick={toggle}>
      {time}
      <ModalTimeBlock
        isOpen={isOpen}
        onClose={toggle}
        onComplete={handleSubmit}
      >
        <>
          <Input
            label="Nome:"
            name="name"
            touched={touched.name}
            error={errors.name}
            value={values.name}
            placeholder="Digite seu nome"
            onChange={handleChange}
            onBlur={handleBlur}
            size="lg"
          />
          <Input
            label="Telefone:"
            name="phone"
            touched={touched.phone}
            error={errors.phone}
            value={values.phone}
            placeholder="(99) 9 9999-9999"
            onChange={handleChange}
            onBlur={handleBlur}
            size="lg"
            mt={4}
          />
        </>
      </ModalTimeBlock>
    </Button>
  )
}
