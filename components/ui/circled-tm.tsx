import React from 'react';

const CircledTm = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="0.6em"
    height="0.6em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'inline-block', verticalAlign: 'super' }}
  >
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
    <text
      x="12"
      y="12"
      textAnchor="middle"
      dominantBaseline="central"
      fill="currentColor"
      fontSize="12"
      fontWeight="bold"
    >
      TM
    </text>
  </svg>
);

export default CircledTm;
