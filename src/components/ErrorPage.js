import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ErrorPage.css';

const ErrorPage = ({ code = 404, message = 'Страница не найдена' }) => {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-code">{code}</h1>
        <h2 className="error-message">{message}</h2>
        <p className="error-description">
          {code === 404 
            ? 'Извините, страница, которую вы ищете, не существует.'
            : 'Произошла ошибка на сервере. Пожалуйста, попробуйте позже.'}
        </p>
        <button 
          className="error-button"
          onClick={() => navigate('/')}
        >
          Вернуться на главную
        </button>
      </div>
    </div>
  );
};

export default ErrorPage; 