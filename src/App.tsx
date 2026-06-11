function App() {
  return (
  <>
      <section className="feature-grid" aria-label="학습 영역 바로가기">
        <a className="feature-card" href="practice.html#hiragana">
          <p className="feature-label">기초 문자</p>
          <h2 className="feature-title">히라가나</h2>
          <p className="feature-desc">가장 기본이 되는 46자를 차근차근 연습합니다.</p>
        </a>
        <a className="feature-card" href="practice.html#katakana">
          <p className="feature-label">기초 문자</p>
          <h2 className="feature-title">가타카나</h2>
          <p className="feature-desc">실전 단어에서 자주 만나는 표기를 익힙니다.</p>
        </a>
        </section>
      </>
      )
}
      export default App;