import assert from 'assert';

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

// Transition matrix defining the FSM. 
// Para cada estado: [Éxito, Fallo, Probabilidad_Exito_Base, Tiempo_Base]
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

function runSimulation(noiseFactor) {
  let currentState = STATES.THEMES;
  let totalTime = 0;
  let iterations = 0;
  const MAX_ITERATIONS = 1000;

  while (currentState !== STATES.DONE && iterations < MAX_ITERATIONS) {
    iterations++;
    const stateDef = FSM[currentState];
    
    // Introducir ruido en el simulador (retrasos aleatorios de tiempo)
    const delayNoise = (Math.random() * 0.4) - 0.2; // Variación del -20% al +20%
    totalTime += stateDef.time * (1 + delayNoise);

    // Introducir ruido de fallos (disminuye ligeramente la probabilidad de éxito)
    const failNoise = (Math.random() * noiseFactor); 
    const effectivePSuccess = stateDef.pSuccess - failNoise;
    
    // Transición FSM
    const isSuccess = Math.random() < effectivePSuccess;
    currentState = isSuccess ? stateDef.success : stateDef.fail;
  }

  return {
    success: currentState === STATES.DONE,
    time: totalTime,
    iterations
  };
}

function runMonteCarlo(runs, noiseFactor) {
  let successCount = 0;
  let totalTime = 0;
  
  for (let i = 0; i < runs; i++) {
    const result = runSimulation(noiseFactor);
    if (result.success) {
      successCount++;
      totalTime += result.time;
    }
  }

  const successRate = successCount / runs;
  const avgTime = successCount > 0 ? totalTime / successCount : 0;
  
  return { successRate, avgTime };
}

console.log("=== Ejecutando pruebas FSM mediante simulación de Monte Carlo ===");
const RUNS = 10000;
const NOISE_FACTOR = 0.1; // 10% de ruido en fallos inyectados a los agentes

const { successRate, avgTime } = runMonteCarlo(RUNS, NOISE_FACTOR);

console.log(`Corridas de Monte Carlo: ${RUNS}`);
console.log(`Tasa de éxito del FSM: ${(successRate * 100).toFixed(2)}%`);
console.log(`Tiempo medio por iteración épica: ${avgTime.toFixed(2)} unidades de tiempo`);

// Aserciones QA
try {
  assert(successRate > 0.80, "Error Crítico: El FSM entra en demasiados cuellos de botella con la tasa de ruido actual.");
  assert(avgTime < 500, "Error Crítico: El tiempo promedio de finalización se ha disparado (posibles loops infinitos detectados).");
  console.log("✅ Todas las pruebas de estrés FSM (Monte Carlo) pasadas con éxito.");
  process.exit(0);
} catch (error) {
  console.error("❌ Fallo en test FSM:", error.message);
  process.exit(1);
}
