import React from 'react';
import './Subscription.css'; // Стили страницы Подписка

function Subscription() {
  return (
    <div className="subscription">
      <h1>Покупка подписки</h1>
      <p>Выберите подходящий тариф и получите доступ к полному функционалу приложения.</p>
      <div className="plans">
        <div className="plan">
          <h3>1 месяц</h3>
          <p>70 USDT</p>
          <button>Купить</button>
        </div>
        <div className="plan">
          <h3>3 месяца</h3>
          <p>150 USDT</p>
          <button>Купить</button>
        </div>
        <div className="plan">
          <h3>6 месяцев</h3>
          <p>280 USDT</p>
          <button>Купить</button>
        </div>
        <div className="plan">
          <h3>1 год</h3>
          <p>600 USDT</p>
          <button>Купить</button>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
