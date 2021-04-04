import { ICanvasItems, IData } from "lib/types"
import { getGlob } from "./utils"

export const initialData: IData = {
  viewport: {
    point: [0, 0],
    size: [0, 0],
    scroll: [0, 0],
  },
  document: {
    point: [0, 0],
    size: [0, 0],
  },
  camera: {
    point: [0, 0],
    zoom: 1,
  },
  fill: false,
  brush: undefined,
  bounds: undefined,
  nodes: {
    0: {
      id: "0",
      name: "Node 0",
      type: ICanvasItems.Node,
      point: [300, 100],
      radius: 50,
      zIndex: 0,
      cap: "round",
      locked: false,
    },
    1: {
      id: "1",
      name: "Node 1",
      type: ICanvasItems.Node,
      point: [500, 300],
      radius: 25,
      zIndex: 1,
      cap: "round",
      locked: false,
    },
    2: {
      id: "2",
      name: "Node 2",
      type: ICanvasItems.Node,
      point: [400, 350],
      radius: 10,
      zIndex: 1,
      cap: "round",
      locked: false,
    },
    3: {
      id: "3",
      name: "Node 3",
      type: ICanvasItems.Node,
      point: [300, 350],
      radius: 20,
      zIndex: 1,
      cap: "round",
      locked: false,
    },
    4: {
      id: "4",
      name: "Node 4",
      type: ICanvasItems.Node,
      point: [500, 550],
      radius: 50,
      zIndex: 1,
      cap: "round",
      locked: false,
    },
  },
  globs: {
    g0: {
      id: "g0",
      name: "Glob 0",
      nodes: ["0", "1"],
      options: {
        D: [600, 150],
        Dp: [500, 150],
        a: 0.5,
        ap: 0.5,
        b: 0.5,
        bp: 0.5,
      },
      points: undefined,
      zIndex: 2,
    },
    g1: {
      id: "g1",
      name: "Glob 1",
      nodes: ["1", "2"],
      options: {
        D: [650, 450],
        Dp: [620, 400],
        a: 0.5,
        ap: 0.5,
        b: 0.5,
        bp: 0.5,
      },
      points: undefined,
      zIndex: 2,
    },
    g2: {
      id: "g2",
      name: "Glob 2",
      nodes: ["2", "3"],
      options: {
        D: [250, 550],
        Dp: [220, 500],
        a: 0.5,
        ap: 0.5,
        b: 0.5,
        bp: 0.5,
      },
      points: undefined,
      zIndex: 3,
    },
  },
  initialPoints: {
    nodes: {},
    globs: {},
  },
  snaps: {
    nodes: {},
    globs: {},
    active: [],
  },
  nodeIds: ["0", "1", "2", "3", "4"],
  globIds: ["g0", "g1", "g2"],
  hoveredNodes: [],
  hoveredGlobs: [],
  highlightNodes: [],
  highlightGlobs: [],
  selectedNodes: [],
  selectedGlobs: [],
  selectedAnchor: undefined,
  selectedHandle: undefined,
  cloning: [],
}

for (let key in initialData.globs) {
  const glob = initialData.globs[key]
  const [start, end] = glob.nodes.map((id) => initialData.nodes[id])
  glob.points = getGlob(
    start.point,
    start.radius,
    end.point,
    end.radius,
    glob.options.D,
    glob.options.Dp,
    glob.options.a,
    glob.options.b,
    glob.options.ap,
    glob.options.bp
  )
}
