function createMatches(total) {
  return new Array(Math.ceil(total / 2)).fill(1).map((item, index) => {
    return [index * 2, index * 2 + 1];
  });
}

const rounds = [32, 16, 8, 4, 2];

export default rounds.map((count) => createMatches(count));

// const first = createMatches(32)

// const second = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
//   [6, 7],
//   [8, 9],
//   [10, 11],
//   [12, 13],
//   [14, 15],
// ];

// const third = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
//   [6, 7],
// ];

// const fourth = [
//   [0, 1],
//   [2, 3],
// ];

// const fifth = [[0, 1]];

// export default { first, second, third, fourth, fifth };
