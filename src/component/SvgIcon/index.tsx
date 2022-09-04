import * as React from 'react'

export interface SvgIconProps {
    name: string
    color: string
    [key: string]: string
}

export default function SvgIcon({
    name,
    color,
    ...props
}: SvgIconProps) {
    const symbolId = `#${name}`

    return <svg {...props} aria-hidden="true" fill={color}>
        <use href={symbolId} />
    </svg>
}