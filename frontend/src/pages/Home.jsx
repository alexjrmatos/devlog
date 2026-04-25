import { useState, useEffect } from 'react'
import { api } from '../services/api'

function Home() {
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.getEntries()
      .then(data => setEntries(data))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Carregando...</p>

  return (
    <div>
      <h2>Entradas</h2>
      {entries.length === 0 && <p>Nenhuma entrada ainda.</p>}
      {entries.map(entry => (
        <div key={entry._id}>
          <h3>{entry.title}</h3>
          <p>{entry.content}</p>
          <small>{new Date(entry.createdAt).toLocaleDateString('pt-BR')}</small>
        </div>
      ))}
    </div>
  )
}

export default Home
