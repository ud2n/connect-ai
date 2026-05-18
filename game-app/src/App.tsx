import React, { useState, useEffect } from 'react';

// 게임의 핵심 상태 정의 (초기값)
interface GameState {
  coins: number; // 인게임 재화
  score: number; // 점수
  lastLoginDate: string; // 광고 제거/보상 관련 데이터 예시
}

const initialGameState: GameState = {
  coins: 100,
  score: 0,
  lastLoginDate: new Date().toISOString().split('T')[0],
};

function App() {
  // useState를 사용하여 상태 관리
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  // 게임 로직 예시 (실제로는 백엔드와 연동될 부분)
  useEffect(() => {
    // 타이머 또는 데이터 로딩 로직을 여기에 추가할 수 있습니다.
    console.log("Game State Loaded:", gameState);
  }, [gameState]);


  const handleCoinClick = () => {
    setGameState(prevState => ({
      ...prevState,
      score: prevState.score + 1,
    }));
  };

  // UI 컴포넌트 렌더링
  return (
    <div style={styles.container}>
      <h1>💰 Idle Pixel Game</h1>
      
      {/* 재화 표시 */}
      <div style={styles.stats}>
        <h2>Coins: {gameState.coins}</h2>
        <h2>Score: {gameState.score}</h2>
      </div>

      {/* 게임 플레이 영역 (클릭 예시) */}
      <button onClick={handleCoinClick} style={styles.button}>
        Click to Earn Coin!
      </button>

      {/* 광고/보상 관련 정보 표시 영역 */}
      <div style={styles.info}>
        <p>Last Bonus Claimed: {gameState.lastLoginDate}</p>
        {/* 여기에 추후 광고 제거 관련 버튼이 추가될 예정입니다. */}
      </div>
    </div>
  );
}

// 간단한 스타일 정의 (실제 프로젝트에서는 CSS 파일로 분리 권장)
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f8ff', // 연한 하늘색 배경
    minHeight: '100vh'
  },
  stats: {
    margin: '20px 0',
    padding: '15px',
    border: '2px solid #4682b4', // 스틸 블루 테두리
    borderRadius: '10px',
    backgroundColor: '#ffffff'
  },
  button: {
    padding: '15px 30px',
    fontSize: '1.2em',
    cursor: 'pointer',
    backgroundColor: '#4CAF50', // 녹색 버튼
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  info: {
    marginTop: '30px',
    padding: '10px',
    border: '1px dashed #aaa'
  }
};

export default App;