import React from "react"
import styled from "styled-components"
import { Label } from "../../styled/Label"
import { Input } from "../../styled/Input"
import { nanoid } from "nanoid"
import { Button } from "../../styled/Button"
import { Wrapper } from "../../styled/wrapper"

import { usePostContactMutation } from "./../../app/API/fetchMockApi"
const WrapForm = styled(Wrapper)`
  width: 40rem;
`

const Form = ({ contacts }) => {
  const [postContact] = usePostContactMutation()

  const isContactInContacts = (contacts, newContactName) =>
    contacts.some(({ name }) => name === newContactName)

  const seveContact = (e) => {
    e.preventDefault()

    const {
      elements: { name, number },
    } = e.currentTarget

    if (isContactInContacts(contacts, name.value)) return

    postContact({ id: nanoid(), name: name.value, number: number.value })
  }

  return (
    <WrapForm as="form" onSubmit={seveContact}>
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          required
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </div>
      <div>
        <Label htmlFor="number">Number</Label>
        <Input
          required
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </div>
      <Button>Add contact</Button>
    </WrapForm>
  )
}

export default Form
