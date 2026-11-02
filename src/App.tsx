import { useState, type ReactNode } from 'react'
import { Apple, Heart, Moon, Sparkles, Gamepad2 } from 'lucide-react'
import PetSprite from './components/PetSprite'

function App() {
  const [message, setMessage] = useState('Hello! I am Biscuit! 🐣')

  return (
    <main className="game-container">
      <header className="game-header">
        <div>
          <span className="eyebrow">MY LITTLE FRIEND</span>
          <h1>Pocket Pet</h1>
        </div>
        <div className="coin-display">🪙 100</div>
      </header>

      <section className="pet-card">
        <div className="pet-info">
          <div>
            <h2>Biscuit</h2>
            <p>Baby · Level 1</p>
          </div>
          <span className="pet-status">● Happy</span>
        </div>

        <div className="pet-scene">
          <div className="sun-decoration">☀</div>
          <PetSprite />
          <div className="ground-decoration">✿　✿　✿</div>
        </div>

        <div className="pet-message">
          {message}
        </div>
      </section>

      <section className="needs-section">
        <h3>How am I feeling?</h3>

        <Need label="Hunger" value={80} emoji="🍎" />
        <Need label="Happiness" value={90} emoji="💗" />
        <Need label="Energy" value={75} emoji="⚡" />
        <Need label="Hygiene" value={85} emoji="🛁" />
      </section>

      <section className="actions-section">
        <h3>Take care of Biscuit</h3>

        <div className="actions-grid">
          <Action icon={<Apple />} label="Feed" onClick={() => setMessage('Yummy! Thank you! 🍎')} />
          <Action icon={<Heart />} label="Play" onClick={() => setMessage('Yay! That was fun! 💗')} />
          <Action icon={<Sparkles />} label="Clean" onClick={() => setMessage('I feel so fresh! ✨')} />
          <Action icon={<Moon />} label="Sleep" onClick={() => setMessage('Goodnight! Zzz... 🌙')} />
        </div>
      </section>

      <footer>Made with ♥ for your little friend</footer>
    </main>
  )
}

function Need({ label, value, emoji }: {
  label: string
  value: number
  emoji: string
}) {
  return (
    <div className="need-row">
      <span>{emoji} {label}</span>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${value}%` }} />
      </div>
      <span>{value}%</span>
    </div>
  )
}

function Action({ icon, label, onClick }: {
  icon: ReactNode
  label: string
  onClick: () => void
}) {
  return (
    <button className="action-button" onClick={onClick}>
      {icon}
      <span>{label}</span>
    </button>
  )
}

export default App