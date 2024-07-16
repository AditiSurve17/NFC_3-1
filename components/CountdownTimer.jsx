import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-container" style={styles.container}>
      {Object.keys(timeLeft).length > 0 ? (
        <>
          <div style={styles.timeUnit}>
            <span style={styles.number}>{timeLeft.days}</span>
            <span style={styles.label}>Days</span>
          </div>
          <div style={styles.timeUnit}>
            <span style={styles.number}>{timeLeft.hours}</span>
            <span style={styles.label}>Hours</span>
          </div>
          <div style={styles.timeUnit}>
            <span style={styles.number}>{timeLeft.minutes}</span>
            <span style={styles.label}>Minutes</span>
          </div>
          <div style={styles.timeUnit}>
            <span style={styles.number}>{timeLeft.seconds}</span>
            <span style={styles.label}>Seconds</span>
          </div>
        </>
      ) : (
        <p>Time's up!</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Pirata One', cursive", // Applying 'Pirata One' font here
    fontSize: '1.5rem',
    padding: '20px',
    color: '#fff',
  },
  timeUnit: {
    margin: '0 10px',
    textAlign: 'center',
  },
  number: {
    fontSize: '4rem',
    display: 'block',
  },
  label: {
    fontSize: '1.5rem',
  },
};

export default CountdownTimer;
