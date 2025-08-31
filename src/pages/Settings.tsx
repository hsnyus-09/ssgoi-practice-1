import { SsgoiTransition } from "@ssgoi/react";

function SettingsPage() {
  return (
    <SsgoiTransition id="settings-page">
      <div className="card">
        <h2>설정</h2>
        <ul>
          <li>알림 설정</li>
          <li>보안 설정</li>
          <li>버전 정보</li>
        </ul>
      </div>
    </SsgoiTransition>
  );
}

export default SettingsPage;