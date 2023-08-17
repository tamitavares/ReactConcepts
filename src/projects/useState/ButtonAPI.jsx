import React from 'react'
import Product from './Product'

const ButtonAPI = () => {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(null)

  async function handleClick(event) {
    setLoading(true)
    console.log(event.target.innerText)
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
    const json = await response.json()
    setData(json)
    setLoading(false)
  }

  return (
    <div>
      <button style={{margin: '.5rem'}} onClick={handleClick}>notebook</button>
      <button style={{margin: '.5rem'}} onClick={handleClick}>smartphone</button>
      <button style={{margin: '.5rem'}} onClick={handleClick}>tablet</button>
      {loading && <p>Carregando...</p>}
      {!loading && data && <Product data={data}/>  } 
    </div>
  )
}

export default ButtonAPI