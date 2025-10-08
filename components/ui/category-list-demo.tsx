"use client";
import React from 'react';
import { CategoryList, Category } from '@/components/ui/category-list';
import { LayoutGrid, Bot, Code, Palette, ArrowRight } from 'lucide-react';

const sampleCategories: Category[] = [
  {
    id: 1,
    title: 'CyberSecurity',
    subtitle: 'Dive deep into our main showcase.',
    onClick: () => alert('Navigating to Featured Project...'),
    icon: <ArrowRight className="w-8 h-8" />,
    featured: true, // This item will have a larger title
  },
  {
    id: 2,
    title: 'NeuroTech',
    subtitle: 'Explore intelligent systems and workflows.',
    onClick: () => alert('Navigating to AI...'),
    icon: <Bot className="w-8 h-8" />,
  },
  {
    id: 3,
    title: 'AI Security',
    subtitle: 'Discover user-centric design patterns.',
    onClick: () => alert('Navigating to Design...'),
    icon: <Palette className="w-8 h-8" />,
  },
  {
    id: 4,
    title: 'Threat Intelleigence',
    subtitle: 'Get started with our pre-built components.',
    onClick: () => alert('Navigating to Dev Kits...'),
    icon: <Code className="w-8 h-8" />,
  },
{
    id: 5,
    title: 'XDR/CTEM',
    subtitle: 'Our Core category',
    onClick: () => alert('Navigating to Dev Kits...'),
    icon: <Code className="w-8 h-8" />,
  },
];


const CategoryListDemo = () => {
  return (
    <div className="w-full min-h-screen bg-background">
      <CategoryList
        title="Trending"
        subtitle="Categories"
        categories={sampleCategories}
        headerIcon={<LayoutGrid className="w-8 h-8" />}
      />
    </div>
  );
};

export default CategoryListDemo;