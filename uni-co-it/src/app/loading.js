'use client'
import { useState, useEffect } from 'react';

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // After 2 seconds, hide the loading component from the DOM
      setIsLoading(false);
    }, 2000); // 2000 milliseconds = 2 seconds = 2 seconds

    return () => {
      clearTimeout(timer); // Clear the timer if the component unmounts before 2 seconds
    };
  }, []);

  return (
    <div className={`flex justify-center ${isLoading ? 'block' : 'hidden'}`}>
      <img className="h-96" src="/spinner.svg" alt="loading..." />
    </div>
  );
}
