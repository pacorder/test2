
import React, { useEffect, useRef } from 'react';

const TechSphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width: number;
    let height: number;
    let points: { x: number; y: number; z: number }[] = [];
    const numPoints = 400;
    const radius = 250;
    let rotationX = 0;
    let rotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    const createPoints = () => {
      points = [];
      for (let i = 0; i < numPoints; i++) {
        const theta = Math.acos(Math.random() * 2 - 1);
        const phi = Math.random() * Math.PI * 2;
        
        points.push({
          x: radius * Math.sin(theta) * Math.cos(phi),
          y: radius * Math.sin(theta) * Math.sin(phi),
          z: radius * Math.cos(theta)
        });
      }
    };

    const project = (p: { x: number; y: number; z: number }) => {
      const perspective = 600 / (600 + p.z);
      return {
        x: p.x * perspective + width / 2,
        y: p.y * perspective + height / 2,
        p: perspective
      };
    };

    const rotate = (p: { x: number; y: number; z: number }) => {
      // Rotation around Y
      let x = p.x * Math.cos(rotationY) - p.z * Math.sin(rotationY);
      let z = p.x * Math.sin(rotationY) + p.z * Math.cos(rotationY);
      
      // Rotation around X
      let y = p.y * Math.cos(rotationX) - z * Math.sin(rotationX);
      z = p.y * Math.sin(rotationX) + z * Math.cos(rotationX);

      return { x, y, z };
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Target rotation based on mouse or auto-rotation
      rotationY += 0.002 + (mouseX * 0.0001);
      rotationX += 0.001 + (mouseY * 0.0001);

      // Sort points by depth for correct rendering if needed, 
      // but for simple dots we just draw.
      
      ctx.beginPath();
      points.forEach(p => {
        const rotated = rotate(p);
        const projected = project(rotated);
        
        const size = 1.5 * projected.p;
        const opacity = Math.max(0, (rotated.z + radius) / (2 * radius));
        
        ctx.fillStyle = `rgba(59, 130, 246, ${opacity * 0.6})`; // blue-500
        ctx.beginPath();
        ctx.arc(projected.x, projected.y, size, 0, Math.PI * 2);
        ctx.fill();
        
        // Occasional lines for "tech" feel
        if (Math.random() > 0.995) {
            ctx.strokeStyle = `rgba(16, 185, 129, ${opacity * 0.2})`; // emerald-500
            ctx.lineWidth = 0.5;
            ctx.lineTo(width/2, height/2);
            ctx.stroke();
        }
      });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX - width / 2;
      mouseY = e.clientY - height / 2;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    
    resize();
    createPoints();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40 mix-blend-screen"
    />
  );
};

export default TechSphere;
