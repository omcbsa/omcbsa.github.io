// Minimal behaviors for the static asset-based site.
// Ensures video elements have sensible defaults and a small accessibility aid.

// Set preload and playsInline for all videos (in case the HTML author misses it)
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('video').forEach(v => {
    if (!v.getAttribute('preload')) v.preload = 'metadata';
    v.playsInline = true;
  });
});

// Small accessibility: show focus outlines for keyboard users
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') document.body.classList.add('show-focus');
});
