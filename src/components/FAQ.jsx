import React from 'react';
import './FAQ.css'; // Стили страницы FAQ

function FAQ() {
  return (
    <div className="faq">
      <h1>FAQ</h1>
      <div className="faq-item">
        <h3>Как получить доступ к приложению?</h3>
        <p>Необходимо приобрести подписку в боте.</p>
      </div>
      <div className="faq-item">
        <h3>Как часто обновляются данные?</h3>
        <p>Данные обновляются ежедневно.</p>
      </div>
      {/* Добавь другие вопросы и ответы */}
    </div>
  );
}

export default FAQ;
