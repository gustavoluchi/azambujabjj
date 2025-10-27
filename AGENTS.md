# Agent Playbook

## Principles

- Lead every change with BDD and TDD: write the minimal failing test, implement just enough code to pass, then refactor.
- Capture user-observable behavior with lightweight BDD scenarios so intent stays crisp.
- Prefer small, pure functions and components that compose; keep side effects isolated behind clear interfaces.

## Quality Gates

- `pnpm check` before committing to confirm type safety and Astro integration.
- `pnpm lint` or formatters if the change touches styling or accessibility concerns.
- `pnpm format` to auto-fix whitespace and formatting issues.
- `pnpm tsc` to check if there are any Typescript problems.
