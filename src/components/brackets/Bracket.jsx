import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Bracket = ({ first, second, round }) => {
  return (
    <Container>
      <Match>{round}</Match>
      <Details>
        <Item>
          <Label isWinner={first.score > second.score}>{first.label}</Label>
          <Score>{first.score}</Score>
        </Item>
        <Item style={{ borderBottom: '0px' }}>
          <Label isWinner={second.score > first.score}>{second.label}</Label>
          <Score>{second.score}</Score>
        </Item>
      </Details>
    </Container>
  )
}

Bracket.propTypes = {
  first: PropTypes.shape({
    label: PropTypes.object,
    score: PropTypes.string
  }).isRequired,
  second: PropTypes.shape({
    label: PropTypes.object,
    score: PropTypes.string
  }).isRequired,
  round: PropTypes.number.isRequired
}

export default Bracket

const Container = styled.div`
  display: flex;
  font-size: 1em;
  border-bottom: 1px solid white;
  margin-bottom: 12px;
  border-radius: 4px;
  border: 1px solid white;
`

const Match = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid white;
  min-width: 36px;
  font-weight: bold;
`

const Details = styled.div`
  width: 240px;
`

const Item = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid white;
`

const Label = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
  color: ${(props) => (props.isWinner ? 'yellow' : 'white')};
`

const Score = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid white;
  padding: 8px;
  min-width: 48px;
`
