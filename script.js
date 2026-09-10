const modal = document.getElementById('videoModal');
const frame = document.getElementById('videoFrame');
const title = document.getElementById('modalTitle');
const driveLink = document.getElementById('driveLink');

function openProject(card) {
  const id = card.dataset.video;
  title.textContent = card.dataset.title;
  driveLink.href = card.dataset.drive;
  frame.src = `https://drive.google.com/file/d/${id}/preview`;
  modal.showModal();
}

document.querySelectorAll('.project-card .poster').forEach(btn => {
  btn.addEventListener('click', () => openProject(btn.closest('.project-card')));
});

function closeModal() {
  frame.src = '';
  modal.close();
}

document.querySelector('.modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.open) closeModal();
});

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.work-grid .project-card');
filters.forEach(filter => {
  filter.addEventListener('click', () => {
    filters.forEach(f => f.classList.remove('active'));
    filter.classList.add('active');
    const value = filter.dataset.filter;
    cards.forEach(card => card.classList.toggle('hidden', value !== 'all' && card.dataset.category !== value));
  });
});
