document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('.project-image').forEach((img) => { img.addEventListener('error', () => img.remove()); });
document.querySelectorAll('.avatar img, .resume-avatar img').forEach((img) => {
    img.addEventListener('error', () => img.remove());
});

document.querySelectorAll('.avatar img, .resume-avatar img').forEach((img) => {
    if (img.complete && img.naturalWidth === 0) img.remove();
});
