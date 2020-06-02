import React, { useState } from 'react'
import './App.css'
import styled from 'styled-components'
import Match from './containers/Match'
import Brackets from './containers/Brackets'
import Table from './containers/Table'

const views = ['Bracket', 'Table', 'History']

const App = () => {
  const [view, setView] = useState(views[0])

  return (
    <div className="App">
      <h1>Quiz Bracket</h1>
      <header className="App-header">
        <Match />

        <div style={{ display: 'flex', width: '720px' }}>
          {views.map((label) => (
            <Button
              key={label}
              isActive={label === view}
              onClick={() => setView(label)}
            >
              {label}
            </Button>
          ))}
        </div>

        {view === views[0] && <Brackets />}

        {view === views[1] && <Table />}
      </header>
    </div>
  )
}

export default App

const Button = styled.button`
  background-color: ${(props) => (props.isActive ? 'yellow' : 'white')};
  width: 33.3333%;
  font-size: 1em;
  cursor: pointer;
  padding: 12px;
`
