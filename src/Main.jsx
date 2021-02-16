import React from 'react';
import { NavLink } from 'react-router-dom';

import boto from './BotoCoin.png';

export default function Main() {
  return (
    <div className="main">
      <div className="child">
        <div className="title">
          <img className="logo" src={boto} alt="boto" />
          <h1>BOTO Coin</h1>
          <p>The Brazilian Token designed to save the Amazonia</p>
          <br />
          <a className="mr-5" href="https://t.me/BOTOCoin" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-telegram"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#9E9E9E"
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
              stroke="#9E9E9E"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z"></path>
            </svg>
          </a>
        </div>

        <div className="section">
          <div>
            <h3>Tokenomics:</h3>
            <ul>
              <li>1,000,000 Max supply</li>
              <li>All supply added to liquidity</li>
              <li>No team tokens</li>
              <li>Fair launch</li>
            </ul>
          </div>
          <div>
            <h3>Rules:</h3>
            <ul>
              <li>1% burn every swap</li>
              <li>1% distributed to holders every swap</li>
              <li>Use at least 2.5% slippage when swap</li>
            </ul>
          </div>
          <div>
            <h3>Proofs:</h3>
            <ul>
              <a
                href="https://tronscan.io/#/token20/TZ6Nrrphj1VPXEet3wRcGFdbJh2mRenJPr"
                target="_blank"
              >
                <li>Contract Address</li>
              </a>

            </ul>
          </div>
        </div>

        
      </div>
    </div>
  );
}
