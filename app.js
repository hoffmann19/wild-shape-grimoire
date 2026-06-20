// State Management
let state = {
  beasts: [],
  favorites: [],
  customBeasts: [],
  config: {
    ruleset: '2024',
    subclass: 'base',
    level: 2,
    wisModifier: 3,
    hpCurrent: 13,
    hpMax: 13
  },
  activeTab: 'all', // 'all', 'eligible', 'favs', 'custom'
  viewMode: 'grid', // 'grid', 'table'
  filters: {
    search: '',
    size: 'all',
    cr: 'all',
    sortBy: 'default',
    speeds: [] // can contain 'climb', 'swim', 'fly', 'burrow'
  },
  activeWildShape: {
    active: false,
    beastId: null,
    tempHpCurrent: 0,
    tempHpMax: 0,
    hpCurrent: 0, // Used for 2014 rules (beast HP tracker)
    hpMax: 0
  }
};

// DOM Elements
const elements = {
  // Config Controls
  rules2024: document.getElementById('rules-2024'),
  rules2014: document.getElementById('rules-2014'),
  charSubclass: document.getElementById('char-subclass'),
  charLevel: document.getElementById('char-level'),
  wisModifierGroup: document.getElementById('wis-modifier-group'),
  charWis: document.getElementById('char-wis'),
  charHpCurrent: document.getElementById('char-hp-current'),
  charHpMax: document.getElementById('char-hp-max'),
  
  // Constraints display
  limitCr: document.getElementById('limit-cr'),
  limitSwim: document.getElementById('limit-swim'),
  limitFly: document.getElementById('limit-fly'),
  limitTempHpRow: document.getElementById('limit-temphp-row'),
  limitTempHp: document.getElementById('limit-temphp'),

  // Header / Navigation
  tabAll: document.getElementById('tab-all'),
  tabEligible: document.getElementById('tab-eligible'),
  tabFavs: document.getElementById('tab-favs'),
  tabCustom: document.getElementById('tab-custom'),
  btnCreateCustom: document.getElementById('btn-create-custom'),

  // Filters
  filterSearch: document.getElementById('filter-search'),
  viewGrid: document.getElementById('view-grid'),
  viewTable: document.getElementById('view-table'),
  filterSize: document.getElementById('filter-size'),
  filterCr: document.getElementById('filter-cr'),
  filterSort: document.getElementById('filter-sort'),
  speedClimb: document.getElementById('speed-climb'),
  speedSwim: document.getElementById('speed-swim'),
  speedFly: document.getElementById('speed-fly'),
  speedBurrow: document.getElementById('speed-burrow'),

  // Main list containers
  resultsCount: document.getElementById('results-count'),
  resultsRuleIndicator: document.getElementById('results-rule-indicator'),
  gridContainer: document.getElementById('beasts-grid-container'),
  tableContainer: document.getElementById('beasts-table-container'),
  tableBody: document.getElementById('beasts-table-body'),

  // Detail Drawer
  detailDrawerOverlay: document.getElementById('detail-drawer-overlay'),
  detailDrawer: document.getElementById('detail-drawer'),
  detailName: document.getElementById('detail-name'),
  detailMeta: document.getElementById('detail-meta'),
  detailAc: document.getElementById('detail-ac'),
  detailHp: document.getElementById('detail-hp'),
  detailSpeed: document.getElementById('detail-speed'),
  detailCr: document.getElementById('detail-cr'),
  detailSenses: document.getElementById('detail-senses'),
  detailSkills: document.getElementById('detail-skills'),
  detailTraits: document.getElementById('detail-traits'),
  detailActions: document.getElementById('detail-actions'),
  detailClose: document.getElementById('detail-close'),
  btnActivateWildshape: document.getElementById('btn-activate-wildshape'),
  btnDeleteBeast: document.getElementById('btn-delete-beast'),

  // HUD
  hud: document.getElementById('active-wildshape-hud'),
  hudBeastName: document.getElementById('hud-beast-name'),
  hudBeastSub: document.getElementById('hud-beast-sub'),
  hudHpLabel: document.getElementById('hud-hp-label'),
  hudHpCurrent: document.getElementById('hud-hp-current'),
  hudHpMax: document.getElementById('hud-hp-max'),
  hudHpBar: document.getElementById('hud-hp-bar'),
  hudAc: document.getElementById('hud-ac'),
  hudSpeeds: document.getElementById('hud-speeds'),
  hudDmg1: document.getElementById('hud-btn-dmg-1'),
  hudDmg5: document.getElementById('hud-btn-dmg-5'),
  hudHeal1: document.getElementById('hud-btn-heal-1'),
  btnRevertShape: document.getElementById('btn-revert-shape'),

  // Toast container
  rollNotifications: document.getElementById('roll-notifications'),

  // Custom beast modal
  customBeastModal: document.getElementById('custom-beast-modal'),
  btnModalClose: document.getElementById('btn-modal-close'),
  btnModalCancel: document.getElementById('btn-modal-cancel'),
  btnSaveCustomBeast: document.getElementById('btn-save-custom-beast'),
  btnAddCustomAction: document.getElementById('btn-add-custom-action'),
  addedActionsList: document.getElementById('added-actions-list'),

  // Custom beast input fields
  customName: document.getElementById('custom-name'),
  customSize: document.getElementById('custom-size'),
  customAc: document.getElementById('custom-ac'),
  customHp: document.getElementById('custom-hp'),
  customCr: document.getElementById('custom-cr'),
  customSpeedLand: document.getElementById('custom-speed-land'),
  customSpeedClimb: document.getElementById('custom-speed-climb'),
  customSpeedSwim: document.getElementById('custom-speed-swim'),
  customSpeedFly: document.getElementById('custom-speed-fly'),
  customSpeedBurrow: document.getElementById('custom-speed-burrow'),
  customStr: document.getElementById('custom-str'),
  customDex: document.getElementById('custom-dex'),
  customCon: document.getElementById('custom-con'),
  customInt: document.getElementById('custom-int'),
  customWis: document.getElementById('custom-wis'),
  customCha: document.getElementById('custom-cha'),
  customSenses: document.getElementById('custom-senses'),
  customSkills: document.getElementById('custom-skills'),
  
  // Custom action inputs
  actionName: document.getElementById('action-name'),
  actionType: document.getElementById('action-type'),
  attackFields: document.getElementById('attack-fields'),
  actionHit: document.getElementById('action-hit'),
  actionDamage: document.getElementById('action-damage'),
  actionDesc: document.getElementById('action-desc')
};

// Temp holder for custom beast creation actions
let tempCustomActions = [];

// Initialize App
function init() {
  loadLocalStorage();
  state.beasts = [...DEFAULT_BEASTS, ...state.customBeasts];
  setupEventListeners();
  updateFormConstraintsDisplay();
  renderBeasts();
  renderHUD();
}

// Load from LocalStorage
function loadLocalStorage() {
  const savedConfig = localStorage.getItem('ws_config');
  if (savedConfig) {
    try {
      state.config = JSON.parse(savedConfig);
      // Sync inputs
      elements.charLevel.value = state.config.level;
      elements.charSubclass.value = state.config.subclass;
      elements.charWis.value = state.config.wisModifier;
      elements.charHpCurrent.value = state.config.hpCurrent;
      elements.charHpMax.value = state.config.hpMax;
      
      if (state.config.ruleset === '2024') {
        elements.rules2024.classList.add('active');
        elements.rules2014.classList.remove('active');
      } else {
        elements.rules2014.classList.add('active');
        elements.rules2024.classList.remove('active');
      }
      
      toggleWisGroup();
    } catch (e) {
      console.error("Error loading config", e);
    }
  }

  const savedFavs = localStorage.getItem('ws_favorites');
  if (savedFavs) {
    try {
      state.favorites = JSON.parse(savedFavs);
    } catch (e) {
      console.error("Error loading favorites", e);
    }
  }

  const savedCustom = localStorage.getItem('ws_custom_beasts');
  if (savedCustom) {
    try {
      state.customBeasts = JSON.parse(savedCustom);
    } catch (e) {
      console.error("Error loading custom beasts", e);
    }
  }

  const savedWildShape = localStorage.getItem('ws_active_shape');
  if (savedWildShape) {
    try {
      state.activeWildShape = JSON.parse(savedWildShape);
    } catch (e) {
      console.error("Error loading active Wild Shape", e);
    }
  }
}

// Save to LocalStorage
function saveState() {
  localStorage.setItem('ws_config', JSON.stringify(state.config));
  localStorage.setItem('ws_favorites', JSON.stringify(state.favorites));
  localStorage.setItem('ws_custom_beasts', JSON.stringify(state.customBeasts));
  localStorage.setItem('ws_active_shape', JSON.stringify(state.activeWildShape));
}

// Setup Event Listeners
function setupEventListeners() {
  // Edition ruleset toggles
  elements.rules2024.addEventListener('click', () => {
    state.config.ruleset = '2024';
    elements.rules2024.classList.add('active');
    elements.rules2014.classList.remove('active');
    saveState();
    updateFormConstraintsDisplay();
    renderBeasts();
    if (state.activeWildShape.active) {
      // Re-initialize THP or revert if rules break shape
      state.activeWildShape.active = false;
      saveState();
      renderHUD();
      showToast("Wild Shape Reverted", "Ruleset change forced reversion", "system");
    }
  });

  elements.rules2014.addEventListener('click', () => {
    state.config.ruleset = '2014';
    elements.rules2014.classList.add('active');
    elements.rules2024.classList.remove('active');
    saveState();
    updateFormConstraintsDisplay();
    renderBeasts();
    if (state.activeWildShape.active) {
      state.activeWildShape.active = false;
      saveState();
      renderHUD();
      showToast("Wild Shape Reverted", "Ruleset change forced reversion", "system");
    }
  });

  // Character config inputs
  elements.charSubclass.addEventListener('change', (e) => {
    state.config.subclass = e.target.value;
    toggleWisGroup();
    saveState();
    updateFormConstraintsDisplay();
    renderBeasts();
  });

  elements.charLevel.addEventListener('input', (e) => {
    let val = parseInt(e.target.value) || 2;
    val = Math.max(2, Math.min(20, val));
    state.config.level = val;
    saveState();
    updateFormConstraintsDisplay();
    renderBeasts();
  });

  elements.charWis.addEventListener('input', (e) => {
    state.config.wisModifier = parseInt(e.target.value) || 0;
    saveState();
    renderBeasts();
  });

  elements.charHpCurrent.addEventListener('input', (e) => {
    state.config.hpCurrent = parseInt(e.target.value) || 0;
    saveState();
    renderBeasts();
  });

  elements.charHpMax.addEventListener('input', (e) => {
    state.config.hpMax = parseInt(e.target.value) || 1;
    saveState();
    renderBeasts();
  });

  // Tabs navigation
  const tabs = [
    { el: elements.tabAll, id: 'all' },
    { el: elements.tabEligible, id: 'eligible' },
    { el: elements.tabFavs, id: 'favs' },
    { el: elements.tabCustom, id: 'custom' }
  ];

  tabs.forEach(tab => {
    tab.el.addEventListener('click', () => {
      tabs.forEach(t => t.el.classList.remove('active'));
      tab.el.classList.add('active');
      state.activeTab = tab.id;
      renderBeasts();
    });
  });

  // Grid/Table view toggles
  elements.viewGrid.addEventListener('click', () => {
    elements.viewGrid.classList.add('active');
    elements.viewTable.classList.remove('active');
    state.viewMode = 'grid';
    renderBeasts();
  });

  elements.viewTable.addEventListener('click', () => {
    elements.viewTable.classList.add('active');
    elements.viewGrid.classList.remove('active');
    state.viewMode = 'table';
    renderBeasts();
  });

  // Filter Search
  elements.filterSearch.addEventListener('input', (e) => {
    state.filters.search = e.target.value.toLowerCase();
    renderBeasts();
  });

  // Filter Size
  elements.filterSize.addEventListener('change', (e) => {
    state.filters.size = e.target.value;
    renderBeasts();
  });

  // Filter CR
  elements.filterCr.addEventListener('change', (e) => {
    state.filters.cr = e.target.value;
    renderBeasts();
  });

  // Filter Sort By
  elements.filterSort.addEventListener('change', (e) => {
    state.filters.sortBy = e.target.value;
    renderBeasts();
  });

  // Speed Filters
  const speedPills = [elements.speedClimb, elements.speedSwim, elements.speedFly, elements.speedBurrow];
  speedPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const type = pill.dataset.speed;
      if (state.filters.speeds.includes(type)) {
        state.filters.speeds = state.filters.speeds.filter(s => s !== type);
        pill.classList.remove('active');
      } else {
        state.filters.speeds.push(type);
        pill.classList.add('active');
      }
      renderBeasts();
    });
  });

  // Detail Drawer Close
  elements.detailClose.addEventListener('click', closeDrawer);
  elements.detailDrawerOverlay.addEventListener('click', closeDrawer);

  // Wild Shape Activation from Detail drawer
  elements.btnActivateWildshape.addEventListener('click', () => {
    const beastId = elements.btnActivateWildshape.dataset.beastId;
    activateWildShape(beastId);
  });

  // Delete Beast from Detail drawer
  elements.btnDeleteBeast.addEventListener('click', () => {
    const beastId = elements.btnDeleteBeast.dataset.beastId;
    deleteCustomBeast(beastId);
  });

  // HUD Controls
  elements.hudDmg1.addEventListener('click', () => adjustWildShapeHP(-1));
  elements.hudDmg5.addEventListener('click', () => adjustWildShapeHP(-5));
  elements.hudHeal1.addEventListener('click', () => adjustWildShapeHP(1));
  elements.btnRevertShape.addEventListener('click', revertWildShape);

  // Custom Beast Modal Toggles
  elements.btnCreateCustom.addEventListener('click', openCustomModal);
  elements.btnModalClose.addEventListener('click', closeCustomModal);
  elements.btnModalCancel.addEventListener('click', closeCustomModal);
  elements.customBeastModal.addEventListener('click', (e) => {
    if (e.target === elements.customBeastModal) closeCustomModal();
  });

  // Custom Action Type Change
  elements.actionType.addEventListener('change', (e) => {
    if (e.target.value === 'attack') {
      elements.attackFields.style.display = 'grid';
    } else {
      elements.attackFields.style.display = 'none';
    }
  });

  // Add Action/Trait to Custom Beast
  elements.btnAddCustomAction.addEventListener('click', addActionToCustomBeast);

  // Save Custom Beast
  elements.btnSaveCustomBeast.addEventListener('click', saveCustomBeast);
}

function toggleWisGroup() {
  if (state.config.subclass === 'moon' && state.config.ruleset === '2024') {
    elements.wisModifierGroup.style.display = 'flex';
  } else {
    elements.wisModifierGroup.style.display = 'none';
  }
}

// Compute level limits & UI constraints
function getFormConstraints(level, subclass, ruleset) {
  let maxCr = 0.25;
  let swimUnlocked = false;
  let flyUnlocked = false;
  let tempHp = 0;

  if (ruleset === '2024') {
    // 2024 Rules
    swimUnlocked = true; // Swim speed unlocked at level 2 in 2024 ruleset
    flyUnlocked = level >= 8;

    if (subclass === 'moon') {
      // Moon Druid (subclass officially starts at level 3 in 2024)
      if (level < 3) {
        maxCr = 0.25;
        tempHp = level;
      } else {
        maxCr = Math.floor(level / 3);
        tempHp = level * 3;
      }
    } else {
      // Base Druid
      tempHp = level;
      if (level >= 8) {
        maxCr = 1.0;
      } else if (level >= 4) {
        maxCr = 0.5;
      } else {
        maxCr = 0.25;
      }
    }
  } else {
    // 2014 Rules
    swimUnlocked = level >= 4;
    flyUnlocked = level >= 8;

    if (subclass === 'moon') {
      // Moon Druid
      tempHp = 0; // standard 2014 assumes beast HP pool
      if (level >= 6) {
        maxCr = Math.floor(level / 3);
      } else {
        maxCr = 1.0; // level 2 Moon Druids start at CR 1
      }
    } else {
      // Base Druid
      tempHp = 0;
      if (level >= 8) {
        maxCr = 1.0;
      } else if (level >= 4) {
        maxCr = 0.5;
      } else {
        maxCr = 0.25;
      }
    }
  }

  return { maxCr, swimUnlocked, flyUnlocked, tempHp };
}

function updateFormConstraintsDisplay() {
  const c = getFormConstraints(state.config.level, state.config.subclass, state.config.ruleset);
  
  // Format CR limit
  let crText = "CR " + (c.maxCr === 0.25 ? "1/4" : c.maxCr === 0.5 ? "1/2" : c.maxCr === 0.125 ? "1/8" : c.maxCr);
  elements.limitCr.innerText = crText;

  // Swim Speed Limit
  if (c.swimUnlocked) {
    elements.limitSwim.innerText = "Unlocked";
    elements.limitSwim.style.color = "var(--color-accent-green)";
  } else {
    elements.limitSwim.innerText = "Locked (Lv 4)";
    elements.limitSwim.style.color = "var(--color-danger)";
  }

  // Fly Speed Limit
  if (c.flyUnlocked) {
    elements.limitFly.innerText = "Unlocked";
    elements.limitFly.style.color = "var(--color-accent-green)";
  } else {
    elements.limitFly.innerText = "Locked (Lv 8)";
    elements.limitFly.style.color = "var(--color-danger)";
  }

  // Temporary HP (2024 Only)
  if (state.config.ruleset === '2024') {
    elements.limitTempHpRow.style.display = 'flex';
    elements.limitTempHp.innerText = `+${c.tempHp} Temp HP`;
  } else {
    elements.limitTempHpRow.style.display = 'none';
  }

  // Rule indicator
  elements.resultsRuleIndicator.innerText = state.config.ruleset === '2024' ? 'D&D 2024 Rules Active' : 'D&D 2014 Rules Active';
}

// Check if a beast is eligible for the current character config
function isBeastEligible(beast) {
  const c = getFormConstraints(state.config.level, state.config.subclass, state.config.ruleset);
  
  // Check CR
  if (beast.cr > c.maxCr) return false;
  
  // Check speeds
  if (beast.speeds.swim > 0 && !c.swimUnlocked) return false;
  if (beast.speeds.fly > 0 && !c.flyUnlocked) return false;

  return true;
}

// Calculate AC dynamically based on current subclass/rules
function calculateBeastAC(beast) {
  if (state.config.ruleset === '2024' && state.config.subclass === 'moon') {
    const moonAc = 13 + state.config.wisModifier;
    return Math.max(beast.ac, moonAc);
  }
  return beast.ac;
}

// Render the Beasts Grid or Table
function renderBeasts() {
  // 1. Filter the beasts list
  const filtered = state.beasts.filter(beast => {
    // Tab Filter
    if (state.activeTab === 'eligible' && !isBeastEligible(beast)) return false;
    if (state.activeTab === 'favs' && !state.favorites.includes(beast.id)) return false;
    if (state.activeTab === 'custom' && !beast.isCustom) return false;

    // Search Filter
    if (state.filters.search) {
      const q = state.filters.search;
      const nameMatch = beast.name.toLowerCase().includes(q);
      const traitMatch = beast.traits.some(t => t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q));
      const actionMatch = beast.actions.some(a => a.name.toLowerCase().includes(q) || (a.description && a.description.toLowerCase().includes(q)));
      const sizeMatch = beast.size.toLowerCase().includes(q);
      
      if (!nameMatch && !traitMatch && !actionMatch && !sizeMatch) return false;
    }

    // Size Filter
    if (state.filters.size !== 'all' && beast.size !== state.filters.size) return false;

    // CR Filter
    if (state.filters.cr !== 'all') {
      const filterCrVal = parseFloat(state.filters.cr);
      if (beast.cr > filterCrVal) return false;
    }

    // Speed Type Filters
    if (state.filters.speeds.length > 0) {
      for (const speedType of state.filters.speeds) {
        if (!beast.speeds[speedType] || beast.speeds[speedType] <= 0) return false;
      }
    }

    return true;
  });

  // Sort list
  const sortBy = state.filters.sortBy || 'default';
  filtered.sort((a, b) => {
    if (sortBy === 'default') {
      const aFav = state.favorites.includes(a.id) ? 1 : 0;
      const bFav = state.favorites.includes(b.id) ? 1 : 0;
      if (aFav !== bFav) return bFav - aFav;
      if (a.cr !== b.cr) return a.cr - b.cr;
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'name-asc') {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'cr-desc') {
      return b.cr - a.cr;
    }
    if (sortBy === 'cr-asc') {
      return a.cr - b.cr;
    }
    if (sortBy === 'ac-desc') {
      return calculateBeastAC(b) - calculateBeastAC(a);
    }
    if (sortBy === 'ac-asc') {
      return calculateBeastAC(a) - calculateBeastAC(b);
    }
    if (sortBy === 'hp-desc') {
      return b.hp - a.hp;
    }
    if (sortBy === 'hp-asc') {
      return a.hp - b.hp;
    }
    return 0;
  });

  // Update counts
  elements.resultsCount.innerText = `Showing ${filtered.length} beast${filtered.length === 1 ? '' : 's'}`;

  // 2. Render either Grid or Table
  if (state.viewMode === 'grid') {
    elements.gridContainer.style.display = 'grid';
    elements.tableContainer.style.display = 'none';
    renderGrid(filtered);
  } else {
    elements.gridContainer.style.display = 'none';
    elements.tableContainer.style.display = 'block';
    renderTable(filtered);
  }
}

function renderGrid(beastList) {
  elements.gridContainer.innerHTML = '';
  
  if (beastList.length === 0) {
    elements.gridContainer.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem; font-family: var(--font-header);">No beasts matched your filters.</div>`;
    return;
  }

  beastList.forEach(beast => {
    const isFav = state.favorites.includes(beast.id);
    const eligible = isBeastEligible(beast);
    const activeAc = calculateBeastAC(beast);
    
    // HP Display depends on 2014 vs 2024
    let hpDisplay = beast.hp;
    if (state.config.ruleset === '2024') {
      hpDisplay = `${state.config.hpCurrent} / ${state.config.hpMax}`;
    }

    // Build speed badges html
    let speedHtml = '';
    if (beast.speeds.land > 0) speedHtml += `<span class="speed-badge">${beast.speeds.land} ft</span>`;
    if (beast.speeds.climb > 0) speedHtml += `<span class="speed-badge climb">Climb ${beast.speeds.climb} ft</span>`;
    if (beast.speeds.swim > 0) speedHtml += `<span class="speed-badge swim">Swim ${beast.speeds.swim} ft</span>`;
    if (beast.speeds.fly > 0) speedHtml += `<span class="speed-badge fly">Fly ${beast.speeds.fly} ft</span>`;
    if (beast.speeds.burrow > 0) speedHtml += `<span class="speed-badge burrow">Burrow ${beast.speeds.burrow} ft</span>`;

    // Build traits & actions HTML
    let traitsHtml = '';
    const abList = [];
    if (beast.traits) {
      beast.traits.forEach(t => abList.push({ name: t.name, type: 'trait' }));
    }
    if (beast.actions) {
      beast.actions.forEach(a => abList.push({ name: a.name, type: 'action' }));
    }

    if (abList.length > 0) {
      traitsHtml = '<div class="card-traits">';
      abList.forEach(item => {
        const badgeClass = item.type === 'action' ? 'action-badge' : '';
        traitsHtml += `<span class="trait-badge ${badgeClass}">${item.name}</span>`;
      });
      traitsHtml += '</div>';
    }

    // CR display helper
    let crStr = beast.cr === 0.125 ? '1/8' : beast.cr === 0.25 ? '1/4' : beast.cr === 0.5 ? '1/2' : beast.cr;

    const card = document.createElement('div');
    card.className = `beast-card ${eligible ? '' : 'locked'}`;
    card.innerHTML = `
      <div class="card-header" style="margin-bottom: 0.15rem;">
        <div class="card-title-group">
          <h3 style="font-size: 0.95rem; display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
            ${beast.name}
            <span class="sub" style="font-size: 0.7rem; font-family: var(--font-header); font-weight: normal; color: var(--text-muted); padding-left: 2px;">CR ${crStr}</span>
          </h3>
          <span class="sub" style="font-size: 0.7rem; color: var(--text-muted);">${beast.size}</span>
        </div>
        <button class="fav-star ${isFav ? 'active' : ''}" data-id="${beast.id}">★</button>
      </div>

      <div class="card-compact-stats" style="font-size: 0.75rem; display: flex; gap: 0.5rem; color: var(--text-body); border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.25rem; margin-bottom: 0.25rem;">
        <span>AC <strong style="color: var(--color-accent-gold);">${activeAc}</strong></span>
        <span style="color: var(--text-muted);">|</span>
        <span>HP <strong style="color: var(--text-gold); font-size: ${state.config.ruleset === '2024' ? '0.75rem' : '0.8rem'}">${hpDisplay}</strong></span>
      </div>

      <div class="card-speeds" style="gap: 0.25rem;">
        ${speedHtml}
      </div>

      ${traitsHtml}
      
      ${eligible ? '' : '<div style="position: absolute; bottom: 4px; right: 4px;"><span class="badge-locked" style="font-size: 0.6rem; padding: 0.05rem 0.25rem;">Locked</span></div>'}
    `;

    // Card click event (ignore if click star)
    card.addEventListener('click', (e) => {
      if (e.target.classList.contains('fav-star')) {
        e.stopPropagation();
        toggleFavorite(beast.id);
        renderBeasts();
        return;
      }
      openDrawer(beast);
    });

    elements.gridContainer.appendChild(card);
  });
}

function renderTable(beastList) {
  elements.tableBody.innerHTML = '';

  if (beastList.length === 0) {
    elements.tableBody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 3rem; font-family: var(--font-header);">No beasts matched your filters.</td></tr>`;
    return;
  }

  beastList.forEach(beast => {
    const isFav = state.favorites.includes(beast.id);
    const eligible = isBeastEligible(beast);
    const activeAc = calculateBeastAC(beast);

    let hpDisplay = beast.hp;
    if (state.config.ruleset === '2024') {
      hpDisplay = `${state.config.hpCurrent} / ${state.config.hpMax}`;
    }

    let speedHtml = '';
    if (beast.speeds.land > 0) speedHtml += `<span class="speed-badge">${beast.speeds.land} ft</span>`;
    if (beast.speeds.climb > 0) speedHtml += `<span class="speed-badge climb">Climb ${beast.speeds.climb} ft</span>`;
    if (beast.speeds.swim > 0) speedHtml += `<span class="speed-badge swim">Swim ${beast.speeds.swim} ft</span>`;
    if (beast.speeds.fly > 0) speedHtml += `<span class="speed-badge fly">Fly ${beast.speeds.fly} ft</span>`;
    if (beast.speeds.burrow > 0) speedHtml += `<span class="speed-badge burrow">Burrow ${beast.speeds.burrow} ft</span>`;

    // Build traits & actions HTML for table
    let tableTraitsHtml = '';
    const abTableList = [];
    if (beast.traits) {
      beast.traits.forEach(t => abTableList.push({ name: t.name, type: 'trait' }));
    }
    if (beast.actions) {
      beast.actions.forEach(a => abTableList.push({ name: a.name, type: 'action' }));
    }

    if (abTableList.length > 0) {
      tableTraitsHtml = '<div class="card-traits" style="margin-bottom: 0.4rem;">';
      abTableList.forEach(item => {
        const badgeClass = item.type === 'action' ? 'action-badge' : '';
        tableTraitsHtml += `<span class="trait-badge ${badgeClass}">${item.name}</span>`;
      });
      tableTraitsHtml += '</div>';
    }

    let crStr = beast.cr === 0.125 ? '1/8' : beast.cr === 0.25 ? '1/4' : beast.cr === 0.5 ? '1/2' : beast.cr;

    const row = document.createElement('tr');
    row.className = eligible ? '' : 'locked';
    row.innerHTML = `
      <td><button class="fav-star ${isFav ? 'active' : ''}" data-id="${beast.id}">★</button></td>
      <td>
        <span class="table-title">${beast.name}</span>
        <div class="table-sub">${beast.size} Beast, CR ${crStr} ${eligible ? '' : '<span style="color: var(--color-danger); margin-left: 5px;">(Locked)</span>'}</div>
      </td>
      <td class="table-ac">${activeAc}</td>
      <td class="table-hp">${hpDisplay}</td>
      <td><div class="card-speeds">${speedHtml}</div></td>
      <td>
        ${tableTraitsHtml}
        <span style="font-size: 0.85rem; color: var(--text-muted);">${beast.senses || 'Normal senses'}</span>
      </td>
    `;

    row.addEventListener('click', (e) => {
      if (e.target.classList.contains('fav-star')) {
        e.stopPropagation();
        toggleFavorite(beast.id);
        renderBeasts();
        return;
      }
      openDrawer(beast);
    });

    elements.tableBody.appendChild(row);
  });
}

// Toggle favorites lists
function toggleFavorite(id) {
  if (state.favorites.includes(id)) {
    state.favorites = state.favorites.filter(fId => fId !== id);
    showToast("Favorites Updated", "Removed from favorites list", "system");
  } else {
    state.favorites.push(id);
    showToast("Favorites Updated", "Added to favorites list", "system");
  }
  saveState();
}

// Detail Drawer Actions
function openDrawer(beast) {
  const eligible = isBeastEligible(beast);
  const calculatedAc = calculateBeastAC(beast);
  
  elements.detailName.innerText = beast.name;
  
  let crStr = beast.cr === 0.125 ? '1/8' : beast.cr === 0.25 ? '1/4' : beast.cr === 0.5 ? '1/2' : beast.cr;
  elements.detailMeta.innerText = `${beast.size} Beast, CR ${crStr}`;

  elements.detailAc.innerText = calculatedAc;
  
  if (state.config.ruleset === '2024') {
    elements.detailHp.innerText = `${state.config.hpCurrent} / ${state.config.hpMax}`;
    elements.detailHp.style.fontSize = '0.9rem';
  } else {
    elements.detailHp.innerText = beast.hp;
    elements.detailHp.style.fontSize = '1.2rem';
  }

  // Speed text compile
  let speedsList = [];
  if (beast.speeds.land > 0) speedsList.push(`${beast.speeds.land} ft.`);
  if (beast.speeds.climb > 0) speedsList.push(`climb ${beast.speeds.climb} ft.`);
  if (beast.speeds.swim > 0) speedsList.push(`swim ${beast.speeds.swim} ft.`);
  if (beast.speeds.fly > 0) speedsList.push(`fly ${beast.speeds.fly} ft.`);
  if (beast.speeds.burrow > 0) speedsList.push(`burrow ${beast.speeds.burrow} ft.`);
  elements.detailSpeed.innerText = speedsList.join(', ');

  elements.detailCr.innerText = crStr;
  elements.detailSenses.innerText = beast.senses || 'Normal senses';
  
  // Skills list compiler
  let skillsList = [];
  if (beast.skills) {
    for (const [skill, val] of Object.entries(beast.skills)) {
      skillsList.push(`${skill.charAt(0).toUpperCase() + skill.slice(1)} +${val}`);
    }
  }
  elements.detailSkills.innerText = skillsList.length > 0 ? skillsList.join(', ') : 'None';

  // Render Stats
  const statKeys = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
  statKeys.forEach(key => {
    const val = beast.stats[key];
    const mod = Math.floor((val - 10) / 2);
    const modStr = mod >= 0 ? `+${mod}` : `${mod}`;
    
    document.getElementById(`score-${key}`).innerText = val;
    document.getElementById(`mod-${key}`).innerText = modStr;
  });

  // Render Traits
  elements.detailTraits.innerHTML = '';
  if (beast.traits && beast.traits.length > 0) {
    beast.traits.forEach(trait => {
      const traitDiv = document.createElement('div');
      traitDiv.className = 'trait-item';
      traitDiv.innerHTML = `<strong>${trait.name}</strong><p>${trait.description}</p>`;
      elements.detailTraits.appendChild(traitDiv);
    });
  } else {
    elements.detailTraits.innerHTML = `<span style="color: var(--text-muted); font-size: 0.85rem;">No unique passive traits.</span>`;
  }

  // Render Actions & Dice Roller Bindings
  elements.detailActions.innerHTML = '';
  if (beast.actions && beast.actions.length > 0) {
    beast.actions.forEach(act => {
      const item = document.createElement('div');
      item.className = 'action-item';
      
      let rollsHtml = '';
      if (act.attackBonus !== null) {
        rollsHtml += `
          <button class="roll-btn attack-btn" data-name="${beast.name}: ${act.name} (Attack)" data-bonus="${act.attackBonus}">
            <svg viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 3.99L18.8 19H5.2L12 5.99zM11 11h2v4h-2v-4zm0 6h2v2h-2v-2z"/></svg>
            Attack +${act.attackBonus}
          </button>
        `;
      }
      if (act.damage) {
        rollsHtml += `
          <button class="roll-btn damage-btn" data-name="${beast.name}: ${act.name} (Damage)" data-formula="${act.damage}">
            💥 Roll ${act.damage}
          </button>
        `;
      }

      item.innerHTML = `
        <div class="action-item-header">
          <h5>${act.name}</h5>
          <div class="action-pills">${rollsHtml}</div>
        </div>
        <p>${act.description}</p>
      `;

      // Dice roll listeners
      const attackBtn = item.querySelector('.attack-btn');
      if (attackBtn) {
        attackBtn.addEventListener('click', () => {
          const name = attackBtn.dataset.name;
          const bonus = parseInt(attackBtn.dataset.bonus);
          rollD20Attack(name, bonus);
        });
      }

      const damageBtn = item.querySelector('.damage-btn');
      if (damageBtn) {
        damageBtn.addEventListener('click', () => {
          const name = damageBtn.dataset.name;
          const formula = damageBtn.dataset.formula;
          rollDamage(name, formula);
        });
      }

      elements.detailActions.appendChild(item);
    });
  } else {
    elements.detailActions.innerHTML = `<span style="color: var(--text-muted); font-size: 0.85rem;">No actions.</span>`;
  }

  // Customize Wild Shape button
  elements.btnActivateWildshape.dataset.beastId = beast.id;
  if (eligible) {
    elements.btnActivateWildshape.disabled = false;
    elements.btnActivateWildshape.style.opacity = '1';
    elements.btnActivateWildshape.style.pointerEvents = 'auto';
  } else {
    elements.btnActivateWildshape.disabled = true;
    elements.btnActivateWildshape.style.opacity = '0.4';
    elements.btnActivateWildshape.style.pointerEvents = 'none';
  }

  // Delete button if custom beast
  if (beast.isCustom) {
    elements.btnDeleteBeast.style.display = 'flex';
    elements.btnDeleteBeast.dataset.beastId = beast.id;
  } else {
    elements.btnDeleteBeast.style.display = 'none';
  }

  // Open UI components
  elements.detailDrawerOverlay.classList.add('open');
  elements.detailDrawer.classList.add('open');
}

function closeDrawer() {
  elements.detailDrawerOverlay.classList.remove('open');
  elements.detailDrawer.classList.remove('open');
}

// Dice Roller Logic
function rollD20Attack(actionName, bonus) {
  const d20 = Math.floor(Math.random() * 20) + 1;
  const total = d20 + bonus;
  let natStatus = '';
  
  if (d20 === 20) natStatus = 'nat20';
  if (d20 === 1) natStatus = 'nat1';

  let formulaText = `d20 (${d20}) + ${bonus}`;
  let rollSummary = `Attack Roll`;
  
  showRollToast(actionName, rollSummary, formulaText, total, natStatus);
}

function rollDamage(actionName, formula) {
  // Regex to match formulas like '2d4+2', '1d10+2', '1d6', '1'
  const formulaRegex = /^(\d+)d(\d+)([+-]\d+)?$/i;
  const match = formula.trim().match(formulaRegex);
  
  if (match) {
    const diceCount = parseInt(match[1]);
    const diceSides = parseInt(match[2]);
    const modifier = match[3] ? parseInt(match[3]) : 0;
    
    let rolls = [];
    let sum = 0;
    for (let i = 0; i < diceCount; i++) {
      const roll = Math.floor(Math.random() * diceSides) + 1;
      rolls.push(roll);
      sum += roll;
    }
    const total = sum + modifier;
    
    const rollsList = rolls.join(' + ');
    const modSign = modifier >= 0 ? `+${modifier}` : `${modifier}`;
    const formulaText = `[${rollsList}] ${modifier !== 0 ? modSign : ''}`;
    
    showRollToast(actionName, "Damage Roll", formulaText, total, '');
  } else {
    // If it's just a flat number
    const flatVal = parseInt(formula);
    if (!isNaN(flatVal)) {
      showRollToast(actionName, "Damage Roll", "Flat value", flatVal, '');
    } else {
      // Fallback
      showToast("Error", "Could not parse damage formula: " + formula, "system");
    }
  }
}

function showRollToast(title, subtitle, formula, result, natStatus) {
  const toast = document.createElement('div');
  toast.className = 'roll-toast';
  
  let labelText = subtitle;
  let resultClass = '';
  
  if (natStatus === 'nat20') {
    labelText = 'CRITICAL HIT!';
    resultClass = 'nat20';
  } else if (natStatus === 'nat1') {
    labelText = 'CRITICAL FAIL!';
    resultClass = 'nat1';
  }

  toast.innerHTML = `
    <div class="roll-toast-header">
      <span>${labelText}</span>
      <span>🎲 dnd dice</span>
    </div>
    <div class="roll-toast-body">
      <div class="roll-toast-formula-group">
        <span class="roll-toast-name">${title}</span>
        <span class="roll-toast-formula">${formula}</span>
      </div>
      <div class="roll-toast-result-box">
        <span class="roll-toast-result ${resultClass}">${result}</span>
        <span class="roll-toast-label">Total</span>
      </div>
    </div>
  `;

  elements.rollNotifications.appendChild(toast);

  // Auto remove after 5 seconds
  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 5000);
}

function showToast(title, desc, type) {
  const toast = document.createElement('div');
  toast.className = 'roll-toast';
  toast.style.borderColor = type === 'system' ? 'var(--color-accent-green)' : 'var(--color-accent-gold)';
  
  toast.innerHTML = `
    <div class="roll-toast-header">
      <span>${title.toUpperCase()}</span>
    </div>
    <div class="roll-toast-body" style="padding: 0.25rem 0;">
      <span style="font-size: 0.9rem; color: var(--text-body);">${desc}</span>
    </div>
  `;

  elements.rollNotifications.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
}

// Active Wild Shape Logic
function activateWildShape(beastId) {
  const beast = state.beasts.find(b => b.id === beastId);
  if (!beast) return;

  const constraints = getFormConstraints(state.config.level, state.config.subclass, state.config.ruleset);
  
  state.activeWildShape.active = true;
  state.activeWildShape.beastId = beastId;

  if (state.config.ruleset === '2024') {
    // 2024 Rules: retain your own HP, but gain Temp HP pool based on constraints
    state.activeWildShape.tempHpMax = constraints.tempHp;
    state.activeWildShape.tempHpCurrent = constraints.tempHp;
    state.activeWildShape.hpMax = state.config.hpMax;
    state.activeWildShape.hpCurrent = state.config.hpCurrent;
  } else {
    // 2014 Rules: assume beast's HP pool
    state.activeWildShape.tempHpMax = 0;
    state.activeWildShape.tempHpCurrent = 0;
    state.activeWildShape.hpMax = beast.hp;
    state.activeWildShape.hpCurrent = beast.hp;
  }

  saveState();
  renderHUD();
  closeDrawer();
  
  // Highlight tab or show visual feedback
  showToast("Wild Shape Activated", `Transformed into ${beast.name}!`, "system");
}

function renderHUD() {
  if (!state.activeWildShape.active) {
    elements.hud.classList.remove('active');
    // Remove class from tabs
    elements.tabAll.classList.remove('active-wildshape-tab');
    return;
  }

  const beast = state.beasts.find(b => b.id === state.activeWildShape.beastId);
  if (!beast) {
    state.activeWildShape.active = false;
    saveState();
    elements.hud.classList.remove('active');
    return;
  }

  elements.hud.classList.add('active');
  elements.hudBeastName.innerText = beast.name;
  elements.hudBeastSub.innerText = `${beast.size} Beast, CR ${beast.cr === 0.25 ? '1/4' : beast.cr === 0.5 ? '1/2' : beast.cr}`;

  // Speed text compilation
  let speedsList = [];
  if (beast.speeds.land > 0) speedsList.push(`${beast.speeds.land}ft`);
  if (beast.speeds.climb > 0) speedsList.push(`Climb ${beast.speeds.climb}ft`);
  if (beast.speeds.swim > 0) speedsList.push(`Swim ${beast.speeds.swim}ft`);
  if (beast.speeds.fly > 0) speedsList.push(`Fly ${beast.speeds.fly}ft`);
  if (beast.speeds.burrow > 0) speedsList.push(`Burrow ${beast.speeds.burrow}ft`);
  elements.hudSpeeds.innerText = speedsList.join(', ');

  // AC Display
  elements.hudAc.innerText = calculateBeastAC(beast);

  // HP Display
  if (state.config.ruleset === '2024') {
    elements.hudHpLabel.innerText = "Temporary HP:";
    elements.hudHpCurrent.innerText = state.activeWildShape.tempHpCurrent;
    elements.hudHpMax.innerText = state.activeWildShape.tempHpMax;
    
    // Bar percentage
    const pct = state.activeWildShape.tempHpMax > 0 ? (state.activeWildShape.tempHpCurrent / state.activeWildShape.tempHpMax) * 100 : 0;
    elements.hudHpBar.style.width = `${pct}%`;
    elements.hudHpBar.className = "hud-hp-bar temp-hp-bar";
    if (pct <= 0) elements.hudHpBar.classList.add('empty');
  } else {
    elements.hudHpLabel.innerText = "Beast HP:";
    elements.hudHpCurrent.innerText = state.activeWildShape.hpCurrent;
    elements.hudHpMax.innerText = state.activeWildShape.hpMax;
    
    const pct = state.activeWildShape.hpMax > 0 ? (state.activeWildShape.hpCurrent / state.activeWildShape.hpMax) * 100 : 0;
    elements.hudHpBar.style.width = `${pct}%`;
    elements.hudHpBar.className = "hud-hp-bar";
    if (pct <= 0) elements.hudHpBar.classList.add('empty');
  }
}

function adjustWildShapeHP(amount) {
  if (!state.activeWildShape.active) return;

  if (state.config.ruleset === '2024') {
    // 2024 Rules: Adjust Temp HP pool
    let cur = state.activeWildShape.tempHpCurrent + amount;
    cur = Math.max(0, Math.min(state.activeWildShape.tempHpMax, cur));
    state.activeWildShape.tempHpCurrent = cur;
    
    if (cur === 0 && amount < 0) {
      // In D&D, excess damage carries over to normal HP
      showToast("Temp HP Depleted", "Wild Shape temporary health pool has hit 0!", "system");
    }
  } else {
    // 2014 Rules: Adjust Beast HP
    let cur = state.activeWildShape.hpCurrent + amount;
    cur = Math.max(0, Math.min(state.activeWildShape.hpMax, cur));
    state.activeWildShape.hpCurrent = cur;
    
    if (cur === 0) {
      revertWildShape();
      showToast("Form Defeated", "Beast health hit 0, reverted to human!", "system");
      return;
    }
  }

  saveState();
  renderHUD();
}

function revertWildShape() {
  if (!state.activeWildShape.active) return;
  
  state.activeWildShape.active = false;
  state.activeWildShape.beastId = null;
  
  saveState();
  renderHUD();
  showToast("Reverted", "Returned to humanoid form", "system");
}

// Custom Beast Modal Actions
function openCustomModal() {
  tempCustomActions = [];
  elements.addedActionsList.innerHTML = '';
  
  // Reset form inputs
  elements.customName.value = '';
  elements.customSize.value = 'Large';
  elements.customAc.value = '12';
  elements.customHp.value = '15';
  elements.customCr.value = '0.25';
  elements.customSpeedLand.value = '30';
  elements.customSpeedClimb.value = '0';
  elements.customSpeedSwim.value = '0';
  elements.customSpeedFly.value = '0';
  elements.customSpeedBurrow.value = '0';
  
  elements.customStr.value = '10';
  elements.customDex.value = '10';
  elements.customCon.value = '10';
  elements.customInt.value = '2';
  elements.customWis.value = '10';
  elements.customCha.value = '5';
  
  elements.customSenses.value = '';
  elements.customSkills.value = '';
  
  elements.actionName.value = '';
  elements.actionType.value = 'attack';
  elements.attackFields.style.display = 'grid';
  elements.actionHit.value = '4';
  elements.actionDamage.value = '';
  elements.actionDesc.value = '';

  elements.customBeastModal.classList.add('open');
}

function closeCustomModal() {
  elements.customBeastModal.classList.remove('open');
}

function addActionToCustomBeast(e) {
  e.preventDefault();
  
  const name = elements.actionName.value.trim();
  const type = elements.actionType.value;
  const desc = elements.actionDesc.value.trim();
  
  if (!name) {
    showToast("Invalid Action", "Action/Trait must have a name", "system");
    return;
  }

  let actionObj = null;

  if (type === 'attack') {
    const hit = parseInt(elements.actionHit.value) || 0;
    const formula = elements.actionDamage.value.trim();
    
    actionObj = {
      id: 'act_' + Date.now(),
      name: name,
      type: "Melee Weapon Attack",
      attackBonus: hit,
      damage: formula || null,
      damageType: "slashing", // default placeholder
      description: desc || `Reach 5 ft., one target. Hit: ${formula || ''} damage.`
    };
  } else {
    // Passive Trait
    actionObj = {
      id: 'trait_' + Date.now(),
      name: name,
      type: "trait",
      description: desc
    };
  }

  tempCustomActions.push(actionObj);
  renderAddedActionsList();

  // Clear inputs
  elements.actionName.value = '';
  elements.actionDamage.value = '';
  elements.actionDesc.value = '';
}

function renderAddedActionsList() {
  elements.addedActionsList.innerHTML = '';
  tempCustomActions.forEach((act, idx) => {
    const pill = document.createElement('div');
    pill.className = 'custom-action-pill';
    
    let sub = act.type === 'trait' ? 'Passive Trait' : `Attack +${act.attackBonus} (${act.damage || 'No dmg'})`;
    pill.innerHTML = `
      <div>
        <strong>${act.name}</strong> - <span style="font-size: 0.8rem; color: var(--text-muted);">${sub}</span>
      </div>
      <button class="btn-remove-pill" data-idx="${idx}">✕</button>
    `;
    
    pill.querySelector('.btn-remove-pill').addEventListener('click', (e) => {
      e.preventDefault();
      const removeIdx = parseInt(e.target.dataset.idx);
      tempCustomActions.splice(removeIdx, 1);
      renderAddedActionsList();
    });

    elements.addedActionsList.appendChild(pill);
  });
}

function saveCustomBeast(e) {
  e.preventDefault();
  
  const name = elements.customName.value.trim();
  if (!name) {
    showToast("Validation Error", "Name is required.", "system");
    return;
  }

  const size = elements.customSize.value;
  const ac = parseInt(elements.customAc.value) || 10;
  const hp = parseInt(elements.customHp.value) || 10;
  const cr = parseFloat(elements.customCr.value);
  
  const speeds = {
    land: parseInt(elements.customSpeedLand.value) || 0,
    climb: parseInt(elements.customSpeedClimb.value) || 0,
    swim: parseInt(elements.customSpeedSwim.value) || 0,
    fly: parseInt(elements.customSpeedFly.value) || 0,
    burrow: parseInt(elements.customSpeedBurrow.value) || 0
  };

  const stats = {
    str: parseInt(elements.customStr.value) || 10,
    dex: parseInt(elements.customDex.value) || 10,
    con: parseInt(elements.customCon.value) || 10,
    int: parseInt(elements.customInt.value) || 2,
    wis: parseInt(elements.customWis.value) || 10,
    cha: parseInt(elements.customCha.value) || 10
  };

  const senses = elements.customSenses.value.trim() || "Passive Perception 10";
  
  // Parse skills
  let skills = {};
  const skillsInput = elements.customSkills.value.trim();
  if (skillsInput) {
    const parts = skillsInput.split(',');
    parts.forEach(p => {
      const match = p.trim().match(/^([a-zA-Z\s]+)\s*\+?(-?\d+)$/);
      if (match) {
        const skillName = match[1].trim().toLowerCase();
        const skillVal = parseInt(match[2]);
        skills[skillName] = skillVal;
      }
    });
  }

  // Separate traits from actions
  const traits = tempCustomActions.filter(a => a.type === 'trait');
  const actions = tempCustomActions.filter(a => a.type !== 'trait');

  const customBeast = {
    id: 'custom_' + Date.now(),
    name: name,
    size: size,
    type: "Beast",
    cr: cr,
    ac: ac,
    hp: hp,
    speeds: speeds,
    stats: stats,
    skills: skills,
    senses: senses,
    traits: traits,
    actions: actions,
    isCustom: true
  };

  state.customBeasts.push(customBeast);
  state.beasts.push(customBeast);
  
  saveState();
  renderBeasts();
  closeCustomModal();
  showToast("Custom Beast Created", `Added ${name} to your Grimoire!`, "system");
}

function deleteCustomBeast(id) {
  if (confirm("Are you sure you want to delete this custom beast form?")) {
    state.customBeasts = state.customBeasts.filter(b => b.id !== id);
    state.beasts = state.beasts.filter(b => b.id !== id);
    
    // Remove from favorites if favorited
    state.favorites = state.favorites.filter(favId => favId !== id);

    if (state.activeWildShape.active && state.activeWildShape.beastId === id) {
      state.activeWildShape.active = false;
      state.activeWildShape.beastId = null;
    }

    saveState();
    renderBeasts();
    renderHUD();
    closeDrawer();
    showToast("Beast Deleted", "Custom form removed from Grimoire", "system");
  }
}

// Start execution
window.onload = init;
