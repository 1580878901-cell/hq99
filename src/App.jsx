import React from 'react'

export default function App() {
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

      <div
        style={{
          marginTop: '50px',
          padding: '20px 40px',
          borderRadius: '20px',
          background: '#71ff8f',
          color: '#000',
          fontWeight: 'bold',
          fontSize: '24px',
        }}
      >
        航琪同行
      </div>
    </div>
  )
}
