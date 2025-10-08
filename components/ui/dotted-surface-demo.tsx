import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";

export default function DemoOne() {
 return (
<div className="relative z-10 mx-auto max-w-5xl py-24 sm:py-32 text-center">
<div
aria-hidden="true"
className={cn(
'pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full',
'bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]',
'blur-[30px]',
)}
/>
<div className="text-center">
<h1 className="font-mono text-4xl font-semibold">Where CyberSecurity Meets Human Intelligence</h1>
<p className="mt-6 text-lg leading-8 text-muted-foreground">Exploring the future of secure digital ecosystems and neurotechnology innovation</p>
<div className="mt-10 flex items-center justify-center gap-x-6">
<Button>Explore CyberSecurity</Button>
<Button variant="outline">Discover NeuroTechnology</Button>
</div>
</div>
</div>
);
}