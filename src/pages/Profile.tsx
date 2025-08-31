import { SsgoiTransition } from "@ssgoi/react";

function ProfilePage() {
  return (
    <SsgoiTransition id="profile-page">
      <div className="card">
        <h2>프로필</h2>
        <p>사용자: 홍길동</p>
        <p>이메일: user@example.com</p>
      </div>
    </SsgoiTransition>
  );
}

export default ProfilePage;