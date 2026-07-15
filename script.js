const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});

async function renderResearchPosts() {
  const targets = document.querySelectorAll('[data-research-posts]');
  if (!targets.length) return;
  try {
    const response = await fetch('data/research-posts.json');
    if (!response.ok) throw new Error('Research data could not be loaded.');
    const posts = await response.json();

    targets.forEach(target => {
      const lab = target.dataset.lab;
      const visiblePosts = lab ? posts.filter(post => post.lab === lab) : posts;
      if (!visiblePosts.length) {
        target.innerHTML = `<div class="empty-state"><span class="eyebrow">Growing collection</span><h3>More project stories are coming soon.</h3><p>This page is ready for future research posts. Add a new entry to <code>data/research-posts.json</code> and assign it the lab value <strong>${lab || 'appropriate lab'}</strong>.</p></div>`;
        return;
      }
      target.innerHTML = visiblePosts.map(post => `
        <article class="research-card">
          <div class="research-card-image"><img src="${post.image}" alt="${post.imageAlt}"></div>
          <div class="research-card-body">
            <span class="eyebrow">${post.category}</span>
            <h2>${post.title}</h2>
            <p>${post.summary}</p>
            <div class="meta">${post.tags.map(tag => `<span class="tag tag-light">${tag}</span>`).join('')}</div>
            <a class="text-link" href="${post.link}">Learn more <span aria-hidden="true">→</span></a>
          </div>
        </article>
      `).join('');
    });
  } catch (error) {
    targets.forEach(target => {
      target.innerHTML = '<div class="empty-state"><h3>Research posts could not be loaded.</h3><p>Use Live Server in Visual Studio Code or publish the site through a web host. Browsers may block JSON files when HTML is opened directly from a folder.</p></div>';
    });
  }
}
renderResearchPosts();
