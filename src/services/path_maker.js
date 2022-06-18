let graph = {
  11: [12, 20, 25],
  12: [11, 13, 14, 15, 25, 28, 30, 33],
  13: [11, 12, 14, 15, 17, 24, 25],
  14: [12, 13, 15, 17, 18],
  15: [12, 14, 33],
  17: [13, 14, 18, 19, 24],
  18: [14, 17],
  19: [17, 18],
  20: [11, 12, 22, 24, 25, 28, 47],
  21: [20, 22, 23, 28, 47, 48],
  22: [20, 23, 24, 26, 27],
  23: [21, 22, 27, 49, 80, 82],
  24: [13, 17, 20, 25, 26],
  25: [11, 12, 13, 20, 24],
  26: [22, 24, 27],
  27: [22, 23, 26, 84],
  28: [20, 21, 47],
  30: [12, 31, 32, 33, 34],
  31: [30, 32, 38, 45],
  32: [30, 31, 45, 46, 47],
  33: [12, 15, 30, 34],
  34: [30, 31, 33, 38],
  36: [37, 38],
  37: [36, 38],
  38: [30, 31, 34, 36, 37, 39, 45],
  39: [38, 42, 45],
  40: [39, 41, 42],
  41: [40, 42, 43, 58, 59],
  42: [39, 40, 41, 43, 44, 45],
  43: [41, 42, 44, 45, 48, 50],
  44: [42, 43, 45, 46, 48, 49, 50],
  45: [31, 32, 42, 44, 46],
  46: [32, 44, 45, 47, 48],
  47: [21, 28, 46, 47, 48],
  48: [21, 23, 44, 46, 47, 49],
  49: [23, 44, 48, 50, 76, 77, 82, 83],
  50: [41, 43, 44, 49, 51, 52, 53, 58],
  51: [50, 52, 56, 57, 58, 60, 63],
  52: [50, 51, 53, 60],
  53: [49, 50, 52, 76],
  56: [51, 57, 63],
  57: [51, 56, 58, 63, 64, 67],
  58: [41, 43, 50, 51, 57, 59],
  59: [41, 58],
  60: [51, 52, 61, 62, 63],
  61: [60, 62, 63],
  62: [61, 63, 64, 68, 69],
  63: [56, 57, 60, 62, 64],
  64: [57, 62, 63, 67, 68],
  67: [57, 64, 68],
  68: [62, 64, 67, 69],
  69: [62, 68],
  70: [71, 74],
  71: [70, 72, 74, 81],
  72: [71, 75, 81, 82, 83],
  73: [74, 78, 81, 85],
  74: [71, 73, 81],
  75: [72, 76, 77, 83],
  76: [49, 53, 75, 77],
  77: [49, 75, 76, 83],
  78: [73, 79],
  79: [78],
  80: [23, 27, 81, 82, 84, 85],
  81: [71, 73, 80, 82, 84, 85],
  82: [23, 49, 72, 80, 81, 83],
  83: [49, 72, 75, 77, 82],
  84: [27, 80, 85],
  85: [73, 80, 81, 84],
};

function WeightGenerator(End) {
  let weight = {};
  let v = [];
  let q = [];

  v.push(End);
  let w = 0;
  weight[End] = w;
  q.push(End);

  while (q.length != 0) {
    w++;
    let u = q[q.length - 1];
    q.pop();

    for (let i = 0; i < graph[u].length; i++) {
      let val = graph[u][i];
      if (!v.includes(val)) {
        v.push(val);
        weight[val] = w;
        q.push(val);
      }
    }
  }
  return weight;
}

function BFS(Start, End) {
  console.log(Start, End);
  let queue = [];
  let hops = {};

  let bestWeight = 10000; // Max Weight
  let bestPath = [];

  let weight = WeightGenerator(End);
  queue.push(Start);

  while (queue.length != 0) {
    let u = queue[queue.length - 1];
    hops[u] = [];
    queue.pop();

    for (let i = 0; i < graph[u].length; i++) {
      if (bestWeight >= weight[graph[u][i]]) {
        bestWeight = weight[graph[u][i]];
        bestPath.push(graph[u][i]);
      }
    }

    for (let i = 0; i < bestPath.length; i++) {
      hops[u].push(bestPath[bestPath.length - 1]);
      queue.push(bestPath.pop());
    }

    if (u == End) {
      let v = Start;
      let keys = Object.keys(hops);
      keys = keys.map((x) => parseInt(x, 10));

      let path = {};
      path[v] = {};

      while (v != End) {
        if (hops[v].includes(End)) {
          path[v] = End;
          v = Start;
          let arr = [];

          while (v != End) {
            for (let i = 0; i < Object.keys(path).length; i++) {
              if (i == 0) {
                arr.push(v);
              }
              arr.push(path[v]);
              v = path[v];
              if (v == End) return arr;
            }
          }
          // Not Needed
          return arr;
        }

        hops[v].forEach((a) => {
          if (keys.includes(a)) {
            path[v] = a;
            v = a;
          }
        });
      }
    }
  }
  return false;
}

// console.log(BFS(11, 69));
function nearestPIN(path, unAvailableList) {
  // console.log(path, unAvailableList);
  let nearest = path.slice(-1);
  // converting into 2digit list
  let tdl = [];
  let i = 0;
  unAvailableList.forEach((pin) => {
    tdl[i] = pin % 100;
    i++;
  });
  for (let i = path.length - 1; i >= 0; i--) {
    if (!tdl.includes(path[i])) {
      nearest = path[i];
      return nearest;
    }
  }
  return false;
}

module.exports = {
  BFS,
  nearestPIN,
};
