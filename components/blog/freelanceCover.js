const columns = [
    { x: 40, label: 'SCOPE', accent: '#f87171', cards: 3 },
    { x: 215, label: 'SHIPPING', accent: '#facc15', cards: 2 },
    { x: 390, label: 'DONE', accent: '#4ade80', cards: 3, done: true },
]

export default function FreelanceCover() {
    return (
        <div className="w-full h-full bg-grey flex items-center justify-center overflow-hidden">
            <svg
                viewBox="0 0 600 360"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Kanban board with Scope, Shipping, and Done columns — illustrating a freelance project workflow."
                className="w-full h-full"
            >
                <defs>
                    <pattern
                        id="fl-dots"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                    >
                        <circle cx="2" cy="2" r="1" fill="#555" opacity="0.4" />
                    </pattern>
                </defs>
                <rect width="600" height="360" fill="url(#fl-dots)" />

                {columns.map((col) => (
                    <g key={col.label}>
                        <rect
                            x={col.x}
                            y="40"
                            width="170"
                            height="300"
                            rx="8"
                            fill="#1f1a2b"
                            stroke="#7d7789"
                            strokeWidth="1"
                        />
                        <rect
                            x={col.x}
                            y="40"
                            width="170"
                            height="8"
                            rx="8"
                            fill={col.accent}
                            opacity="0.65"
                        />
                        <text
                            x={col.x + 85}
                            y="72"
                            textAnchor="middle"
                            fill="#ffffff"
                            fontSize="11"
                            fontWeight="700"
                            letterSpacing="2"
                        >
                            {col.label}
                        </text>

                        {Array.from({ length: col.cards }).map((_, i) => {
                            const cardY = 94 + i * 70
                            return (
                                <g key={i}>
                                    <rect
                                        x={col.x + 12}
                                        y={cardY}
                                        width="146"
                                        height="56"
                                        rx="5"
                                        fill="#2a2438"
                                        stroke="#7d7789"
                                        strokeWidth="0.8"
                                    />
                                    <rect
                                        x={col.x + 12}
                                        y={cardY}
                                        width="4"
                                        height="56"
                                        rx="2"
                                        fill={col.accent}
                                    />
                                    <rect
                                        x={col.x + 24}
                                        y={cardY + 10}
                                        width="110"
                                        height="4"
                                        rx="2"
                                        fill="#ffffff"
                                        opacity="0.85"
                                    />
                                    <rect
                                        x={col.x + 24}
                                        y={cardY + 20}
                                        width="80"
                                        height="3"
                                        rx="1.5"
                                        fill="#ffffff"
                                        opacity="0.4"
                                    />
                                    <rect
                                        x={col.x + 24}
                                        y={cardY + 34}
                                        width="38"
                                        height="12"
                                        rx="6"
                                        fill={col.accent}
                                        opacity="0.28"
                                    />
                                    <rect
                                        x={col.x + 68}
                                        y={cardY + 38}
                                        width="25"
                                        height="3"
                                        rx="1.5"
                                        fill="#ffffff"
                                        opacity="0.5"
                                    />
                                    {col.done && (
                                        <g
                                            transform={`translate(${col.x + 138}, ${cardY + 40})`}
                                        >
                                            <circle
                                                cx="0"
                                                cy="0"
                                                r="8"
                                                fill="#4ade80"
                                                opacity="0.3"
                                            />
                                            <path
                                                d="M -3 0 L -1 3 L 4 -3"
                                                stroke="#4ade80"
                                                strokeWidth="2"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                    )}
                                </g>
                            )
                        })}
                    </g>
                ))}
            </svg>
        </div>
    )
}
