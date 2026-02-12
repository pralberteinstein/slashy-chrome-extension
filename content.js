if (!window.slashyPopupShown) {
  window.slashyPopupShown = true;

  // Create overlay backdrop
  const overlay = document.createElement('div');
  overlay.id = 'slashy-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999998;
    backdrop-filter: blur(4px);
  `;

  // Create popup modal
  const popup = document.createElement('div');
  popup.innerHTML = `
    <div id="slashy-popup" style="
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #ffffff;
      border-radius: 16px;
      padding: 40px 32px;
      text-align: center;
      z-index: 999999;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      width: 400px;
      max-width: 90vw;
      overflow: hidden;
    ">
      <div style="
        width: 56px;
        height: 56px;
        margin: 0 auto 16px;
      ">
        <img src="${chrome.runtime.getURL('icons/icon128.png')}" alt="Slashy" style="
          width: 100%;
          height: 100%;
          object-fit: contain;
        ">
      </div>
      
      <h3 style="
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 32px;
        color: #1a1a1a;
        letter-spacing: -0.3px;
        line-height: 1.4;
      ">Did you mean to open Slashy?</h3>
      
      <div style="
        display: flex;
        flex-direction: column;
        gap: 12px;
      ">
        <button id="yesButton" style="
          background: linear-gradient(135deg, #667eea 0%, #17c3b2 100%);
          color: #ffffff;
          border: none;
          border-radius: 8px;
          padding: 12px 20px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s ease;
          font-family: inherit;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08);
        ">Yes</button>
        <button id="noButton" style="
          background: #f3f4f6;
          color: #4b5563;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 12px 20px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s ease;
          font-family: inherit;
        ">No</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.appendChild(popup);

  const yesBtn = popup.querySelector('#yesButton');
  const noBtn = popup.querySelector('#noButton');

  // Primary button hover effects
  yesBtn.addEventListener('mouseenter', () => {
    yesBtn.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)';
    yesBtn.style.transform = 'translateY(-1px)';
  });
  yesBtn.addEventListener('mouseleave', () => {
    yesBtn.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08)';
    yesBtn.style.transform = 'translateY(0)';
  });

  // Secondary button hover effects
  noBtn.addEventListener('mouseenter', () => {
    noBtn.style.background = '#e5e7eb';
    noBtn.style.borderColor = '#d1d5db';
  });
  noBtn.addEventListener('mouseleave', () => {
    noBtn.style.background = '#f3f4f6';
    noBtn.style.borderColor = '#e5e7eb';
  });

  yesBtn.addEventListener('click', () => {
    window.location.href = "https://slashy.com";
  });

  noBtn.addEventListener('click', () => {
    popup.remove();
    overlay.remove();
  });

  // Close on overlay click
  overlay.addEventListener('click', () => {
    popup.remove();
    overlay.remove();
  });
}
