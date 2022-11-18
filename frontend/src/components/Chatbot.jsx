import React from 'react'
import {Helmet} from 'react-helmet'

function Chatbot() {
  return (

    <div class="container">
      <div class="chatbox">
        <div class="chatbox__support">
              <div class="chatbox__header">
                  <div class="chatbox__image--header">
                      <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt="logo" />
                  </div>
                  <div class="chatbox__content--header">
                      <h4 class="chatbox__heading--header">Chat support</h4>
                      <p class="chatbox__description--header">Hi. My name is DRT House. How can I help you?</p>
                  </div>
              </div>
              <div class="chatbox__messages">
                  <div>
                      <input type="button" value="What is DRT House?" class="btn" />
                      <input type="button" value="Where are you located?" class="btn" />
                      <input type="button" value="How can I reserve?" class="btn" />
                      <input type="button" value="How much?" class="btn" />
                  </div>
              </div>
              <div class="chatbox__footer">
                  <input type="text" placeholder="Write a message..." class="message" />
                  <button class="chatbox__send--footer send__button">Send</button>
              </div>
        </div>
          <div class="chatbox__button">
              <button><img src="\static\images\chatbox-icon.svg" alt='chatbox-icon'/></button>
          </div>
      </div>
        <Helmet>
            <script src="/static/app.js" type="text/javascript" />
        </Helmet>
    </div>

  )
}

export default Chatbot