# Tasks: Create Code Examples for Video Script

**Input**: Design documents from `/Users/goranslettemark/hs/react-getting-started-video-script/specs/002-create-code-examples/`

## Phase 3.1: Setup
- [ ] T001: Create a new directory named `video-examples` in the repository root.
- [ ] T002: Scaffold a new Vite project with the `react-ts` template inside the `video-examples` directory.
- [ ] T003: Install the `highcharts` and `@highcharts/react` dependencies in the `video-examples` project.

## Phase 3.2: Core Implementation
- [ ] T004: [P] Create the file `video-examples/src/components/01-FirstChart.tsx` with the content defined in `data-model.md`.
- [ ] T005: [P] Create the file `video-examples/src/components/02-BasicConfiguration.tsx` with the content defined in `data-model.md`.
- [ ] T006: Update the `video-examples/src/App.tsx` file to import both new components and add a simple UI (e.g., buttons or links) to switch between rendering `FirstChart` and `BasicConfiguration`.

## Phase 3.3: Validation
- [ ] T007: Run the Vite development server from the `video-examples` directory and manually verify that both code examples render correctly and the switching mechanism works.

## Dependencies
- T001 must be completed before T002.
- T002 must be completed before T003.
- T003 must be completed before T004, T005, and T006.
- T004 and T005 must be completed before T006.
- T006 must be completed before T007.

## Parallel Example
Tasks T004 and T005 can be executed in parallel as they involve creating separate, independent component files.
```
# Launch T004 and T005 together:
Task: "Create the file video-examples/src/components/01-FirstChart.tsx..."
Task: "Create the file video-examples/src/components/02-BasicConfiguration.tsx..."
```
