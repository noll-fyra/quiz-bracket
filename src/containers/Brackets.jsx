import React from 'react'
import Bracket from '../components/brackets/Bracket.jsx'
import competitors from '../constants/competitors'
import matches from '../constants/matches'

function filterWinners(array) {
  return array.map((match) =>
    match[0].score > match[1].score ? match[0] : match[1]
  )
}

function displayMatches(array) {
  return array.map((match) =>
    match.reduce((a, b) => {
      if (Object.keys(a).length > 0) {
        a.second = b
      } else {
        a.first = b
      }
      return a
    }, {})
  )
}

const mappedCompetitors = competitors.map((c) => ({
  label: c,
  score: Math.floor(Math.random() * 50),
  wins: []
}))

const first = matches[0].map((match) => match.map((c) => mappedCompetitors[c]))
const displayFirst = first
const firstWinners = filterWinners(first)

const second = matches[1].map((match) => match.map((c) => firstWinners[c]))
const displaySecond = second
const secondWinners = filterWinners(second)

const third = matches[2].map((match) => match.map((c) => secondWinners[c]))
const displayThird = third
const thirdWinners = filterWinners(third)

const fourth = matches[3].map((match) => match.map((c) => thirdWinners[c]))
const displayFourth = fourth
const fourthWinners = filterWinners(fourth)

const fifth = matches[4].map((match) => match.map((c) => fourthWinners[c]))
const displayFifth = fifth

const Brackets = () => {
  return (
    <div
      style={{
        width: '100vw',
        display: 'flex',
        overflow: 'auto',
        padding: '24px'
      }}
    >
      <div
        style={{
          marginRight: '36px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around'
        }}
      >
        {displayFirst.map((b, index) => (
          <Bracket key={index} first={b[0]} second={b[1]} round={12} />
        ))}
      </div>

      <div
        style={{
          marginRight: '36px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around'
        }}
      >
        {displaySecond.map((b, index) => (
          <Bracket key={index} first={b[0]} second={b[1]} round={12} />
        ))}
      </div>

      <div
        style={{
          marginRight: '36px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around'
        }}
      >
        {displayThird.map((b, index) => (
          <Bracket key={index} first={b[0]} second={b[1]} round={12} />
        ))}
      </div>

      <div
        style={{
          marginRight: '36px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around'
        }}
      >
        {displayFourth.map((b, index) => (
          <Bracket key={index} first={b[0]} second={b[1]} round={12} />
        ))}
      </div>

      <div
        style={{
          marginRight: '36px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around'
        }}
      >
        {displayFifth.map((b, index) => (
          <Bracket key={index} first={b[0]} second={b[1]} round={12} />
        ))}
      </div>
    </div>
  )
}

export default Brackets
