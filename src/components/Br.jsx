import React from 'react';
import {Link} from 'react-router-dom';
import boto from '../BotoCoin.png';
import ukflag from '../uk.png';

export default function Br() {
  return (
    <div className="main">
      <div className="section">
            <Link to="/"><img className="flag" src={ukflag} alt="English" /></Link>
         </div>
      <div className="child">
        <div className="title">
          <img className="logo" src={boto} alt="boto" />
          <h1>BOTO Coin</h1>
          <br />
          <p>O token brasileiro criado para arrecadar fundos para ajudar a Amazônia.</p>
          <br />
          <a className="mr-5" href="https://t.me/BOTOCoin" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-telegram"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#a701a8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
            </svg>
          </a>

          <a
            className="mr-5"
            href="https://twitter.com/coinboto"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-twitter"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#a701a8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z"></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/boto.digital"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-instagram"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#a701a8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <circle cx="12" cy="12" r="3" />
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>
          </a>
        </div>
        <div className="section">
          <div>
            <h3>Informações do Token:</h3>
            <ul>
              <li>1,000,000 Máximo de Tokens</li>
              <li>30% reservado para os fundos da Amazônia</li>
              <li>Sem Time de Tokens</li>
              <li>Lançamento justo</li>
            </ul>
          </div>
          <div>
            <h3>Regras:</h3>
            <ul>
              <li>1% queima a cada troca</li>
              <li>1% distribuído aos titulares a cada troca</li>
            </ul>
          </div>
          <div>
            <h3>Provas:</h3>
            <ul>
              <a
                href="https://boto.digital/whitepaper.pdf"
                target="_blank"
              >
                <li>Whitepaper</li>
              </a>
              <a
                href="https://tronscan.io/#/token20/TZ6Nrrphj1VPXEet3wRcGFdbJh2mRenJPr"
                target="_blank"
              >
                <li>Endereço do Contrato</li>
              </a>
              <a
                href="https://tronscan.io/#/address/TPPqnaUU2jyhrKQxCEo8tmHXf5vk5VaHg1"
                target="_blank"
              >
                <li>Endereço dos Fundos da Amazônia</li>
              </a>
              
            </ul>
          </div>
        </div>      
      </div>
    </div>
  );
}
