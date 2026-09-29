import { useState } from 'react'

type NodeId =
  | 'system'
  | 'aws'
  | 'fastapi'
  | 'postgres'
  | 'docker'
  | 'llm'
  | 'java'

interface SystemNode {
  id: NodeId
  label: string
  x: number
  y: number
  description: string
}

const nodes: SystemNode[] = [
  {
    id: 'system',
    label: 'SYSTEM',
    x: 200,
    y: 170,
    description: 'Backend • Cloud • AI',
  },
  {
    id: 'aws',
    label: 'AWS',
    x: 200,
    y: 45,
    description: 'EC2 • RDS • S3 • CloudWatch',
  },
  {
    id: 'fastapi',
    label: 'FastAPI',
    x: 70,
    y: 115,
    description: 'REST APIs • Validation • Async',
  },
  {
    id: 'postgres',
    label: 'PostgreSQL',
    x: 330,
    y: 115,
    description: 'Query Optimization • pgvector',
  },
  {
    id: 'docker',
    label: 'Docker',
    x: 75,
    y: 245,
    description: 'Containers • Reproducible Deployments',
  },
  {
    id: 'llm',
    label: 'LLM / RAG',
    x: 325,
    y: 245,
    description: 'Embeddings • Retrieval • Agents',
  },
  {
    id: 'java',
    label: 'Java',
    x: 200,
    y: 300,
    description: 'Spring Boot • Backend Systems',
  },
]

const connections: [NodeId, NodeId][] = [
  ['system', 'aws'],
  ['system', 'fastapi'],
  ['system', 'postgres'],
  ['system', 'docker'],
  ['system', 'llm'],
  ['system', 'java'],
  ['fastapi', 'postgres'],
  ['aws', 'docker'],
  ['postgres', 'llm'],
]

const SystemConstellation = () => {
  const [activeNode, setActiveNode] = useState<NodeId | null>(null)

  const getNode = (id: NodeId) =>
    nodes.find((node) => node.id === id)!

  const selectedNode = activeNode
    ? getNode(activeNode)
    : getNode('system')

  const isConnectionActive = (
    start: NodeId,
    end: NodeId
  ) => {
    if (!activeNode) return false

    return start === activeNode || end === activeNode
  }

  return (
    <div className="constellation">
      <div className="constellation-header">
        <span className="constellation-status" />
        SYSTEMS ONLINE
      </div>

      <svg
        className="constellation-svg"
        viewBox="0 0 400 340"
        role="img"
        aria-label="Interactive technology system map"
      >
        <defs>
          <filter id="nodeGlow">
            <feGaussianBlur
              stdDeviation="4"
              result="coloredBlur"
            />

            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {connections.map(([startId, endId]) => {
          const start = getNode(startId)
          const end = getNode(endId)

          const active = isConnectionActive(
            startId,
            endId
          )

          return (
            <line
              key={`${startId}-${endId}`}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              className={
                active
                  ? 'system-line system-line-active'
                  : 'system-line'
              }
            />
          )
        })}

        {nodes.map((node) => {
          const active = activeNode === node.id

          return (
            <g
              key={node.id}
              className={`system-node ${
                active ? 'system-node-active' : ''
              }`}
              onMouseEnter={() =>
                setActiveNode(node.id)
              }
              onMouseLeave={() =>
                setActiveNode(null)
              }
              onClick={() =>
                setActiveNode(
                  activeNode === node.id
                    ? null
                    : node.id
                )
              }
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (
                  event.key === 'Enter' ||
                  event.key === ' '
                ) {
                  setActiveNode(node.id)
                }
              }}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r={node.id === 'system' ? 9 : 7}
                className="system-node-circle"
              />

              <circle
                cx={node.x}
                cy={node.y}
                r={node.id === 'system' ? 18 : 14}
                className="system-node-ring"
              />

              <text
                x={node.x}
                y={
                  node.id === 'java'
                    ? node.y + 32
                    : node.y - 22
                }
                textAnchor="middle"
                className="system-node-label"
              >
                {node.label}
              </text>
            </g>
          )
        })}
      </svg>

      <div className="constellation-info">
        <span>{selectedNode.label}</span>
        <p>{selectedNode.description}</p>
      </div>

      <p className="constellation-hint">
        Hover over a node to explore
      </p>
    </div>
  )
}

export default SystemConstellation