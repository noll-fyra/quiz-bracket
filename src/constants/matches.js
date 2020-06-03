function createMatches(total) {
  return new Array(Math.ceil(total / 2)).fill(1).map((item, index) => {
    return [index * 2, index * 2 + 1]
  })
}

const rounds = [32, 16, 8, 4, 2]

export default rounds.map((count) => createMatches(count))
