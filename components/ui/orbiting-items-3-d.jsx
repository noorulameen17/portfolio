'use client';
import { useEffect, useState } from "react";
import { Apple, BadgeCent, BadgeInfo, BadgeX, Banana, Bolt } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const CenterIcon = (
    <div className="center z-0 h-80 w-80">
        <Image
            src="/3d.gif"
            alt="3D Animation"
            width={128}
            height={128}
            className="w-full h-full object-cover"
            unoptimized
        />
    </div>
);

export const LucideIcons = [
    <Banana key="banana" className="h-12 w-12" />,
    <Bolt key="bolt" className="h-12 w-12" />,
    <BadgeX key="badge-x" className="h-12 w-12" />,
    <BadgeCent key="badge-cent" className="h-12 w-12" />,
    <BadgeInfo key="badge-info" className="h-12 w-12" />,
    <Apple key="apple" className="h-12 w-12" />,
];

export default function OrbitingItems3D({
    radiusX = 120,
    radiusY = 30,
    tiltAngle = 360 - 30,
    duration = 25,
    items = LucideIcons,
    backgroundClassName,
    containerClassName,
    className,
}) {
    const CalculateItemStyle = ({
        index,
        radiusX,
        radiusY,
        totalItems,
        tiltAngle,
        duration,
    }) => {
        const angleStep = 360 / totalItems;
        const [angle, setAngle] = useState(index * angleStep);
        useEffect(() => {
            const animation = setInterval(() => {
                setAngle((prevAngle) => (prevAngle + 1) % 360);
            }, duration);

            return () => clearInterval(animation);
        }, [duration]);

        const radians = (angle * Math.PI) / 180;

        const x = radiusX * Math.cos(radians);
        const y = radiusY * Math.sin(radians);

        const tiltRadians = (tiltAngle * Math.PI) / 180;
        const xTilted = x * Math.cos(tiltRadians) - y * Math.sin(tiltRadians);
        const yTilted = x * Math.sin(tiltRadians) + y * Math.cos(tiltRadians);
        const zIndex = angle > 180 ? -1 : 1;
        const scale = angle < 180 ? 1.2 : 1.0;

        return {
            left: `${50 + xTilted}%`,
            top: `${50 + yTilted}%`,
            transform: `translate(-50%, -50%) scale(${scale})`,
            zIndex: zIndex,
            transition: "transform 0.8s ease-in-out",
        };
    };

    const reverse = cn("transition-transform ease-linear direction-reverse repeat-infinite");

    return (
        <div
            className={cn(
                "storybook-fix group flex items-center justify-center py-32",
                containerClassName,
            )}
        >
            <div
                className={cn(
                    "absolute inset-0 -z-10 h-full w-full items-center bg-gradient-to-r from-violet-200 to-pink-200",
                    backgroundClassName,
                )}
            />
            <div
                className={cn(
                    "relative flex h-64 w-64 items-center justify-center ease-linear repeat-infinite",
                    className,
                )}
            >
                {CenterIcon}
                {items.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="absolute flex h-20 w-20 items-center justify-center rounded-full bg-white/30 shadow-xl shadow-purple-500/30 backdrop-blur-md transition-transform duration-500 ease-out"
                            style={CalculateItemStyle({
                                index,
                                radiusX,
                                radiusY,
                                tiltAngle,
                                totalItems: items.length,
                                duration,
                            })}
                        >
                            <div className={reverse}>{item}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
