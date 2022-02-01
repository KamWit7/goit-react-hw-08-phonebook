import { Title } from "./styled/Title"
import { Section } from "./styled/Section"
import Form from "./Componets/Form/Form"
import Search from "./Componets/Search/Search"
import Display from "./Componets/Display/Display"
import { useGetContactsQuery } from "./app/API/fetchMockApi"

function App() {
  const { data, isLoading } = useGetContactsQuery("")

  return (
    <Section>
      <Title>Phonebook</Title>
      <Form contacts={data} />
      <Title as="h2">Contacts</Title>
      <Search />
      {isLoading ? <div> loading </div> : <Display contacts={data} />}
    </Section>
  )
}

export default App
