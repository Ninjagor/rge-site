"use client"
import React, { useRef, useEffect } from 'react'
// @ts-expect-error
import * as r from "rge.js";

function calculateEquilateralTriangleVertices(size: number) {
    const height = (Math.sqrt(3) / 2) * size;
    const vertices = [
        { x: 0, y: -height / 2 },
        { x: size / 2, y: height / 2 },
        { x: -size / 2, y: height / 2 }
    ];
    return vertices;
}

const HeroCanvas = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const rge = new r.Engine('heroCanvas', 120);
        let y =0;
        let vy = 0;
        let y1 =0;
        let vy1 = 0;
        let y2 =0;
        let vy2 = 0;
        let y3 =0;
        let vy3 = 0;
        let gravity = 0.03;


        const rect = new r.Rect(0, 0, 20, 20, "red");
        rge.addEntity(rect)

        const rect2 = new r.Rect(80, 60, 20, 20, "#a23deb");
        rge.addEntity(rect2)

        const circle = new r.Ellipse(220, 20, 10, "#3d80eb");
        rge.addEntity(circle)

        const polygon = new r.Polygon(290, 100, calculateEquilateralTriangleVertices(25), "#0bb541");
        rge.addEntity(polygon);

        function tick() {
            vy -= gravity
            vy1 -= gravity
            y -= vy
            y1 -= vy1
            vy2 -= gravity
            y2 -= vy2
            vy3 -= gravity
            y3 -= vy3

            if (rect.y >= 190) {
                vy = Math.random() * (2.75 - 1.5) + 1.5;
            }
            if (rect2.y >= 190) {
                vy2 = Math.random() * (2.75 - 1.5) + 1.5;
            }
            if (circle.y >= 190) {
                vy1 = Math.random() * (2.75 - 1.5) + 1.5;
            }
            if (polygon.y >= 190) {
                vy3 = Math.random() * (2.75 - 1.5) + 1.5;
            }
            rect.update(150, y)
            circle.update(220, y1)
            rect2.update(80, y2);
            polygon.update(290, y3)
        }

        rge.setTickFunction(tick)
        rge.start()

        return () => {
            rge.stop()
        }
    }, [])
  return (
    <div className="w-full flex items-center justify-center rounded-md bg-neutral-50 border-[1px] border-neutral-100 dark:bg-neutral-900 dark:border-neutral-800 min-h-[300px] flex-1">
        <canvas id="heroCanvas" width={400} height={220} style={{ width: '100%', height: '100%' }} ref={canvasRef}></canvas>
    </div>
  )
}

export default HeroCanvas