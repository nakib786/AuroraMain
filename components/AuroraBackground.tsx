'use client';

import { useEffect, useRef } from 'react';
import { initDarkVeil } from '../lib/DarkVeil';

interface AuroraBackgroundProps {
    speed?: number;
    hueShift?: number;
    className?: string;
}

export default function AuroraBackground({
    speed = 0.5,
    hueShift = 0,
    className = ''
}: AuroraBackgroundProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const instance = initDarkVeil(containerRef.current, {
            speed,
            hueShift,
            resolutionScale: 1
        });

        return () => {
            instance.destroy();
        };
    }, [speed, hueShift]);

    return (
        <div
            ref={containerRef}
            className={`fixed inset-0 z-[-10] pointer-events-none ${className}`}
            style={{ background: '#000000' }}
        />
    );
}
