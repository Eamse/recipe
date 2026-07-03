/**
 * 초기 레시피 샘플 데이터
 * category: korean | chinese | japanese | western | dessert
 * difficulty: easy | medium | hard
 */
const INITIAL_RECIPES = [
  // ── 한식 ──────────────────────────────────────────────────
  {
    id: 1751000000001,
    title: '감자볶음',
    category: 'korean',
    time: 20,
    difficulty: 'easy',
    emoji: '🥔',
    ingredients: ['감자 2개', '양파 1/2개', '식용유 1큰술', '소금 약간', '후추 약간'],
    steps: [
      '감자를 얇게 채 썬 뒤 찬물에 5분간 담가 전분을 뺀다.',
      '양파는 채 썬다.',
      '팬에 식용유를 두르고 중불로 달군 뒤 감자를 넣고 3분간 볶는다.',
      '양파를 넣고 2분 더 볶으면서 소금, 후추로 간을 맞춘다.',
      '감자가 투명해지면 불을 끄고 접시에 담아낸다.',
    ],
    createdAt: '2026-06-01',
  },
  {
    id: 1751000000002,
    title: '된장찌개',
    category: 'korean',
    time: 30,
    difficulty: 'medium',
    emoji: '🍲',
    ingredients: ['두부 1/2모', '호박 1/3개', '감자 1개', '된장 2큰술', '멸치 다시마 육수 600ml', '대파 1/2대', '청양고추 1개'],
    steps: [
      '멸치와 다시마로 육수를 낸다.',
      '두부는 깍둑썰기, 호박·감자는 반달 모양으로 썬다.',
      '육수가 끓으면 된장을 체에 걸러 풀어 넣는다.',
      '감자를 먼저 넣어 5분간 끓인 뒤 두부, 호박, 청양고추를 넣는다.',
      '3분 더 끓이고 대파를 넣어 한 소끔 끓인다.',
    ],
    createdAt: '2026-06-02',
  },
  {
    id: 1751000000003,
    title: '김치볶음밥',
    category: 'korean',
    time: 15,
    difficulty: 'easy',
    emoji: '🍳',
    ingredients: ['밥 1공기', '묵은 김치 1/2컵', '돼지고기 다짐육 80g', '참기름 1작은술', '간장 1큰술', '계란 1개'],
    steps: [
      '팬에 기름을 두르고 돼지고기를 볶는다.',
      '썰어 둔 김치를 넣고 함께 볶는다.',
      '밥을 넣고 간장을 둘러 볶는다.',
      '불을 끄기 전 참기름을 넣고 섞는다.',
      '계란 후라이를 올려 낸다.',
    ],
    createdAt: '2026-06-03',
  },

  // ── 중식 ──────────────────────────────────────────────────
  {
    id: 1751000000004,
    title: '마파두부',
    category: 'chinese',
    time: 25,
    difficulty: 'medium',
    emoji: '🌶️',
    ingredients: ['두부 1모', '돼지 다짐육 100g', '두반장 1.5큰술', '마늘 3쪽', '생강 1조각', '대파 1/2대', '전분물(전분 1큰술+물 2큰술)', '참기름', '식용유'],
    steps: [
      '두부는 깍둑썰기하고 끓는 물에 1분간 데쳐 물기를 뺀다.',
      '팬에 기름을 두르고 두반장, 마늘, 생강을 볶아 향을 낸다.',
      '다짐육을 넣어 볶다가 물 200ml를 붓는다.',
      '두부를 넣고 3분간 조린 뒤 전분물을 돌려 부어 농도를 맞춘다.',
      '대파와 참기름을 넣어 마무리한다.',
    ],
    createdAt: '2026-06-04',
  },
  {
    id: 1751000000005,
    title: '계란볶음밥',
    category: 'chinese',
    time: 10,
    difficulty: 'easy',
    emoji: '🍚',
    ingredients: ['밥 1공기', '계란 2개', '대파 1/4대', '소금 약간', '간장 1작은술', '식용유'],
    steps: [
      '계란을 풀고 소금을 약간 넣는다.',
      '팬에 기름을 넉넉히 두르고 계란을 스크램블한다.',
      '밥을 넣고 센 불에서 볶는다.',
      '간장을 가장자리에 둘러 향을 낸다.',
      '대파를 넣고 섞은 뒤 불을 끈다.',
    ],
    createdAt: '2026-06-05',
  },

  // ── 일식 ──────────────────────────────────────────────────
  {
    id: 1751000000006,
    title: '규동',
    category: 'japanese',
    time: 25,
    difficulty: 'easy',
    emoji: '🥩',
    ingredients: ['소불고기용 고기 200g', '양파 1/2개', '간장 3큰술', '미린 2큰술', '설탕 1큰술', '다시 육수 150ml', '밥 1공기', '생강'],
    steps: [
      '양파를 채 썬다.',
      '냄비에 다시 육수, 간장, 미린, 설탕을 넣고 끓인다.',
      '양파를 넣어 2분간 조린다.',
      '소고기를 넣고 고기가 익을 때까지 조린다.',
      '밥 위에 올려 생강과 함께 낸다.',
    ],
    createdAt: '2026-06-06',
  },
  {
    id: 1751000000007,
    title: '미소시루',
    category: 'japanese',
    time: 15,
    difficulty: 'easy',
    emoji: '🍜',
    ingredients: ['두부 1/3모', '미역 5g', '미소(된장) 1.5큰술', '다시마·가쓰오부시 육수 500ml', '대파 약간'],
    steps: [
      '육수를 냄비에 붓고 불을 켠다.',
      '불린 미역을 넣고 끓인다.',
      '두부를 깍둑썰기해 넣는다.',
      '불을 약하게 줄이고 미소를 체에 걸러 풀어 넣는다.',
      '끓기 직전에 불을 끄고 대파를 올린다.',
    ],
    createdAt: '2026-06-07',
  },

  // ── 양식 ──────────────────────────────────────────────────
  {
    id: 1751000000008,
    title: '토마토 파스타',
    category: 'western',
    time: 30,
    difficulty: 'medium',
    emoji: '🍝',
    ingredients: ['스파게티 면 160g', '토마토 소스 200g', '마늘 3쪽', '올리브오일 2큰술', '소금', '후추', '파마산 치즈', '바질'],
    steps: [
      '끓는 소금물에 면을 8분간 삶는다. 면수 1컵을 남긴다.',
      '팬에 올리브오일을 두르고 마늘을 약불에 볶는다.',
      '토마토 소스를 넣고 5분간 끓인다.',
      '삶은 면을 넣고 면수로 농도를 조절한다.',
      '소금, 후추로 간을 맞추고 바질과 파마산 치즈를 올린다.',
    ],
    createdAt: '2026-06-08',
  },
  {
    id: 1751000000009,
    title: '크림 리소토',
    category: 'western',
    time: 35,
    difficulty: 'hard',
    emoji: '🧀',
    ingredients: ['아르보리오 쌀 160g', '양파 1/2개', '버터 30g', '화이트 와인 100ml', '닭 육수 700ml', '파마산 치즈 40g', '생크림 50ml', '소금·후추'],
    steps: [
      '닭 육수를 따뜻하게 데워 둔다.',
      '버터에 양파를 볶다가 쌀을 넣어 2분간 볶는다.',
      '화이트 와인을 넣어 알코올을 날린다.',
      '육수를 한 국자씩 넣으며 쌀이 흡수할 때마다 보충한다 (약 18분).',
      '불을 끄고 버터, 파마산 치즈, 생크림을 넣어 크리미하게 마무리한다.',
    ],
    createdAt: '2026-06-09',
  },

  // ── 디저트 ────────────────────────────────────────────────
  {
    id: 1751000000010,
    title: '초코 머핀',
    category: 'dessert',
    time: 40,
    difficulty: 'medium',
    emoji: '🧁',
    ingredients: ['박력분 200g', '코코아 파우더 30g', '설탕 120g', '계란 2개', '버터 100g', '우유 120ml', '베이킹파우더 1작은술', '소금 1/4작은술', '초코칩 80g'],
    steps: [
      '버터를 녹여 설탕과 잘 섞는다.',
      '계란을 하나씩 넣으며 섞는다.',
      '박력분, 코코아 파우더, 베이킹파우더, 소금을 체에 쳐 섞는다.',
      '우유를 넣고 반죽을 완성한 뒤 초코칩을 넣는다.',
      '머핀 틀에 80% 채우고 180°C 오븐에서 20분 굽는다.',
    ],
    createdAt: '2026-06-10',
  },
  {
    id: 1751000000011,
    title: '요거트 과일 파르페',
    category: 'dessert',
    time: 10,
    difficulty: 'easy',
    emoji: '🍓',
    ingredients: ['그릭 요거트 200g', '그래놀라 50g', '딸기 5개', '블루베리 한 줌', '꿀 1큰술'],
    steps: [
      '컵에 그래놀라를 한 층 깐다.',
      '그릭 요거트를 올린다.',
      '딸기와 블루베리를 올린다.',
      '꿀을 뿌려 완성한다.',
    ],
    createdAt: '2026-06-11',
  },
];

/**
 * LocalStorage에 저장된 레시피와 초기 데이터를 합산해 반환
 */
function getAllRecipes() {
  const stored = JSON.parse(localStorage.getItem('recipes') || 'null');
  if (!stored) {
    localStorage.setItem('recipes', JSON.stringify(INITIAL_RECIPES));
    return [...INITIAL_RECIPES];
  }
  return stored;
}

function getRecipeById(id) {
  return getAllRecipes().find(r => r.id === Number(id)) || null;
}

function saveRecipes(recipes) {
  localStorage.setItem('recipes', JSON.stringify(recipes));
}

function addRecipe(recipe) {
  const recipes = getAllRecipes();
  recipes.unshift(recipe);
  saveRecipes(recipes);
}

function updateRecipe(updated) {
  const recipes = getAllRecipes().map(r => r.id === updated.id ? updated : r);
  saveRecipes(recipes);
}

function deleteRecipe(id) {
  const recipes = getAllRecipes().filter(r => r.id !== Number(id));
  saveRecipes(recipes);
}

const CATEGORIES = [
  { id: 'all',      label: '전체' },
  { id: 'korean',   label: '한식' },
  { id: 'chinese',  label: '중식' },
  { id: 'japanese', label: '일식' },
  { id: 'western',  label: '양식' },
  { id: 'dessert',  label: '디저트' },
];

const DIFFICULTY_LABEL = { easy: '쉬움', medium: '보통', hard: '어려움' };
