import { SsgoiTransition } from "@ssgoi/react";

function HomePage() {
  return (
    <SsgoiTransition id="home-page">
      <div className="card highlight">
        <h2>잔액</h2>
        <p className="balance">₩ 1,250,000</p>
        <button className="btn">송금하기</button>
      </div>
    </SsgoiTransition>
  );
}

export default HomePage;