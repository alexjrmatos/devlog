import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'

const moodClass = {
  'ótimo': 'mood-otimo',
  'bem': 'mood-bem',
  'neutro': 'mood-neutro',
  'cansado': 'mood-cansado',
  'frustrado': 'mood-frustrado'
}

function Home() {
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    api.getEntries()
      .then(data => setEntries(data))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p className="empty-state">carregando...</p>

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">
            <span>//</span>Entradas
          </h2>
          <p className="page-subtitle">{entries.length} registros no diário</p>
        </div>
        <button className="btn btn-primary" onClick={() => navigate('/nova')}>
          + Nova Entrada
        </button>
      </div>

      {entries.length === 0 && (
        <p className="empty-state">// nenhuma entrada ainda</p>
      )}

      <div className="entries-grid">
        {entries.map(entry => (
          <div key={entry._id} className="entry-card">
            <div className="entry-card-header">
              <h3 className="entry-title">{entry.title}</h3>
              <span className={`mood-badge ${moodClass[entry.mood]}`}>
                {entry.mood}
              </span>
            </div>
            <p className="entry-date">
              {new Date(entry.createdAt).toLocaleDateString('pt-BR')}
            </p>
            <p className="entry-content">{entry.content}</p>
            <div className="tags">
              {entry.tags.map(tag => (
                <span key={tag} className="tag">#{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
