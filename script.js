const platformFilter = document.getElementById('platform-filter');
const sortFilter = document.getElementById('sort-filter');
const searchInput = document.getElementById('search-input');
const sectionsContainer = document.getElementById('video-sections');
const statNumbers = document.querySelectorAll('.stat-number');

const state = {
    platform: 'all',
    sort: 'views',
    search: ''
};

function formatViews(count) {
    if (count < 1000) return `${count}`;

    const units = [
        { value: 1e9, label: 'B' },
        { value: 1e6, label: 'M' },
        { value: 1e3, label: 'K' }
    ];

    const unit = units.find((item) => count >= item.value);
    const raw = count / unit.value;
    const rounded = raw >= 10 ? Math.round(raw) : Math.round(raw * 10) / 10;
    const text = rounded % 1 === 0 ? rounded.toFixed(0) : rounded.toFixed(1);

    return `${text}${unit.label}`;
}

function normalize(value) {
    return (value || '').toString().toLowerCase();
}

function matchesSearch(video, query) {
    if (!query) return true;
    const haystack = [
        video.title,
        video.page,
        video.platform,
        ...(video.tags || [])
    ]
        .map(normalize)
        .join(' ');

    return haystack.includes(query);
}

function sortVideos(list, sortBy) {
    const sorted = [...list];

    if (sortBy === 'views') {
        sorted.sort((a, b) => b.views - a.views);
    } else if (sortBy === 'date') {
        sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else {
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    return sorted;
}

function groupByPage(list) {
    const map = new Map();

    list.forEach((video) => {
        const key = video.page || 'Other';
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(video);
    });

    return map;
}

function createOverlayStat(icon, value) {
    const stat = document.createElement('div');
    stat.className = 'overlay-stat';

    const iconNode = document.createElement('span');
    iconNode.className = 'overlay-icon';
    iconNode.textContent = icon;
    iconNode.setAttribute('aria-hidden', 'true');

    const valueNode = document.createElement('span');
    valueNode.className = 'overlay-value';
    valueNode.textContent = formatViews(value);

    stat.appendChild(iconNode);
    stat.appendChild(valueNode);

    return stat;
}

function createVideoCard(video) {
    const card = document.createElement('article');
    const isHorizontal = video.orientation === 'horizontal';
    card.className = isHorizontal ? 'video-card horizontal' : 'video-card';

    const thumb = document.createElement('a');
    thumb.className = 'video-thumb';
    thumb.href = video.originalUrl || '#';
    thumb.target = '_blank';
    thumb.rel = 'noopener';
    thumb.setAttribute('aria-label', `Open ${video.title} on ${video.platform}`);

    if (video.thumbnailUrl) {
        thumb.style.backgroundImage = `url('${video.thumbnailUrl}')`;
    }

    if (!isHorizontal) {
        const overlay = document.createElement('div');
        overlay.className = 'video-overlay';

        const stats = document.createElement('div');
        stats.className = 'video-overlay-stats';

        stats.appendChild(createOverlayStat('♥', video.likes ?? 0));
        stats.appendChild(createOverlayStat('▶', video.views ?? 0));

        overlay.appendChild(stats);
        thumb.appendChild(overlay);
    }

    const title = document.createElement('div');
    title.className = 'video-title';
    title.textContent = video.title;

    const views = document.createElement('div');
    views.className = 'video-views';
    views.textContent = `${formatViews(video.views)} Views`;

    card.appendChild(thumb);
    card.appendChild(title);
    card.appendChild(views);

    return card;
}

function renderSections() {
    const query = normalize(state.search.trim());
    const filtered = videos.filter((video) => {
        const matchesPlatform =
            state.platform === 'all' || normalize(video.platform) === state.platform;

        return matchesPlatform && matchesSearch(video, query);
    });

    const sorted = sortVideos(filtered, state.sort);
    const grouped = groupByPage(sorted);

    sectionsContainer.innerHTML = '';

    if (sorted.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'empty-state';
        empty.textContent = 'No videos match your filters.';
        sectionsContainer.appendChild(empty);
        return;
    }

    grouped.forEach((items, page) => {
        const section = document.createElement('section');
        section.className = 'video-section';

        const title = document.createElement('h2');
        title.className = 'section-title';
        title.textContent = page;

        const grid = document.createElement('div');
        grid.className = 'section-grid';

        items.forEach((video) => {
            grid.appendChild(createVideoCard(video));
        });

        section.appendChild(title);
        section.appendChild(grid);
        sectionsContainer.appendChild(section);
    });
}

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

function animateStats() {
    if (!statNumbers.length) return;
    const duration = 2000;

    statNumbers.forEach((node) => {
        const target = Number(node.dataset.target || 0);
        if (!Number.isFinite(target)) return;

        const start = performance.now();
        node.textContent = '0+';

        const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = easeOutCubic(progress);
            const value = Math.round(target * eased);
            node.textContent = `${formatViews(value)}+`;

            if (progress < 1) {
                requestAnimationFrame(tick);
            }
        };

        requestAnimationFrame(tick);
    });
}

function updateState() {
    state.platform = platformFilter.value;
    state.sort = sortFilter.value;
    state.search = searchInput.value;
    renderSections();
}

platformFilter.addEventListener('change', updateState);
sortFilter.addEventListener('change', updateState);
searchInput.addEventListener('input', updateState);

renderSections();
animateStats();
