import React, { useEffect, useState } from 'react'

export default function App() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 48,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const target = Date.now() + 48 * 60 * 60 * 1000

    const timer = setInterval(() => {
      const difference = target - Date.now()

      if (difference <= 0) {
        clearInterval(timer)
        return
      }

      setTimeLeft({
        hours: Math.floor((difference / (1000 * 60 * 60)) % 48),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(180deg, #0d1411 0%, #1b2a24 50%, #313734 100%)',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h1
        style={{
          fontSize: '60px',
          color: '#71ff8f',
          marginBottom: '20px',
          fontWeight: '900',
        }}
      >
        航遇佳期
      </h1>

      <h2
        style={{
          fontSize: '40px',
          color: '#d1d5db',
          marginBottom: '40px',
        }}
      >
        岁岁相依
      </h2>

      <div
        style={{
          display: 'flex',
          gap: '20px',
          marginBottom: '40px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <TimeBox label="小时" value={timeLeft.hours} />
        <TimeBox label="分钟" value={timeLeft.minutes} />
        <TimeBox label="秒钟" value={timeLeft.seconds} />
      </div>

      <p
        style={{
          fontSize: '22px',
          maxWidth: '700px',
          lineHeight: '1.8',
          color: '#d1d5db',
        }}
      >
        从这一刻开始，开启 48 小时不间断守护。
        <br />
        为热爱发声，为陪伴坚定。
      </p>
    </div>
  )
}

function TimeBox({ label, value }) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.08)',
        padding: '30px',
        borderRadius: '20px',
        minWidth: '120px',
      }}
    >
      <div
        style={{
          fontSize: '48px',
          color: '#71ff8f',
          fontWeight: '900',
        }}
      >
        {String(value).padStart(2, '0')}
      </div>

      <div
        style={{
          marginTop: '10px',
          color: '#d1d5db',
        }}
      >
        {label}
      </div>
    </div>
  )
}
