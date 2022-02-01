import React from "react"
import { Button } from "../../styled/Button"
import { Item, List } from "../../styled/List"
import { useSelector } from "react-redux"
import { useDeleteContactByIdMutation } from "./../../app/API/fetchMockApi"
const Display = ({ contacts }) => {
  const filter = useSelector((state) => state.filter.filter)

  const [deleteContact] = useDeleteContactByIdMutation()

  return (
    <List>
      {contacts
        .filter(({ name }) => (filter !== "" ? name.includes(filter) : true))
        .map(({ id, name, phone }) => (
          <Item key={id}>
            <span>
              {name} {phone}
            </span>
            <Button onClick={() => deleteContact(id)}>Delete</Button>
          </Item>
        ))}
    </List>
  )
}

export default Display
