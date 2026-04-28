import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'

function NewEntry() {
  const [form, setForm] = useState({
    title: '',
    content: '',
    mood: 'neutro',
    tags: ''
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await api.createEntry({
        ...form,
        tags: form.tags.split(',').map(t => t.trim()).filter(Boolean)
      })
      navigate('/')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="page-title">
            <span>//</span>Nova Entrada
          </h2>
        </div>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="O que aconteceu hoje?"
              required
            />
          </div>

          <div className="form-group">
            <label>Mood</label>
            <select name="mood" value={form.mood} onChange={handleChange}>
              <option value="ótimo">ótimo</option>
              <option value="bem">bem</option>
              <option value="neutro">neutro</option>
              <option value="cansado">cansado</option>
              <option value="frustrado">frustrado</option>
            </select>
          </div>

          <div className="form-group">
            <label>Content</label>
            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              placeholder="// escreva aqui..."
              required
            />
          </div>

          <div className="form-group">
            <label>Tags (separadas por vírgula)</label>
            <input
              name="tags"
              value={form.tags}
              onChange={handleChange}
              placeholder="typescript, bug, refactor"
            />
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => navigate('/')}
            >
              cancelar
            </button>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'salvando...' : 'salvar entrada'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewEntry
