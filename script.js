// ===== UTILITIES =====
function formatNumber(n) {
    if (n >= 1e9) return (n / 1e9).toFixed(1).replace(/\.0$/, '') + 'B';
    if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
    if (n >= 1e3) return (n / 1e3).toFixed(1).replace(/\.0$/, '') + 'K';
    return n.toString();
}

function getProjectVideos(projectName) {
    return videos.filter(v => v.page === projectName);
}

// ===== VIDEO CARD =====
function createVideoCard(video) {
    const isHorizontal = video.orientation === 'horizontal';
    const isSquare = video.orientation === 'square';
    const roles = video.roles || [];
    const rolesHtml = roles.includes('Full Stack')
        ? '<span class="role-tag" data-role="Full Stack">Full Stack</span>'
        : roles.map(r => `<span class="role-tag" data-role="${r}">${r}</span>`).join('');

    const thumbStyle = video.thumbnailUrl
        ? `background-image: url('${video.thumbnailUrl}'); background-size: cover; background-position: center;`
        : 'background: #f0f0f0;';

    const titleHtml = video.title ? `<div class="video-title-text">${video.title}</div>` : '';
    const fourthClass = video.fourthCol ? ' fourth-col-only' : '';
    const cardClass = (isHorizontal ? ' horizontal span-2' : isSquare ? ' square' : '') + fourthClass;

    return `
        <article class="video-card${cardClass}">
            <a href="${video.originalUrl || '#'}" target="_blank" rel="noopener" class="video-thumb" style="${thumbStyle}" aria-label="Watch ${video.title || 'video'}">
                ${video.views > 0 ? `<span class="video-thumb-views">${formatNumber(video.views)}</span>` : ''}
            </a>
            <div class="video-info">
                ${titleHtml}
                <div class="video-meta">
                    ${video.platform ? `<span>${video.platform}</span>` : ''}
                </div>
                <div class="video-roles">${rolesHtml}</div>
            </div>
        </article>
    `;
}

// ===== FEATURED FILMS =====
function renderFeaturedFilms() {
    const container = document.getElementById('featured-films');
    const horizontalVideos = videos.filter(v => v.orientation === 'horizontal' && !v.inGrid)
        .sort((a, b) => b.views - a.views)
        .slice(0, 3);

    if (horizontalVideos.length === 0) {
        container.style.display = 'none';
        return;
    }

    const cardsHtml = horizontalVideos.map(v => {
        const thumbStyle = v.thumbnailUrl
            ? `background-image: url('${v.thumbnailUrl}'); background-size: cover; background-position: center;`
            : 'background: #f0f0f0;';
        const roles = v.roles || [];
        const rolesHtml = roles.includes('Full Stack')
            ? '<span class="role-tag" data-role="Full Stack">Full Stack</span>'
            : roles.map(r => `<span class="role-tag" data-role="${r}">${r}</span>`).join('');

        return `
            <article class="featured-film-card">
                <a href="${v.originalUrl || '#'}" target="_blank" rel="noopener" class="featured-film-thumb" style="${thumbStyle}" aria-label="Watch ${v.title}"></a>
                <div class="video-info">
                    <div class="video-title-text">${v.title}</div>
                    <div class="video-meta">
                        <span>${v.platform}</span>
                        <span class="video-meta-divider">·</span>
                        ${v.views > 0 ? `<span>${formatNumber(v.views)} views</span><span class="video-meta-divider">·</span>` : ''}
                        <span>${v.page}</span>
                    </div>
                    <div class="video-roles">${rolesHtml}</div>
                </div>
            </article>
        `;
    }).join('');

    container.innerHTML = `
        <div class="project-header">
            <div class="project-header-left">
                <h3 class="project-name">Long Form<span class="project-views-badge">410K views</span></h3>
                <span class="project-meta">3 videos</span>
            </div>
        </div>
        <div class="featured-films-grid">${cardsHtml}</div>
    `;
}

// ===== HOME =====
function buildProjectBlock(project) {
    const allGridVideos = getProjectVideos(project.name)
        .filter(v => v.orientation !== 'horizontal' || v.inGrid);

    const allProjectVideos = getProjectVideos(project.name);
    const totalViews = project.totalViews || allProjectVideos.reduce((s, v) => s + v.views, 0);
    const videoCount = project.totalVideos || allProjectVideos.length;

    if (allGridVideos.length === 0) return null;

    const cardsHtml = [...allGridVideos]
        .sort((a, b) => b.views - a.views)
        .map(v => createVideoCard(v)).join('');

    const metaParts = [
        `${videoCount} videos`,
        `${formatNumber(totalViews)} views`,
        project.dateRange || ''
    ].filter(Boolean).join(' · ');

    const block = document.createElement('div');
    block.className = 'project-block';
    block.innerHTML = `
        <div class="project-header">
            <div class="project-header-left">
                <h3 class="project-name">${project.name}<span class="project-views-badge">${formatNumber(totalViews)} views</span></h3>
                <span class="project-meta">${metaParts}</span>
            </div>
            <a href="${project.socialUrl || '#'}" target="_blank" rel="noopener" class="project-view-all">
                ${project.profilePic ? `<img src="${project.profilePic}" class="project-profile-pic" alt="${project.name}">` : ''}
                <span class="project-view-arrow">→</span>
            </a>
        </div>
        <div class="project-videos-row">${cardsHtml}</div>
    `;
    return { block, totalViews, endDate: project.endDate || '2000-01-01' };
}

function renderHome() {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = '';

    const blocks = projects.map(p => buildProjectBlock(p)).filter(Boolean);
    blocks.sort((a, b) => new Date(b.endDate) - new Date(a.endDate));
    blocks.forEach(({ block }) => grid.appendChild(block));

    renderFeaturedFilms();
}

// ===== COUNT UP ANIMATION =====
function animateCountUps() {
    document.querySelectorAll('.count-up').forEach(el => {
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const duration = 700;

        el.textContent = target + suffix;
        const width = el.offsetWidth;
        el.style.display = 'inline-block';
        el.style.minWidth = width + 'px';
        el.textContent = '0' + suffix;

        const start = performance.now();
        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);
            el.textContent = current + suffix;
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    });
}

// ===== HERO TABS =====
function initHeroTabs() {
    const tabs = document.querySelectorAll('.hero-tab');
    const hero = document.querySelector('.hero');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            const wasActive = tab.classList.contains('active');

            tabs.forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');

            if (wasActive) return;

            tab.classList.add('active');
            const content = document.getElementById('tab-' + tabName);
            if (content) content.style.display = 'block';
        });
    });
}

// ===== MODE TOGGLE =====
function initModeToggle() {
    const toggle = document.getElementById('mode-toggle');
    const thumb = document.getElementById('toggle-thumb');
    const icon = document.getElementById('toggle-icon');
    let extreme = false;

    const circleIcon = '<circle cx="12" cy="12" r="5" fill="currentColor"/>';
    const sunIcon = '<circle cx="12" cy="12" r="5" fill="currentColor"/>' +
        '<line x1="12" y1="1" x2="12" y2="4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>' +
        '<line x1="12" y1="20" x2="12" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>' +
        '<line x1="4.22" y1="4.22" x2="6.34" y2="6.34" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>' +
        '<line x1="17.66" y1="17.66" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>' +
        '<line x1="1" y1="12" x2="4" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>' +
        '<line x1="20" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>' +
        '<line x1="4.22" y1="19.78" x2="6.34" y2="17.66" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>' +
        '<line x1="17.66" y1="6.34" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>';

    toggle.addEventListener('click', () => {
        extreme = !extreme;
        thumb.classList.toggle('active', extreme);
        icon.innerHTML = extreme ? sunIcon : circleIcon;

        if (extreme) {
            document.body.classList.add('extremely-light');
        } else {
            document.body.classList.remove('extremely-light');
        }
    });
}

// ===== INIT =====
renderHome();
animateCountUps();
initHeroTabs();
initModeToggle();
