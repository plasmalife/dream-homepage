// Product Data extracted from 상품카달로그.pptx and product folders
const productsData = [
  {
    id: 'doctor-k',
    name: '(특가) 드림인네이처 닥터-K (DOCTOR-K) 1,000cc - 아미노산·붕소·몰리브덴 액상 비료',
    category: '생육/회복',
    categoryLabel: '생육/회복',
    volume: '1,000cc (1L)',
    brand: '드림인네이처',
    origPrice: 36000,
    price: 24900,
    discountRate: 30,
    badge: 'ALL KILL BEST',
    points: 1245,
    tag: '금토일 3일간 | 12% 추가 결제할인',
    delivery: '스타배송⚡ 내일 도착보장 · 무료배송',
    images: [
      'assets/product_photos/doctor_k_20260517_131038.jpg',
      'assets/product_photos/doctor_k_20260517_131025.jpg',
      'assets/product_photos/doctor_k_20260517_131029.jpg',
      'assets/product_photos/doctor_k_20260517_131034.jpg'
    ],
    shortDesc: '아미노산 + 수용성 붕소/몰리브덴 첨가! 전 생육기 생육 안정과 노화 방지, 수세 회복, 당도·향·선도 관리 액상 비료.',
    features: [
      {
        title: '1. 생육 안정과 수세 회복',
        desc: '노화 방지와 수세 회복에 강력한 활력을 부여하며, 저온/냉해 예방 및 각종 생육장해 발생 후 신속한 생육 회복에 도움을 줍니다.'
      },
      {
        title: '2. 개화·결실 및 품질 관리',
        desc: '비대·개화·결실을 촉진하고 뿌리의 발근 활력을 향상시킵니다. 과실의 당도, 빛깔, 향, 선택성 및 저장 전반의 품질을 극대화합니다.'
      },
      {
        title: '3. 고농축 수용성 보증성분',
        desc: '식물 필수 미량요소와 식물성 아미노산을 조합한 액상 비료로, 수용성 붕소 0.05%, 수용성 몰리브덴 0.0005%가 정밀하게 배합되었습니다.'
      }
    ],
    usage: {
      ratio: '500배 희석',
      ratioNumber: 500,
      crop: '과수류, 채소류, 화훼류 및 전 작물',
      timing: '전 생육기 (1~2주 간격)',
      detail: '물 20L(1말) 당 닥터-K 40mL 희석 후 엽면살포'
    },
    specs: {
      type: '미량요소 복합비료 (액상)',
      volume: '1,000cc (1L)',
      guarantee: '수용성붕소 0.05%, 수용성몰리브덴 0.0005%',
      regNo: '경북안동 44-가-10804호',
      manufacturer: '드림인네이처 (054-841-4720)'
    },
    precautions: [
      '사용 전 병을 충분히 흔들어 희석하십시오.',
      '농약 혼용 시 반드시 소량 시험 살포 후 이상이 없을 때 사용하십시오.',
      '고온기 한낮 살포는 피하고 서늘한 직사광선이 없는 곳에 보관하십시오.'
    ]
  },
  {
    id: 'gangtaja',
    name: '(강력추천) 드림인네이처 강타자 500mL - 노르웨이산 해조추출물 미량요소 복합비료',
    category: '생육/회복',
    categoryLabel: '생육/회복',
    volume: '500mL',
    brand: '드림인네이처',
    origPrice: 28000,
    price: 18900,
    discountRate: 32,
    badge: 'HOT SALE',
    points: 945,
    tag: '스페셜 혜택 | 무료배송',
    delivery: '스타배송⚡ 내일 도착보장 · 무료배송',
    images: [
      'assets/product_photos/gangtaja_20260517_132640.jpg',
      'assets/product_photos/gangtaja_20260517_132645.jpg',
      'assets/product_photos/gangtaja_20260517_132652.jpg'
    ],
    shortDesc: '노르웨이산 고농축 해조추출물 함유! 냉해·고온기 환경 스트레스 차단 및 뿌리 생육 밸런스 완벽 케어.',
    features: [
      {
        title: '1. 저온/냉해 예방 및 안정화',
        desc: '봄철 저온 및 갑작스러운 냉해 환경에서 작물 세포 손상을 줄이고 생육 안정을 돕습니다.'
      },
      {
        title: '2. 고온기 환경 스트레스 저감',
        desc: '여름철 폭염, 고온 지속에 따른 생리적 스트레스를 효율적으로 완화해 작물 시듦을 방지합니다.'
      },
      {
        title: '3. 뿌리 발달 및 생육 밸런스 향상',
        desc: '흡수하기 쉬운 최상의 액상 타입으로 신속하게 작물 내로 침투하여 뿌리 발달과 수확물의 고품질화를 이끌어냅니다.'
      }
    ],
    usage: {
      ratio: '500~1,000배 희석',
      ratioNumber: 500,
      crop: '전 작물',
      timing: '생육 전반 (1~2주 간격)',
      detail: '물 20L 기준 500배(40mL) 또는 1,000배(20mL) 희석 살포'
    },
    specs: {
      type: '미량요소 복합비료',
      volume: '500mL',
      guarantee: '붕소 0.05%, 몰리브덴 0.0005%',
      regNo: '경북안동 44-가-10804호',
      manufacturer: '드림인네이처'
    },
    precautions: [
      '강산성 제품, 석회보르도액, 석회유황합제, 기계유제와는 혼용하지 마십시오.',
      '권장 사용 농도와 간격을 반드시 준수하십시오.'
    ]
  },
  {
    id: 'colorlex',
    name: '(착색특화) 드림인네이처 칼라렉스 (COLOR-LEX) 1L - 아미노산 18종 착색·당도 관리제',
    category: '착색/당도',
    categoryLabel: '착색/당도',
    volume: '1L',
    brand: '드림인네이처',
    origPrice: 42000,
    price: 29800,
    discountRate: 29,
    badge: 'ALL KILL PICK',
    points: 1490,
    tag: '과실 착색 증진 | 무료배송',
    delivery: '스타배송⚡ 내일 도착보장 · 무료배송',
    images: [
      'assets/product_photos/colorlex_20260517_132604.jpg',
      'assets/product_photos/colorlex_20260517_132611.jpg',
      'assets/product_photos/colorlex_20260517_132617.jpg'
    ],
    shortDesc: '인산·가리 최적 조합과 식물성 아미노산 18종! 안토시아닌 색소 발현을 촉진하여 맑은 색깔과 높은 당도를 완성.',
    features: [
      {
        title: '1. 과실 안토시아닌 착색 촉진',
        desc: '식물성 아미노산 18종이 작물 내 색소 합성을 가속화하여 고르고 자연스러운 선홍색/고유 착색을 유도합니다.'
      },
      {
        title: '2. 당도 상승 및 맛·향 개선',
        desc: '인산·가리 화합물과 흡수 증진제 조합이 당 축적을 도와 과실의 축적 당도를 비약적으로 높여줍니다.'
      },
      {
        title: '3. 과실 저장성 향상 및 수세 유지',
        desc: '수확 후 저장성을 향상시키고 과실을 딴 후에도 나무의 수세가 약해지지 않도록 건강한 생장을 돕습니다.'
      }
    ],
    usage: {
      ratio: '엽면살포 500~1,000배 / 관주 1,000m²당 1~1.5L',
      ratioNumber: 750,
      crop: '사과, 포도, 복숭아, 감, 토마토 등 착색 과일',
      timing: '착색 초기 ~ 착색기',
      detail: '엽면살포: 물 20L당 20~40mL / 관주: 300평(1,000m²)당 1~1.5L'
    },
    specs: {
      type: '미량요소 복합비료(액상)',
      volume: '1L',
      guarantee: '붕소 0.05%, 몰리브덴 0.0005%',
      regNo: '경북안동 44-가-10804호',
      manufacturer: '드림인네이처'
    },
    precautions: [
      '단기간 중복 살포나 과다 재살포를 하지 마십시오.',
      '타 착색제와 겹쳐서 살포하지 말고 단용 살포를 권장합니다.'
    ]
  },
  {
    id: 'break',
    name: '(웃자람방지) 드림인네이처 브레이크 (BREAK) 1L - 도장 억제 및 착과·생육 균형제',
    category: '도장/억제',
    categoryLabel: '도장/억제',
    volume: '1L',
    brand: '드림인네이처',
    origPrice: 38000,
    price: 26500,
    discountRate: 30,
    badge: 'STRESS FREE',
    points: 1325,
    tag: '웃자람 즉각 제어 | 인기상품',
    delivery: '스타배송⚡ 내일 도착보장 · 무료배송',
    images: [
      'assets/product_photos/break_20260517_131052.jpg',
      'assets/product_photos/break_20260517_131058.jpg',
      'assets/product_photos/break_20260517_131104.jpg'
    ],
    shortDesc: '과도한 영양생장에 브레이크를! 도장(웃자람)을 효율적으로 제어하여 화방 형성과 결실률을 높여줍니다.',
    features: [
      {
        title: '1. 웃자람(도장) 신속 차단',
        desc: '질소 과다나 우천 시 발생하는 불필요한 줄기/가지의 웃자람을 정밀하게 제어합니다.'
      },
      {
        title: '2. 생식생장 전환 및 꽃눈 유도',
        desc: '영양분을 잎과 줄기에서 꽃과 열매로 신속히 이동시켜 화방 형성과 착과율을 획기적으로 개선합니다.'
      },
      {
        title: '3. 과실 조직 치밀화',
        desc: '열매의 세포 밀도를 높여 비대기 과실이 무르지 않고 단단하게 자라도록 유도합니다.'
      }
    ],
    usage: {
      ratio: '500~1,000배 희석',
      ratioNumber: 500,
      crop: '과수, 채소 및 도장이 우려되는 작물',
      timing: '도장 발생 시기, 신초 신장기',
      detail: '물 20L 기준 40mL 희석 후 작물 전체 엽면살포'
    },
    specs: {
      type: '액상 미량요소 비료',
      volume: '1L',
      guarantee: '붕소, 몰리브덴 및 특수 균형 성분',
      regNo: '경북안동 등록제',
      manufacturer: '드림인네이처'
    },
    precautions: [
      '작물의 약한 생육 상태에서는 살포 농도를 낮추어(1,000배) 사용하십시오.'
    ]
  },
  {
    id: 'super_inkal',
    name: '(열과예방) 드림인네이처 슈퍼인칼 (SUPER INKAL) 1L - 고농축 수용성 인산·칼슘',
    category: '열과/방지',
    categoryLabel: '열과/방지',
    volume: '1L',
    brand: '드림인네이처',
    origPrice: 36000,
    price: 25000,
    discountRate: 30,
    badge: 'BEST SELLER',
    points: 1250,
    tag: '열과·고두병 방지 | 인기제제',
    delivery: '스타배송⚡ 내일 도착보장 · 무료배송',
    images: [
      'assets/product_photos/super_inkal_20260517_131133.jpg',
      'assets/product_photos/super_inkal_20260517_131115.jpg',
      'assets/product_photos/super_inkal_3.jpg'
    ],
    shortDesc: '열과(과실 터짐) 및 고두병, 배꼽썩음병 집중 예방! 칼슘과 인산의 최첨단 킬레이트 융합 기술 적용.',
    features: [
      {
        title: '1. 열과(과피 쪼개짐) 강력 예방',
        desc: '비가 올 때 과실 세포벽이 터지는 열과 현상을 세포벽 강화로 완벽 방지합니다.'
      },
      {
        title: '2. 고두병 및 배꼽썩음병 차단',
        desc: '사과의 고두병, 토마토·고추의 배꼽썩음 현상을 칼슘의 즉각 흡수로 완화시킵니다.'
      },
      {
        title: '3. 수용성 인산·칼슘 동시 공급',
        desc: '서로 침전되기 쉬운 인산과 칼슘을 고도의 킬레이트 기술로 배합하여 흡수 효율을 극대화했습니다.'
      }
    ],
    usage: {
      ratio: '500~1,000배 희석',
      ratioNumber: 500,
      crop: '사과, 배, 토마토, 고추, 귤, 복숭아 등 과수/채소',
      timing: '유과기 ~ 과실 비대기',
      detail: '물 20L 기준 20~40mL 희석 엽면살포'
    },
    specs: {
      type: '수용성 인산칼슘 미량요소 비료',
      volume: '1L',
      guarantee: '수용성 붕소 및 칼슘, 인산 성분',
      regNo: '경북안동 등록제',
      manufacturer: '드림인네이처'
    },
    precautions: [
      '침전물이 생길 수 있으니 섞기 전 통을 흔들어 사용하십시오.'
    ]
  },
  {
    id: 'milbanchul',
    name: '(생리장해) 드림인네이처 밀반출 (MILBANCHUL) 500mL - 밀병·고두탄 집중 처방제',
    category: '열과/방지',
    categoryLabel: '열과/방지',
    volume: '500mL',
    brand: '드림인네이처',
    origPrice: 32000,
    price: 22000,
    discountRate: 31,
    badge: 'QUICK ACTING',
    points: 1100,
    tag: '밀병·반점 해결 | 빠른효과',
    delivery: '스타배송⚡ 내일 도착보장 · 무료배송',
    images: [
      'assets/product_photos/milbanchul_20260517_131311.jpg',
      'assets/product_photos/milbanchul_20260517_131304.jpg',
      'assets/product_photos/milbanchul_20260517_131307.jpg'
    ],
    shortDesc: '과실 밀병, 반점, 열과, 고두 증상에 특화된 속효성 영양제! 과실의 상품성 저하 요인을 원천 차단.',
    features: [
      {
        title: '1. 밀병 및 반점 현상 해결',
        desc: '수확기 과육 내부가 꿀처럼 뭉치거나 반점이 생기는 밀증상을 완화합니다.'
      },
      {
        title: '2. 열과 및 과피 약화 방지',
        desc: '과피를 튼튼하게 단단히 조여주어 비가 온 직후 열과 피해를 대폭 낮춰줍니다.'
      },
      {
        title: '3. 고품질 상품 과실 완성',
        desc: '과실 표피 윤택감을 살리고 과육의 식감과 탄력을 높여 최고 등급 상품을 만들어냅니다.'
      }
    ],
    usage: {
      ratio: '500~1,000배 희석',
      ratioNumber: 500,
      crop: '사과, 포도, 복숭아, 감 등',
      timing: '생육 중후기 ~ 수확 전 20일',
      detail: '물 20L 기준 20~40mL 엽면살포'
    },
    specs: {
      type: '특수 생리장해 비료',
      volume: '500mL',
      guarantee: '수용성 붕소 및 기능성 배합물',
      regNo: '경북안동 등록제',
      manufacturer: '드림인네이처'
    },
    precautions: [
      '정해진 사용 횟수를 준수하십시오.'
    ]
  },
  {
    id: 'inkal',
    name: '(기본에충실) 드림인네이처 인칼 (INKAL) 1L - 수용성 인산칼슘 영양제',
    category: '미량요소',
    categoryLabel: '미량요소',
    volume: '1L',
    brand: '드림인네이처',
    origPrice: 30000,
    price: 21000,
    discountRate: 30,
    badge: 'VALUE PICK',
    points: 1050,
    tag: '가성비 으뜸 | 표준 인산칼슘',
    delivery: '스타배송⚡ 내일 도착보장 · 무료배송',
    images: [
      'assets/product_photos/inkal_20260517_131014.jpg',
      'assets/product_photos/inkal_20260517_130952.jpg',
      'assets/product_photos/inkal_20260517_131004.jpg'
    ],
    shortDesc: '작물의 기초 체력 강화 및 과실 비대/결실 지원! 표준 수용성 인산칼슘 액상 영양제.',
    features: [
      {
        title: '1. 인산과 칼슘의 조화로운 흡수',
        desc: '체내 이동이 느린 칼슘과 인산을 효과적으로 전달하여 줄기와 과실을 건전하게 가꿉니다.'
      },
      {
        title: '2. 작물 병해 내성 증가',
        desc: '세포막을 두껍게 단단하게 다져 병원균 침입 및 기후 변화 스트레스에 강하게 만듭니다.'
      },
      {
        title: '3. 착과율 및 비대 지원',
        desc: '화방 안정과 과실 비대 초기 균형 영양을 안정적으로 공급합니다.'
      }
    ],
    usage: {
      ratio: '500배 희석',
      ratioNumber: 500,
      crop: '전 작물',
      timing: '전 생육기',
      detail: '물 20L 당 40mL 희석'
    },
    specs: {
      type: '액상 복합 비료',
      volume: '1L',
      guarantee: '인산, 칼슘, 붕소 등',
      regNo: '경북안동 44-가-10804호',
      manufacturer: '드림인네이처'
    },
    precautions: [
      '서늘한 곳에 잘 마개를 닫아 보관하세요.'
    ]
  }
];

// Current State
let currentCategory = 'ALL';
let searchQuery = '';
let selectedProduct = null;

// DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  setupCategoryFilters();
  setupSearch();
  setupModalEvents();
  setupCalculator();
});

// Render Products Grid
function renderProducts() {
  const gridContainer = document.getElementById('productGrid');
  if (!gridContainer) return;

  const filtered = productsData.filter(p => {
    const matchCat = (currentCategory === 'ALL') || (p.category === currentCategory);
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const countBadge = document.getElementById('productCount');
  if (countBadge) {
    countBadge.textContent = `${filtered.length} / ${productsData.length}`;
  }

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: white; border-radius: 12px;">
        <p style="font-size: 18px; color: #64748b; font-weight: 700;">조건에 맞는 상품이 없습니다.</p>
        <p style="font-size: 14px; color: #94a3b8; margin-top: 6px;">검색어를 확인하시거나 카테고리를 변경해 보세요.</p>
      </div>
    `;
    return;
  }

  gridContainer.innerHTML = filtered.map(p => `
    <div class="product-card" onclick="openProductModal('${p.id}')">
      <div class="card-image-wrap">
        <img src="${p.images[0]}" alt="${p.name}" loading="lazy" onerror="this.src='assets/product_photos/doctor_k_20260517_131038.jpg'">
        <span class="badge-brand-top">${p.brand}</span>
        <span class="badge-super-day">${p.badge}</span>
        <div class="card-promo-strip">
          <span>${p.tag}</span>
          <span class="highlight">특가 세일</span>
        </div>
      </div>
      <div class="card-body">
        <div>
          <div class="card-title">${p.name}</div>
          <div class="card-desc">${p.shortDesc}</div>
        </div>
        <div class="price-area">
          <div class="price-orig">${p.origPrice.toLocaleString()}원</div>
          <div class="price-main-wrap">
            <span class="discount-rate">${p.discountRate}%</span>
            <span class="price-final">${p.price.toLocaleString()}원</span>
          </div>
          <div class="reward-tag">꼭멤버 최대 ${p.points.toLocaleString()}원 적립</div>
          <div class="card-footer-tags">
            ${p.delivery}
          </div>
          <button class="detail-view-trigger" onclick="event.stopPropagation(); openProductModal('${p.id}')">
            📖 상품 상세 설명서 보기
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Category Filters
function setupCategoryFilters() {
  const pills = document.querySelectorAll('.cat-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.dataset.cat || 'ALL';
      renderProducts();
    });
  });
}

// Search
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderProducts();
    });
  }
}

// Open Product Detail Modal
function openProductModal(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  selectedProduct = product;

  // Fill Modal Content
  document.getElementById('modalProductTitle').textContent = product.name;
  document.getElementById('modalCatTag').textContent = product.categoryLabel;
  document.getElementById('modalBrandTag').textContent = product.brand;
  document.getElementById('modalOrigPrice').textContent = `${product.origPrice.toLocaleString()}원`;
  document.getElementById('modalDiscount').textContent = `${product.discountRate}%`;
  document.getElementById('modalPriceNumber').textContent = `${product.price.toLocaleString()}원`;

  // Quick specs
  document.getElementById('modalSpecType').textContent = product.specs.type;
  document.getElementById('modalSpecVolume').textContent = product.volume;
  document.getElementById('modalSpecGuarantee').textContent = product.specs.guarantee;
  document.getElementById('modalSpecCrop').textContent = product.usage.crop;

  // Images
  const mainImg = document.getElementById('modalMainImg');
  mainImg.src = product.images[0];

  const thumbList = document.getElementById('modalThumbList');
  thumbList.innerHTML = product.images.map((img, idx) => `
    <img src="${img}" class="thumb-img ${idx === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', this)" alt="썸네일">
  `).join('');

  // Features List Tab
  const featuresList = document.getElementById('modalFeaturesList');
  featuresList.innerHTML = product.features.map(f => `
    <div class="feature-card">
      <h4>${f.title}</h4>
      <p>${f.desc}</p>
    </div>
  `).join('');

  // Usage Tab
  document.getElementById('usageRatioText').textContent = product.usage.ratio;
  document.getElementById('usageCropText').textContent = product.usage.crop;
  document.getElementById('usageTimingText').textContent = product.usage.timing;
  document.getElementById('usageDetailText').textContent = product.usage.detail;

  // Precautions Tab
  const precList = document.getElementById('precautionsList');
  precList.innerHTML = product.precautions.map(p => `
    <li style="margin-bottom: 8px; font-size: 14px; color: #334155; line-height: 1.6;">${p}</li>
  `).join('');

  // Initialize Calculator Ratio
  const calcRatioInput = document.getElementById('calcRatioInput');
  if (calcRatioInput) {
    calcRatioInput.value = product.usage.ratioNumber || 500;
  }
  calculateDilution();

  // Reset Tab
  switchTab('features');

  // Show Modal
  const modalOverlay = document.getElementById('detailModalOverlay');
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function changeMainImage(imgUrl, thumbEl) {
  document.getElementById('modalMainImg').src = imgUrl;
  const thumbs = document.querySelectorAll('.thumb-img');
  thumbs.forEach(t => t.classList.remove('active'));
  thumbEl.classList.add('active');
}

// Modal Events
function setupModalEvents() {
  const modalOverlay = document.getElementById('detailModalOverlay');
  const closeBtn = document.getElementById('modalCloseBtn');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Inquiry Modal
  const orderOverlay = document.getElementById('orderModalOverlay');
  const orderCloseBtn = document.getElementById('orderCloseBtn');

  if (orderCloseBtn) {
    orderCloseBtn.addEventListener('click', closeOrderModal);
  }

  if (orderOverlay) {
    orderOverlay.addEventListener('click', (e) => {
      if (e.target === orderOverlay) closeOrderModal();
    });
  }
}

function closeModal() {
  const modalOverlay = document.getElementById('detailModalOverlay');
  if (modalOverlay) modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

function switchTab(tabName) {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });

  tabPanes.forEach(pane => {
    pane.classList.toggle('active', pane.id === `tab-${tabName}`);
  });
}

// Calculator Logic
function setupCalculator() {
  const waterInput = document.getElementById('calcWaterInput');
  const ratioInput = document.getElementById('calcRatioInput');

  if (waterInput) waterInput.addEventListener('input', calculateDilution);
  if (ratioInput) ratioInput.addEventListener('input', calculateDilution);
}

function setWaterPreset(liters) {
  const waterInput = document.getElementById('calcWaterInput');
  if (waterInput) {
    waterInput.value = liters;
    calculateDilution();
  }
}

function calculateDilution() {
  const waterInput = document.getElementById('calcWaterInput');
  const ratioInput = document.getElementById('calcRatioInput');
  const resultBox = document.getElementById('calcResultValue');

  if (!waterInput || !ratioInput || !resultBox) return;

  const waterLiters = parseFloat(waterInput.value) || 0;
  const ratio = parseFloat(ratioInput.value) || 500;

  if (waterLiters <= 0 || ratio <= 0) {
    resultBox.textContent = '0';
    return;
  }

  // Water mL = Water L * 1000
  // Required dose mL = Water mL / Ratio
  const requiredMl = (waterLiters * 1000) / ratio;
  resultBox.textContent = requiredMl >= 10 ? Math.round(requiredMl) : requiredMl.toFixed(1);
}

// Order Inquiry Modal Open
function openOrderInquiry() {
  if (!selectedProduct) return;
  document.getElementById('orderProductName').value = selectedProduct.name;
  const orderOverlay = document.getElementById('orderModalOverlay');
  orderOverlay.classList.add('active');
}

function closeOrderModal() {
  const orderOverlay = document.getElementById('orderModalOverlay');
  if (orderOverlay) orderOverlay.classList.remove('active');
}

function submitOrderForm(event) {
  event.preventDefault();
  closeOrderModal();
  showToast('✅ 상품 문의 및 상담 신청이 정상 접수되었습니다. 담당자가 곧 연락드립니다!');
}

// Toast
function showToast(message) {
  const toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
