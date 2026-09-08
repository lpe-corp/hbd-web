const giftButton = document.getElementById('giftButton');
const surpriseSection = document.getElementById('surpriseSection');
const birthdaySong = document.getElementById('birthdaySong');

function triggerConfettiBursts() {
  if (typeof window.confetti !== 'function') {
    return;
  }

  const burstColors = ['#f472b6', '#c084fc', '#60a5fa', '#f9a8d4', '#facc15', '#34d399'];

  window.confetti({
    particleCount: 120,
    spread: 90,
    startVelocity: 38,
    origin: { x: 0, y: 0.55 },
    angle: 60,
    colors: burstColors,
    zIndex: 50,
    scalar: 1.05,
  });

  window.confetti({
    particleCount: 120,
    spread: 90,
    startVelocity: 38,
    origin: { x: 1, y: 0.55 },
    angle: 120,
    colors: burstColors,
    zIndex: 50,
    scalar: 1.05,
  });
}

if (giftButton && surpriseSection) {
  giftButton.addEventListener('click', async () => {
    giftButton.classList.add('is-hidden');

    requestAnimationFrame(() => {
      surpriseSection.classList.add('is-visible');
      triggerConfettiBursts();
    });

    if (birthdaySong) {
      try {
        birthdaySong.currentTime = 0;
        await birthdaySong.play();
      } catch (error) {
        console.warn('Audio playback was blocked:', error);
      }
    }
  });
}
