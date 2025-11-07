'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import Lenis from 'lenis'
import { ZoomParallax } from "@/components/ui/zoom-parallax";

export default function NeurotechnologyDemo() {

React.useEffect( () => {
        const lenis = new Lenis()
       
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    },[])


const images = [
{
src: './neural-frontier.png',
alt: 'Neural Frontier',
},
{
src: './aineural.png',
alt: 'AI Neural',
},
{
src: './research-breakthroughs.png',
alt: 'Research Breakthroughs',
},
{
src: './bci.png',
alt: 'BCI',
},
];

return (
<div className="min-h-screen w-full">
<div className="relative flex h-[50vh] items-center justify-center">
{/* Radial spotlight */}
<div
aria-hidden="true"
className={cn(
'pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
'bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]',
'blur-[30px]',
)}
/>
<h1 className="text-center text-4xl font-bold">
NeuroTechnology
</h1>
</div>
<ZoomParallax images={images} />
<div className="h-[50vh]"/>
</div>
);
}