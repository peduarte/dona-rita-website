import React from 'react';

export function Section({ className, children }) {
	return <div className={`section ${className}`}>{children}</div>;
}
