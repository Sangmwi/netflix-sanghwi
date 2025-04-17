import React from 'react'
import './NotFoundPage.style.css'  // 따로 작성한 컴포넌트 전용 CSS

const NotFoundPage = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-error">404</h1>
      <h2 className="notfound-message">페이지를 찾을 수 없습니다</h2>
      <p className="notfound-subtext">찾으시려는 콘텐츠가 존재하지 않거나 이동되었어요.</p>
      <a href="/" className="notfound-button">홈으로 돌아가기</a>
    </div>
  )
}

export default NotFoundPage
