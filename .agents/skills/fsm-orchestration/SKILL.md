---
name: fsm-orchestration
description: Strict finite state machine (FSM) orchestration harness for coordinating a squad of specialized subagents to guarantee high-quality code delivery.
---

# FSM Orchestration Harness

This skill defines a strict Finite State Machine (FSM) workflow designed to govern the development process in this repository. It guarantees high-quality code by orchestrating a squad of specialized roles (either through subagents or simulated personas) through a rigid sequence of states. Any AI agent operating in this repository MUST follow this workflow, either by delegating tasks using `invoke_subagent` to spawn specialized agents, or by rigorously simulating these roles sequentially before delivering code.

## The Squad (Roles)

When executing a task, instantiate or simulate the following roles:

*   **Analysts**: Break down high-level themes into actionable user stories.
*   **Gherkin Authors**: Write behavior-driven development (BDD) specs for the stories.
*   **QA Authors**: Define the quality assurance and acceptance criteria tests.
*   **Implementers**: Write the initial implementation code to satisfy the Gherkin specs.
*   **Cleaners**: Refactor the initial code for readability, maintainability, and clean code principles.
*   **Code Reviewers**: Review the cleaned code for logical errors, edge cases, and best practices.
*   **Hardeners**: Secure the code against vulnerabilities and optimize performance bottlenecks.
*   **QA Testers**: Execute the QA tests against the hardened code and verify acceptance criteria.
*   **Architects**: Ensure the final implementation aligns with the overall system architecture and design patterns.
*   **Senior Implementers**: Resolve complex issues, unblock other roles, and provide final sign-off on the code.

## The FSM Workflow (States)

The development process MUST transition through the following states in order. Do not proceed to the next state until the current state's exit criteria are met.

1.  **Themes**: The user request or high-level goal.
    *   *Actor*: Analysts
    *   *Output*: Clear, scoped objectives.
2.  **Stories**: Breakdown of themes into actionable units.
    *   *Actor*: Analysts
    *   *Output*: Well-defined user stories.
3.  **Gherkin and QA**: Specification of behavior and test criteria.
    *   *Actors*: Gherkin Authors, QA Authors
    *   *Output*: BDD specifications and test plans.
4.  **Code**: Initial implementation.
    *   *Actor*: Implementers
    *   *Output*: Working code that attempts to satisfy the specs.
5.  **Unit/Acceptance Tests**: Automated tests for the code.
    *   *Actors*: Implementers, QA Authors
    *   *Output*: Passing unit and acceptance tests.
6.  **Clean Code**: Refactoring and linting.
    *   *Actors*: Cleaners, Code Reviewers
    *   *Output*: Refactored, idiomatic, and documented code.
7.  **Hardened Code**: Security and performance optimization.
    *   *Actor*: Hardeners
    *   *Output*: Secure, robust, and performant code.
8.  **QA Tested Code**: Final verification against criteria.
    *   *Actor*: QA Testers
    *   *Output*: Verified code ready for integration.
9.  **Architecture**: Final review for system alignment.
    *   *Actor*: Architects, Senior Implementers
    *   *Output*: Production-ready code integrated into the repository.

## Execution Instructions

When you (the primary agent) receive a coding task:

1.  **Analyze**: Acknowledge that the FSM is MANDATORY for all code creation or modification.
2.  **Orchestrate**: Use the `define_subagent` and `invoke_subagent` tools to spawn specialized subagents for the required roles, OR explicitly document your mental simulation of each role and state.
3.  **Transition**: Explicitly state the transition from one phase to the next (e.g., "State 4: Code complete. Transitioning to State 5: Tests").
4.  **Deliver**: Only declare the task complete and present the final code to the user after the 'Architecture' state has been successfully passed.
