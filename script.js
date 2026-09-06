/* =========================================================
   REALTY BAZAAR — LUXURY ARCHITECTURAL INTERACTION ENGINE
========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. PROPERTIES REPOSITORY ---
  const initialProperties = [
    {
      id: 'prop-1',
      title: 'The Grand Palm Villa',
      locationName: '1044 Coldwater Canyon, Beverly Hills, CA',
      cityKey: 'beverly-hills',
      category: 'villa',
      price: 2450000,
      sqft: 3450,
      beds: 4,
      baths: 3.5,
      mapX: 28,
      mapY: 42,
      image: './assets/Image (1).png',
      gallery: ['./assets/Image (1).png', './assets/Image.png'],
      broker: {
        name: 'Julian Montgomery',
        role: 'Managing Principal • West Coast',
        avatar: './assets/Mask group.png'
      },
      tag: 'Trophy Estate',
      featured: true,
      description: 'An architectural tour-de-force nestled in Coldwater Canyon featuring seamless indoor-outdoor living, zero-edge reflection pool, private screening pavilion, and bespoke Italian travertine finishes throughout.',
      amenities: ['Zero-Edge Pool', 'Wine Cellar', 'Smart Automation', 'Private Security Gate', 'Chef Kitchen', '3-Car Motor Court'],
      floorplan: {
        levels: 2,
        rooms: [
          { name: 'Grand Salon & Atrium', dim: '32 x 22 ft' },
          { name: 'Primary Suite Sanctuary', dim: '24 x 18 ft' },
          { name: 'Gourmet Culinary Wing', dim: '18 x 16 ft' },
          { name: 'Subterranean Wine Vault', dim: '14 x 12 ft' },
          { name: 'Guest Pavilion', dim: '16 x 14 ft' },
          { name: 'Wellness Spa & Sauna', dim: '15 x 12 ft' }
        ]
      }
    },
    {
      id: 'prop-2',
      title: 'Azure Coast Residence',
      locationName: '440 Ocean Drive, Miami Beach, FL',
      cityKey: 'miami',
      category: 'waterfront',
      price: 1890000,
      sqft: 2800,
      beds: 3,
      baths: 2.5,
      mapX: 74,
      mapY: 68,
      image: './assets/Image (2).png',
      gallery: ['./assets/Image (2).png', './assets/Image (5).png'],
      broker: {
        name: 'Elena Vance',
        role: 'Head of Coastal & Waterfront',
        avatar: './assets/Mask group (1).png'
      },
      tag: 'Oceanfront',
      featured: false,
      description: 'Unobstructed Atlantic panoramas with floor-to-ceiling acoustic glass, expansive wraparound teak terrace, private yacht slip access, and spa-inspired master sanctuary.',
      amenities: ['Private Beach / Waterfront', 'Zero-Edge Pool', 'Private Elevator', 'Concierge 24/7', 'Valet Parking', 'Smart Automation'],
      floorplan: {
        levels: 1,
        rooms: [
          { name: 'Oceanview Great Room', dim: '28 x 20 ft' },
          { name: 'Oceanfront Master Suite', dim: '20 x 16 ft' },
          { name: 'Custom Italian Kitchen', dim: '16 x 14 ft' },
          { name: 'Wraparound Teak Lanai', dim: '40 x 10 ft' },
          { name: 'Guest Retreat 1', dim: '14 x 13 ft' },
          { name: 'Guest Retreat 2', dim: '13 x 12 ft' }
        ]
      }
    },
    {
      id: 'prop-3',
      title: 'Skyline Vista Penthouse',
      locationName: '520 Park Avenue, Manhattan, NY',
      cityKey: 'manhattan',
      category: 'penthouse',
      price: 4200000,
      sqft: 4100,
      beds: 5,
      baths: 4.5,
      mapX: 62,
      mapY: 25,
      image: './assets/Image (3).png',
      gallery: ['./assets/Image (3).png', './assets/Image (1).png'],
      broker: {
        name: 'Alexander Sterling',
        role: 'Managing Director • Manhattan',
        avatar: './assets/Mask group (2).png'
      },
      tag: 'Skyline Icon',
      featured: true,
      description: 'Double-height ceilings framing 360-degree skyline views of Central Park and the East River. Equipped with key-locked private elevator access, marble fireplace, and dual private rooftop terraces.',
      amenities: ['Private Elevator', 'Wine Cellar', 'Smart Automation', 'Rooftop Terrace', '24/7 Doorman', 'Private Fitness Studio'],
      floorplan: {
        levels: 2,
        rooms: [
          { name: 'Double-Height Living Salon', dim: '36 x 24 ft' },
          { name: 'Park-View Master Suite', dim: '22 x 18 ft' },
          { name: 'Formal Dining Salon', dim: '20 x 16 ft' },
          { name: 'Sky Terrace North', dim: '30 x 14 ft' },
          { name: 'Library / Study', dim: '18 x 14 ft' },
          { name: 'Sommelier Wine Gallery', dim: '12 x 10 ft' }
        ]
      }
    },
    {
      id: 'prop-4',
      title: 'Alpine Crest Chalet',
      locationName: '810 Red Mountain Rd, Aspen, CO',
      cityKey: 'aspen',
      category: 'estate',
      price: 5900000,
      sqft: 5600,
      beds: 6,
      baths: 6.0,
      mapX: 42,
      mapY: 34,
      image: './assets/Image.png',
      gallery: ['./assets/Image.png', './assets/Image (4).png'],
      broker: {
        name: 'Julian Montgomery',
        role: 'Managing Principal • West Coast',
        avatar: './assets/Mask group.png'
      },
      tag: 'Ski-in / Ski-out',
      featured: false,
      description: 'Hand-hewn timber and imported Swiss stone blend seamlessly into the Aspen peaks. Features direct ski trail access, heated outdoor hydrotherapy pool, oxygenated master suite, and custom gear pavilion.',
      amenities: ['Ski-in / Ski-out', 'Heated Salt Pool', 'Wine Cellar', 'Oxygenated Suites', 'Heated Driveway', 'Private Sauna'],
      floorplan: {
        levels: 3,
        rooms: [
          { name: 'Cathedral Great Room', dim: '38 x 26 ft' },
          { name: 'Primary Alpine Suite', dim: '24 x 20 ft' },
          { name: 'Ski Lounge & Boot Room', dim: '18 x 16 ft' },
          { name: 'Indoor/Outdoor Hydro Spa', dim: '20 x 15 ft' },
          { name: 'Bunkhouse Wing', dim: '22 x 14 ft' },
          { name: 'Catering & Wine Cellar', dim: '16 x 14 ft' }
        ]
      }
    },
    {
      id: 'prop-5',
      title: 'Malibu Solarium Haven',
      locationName: '22100 Pacific Coast Hwy, Malibu, CA',
      cityKey: 'malibu',
      category: 'waterfront',
      price: 3650000,
      sqft: 3900,
      beds: 4,
      baths: 4.0,
      mapX: 22,
      mapY: 52,
      image: './assets/Image (4).png',
      gallery: ['./assets/Image (4).png', './assets/Image (2).png'],
      broker: {
        name: 'Elena Vance',
        role: 'Head of Coastal & Waterfront',
        avatar: './assets/Mask group (1).png'
      },
      tag: 'Coastal Modern',
      featured: true,
      description: 'Perched over carbon beach sands, this cantilevered glass masterpiece blends warm organic minimalism with cutting-edge marine engineering and panoramic Pacific sunset vistas.',
      amenities: ['Private Beach / Waterfront', 'Zero-Edge Pool', 'Wine Cellar', 'Smart Automation', 'Tesla Powerwall System', 'Sub-Zero Appliances'],
      floorplan: {
        levels: 2,
        rooms: [
          { name: 'Cantilevered Sunset Salon', dim: '30 x 20 ft' },
          { name: 'Oceanfront Master Suite', dim: '22 x 16 ft' },
          { name: 'Open Concept Kitchen', dim: '18 x 14 ft' },
          { name: 'Private Beach Deck', dim: '34 x 14 ft' },
          { name: 'Guest Suite West', dim: '16 x 14 ft' },
          { name: 'Zen Courtyard', dim: '18 x 12 ft' }
        ]
      }
    },
    {
      id: 'prop-6',
      title: 'Austin Hill Country Sanctuary',
      locationName: '3804 Mount Bonnell Rd, Austin, TX',
      cityKey: 'austin',
      category: 'estate',
      price: 2150000,
      sqft: 4500,
      beds: 5,
      baths: 5.0,
      mapX: 48,
      mapY: 62,
      image: './assets/Image (5).png',
      gallery: ['./assets/Image (5).png', './assets/Image (3).png'],
      broker: {
        name: 'Alexander Sterling',
        role: 'Managing Director • Manhattan',
        avatar: './assets/Mask group (2).png'
      },
      tag: 'Lakefront Estate',
      featured: false,
      description: 'Overlooking Lake Austin, this gated multi-acre sanctuary features Texas limestone architecture, negative-edge infinity pool, commercial-grade outdoor culinary kitchen, and private boat slip.',
      amenities: ['Zero-Edge Pool', 'Lake Access & Boat Slip', 'Smart Automation', 'Wine Cellar', 'Outdoor Kitchen', 'Guest Casita'],
      floorplan: {
        levels: 2,
        rooms: [
          { name: 'Limestone Great Hall', dim: '34 x 22 ft' },
          { name: 'Lakeview Master Sanctuary', dim: '24 x 18 ft' },
          { name: 'Covered Veranda & Outdoor Kitchen', dim: '32 x 16 ft' },
          { name: 'Executive Home Office', dim: '18 x 14 ft' },
          { name: 'Wine Tasting Grotto', dim: '14 x 12 ft' },
          { name: 'Detached Guest Casita', dim: '20 x 16 ft' }
        ]
      }
    }
  ];

  // Retrieve or initialize properties
  let properties = JSON.parse(localStorage.getItem('realty_properties_data')) || initialProperties;

  // --- 2. CURRENCY ENGINE ---
  const currencyRates = {
    USD: { symbol: '$', rate: 1.0 },
    EUR: { symbol: '€', rate: 0.92 },
    GBP: { symbol: '£', rate: 0.79 },
    AED: { symbol: 'AED ', rate: 3.67 }
  };
  let currentCurrency = 'USD';

  function formatMoney(amountInUSD) {
    const info = currencyRates[currentCurrency] || currencyRates.USD;
    const converted = Math.round(amountInUSD * info.rate);
    return `${info.symbol}${converted.toLocaleString()}`;
  }

  // Currency select listener
  const currencySelect = document.getElementById('currencySelector');
  if (currencySelect) {
    currencySelect.addEventListener('change', (e) => {
      currentCurrency = e.target.value;
      renderProperties();
      renderMapPins();
      updateMortgageCalculations();
      showToast(`Currency updated to ${currentCurrency}`, 'fa-solid fa-coins');
    });
  }

  // --- 3. TOAST NOTIFICATION SYSTEM ---
  function showToast(message, iconClass = 'fa-solid fa-circle-check') {
    const container = document.getElementById('rbToastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'rb-toast';
    toast.innerHTML = `
      <i class="${iconClass}"></i>
      <span class="toast-message">${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3600);
  }

  // --- 4. FAVORITES & COMPARISON STATE ---
  let savedFavorites = JSON.parse(localStorage.getItem('realty_favorites')) || ['prop-1'];
  let compareList = JSON.parse(localStorage.getItem('realty_compare')) || ['prop-1', 'prop-3'];

  function saveFavoritesState() {
    localStorage.setItem('realty_favorites', JSON.stringify(savedFavorites));
    updateFavoritesBadge();
    renderFavoritesDrawer();
  }

  function updateFavoritesBadge() {
    const badge = document.getElementById('favoritesBadgeCount');
    const drawerBadge = document.getElementById('drawerFavCount');
    if (badge) badge.textContent = savedFavorites.length;
    if (drawerBadge) drawerBadge.textContent = savedFavorites.length;
  }

  function toggleFavorite(propId) {
    const index = savedFavorites.indexOf(propId);
    const prop = properties.find(p => p.id === propId);
    const title = prop ? prop.title : 'Property';

    if (index > -1) {
      savedFavorites.splice(index, 1);
      showToast(`Removed "${title}" from saved list`, 'fa-regular fa-heart');
    } else {
      savedFavorites.push(propId);
      showToast(`Saved "${title}" to your portfolio`, 'fa-solid fa-heart');
    }
    saveFavoritesState();
    renderProperties();
  }

  function saveCompareState() {
    localStorage.setItem('realty_compare', JSON.stringify(compareList));
    updateCompareTray();
  }

  function toggleCompare(propId) {
    const index = compareList.indexOf(propId);
    const prop = properties.find(p => p.id === propId);
    const title = prop ? prop.title : 'Property';

    if (index > -1) {
      compareList.splice(index, 1);
      showToast(`Removed "${title}" from comparison tray`, 'fa-solid fa-code-compare');
    } else {
      if (compareList.length >= 3) {
        showToast('Comparison limit reached (max 3 estates).', 'fa-solid fa-triangle-exclamation');
        return;
      }
      compareList.push(propId);
      showToast(`Added "${title}" to comparison tray`, 'fa-solid fa-code-compare');
    }
    saveCompareState();
  }

  function updateCompareTray() {
    const badge = document.getElementById('compareBadgeCount');
    const trayCount = document.getElementById('trayCompareCount');
    const tray = document.getElementById('comparisonTray');
    const itemsRow = document.getElementById('trayItemsRow');

    if (badge) badge.textContent = compareList.length;
    if (trayCount) trayCount.textContent = compareList.length;

    if (!tray || !itemsRow) return;

    if (compareList.length > 0) {
      tray.classList.add('visible');
    } else {
      tray.classList.remove('visible');
    }

    itemsRow.innerHTML = '';
    compareList.forEach(id => {
      const prop = properties.find(p => p.id === id);
      if (!prop) return;

      const pill = document.createElement('div');
      pill.className = 'tray-item-pill';
      pill.innerHTML = `
        <span>${prop.title}</span>
        <button data-remove-compare="${prop.id}" title="Remove">&times;</button>
      `;
      itemsRow.appendChild(pill);
    });

    itemsRow.querySelectorAll('button[data-remove-compare]').forEach(btn => {
      btn.addEventListener('click', () => {
        toggleCompare(btn.dataset.removeCompare);
      });
    });
  }

  // --- 5. PROPERTY FILTERING & SEARCH ENGINE ---
  let activeCategory = 'all';
  let activeLocation = 'all';
  let activePriceBracket = 'all';
  let activeAmenities = new Set();
  let currentSort = 'default';
  let currentViewMode = 'grid'; // 'grid' or 'map'

  function getFilteredProperties() {
    return properties.filter(prop => {
      // Category filter
      if (activeCategory !== 'all' && prop.category !== activeCategory) {
        return false;
      }
      // Location filter
      if (activeLocation !== 'all' && prop.cityKey !== activeLocation) {
        return false;
      }
      // Price filter
      if (activePriceBracket === 'under2m' && prop.price >= 2000000) return false;
      if (activePriceBracket === '2m-4m' && (prop.price < 2000000 || prop.price > 4000000)) return false;
      if (activePriceBracket === '4m-plus' && prop.price < 4000000) return false;

      // Amenities filter
      for (const amenity of activeAmenities) {
        if (amenity === 'Pool' && !prop.amenities.some(a => a.toLowerCase().includes('pool'))) return false;
        if (amenity === 'Beach' && !prop.amenities.some(a => a.toLowerCase().includes('beach') || a.toLowerCase().includes('waterfront') || a.toLowerCase().includes('ocean') || a.toLowerCase().includes('dock'))) return false;
        if (amenity === 'Elevator' && !prop.amenities.some(a => a.toLowerCase().includes('elevator'))) return false;
        if (amenity === 'Wine' && !prop.amenities.some(a => a.toLowerCase().includes('wine'))) return false;
        if (amenity === 'Smart' && !prop.amenities.some(a => a.toLowerCase().includes('smart') || a.toLowerCase().includes('automation'))) return false;
        if (amenity === '4+Beds' && prop.beds < 4) return false;
      }

      return true;
    }).sort((a, b) => {
      if (currentSort === 'price-asc') return a.price - b.price;
      if (currentSort === 'price-desc') return b.price - a.price;
      if (currentSort === 'sqft-desc') return b.sqft - a.sqft;
      return 0; // default order
    });
  }

  function createPropertyCardHTML(prop) {
    const isSaved = savedFavorites.includes(prop.id);
    const sqftPrice = Math.round(prop.price / prop.sqft);

    return `
      <article class="property-card" id="card-${prop.id}">
        <div class="property-media">
          <img src="${prop.image}" alt="${prop.title}" class="property-img" loading="lazy">
          
          <div class="property-badge-group">
            <span class="card-badge badge-featured">${prop.tag}</span>
            <span class="card-badge badge-verified"><i class="fa-solid fa-shield-halved"></i> Audited</span>
          </div>

          <div class="card-actions-group">
            <button class="card-icon-btn ${isSaved ? 'is-saved' : ''}" data-fav-id="${prop.id}" title="Save Residence" aria-label="Save ${prop.title}">
              <i class="${isSaved ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
            </button>
            <button class="card-icon-btn" data-compare-id="${prop.id}" title="Compare Residence" aria-label="Compare ${prop.title}">
              <i class="fa-solid fa-code-compare"></i>
            </button>
          </div>
        </div>

        <div class="property-details">
          <div class="property-pricing-row">
            <span class="property-price">${formatMoney(prop.price)}</span>
            <span class="property-sqft-price">${formatMoney(sqftPrice)} / sqft</span>
          </div>

          <h3 class="property-title">${prop.title}</h3>
          <p class="property-location">
            <i class="fa-solid fa-location-dot" style="color: var(--accent-gold);"></i>
            ${prop.locationName}
          </p>

          <div class="property-amenities-bar">
            <div class="amenity-metric">
              <i class="fa-solid fa-bed"></i>
              <span>${prop.beds} Beds</span>
            </div>
            <div class="amenity-metric">
              <i class="fa-solid fa-bath"></i>
              <span>${prop.baths} Baths</span>
            </div>
            <div class="amenity-metric">
              <i class="fa-solid fa-vector-square"></i>
              <span>${prop.sqft.toLocaleString()} SqFt</span>
            </div>
          </div>

          <div class="property-card-footer">
            <div class="broker-preview">
              <img src="${prop.broker.avatar}" alt="${prop.broker.name}" class="broker-thumb">
              <span class="broker-name">${prop.broker.name}</span>
            </div>
            <button class="card-cta-btn" data-view-details="${prop.id}">
              Explore Specs <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function renderProperties() {
    const grid = document.getElementById('propertiesGrid');
    const scrollMapList = document.getElementById('mapPropertiesScroll');
    const countDisplay = document.getElementById('propertyCountDisplay');
    const filtered = getFilteredProperties();

    if (countDisplay) {
      countDisplay.innerHTML = `Showing <strong>${filtered.length}</strong> of ${properties.length} residences`;
    }

    if (filtered.length === 0) {
      const emptyState = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #ffffff; border: 1px dashed var(--border-strong); border-radius: var(--radius-md);">
          <i class="fa-solid fa-building-circle-xmark" style="font-size: 42px; color: var(--text-tertiary); margin-bottom: 12px;"></i>
          <h3 style="font-family: var(--font-serif); font-size: 24px;">No Matching Residences Found</h3>
          <p style="color: var(--text-secondary); margin-top: 6px; font-size: 14px;">Try adjusting your location, price parameters, or amenity filters.</p>
          <button class="btn-secondary" id="resetFiltersBtn" style="margin-top: 18px;">
            <i class="fa-solid fa-rotate-left"></i> Reset All Filters
          </button>
        </div>
      `;
      if (grid) grid.innerHTML = emptyState;
      if (scrollMapList) scrollMapList.innerHTML = emptyState;

      const resetBtn = document.getElementById('resetFiltersBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', resetAllFilters);
      }
      return;
    }

    const cardsHtml = filtered.map(prop => createPropertyCardHTML(prop)).join('');

    if (grid) grid.innerHTML = cardsHtml;
    if (scrollMapList) scrollMapList.innerHTML = cardsHtml;

    attachCardEventListeners();
    renderMapPins();
  }

  function resetAllFilters() {
    activeCategory = 'all';
    activeLocation = 'all';
    activePriceBracket = 'all';
    activeAmenities.clear();
    currentSort = 'default';

    document.querySelectorAll('.filter-pill').forEach(btn => btn.classList.toggle('active', btn.dataset.category === 'all'));
    document.querySelectorAll('.filter-tag-chip').forEach(btn => btn.classList.remove('active'));

    const locSelect = document.getElementById('heroLocationFilter');
    const typeSelect = document.getElementById('heroTypeFilter');
    const priceSelect = document.getElementById('heroPriceFilter');
    const sortSelect = document.getElementById('propertySortSelect');

    if (locSelect) locSelect.value = 'all';
    if (typeSelect) typeSelect.value = 'all';
    if (priceSelect) priceSelect.value = 'all';
    if (sortSelect) sortSelect.value = 'default';

    renderProperties();
    showToast('Filters reset to default view.', 'fa-solid fa-rotate-left');
  }

  function attachCardEventListeners() {
    // Favorite buttons
    document.querySelectorAll('button[data-fav-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(btn.dataset.favId);
      });
    });

    // Compare buttons
    document.querySelectorAll('button[data-compare-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleCompare(btn.dataset.compareId);
      });
    });

    // View Details buttons
    document.querySelectorAll('button[data-view-details]').forEach(btn => {
      btn.addEventListener('click', () => {
        openPropertyDetailsModal(btn.dataset.viewDetails);
      });
    });
  }

  // --- 6. INTERACTIVE MAP PINS ENGINE ---
  function renderMapPins() {
    const container = document.getElementById('mapPinsContainer');
    if (!container) return;

    container.innerHTML = '';
    const filtered = getFilteredProperties();

    filtered.forEach(prop => {
      const pin = document.createElement('div');
      pin.className = 'map-estate-pin';
      pin.style.left = `${prop.mapX || 50}%`;
      pin.style.top = `${prop.mapY || 50}%`;
      pin.id = `map-pin-${prop.id}`;

      pin.innerHTML = `
        <div class="pin-bubble">
          <i class="fa-solid fa-diamond" style="color: var(--accent-gold); margin-right: 4px;"></i>
          ${formatMoney(prop.price)}
        </div>
      `;

      pin.addEventListener('click', () => {
        // Highlight active pin
        document.querySelectorAll('.pin-bubble').forEach(b => b.classList.remove('active'));
        pin.querySelector('.pin-bubble').classList.add('active');

        // Scroll to card in map scroll view
        const targetCard = document.querySelector(`#mapPropertiesScroll #card-${prop.id}`);
        if (targetCard) {
          targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          targetCard.style.outline = '2px solid var(--accent-gold)';
          setTimeout(() => { targetCard.style.outline = 'none'; }, 2000);
        }
      });

      container.appendChild(pin);
    });
  }

  // View mode switcher listener (Grid vs Map)
  const viewGridBtn = document.getElementById('viewModeGridBtn');
  const viewMapBtn = document.getElementById('viewModeMapBtn');
  const propertiesGrid = document.getElementById('propertiesGrid');
  const splitMapPanel = document.getElementById('splitMapPanel');

  if (viewGridBtn && viewMapBtn) {
    viewGridBtn.addEventListener('click', () => {
      currentViewMode = 'grid';
      viewGridBtn.classList.add('active');
      viewMapBtn.classList.remove('active');
      if (propertiesGrid) propertiesGrid.style.display = 'grid';
      if (splitMapPanel) splitMapPanel.classList.remove('visible');
    });

    viewMapBtn.addEventListener('click', () => {
      currentViewMode = 'map';
      viewMapBtn.classList.add('active');
      viewGridBtn.classList.remove('active');
      if (propertiesGrid) propertiesGrid.style.display = 'none';
      if (splitMapPanel) splitMapPanel.classList.add('visible');
      renderMapPins();
    });
  }

  // Category filter pills
  document.querySelectorAll('#categoryFilterPills .filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#categoryFilterPills .filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.category;
      renderProperties();
    });
  });

  // Amenity quick tag filter chips
  document.querySelectorAll('.filter-tag-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const amenity = chip.dataset.amenity;
      if (activeAmenities.has(amenity)) {
        activeAmenities.delete(amenity);
        chip.classList.remove('active');
      } else {
        activeAmenities.add(amenity);
        chip.classList.add('active');
      }
      renderProperties();
    });
  });

  // Sort selector
  const sortSelect = document.getElementById('propertySortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderProperties();
    });
  }

  // Hero search trigger
  const heroSearchTrigger = document.getElementById('heroSearchTriggerBtn');
  if (heroSearchTrigger) {
    heroSearchTrigger.addEventListener('click', () => {
      const loc = document.getElementById('heroLocationFilter').value;
      const type = document.getElementById('heroTypeFilter').value;
      const price = document.getElementById('heroPriceFilter').value;

      activeLocation = loc;
      activeCategory = type;
      activePriceBracket = price;

      // Sync category pills
      document.querySelectorAll('#categoryFilterPills .filter-pill').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === type);
      });

      renderProperties();
      document.getElementById('propertiesSection').scrollIntoView({ behavior: 'smooth' });
      showToast('Search criteria applied to portfolio.', 'fa-solid fa-magnifying-glass');
    });
  }

  // Popular search tags in Hero
  document.querySelectorAll('.quick-tag-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const query = chip.dataset.query.toLowerCase();
      if (query.includes('malibu')) activeLocation = 'malibu';
      else if (query.includes('beverly')) activeLocation = 'beverly-hills';
      else if (query.includes('manhattan')) activeLocation = 'manhattan';
      else if (query.includes('austin')) activeLocation = 'austin';

      const locSelect = document.getElementById('heroLocationFilter');
      if (locSelect) locSelect.value = activeLocation;

      renderProperties();
      document.getElementById('propertiesSection').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Search mode tabs (Buy, Rent, Developments, Private Vault)
  document.querySelectorAll('.search-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.search-mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.dataset.mode;
      if (mode === 'off-market') {
        showToast('Viewing verified Off-Market Private Vault.', 'fa-solid fa-key');
      }
    });
  });

  // Destinations cards click to filter
  document.querySelectorAll('.destination-card').forEach(card => {
    card.addEventListener('click', () => {
      const city = card.dataset.city;
      activeLocation = city;
      const locSelect = document.getElementById('heroLocationFilter');
      if (locSelect) locSelect.value = city;

      renderProperties();
      document.getElementById('propertiesSection').scrollIntoView({ behavior: 'smooth' });
      showToast(`Showing estates in ${city.replace('-', ' ').toUpperCase()}`, 'fa-solid fa-location-dot');
    });
  });

  // --- 7. MORTGAGE & ROI LAB (INTERACTIVE CALCULATOR) ---
  let calcMode = 'mortgage'; // 'mortgage' or 'roi'
  let loanYears = 30;

  const sliderHomePrice = document.getElementById('sliderHomePrice');
  const sliderDownPayment = document.getElementById('sliderDownPayment');
  const sliderInterestRate = document.getElementById('sliderInterestRate');
  const sliderPropertyTax = document.getElementById('sliderPropertyTax');
  const sliderHOA = document.getElementById('sliderHOA');

  // ROI inputs
  const sliderMonthlyRent = document.getElementById('sliderMonthlyRent');
  const sliderMgmtFee = document.getElementById('sliderMgmtFee');
  const sliderMaintenanceReserve = document.getElementById('sliderMaintenanceReserve');

  // Mode switcher listeners
  const btnMortgageMode = document.getElementById('labModeMortgageBtn');
  const btnRoiMode = document.getElementById('labModeRoiBtn');
  const residentialInputs = document.getElementById('residentialCalcInputs');
  const investmentInputs = document.getElementById('investmentCalcInputs');
  const resultsTitle = document.getElementById('resultsPanelTitle');

  if (btnMortgageMode && btnRoiMode) {
    btnMortgageMode.addEventListener('click', () => {
      calcMode = 'mortgage';
      btnMortgageMode.classList.add('active');
      btnRoiMode.classList.remove('active');
      residentialInputs.style.display = 'block';
      investmentInputs.style.display = 'none';
      resultsTitle.textContent = 'Estimated Monthly Debt Service';
      updateMortgageCalculations();
    });

    btnRoiMode.addEventListener('click', () => {
      calcMode = 'roi';
      btnRoiMode.classList.add('active');
      btnMortgageMode.classList.remove('active');
      residentialInputs.style.display = 'none';
      investmentInputs.style.display = 'block';
      resultsTitle.textContent = 'Net Operating Income & Cap Rate';
      updateMortgageCalculations();
    });
  }

  // Term selector pills
  document.querySelectorAll('.term-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.term-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      loanYears = parseInt(pill.dataset.years, 10);
      updateMortgageCalculations();
    });
  });

  function updateMortgageCalculations() {
    const price = parseFloat(sliderHomePrice.value) || 2450000;
    const down = parseFloat(sliderDownPayment.value) || 490000;
    const rate = parseFloat(sliderInterestRate.value) || 6.5;
    const annualTax = parseFloat(sliderPropertyTax.value) || 18375;
    const monthlyHoa = parseFloat(sliderHOA.value) || 450;

    // Displays
    document.getElementById('displayHomePrice').textContent = formatMoney(price);
    const downPct = Math.round((down / price) * 100);
    document.getElementById('displayDownPayment').textContent = `${formatMoney(down)} (${downPct}%)`;
    document.getElementById('displayInterestRate').textContent = `${rate.toFixed(1)}%`;
    document.getElementById('displayPropertyTax').textContent = `${formatMoney(annualTax)} / yr`;
    document.getElementById('displayHOA').textContent = `${formatMoney(monthlyHoa)} / mo`;

    if (calcMode === 'mortgage') {
      // Calculate Principal & Interest
      const principal = Math.max(0, price - down);
      const monthlyRate = (rate / 100) / 12;
      const totalPayments = loanYears * 12;

      let monthlyPI = 0;
      if (monthlyRate > 0 && principal > 0) {
        monthlyPI = principal * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
      }

      const monthlyTax = annualTax / 12;
      const monthlyInsurance = Math.round((price * 0.0035) / 12);
      const totalMonthly = Math.round(monthlyPI + monthlyTax + monthlyInsurance + monthlyHoa);

      // Render monthly total
      document.getElementById('totalMonthlyCommitment').innerHTML = `${formatMoney(totalMonthly)} <span>/ mo</span>`;

      // Proportions bar
      const pPI = Math.round((monthlyPI / totalMonthly) * 100) || 75;
      const pTax = Math.round((monthlyTax / totalMonthly) * 100) || 15;
      const pIns = Math.round((monthlyInsurance / totalMonthly) * 100) || 5;
      const pHoa = Math.max(2, 100 - (pPI + pTax + pIns));

      document.getElementById('barPi').style.width = `${pPI}%`;
      document.getElementById('barTax').style.width = `${pTax}%`;
      document.getElementById('barIns').style.width = `${pIns}%`;
      document.getElementById('barHoa').style.width = `${pHoa}%`;

      // Legend
      document.getElementById('valPI').textContent = `${formatMoney(Math.round(monthlyPI))} / mo`;
      document.getElementById('valTax').textContent = `${formatMoney(Math.round(monthlyTax))} / mo`;
      document.getElementById('valIns').textContent = `${formatMoney(monthlyInsurance)} / mo`;
      document.getElementById('valHoa').textContent = `${formatMoney(monthlyHoa)} / mo`;

    } else {
      // Cap Rate & ROI calculation
      const monthlyRent = parseFloat(sliderMonthlyRent.value) || 18500;
      const mgmtPct = parseFloat(sliderMgmtFee.value) || 8.0;
      const maintenance = parseFloat(sliderMaintenanceReserve.value) || 12000;

      document.getElementById('displayMonthlyRent').textContent = `${formatMoney(monthlyRent)} / mo`;
      document.getElementById('displayMgmtFee').textContent = `${mgmtPct.toFixed(1)}%`;
      document.getElementById('displayMaintenanceReserve').textContent = `${formatMoney(maintenance)} / yr`;

      const grossAnnualRent = monthlyRent * 12;
      const annualMgmt = grossAnnualRent * (mgmtPct / 100);
      const annualHoa = monthlyHoa * 12;
      const totalExpenses = annualTax + annualMgmt + maintenance + annualHoa;
      const netOperatingIncome = Math.max(0, grossAnnualRent - totalExpenses);
      const capRate = (netOperatingIncome / price) * 100;

      document.getElementById('totalMonthlyCommitment').innerHTML = `${capRate.toFixed(2)}% <span>Cap Rate</span>`;

      // Legend updates for ROI
      document.getElementById('valPI').textContent = `${formatMoney(Math.round(grossAnnualRent / 12))} Gross/mo`;
      document.getElementById('valTax').textContent = `${formatMoney(Math.round(netOperatingIncome / 12))} NOI/mo`;
      document.getElementById('valIns').textContent = `${formatMoney(Math.round(totalExpenses / 12))} Exp/mo`;
      document.getElementById('valHoa').textContent = `${capRate.toFixed(2)}% Yield`;

      document.getElementById('barPi').style.width = `50%`;
      document.getElementById('barTax').style.width = `30%`;
      document.getElementById('barIns').style.width = `12%`;
      document.getElementById('barHoa').style.width = `8%`;
    }
  }

  // Attach mortgage slider inputs
  [sliderHomePrice, sliderDownPayment, sliderInterestRate, sliderPropertyTax, sliderHOA, sliderMonthlyRent, sliderMgmtFee, sliderMaintenanceReserve].forEach(input => {
    if (input) {
      input.addEventListener('input', updateMortgageCalculations);
    }
  });

  // Sync down payment max with home price
  if (sliderHomePrice) {
    sliderHomePrice.addEventListener('input', (e) => {
      const p = parseFloat(e.target.value);
      sliderDownPayment.max = Math.round(p * 0.8);
      if (parseFloat(sliderDownPayment.value) > p * 0.8) {
        sliderDownPayment.value = Math.round(p * 0.2);
      }
    });
  }

  // Prequalify advisor button
  const prequalifyBtn = document.getElementById('prequalifyAdvisorBtn');
  if (prequalifyBtn) {
    prequalifyBtn.addEventListener('click', () => {
      showToast('Prequalification inquiry dispatched to private syndicate desk.', 'fa-solid fa-certificate');
    });
  }

  // 30-Year Amortization Schedule Modal
  const openAmortBtn = document.getElementById('openAmortizationBtn');
  const amortModal = document.getElementById('amortizationModal');
  const closeAmortBtn = document.getElementById('closeAmortizationModalBtn');
  const amortContainer = document.getElementById('amortizationScheduleTableContainer');

  if (openAmortBtn && amortModal) {
    openAmortBtn.addEventListener('click', () => {
      renderAmortizationSchedule();
      amortModal.classList.add('open');
    });
  }

  if (closeAmortBtn && amortModal) {
    closeAmortBtn.addEventListener('click', () => {
      amortModal.classList.remove('open');
    });
  }

  function renderAmortizationSchedule() {
    if (!amortContainer) return;
    const price = parseFloat(sliderHomePrice.value) || 2450000;
    const down = parseFloat(sliderDownPayment.value) || 490000;
    const rate = (parseFloat(sliderInterestRate.value) || 6.5) / 100;
    const principal = Math.max(0, price - down);
    const monthlyRate = rate / 12;
    const n = loanYears * 12;
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);

    let balance = principal;
    const milestoneYears = [1, 2, 3, 5, 10, 15, 20, 25, 30].filter(y => y <= loanYears);

    let rowsHtml = '';
    let currentYear = 1;
    let accumulatedInterest = 0;
    let accumulatedPrincipal = 0;

    for (let month = 1; month <= n; month++) {
      const interestForMonth = balance * monthlyRate;
      const principalForMonth = monthlyPayment - interestForMonth;
      balance = Math.max(0, balance - principalForMonth);

      accumulatedInterest += interestForMonth;
      accumulatedPrincipal += principalForMonth;

      if (month % 12 === 0) {
        if (milestoneYears.includes(currentYear)) {
          rowsHtml += `
            <tr style="border-bottom: 1px solid var(--border-subtle); padding: 12px 0;">
              <td style="padding: 12px; font-weight: 700;">Year ${currentYear}</td>
              <td style="padding: 12px;">${formatMoney(Math.round(accumulatedPrincipal))}</td>
              <td style="padding: 12px;">${formatMoney(Math.round(accumulatedInterest))}</td>
              <td style="padding: 12px; font-weight: 700; color: var(--accent-gold);">${formatMoney(Math.round(balance))}</td>
              <td style="padding: 12px;">${Math.round(((principal - balance) / principal) * 100)}%</td>
            </tr>
          `;
        }
        currentYear++;
      }
    }

    amortContainer.innerHTML = `
      <table style="width: 100%; border-collapse: collapse; font-size: 14px; text-align: left;">
        <thead>
          <tr style="background: var(--bg-main); border-bottom: 2px solid var(--border-strong);">
            <th style="padding: 12px;">Milestone</th>
            <th style="padding: 12px;">Equity Accumulated</th>
            <th style="padding: 12px;">Cumulative Interest</th>
            <th style="padding: 12px;">Remaining Debt</th>
            <th style="padding: 12px;">Equity Share</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    `;
  }

  // --- 8. PROPERTY DETAILS MODAL (WITH TABS: PHOTO, FLOOR PLAN, 3D TOUR) ---
  const propDetailsModal = document.getElementById('propertyDetailsModal');
  const closePropDetailsBtn = document.getElementById('closePropertyDetailsBtn');
  const propModalContent = document.getElementById('propertyModalContent');

  function openPropertyDetailsModal(propId) {
    const prop = properties.find(p => p.id === propId);
    if (!prop || !propModalContent) return;

    const floorRooms = prop.floorplan ? prop.floorplan.rooms.map(r => `
      <div class="floorplan-room-card">
        <div class="floorplan-room-title">${r.name}</div>
        <div class="floorplan-room-dim"><i class="fa-solid fa-ruler-combined"></i> ${r.dim}</div>
      </div>
    `).join('') : '<p>Architectural blueprints available upon non-disclosure agreement.</p>';

    propModalContent.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px; flex-wrap: wrap; gap: 10px;">
        <h3 class="modal-title-serif" style="margin-bottom: 0;">${prop.title}</h3>
        <span style="font-size: 26px; font-weight: 800; color: var(--accent-gold);">${formatMoney(prop.price)}</span>
      </div>
      <p class="modal-subtitle" style="margin-bottom: 16px;">
        <i class="fa-solid fa-location-dot" style="color: var(--accent-gold);"></i> ${prop.locationName}
      </p>

      <!-- Inner Modal Navigation Tabs -->
      <div class="modal-nav-tabs">
        <button class="modal-nav-tab active" data-tab="gallery">
          <i class="fa-regular fa-image"></i> High-Res Photography
        </button>
        <button class="modal-nav-tab" data-tab="floorplan">
          <i class="fa-solid fa-drafting-compass"></i> Architectural Blueprint
        </button>
        <button class="modal-nav-tab" data-tab="tour">
          <i class="fa-solid fa-vr-cardboard"></i> 3D Virtual Walkthrough
        </button>
      </div>

      <!-- Tab 1: Gallery -->
      <div class="modal-tab-content active" id="modalTabGallery">
        <div class="property-modal-gallery">
          <img src="${prop.image}" alt="${prop.title} Exterior">
          <img src="${prop.gallery[1] || prop.image}" alt="${prop.title} Interior">
        </div>
        <p style="font-size: 15px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 18px;">
          ${prop.description}
        </p>
      </div>

      <!-- Tab 2: Floor Plan -->
      <div class="modal-tab-content" id="modalTabFloorplan">
        <div class="floorplan-schematic-box">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed rgba(255,255,255,0.2); padding-bottom: 10px;">
            <span><i class="fa-solid fa-compass" style="color: var(--accent-gold);"></i> ARCHITECTURAL SPECIFICATION SCHEMATIC</span>
            <span>TOTAL INTERIOR: ${prop.sqft.toLocaleString()} SQFT</span>
          </div>
          <div class="floorplan-level-row">
            ${floorRooms}
          </div>
        </div>
      </div>

      <!-- Tab 3: Virtual 3D Tour -->
      <div class="modal-tab-content" id="modalTabTour">
        <div class="virtual-tour-frame">
          <img src="${prop.image}" alt="Virtual 3D Walkthrough">
          <div class="virtual-tour-overlay-hud">
            <div class="tour-hud-top">
              <span class="tour-hud-compass"><i class="fa-solid fa-location-crosshairs"></i> 4K SPATIAL 360&deg; PREVIEW</span>
              <span class="tour-hud-compass">DOLBY ATMOS AUDIO READY</span>
            </div>
            <div class="tour-hud-center">
              <button class="tour-play-btn" id="startVirtualTourBtn" title="Launch Interactive Virtual Tour">
                <i class="fa-solid fa-play"></i>
              </button>
            </div>
            <div style="color: #fff; font-size: 12px; text-shadow: 0 1px 4px rgba(0,0,0,0.8);">
              Drag cursor to navigate panoramic atrium &bull; Click hotspots to enter secondary suites
            </div>
          </div>
        </div>
      </div>

      <!-- Amenities Checklist -->
      <h4 style="font-size: 15px; font-weight: 700; margin-top: 18px;">Verified Estate Amenities</h4>
      <div class="modal-amenities-checklist">
        ${prop.amenities.map(a => `<span><i class="fa-solid fa-check"></i> ${a}</span>`).join('')}
      </div>

      <!-- Broker Representation & Booking -->
      <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 24px; padding-top: 20px; border-top: 1px solid var(--border-subtle); flex-wrap: wrap; gap: 14px;">
        <div class="broker-preview">
          <img src="${prop.broker.avatar}" alt="${prop.broker.name}" class="broker-thumb" style="width: 44px; height: 44px;">
          <div>
            <div class="broker-name" style="font-size: 14px;">${prop.broker.name}</div>
            <div style="font-size: 12px; color: var(--text-tertiary);">${prop.broker.role}</div>
          </div>
        </div>

        <div style="display: flex; gap: 10px;">
          <button class="btn-secondary" id="modalCalculateMortgageBtn">
            <i class="fa-solid fa-calculator"></i> Model Loan
          </button>
          <button class="btn-primary" id="modalBookShowingBtn">
            <i class="fa-regular fa-calendar-check"></i> Book Private Showing
          </button>
        </div>
      </div>
    `;

    // Tab switcher events inside modal
    propModalContent.querySelectorAll('.modal-nav-tab').forEach(tabBtn => {
      tabBtn.addEventListener('click', () => {
        propModalContent.querySelectorAll('.modal-nav-tab').forEach(b => b.classList.remove('active'));
        propModalContent.querySelectorAll('.modal-tab-content').forEach(c => c.classList.remove('active'));

        tabBtn.classList.add('active');
        const target = tabBtn.dataset.tab;
        if (target === 'gallery') propModalContent.querySelector('#modalTabGallery').classList.add('active');
        if (target === 'floorplan') propModalContent.querySelector('#modalTabFloorplan').classList.add('active');
        if (target === 'tour') propModalContent.querySelector('#modalTabTour').classList.add('active');
      });
    });

    // Virtual tour play simulation
    const tourBtn = propModalContent.querySelector('#startVirtualTourBtn');
    if (tourBtn) {
      tourBtn.addEventListener('click', () => {
        showToast('Virtual 360 Walkthrough initialized in 4K resolution.', 'fa-solid fa-vr-cardboard');
      });
    }

    // Modal action buttons
    const calcBtn = propModalContent.querySelector('#modalCalculateMortgageBtn');
    if (calcBtn) {
      calcBtn.addEventListener('click', () => {
        propDetailsModal.classList.remove('open');
        sliderHomePrice.value = prop.price;
        sliderDownPayment.value = Math.round(prop.price * 0.2);
        updateMortgageCalculations();
        document.getElementById('mortgageLabSection').scrollIntoView({ behavior: 'smooth' });
        showToast(`Loaded ${prop.title} pricing into Mortgage Lab`, 'fa-solid fa-calculator');
      });
    }

    const showingBtn = propModalContent.querySelector('#modalBookShowingBtn');
    if (showingBtn) {
      showingBtn.addEventListener('click', () => {
        propDetailsModal.classList.remove('open');
        openShowingModal(prop);
      });
    }

    propDetailsModal.classList.add('open');
  }

  if (closePropDetailsBtn && propDetailsModal) {
    closePropDetailsBtn.addEventListener('click', () => {
      propDetailsModal.classList.remove('open');
    });
  }

  // --- 9. SHOWING APPOINTMENT MODAL ---
  const showingModal = document.getElementById('showingModal');
  const closeShowingBtn = document.getElementById('closeShowingModalBtn');
  const showingForm = document.getElementById('showingForm');

  function openShowingModal(prop) {
    if (!showingModal) return;
    const titleEl = document.getElementById('showingPropertyTitle');
    if (titleEl && prop) {
      titleEl.innerHTML = `<strong>${prop.title}</strong> &bull; ${prop.locationName}`;
    }
    showingModal.classList.add('open');
  }

  if (closeShowingBtn && showingModal) {
    closeShowingBtn.addEventListener('click', () => {
      showingModal.classList.remove('open');
    });
  }

  if (showingForm) {
    showingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('showingName').value;
      showingModal.classList.remove('open');
      showingForm.reset();
      showToast(`Showing scheduled for ${name}. Our concierge will contact you within 2 business hours.`, 'fa-solid fa-calendar-check');
    });
  }

  // --- 10. LIST PROPERTY MODAL & NEW SUBMISSION WIZARD ---
  const listPropModal = document.getElementById('listPropertyModal');
  const openListPropBtn = document.getElementById('openListPropertyBtn');
  const mobileListPropBtn = document.getElementById('mobileListPropertyBtn');
  const closeListPropBtn = document.getElementById('closeListPropertyModalBtn');
  const listPropForm = document.getElementById('listPropertyForm');

  if (openListPropBtn && listPropModal) {
    openListPropBtn.addEventListener('click', () => listPropModal.classList.add('open'));
  }
  if (mobileListPropBtn && listPropModal) {
    mobileListPropBtn.addEventListener('click', () => listPropModal.classList.add('open'));
  }
  if (closeListPropBtn && listPropModal) {
    closeListPropBtn.addEventListener('click', () => listPropModal.classList.remove('open'));
  }

  if (listPropForm) {
    listPropForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const newEstate = {
        id: `prop-${Date.now()}`,
        title: document.getElementById('newPropTitle').value,
        locationName: document.getElementById('newPropLocation').value,
        cityKey: 'beverly-hills',
        category: document.getElementById('newPropType').value,
        price: parseFloat(document.getElementById('newPropPrice').value),
        sqft: parseInt(document.getElementById('newPropSqft').value, 10),
        beds: parseInt(document.getElementById('newPropBeds').value, 10),
        baths: parseFloat(document.getElementById('newPropBaths').value),
        mapX: 50,
        mapY: 50,
        image: './assets/Image (1).png',
        gallery: ['./assets/Image (1).png'],
        broker: {
          name: 'Julian Montgomery',
          role: 'Managing Principal • West Coast',
          avatar: './assets/Mask group.png'
        },
        tag: 'New Listing',
        featured: false,
        description: 'Privately registered trophy asset undergoing title inspection and high-resolution spatial capture.',
        amenities: ['Smart Automation', 'Chef Kitchen', 'Security System'],
        floorplan: {
          levels: 2,
          rooms: [
            { name: 'Great Room', dim: '28 x 20 ft' },
            { name: 'Primary Suite', dim: '22 x 16 ft' }
          ]
        }
      };

      properties.unshift(newEstate);
      localStorage.setItem('realty_properties_data', JSON.stringify(properties));
      renderProperties();

      listPropModal.classList.remove('open');
      listPropForm.reset();
      showToast(`Estate "${newEstate.title}" submitted and added to portfolio.`, 'fa-solid fa-shield-check');
      document.getElementById('propertiesSection').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // --- 11. SIDE-BY-SIDE COMPARISON MODAL ---
  const compareModal = document.getElementById('compareModal');
  const openCompareModalBtn = document.getElementById('openComparisonModalBtn');
  const openCompareHeaderBtn = document.getElementById('openCompareBtn');
  const closeCompareBtn = document.getElementById('closeCompareModalBtn');
  const clearCompareBtn = document.getElementById('clearCompareTrayBtn');
  const compareTableContainer = document.getElementById('compareTableContainer');

  function openComparisonModal() {
    if (!compareModal || !compareTableContainer) return;

    if (compareList.length === 0) {
      showToast('Please add at least 1 property to compare.', 'fa-solid fa-code-compare');
      return;
    }

    const comparedProps = properties.filter(p => compareList.includes(p.id));

    let headerCols = comparedProps.map(p => `
      <th style="padding: 16px; min-width: 200px; text-align: left; background: var(--bg-main);">
        <img src="${p.image}" alt="${p.title}" style="height: 110px; width: 100%; object-fit: cover; border-radius: 6px; margin-bottom: 8px;">
        <div style="font-family: var(--font-serif); font-size: 18px; font-weight: 700;">${p.title}</div>
        <div style="font-size: 18px; font-weight: 800; color: var(--accent-gold); margin-top: 4px;">${formatMoney(p.price)}</div>
      </th>
    `).join('');

    let locationRow = comparedProps.map(p => `<td style="padding: 12px 16px;">${p.locationName}</td>`).join('');
    let bedsRow = comparedProps.map(p => `<td style="padding: 12px 16px;">${p.beds} Bedrooms</td>`).join('');
    let bathsRow = comparedProps.map(p => `<td style="padding: 12px 16px;">${p.baths} Bathrooms</td>`).join('');
    let sqftRow = comparedProps.map(p => `<td style="padding: 12px 16px;">${p.sqft.toLocaleString()} SqFt</td>`).join('');
    let sqftPriceRow = comparedProps.map(p => `<td style="padding: 12px 16px;">${formatMoney(Math.round(p.price / p.sqft))} / sqft</td>`).join('');
    let brokerRow = comparedProps.map(p => `<td style="padding: 12px 16px;">${p.broker.name} (${p.broker.role})</td>`).join('');
    let amenitiesRow = comparedProps.map(p => `
      <td style="padding: 12px 16px; font-size: 12px;">
        ${p.amenities.slice(0, 4).map(a => `<div>• ${a}</div>`).join('')}
      </td>
    `).join('');

    compareTableContainer.innerHTML = `
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <thead>
          <tr>
            <th style="padding: 16px; width: 160px; text-align: left; font-weight: 700;">Metric</th>
            ${headerCols}
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid var(--border-subtle);"><td style="padding: 12px 16px; font-weight: 600;">Location</td>${locationRow}</tr>
          <tr style="border-bottom: 1px solid var(--border-subtle);"><td style="padding: 12px 16px; font-weight: 600;">Bedrooms</td>${bedsRow}</tr>
          <tr style="border-bottom: 1px solid var(--border-subtle);"><td style="padding: 12px 16px; font-weight: 600;">Bathrooms</td>${bathsRow}</tr>
          <tr style="border-bottom: 1px solid var(--border-subtle);"><td style="padding: 12px 16px; font-weight: 600;">Interior SqFt</td>${sqftRow}</tr>
          <tr style="border-bottom: 1px solid var(--border-subtle);"><td style="padding: 12px 16px; font-weight: 600;">Price / SqFt</td>${sqftPriceRow}</tr>
          <tr style="border-bottom: 1px solid var(--border-subtle);"><td style="padding: 12px 16px; font-weight: 600;">Managing Broker</td>${brokerRow}</tr>
          <tr style="border-bottom: 1px solid var(--border-subtle);"><td style="padding: 12px 16px; font-weight: 600;">Key Amenities</td>${amenitiesRow}</tr>
        </tbody>
      </table>
    `;

    compareModal.classList.add('open');
  }

  if (openCompareModalBtn) openCompareModalBtn.addEventListener('click', openComparisonModal);
  if (openCompareHeaderBtn) openCompareHeaderBtn.addEventListener('click', openComparisonModal);
  if (closeCompareBtn && compareModal) {
    closeCompareBtn.addEventListener('click', () => compareModal.classList.remove('open'));
  }
  if (clearCompareBtn) {
    clearCompareBtn.addEventListener('click', () => {
      compareList = [];
      saveCompareState();
      showToast('Comparison tray cleared.', 'fa-solid fa-trash-can');
    });
  }

  // --- 12. FAVORITES DRAWER SLIDE-OVER ---
  const openFavBtn = document.getElementById('openFavoritesBtn');
  const closeFavBtn = document.getElementById('closeFavoritesDrawerBtn');
  const favDrawerPanel = document.getElementById('favoritesDrawerPanel');
  const favBackdrop = document.getElementById('favoritesDrawerBackdrop');
  const favDrawerBody = document.getElementById('favoritesDrawerBody');
  const favEmptyState = document.getElementById('favoritesEmptyState');

  function openFavoritesDrawer() {
    renderFavoritesDrawer();
    if (favDrawerPanel && favBackdrop) {
      favBackdrop.classList.add('active');
      favDrawerPanel.classList.add('open');
    }
  }

  function closeFavoritesDrawer() {
    if (favDrawerPanel && favBackdrop) {
      favBackdrop.classList.remove('active');
      favDrawerPanel.classList.remove('open');
    }
  }

  function renderFavoritesDrawer() {
    if (!favDrawerBody) return;

    if (savedFavorites.length === 0) {
      favDrawerBody.innerHTML = `
        <div class="drawer-empty-state">
          <i class="fa-regular fa-heart"></i>
          <h4>No Saved Residences</h4>
          <p style="font-size: 13px; margin-top: 6px;">Click the heart icon on any estate to store and compare listings here.</p>
        </div>
      `;
      return;
    }

    const favProps = properties.filter(p => savedFavorites.includes(p.id));
    favDrawerBody.innerHTML = favProps.map(p => `
      <div class="drawer-item">
        <img src="${p.image}" alt="${p.title}">
        <div class="drawer-item-info">
          <h5>${p.title}</h5>
          <p>${p.locationName}</p>
          <div class="drawer-item-price">${formatMoney(p.price)}</div>
        </div>
        <button class="drawer-item-remove" data-remove-fav="${p.id}" title="Remove">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    `).join('');

    favDrawerBody.querySelectorAll('button[data-remove-fav]').forEach(btn => {
      btn.addEventListener('click', () => {
        toggleFavorite(btn.dataset.removeFav);
      });
    });
  }

  if (openFavBtn) openFavBtn.addEventListener('click', openFavoritesDrawer);
  if (closeFavBtn) closeFavBtn.addEventListener('click', closeFavoritesDrawer);
  if (favBackdrop) favBackdrop.addEventListener('click', closeFavoritesDrawer);

  const inquireSavedBtn = document.getElementById('inquireAllSavedBtn');
  if (inquireSavedBtn) {
    inquireSavedBtn.addEventListener('click', () => {
      closeFavoritesDrawer();
      showToast(`Private portfolio inquiry sent for ${savedFavorites.length} saved properties.`, 'fa-solid fa-paper-plane');
    });
  }

  // --- 13. BROKER INTRODUCTION & CONTACT TRIGGERS ---
  document.querySelectorAll('.contact-broker-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const broker = btn.dataset.broker;
      showToast(`Introduction request initiated with ${broker}. Our executive assistant will connect you.`, 'fa-solid fa-user-tie');
    });
  });

  // Newsletter subscribe in footer
  const newsletterForm = document.getElementById('footerNewsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletterEmailInput').value;
      newsletterForm.reset();
      showToast(`Subscribed ${email} to Realty Bazaar Quarterly Intelligence.`, 'fa-solid fa-envelope-open-text');
    });
  }

  // About consultation buttons
  const aboutConsultBtn = document.getElementById('aboutConsultationBtn');
  if (aboutConsultBtn) {
    aboutConsultBtn.addEventListener('click', () => {
      showToast('Advisory desk dispatched consultation scheduling link.', 'fa-solid fa-handshake');
    });
  }

  const aboutAuditBtn = document.getElementById('aboutAuditBtn');
  if (aboutAuditBtn) {
    aboutAuditBtn.addEventListener('click', () => {
      showToast('Title & Audit Protocol whitepaper downloaded to your device.', 'fa-solid fa-file-shield');
    });
  }

  // Mobile navigation drawer toggle
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mobilePanel = document.getElementById('mobileNavPanel');
  if (mobileToggle && mobilePanel) {
    mobileToggle.addEventListener('click', () => {
      mobilePanel.classList.toggle('open');
    });

    mobilePanel.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobilePanel.classList.remove('open');
      });
    });
  }

  // Header scroll shadow effect
  window.addEventListener('scroll', () => {
    const header = document.getElementById('siteHeader');
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }
  });

  // App download badges click
  const appDownloadBadges = document.getElementById('appDownloadBadges');
  if (appDownloadBadges) {
    appDownloadBadges.addEventListener('click', () => {
      showToast('Realty Bazaar Private Client App download link sent to your device.', 'fa-solid fa-mobile-screen-button');
    });
  }

  // --- 14. INITIAL BOOTSTRAP ---
  updateFavoritesBadge();
  updateCompareTray();
  renderProperties();
  updateMortgageCalculations();

});
