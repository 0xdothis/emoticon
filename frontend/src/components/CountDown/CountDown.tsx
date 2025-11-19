"use client"
import React from 'react';

function CountDown() {
  const mintDate = new Date(1764522000000); // your target date
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const daysRef = React.useRef<HTMLSpanElement>(null);
  const hoursRef = React.useRef<HTMLSpanElement>(null);
  const minsRef = React.useRef<HTMLSpanElement>(null);
  const secsRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const update = () => {
      const now = new Date().getTime();
      const diff = mintDate.getTime() - now;

      if (diff <= 0) {
        // countdown finished
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });

      // update CSS variables
      if (daysRef.current) daysRef.current.style.setProperty('--value', days.toString());
      if (hoursRef.current) hoursRef.current.style.setProperty('--value', hours.toString());
      if (minsRef.current) minsRef.current.style.setProperty('--value', minutes.toString());
      if (secsRef.current) secsRef.current.style.setProperty('--value', seconds.toString());
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [mintDate]);



  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span
            ref={daysRef}
            style={{ "--digits": 2 } as React.CSSProperties}
            aria-live="polite"
            aria-label={timeLeft.days.toString()}
          >
            {timeLeft.days.toString().padStart(3, '0')}
          </span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span
            ref={hoursRef}
            style={{ "--digits": 2 } as React.CSSProperties}
            aria-live="polite"
            aria-label={timeLeft.hours.toString()}
          >
            {timeLeft.hours.toString().padStart(2, '0')}
          </span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span
            ref={minsRef}
            style={{ "--digits": 2 } as React.CSSProperties}
            aria-live="polite"
            aria-label={timeLeft.minutes.toString()}
          >
            {timeLeft.minutes.toString().padStart(2, '0')}
          </span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span
            ref={secsRef}
            style={{ "--digits": 2 } as React.CSSProperties}
            aria-live="polite"
            aria-label={timeLeft.seconds.toString()}
          >
            {timeLeft.seconds.toString().padStart(2, '0')}
          </span>
        </span>
        sec
      </div>
    </div>
  );
}

export default CountDown;
