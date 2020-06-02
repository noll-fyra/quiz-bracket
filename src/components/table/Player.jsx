import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Player = ({ player, rank, isViewer }) => {
  return (
    <Container isViewer={isViewer}>
      <Score>{rank}</Score>
      <Name>{player.name}</Name>
      <Score>
        <strong>{player.score}</strong>
      </Score>
    </Container>
  )
}

Player.propTypes = {
  player: PropTypes.shape({ name: PropTypes.string, score: PropTypes.number })
    .isRequired,
  rank: PropTypes.number.isRequired
}

export default Player

const Container = styled.div`
  width: 480px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: ${(props) => (props.isViewer ? 'yellow' : '#333333')};
  color: ${(props) => (props.isViewer ? 'black' : 'white')};
  margin-bottom: 4px;
  font-size: 1.2em;
`

const Name = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Score = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
`
