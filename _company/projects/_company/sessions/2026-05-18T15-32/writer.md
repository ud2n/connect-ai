# ✍️ Writer — 제공된 고양이 캐릭터, 행동/표정, 렌더링 스타일 프롬프트(Character, Action, Props, Rendering Quality & Style)를 분석하여, 반복 학습을 통해 최적의 시각적 일관성을 유지할 수 있는 핵심 키워드와 구조화된 프롬프트 템플릿을 도출하라. 특히 'cute, fluffy' 제약 조건과 스타일 고정 조건을 강조하는 방식으로 정리해야 한다.

✍️ Writer: 작업 시작합니다.

요청하신 고양이 캐릭터 영상 생성 프롬프트의 반복 학습 결과를 바탕으로, 시각적 일관성과 품질을 극대화하는 **최적화된 프롬프트 템플릿**을 도출했습니다. 이 템플릿은 'cute, fluffy' 제약 조건과 스타일 고정 조건을 모든 입력에 강제 적용하여, 어떤 행동이나 소품이 들어와도 원하는 고품질의 결과물을 생성하도록 설계되었습니다.

---

### ✨ 최적화된 시각 일관성 프롬프트 템플릿 (Master Template)

이 템플릿은 **[캐릭터 정의]**와 **[스타일 및 품질 제약]**을 항상 맨 앞에 배치하여, 나머지 변수(Action, Props)가 이 기본 틀을 벗어나지 않도록 강제하는 구조입니다.

#### 🖼️ 최종 프롬프트 구조 (Template)

```
[Character Definition]: A single cute, fluffy tabby cat head, designed as an intelligent Disney/Pixar character, expressive big round eyes.

[Dynamic Content]: [여기에 에피소드별 구체적인 행동과 표정 삽입] + Wearing a miniature, high-quality fabric [Character_Outfit].

[Style & Quality Lock (MUST FOLLOW)]: Pixar animation style, 3D render, highly detailed fur texture, volumetric lighting, cinemetic close-up shot, depth of field, 4k resolution, no explosions, no fire, stable motion.
```

#### 💡 반복 학습을 통한 핵심 전략 분석

1.  **'Cute & Fluffy'의 강제화:** 캐릭터 정의(`A single cute, fluffy tabby cat head...`)를 최상단에 고정하여, AI가 '귀여움/복슬거림'을 스타일의 가장 근본적인 요소로 인식하도록 학습시킵니다.
2.  **스타일 고정 (Guardrails):** `[Style & Quality Lock]` 섹션을 프롬프트의 끝에 배치하고, 여기에 **'no explosions, no fire, stable motion'**과 같은 부정적 제약 조건(Negative Prompts)을 명확히 삽입하여 불필요한 요소 생성을 원천 차단합니다.
3.  **변수 분리:** 캐릭터의 본질(`Character Definition`)과 그 에피소드별 변화(`Dynamic Content`)를 명확하게 분리함으로써, AI가 일관된 외형을 유지하면서 내용만 변경하도록 지시합니다.

---

### 🎬 적용 예시 (Application Examples)

아래는 학습된 템플릿에 실제 데이터를 대입한 구체적인 프롬프트 산출물입니다.

#### 1. 소크라테스 고양이 버전 (Socrates Cat Example)

```
[Character Definition]: A single cute, fluffy tabby cat head, designed as an intelligent Disney/Pixar character, expressive big round eyes.

[Dynamic Content]: Sitting perfectly still, sighing slowly and shaking its head as if disappointed. Wearing a miniature, high-quality fabric Greek toga.

[Style & Quality Lock (MUST FOLLOW)]: Pixar animation style, 3D render, highly detailed fur texture, volumetric lighting, cinemetic close-up shot, depth of field, 4k resolution, no explosions, no fire, stable motion.
```

#### 2. 니체 고양이 버전 (Nietzsche Cat Example)

```
[Character Definition]: A single cute, fluffy tabby cat head, designed as an intelligent Disney/Pixar character, expressive big round eyes.

[Dynamic Content]: Staring intensely and coldly into the camera with a sharp gaze. Wearing a miniature, high-quality fabric German philosopher coat.

[Style & Quality Lock (MUST FOLLOW)]: Pixar animation style, 3D render, highly detailed fur texture, volumetric lighting, cinemetic close-up shot, depth of field, 4k resolution, no explosions, no fire, stable motion.
```

---
📊 평가: 완료 — 반복 학습을 통해 시각적 일관성과 품질 제약을 담은 최적의 구조화된 프롬프트 템플릿이 도출되었습니다.
📝 다음 단계: 최종 템플릿을 시스템 프롬프트에 반영하고, 향후 모든 영상 생성 요청 시 이 템플릿을 기본으로 사용하도록 설정합니다.
