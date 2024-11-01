import React, { useEffect, useState } from 'react';
import './App.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

function App() {
  const [user, setUser] = useState({ first_name: 'пользователь' });
  const [tg, setTg] = useState(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Проверяем, доступен ли window.Telegram
    if (window.Telegram && window.Telegram.WebApp) {
      const telegram = window.Telegram.WebApp;
      telegram.ready();
      setTg(telegram);
      setUser(telegram.initDataUnsafe.user);

      // Устанавливаем цвет фона в зависимости от темы Telegram
      document.body.style.backgroundColor = telegram.themeParams.bg_color || '#ffffff';
    } else {
      // Если window.Telegram недоступен, используем дефолтные значения
      setTg({
        sendData: (data) => console.log('Отправка данных боту:', data),
      });
      // Устанавливаем цвет фона по умолчанию
      document.body.style.backgroundColor = '#ffffff';
    }

    // Получаем данные для графика
    fetchChartData();
  }, []);

  const fetchChartData = () => {
    // Пример данных для графика
    const data = [
      { time: '10:00', price: 50000 },
      { time: '11:00', price: 50500 },
      { time: '12:00', price: 51000 },
      { time: '13:00', price: 50700 },
      { time: '14:00', price: 51500 },
    ];
    setChartData(data);
  };

  const sendOrderToBot = () => {
    const orderData = {
      action: 'place_order',
      symbol: 'BTCUSDT',
      entry_price: 50000,
      take_profit: 55000,
      stop_loss: 48000,
    };
    // Отправляем данные боту (или логируем в консоль)
    if (tg && tg.sendData) {
      tg.sendData(JSON.stringify(orderData));
    } else {
      console.log('Отправка данных боту:', orderData);
    }
  };

  return (
    <div className="app">
      <h1 className="title">Здравствуйте, {user.first_name}!</h1>
      <p className="description">
        Добро пожаловать в ваше торговое приложение. Вы можете просмотреть график и отправить торговый ордер вашему боту.
      </p>
      <div className="chart-container">
        <LineChart width={300} height={200} data={chartData}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="time" />
          <YAxis dataKey="price" />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#0088cc" />
        </LineChart>
      </div>
      <button className="btn" onClick={sendOrderToBot}>
        Отправить ордер боту
      </button>
    </div>
  );
}

export default App;
