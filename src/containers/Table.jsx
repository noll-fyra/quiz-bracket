import React from 'react'
import Player from '../components/table/Player'

const players = [
  { name: 'Jonathan', score: 23 },
  { name: 'Cara', score: 33 },
  { name: 'Max', score: 32 },
  { name: 'Rae', score: 12 },
  { name: 'Jonathan1', score: 23 },
  { name: 'Cara', score: 33 },
  { name: 'Max', score: 32 },
  { name: 'Rae', score: 12 },
  { name: 'Jonathan2', score: 23 },
  { name: 'Cara', score: 33 },
  { name: 'Max', score: 32 },
  { name: 'Rae', score: 12 }
]

const Table = () => {
  return (
    <div style={{ padding: '24px' }}>
      {players
        .sort((a, b) => b.score - a.score)
        .map((player, index) => (
          <Player
            key={player.name}
            player={player}
            rank={index + 1}
            isViewer={player.name === 'Jonathan'}
          />
        ))}
    </div>
  )
}

export default Table
