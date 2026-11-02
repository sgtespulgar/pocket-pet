import { useState, type ReactNode } from 'react'
import {
  Apple,
  Heart,
  Moon,
  Sparkles,
} from 'lucide-react'
import PetSprite from './components/PetSprite'

type PetStats = {
  hunger: number
  happiness: number
  energy: number
  hygiene: number
}

type ActionType = 'feed' | 'play' | 'clean' | 'sleep'

const initialStats: PetStats = {
  hunger: 80,
  happiness: 90,
  energy: 75,
  hygiene: 85,
}

const clamp = (value: number) =>
  Math.min(100, Math.max(0, value))

function App() {
  const [stats, setStats] = useState<PetStats>(initialStats)
  const [message, setMessage] = useState(
    'Hello! I am Biscuit! 🐣'
  )

  const performAction = (action: ActionType) => {
    setStats((current) => {
      const next = { ...current }

      switch (action) {
        case 'feed':
          if (current.hunger >= 100) {
            setMessage('I am already full! 😊')
            return current
          }
          next.hunger = clamp(current.hunger + 25)
          setMessage('Yummy! Thank you for feeding me! 🍎')
          break

        case 'play':
          if (current.energy < 10) {
            setMessage('I am too tired to play. 😴')
            return current
          }
          next.happiness = clamp(current.happiness + 20)
          next.energy = clamp(current.energy - 10)
          setMessage('Yay! Playing with you is fun! 💗')
          break

        case 'clean':
          if (current.hygiene >= 100) {
            setMessage('I am already squeaky clean! ✨')
            return current
          }
          next.hygiene = clamp(current.hygiene + 30)
          setMessage('I feel so fresh and clean! 🛁')
          break

        case 'sleep':
          if (current.energy >= 100) {
            setMessage('I am not sleepy anymore! ☀️')
            return current
          }
          next.energy = clamp(current.energy + 40)
          setMessage('That was a lovely nap! 🌙')
          break
      }

      return next
    })
  }

  const overallStatus = getOverallStatus(stats)

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
          <span className="pet-status">
            ● {overallStatus}
          </span>
        </div>

        <div className="pet-scene">
          <div className="sun-decoration">☀</div>
          <PetSprite />
          <div className="ground-decoration">✿　✿　✿</div>
        </div>

        <div className="pet-message">{message}</div>
      </section>

      <section className="needs-section">
        <h3>How am I feeling?</h3>

        <Need label="Hunger" value={stats.hunger} emoji="🍎" />
        <Need label="Happiness" value={stats.happiness} emoji="💗" />
        <Need label="Energy" value={stats.energy} emoji="⚡" />
        <Need label="Hygiene" value={stats.hygiene} emoji="🛁" />
      </section>

      <section className="actions-section">
        <h3>Take care of Biscuit</h3>

        <div className="actions-grid">
          <Action
            icon={<Apple />}
            label="Feed"
            onClick={() => performAction('feed')}
          />
          <Action
            icon={<Heart />}
            label="Play"
            onClick={() => performAction('play')}
          />
          <Action
            icon={<Sparkles />}
            label="Clean"
            onClick={() => performAction('clean')}
          />
          <Action
            icon={<Moon />}
            label="Sleep"
            onClick={() => performAction('sleep')}
          />
        </div>
      </section>

      <footer>Made with ♥ for your little friend</footer>
    </main>
  )
}

function getOverallStatus(stats: PetStats): string {
  const lowest = Math.min(
    stats.hunger,
    stats.happiness,
    stats.energy,
    stats.hygiene
  )

  if (lowest < 25) return 'Needs attention'
  if (lowest < 50) return 'Not feeling great'
  if (lowest < 75) return 'Doing okay'
  return 'Happy'
}

function Need({
  label,
  value,
  emoji,
}: {
  label: string
  value: number
  emoji: string
}) {
  return (
    <div className="need-row">
      <span>{emoji} {label}</span>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${value}%` }}
        />
      </div>

      <span>{value}%</span>
    </div>
  )
}

function Action({
  icon,
  label,
  onClick,
}: {
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