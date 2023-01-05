import { useState } from 'react'
import './App.css'
import Cards from './assets/components/Cards'
import FormSerch from './assets/components/FormSerch'
import setGetDataApi from './assets/hooks/setGetDataApi'

function App() {

  const [dataSerch, setDaraSerch] = useState('')
  const formComponents =
    <FormSerch
      setHook={setDaraSerch}
      textInput={'A BUSCAR'}
      textButton={'SERCH'}
      dataId={'idList'}
    />

  const { data, isTry } = setGetDataApi('https://www.thecocktaildb.com/api/json/v1/1/search.php', dataSerch)

  const componentsCard = data.map((objectCard, index) =>
    <Cards
      data={objectCard}
      key={index}
    />
  )

  return (
    <div className="App">
      {formComponents}
      {componentsCard}
    </div>
  )
}

export default App
