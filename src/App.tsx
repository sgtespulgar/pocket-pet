import {
  Apple,
  Heart,
  Moon,
  Sparkles,
  Gamepad2,
  Coins
} from 'lucide-react'

import PetSprite from './components/PetSprite'

function App() {
  return (
    <main className="game-container">
      <header className="game-header">
        <div>
          <p className="eyebrow">MY LITTLE WORLD</p>
          <h1>Pocket Pet <span>♥</span></h1>
        </div>

        <div className="coin-display">
          <Coins size={18} />
          <span>20</span>
        </div>
      </header>

      <section className="pet-card">
        <div className="pet-info">
          <div>
            <h2>Biscuit</h2>
            <p>Baby · Day 1</p>
          </div>
          <span className="pet-mood">Happy!</span>
        </div>

        <div className="pet-room">
          <div className="room-cloud">✦</div>
          <div className="room-cloud second">✧</div>

          <PetSprite />

          <div className="pet-shadow" />

          <p className="pet-message">Hello, friend!</p>
        </div>
      </section>

      <section className="needs-section">
        <h3>How am I feeling?</h3>

        <div className="needs-grid">
          <Need icon={<Apple />} label="Hunger" value={80} color="orange" />
          <Need icon={<Heart />} label="Happiness" value={90} color="pink" />
          <Need icon={<Moon />} label="Energy" value={70} color="blue" />
          <Need icon={<Sparkles />} label="Cleanliness" value={85} color="green" />
        </div>
      </section>

      <section className="actions-section">
        <h3>Take care of me!</h3>

        <div className="actions-grid">
          <Action icon={<Apple />} label="Feed" color="orange" />
          <Action icon={<Gamepad2 />} label="Play" color="pink" />
          <Action icon={<Sparkles />} label="Clean" color="green" />
          <Action icon={<Moon />} label="Sleep" color="blue" />
        </div>
      </section>

      <footer className="game-footer">
        <span>♡ Made with love</span>
        <span>POCKET PET v0.1</span>
      </footer>
    </main>
  )
}

function Need({
  icon,
  label,
  value,
  color
}: {
  icon: React.ReactNode
  label: string
  value: number
  color: string
}) {
  return (
    <div className="need-card">
      <div className="need-heading">
        <span className={`need-icon ${color}`}>{icon}</span>
        <span>{label}</span>
      </div>

      <div className="progress-track">
        <div
          className={`progress-fill ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>

      <small>{value}%</small>
    </div>
  )
}

function Action({
  icon,
  label,
  color
}: {
  icon: React.ReactNode
  label: string
  color: string
}) {
  return (
    <button className={`action-button ${color}`} type="button">
      {icon}
      <span>{label}</span>
    </button>
  )
}

export default App
