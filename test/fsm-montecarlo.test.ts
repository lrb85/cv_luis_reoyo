import { describe, it, expect } from 'vitest';

const STATES = {
  THEMES: 'Themes',
  STORIES: 'Stories',
  GHERKIN_QA: 'Gherkin_QA',
  CODE: 'Code',
  TESTS: 'Unit_Acceptance_Tests',
  CLEAN_CODE: 'Clean_Code',
  HARDENED_CODE: 'Hardened_Code',
  QA_TESTED: 'QA_Tested',
  ARCHITECTURE: 'Architecture',
  DONE: 'Done'
};

const FSM = {
  [STATES.THEMES]: { success: STATES.STORIES, fail: STATES.THEMES, pSuccess: 0.95, time: 10 },
  [STATES.STORIES]: { success: STATES.GHERKIN_QA, fail: STATES.THEMES, pSuccess: 0.90, time: 15 },
  [STATES.GHERKIN_QA]: { success: STATES.CODE, fail: STATES.STORIES, pSuccess: 0.85, time: 20 },
  [STATES.CODE]: { success: STATES.TESTS, fail: STATES.GHERKIN_QA, pSuccess: 0.70, time: 40 },
  [STATES.TESTS]: { success: STATES.CLEAN_CODE, fail: STATES.CODE, pSuccess: 0.80, time: 15 },
  [STATES.CLEAN_CODE]: { success: STATES.HARDENED_CODE, fail: STATES.CODE, pSuccess: 0.85, time: 10 },
  [STATES.HARDENED_CODE]: { success: STATES.QA_TESTED, fail: STATES.CODE, pSuccess: 0.90, time: 15 },
  [STATES.QA_TESTED]: { success: STATES.ARCHITECTURE, fail: STATES.CODE, pSuccess: 0.85, time: 25 },
  [STATES.ARCHITECTURE]: { success: STATES.DONE, fail: STATES.CLEAN_CODE, pSuccess: 0.95, time: 10 },
};

function runSimulation(noiseFactor: number) {
  let currentState = STATES.THEMES;
  let totalTime = 0;
  let iterations = 0;
  const MAX_ITERATIONS = 1000;

  while (currentState !== STATES.DONE && iterations < MAX_ITERATIONS) {
    iterations++;
    const stateDef = FSM[currentState];
    
    const delayNoise = (Math.random() * 0.4) - 0.2;
    totalTime += stateDef.time * (1 + delayNoise);

    const failNoise = (Math.random() * noiseFactor); 
    const effectivePSuccess = stateDef.pSuccess - failNoise;
    
    const isSuccess = Math.random() < effectivePSuccess;
    currentState = isSuccess ? stateDef.success : stateDef.fail;
  }

  return {
    success: currentState === STATES.DONE,
    time: totalTime,
    iterations
  };
}

describe('FSM Agent Squad Orchestration - Monte Carlo Simulation', () => {
  it('Debe orquestar con éxito 10,000 iteraciones manteniendo una alta tasa de éxito a pesar del ruido', () => {
    const RUNS = 10000;
    const NOISE_FACTOR = 0.1;
    let successCount = 0;
    let totalTime = 0;

    for (let i = 0; i < RUNS; i++) {
      const result = runSimulation(NOISE_FACTOR);
      if (result.success) {
        successCount++;
        totalTime += result.time;
      }
    }

    const successRate = successCount / RUNS;
    const avgTime = successCount > 0 ? totalTime / successCount : 0;

    // Asertions para calidad en Astro (Vitest)
    expect(successRate).toBeGreaterThan(0.80);
    expect(avgTime).toBeLessThan(500);
  });
});
