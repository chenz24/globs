import { ICanvasItems, IData } from "lib/types"
import { getGlobPoints } from "./utils"

export const initialData: IData = {
  version: "1",
  id: Date.now().toString(),
  name: "Loading...",
  code: {
    0: {
      id: "0",
      childIndex: 0,
      name: "My Code",
      code: "",
    },
  },
  pageId: "0",
  pages: {
    0: {
      id: "0",
      name: "Page 1",
      type: ICanvasItems.Page,
      locked: false,
      childIndex: 0,
    },
  },
  groups: {},
  nodes: {},
  globs: {},
  // Client state
  nodeIds: [],
  globIds: [],
  theme: "dark",
  codePanel: {
    fontSize: 13,
  },
  viewport: {
    point: [0, 0],
    size: [0, 0],
    scroll: [0, 0],
  },
  document: {
    point: [400, 300],
    size: [0, 0],
  },
  camera: {
    point: [400, 300],
    zoom: 1,
  },
  fill: false,
  brush: undefined,
  bounds: undefined,
  snaps: {
    active: [],
  },
  readOnly: false,
  pointingId: undefined,
  hoveredNodes: [],
  hoveredGlobs: [],
  highlightNodes: [],
  highlightGlobs: [],
  selectedNodes: [],
  selectedGlobs: [],
  selectedHandle: undefined,
  generated: {
    nodeIds: [],
    globIds: [],
  },
  shareUrls: [],
}

export const defaultData: IData = {
  ...initialData,
  nodes: {
    1: {
      id: "1",
      name: "Node 1",
      type: ICanvasItems.Node,
      point: [500, 300],
      radius: 25,
      childIndex: 1,
      cap: "round",
      locked: false,
      parentId: "0",
    },
    2: {
      id: "2",
      name: "Node 2",
      type: ICanvasItems.Node,
      point: [400, 350],
      radius: 10,
      childIndex: 2,
      cap: "round",
      locked: false,
      parentId: "0",
    },
    3: {
      id: "3",
      name: "Node 3",
      type: ICanvasItems.Node,
      point: [300, 350],
      radius: 20,
      childIndex: 3,
      cap: "round",
      locked: false,
      parentId: "0",
    },
    4: {
      id: "4",
      name: "Node 4",
      type: ICanvasItems.Node,
      point: [500, 550],
      radius: 50,
      childIndex: 4,
      cap: "round",
      locked: false,
      parentId: "0",
    },
    5: {
      id: "5",
      name: "Node 5",
      type: ICanvasItems.Node,
      point: [300, 100],
      radius: 50,
      childIndex: 5,
      cap: "round",
      locked: false,
      parentId: "0",
    },
  },
  globs: {
    g0: {
      id: "g0",
      type: ICanvasItems.Glob,
      name: "Glob 0",
      nodes: ["5", "1"],
      D: [600, 150],
      Dp: [500, 150],
      a: 0.5,
      ap: 0.5,
      b: 0.5,
      bp: 0.5,
      points: undefined,
      childIndex: 6,
      parentId: "0",
      locked: false,
    },
    g1: {
      id: "g1",
      type: ICanvasItems.Glob,
      name: "Glob 1",
      nodes: ["1", "2"],
      D: [650, 450],
      Dp: [620, 400],
      a: 0.5,
      ap: 0.5,
      b: 0.5,
      bp: 0.5,
      points: undefined,
      childIndex: 7,
      parentId: "0",
      locked: false,
    },
    g2: {
      id: "g2",
      type: ICanvasItems.Glob,
      name: "Glob 2",
      nodes: ["2", "3"],
      D: [250, 550],
      Dp: [220, 500],
      a: 0.5,
      ap: 0.5,
      b: 0.5,
      bp: 0.5,
      points: undefined,
      childIndex: 8,
      parentId: "0",
      locked: false,
    },
  },
  nodeIds: ["1", "2", "3", "4", "5"],
  globIds: ["g0", "g1", "g2"],
}

for (const key in defaultData.globs) {
  const glob = defaultData.globs[key]
  const [start, end] = glob.nodes.map((id) => defaultData.nodes[id])
  glob.points = getGlobPoints(glob, start, end)
}
