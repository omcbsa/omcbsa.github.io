// Lightweight client-side handling: preview a main video and append experiment videos to grids.
// No server upload functionality included — files remain in-browser as previews.
// When ready to publish, add your video files under /assets in the repo and replace previews with permanent URLs.

function createVideoCard(file, url) {
  const card = document.createElement('figure');
  card.className = 'card';

  const v = document.createElement('video');
  v.controls = true;
  v.playsInline = true;
  v.src = url || URL.createObjectURL(file);
  v.setAttribute('title', file.name);

  const meta = document.createElement('figcaption');
  meta.className = 'meta';
  const name = document.createElement('div');
  name.textContent = file.name;
  const size = document.createElement('div');
  size.textContent = (file.size / 1024 / 1024).toFixed(1) + ' MB';

  meta.appendChild(name);
  meta.appendChild(size);

  card.appendChild(v);
  card.appendChild(meta);

  return card;
}

function handleFiles(files, container) {
  Array.from(files).forEach(file => {
    if (!file.type.startsWith('video/')) return;
    const card = createVideoCard(file);
    container.prepend(card);
  });
}

// Main video area
const mainUpload = document.getElementById('main-upload');
const mainPreview = document.getElementById('main-preview');
const mainDrop = document.getElementById('main-drop');

mainUpload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  if (!file.type.startsWith('video/')) return alert('Please upload a video file.');
  mainPreview.src = URL.createObjectURL(file);
  mainPreview.poster = '';
  mainPreview.scrollIntoView({behavior:'smooth', block:'center'});
});

['dragenter','dragover'].forEach(ev => {
  mainDrop.addEventListener(ev, (e) => {
    e.preventDefault(); mainDrop.classList.add('dragover');
  });
});
['dragleave','drop'].forEach(ev => {
  mainDrop.addEventListener(ev, (e) => {
    e.preventDefault(); mainDrop.classList.remove('dragover');
  });
});
mainDrop.addEventListener('drop', (e) => {
  const f = e.dataTransfer.files[0];
  if (f && f.type && f.type.startsWith('video/')) {
    mainPreview.src = URL.createObjectURL(f);
  }
});

// Experiments
const physInput = document.getElementById('phys-upload');
const simInput = document.getElementById('sim-upload');
const physGrid = document.getElementById('phys-grid');
const simGrid = document.getElementById('sim-grid');

physInput.addEventListener('change', (e) => handleFiles(e.target.files, physGrid));
simInput.addEventListener('change', (e) => handleFiles(e.target.files, simGrid));

// Make the "Add" labels clickable by wrapping the input (native behavior suffices)

// Small accessibility: focus outline for keyboard users
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') document.body.classList.add('show-focus');
});
