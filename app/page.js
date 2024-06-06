'use client'
import Image from "next/image";
import { useState } from 'react';
import Timer from '../components/Timer';

const themes = [
  'Cowgirl',
  'Beach Vacation',
  'Ballet',
  'Hiking',
  'Midnight Walmart Run',
  'Apology Video',
  'Festive Holiday',
  'Museum Visit',
  'Self care Sunday',
  'Zombie Apocalypse',
  'Tennis Match',
  'Elegant',
  'Superhero or Villain',
  'Cheerleader',
  'Barbie',
  'Celebrity Event',
  'Magazine Cover',
  'News Reporter',
  'Airport Outfit',
  'Book Club',
  'Y2K',
  'Preppy',
  'Cottagecore',
  'Shopping',
  'Graduation',
  'A day in Paris',
  'Movie Night',
  'Picnic',
  'Prom',
  'Time Traveler',
  'Emo',
  'Old Money'
];


export default function Home() {

  const [theme, setTheme] = useState('');
  const [showTimer, setShowTimer] = useState(false);

  const getRandomTheme = () => {
    console.log('here')
    const randomIndex = Math.floor(Math.random() * themes.length);
    setTheme(themes[randomIndex]);
    setShowTimer(true);
  };

  const handleTimerEnd = () => {
    setShowTimer(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-red-200">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="text-black fixed bottom-0 left-0 flex h-48 w-full items-end justify-center from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made with ❤️{" "}
            for Meredith
          </a>
        </div>
      </div>

      <div className="text-black relative flex place-items-center ">
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1 className="text-4xl  font-bold mb-5">{theme || "Let's get started 👗"}</h1>
          {showTimer && <Timer duration={240} onEnd={handleTimerEnd} />}
          <button onClick={getRandomTheme} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            New Theme
          </button>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        

      </div>
    </main>
  );
}
