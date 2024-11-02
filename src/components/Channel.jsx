import React from 'react';
import './Channel.css'; // Стили страницы Канал

function Channel() {
  return (
    <div className="channel">
      <h1>Официальный канал</h1>
      <p>
        Присоединяйтесь к нашему каналу, чтобы быть в курсе последних новостей:
        <a href="https://t.me/cryptocatagency" target="_blank" rel="noopener noreferrer">
          @cryptocatagency
        </a>
      </p>
    </div>
  );
}

export default Channel;
