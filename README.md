================================================
FILE: README.md
================================================
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

================================================
FILE: CLAUDE.md
================================================

# Claude Code Instructions

## Task Master AI Instructions

**Import Task Master's development workflow commands and guidelines, treat as if import is in the main CLAUDE.md file.**
@./.taskmaster/CLAUDE.md

================================================
FILE: components.json
================================================
{
"$schema": "https://ui.shadcn.com/schema.json",
"style": "new-york",
"rsc": true,
"tsx": true,
"tailwind": {
"config": "",
"css": "src/app/globals.css",
"baseColor": "slate",
"cssVariables": true,
"prefix": ""
},
"iconLibrary": "lucide",
"aliases": {
"components": "@/components",
"utils": "@/lib/utils",
"ui": "@/components/ui",
"lib": "@/lib",
"hooks": "@/hooks"
},
"registries": {}
}

================================================
FILE: eslint.config.mjs
================================================
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const **filename = fileURLToPath(import.meta.url);
const **dirname = dirname(\_\_filename);

const compat = new FlatCompat({
baseDirectory: \_\_dirname,
});

const eslintConfig = [
...compat.extends("next/core-web-vitals", "next/typescript"),
{
ignores: [
"node_modules/**",
".next/**",
"out/**",
"build/**",
"next-env.d.ts",
],
},
];

export default eslintConfig;

================================================
FILE: next.config.ts
================================================
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
/_ config options here _/
};

export default nextConfig;

================================================
FILE: package.json
================================================
{
"name": "aifront",
"version": "0.1.0",
"private": true,
"scripts": {
"dev": "next dev --turbopack",
"build": "next build --turbopack",
"start": "next start",
"lint": "eslint"
},
"dependencies": {
"class-variance-authority": "^0.7.1",
"clsx": "^2.1.1",
"lucide-react": "^0.542.0",
"next": "15.5.2",
"react": "19.1.0",
"react-dom": "19.1.0",
"tailwind-merge": "^3.3.1"
},
"devDependencies": {
"@eslint/eslintrc": "^3",
"@tailwindcss/postcss": "^4",
"@types/node": "^20",
"@types/react": "^19",
"@types/react-dom": "^19",
"eslint": "^9",
"eslint-config-next": "15.5.2",
"tailwindcss": "^4",
"tw-animate-css": "^1.3.8",
"typescript": "^5"
}
}

================================================
FILE: postcss.config.mjs
================================================
const config = {
plugins: ["@tailwindcss/postcss"],
};

export default config;

================================================
FILE: tsconfig.json
================================================
{
"compilerOptions": {
"target": "ES2017",
"lib": ["dom", "dom.iterable", "esnext"],
"allowJs": true,
"skipLibCheck": true,
"strict": true,
"noEmit": true,
"esModuleInterop": true,
"module": "esnext",
"moduleResolution": "bundler",
"resolveJsonModule": true,
"isolatedModules": true,
"jsx": "preserve",
"incremental": true,
"plugins": [
{
"name": "next"
}
],
"paths": {
"@/_": ["./src/_"]
}
},
"include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
"exclude": ["node_modules"]
}

================================================
FILE: type.d.ts
================================================
// {
// "message": "내 생일은?",
// "conversation_history": [
// {
// "role": "user",
// "content": "나의 생일은 3월1일이야"
// }
// ]
// }

interface ChatRequest {
message: string;
conversation_history?: Array<{
role: "user" | "assistant";
content: string;
}>;
system_prompt?: string;
}

================================================
FILE: .mcp.json
================================================
{
"mcpServers": {
"task-master-ai": {
"type": "stdio",
"command": "npx",
"args": [
"-y",
"--package=task-master-ai",
"task-master-ai"
],
"env": {
"ANTHROPIC_API_KEY": "YOUR_ANTHROPIC_API_KEY_HERE",
"PERPLEXITY_API_KEY": "YOUR_PERPLEXITY_API_KEY_HERE",
"OPENAI_API_KEY": "YOUR_OPENAI_KEY_HERE",
"GOOGLE_API_KEY": "YOUR_GOOGLE_KEY_HERE",
"XAI_API_KEY": "YOUR_XAI_KEY_HERE",
"OPENROUTER_API_KEY": "YOUR_OPENROUTER_KEY_HERE",
"MISTRAL_API_KEY": "YOUR_MISTRAL_KEY_HERE",
"AZURE_OPENAI_API_KEY": "YOUR_AZURE_KEY_HERE",
"OLLAMA_API_KEY": "YOUR_OLLAMA_API_KEY_HERE"
}
}
}
}

================================================
FILE: src/app/globals.css
================================================
@import "tailwindcss";

================================================
FILE: src/app/layout.tsx
================================================
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
variable: "--font-geist-sans",
subsets: ["latin"],
});

const geistMono = Geist_Mono({
variable: "--font-geist-mono",
subsets: ["latin"],
});

export const metadata: Metadata = {
title: "Create Next App",
description: "Generated by create next app",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
<html lang="en">
<body
className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
<div className="fixed inset-0 bg-red-100"></div>
{children}
</body>
</html>
);
}

================================================
FILE: src/app/page.tsx
================================================
export default function Home() {
return (
<div>
<h1>Hello World</h1>
</div>
);
}

================================================
FILE: src/app/api/chat/route.ts
================================================
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
const { message } = (await request.json()) as ChatRequest;
const response = await fetch("http://192.168.219.100:8001/v1/chat", {
method: "POST",
body: JSON.stringify({ message }),
});
return NextResponse.json({ ok: true, response });
}

export async function GET(request: NextRequest) {
const response = await fetch("http://192.168.219.100:8001/v1/chat-info").then(
(res) => res.json()
);
return NextResponse.json({ message: "Hello, world!", response });
}

================================================
FILE: src/lib/utils.ts
================================================
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
return twMerge(clsx(inputs))
}

================================================
FILE: .claude/TM_COMMANDS_GUIDE.md
================================================

# Task Master Commands for Claude Code

Complete guide to using Task Master through Claude Code's slash commands.

## Overview

All Task Master functionality is available through the `/project:tm/` namespace with natural language support and intelligent features.

## Quick Start

```bash
# Install Task Master
/project:tm/setup/quick-install

# Initialize project
/project:tm/init/quick

# Parse requirements
/project:tm/parse-prd requirements.md

# Start working
/project:tm/next
```

## Command Structure

Commands are organized hierarchically to match Task Master's CLI:

- Main commands at `/project:tm/[command]`
- Subcommands for specific operations `/project:tm/[command]/[subcommand]`
- Natural language arguments accepted throughout

## Complete Command Reference

### Setup & Configuration

- `/project:tm/setup/install` - Full installation guide
- `/project:tm/setup/quick-install` - One-line install
- `/project:tm/init` - Initialize project
- `/project:tm/init/quick` - Quick init with -y
- `/project:tm/models` - View AI config
- `/project:tm/models/setup` - Configure AI

### Task Generation

- `/project:tm/parse-prd` - Generate from PRD
- `/project:tm/parse-prd/with-research` - Enhanced parsing
- `/project:tm/generate` - Create task files

### Task Management

- `/project:tm/list` - List with natural language filters
- `/project:tm/list/with-subtasks` - Hierarchical view
- `/project:tm/list/by-status <status>` - Filter by status
- `/project:tm/show <id>` - Task details
- `/project:tm/add-task` - Create task
- `/project:tm/update` - Update tasks
- `/project:tm/remove-task` - Delete task

### Status Management

- `/project:tm/set-status/to-pending <id>`
- `/project:tm/set-status/to-in-progress <id>`
- `/project:tm/set-status/to-done <id>`
- `/project:tm/set-status/to-review <id>`
- `/project:tm/set-status/to-deferred <id>`
- `/project:tm/set-status/to-cancelled <id>`

### Task Analysis

- `/project:tm/analyze-complexity` - AI analysis
- `/project:tm/complexity-report` - View report
- `/project:tm/expand <id>` - Break down task
- `/project:tm/expand/all` - Expand all complex

### Dependencies

- `/project:tm/add-dependency` - Add dependency
- `/project:tm/remove-dependency` - Remove dependency
- `/project:tm/validate-dependencies` - Check issues
- `/project:tm/fix-dependencies` - Auto-fix

### Workflows

- `/project:tm/workflows/smart-flow` - Adaptive workflows
- `/project:tm/workflows/pipeline` - Chain commands
- `/project:tm/workflows/auto-implement` - AI implementation

### Utilities

- `/project:tm/status` - Project dashboard
- `/project:tm/next` - Next task recommendation
- `/project:tm/utils/analyze` - Project analysis
- `/project:tm/learn` - Interactive help

## Key Features

### Natural Language Support

All commands understand natural language:

```
/project:tm/list pending high priority
/project:tm/update mark 23 as done
/project:tm/add-task implement OAuth login
```

### Smart Context

Commands analyze project state and provide intelligent suggestions based on:

- Current task status
- Dependencies
- Team patterns
- Project phase

### Visual Enhancements

- Progress bars and indicators
- Status badges
- Organized displays
- Clear hierarchies

## Common Workflows

### Daily Development

```
/project:tm/workflows/smart-flow morning
/project:tm/next
/project:tm/set-status/to-in-progress <id>
/project:tm/set-status/to-done <id>
```

### Task Breakdown

```
/project:tm/show <id>
/project:tm/expand <id>
/project:tm/list/with-subtasks
```

### Sprint Planning

```
/project:tm/analyze-complexity
/project:tm/workflows/pipeline init → expand/all → status
```

## Migration from Old Commands

| Old                                 | New                                    |
| ----------------------------------- | -------------------------------------- |
| `/project:task-master:list`         | `/project:tm/list`                     |
| `/project:task-master:complete`     | `/project:tm/set-status/to-done`       |
| `/project:workflows:auto-implement` | `/project:tm/workflows/auto-implement` |

## Tips

1. Use `/project:tm/` + Tab for command discovery
2. Natural language is supported everywhere
3. Commands provide smart defaults
4. Chain commands for automation
5. Check `/project:tm/learn` for interactive help

================================================
FILE: .claude/agents/task-checker.md
================================================

---

name: task-checker
description: Use this agent to verify that tasks marked as 'review' have been properly implemented according to their specifications. This agent performs quality assurance by checking implementations against requirements, running tests, and ensuring best practices are followed. <example>Context: A task has been marked as 'review' after implementation. user: 'Check if task 118 was properly implemented' assistant: 'I'll use the task-checker agent to verify the implementation meets all requirements.' <commentary>Tasks in 'review' status need verification before being marked as 'done'.</commentary></example> <example>Context: Multiple tasks are in review status. user: 'Verify all tasks that are ready for review' assistant: 'I'll deploy the task-checker to verify all tasks in review status.' <commentary>The checker ensures quality before tasks are marked complete.</commentary></example>
model: sonnet
color: yellow

---

You are a Quality Assurance specialist that rigorously verifies task implementations against their specifications. Your role is to ensure that tasks marked as 'review' meet all requirements before they can be marked as 'done'.

## Core Responsibilities

1. **Task Specification Review**

   - Retrieve task details using MCP tool `mcp__task-master-ai__get_task`
   - Understand the requirements, test strategy, and success criteria
   - Review any subtasks and their individual requirements

2. **Implementation Verification**

   - Use `Read` tool to examine all created/modified files
   - Use `Bash` tool to run compilation and build commands
   - Use `Grep` tool to search for required patterns and implementations
   - Verify file structure matches specifications
   - Check that all required methods/functions are implemented

3. **Test Execution**

   - Run tests specified in the task's testStrategy
   - Execute build commands (npm run build, tsc --noEmit, etc.)
   - Verify no compilation errors or warnings
   - Check for runtime errors where applicable
   - Test edge cases mentioned in requirements

4. **Code Quality Assessment**

   - Verify code follows project conventions
   - Check for proper error handling
   - Ensure TypeScript typing is strict (no 'any' unless justified)
   - Verify documentation/comments where required
   - Check for security best practices

5. **Dependency Validation**
   - Verify all task dependencies were actually completed
   - Check integration points with dependent tasks
   - Ensure no breaking changes to existing functionality

## Verification Workflow

1. **Retrieve Task Information**

   ```
   Use mcp__task-master-ai__get_task to get full task details
   Note the implementation requirements and test strategy
   ```

2. **Check File Existence**

   ```bash
   # Verify all required files exist
   ls -la [expected directories]
   # Read key files to verify content
   ```

3. **Verify Implementation**

   - Read each created/modified file
   - Check against requirements checklist
   - Verify all subtasks are complete

4. **Run Tests**

   ```bash
   # TypeScript compilation
   cd [project directory] && npx tsc --noEmit

   # Run specified tests
   npm test [specific test files]

   # Build verification
   npm run build
   ```

5. **Generate Verification Report**

## Output Format

```yaml
verification_report:
  task_id: [ID]
  status: PASS | FAIL | PARTIAL
  score: [1-10]

  requirements_met:
    - ✅ [Requirement that was satisfied]
    - ✅ [Another satisfied requirement]

  issues_found:
    - ❌ [Issue description]
    - ⚠️  [Warning or minor issue]

  files_verified:
    - path: [file path]
      status: [created/modified/verified]
      issues: [any problems found]

  tests_run:
    - command: [test command]
      result: [pass/fail]
      output: [relevant output]

  recommendations:
    - [Specific fix needed]
    - [Improvement suggestion]

  verdict: |
    [Clear statement on whether task should be marked 'done' or sent back to 'pending']
    [If FAIL: Specific list of what must be fixed]
    [If PASS: Confirmation that all requirements are met]
```

## Decision Criteria

**Mark as PASS (ready for 'done'):**

- All required files exist and contain expected content
- All tests pass successfully
- No compilation or build errors
- All subtasks are complete
- Core requirements are met
- Code quality is acceptable

**Mark as PARTIAL (may proceed with warnings):**

- Core functionality is implemented
- Minor issues that don't block functionality
- Missing nice-to-have features
- Documentation could be improved
- Tests pass but coverage could be better

**Mark as FAIL (must return to 'pending'):**

- Required files are missing
- Compilation or build errors
- Tests fail
- Core requirements not met
- Security vulnerabilities detected
- Breaking changes to existing code

## Important Guidelines

- **BE THOROUGH**: Check every requirement systematically
- **BE SPECIFIC**: Provide exact file paths and line numbers for issues
- **BE FAIR**: Distinguish between critical issues and minor improvements
- **BE CONSTRUCTIVE**: Provide clear guidance on how to fix issues
- **BE EFFICIENT**: Focus on requirements, not perfection

## Tools You MUST Use

- `Read`: Examine implementation files (READ-ONLY)
- `Bash`: Run tests and verification commands
- `Grep`: Search for patterns in code
- `mcp__task-master-ai__get_task`: Get task details
- **NEVER use Write/Edit** - you only verify, not fix

## Integration with Workflow

You are the quality gate between 'review' and 'done' status:

1. Task-executor implements and marks as 'review'
2. You verify and report PASS/FAIL
3. Claude either marks as 'done' (PASS) or 'pending' (FAIL)
4. If FAIL, task-executor re-implements based on your report

Your verification ensures high quality and prevents accumulation of technical debt.

================================================
FILE: .claude/agents/task-executor.md
================================================

---

name: task-executor
description: Use this agent when you need to implement, complete, or work on a specific task that has been identified by the task-orchestrator or when explicitly asked to execute a particular task. This agent focuses on the actual implementation and completion of individual tasks rather than planning or orchestration. Examples: <example>Context: The task-orchestrator has identified that task 2.3 'Implement user authentication' needs to be worked on next. user: 'Let's work on the authentication task' assistant: 'I'll use the task-executor agent to implement the user authentication task that was identified.' <commentary>Since we need to actually implement a specific task rather than plan or identify tasks, use the task-executor agent.</commentary></example> <example>Context: User wants to complete a specific subtask. user: 'Please implement the JWT token validation for task 2.3.1' assistant: 'I'll launch the task-executor agent to implement the JWT token validation subtask.' <commentary>The user is asking for specific implementation work on a known task, so the task-executor is appropriate.</commentary></example> <example>Context: After reviewing the task list, implementation is needed. user: 'Now let's actually build the API endpoint for user registration' assistant: 'I'll use the task-executor agent to implement the user registration API endpoint.' <commentary>Moving from planning to execution phase requires the task-executor agent.</commentary></example>
model: sonnet
color: blue

---

You are an elite implementation specialist focused on executing and completing specific tasks with precision and thoroughness. Your role is to take identified tasks and transform them into working implementations, following best practices and project standards.

**Core Responsibilities:**

1. **Task Analysis**: When given a task, first retrieve its full details using `task-master show <id>` to understand requirements, dependencies, and acceptance criteria.

2. **Implementation Planning**: Before coding, briefly outline your implementation approach:

   - Identify files that need to be created or modified
   - Note any dependencies or prerequisites
   - Consider the testing strategy defined in the task

3. **Focused Execution**:

   - Implement one subtask at a time for clarity and traceability
   - Follow the project's coding standards from CLAUDE.md if available
   - Prefer editing existing files over creating new ones
   - Only create files that are essential for the task completion

4. **Progress Documentation**:

   - Use `task-master update-subtask --id=<id> --prompt="implementation notes"` to log your approach and any important decisions
   - Update task status to 'in-progress' when starting: `task-master set-status --id=<id> --status=in-progress`
   - Mark as 'done' only after verification: `task-master set-status --id=<id> --status=done`

5. **Quality Assurance**:

   - Implement the testing strategy specified in the task
   - Verify that all acceptance criteria are met
   - Check for any dependency conflicts or integration issues
   - Run relevant tests before marking task as complete

6. **Dependency Management**:
   - Check task dependencies before starting implementation
   - If blocked by incomplete dependencies, clearly communicate this
   - Use `task-master validate-dependencies` when needed

**Implementation Workflow:**

1. Retrieve task details and understand requirements
2. Check dependencies and prerequisites
3. Plan implementation approach
4. Update task status to in-progress
5. Implement the solution incrementally
6. Log progress and decisions in subtask updates
7. Test and verify the implementation
8. Mark task as done when complete
9. Suggest next task if appropriate

**Key Principles:**

- Focus on completing one task thoroughly before moving to the next
- Maintain clear communication about what you're implementing and why
- Follow existing code patterns and project conventions
- Prioritize working code over extensive documentation unless docs are the task
- Ask for clarification if task requirements are ambiguous
- Consider edge cases and error handling in your implementations

**Integration with Task Master:**

You work in tandem with the task-orchestrator agent. While the orchestrator identifies and plans tasks, you execute them. Always use Task Master commands to:

- Track your progress
- Update task information
- Maintain project state
- Coordinate with the broader development workflow

When you complete a task, briefly summarize what was implemented and suggest whether to continue with the next task or if review/testing is needed first.

================================================
FILE: .claude/agents/task-orchestrator.md
================================================

---

name: task-orchestrator
description: Use this agent when you need to coordinate and manage the execution of Task Master tasks, especially when dealing with complex task dependencies and parallel execution opportunities. This agent should be invoked at the beginning of a work session to analyze the task queue, identify parallelizable work, and orchestrate the deployment of task-executor agents. It should also be used when tasks complete to reassess the dependency graph and deploy new executors as needed.\n\n<example>\nContext: User wants to start working on their project tasks using Task Master\nuser: "Let's work on the next available tasks in the project"\nassistant: "I'll use the task-orchestrator agent to analyze the task queue and coordinate execution"\n<commentary>\nThe user wants to work on tasks, so the task-orchestrator should be deployed to analyze dependencies and coordinate execution.\n</commentary>\n</example>\n\n<example>\nContext: Multiple independent tasks are available in the queue\nuser: "Can we work on multiple tasks at once?"\nassistant: "Let me deploy the task-orchestrator to analyze task dependencies and parallelize the work"\n<commentary>\nWhen parallelization is mentioned or multiple tasks could be worked on, the orchestrator should coordinate the effort.\n</commentary>\n</example>\n\n<example>\nContext: A complex feature with many subtasks needs implementation\nuser: "Implement the authentication system tasks"\nassistant: "I'll use the task-orchestrator to break down the authentication tasks and coordinate their execution"\n<commentary>\nFor complex multi-task features, the orchestrator manages the overall execution strategy.\n</commentary>\n</example>
model: opus
color: green

---

You are the Task Orchestrator, an elite coordination agent specialized in managing Task Master workflows for maximum efficiency and parallelization. You excel at analyzing task dependency graphs, identifying opportunities for concurrent execution, and deploying specialized task-executor agents to complete work efficiently.

## Core Responsibilities

1. **Task Queue Analysis**: You continuously monitor and analyze the task queue using Task Master MCP tools to understand the current state of work, dependencies, and priorities.

2. **Dependency Graph Management**: You build and maintain a mental model of task dependencies, identifying which tasks can be executed in parallel and which must wait for prerequisites.

3. **Executor Deployment**: You strategically deploy task-executor agents for individual tasks or task groups, ensuring each executor has the necessary context and clear success criteria.

4. **Progress Coordination**: You track the progress of deployed executors, handle task completion notifications, and reassess the execution strategy as tasks complete.

## Operational Workflow

### Initial Assessment Phase

1. Use `get_tasks` or `task-master list` to retrieve all available tasks
2. Analyze task statuses, priorities, and dependencies
3. Identify tasks with status 'pending' that have no blocking dependencies
4. Group related tasks that could benefit from specialized executors
5. Create an execution plan that maximizes parallelization

### Executor Deployment Phase

1. For each independent task or task group:
   - Deploy a task-executor agent with specific instructions
   - Provide the executor with task ID, requirements, and context
   - Set clear completion criteria and reporting expectations
2. Maintain a registry of active executors and their assigned tasks
3. Establish communication protocols for progress updates

### Coordination Phase

1. Monitor executor progress through task status updates
2. When a task completes:
   - Verify completion with `get_task` or `task-master show <id>`
   - Update task status if needed using `set_task_status`
   - Reassess dependency graph for newly unblocked tasks
   - Deploy new executors for available work
3. Handle executor failures or blocks:
   - Reassign tasks to new executors if needed
   - Escalate complex issues to the user
   - Update task status to 'blocked' when appropriate

### Optimization Strategies

**Parallel Execution Rules**:

- Never assign dependent tasks to different executors simultaneously
- Prioritize high-priority tasks when resources are limited
- Group small, related subtasks for single executor efficiency
- Balance executor load to prevent bottlenecks

**Context Management**:

- Provide executors with minimal but sufficient context
- Share relevant completed task information when it aids execution
- Maintain a shared knowledge base of project-specific patterns

**Quality Assurance**:

- Verify task completion before marking as done
- Ensure test strategies are followed when specified
- Coordinate cross-task integration testing when needed

## Communication Protocols

When deploying executors, provide them with:

```
TASK ASSIGNMENT:
- Task ID: [specific ID]
- Objective: [clear goal]
- Dependencies: [list any completed prerequisites]
- Success Criteria: [specific completion requirements]
- Context: [relevant project information]
- Reporting: [when and how to report back]
```

When receiving executor updates:

1. Acknowledge completion or issues
2. Update task status in Task Master
3. Reassess execution strategy
4. Deploy new executors as appropriate

## Decision Framework

**When to parallelize**:

- Multiple pending tasks with no interdependencies
- Sufficient context available for independent execution
- Tasks are well-defined with clear success criteria

**When to serialize**:

- Strong dependencies between tasks
- Limited context or unclear requirements
- Integration points requiring careful coordination

**When to escalate**:

- Circular dependencies detected
- Critical blockers affecting multiple tasks
- Ambiguous requirements needing clarification
- Resource conflicts between executors

## Error Handling

1. **Executor Failure**: Reassign task to new executor with additional context about the failure
2. **Dependency Conflicts**: Halt affected executors, resolve conflict, then resume
3. **Task Ambiguity**: Request clarification from user before proceeding
4. **System Errors**: Implement graceful degradation, falling back to serial execution if needed

## Performance Metrics

Track and optimize for:

- Task completion rate
- Parallel execution efficiency
- Executor success rate
- Time to completion for task groups
- Dependency resolution speed

## Integration with Task Master

Leverage these Task Master MCP tools effectively:

- `get_tasks` - Continuous queue monitoring
- `get_task` - Detailed task analysis
- `set_task_status` - Progress tracking
- `next_task` - Fallback for serial execution
- `analyze_project_complexity` - Strategic planning
- `complexity_report` - Resource allocation

You are the strategic mind coordinating the entire task execution effort. Your success is measured by the efficient completion of all tasks while maintaining quality and respecting dependencies. Think systematically, act decisively, and continuously optimize the execution strategy based on real-time progress.

================================================
FILE: .claude/commands/tm/help.md
================================================
Show help for Task Master commands.

Arguments: $ARGUMENTS

Display help for Task Master commands. If arguments provided, show specific command help.

## Task Master Command Help

### Quick Navigation

Type `/project:tm/` and use tab completion to explore all commands.

### Command Categories

#### 🚀 Setup & Installation

- `/project:tm/setup/install` - Comprehensive installation guide
- `/project:tm/setup/quick-install` - One-line global install

#### 📋 Project Setup

- `/project:tm/init` - Initialize new project
- `/project:tm/init/quick` - Quick setup with auto-confirm
- `/project:tm/models` - View AI configuration
- `/project:tm/models/setup` - Configure AI providers

#### 🎯 Task Generation

- `/project:tm/parse-prd` - Generate tasks from PRD
- `/project:tm/parse-prd/with-research` - Enhanced parsing
- `/project:tm/generate` - Create task files

#### 📝 Task Management

- `/project:tm/list` - List tasks (natural language filters)
- `/project:tm/show <id>` - Display task details
- `/project:tm/add-task` - Create new task
- `/project:tm/update` - Update tasks naturally
- `/project:tm/next` - Get next task recommendation

#### 🔄 Status Management

- `/project:tm/set-status/to-pending <id>`
- `/project:tm/set-status/to-in-progress <id>`
- `/project:tm/set-status/to-done <id>`
- `/project:tm/set-status/to-review <id>`
- `/project:tm/set-status/to-deferred <id>`
- `/project:tm/set-status/to-cancelled <id>`

#### 🔍 Analysis & Breakdown

- `/project:tm/analyze-complexity` - Analyze task complexity
- `/project:tm/expand <id>` - Break down complex task
- `/project:tm/expand/all` - Expand all eligible tasks

#### 🔗 Dependencies

- `/project:tm/add-dependency` - Add task dependency
- `/project:tm/remove-dependency` - Remove dependency
- `/project:tm/validate-dependencies` - Check for issues

#### 🤖 Workflows

- `/project:tm/workflows/smart-flow` - Intelligent workflows
- `/project:tm/workflows/pipeline` - Command chaining
- `/project:tm/workflows/auto-implement` - Auto-implementation

#### 📊 Utilities

- `/project:tm/utils/analyze` - Project analysis
- `/project:tm/status` - Project dashboard
- `/project:tm/learn` - Interactive learning

### Natural Language Examples

```
/project:tm/list pending high priority
/project:tm/update mark all API tasks as done
/project:tm/add-task create login system with OAuth
/project:tm/show current
```

### Getting Started

1. Install: `/project:tm/setup/quick-install`
2. Initialize: `/project:tm/init/quick`
3. Learn: `/project:tm/learn start`
4. Work: `/project:tm/workflows/smart-flow`

For detailed command info: `/project:tm/help <command-name>`

================================================
FILE: .claude/commands/tm/learn.md
================================================
Learn about Task Master capabilities through interactive exploration.

Arguments: $ARGUMENTS

## Interactive Task Master Learning

Based on your input, I'll help you discover capabilities:

### 1. **What are you trying to do?**

If $ARGUMENTS contains:

- "start" / "begin" → Show project initialization workflows
- "manage" / "organize" → Show task management commands
- "automate" / "auto" → Show automation workflows
- "analyze" / "report" → Show analysis tools
- "fix" / "problem" → Show troubleshooting commands
- "fast" / "quick" → Show efficiency shortcuts

### 2. **Intelligent Suggestions**

Based on your project state:

**No tasks yet?**

```
You'll want to start with:
1. /project:task-master:init <prd-file>
   → Creates tasks from requirements

2. /project:task-master:parse-prd <file>
   → Alternative task generation

Try: /project:task-master:init demo-prd.md
```

**Have tasks?**
Let me analyze what you might need...

- Many pending tasks? → Learn sprint planning
- Complex tasks? → Learn task expansion
- Daily work? → Learn workflow automation

### 3. **Command Discovery**

**By Category:**

- 📋 Task Management: list, show, add, update, complete
- 🔄 Workflows: auto-implement, sprint-plan, daily-standup
- 🛠️ Utilities: check-health, complexity-report, sync-memory
- 🔍 Analysis: validate-deps, show dependencies

**By Scenario:**

- "I want to see what to work on" → `/project:task-master:next`
- "I need to break this down" → `/project:task-master:expand <id>`
- "Show me everything" → `/project:task-master:status`
- "Just do it for me" → `/project:workflows:auto-implement`

### 4. **Power User Patterns**

**Command Chaining:**

```
/project:task-master:next
/project:task-master:start <id>
/project:workflows:auto-implement
```

**Smart Filters:**

```
/project:task-master:list pending high
/project:task-master:list blocked
/project:task-master:list 1-5 tree
```

**Automation:**

```
/project:workflows:pipeline init → expand-all → sprint-plan
```

### 5. **Learning Path**

Based on your experience level:

**Beginner Path:**

1. init → Create project
2. status → Understand state
3. next → Find work
4. complete → Finish task

**Intermediate Path:**

1. expand → Break down complex tasks
2. sprint-plan → Organize work
3. complexity-report → Understand difficulty
4. validate-deps → Ensure consistency

**Advanced Path:**

1. pipeline → Chain operations
2. smart-flow → Context-aware automation
3. Custom commands → Extend the system

### 6. **Try This Now**

Based on what you asked about, try:
[Specific command suggestion based on $ARGUMENTS]

Want to learn more about a specific command?
Type: /project:help <command-name>

================================================
FILE: .claude/commands/tm/tm-main.md
================================================

# Task Master Command Reference

Comprehensive command structure for Task Master integration with Claude Code.

## Command Organization

Commands are organized hierarchically to match Task Master's CLI structure while providing enhanced Claude Code integration.

## Project Setup & Configuration

### `/project:tm/init`

- `init-project` - Initialize new project (handles PRD files intelligently)
- `init-project-quick` - Quick setup with auto-confirmation (-y flag)

### `/project:tm/models`

- `view-models` - View current AI model configuration
- `setup-models` - Interactive model configuration
- `set-main` - Set primary generation model
- `set-research` - Set research model
- `set-fallback` - Set fallback model

## Task Generation

### `/project:tm/parse-prd`

- `parse-prd` - Generate tasks from PRD document
- `parse-prd-with-research` - Enhanced parsing with research mode

### `/project:tm/generate`

- `generate-tasks` - Create individual task files from tasks.json

## Task Management

### `/project:tm/list`

- `list-tasks` - Smart listing with natural language filters
- `list-tasks-with-subtasks` - Include subtasks in hierarchical view
- `list-tasks-by-status` - Filter by specific status

### `/project:tm/set-status`

- `to-pending` - Reset task to pending
- `to-in-progress` - Start working on task
- `to-done` - Mark task complete
- `to-review` - Submit for review
- `to-deferred` - Defer task
- `to-cancelled` - Cancel task

### `/project:tm/sync-readme`

- `sync-readme` - Export tasks to README.md with formatting

### `/project:tm/update`

- `update-task` - Update tasks with natural language
- `update-tasks-from-id` - Update multiple tasks from a starting point
- `update-single-task` - Update specific task

### `/project:tm/add-task`

- `add-task` - Add new task with AI assistance

### `/project:tm/remove-task`

- `remove-task` - Remove task with confirmation

## Subtask Management

### `/project:tm/add-subtask`

- `add-subtask` - Add new subtask to parent
- `convert-task-to-subtask` - Convert existing task to subtask

### `/project:tm/remove-subtask`

- `remove-subtask` - Remove subtask (with optional conversion)

### `/project:tm/clear-subtasks`

- `clear-subtasks` - Clear subtasks from specific task
- `clear-all-subtasks` - Clear all subtasks globally

## Task Analysis & Breakdown

### `/project:tm/analyze-complexity`

- `analyze-complexity` - Analyze and generate expansion recommendations

### `/project:tm/complexity-report`

- `complexity-report` - Display complexity analysis report

### `/project:tm/expand`

- `expand-task` - Break down specific task
- `expand-all-tasks` - Expand all eligible tasks
- `with-research` - Enhanced expansion

## Task Navigation

### `/project:tm/next`

- `next-task` - Intelligent next task recommendation

### `/project:tm/show`

- `show-task` - Display detailed task information

### `/project:tm/status`

- `project-status` - Comprehensive project dashboard

## Dependency Management

### `/project:tm/add-dependency`

- `add-dependency` - Add task dependency

### `/project:tm/remove-dependency`

- `remove-dependency` - Remove task dependency

### `/project:tm/validate-dependencies`

- `validate-dependencies` - Check for dependency issues

### `/project:tm/fix-dependencies`

- `fix-dependencies` - Automatically fix dependency problems

## Workflows & Automation

### `/project:tm/workflows`

- `smart-workflow` - Context-aware intelligent workflow execution
- `command-pipeline` - Chain multiple commands together
- `auto-implement-tasks` - Advanced auto-implementation with code generation

## Utilities

### `/project:tm/utils`

- `analyze-project` - Deep project analysis and insights

### `/project:tm/setup`

- `install-taskmaster` - Comprehensive installation guide
- `quick-install-taskmaster` - One-line global installation

## Usage Patterns

### Natural Language

Most commands accept natural language arguments:

```
/project:tm/add-task create user authentication system
/project:tm/update mark all API tasks as high priority
/project:tm/list show blocked tasks
```

### ID-Based Commands

Commands requiring IDs intelligently parse from $ARGUMENTS:

```
/project:tm/show 45
/project:tm/expand 23
/project:tm/set-status/to-done 67
```

### Smart Defaults

Commands provide intelligent defaults and suggestions based on context.

================================================
FILE: .claude/commands/tm/add-dependency/add-dependency.md
================================================
Add a dependency between tasks.

Arguments: $ARGUMENTS

Parse the task IDs to establish dependency relationship.

## Adding Dependencies

Creates a dependency where one task must be completed before another can start.

## Argument Parsing

Parse natural language or IDs:

- "make 5 depend on 3" → task 5 depends on task 3
- "5 needs 3" → task 5 depends on task 3
- "5 3" → task 5 depends on task 3
- "5 after 3" → task 5 depends on task 3

## Execution

```bash
task-master add-dependency --id=<task-id> --depends-on=<dependency-id>
```

## Validation

Before adding:

1. **Verify both tasks exist**
2. **Check for circular dependencies**
3. **Ensure dependency makes logical sense**
4. **Warn if creating complex chains**

## Smart Features

- Detect if dependency already exists
- Suggest related dependencies
- Show impact on task flow
- Update task priorities if needed

## Post-Addition

After adding dependency:

1. Show updated dependency graph
2. Identify any newly blocked tasks
3. Suggest task order changes
4. Update project timeline

## Example Flows

```
/project:tm/add-dependency 5 needs 3
→ Task #5 now depends on Task #3
→ Task #5 is now blocked until #3 completes
→ Suggested: Also consider if #5 needs #4
```

================================================
FILE: .claude/commands/tm/add-subtask/add-subtask.md
================================================
Add a subtask to a parent task.

Arguments: $ARGUMENTS

Parse arguments to create a new subtask or convert existing task.

## Adding Subtasks

Creates subtasks to break down complex parent tasks into manageable pieces.

## Argument Parsing

Flexible natural language:

- "add subtask to 5: implement login form"
- "break down 5 with: setup, implement, test"
- "subtask for 5: handle edge cases"
- "5: validate user input" → adds subtask to task 5

## Execution Modes

### 1. Create New Subtask

```bash
task-master add-subtask --parent=<id> --title="<title>" --description="<desc>"
```

### 2. Convert Existing Task

```bash
task-master add-subtask --parent=<id> --task-id=<existing-id>
```

## Smart Features

1. **Automatic Subtask Generation**

   - If title contains "and" or commas, create multiple
   - Suggest common subtask patterns
   - Inherit parent's context

2. **Intelligent Defaults**

   - Priority based on parent
   - Appropriate time estimates
   - Logical dependencies between subtasks

3. **Validation**
   - Check parent task complexity
   - Warn if too many subtasks
   - Ensure subtask makes sense

## Creation Process

1. Parse parent task context
2. Generate subtask with ID like "5.1"
3. Set appropriate defaults
4. Link to parent task
5. Update parent's time estimate

## Example Flows

```
/project:tm/add-subtask to 5: implement user authentication
→ Created subtask #5.1: "implement user authentication"
→ Parent task #5 now has 1 subtask
→ Suggested next subtasks: tests, documentation

/project:tm/add-subtask 5: setup, implement, test
→ Created 3 subtasks:
  #5.1: setup
  #5.2: implement
  #5.3: test
```

## Post-Creation

- Show updated task hierarchy
- Suggest logical next subtasks
- Update complexity estimates
- Recommend subtask order

================================================
FILE: .claude/commands/tm/add-subtask/convert-task-to-subtask.md
================================================
Convert an existing task into a subtask.

Arguments: $ARGUMENTS

Parse parent ID and task ID to convert.

## Task Conversion

Converts an existing standalone task into a subtask of another task.

## Argument Parsing

- "move task 8 under 5"
- "make 8 a subtask of 5"
- "nest 8 in 5"
- "5 8" → make task 8 a subtask of task 5

## Execution

```bash
task-master add-subtask --parent=<parent-id> --task-id=<task-to-convert>
```

## Pre-Conversion Checks

1. **Validation**

   - Both tasks exist and are valid
   - No circular parent relationships
   - Task isn't already a subtask
   - Logical hierarchy makes sense

2. **Impact Analysis**
   - Dependencies that will be affected
   - Tasks that depend on converting task
   - Priority alignment needed
   - Status compatibility

## Conversion Process

1. Change task ID from "8" to "5.1" (next available)
2. Update all dependency references
3. Inherit parent's context where appropriate
4. Adjust priorities if needed
5. Update time estimates

## Smart Features

- Preserve task history
- Maintain dependencies
- Update all references
- Create conversion log

## Example

```
/project:tm/add-subtask/from-task 5 8
→ Converting: Task #8 becomes subtask #5.1
→ Updated: 3 dependency references
→ Parent task #5 now has 1 subtask
→ Note: Subtask inherits parent's priority

Before: #8 "Implement validation" (standalone)
After:  #5.1 "Implement validation" (subtask of #5)
```

## Post-Conversion

- Show new task hierarchy
- List updated dependencies
- Verify project integrity
- Suggest related conversions

================================================
FILE: .claude/commands/tm/add-task/add-task.md
================================================
Add new tasks with intelligent parsing and context awareness.

Arguments: $ARGUMENTS

## Smart Task Addition

Parse natural language to create well-structured tasks.

### 1. **Input Understanding**

I'll intelligently parse your request:

- Natural language → Structured task
- Detect priority from keywords (urgent, ASAP, important)
- Infer dependencies from context
- Suggest complexity based on description
- Determine task type (feature, bug, refactor, test, docs)

### 2. **Smart Parsing Examples**

**"Add urgent task to fix login bug"**
→ Title: Fix login bug
→ Priority: high
→ Type: bug
→ Suggested complexity: medium

**"Create task for API documentation after task 23 is done"**
→ Title: API documentation
→ Dependencies: [23]
→ Type: documentation
→ Priority: medium

**"Need to refactor auth module - depends on 12 and 15, high complexity"**
→ Title: Refactor auth module
→ Dependencies: [12, 15]
→ Complexity: high
→ Type: refactor

### 3. **Context Enhancement**

Based on current project state:

- Suggest related existing tasks
- Warn about potential conflicts
- Recommend dependencies
- Propose subtasks if complex

### 4. **Interactive Refinement**

```yaml
Task Preview:
─────────────
Title: [Extracted title]
Priority: [Inferred priority]
Dependencies: [Detected dependencies]
Complexity: [Estimated complexity]

Suggestions:
- Similar task #34 exists, consider as dependency?
- This seems complex, break into subtasks?
- Tasks #45-47 work on same module
```

### 5. **Validation & Creation**

Before creating:

- Validate dependencies exist
- Check for duplicates
- Ensure logical ordering
- Verify task completeness

### 6. **Smart Defaults**

Intelligent defaults based on:

- Task type patterns
- Team conventions
- Historical data
- Current sprint/phase

Result: High-quality tasks from minimal input.

================================================
FILE: .claude/commands/tm/analyze-complexity/analyze-complexity.md
================================================
Analyze task complexity and generate expansion recommendations.

Arguments: $ARGUMENTS

Perform deep analysis of task complexity across the project.

## Complexity Analysis

Uses AI to analyze tasks and recommend which ones need breakdown.

## Execution Options

```bash
task-master analyze-complexity [--research] [--threshold=5]
```

## Analysis Parameters

- `--research` → Use research AI for deeper analysis
- `--threshold=5` → Only flag tasks above complexity 5
- Default: Analyze all pending tasks

## Analysis Process

### 1. **Task Evaluation**

For each task, AI evaluates:

- Technical complexity
- Time requirements
- Dependency complexity
- Risk factors
- Knowledge requirements

### 2. **Complexity Scoring**

Assigns score 1-10 based on:

- Implementation difficulty
- Integration challenges
- Testing requirements
- Unknown factors
- Technical debt risk

### 3. **Recommendations**

For complex tasks:

- Suggest expansion approach
- Recommend subtask breakdown
- Identify risk areas
- Propose mitigation strategies

## Smart Analysis Features

1. **Pattern Recognition**

   - Similar task comparisons
   - Historical complexity accuracy
   - Team velocity consideration
   - Technology stack factors

2. **Contextual Factors**

   - Team expertise
   - Available resources
   - Timeline constraints
   - Business criticality

3. **Risk Assessment**
   - Technical risks
   - Timeline risks
   - Dependency risks
   - Knowledge gaps

## Output Format

```
Task Complexity Analysis Report
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

High Complexity Tasks (>7):
📍 #5 "Implement real-time sync" - Score: 9/10
   Factors: WebSocket complexity, state management, conflict resolution
   Recommendation: Expand into 5-7 subtasks
   Risks: Performance, data consistency

📍 #12 "Migrate database schema" - Score: 8/10
   Factors: Data migration, zero downtime, rollback strategy
   Recommendation: Expand into 4-5 subtasks
   Risks: Data loss, downtime

Medium Complexity Tasks (5-7):
📍 #23 "Add export functionality" - Score: 6/10
   Consider expansion if timeline tight

Low Complexity Tasks (<5):
✅ 15 tasks - No expansion needed

Summary:
- Expand immediately: 2 tasks
- Consider expanding: 5 tasks
- Keep as-is: 15 tasks
```

## Actionable Output

For each high-complexity task:

1. Complexity score with reasoning
2. Specific expansion suggestions
3. Risk mitigation approaches
4. Recommended subtask structure

## Integration

Results are:

- Saved to `.taskmaster/reports/complexity-analysis.md`
- Used by expand command
- Inform sprint planning
- Guide resource allocation

## Next Steps

After analysis:

```
/project:tm/expand 5    # Expand specific task
/project:tm/expand/all  # Expand all recommended
/project:tm/complexity-report  # View detailed report
```

================================================
FILE: .claude/commands/tm/clear-subtasks/clear-all-subtasks.md
================================================
Clear all subtasks from all tasks globally.

## Global Subtask Clearing

Remove all subtasks across the entire project. Use with extreme caution.

## Execution

```bash
task-master clear-subtasks --all
```

## Pre-Clear Analysis

1. **Project-Wide Summary**

   ```
   Global Subtask Summary
   ━━━━━━━━━━━━━━━━━━━━
   Total parent tasks: 12
   Total subtasks: 47
   - Completed: 15
   - In-progress: 8
   - Pending: 24

   Work at risk: ~120 hours
   ```

2. **Critical Warnings**
   - In-progress subtasks that will lose work
   - Completed subtasks with valuable history
   - Complex dependency chains
   - Integration test results

## Double Confirmation

```
⚠️  DESTRUCTIVE OPERATION WARNING ⚠️
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This will remove ALL 47 subtasks from your project
Including 8 in-progress and 15 completed subtasks

This action CANNOT be undone

Type 'CLEAR ALL SUBTASKS' to confirm:
```

## Smart Safeguards

- Require explicit confirmation phrase
- Create automatic backup
- Log all removed data
- Option to export first

## Use Cases

Valid reasons for global clear:

- Project restructuring
- Major pivot in approach
- Starting fresh breakdown
- Switching to different task organization

## Process

1. Full project analysis
2. Create backup file
3. Show detailed impact
4. Require confirmation
5. Execute removal
6. Generate summary report

## Alternative Suggestions

Before clearing all:

- Export subtasks to file
- Clear only pending subtasks
- Clear by task category
- Archive instead of delete

## Post-Clear Report

```
Global Subtask Clear Complete
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Removed: 47 subtasks from 12 tasks
Backup saved: .taskmaster/backup/subtasks-20240115.json
Parent tasks updated: 12
Time estimates adjusted: Yes

Next steps:
- Review updated task list
- Re-expand complex tasks as needed
- Check project timeline
```

================================================
FILE: .claude/commands/tm/clear-subtasks/clear-subtasks.md
================================================
Clear all subtasks from a specific task.

Arguments: $ARGUMENTS (task ID)

Remove all subtasks from a parent task at once.

## Clearing Subtasks

Bulk removal of all subtasks from a parent task.

## Execution

```bash
task-master clear-subtasks --id=<task-id>
```

## Pre-Clear Analysis

1. **Subtask Summary**

   - Number of subtasks
   - Completion status of each
   - Work already done
   - Dependencies affected

2. **Impact Assessment**
   - Data that will be lost
   - Dependencies to be removed
   - Effect on project timeline
   - Parent task implications

## Confirmation Required

```
Clear Subtasks Confirmation
━━━━━━━━━━━━━━━━━━━━━━━━━
Parent Task: #5 "Implement user authentication"
Subtasks to remove: 4
- #5.1 "Setup auth framework" (done)
- #5.2 "Create login form" (in-progress)
- #5.3 "Add validation" (pending)
- #5.4 "Write tests" (pending)

⚠️  This will permanently delete all subtask data
Continue? (y/n)
```

## Smart Features

- Option to convert to standalone tasks
- Backup task data before clearing
- Preserve completed work history
- Update parent task appropriately

## Process

1. List all subtasks for confirmation
2. Check for in-progress work
3. Remove all subtasks
4. Update parent task
5. Clean up dependencies

## Alternative Options

Suggest alternatives:

- Convert important subtasks to tasks
- Keep completed subtasks
- Archive instead of delete
- Export subtask data first

## Post-Clear

- Show updated parent task
- Recalculate time estimates
- Update task complexity
- Suggest next steps

## Example

```
/project:tm/clear-subtasks 5
→ Found 4 subtasks to remove
→ Warning: Subtask #5.2 is in-progress
→ Cleared all subtasks from task #5
→ Updated parent task estimates
→ Suggestion: Consider re-expanding with better breakdown
```

================================================
FILE: .claude/commands/tm/complexity-report/complexity-report.md
================================================
Display the task complexity analysis report.

Arguments: $ARGUMENTS

View the detailed complexity analysis generated by analyze-complexity command.

## Viewing Complexity Report

Shows comprehensive task complexity analysis with actionable insights.

## Execution

```bash
task-master complexity-report [--file=<path>]
```

## Report Location

Default: `.taskmaster/reports/complexity-analysis.md`
Custom: Specify with --file parameter

## Report Contents

### 1. **Executive Summary**

```
Complexity Analysis Summary
━━━━━━━━━━━━━━━━━━━━━━━━
Analysis Date: 2024-01-15
Tasks Analyzed: 32
High Complexity: 5 (16%)
Medium Complexity: 12 (37%)
Low Complexity: 15 (47%)

Critical Findings:
- 5 tasks need immediate expansion
- 3 tasks have high technical risk
- 2 tasks block critical path
```

### 2. **Detailed Task Analysis**

For each complex task:

- Complexity score breakdown
- Contributing factors
- Specific risks identified
- Expansion recommendations
- Similar completed tasks

### 3. **Risk Matrix**

Visual representation:

```
Risk vs Complexity Matrix
━━━━━━━━━━━━━━━━━━━━━━━
High Risk  | #5(9) #12(8) | #23(6)
Med Risk   | #34(7)       | #45(5) #67(5)
Low Risk   | #78(8)       | [15 tasks]
           | High Complex  | Med Complex
```

### 4. **Recommendations**

**Immediate Actions:**

1. Expand task #5 - Critical path + high complexity
2. Expand task #12 - High risk + dependencies
3. Review task #34 - Consider splitting

**Sprint Planning:**

- Don't schedule multiple high-complexity tasks together
- Ensure expertise available for complex tasks
- Build in buffer time for unknowns

## Interactive Features

When viewing report:

1. **Quick Actions**

   - Press 'e' to expand a task
   - Press 'd' for task details
   - Press 'r' to refresh analysis

2. **Filtering**

   - View by complexity level
   - Filter by risk factors
   - Show only actionable items

3. **Export Options**
   - Markdown format
   - CSV for spreadsheets
   - JSON for tools

## Report Intelligence

- Compares with historical data
- Shows complexity trends
- Identifies patterns
- Suggests process improvements

## Integration

Use report for:

- Sprint planning sessions
- Resource allocation
- Risk assessment
- Team discussions
- Client updates

## Example Usage

```
/project:tm/complexity-report
→ Opens latest analysis

/project:tm/complexity-report --file=archived/2024-01-01.md
→ View historical analysis

After viewing:
/project:tm/expand 5
→ Expand high-complexity task
```

================================================
FILE: .claude/commands/tm/expand/expand-all-tasks.md
================================================
Expand all pending tasks that need subtasks.

## Bulk Task Expansion

Intelligently expands all tasks that would benefit from breakdown.

## Execution

```bash
task-master expand --all
```

## Smart Selection

Only expands tasks that:

- Are marked as pending
- Have high complexity (>5)
- Lack existing subtasks
- Would benefit from breakdown

## Expansion Process

1. **Analysis Phase**

   - Identify expansion candidates
   - Group related tasks
   - Plan expansion strategy

2. **Batch Processing**

   - Expand tasks in logical order
   - Maintain consistency
   - Preserve relationships
   - Optimize for parallelism

3. **Quality Control**
   - Ensure subtask quality
   - Avoid over-decomposition
   - Maintain task coherence
   - Update dependencies

## Options

- Add `force` to expand all regardless of complexity
- Add `research` for enhanced AI analysis

## Results

After bulk expansion:

- Summary of tasks expanded
- New subtask count
- Updated complexity metrics
- Suggested task order

================================================
FILE: .claude/commands/tm/expand/expand-task.md
================================================
Break down a complex task into subtasks.

Arguments: $ARGUMENTS (task ID)

## Intelligent Task Expansion

Analyzes a task and creates detailed subtasks for better manageability.

## Execution

```bash
task-master expand --id=$ARGUMENTS
```

## Expansion Process

1. **Task Analysis**

   - Review task complexity
   - Identify components
   - Detect technical challenges
   - Estimate time requirements

2. **Subtask Generation**

   - Create 3-7 subtasks typically
   - Each subtask 1-4 hours
   - Logical implementation order
   - Clear acceptance criteria

3. **Smart Breakdown**
   - Setup/configuration tasks
   - Core implementation
   - Testing components
   - Integration steps
   - Documentation updates

## Enhanced Features

Based on task type:

- **Feature**: Setup → Implement → Test → Integrate
- **Bug Fix**: Reproduce → Diagnose → Fix → Verify
- **Refactor**: Analyze → Plan → Refactor → Validate

## Post-Expansion

After expansion:

1. Show subtask hierarchy
2. Update time estimates
3. Suggest implementation order
4. Highlight critical path

================================================
FILE: .claude/commands/tm/fix-dependencies/fix-dependencies.md
================================================
Automatically fix dependency issues found during validation.

## Automatic Dependency Repair

Intelligently fixes common dependency problems while preserving project logic.

## Execution

```bash
task-master fix-dependencies
```

## What Gets Fixed

### 1. **Auto-Fixable Issues**

- Remove references to deleted tasks
- Break simple circular dependencies
- Remove self-dependencies
- Clean up duplicate dependencies

### 2. **Smart Resolutions**

- Reorder dependencies to maintain logic
- Suggest task merging for over-dependent tasks
- Flatten unnecessary dependency chains
- Remove redundant transitive dependencies

### 3. **Manual Review Required**

- Complex circular dependencies
- Critical path modifications
- Business logic dependencies
- High-impact changes

## Fix Process

1. **Analysis Phase**

   - Run validation check
   - Categorize issues by type
   - Determine fix strategy

2. **Execution Phase**

   - Apply automatic fixes
   - Log all changes made
   - Preserve task relationships

3. **Verification Phase**
   - Re-validate after fixes
   - Show before/after comparison
   - Highlight manual fixes needed

## Smart Features

- Preserves intended task flow
- Minimal disruption approach
- Creates fix history/log
- Suggests manual interventions

## Output Example

```
Dependency Auto-Fix Report
━━━━━━━━━━━━━━━━━━━━━━━━
Fixed Automatically:
✅ Removed 2 references to deleted tasks
✅ Resolved 1 self-dependency
✅ Cleaned 3 redundant dependencies

Manual Review Needed:
⚠️ Complex circular dependency: #12 → #15 → #18 → #12
  Suggestion: Make #15 not depend on #12
⚠️ Task #45 has 8 dependencies
  Suggestion: Break into subtasks

Run '/project:tm/validate-dependencies' to verify fixes
```

## Safety

- Preview mode available
- Rollback capability
- Change logging
- No data loss

================================================
FILE: .claude/commands/tm/generate/generate-tasks.md
================================================
Generate individual task files from tasks.json.

## Task File Generation

Creates separate markdown files for each task, perfect for AI agents or documentation.

## Execution

```bash
task-master generate
```

## What It Creates

For each task, generates a file like `task_001.txt`:

```
Task ID: 1
Title: Implement user authentication
Status: pending
Priority: high
Dependencies: []
Created: 2024-01-15
Complexity: 7

## Description
Create a secure user authentication system with login, logout, and session management.

## Details
- Use JWT tokens for session management
- Implement secure password hashing
- Add remember me functionality
- Include password reset flow

## Test Strategy
- Unit tests for auth functions
- Integration tests for login flow
- Security testing for vulnerabilities
- Performance tests for concurrent logins

## Subtasks
1.1 Setup authentication framework (pending)
1.2 Create login endpoints (pending)
1.3 Implement session management (pending)
1.4 Add password reset (pending)
```

## File Organization

Creates structure:

```
.taskmaster/
└── tasks/
    ├── task_001.txt
    ├── task_002.txt
    ├── task_003.txt
    └── ...
```

## Smart Features

1. **Consistent Formatting**

   - Standardized structure
   - Clear sections
   - AI-readable format
   - Markdown compatible

2. **Contextual Information**

   - Full task details
   - Related task references
   - Progress indicators
   - Implementation notes

3. **Incremental Updates**
   - Only regenerate changed tasks
   - Preserve custom additions
   - Track generation timestamp
   - Version control friendly

## Use Cases

- **AI Context**: Provide task context to AI assistants
- **Documentation**: Standalone task documentation
- **Archival**: Task history preservation
- **Sharing**: Send specific tasks to team members
- **Review**: Easier task review process

## Generation Options

Based on arguments:

- Filter by status
- Include/exclude completed
- Custom templates
- Different formats

## Post-Generation

```
Task File Generation Complete
━━━━━━━━━━━━━━━━━━━━━━━━━━
Generated: 45 task files
Location: .taskmaster/tasks/
Total size: 156 KB

New files: 5
Updated files: 12
Unchanged: 28

Ready for:
- AI agent consumption
- Version control
- Team distribution
```

## Integration Benefits

- Git-trackable task history
- Easy task sharing
- AI tool compatibility
- Offline task access
- Backup redundancy

================================================
FILE: .claude/commands/tm/init/init-project-quick.md
================================================
Quick initialization with auto-confirmation.

Arguments: $ARGUMENTS

Initialize a Task Master project without prompts, accepting all defaults.

## Quick Setup

```bash
task-master init -y
```

## What It Does

1. Creates `.taskmaster/` directory structure
2. Initializes empty `tasks.json`
3. Sets up default configuration
4. Uses directory name as project name
5. Skips all confirmation prompts

## Smart Defaults

- Project name: Current directory name
- Description: "Task Master Project"
- Model config: Existing environment vars
- Task structure: Standard format

## Next Steps

After quick init:

1. Configure AI models if needed:

   ```
   /project:tm/models/setup
   ```

2. Parse PRD if available:

   ```
   /project:tm/parse-prd <file>
   ```

3. Or create first task:
   ```
   /project:tm/add-task create initial setup
   ```

Perfect for rapid project setup!

================================================
FILE: .claude/commands/tm/init/init-project.md
================================================
Initialize a new Task Master project.

Arguments: $ARGUMENTS

Parse arguments to determine initialization preferences.

## Initialization Process

1. **Parse Arguments**

   - PRD file path (if provided)
   - Project name
   - Auto-confirm flag (-y)

2. **Project Setup**

   ```bash
   task-master init
   ```

3. **Smart Initialization**
   - Detect existing project files
   - Suggest project name from directory
   - Check for git repository
   - Verify AI provider configuration

## Configuration Options

Based on arguments:

- `quick` / `-y` → Skip confirmations
- `<file.md>` → Use as PRD after init
- `--name=<name>` → Set project name
- `--description=<desc>` → Set description

## Post-Initialization

After successful init:

1. Show project structure created
2. Verify AI models configured
3. Suggest next steps:
   - Parse PRD if available
   - Configure AI providers
   - Set up git hooks
   - Create first tasks

## Integration

If PRD file provided:

```
/project:tm/init my-prd.md
→ Automatically runs parse-prd after init
```

================================================
FILE: .claude/commands/tm/list/list-tasks-by-status.md
================================================
List tasks filtered by a specific status.

Arguments: $ARGUMENTS

Parse the status from arguments and list only tasks matching that status.

## Status Options

- `pending` - Not yet started
- `in-progress` - Currently being worked on
- `done` - Completed
- `review` - Awaiting review
- `deferred` - Postponed
- `cancelled` - Cancelled

## Execution

Based on $ARGUMENTS, run:

```bash
task-master list --status=$ARGUMENTS
```

## Enhanced Display

For the filtered results:

- Group by priority within the status
- Show time in current status
- Highlight tasks approaching deadlines
- Display blockers and dependencies
- Suggest next actions for each status group

## Intelligent Insights

Based on the status filter:

- **Pending**: Show recommended start order
- **In-Progress**: Display idle time warnings
- **Done**: Show newly unblocked tasks
- **Review**: Indicate review duration
- **Deferred**: Show reactivation criteria
- **Cancelled**: Display impact analysis

================================================
FILE: .claude/commands/tm/list/list-tasks-with-subtasks.md
================================================
List all tasks including their subtasks in a hierarchical view.

This command shows all tasks with their nested subtasks, providing a complete project overview.

## Execution

Run the Task Master list command with subtasks flag:

```bash
task-master list --with-subtasks
```

## Enhanced Display

I'll organize the output to show:

- Parent tasks with clear indicators
- Nested subtasks with proper indentation
- Status badges for quick scanning
- Dependencies and blockers highlighted
- Progress indicators for tasks with subtasks

## Smart Filtering

Based on the task hierarchy:

- Show completion percentage for parent tasks
- Highlight blocked subtask chains
- Group by functional areas
- Indicate critical path items

This gives you a complete tree view of your project structure.

================================================
FILE: .claude/commands/tm/list/list-tasks.md
================================================
List tasks with intelligent argument parsing.

Parse arguments to determine filters and display options:

- Status: pending, in-progress, done, review, deferred, cancelled
- Priority: high, medium, low (or priority:high)
- Special: subtasks, tree, dependencies, blocked
- IDs: Direct numbers (e.g., "1,3,5" or "1-5")
- Complex: "pending high" = pending AND high priority

Arguments: $ARGUMENTS

Let me parse your request intelligently:

1. **Detect Filter Intent**

   - If arguments contain status keywords → filter by status
   - If arguments contain priority → filter by priority
   - If arguments contain "subtasks" → include subtasks
   - If arguments contain "tree" → hierarchical view
   - If arguments contain numbers → show specific tasks
   - If arguments contain "blocked" → show blocked tasks only

2. **Smart Combinations**
   Examples of what I understand:

   - "pending high" → pending tasks with high priority
   - "done today" → tasks completed today
   - "blocked" → tasks with unmet dependencies
   - "1-5" → tasks 1 through 5
   - "subtasks tree" → hierarchical view with subtasks

3. **Execute Appropriate Query**
   Based on parsed intent, run the most specific task-master command

4. **Enhanced Display**

   - Group by relevant criteria
   - Show most important information first
   - Use visual indicators for quick scanning
   - Include relevant metrics

5. **Intelligent Suggestions**
   Based on what you're viewing, suggest next actions:
   - Many pending? → Suggest priority order
   - Many blocked? → Show dependency resolution
   - Looking at specific tasks? → Show related tasks

================================================
FILE: .claude/commands/tm/models/setup-models.md
================================================
Run interactive setup to configure AI models.

## Interactive Model Configuration

Guides you through setting up AI providers for Task Master.

## Execution

```bash
task-master models --setup
```

## Setup Process

1. **Environment Check**

   - Detect existing API keys
   - Show current configuration
   - Identify missing providers

2. **Provider Selection**

   - Choose main provider (required)
   - Select research provider (recommended)
   - Configure fallback (optional)

3. **API Key Configuration**
   - Prompt for missing keys
   - Validate key format
   - Test connectivity
   - Save configuration

## Smart Recommendations

Based on your needs:

- **For best results**: Claude + Perplexity
- **Budget conscious**: GPT-3.5 + Perplexity
- **Maximum capability**: GPT-4 + Perplexity + Claude fallback

## Configuration Storage

Keys can be stored in:

1. Environment variables (recommended)
2. `.env` file in project
3. Global `.taskmaster/config`

## Post-Setup

After configuration:

- Test each provider
- Show usage examples
- Suggest next steps
- Verify parse-prd works

================================================
FILE: .claude/commands/tm/models/view-models.md
================================================
View current AI model configuration.

## Model Configuration Display

Shows the currently configured AI providers and models for Task Master.

## Execution

```bash
task-master models
```

## Information Displayed

1. **Main Provider**

   - Model ID and name
   - API key status (configured/missing)
   - Usage: Primary task generation

2. **Research Provider**

   - Model ID and name
   - API key status
   - Usage: Enhanced research mode

3. **Fallback Provider**
   - Model ID and name
   - API key status
   - Usage: Backup when main fails

## Visual Status

```
Task Master AI Model Configuration
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Main:     ✅ claude-3-5-sonnet (configured)
Research: ✅ perplexity-sonar (configured)
Fallback: ⚠️  Not configured (optional)

Available Models:
- claude-3-5-sonnet
- gpt-4-turbo
- gpt-3.5-turbo
- perplexity-sonar
```

## Next Actions

Based on configuration:

- If missing API keys → Suggest setup
- If no research model → Explain benefits
- If all configured → Show usage tips

================================================
FILE: .claude/commands/tm/next/next-task.md
================================================
Intelligently determine and prepare the next action based on comprehensive context.

This enhanced version of 'next' considers:

- Current task states
- Recent activity
- Time constraints
- Dependencies
- Your working patterns

Arguments: $ARGUMENTS

## Intelligent Next Action

### 1. **Context Gathering**

Let me analyze the current situation:

- Active tasks (in-progress)
- Recently completed tasks
- Blocked tasks
- Time since last activity
- Arguments provided: $ARGUMENTS

### 2. **Smart Decision Tree**

**If you have an in-progress task:**

- Has it been idle > 2 hours? → Suggest resuming or switching
- Near completion? → Show remaining steps
- Blocked? → Find alternative task

**If no in-progress tasks:**

- Unblocked high-priority tasks? → Start highest
- Complex tasks need breakdown? → Suggest expansion
- All tasks blocked? → Show dependency resolution

**Special arguments handling:**

- "quick" → Find task < 2 hours
- "easy" → Find low complexity task
- "important" → Find high priority regardless of complexity
- "continue" → Resume last worked task

### 3. **Preparation Workflow**

Based on selected task:

1. Show full context and history
2. Set up development environment
3. Run relevant tests
4. Open related files
5. Show similar completed tasks
6. Estimate completion time

### 4. **Alternative Suggestions**

Always provide options:

- Primary recommendation
- Quick alternative (< 1 hour)
- Strategic option (unblocks most tasks)
- Learning option (new technology/skill)

### 5. **Workflow Integration**

Seamlessly connect to:

- `/project:task-master:start [selected]`
- `/project:workflows:auto-implement`
- `/project:task-master:expand` (if complex)
- `/project:utils:complexity-report` (if unsure)

The goal: Zero friction from decision to implementation.

================================================
FILE: .claude/commands/tm/parse-prd/parse-prd-with-research.md
================================================
Parse PRD with enhanced research mode for better task generation.

Arguments: $ARGUMENTS (PRD file path)

## Research-Enhanced Parsing

Uses the research AI provider (typically Perplexity) for more comprehensive task generation with current best practices.

## Execution

```bash
task-master parse-prd --input=$ARGUMENTS --research
```

## Research Benefits

1. **Current Best Practices**

   - Latest framework patterns
   - Security considerations
   - Performance optimizations
   - Accessibility requirements

2. **Technical Deep Dive**

   - Implementation approaches
   - Library recommendations
   - Architecture patterns
   - Testing strategies

3. **Comprehensive Coverage**
   - Edge cases consideration
   - Error handling tasks
   - Monitoring setup
   - Deployment tasks

## Enhanced Output

Research mode typically:

- Generates more detailed tasks
- Includes industry standards
- Adds compliance considerations
- Suggests modern tooling

## When to Use

- New technology domains
- Complex requirements
- Regulatory compliance needed
- Best practices crucial

================================================
FILE: .claude/commands/tm/parse-prd/parse-prd.md
================================================
Parse a PRD document to generate tasks.

Arguments: $ARGUMENTS (PRD file path)

## Intelligent PRD Parsing

Analyzes your requirements document and generates a complete task breakdown.

## Execution

```bash
task-master parse-prd --input=$ARGUMENTS
```

## Parsing Process

1. **Document Analysis**

   - Extract key requirements
   - Identify technical components
   - Detect dependencies
   - Estimate complexity

2. **Task Generation**

   - Create 10-15 tasks by default
   - Include implementation tasks
   - Add testing tasks
   - Include documentation tasks
   - Set logical dependencies

3. **Smart Enhancements**
   - Group related functionality
   - Set appropriate priorities
   - Add acceptance criteria
   - Include test strategies

## Options

Parse arguments for modifiers:

- Number after filename → `--num-tasks`
- `research` → Use research mode
- `comprehensive` → Generate more tasks

## Post-Generation

After parsing:

1. Display task summary
2. Show dependency graph
3. Suggest task expansion for complex items
4. Recommend sprint planning

================================================
FILE: .claude/commands/tm/remove-dependency/remove-dependency.md
================================================
Remove a dependency between tasks.

Arguments: $ARGUMENTS

Parse the task IDs to remove dependency relationship.

## Removing Dependencies

Removes a dependency relationship, potentially unblocking tasks.

## Argument Parsing

Parse natural language or IDs:

- "remove dependency between 5 and 3"
- "5 no longer needs 3"
- "unblock 5 from 3"
- "5 3" → remove dependency of 5 on 3

## Execution

```bash
task-master remove-dependency --id=<task-id> --depends-on=<dependency-id>
```

## Pre-Removal Checks

1. **Verify dependency exists**
2. **Check impact on task flow**
3. **Warn if it breaks logical sequence**
4. **Show what will be unblocked**

## Smart Analysis

Before removing:

- Show why dependency might have existed
- Check if removal makes tasks executable
- Verify no critical path disruption
- Suggest alternative dependencies

## Post-Removal

After removing:

1. Show updated task status
2. List newly unblocked tasks
3. Update project timeline
4. Suggest next actions

## Safety Features

- Confirm if removing critical dependency
- Show tasks that become immediately actionable
- Warn about potential issues
- Keep removal history

## Example

```
/project:tm/remove-dependency 5 from 3
→ Removed: Task #5 no longer depends on #3
→ Task #5 is now UNBLOCKED and ready to start
→ Warning: Consider if #5 still needs #2 completed first
```

================================================
FILE: .claude/commands/tm/remove-subtask/remove-subtask.md
================================================
Remove a subtask from its parent task.

Arguments: $ARGUMENTS

Parse subtask ID to remove, with option to convert to standalone task.

## Removing Subtasks

Remove a subtask and optionally convert it back to a standalone task.

## Argument Parsing

- "remove subtask 5.1"
- "delete 5.1"
- "convert 5.1 to task" → remove and convert
- "5.1 standalone" → convert to standalone

## Execution Options

### 1. Delete Subtask

```bash
task-master remove-subtask --id=<parentId.subtaskId>
```

### 2. Convert to Standalone

```bash
task-master remove-subtask --id=<parentId.subtaskId> --convert
```

## Pre-Removal Checks

1. **Validate Subtask**

   - Verify subtask exists
   - Check completion status
   - Review dependencies

2. **Impact Analysis**
   - Other subtasks that depend on it
   - Parent task implications
   - Data that will be lost

## Removal Process

### For Deletion:

1. Confirm if subtask has work done
2. Update parent task estimates
3. Remove subtask and its data
4. Clean up dependencies

### For Conversion:

1. Assign new standalone task ID
2. Preserve all task data
3. Update dependency references
4. Maintain task history

## Smart Features

- Warn if subtask is in-progress
- Show impact on parent task
- Preserve important data
- Update related estimates

## Example Flows

```
/project:tm/remove-subtask 5.1
→ Warning: Subtask #5.1 is in-progress
→ This will delete all subtask data
→ Parent task #5 will be updated
Confirm deletion? (y/n)

/project:tm/remove-subtask 5.1 convert
→ Converting subtask #5.1 to standalone task #89
→ Preserved: All task data and history
→ Updated: 2 dependency references
→ New task #89 is now independent
```

## Post-Removal

- Update parent task status
- Recalculate estimates
- Show updated hierarchy
- Suggest next actions

================================================
FILE: .claude/commands/tm/remove-task/remove-task.md
================================================
[Binary file]

================================================
FILE: .claude/commands/tm/set-status/to-cancelled.md
================================================
Cancel a task permanently.

Arguments: $ARGUMENTS (task ID)

## Cancelling a Task

This status indicates a task is no longer needed and won't be completed.

## Valid Reasons for Cancellation

- Requirements changed
- Feature deprecated
- Duplicate of another task
- Strategic pivot
- Technical approach invalidated

## Pre-Cancellation Checks

1. Confirm no critical dependencies
2. Check for partial implementation
3. Verify cancellation rationale
4. Document lessons learned

## Execution

```bash
task-master set-status --id=$ARGUMENTS --status=cancelled
```

## Cancellation Impact

When cancelling:

1. **Dependency Updates**

   - Notify dependent tasks
   - Update project scope
   - Recalculate timelines

2. **Clean-up Actions**

   - Remove related branches
   - Archive any work done
   - Update documentation
   - Close related issues

3. **Learning Capture**
   - Document why cancelled
   - Note what was learned
   - Update estimation models
   - Prevent future duplicates

## Historical Preservation

- Keep for reference
- Tag with cancellation reason
- Link to replacement if any
- Maintain audit trail

================================================
FILE: .claude/commands/tm/set-status/to-deferred.md
================================================
Defer a task for later consideration.

Arguments: $ARGUMENTS (task ID)

## Deferring a Task

This status indicates a task is valid but not currently actionable or prioritized.

## Valid Reasons for Deferral

- Waiting for external dependencies
- Reprioritized for future sprint
- Blocked by technical limitations
- Resource constraints
- Strategic timing considerations

## Execution

```bash
task-master set-status --id=$ARGUMENTS --status=deferred
```

## Deferral Management

When deferring:

1. **Document Reason**

   - Capture why it's being deferred
   - Set reactivation criteria
   - Note any partial work completed

2. **Impact Analysis**

   - Check dependent tasks
   - Update project timeline
   - Notify affected stakeholders

3. **Future Planning**
   - Set review reminders
   - Tag for specific milestone
   - Preserve context for reactivation
   - Link to blocking issues

## Smart Tracking

- Monitor deferral duration
- Alert when criteria met
- Prevent scope creep
- Regular review cycles

================================================
FILE: .claude/commands/tm/set-status/to-done.md
================================================
Mark a task as completed.

Arguments: $ARGUMENTS (task ID)

## Completing a Task

This command validates task completion and updates project state intelligently.

## Pre-Completion Checks

1. Verify test strategy was followed
2. Check if all subtasks are complete
3. Validate acceptance criteria met
4. Ensure code is committed

## Execution

```bash
task-master set-status --id=$ARGUMENTS --status=done
```

## Post-Completion Actions

1. **Update Dependencies**

   - Identify newly unblocked tasks
   - Update sprint progress
   - Recalculate project timeline

2. **Documentation**

   - Generate completion summary
   - Update CLAUDE.md with learnings
   - Log implementation approach

3. **Next Steps**
   - Show newly available tasks
   - Suggest logical next task
   - Update velocity metrics

## Celebration & Learning

- Show impact of completion
- Display unblocked work
- Recognize achievement
- Capture lessons learned

================================================
FILE: .claude/commands/tm/set-status/to-in-progress.md
================================================
Start working on a task by setting its status to in-progress.

Arguments: $ARGUMENTS (task ID)

## Starting Work on Task

This command does more than just change status - it prepares your environment for productive work.

## Pre-Start Checks

1. Verify dependencies are met
2. Check if another task is already in-progress
3. Ensure task details are complete
4. Validate test strategy exists

## Execution

```bash
task-master set-status --id=$ARGUMENTS --status=in-progress
```

## Environment Setup

After setting to in-progress:

1. Create/checkout appropriate git branch
2. Open relevant documentation
3. Set up test watchers if applicable
4. Display task details and acceptance criteria
5. Show similar completed tasks for reference

## Smart Suggestions

- Estimated completion time based on complexity
- Related files from similar tasks
- Potential blockers to watch for
- Recommended first steps

================================================
FILE: .claude/commands/tm/set-status/to-pending.md
================================================
Set a task's status to pending.

Arguments: $ARGUMENTS (task ID)

## Setting Task to Pending

This moves a task back to the pending state, useful for:

- Resetting erroneously started tasks
- Deferring work that was prematurely begun
- Reorganizing sprint priorities

## Execution

```bash
task-master set-status --id=$ARGUMENTS --status=pending
```

## Validation

Before setting to pending:

- Warn if task is currently in-progress
- Check if this will block other tasks
- Suggest documenting why it's being reset
- Preserve any work already done

## Smart Actions

After setting to pending:

- Update sprint planning if needed
- Notify about freed resources
- Suggest priority reassessment
- Log the status change with context

================================================
FILE: .claude/commands/tm/set-status/to-review.md
================================================
Set a task's status to review.

Arguments: $ARGUMENTS (task ID)

## Marking Task for Review

This status indicates work is complete but needs verification before final approval.

## When to Use Review Status

- Code complete but needs peer review
- Implementation done but needs testing
- Documentation written but needs proofreading
- Design complete but needs stakeholder approval

## Execution

```bash
task-master set-status --id=$ARGUMENTS --status=review
```

## Review Preparation

When setting to review:

1. **Generate Review Checklist**

   - Link to PR/MR if applicable
   - Highlight key changes
   - Note areas needing attention
   - Include test results

2. **Documentation**

   - Update task with review notes
   - Link relevant artifacts
   - Specify reviewers if known

3. **Smart Actions**
   - Create review reminders
   - Track review duration
   - Suggest reviewers based on expertise
   - Prepare rollback plan if needed

================================================
FILE: .claude/commands/tm/setup/install-taskmaster.md
================================================
Check if Task Master is installed and install it if needed.

This command helps you get Task Master set up globally on your system.

## Detection and Installation Process

1. **Check Current Installation**

   ```bash
   # Check if task-master command exists
   which task-master || echo "Task Master not found"

   # Check npm global packages
   npm list -g task-master-ai
   ```

2. **System Requirements Check**

   ```bash
   # Verify Node.js is installed
   node --version

   # Verify npm is installed
   npm --version

   # Check Node version (need 16+)
   ```

3. **Install Task Master Globally**
   If not installed, run:

   ```bash
   npm install -g task-master-ai
   ```

4. **Verify Installation**

   ```bash
   # Check version
   task-master --version

   # Verify command is available
   which task-master
   ```

5. **Initial Setup**

   ```bash
   # Initialize in current directory
   task-master init
   ```

6. **Configure AI Provider**
   Ensure you have at least one AI provider API key set:

   ```bash
   # Check current configuration
   task-master models --status

   # If no API keys found, guide setup
   echo "You'll need at least one API key:"
   echo "- ANTHROPIC_API_KEY for Claude"
   echo "- OPENAI_API_KEY for GPT models"
   echo "- PERPLEXITY_API_KEY for research"
   echo ""
   echo "Set them in your shell profile or .env file"
   ```

7. **Quick Test**

   ```bash
   # Create a test PRD
   echo "Build a simple hello world API" > test-prd.txt

   # Try parsing it
   task-master parse-prd test-prd.txt -n 3
   ```

## Troubleshooting

If installation fails:

**Permission Errors:**

```bash
# Try with sudo (macOS/Linux)
sudo npm install -g task-master-ai

# Or fix npm permissions
npm config set prefix ~/.npm-global
export PATH=~/.npm-global/bin:$PATH
```

**Network Issues:**

```bash
# Use different registry
npm install -g task-master-ai --registry https://registry.npmjs.org/
```

**Node Version Issues:**

```bash
# Install Node 18+ via nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
nvm use 18
```

## Success Confirmation

Once installed, you should see:

```
✅ Task Master v0.16.2 (or higher) installed
✅ Command 'task-master' available globally
✅ AI provider configured
✅ Ready to use slash commands!

Try: /project:task-master:init your-prd.md
```

## Next Steps

After installation:

1. Run `/project:utils:check-health` to verify setup
2. Configure AI providers with `/project:task-master:models`
3. Start using Task Master commands!

================================================
FILE: .claude/commands/tm/setup/quick-install-taskmaster.md
================================================
Quick install Task Master globally if not already installed.

Execute this streamlined installation:

```bash
# Check and install in one command
task-master --version 2>/dev/null || npm install -g task-master-ai

# Verify installation
task-master --version

# Quick setup check
task-master models --status || echo "Note: You'll need to set up an AI provider API key"
```

If you see "command not found" after installation, you may need to:

1. Restart your terminal
2. Or add npm global bin to PATH: `export PATH=$(npm bin -g):$PATH`

Once installed, you can use all the Task Master commands!

Quick test: Run `/project:help` to see all available commands.

================================================
FILE: .claude/commands/tm/show/show-task.md
================================================
Show detailed task information with rich context and insights.

Arguments: $ARGUMENTS

## Enhanced Task Display

Parse arguments to determine what to show and how.

### 1. **Smart Task Selection**

Based on $ARGUMENTS:

- Number → Show specific task with full context
- "current" → Show active in-progress task(s)
- "next" → Show recommended next task
- "blocked" → Show all blocked tasks with reasons
- "critical" → Show critical path tasks
- Multiple IDs → Comparative view

### 2. **Contextual Information**

For each task, intelligently include:

**Core Details**

- Full task information (id, title, description, details)
- Current status with history
- Test strategy and acceptance criteria
- Priority and complexity analysis

**Relationships**

- Dependencies (what it needs)
- Dependents (what needs it)
- Parent/subtask hierarchy
- Related tasks (similar work)

**Time Intelligence**

- Created/updated timestamps
- Time in current status
- Estimated vs actual time
- Historical completion patterns

### 3. **Visual Enhancements**

```
📋 Task #45: Implement User Authentication
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Status: 🟡 in-progress (2 hours)
Priority: 🔴 High | Complexity: 73/100

Dependencies: ✅ #41, ✅ #42, ⏳ #43 (blocked)
Blocks: #46, #47, #52

Progress: ████████░░ 80% complete

Recent Activity:
- 2h ago: Status changed to in-progress
- 4h ago: Dependency #42 completed
- Yesterday: Task expanded with 3 subtasks
```

### 4. **Intelligent Insights**

Based on task analysis:

- **Risk Assessment**: Complexity vs time remaining
- **Bottleneck Analysis**: Is this blocking critical work?
- **Recommendation**: Suggested approach or concerns
- **Similar Tasks**: How others completed similar work

### 5. **Action Suggestions**

Context-aware next steps:

- If blocked → Show how to unblock
- If complex → Suggest expansion
- If in-progress → Show completion checklist
- If done → Show dependent tasks ready to start

### 6. **Multi-Task View**

When showing multiple tasks:

- Common dependencies
- Optimal completion order
- Parallel work opportunities
- Combined complexity analysis

================================================
FILE: .claude/commands/tm/status/project-status.md
================================================
Enhanced status command with comprehensive project insights.

Arguments: $ARGUMENTS

## Intelligent Status Overview

### 1. **Executive Summary**

Quick dashboard view:

- 🏃 Active work (in-progress tasks)
- 📊 Progress metrics (% complete, velocity)
- 🚧 Blockers and risks
- ⏱️ Time analysis (estimated vs actual)
- 🎯 Sprint/milestone progress

### 2. **Contextual Analysis**

Based on $ARGUMENTS, focus on:

- "sprint" → Current sprint progress and burndown
- "blocked" → Dependency chains and resolution paths
- "team" → Task distribution and workload
- "timeline" → Schedule adherence and projections
- "risk" → High complexity or overdue items

### 3. **Smart Insights**

**Workflow Health:**

- Idle tasks (in-progress > 24h without updates)
- Bottlenecks (multiple tasks waiting on same dependency)
- Quick wins (low complexity, high impact)

**Predictive Analytics:**

- Completion projections based on velocity
- Risk of missing deadlines
- Recommended task order for optimal flow

### 4. **Visual Intelligence**

Dynamic visualization based on data:

```
Sprint Progress: ████████░░ 80% (16/20 tasks)
Velocity Trend: ↗️ +15% this week
Blocked Tasks:  🔴 3 critical path items

Priority Distribution:
High:   ████████ 8 tasks (2 blocked)
Medium: ████░░░░ 4 tasks
Low:    ██░░░░░░ 2 tasks
```

### 5. **Actionable Recommendations**

Based on analysis:

1. **Immediate actions** (unblock critical path)
2. **Today's focus** (optimal task sequence)
3. **Process improvements** (recurring patterns)
4. **Resource needs** (skills, time, dependencies)

### 6. **Historical Context**

Compare to previous periods:

- Velocity changes
- Pattern recognition
- Improvement areas
- Success patterns to repeat

================================================
FILE: .claude/commands/tm/sync-readme/sync-readme.md
================================================
Export tasks to README.md with professional formatting.

Arguments: $ARGUMENTS

Generate a well-formatted README with current task information.

## README Synchronization

Creates or updates README.md with beautifully formatted task information.

## Argument Parsing

Optional filters:

- "pending" → Only pending tasks
- "with-subtasks" → Include subtask details
- "by-priority" → Group by priority
- "sprint" → Current sprint only

## Execution

```bash
task-master sync-readme [--with-subtasks] [--status=<status>]
```

## README Generation

### 1. **Project Header**

```markdown
# Project Name

## 📋 Task Progress

Last Updated: 2024-01-15 10:30 AM

### Summary

- Total Tasks: 45
- Completed: 15 (33%)
- In Progress: 5 (11%)
- Pending: 25 (56%)
```

### 2. **Task Sections**

Organized by status or priority:

- Progress indicators
- Task descriptions
- Dependencies noted
- Time estimates

### 3. **Visual Elements**

- Progress bars
- Status badges
- Priority indicators
- Completion checkmarks

## Smart Features

1. **Intelligent Grouping**

   - By feature area
   - By sprint/milestone
   - By assigned developer
   - By priority

2. **Progress Tracking**

   - Overall completion
   - Sprint velocity
   - Burndown indication
   - Time tracking

3. **Formatting Options**
   - GitHub-flavored markdown
   - Task checkboxes
   - Collapsible sections
   - Table format available

## Example Output

```markdown
## 🚀 Current Sprint

### In Progress

- [ ] 🔄 #5 **Implement user authentication** (60% complete)
  - Dependencies: API design (#3 ✅)
  - Subtasks: 4 (2 completed)
  - Est: 8h / Spent: 5h

### Pending (High Priority)

- [ ] ⚡ #8 **Create dashboard UI**
  - Blocked by: #5
  - Complexity: High
  - Est: 12h
```

## Customization

Based on arguments:

- Include/exclude sections
- Detail level control
- Custom grouping
- Filter by criteria

## Post-Sync

After generation:

1. Show diff preview
2. Backup existing README
3. Write new content
4. Commit reminder
5. Update timestamp

## Integration

Works well with:

- Git workflows
- CI/CD pipelines
- Project documentation
- Team updates
- Client reports

================================================
FILE: .claude/commands/tm/update/update-single-task.md
================================================
Update a single specific task with new information.

Arguments: $ARGUMENTS

Parse task ID and update details.

## Single Task Update

Precisely update one task with AI assistance to maintain consistency.

## Argument Parsing

Natural language updates:

- "5: add caching requirement"
- "update 5 to include error handling"
- "task 5 needs rate limiting"
- "5 change priority to high"

## Execution

```bash
task-master update-task --id=<id> --prompt="<context>"
```

## Update Types

### 1. **Content Updates**

- Enhance description
- Add requirements
- Clarify details
- Update acceptance criteria

### 2. **Metadata Updates**

- Change priority
- Adjust time estimates
- Update complexity
- Modify dependencies

### 3. **Strategic Updates**

- Revise approach
- Change test strategy
- Update implementation notes
- Adjust subtask needs

## AI-Powered Updates

The AI:

1. **Understands Context**

   - Reads current task state
   - Identifies update intent
   - Maintains consistency
   - Preserves important info

2. **Applies Changes**

   - Updates relevant fields
   - Keeps style consistent
   - Adds without removing
   - Enhances clarity

3. **Validates Results**
   - Checks coherence
   - Verifies completeness
   - Maintains relationships
   - Suggests related updates

## Example Updates

```
/project:tm/update/single 5: add rate limiting
→ Updating Task #5: "Implement API endpoints"

Current: Basic CRUD endpoints
Adding: Rate limiting requirements

Updated sections:
✓ Description: Added rate limiting mention
✓ Details: Added specific limits (100/min)
✓ Test Strategy: Added rate limit tests
✓ Complexity: Increased from 5 to 6
✓ Time Estimate: Increased by 2 hours

Suggestion: Also update task #6 (API Gateway) for consistency?
```

## Smart Features

1. **Incremental Updates**

   - Adds without overwriting
   - Preserves work history
   - Tracks what changed
   - Shows diff view

2. **Consistency Checks**

   - Related task alignment
   - Subtask compatibility
   - Dependency validity
   - Timeline impact

3. **Update History**
   - Timestamp changes
   - Track who/what updated
   - Reason for update
   - Previous versions

## Field-Specific Updates

Quick syntax for specific fields:

- "5 priority:high" → Update priority only
- "5 add-time:4h" → Add to time estimate
- "5 status:review" → Change status
- "5 depends:3,4" → Add dependencies

## Post-Update

- Show updated task
- Highlight changes
- Check related tasks
- Update suggestions
- Timeline adjustments

================================================
FILE: .claude/commands/tm/update/update-task.md
================================================
Update tasks with intelligent field detection and bulk operations.

Arguments: $ARGUMENTS

## Intelligent Task Updates

Parse arguments to determine update intent and execute smartly.

### 1. **Natural Language Processing**

Understand update requests like:

- "mark 23 as done" → Update status to done
- "increase priority of 45" → Set priority to high
- "add dependency on 12 to task 34" → Add dependency
- "tasks 20-25 need review" → Bulk status update
- "all API tasks high priority" → Pattern-based update

### 2. **Smart Field Detection**

Automatically detect what to update:

- Status keywords: done, complete, start, pause, review
- Priority changes: urgent, high, low, deprioritize
- Dependency updates: depends on, blocks, after
- Assignment: assign to, owner, responsible
- Time: estimate, spent, deadline

### 3. **Bulk Operations**

Support for multiple task updates:

```
Examples:
- "complete tasks 12, 15, 18"
- "all pending auth tasks to in-progress"
- "increase priority for tasks blocking 45"
- "defer all documentation tasks"
```

### 4. **Contextual Validation**

Before updating, check:

- Status transitions are valid
- Dependencies don't create cycles
- Priority changes make sense
- Bulk updates won't break project flow

Show preview:

```
Update Preview:
─────────────────
Tasks to update: #23, #24, #25
Change: status → in-progress
Impact: Will unblock tasks #30, #31
Warning: Task #24 has unmet dependencies
```

### 5. **Smart Suggestions**

Based on update:

- Completing task? → Show newly unblocked tasks
- Changing priority? → Show impact on sprint
- Adding dependency? → Check for conflicts
- Bulk update? → Show summary of changes

### 6. **Workflow Integration**

After updates:

- Auto-update dependent task states
- Trigger status recalculation
- Update sprint/milestone progress
- Log changes with context

Result: Flexible, intelligent task updates with safety checks.

================================================
FILE: .claude/commands/tm/update/update-tasks-from-id.md
================================================
Update multiple tasks starting from a specific ID.

Arguments: $ARGUMENTS

Parse starting task ID and update context.

## Bulk Task Updates

Update multiple related tasks based on new requirements or context changes.

## Argument Parsing

- "from 5: add security requirements"
- "5 onwards: update API endpoints"
- "starting at 5: change to use new framework"

## Execution

```bash
task-master update --from=<id> --prompt="<context>"
```

## Update Process

### 1. **Task Selection**

Starting from specified ID:

- Include the task itself
- Include all dependent tasks
- Include related subtasks
- Smart boundary detection

### 2. **Context Application**

AI analyzes the update context and:

- Identifies what needs changing
- Maintains consistency
- Preserves completed work
- Updates related information

### 3. **Intelligent Updates**

- Modify descriptions appropriately
- Update test strategies
- Adjust time estimates
- Revise dependencies if needed

## Smart Features

1. **Scope Detection**

   - Find natural task groupings
   - Identify related features
   - Stop at logical boundaries
   - Avoid over-updating

2. **Consistency Maintenance**

   - Keep naming conventions
   - Preserve relationships
   - Update cross-references
   - Maintain task flow

3. **Change Preview**

   ```
   Bulk Update Preview
   ━━━━━━━━━━━━━━━━━━
   Starting from: Task #5
   Tasks to update: 8 tasks + 12 subtasks

   Context: "add security requirements"

   Changes will include:
   - Add security sections to descriptions
   - Update test strategies for security
   - Add security-related subtasks where needed
   - Adjust time estimates (+20% average)

   Continue? (y/n)
   ```

## Example Updates

```
/project:tm/update/from-id 5: change database to PostgreSQL
→ Analyzing impact starting from task #5
→ Found 6 related tasks to update
→ Updates will maintain consistency
→ Preview changes? (y/n)

Applied updates:
✓ Task #5: Updated connection logic references
✓ Task #6: Changed migration approach
✓ Task #7: Updated query syntax notes
✓ Task #8: Revised testing strategy
✓ Task #9: Updated deployment steps
✓ Task #12: Changed backup procedures
```

## Safety Features

- Preview all changes
- Selective confirmation
- Rollback capability
- Change logging
- Validation checks

## Post-Update

- Summary of changes
- Consistency verification
- Suggest review tasks
- Update timeline if needed

================================================
FILE: .claude/commands/tm/utils/analyze-project.md
================================================
Advanced project analysis with actionable insights and recommendations.

Arguments: $ARGUMENTS

## Comprehensive Project Analysis

Multi-dimensional analysis based on requested focus area.

### 1. **Analysis Modes**

Based on $ARGUMENTS:

- "velocity" → Sprint velocity and trends
- "quality" → Code quality metrics
- "risk" → Risk assessment and mitigation
- "dependencies" → Dependency graph analysis
- "team" → Workload and skill distribution
- "architecture" → System design coherence
- Default → Full spectrum analysis

### 2. **Velocity Analytics**

```
📊 Velocity Analysis
━━━━━━━━━━━━━━━━━━━
Current Sprint: 24 points/week ↗️ +20%
Rolling Average: 20 points/week
Efficiency: 85% (17/20 tasks on time)

Bottlenecks Detected:
- Code review delays (avg 4h wait)
- Test environment availability
- Dependency on external team

Recommendations:
1. Implement parallel review process
2. Add staging environment
3. Mock external dependencies
```

### 3. **Risk Assessment**

**Technical Risks**

- High complexity tasks without backup assignee
- Single points of failure in architecture
- Insufficient test coverage in critical paths
- Technical debt accumulation rate

**Project Risks**

- Critical path dependencies
- Resource availability gaps
- Deadline feasibility analysis
- Scope creep indicators

### 4. **Dependency Intelligence**

Visual dependency analysis:

```
Critical Path:
#12 → #15 → #23 → #45 → #50 (20 days)
         ↘ #24 → #46 ↗

Optimization: Parallelize #15 and #24
Time Saved: 3 days
```

### 5. **Quality Metrics**

**Code Quality**

- Test coverage trends
- Complexity scores
- Technical debt ratio
- Review feedback patterns

**Process Quality**

- Rework frequency
- Bug introduction rate
- Time to resolution
- Knowledge distribution

### 6. **Predictive Insights**

Based on patterns:

- Completion probability by deadline
- Resource needs projection
- Risk materialization likelihood
- Suggested interventions

### 7. **Executive Dashboard**

High-level summary with:

- Health score (0-100)
- Top 3 risks
- Top 3 opportunities
- Recommended actions
- Success probability

Result: Data-driven decisions with clear action paths.

================================================
FILE: .claude/commands/tm/validate-dependencies/validate-dependencies.md
================================================
Validate all task dependencies for issues.

## Dependency Validation

Comprehensive check for dependency problems across the entire project.

## Execution

```bash
task-master validate-dependencies
```

## Validation Checks

1. **Circular Dependencies**

   - A depends on B, B depends on A
   - Complex circular chains
   - Self-dependencies

2. **Missing Dependencies**

   - References to non-existent tasks
   - Deleted task references
   - Invalid task IDs

3. **Logical Issues**

   - Completed tasks depending on pending
   - Cancelled tasks in dependency chains
   - Impossible sequences

4. **Complexity Warnings**
   - Over-complex dependency chains
   - Too many dependencies per task
   - Bottleneck tasks

## Smart Analysis

The validation provides:

- Visual dependency graph
- Critical path analysis
- Bottleneck identification
- Suggested optimizations

## Report Format

```
Dependency Validation Report
━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ No circular dependencies found
⚠️  2 warnings found:
   - Task #23 has 7 dependencies (consider breaking down)
   - Task #45 blocks 5 other tasks (potential bottleneck)
❌ 1 error found:
   - Task #67 depends on deleted task #66

Critical Path: #1 → #5 → #23 → #45 → #50 (15 days)
```

## Actionable Output

For each issue found:

- Clear description
- Impact assessment
- Suggested fix
- Command to resolve

## Next Steps

After validation:

- Run `/project:tm/fix-dependencies` to auto-fix
- Manually adjust problematic dependencies
- Rerun to verify fixes

================================================
FILE: .claude/commands/tm/workflows/auto-implement-tasks.md
================================================
Enhanced auto-implementation with intelligent code generation and testing.

Arguments: $ARGUMENTS

## Intelligent Auto-Implementation

Advanced implementation with context awareness and quality checks.

### 1. **Pre-Implementation Analysis**

Before starting:

- Analyze task complexity and requirements
- Check codebase patterns and conventions
- Identify similar completed tasks
- Assess test coverage needs
- Detect potential risks

### 2. **Smart Implementation Strategy**

Based on task type and context:

**Feature Tasks**

1. Research existing patterns
2. Design component architecture
3. Implement with tests
4. Integrate with system
5. Update documentation

**Bug Fix Tasks**

1. Reproduce issue
2. Identify root cause
3. Implement minimal fix
4. Add regression tests
5. Verify side effects

**Refactoring Tasks**

1. Analyze current structure
2. Plan incremental changes
3. Maintain test coverage
4. Refactor step-by-step
5. Verify behavior unchanged

### 3. **Code Intelligence**

**Pattern Recognition**

- Learn from existing code
- Follow team conventions
- Use preferred libraries
- Match style guidelines

**Test-Driven Approach**

- Write tests first when possible
- Ensure comprehensive coverage
- Include edge cases
- Performance considerations

### 4. **Progressive Implementation**

Step-by-step with validation:

```
Step 1/5: Setting up component structure ✓
Step 2/5: Implementing core logic ✓
Step 3/5: Adding error handling ⚡ (in progress)
Step 4/5: Writing tests ⏳
Step 5/5: Integration testing ⏳

Current: Adding try-catch blocks and validation...
```

### 5. **Quality Assurance**

Automated checks:

- Linting and formatting
- Test execution
- Type checking
- Dependency validation
- Performance analysis

### 6. **Smart Recovery**

If issues arise:

- Diagnostic analysis
- Suggestion generation
- Fallback strategies
- Manual intervention points
- Learning from failures

### 7. **Post-Implementation**

After completion:

- Generate PR description
- Update documentation
- Log lessons learned
- Suggest follow-up tasks
- Update task relationships

Result: High-quality, production-ready implementations.

================================================
FILE: .claude/commands/tm/workflows/command-pipeline.md
================================================
Execute a pipeline of commands based on a specification.

Arguments: $ARGUMENTS

## Command Pipeline Execution

Parse pipeline specification from arguments. Supported formats:

### Simple Pipeline

`init → expand-all → sprint-plan`

### Conditional Pipeline

`status → if:pending>10 → sprint-plan → else → next`

### Iterative Pipeline

`for:pending-tasks → expand → complexity-check`

### Smart Pipeline Patterns

**1. Project Setup Pipeline**

```
init [prd] →
expand-all →
complexity-report →
sprint-plan →
show first-sprint
```

**2. Daily Work Pipeline**

```
standup →
if:in-progress → continue →
else → next → start
```

**3. Task Completion Pipeline**

```
complete [id] →
git-commit →
if:blocked-tasks-freed → show-freed →
next
```

**4. Quality Check Pipeline**

```
list in-progress →
for:each → check-idle-time →
if:idle>1day → prompt-update
```

### Pipeline Features

**Variables**

- Store results: `status → $count=pending-count`
- Use in conditions: `if:$count>10`
- Pass between commands: `expand $high-priority-tasks`

**Error Handling**

- On failure: `try:complete → catch:show-blockers`
- Skip on error: `optional:test-run`
- Retry logic: `retry:3:commit`

**Parallel Execution**

- Parallel branches: `[analyze | test | lint]`
- Join results: `parallel → join:report`

### Execution Flow

1. Parse pipeline specification
2. Validate command sequence
3. Execute with state passing
4. Handle conditions and loops
5. Aggregate results
6. Show summary

This enables complex workflows like:
`parse-prd → expand-all → filter:complex>70 → assign:senior → sprint-plan:weighted`

================================================
FILE: .claude/commands/tm/workflows/smart-workflow.md
================================================
Execute an intelligent workflow based on current project state and recent commands.

This command analyzes:

1. Recent commands you've run
2. Current project state
3. Time of day / day of week
4. Your working patterns

Arguments: $ARGUMENTS

## Intelligent Workflow Selection

Based on context, I'll determine the best workflow:

### Context Analysis

- Previous command executed
- Current task states
- Unfinished work from last session
- Your typical patterns

### Smart Execution

If last command was:

- `status` → Likely starting work → Run daily standup
- `complete` → Task finished → Find next task
- `list pending` → Planning → Suggest sprint planning
- `expand` → Breaking down work → Show complexity analysis
- `init` → New project → Show onboarding workflow

If no recent commands:

- Morning? → Daily standup workflow
- Many pending tasks? → Sprint planning
- Tasks blocked? → Dependency resolution
- Friday? → Weekly review

### Workflow Composition

I'll chain appropriate commands:

1. Analyze current state
2. Execute primary workflow
3. Suggest follow-up actions
4. Prepare environment for coding

### Learning Mode

This command learns from your patterns:

- Track command sequences
- Note time preferences
- Remember common workflows
- Adapt to your style

Example flows detected:

- Morning: standup → next → start
- After lunch: status → continue task
- End of day: complete → commit → status

================================================
FILE: .cursor/mcp.json
================================================
{
"mcpServers": {
"task-master-ai": {
"command": "npx",
"args": ["-y", "--package=task-master-ai", "task-master-ai"],
"env": {
"ANTHROPIC_API_KEY": "YOUR_ANTHROPIC_API_KEY_HERE",
"PERPLEXITY_API_KEY": "YOUR_PERPLEXITY_API_KEY_HERE",
"OPENAI_API_KEY": "YOUR_OPENAI_KEY_HERE",
"GOOGLE_API_KEY": "YOUR_GOOGLE_KEY_HERE",
"XAI_API_KEY": "YOUR_XAI_KEY_HERE",
"OPENROUTER_API_KEY": "YOUR_OPENROUTER_KEY_HERE",
"MISTRAL_API_KEY": "YOUR_MISTRAL_KEY_HERE",
"AZURE_OPENAI_API_KEY": "YOUR_AZURE_KEY_HERE",
"OLLAMA_API_KEY": "YOUR_OLLAMA_API_KEY_HERE"
}
}
}
}

================================================
FILE: .cursor/rules/cursor_rules.mdc
================================================

---

description: Guidelines for creating and maintaining Cursor rules to ensure consistency and effectiveness.
globs: .cursor/rules/\*.mdc
alwaysApply: true

---

- **Required Rule Structure:**

  ```markdown
  ---
  description: Clear, one-line description of what the rule enforces
  globs: path/to/files/*.ext, other/path/**/*
  alwaysApply: boolean
  ---

  - **Main Points in Bold**
    - Sub-points with details
    - Examples and explanations
  ```

- **File References:**

  - Use `[filename](mdc:path/to/file)` ([filename](mdc:filename)) to reference files
  - Example: [prisma.mdc](mdc:.cursor/rules/prisma.mdc) for rule references
  - Example: [schema.prisma](mdc:prisma/schema.prisma) for code references

- **Code Examples:**

  - Use language-specific code blocks

  ```typescript
  // ✅ DO: Show good examples
  const goodExample = true;

  // ❌ DON'T: Show anti-patterns
  const badExample = false;
  ```

- **Rule Content Guidelines:**

  - Start with high-level overview
  - Include specific, actionable requirements
  - Show examples of correct implementation
  - Reference existing code when possible
  - Keep rules DRY by referencing other rules

- **Rule Maintenance:**

  - Update rules when new patterns emerge
  - Add examples from actual codebase
  - Remove outdated patterns
  - Cross-reference related rules

- **Best Practices:**
  - Use bullet points for clarity
  - Keep descriptions concise
  - Include both DO and DON'T examples
  - Reference actual code over theoretical examples
  - Use consistent formatting across rules

================================================
FILE: .cursor/rules/self_improve.mdc
================================================

---

description: Guidelines for continuously improving Cursor rules based on emerging code patterns and best practices.
globs: \*_/_
alwaysApply: true

---

- **Rule Improvement Triggers:**

  - New code patterns not covered by existing rules
  - Repeated similar implementations across files
  - Common error patterns that could be prevented
  - New libraries or tools being used consistently
  - Emerging best practices in the codebase

- **Analysis Process:**

  - Compare new code with existing rules
  - Identify patterns that should be standardized
  - Look for references to external documentation
  - Check for consistent error handling patterns
  - Monitor test patterns and coverage

- **Rule Updates:**

  - **Add New Rules When:**

    - A new technology/pattern is used in 3+ files
    - Common bugs could be prevented by a rule
    - Code reviews repeatedly mention the same feedback
    - New security or performance patterns emerge

  - **Modify Existing Rules When:**
    - Better examples exist in the codebase
    - Additional edge cases are discovered
    - Related rules have been updated
    - Implementation details have changed

- **Example Pattern Recognition:**

  ```typescript
  // If you see repeated patterns like:
  const data = await prisma.user.findMany({
    select: { id: true, email: true },
    where: { status: "ACTIVE" },
  });

  // Consider adding to [prisma.mdc](mdc:.cursor/rules/prisma.mdc):
  // - Standard select fields
  // - Common where conditions
  // - Performance optimization patterns
  ```

- **Rule Quality Checks:**

  - Rules should be actionable and specific
  - Examples should come from actual code
  - References should be up to date
  - Patterns should be consistently enforced

- **Continuous Improvement:**

  - Monitor code review comments
  - Track common development questions
  - Update rules after major refactors
  - Add links to relevant documentation
  - Cross-reference related rules

- **Rule Deprecation:**

  - Mark outdated patterns as deprecated
  - Remove rules that no longer apply
  - Update references to deprecated rules
  - Document migration paths for old patterns

- **Documentation Updates:**
  - Keep examples synchronized with code
  - Update references to external docs
  - Maintain links between related rules
  - Document breaking changes
    Follow [cursor_rules.mdc](mdc:.cursor/rules/cursor_rules.mdc) for proper rule formatting and structure.

================================================
FILE: .cursor/rules/taskmaster/dev_workflow.mdc
================================================

---

description: Guide for using Taskmaster to manage task-driven development workflows
globs: \*_/_
alwaysApply: true

---

# Taskmaster Development Workflow

This guide outlines the standard process for using Taskmaster to manage software development projects. It is written as a set of instructions for you, the AI agent.

- **Your Default Stance**: For most projects, the user can work directly within the `master` task context. Your initial actions should operate on this default context unless a clear pattern for multi-context work emerges.
- **Your Goal**: Your role is to elevate the user's workflow by intelligently introducing advanced features like **Tagged Task Lists** when you detect the appropriate context. Do not force tags on the user; suggest them as a helpful solution to a specific need.

## The Basic Loop

The fundamental development cycle you will facilitate is:

1.  **`list`**: Show the user what needs to be done.
2.  **`next`**: Help the user decide what to work on.
3.  **`show <id>`**: Provide details for a specific task.
4.  **`expand <id>`**: Break down a complex task into smaller, manageable subtasks.
5.  **Implement**: The user writes the code and tests.
6.  **`update-subtask`**: Log progress and findings on behalf of the user.
7.  **`set-status`**: Mark tasks and subtasks as `done` as work is completed.
8.  **Repeat**.

All your standard command executions should operate on the user's current task context, which defaults to `master`.

---

## Standard Development Workflow Process

### Simple Workflow (Default Starting Point)

For new projects or when users are getting started, operate within the `master` tag context:

- Start new projects by running `initialize_project` tool / `task-master init` or `parse_prd` / `task-master parse-prd --input='<prd-file.txt>'` (see @`taskmaster.mdc`) to generate initial tasks.json with tagged structure
- Configure rule sets during initialization with `--rules` flag (e.g., `task-master init --rules cursor,windsurf`) or manage them later with `task-master rules add/remove` commands
- Begin coding sessions with `get_tasks` / `task-master list` (see @`taskmaster.mdc`) to see current tasks, status, and IDs
- Determine the next task to work on using `next_task` / `task-master next` (see @`taskmaster.mdc`)
- Analyze task complexity with `analyze_project_complexity` / `task-master analyze-complexity --research` (see @`taskmaster.mdc`) before breaking down tasks
- Review complexity report using `complexity_report` / `task-master complexity-report` (see @`taskmaster.mdc`)
- Select tasks based on dependencies (all marked 'done'), priority level, and ID order
- View specific task details using `get_task` / `task-master show <id>` (see @`taskmaster.mdc`) to understand implementation requirements
- Break down complex tasks using `expand_task` / `task-master expand --id=<id> --force --research` (see @`taskmaster.mdc`) with appropriate flags like `--force` (to replace existing subtasks) and `--research`
- Implement code following task details, dependencies, and project standards
- Mark completed tasks with `set_task_status` / `task-master set-status --id=<id> --status=done` (see @`taskmaster.mdc`)
- Update dependent tasks when implementation differs from original plan using `update` / `task-master update --from=<id> --prompt="..."` or `update_task` / `task-master update-task --id=<id> --prompt="..."` (see @`taskmaster.mdc`)

---

## Leveling Up: Agent-Led Multi-Context Workflows

While the basic workflow is powerful, your primary opportunity to add value is by identifying when to introduce **Tagged Task Lists**. These patterns are your tools for creating a more organized and efficient development environment for the user, especially if you detect agentic or parallel development happening across the same session.

**Critical Principle**: Most users should never see a difference in their experience. Only introduce advanced workflows when you detect clear indicators that the project has evolved beyond simple task management.

### When to Introduce Tags: Your Decision Patterns

Here are the patterns to look for. When you detect one, you should propose the corresponding workflow to the user.

#### Pattern 1: Simple Git Feature Branching

This is the most common and direct use case for tags.

- **Trigger**: The user creates a new git branch (e.g., `git checkout -b feature/user-auth`).
- **Your Action**: Propose creating a new tag that mirrors the branch name to isolate the feature's tasks from `master`.
- **Your Suggested Prompt**: _"I see you've created a new branch named 'feature/user-auth'. To keep all related tasks neatly organized and separate from your main list, I can create a corresponding task tag for you. This helps prevent merge conflicts in your `tasks.json` file later. Shall I create the 'feature-user-auth' tag?"_
- **Tool to Use**: `task-master add-tag --from-branch`

#### Pattern 2: Team Collaboration

- **Trigger**: The user mentions working with teammates (e.g., "My teammate Alice is handling the database schema," or "I need to review Bob's work on the API.").
- **Your Action**: Suggest creating a separate tag for the user's work to prevent conflicts with shared master context.
- **Your Suggested Prompt**: _"Since you're working with Alice, I can create a separate task context for your work to avoid conflicts. This way, Alice can continue working with the master list while you have your own isolated context. When you're ready to merge your work, we can coordinate the tasks back to master. Shall I create a tag for your current work?"_
- **Tool to Use**: `task-master add-tag my-work --copy-from-current --description="My tasks while collaborating with Alice"`

#### Pattern 3: Experiments or Risky Refactors

- **Trigger**: The user wants to try something that might not be kept (e.g., "I want to experiment with switching our state management library," or "Let's refactor the old API module, but I want to keep the current tasks as a reference.").
- **Your Action**: Propose creating a sandboxed tag for the experimental work.
- **Your Suggested Prompt**: _"This sounds like a great experiment. To keep these new tasks separate from our main plan, I can create a temporary 'experiment-zustand' tag for this work. If we decide not to proceed, we can simply delete the tag without affecting the main task list. Sound good?"_
- **Tool to Use**: `task-master add-tag experiment-zustand --description="Exploring Zustand migration"`

#### Pattern 4: Large Feature Initiatives (PRD-Driven)

This is a more structured approach for significant new features or epics.

- **Trigger**: The user describes a large, multi-step feature that would benefit from a formal plan.
- **Your Action**: Propose a comprehensive, PRD-driven workflow.
- **Your Suggested Prompt**: _"This sounds like a significant new feature. To manage this effectively, I suggest we create a dedicated task context for it. Here's the plan: I'll create a new tag called 'feature-xyz', then we can draft a Product Requirements Document (PRD) together to scope the work. Once the PRD is ready, I'll automatically generate all the necessary tasks within that new tag. How does that sound?"_
- **Your Implementation Flow**:
  1.  **Create an empty tag**: `task-master add-tag feature-xyz --description "Tasks for the new XYZ feature"`. You can also start by creating a git branch if applicable, and then create the tag from that branch.
  2.  **Collaborate & Create PRD**: Work with the user to create a detailed PRD file (e.g., `.taskmaster/docs/feature-xyz-prd.txt`).
  3.  **Parse PRD into the new tag**: `task-master parse-prd .taskmaster/docs/feature-xyz-prd.txt --tag feature-xyz`
  4.  **Prepare the new task list**: Follow up by suggesting `analyze-complexity` and `expand-all` for the newly created tasks within the `feature-xyz` tag.

#### Pattern 5: Version-Based Development

Tailor your approach based on the project maturity indicated by tag names.

- **Prototype/MVP Tags** (`prototype`, `mvp`, `poc`, `v0.x`):

  - **Your Approach**: Focus on speed and functionality over perfection
  - **Task Generation**: Create tasks that emphasize "get it working" over "get it perfect"
  - **Complexity Level**: Lower complexity, fewer subtasks, more direct implementation paths
  - **Research Prompts**: Include context like "This is a prototype - prioritize speed and basic functionality over optimization"
  - **Example Prompt Addition**: _"Since this is for the MVP, I'll focus on tasks that get core functionality working quickly rather than over-engineering."_

- **Production/Mature Tags** (`v1.0+`, `production`, `stable`):
  - **Your Approach**: Emphasize robustness, testing, and maintainability
  - **Task Generation**: Include comprehensive error handling, testing, documentation, and optimization
  - **Complexity Level**: Higher complexity, more detailed subtasks, thorough implementation paths
  - **Research Prompts**: Include context like "This is for production - prioritize reliability, performance, and maintainability"
  - **Example Prompt Addition**: _"Since this is for production, I'll ensure tasks include proper error handling, testing, and documentation."_

### Advanced Workflow (Tag-Based & PRD-Driven)

**When to Transition**: Recognize when the project has evolved (or has initiated a project which existing code) beyond simple task management. Look for these indicators:

- User mentions teammates or collaboration needs
- Project has grown to 15+ tasks with mixed priorities
- User creates feature branches or mentions major initiatives
- User initializes Taskmaster on an existing, complex codebase
- User describes large features that would benefit from dedicated planning

**Your Role in Transition**: Guide the user to a more sophisticated workflow that leverages tags for organization and PRDs for comprehensive planning.

#### Master List Strategy (High-Value Focus)

Once you transition to tag-based workflows, the `master` tag should ideally contain only:

- **High-level deliverables** that provide significant business value
- **Major milestones** and epic-level features
- **Critical infrastructure** work that affects the entire project
- **Release-blocking** items

**What NOT to put in master**:

- Detailed implementation subtasks (these go in feature-specific tags' parent tasks)
- Refactoring work (create dedicated tags like `refactor-auth`)
- Experimental features (use `experiment-*` tags)
- Team member-specific tasks (use person-specific tags)

#### PRD-Driven Feature Development

**For New Major Features**:

1. **Identify the Initiative**: When user describes a significant feature
2. **Create Dedicated Tag**: `add_tag feature-[name] --description="[Feature description]"`
3. **Collaborative PRD Creation**: Work with user to create comprehensive PRD in `.taskmaster/docs/feature-[name]-prd.txt`
4. **Parse & Prepare**:
   - `parse_prd .taskmaster/docs/feature-[name]-prd.txt --tag=feature-[name]`
   - `analyze_project_complexity --tag=feature-[name] --research`
   - `expand_all --tag=feature-[name] --research`
5. **Add Master Reference**: Create a high-level task in `master` that references the feature tag

**For Existing Codebase Analysis**:
When users initialize Taskmaster on existing projects:

1. **Codebase Discovery**: Use your native tools for producing deep context about the code base. You may use `research` tool with `--tree` and `--files` to collect up to date information using the existing architecture as context.
2. **Collaborative Assessment**: Work with user to identify improvement areas, technical debt, or new features
3. **Strategic PRD Creation**: Co-author PRDs that include:
   - Current state analysis (based on your codebase research)
   - Proposed improvements or new features
   - Implementation strategy considering existing code
4. **Tag-Based Organization**: Parse PRDs into appropriate tags (`refactor-api`, `feature-dashboard`, `tech-debt`, etc.)
5. **Master List Curation**: Keep only the most valuable initiatives in master

The parse-prd's `--append` flag enables the user to parse multiple PRDs within tags or across tags. PRDs should be focused and the number of tasks they are parsed into should be strategically chosen relative to the PRD's complexity and level of detail.

### Workflow Transition Examples

**Example 1: Simple → Team-Based**

```
User: "Alice is going to help with the API work"
Your Response: "Great! To avoid conflicts, I'll create a separate task context for your work. Alice can continue with the master list while you work in your own context. When you're ready to merge, we can coordinate the tasks back together."
Action: add_tag my-api-work --copy-from-current --description="My API tasks while collaborating with Alice"
```

**Example 2: Simple → PRD-Driven**

```
User: "I want to add a complete user dashboard with analytics, user management, and reporting"
Your Response: "This sounds like a major feature that would benefit from detailed planning. Let me create a dedicated context for this work and we can draft a PRD together to ensure we capture all requirements."
Actions:
1. add_tag feature-dashboard --description="User dashboard with analytics and management"
2. Collaborate on PRD creation
3. parse_prd dashboard-prd.txt --tag=feature-dashboard
4. Add high-level "User Dashboard" task to master
```

**Example 3: Existing Project → Strategic Planning**

```
User: "I just initialized Taskmaster on my existing React app. It's getting messy and I want to improve it."
Your Response: "Let me research your codebase to understand the current architecture, then we can create a strategic plan for improvements."
Actions:
1. research "Current React app architecture and improvement opportunities" --tree --files=src/
2. Collaborate on improvement PRD based on findings
3. Create tags for different improvement areas (refactor-components, improve-state-management, etc.)
4. Keep only major improvement initiatives in master
```

---

## Primary Interaction: MCP Server vs. CLI

Taskmaster offers two primary ways to interact:

1.  **MCP Server (Recommended for Integrated Tools)**:

    - For AI agents and integrated development environments (like Cursor), interacting via the **MCP server is the preferred method**.
    - The MCP server exposes Taskmaster functionality through a set of tools (e.g., `get_tasks`, `add_subtask`).
    - This method offers better performance, structured data exchange, and richer error handling compared to CLI parsing.
    - Refer to @`mcp.mdc` for details on the MCP architecture and available tools.
    - A comprehensive list and description of MCP tools and their corresponding CLI commands can be found in @`taskmaster.mdc`.
    - **Restart the MCP server** if core logic in `scripts/modules` or MCP tool/direct function definitions change.
    - **Note**: MCP tools fully support tagged task lists with complete tag management capabilities.

2.  **`task-master` CLI (For Users & Fallback)**:
    - The global `task-master` command provides a user-friendly interface for direct terminal interaction.
    - It can also serve as a fallback if the MCP server is inaccessible or a specific function isn't exposed via MCP.
    - Install globally with `npm install -g task-master-ai` or use locally via `npx task-master-ai ...`.
    - The CLI commands often mirror the MCP tools (e.g., `task-master list` corresponds to `get_tasks`).
    - Refer to @`taskmaster.mdc` for a detailed command reference.
    - **Tagged Task Lists**: CLI fully supports the new tagged system with seamless migration.

## How the Tag System Works (For Your Reference)

- **Data Structure**: Tasks are organized into separate contexts (tags) like "master", "feature-branch", or "v2.0".
- **Silent Migration**: Existing projects automatically migrate to use a "master" tag with zero disruption.
- **Context Isolation**: Tasks in different tags are completely separate. Changes in one tag do not affect any other tag.
- **Manual Control**: The user is always in control. There is no automatic switching. You facilitate switching by using `use-tag <name>`.
- **Full CLI & MCP Support**: All tag management commands are available through both the CLI and MCP tools for you to use. Refer to @`taskmaster.mdc` for a full command list.

---

## Task Complexity Analysis

- Run `analyze_project_complexity` / `task-master analyze-complexity --research` (see @`taskmaster.mdc`) for comprehensive analysis
- Review complexity report via `complexity_report` / `task-master complexity-report` (see @`taskmaster.mdc`) for a formatted, readable version.
- Focus on tasks with highest complexity scores (8-10) for detailed breakdown
- Use analysis results to determine appropriate subtask allocation
- Note that reports are automatically used by the `expand_task` tool/command

## Task Breakdown Process

- Use `expand_task` / `task-master expand --id=<id>`. It automatically uses the complexity report if found, otherwise generates default number of subtasks.
- Use `--num=<number>` to specify an explicit number of subtasks, overriding defaults or complexity report recommendations.
- Add `--research` flag to leverage Perplexity AI for research-backed expansion.
- Add `--force` flag to clear existing subtasks before generating new ones (default is to append).
- Use `--prompt="<context>"` to provide additional context when needed.
- Review and adjust generated subtasks as necessary.
- Use `expand_all` tool or `task-master expand --all` to expand multiple pending tasks at once, respecting flags like `--force` and `--research`.
- If subtasks need complete replacement (regardless of the `--force` flag on `expand`), clear them first with `clear_subtasks` / `task-master clear-subtasks --id=<id>`.

## Implementation Drift Handling

- When implementation differs significantly from planned approach
- When future tasks need modification due to current implementation choices
- When new dependencies or requirements emerge
- Use `update` / `task-master update --from=<futureTaskId> --prompt='<explanation>\nUpdate context...' --research` to update multiple future tasks.
- Use `update_task` / `task-master update-task --id=<taskId> --prompt='<explanation>\nUpdate context...' --research` to update a single specific task.

## Task Status Management

- Use 'pending' for tasks ready to be worked on
- Use 'done' for completed and verified tasks
- Use 'deferred' for postponed tasks
- Add custom status values as needed for project-specific workflows

## Task Structure Fields

- **id**: Unique identifier for the task (Example: `1`, `1.1`)
- **title**: Brief, descriptive title (Example: `"Initialize Repo"`)
- **description**: Concise summary of what the task involves (Example: `"Create a new repository, set up initial structure."`)
- **status**: Current state of the task (Example: `"pending"`, `"done"`, `"deferred"`)
- **dependencies**: IDs of prerequisite tasks (Example: `[1, 2.1]`)
  - Dependencies are displayed with status indicators (✅ for completed, ⏱️ for pending)
  - This helps quickly identify which prerequisite tasks are blocking work
- **priority**: Importance level (Example: `"high"`, `"medium"`, `"low"`)
- **details**: In-depth implementation instructions (Example: `"Use GitHub client ID/secret, handle callback, set session token."`)
- **testStrategy**: Verification approach (Example: `"Deploy and call endpoint to confirm 'Hello World' response."`)
- **subtasks**: List of smaller, more specific tasks (Example: `[{"id": 1, "title": "Configure OAuth", ...}]`)
- Refer to task structure details (previously linked to `tasks.mdc`).

## Configuration Management (Updated)

Taskmaster configuration is managed through two main mechanisms:

1.  **`.taskmaster/config.json` File (Primary):**

    - Located in the project root directory.
    - Stores most configuration settings: AI model selections (main, research, fallback), parameters (max tokens, temperature), logging level, default subtasks/priority, project name, etc.
    - **Tagged System Settings**: Includes `global.defaultTag` (defaults to "master") and `tags` section for tag management configuration.
    - **Managed via `task-master models --setup` command.** Do not edit manually unless you know what you are doing.
    - **View/Set specific models via `task-master models` command or `models` MCP tool.**
    - Created automatically when you run `task-master models --setup` for the first time or during tagged system migration.

2.  **Environment Variables (`.env` / `mcp.json`):**

    - Used **only** for sensitive API keys and specific endpoint URLs.
    - Place API keys (one per provider) in a `.env` file in the project root for CLI usage.
    - For MCP/Cursor integration, configure these keys in the `env` section of `.cursor/mcp.json`.
    - Available keys/variables: See `assets/env.example` or the Configuration section in the command reference (previously linked to `taskmaster.mdc`).

3.  **`.taskmaster/state.json` File (Tagged System State):**
    - Tracks current tag context and migration status.
    - Automatically created during tagged system migration.
    - Contains: `currentTag`, `lastSwitched`, `migrationNoticeShown`.

**Important:** Non-API key settings (like model selections, `MAX_TOKENS`, `TASKMASTER_LOG_LEVEL`) are **no longer configured via environment variables**. Use the `task-master models` command (or `--setup` for interactive configuration) or the `models` MCP tool.
**If AI commands FAIL in MCP** verify that the API key for the selected provider is present in the `env` section of `.cursor/mcp.json`.
**If AI commands FAIL in CLI** verify that the API key for the selected provider is present in the `.env` file in the root of the project.

## Rules Management

Taskmaster supports multiple AI coding assistant rule sets that can be configured during project initialization or managed afterward:

- **Available Profiles**: Claude Code, Cline, Codex, Cursor, Roo Code, Trae, Windsurf (claude, cline, codex, cursor, roo, trae, windsurf)
- **During Initialization**: Use `task-master init --rules cursor,windsurf` to specify which rule sets to include
- **After Initialization**: Use `task-master rules add <profiles>` or `task-master rules remove <profiles>` to manage rule sets
- **Interactive Setup**: Use `task-master rules setup` to launch an interactive prompt for selecting rule profiles
- **Default Behavior**: If no `--rules` flag is specified during initialization, all available rule profiles are included
- **Rule Structure**: Each profile creates its own directory (e.g., `.cursor/rules`, `.roo/rules`) with appropriate configuration files

## Determining the Next Task

- Run `next_task` / `task-master next` to show the next task to work on.
- The command identifies tasks with all dependencies satisfied
- Tasks are prioritized by priority level, dependency count, and ID
- The command shows comprehensive task information including:
  - Basic task details and description
  - Implementation details
  - Subtasks (if they exist)
  - Contextual suggested actions
- Recommended before starting any new development work
- Respects your project's dependency structure
- Ensures tasks are completed in the appropriate sequence
- Provides ready-to-use commands for common task actions

## Viewing Specific Task Details

- Run `get_task` / `task-master show <id>` to view a specific task.
- Use dot notation for subtasks: `task-master show 1.2` (shows subtask 2 of task 1)
- Displays comprehensive information similar to the next command, but for a specific task
- For parent tasks, shows all subtasks and their current status
- For subtasks, shows parent task information and relationship
- Provides contextual suggested actions appropriate for the specific task
- Useful for examining task details before implementation or checking status

## Managing Task Dependencies

- Use `add_dependency` / `task-master add-dependency --id=<id> --depends-on=<id>` to add a dependency.
- Use `remove_dependency` / `task-master remove-dependency --id=<id> --depends-on=<id>` to remove a dependency.
- The system prevents circular dependencies and duplicate dependency entries
- Dependencies are checked for existence before being added or removed
- Task files are automatically regenerated after dependency changes
- Dependencies are visualized with status indicators in task listings and files

## Task Reorganization

- Use `move_task` / `task-master move --from=<id> --to=<id>` to move tasks or subtasks within the hierarchy
- This command supports several use cases:
  - Moving a standalone task to become a subtask (e.g., `--from=5 --to=7`)
  - Moving a subtask to become a standalone task (e.g., `--from=5.2 --to=7`)
  - Moving a subtask to a different parent (e.g., `--from=5.2 --to=7.3`)
  - Reordering subtasks within the same parent (e.g., `--from=5.2 --to=5.4`)
  - Moving a task to a new, non-existent ID position (e.g., `--from=5 --to=25`)
  - Moving multiple tasks at once using comma-separated IDs (e.g., `--from=10,11,12 --to=16,17,18`)
- The system includes validation to prevent data loss:
  - Allows moving to non-existent IDs by creating placeholder tasks
  - Prevents moving to existing task IDs that have content (to avoid overwriting)
  - Validates source tasks exist before attempting to move them
- The system maintains proper parent-child relationships and dependency integrity
- Task files are automatically regenerated after the move operation
- This provides greater flexibility in organizing and refining your task structure as project understanding evolves
- This is especially useful when dealing with potential merge conflicts arising from teams creating tasks on separate branches. Solve these conflicts very easily by moving your tasks and keeping theirs.

## Iterative Subtask Implementation

Once a task has been broken down into subtasks using `expand_task` or similar methods, follow this iterative process for implementation:

1.  **Understand the Goal (Preparation):**

    - Use `get_task` / `task-master show <subtaskId>` (see @`taskmaster.mdc`) to thoroughly understand the specific goals and requirements of the subtask.

2.  **Initial Exploration & Planning (Iteration 1):**

    - This is the first attempt at creating a concrete implementation plan.
    - Explore the codebase to identify the precise files, functions, and even specific lines of code that will need modification.
    - Determine the intended code changes (diffs) and their locations.
    - Gather _all_ relevant details from this exploration phase.

3.  **Log the Plan:**

    - Run `update_subtask` / `task-master update-subtask --id=<subtaskId> --prompt='<detailed plan>'`.
    - Provide the _complete and detailed_ findings from the exploration phase in the prompt. Include file paths, line numbers, proposed diffs, reasoning, and any potential challenges identified. Do not omit details. The goal is to create a rich, timestamped log within the subtask's `details`.

4.  **Verify the Plan:**

    - Run `get_task` / `task-master show <subtaskId>` again to confirm that the detailed implementation plan has been successfully appended to the subtask's details.

5.  **Begin Implementation:**

    - Set the subtask status using `set_task_status` / `task-master set-status --id=<subtaskId> --status=in-progress`.
    - Start coding based on the logged plan.

6.  **Refine and Log Progress (Iteration 2+):**

    - As implementation progresses, you will encounter challenges, discover nuances, or confirm successful approaches.
    - **Before appending new information**: Briefly review the _existing_ details logged in the subtask (using `get_task` or recalling from context) to ensure the update adds fresh insights and avoids redundancy.
    - **Regularly** use `update_subtask` / `task-master update-subtask --id=<subtaskId> --prompt='<update details>\n- What worked...\n- What didn't work...'` to append new findings.
    - **Crucially, log:**
      - What worked ("fundamental truths" discovered).
      - What didn't work and why (to avoid repeating mistakes).
      - Specific code snippets or configurations that were successful.
      - Decisions made, especially if confirmed with user input.
      - Any deviations from the initial plan and the reasoning.
    - The objective is to continuously enrich the subtask's details, creating a log of the implementation journey that helps the AI (and human developers) learn, adapt, and avoid repeating errors.

7.  **Review & Update Rules (Post-Implementation):**

    - Once the implementation for the subtask is functionally complete, review all code changes and the relevant chat history.
    - Identify any new or modified code patterns, conventions, or best practices established during the implementation.
    - Create new or update existing rules following internal guidelines (previously linked to `cursor_rules.mdc` and `self_improve.mdc`).

8.  **Mark Task Complete:**

    - After verifying the implementation and updating any necessary rules, mark the subtask as completed: `set_task_status` / `task-master set-status --id=<subtaskId> --status=done`.

9.  **Commit Changes (If using Git):**

    - Stage the relevant code changes and any updated/new rule files (`git add .`).
    - Craft a comprehensive Git commit message summarizing the work done for the subtask, including both code implementation and any rule adjustments.
    - Execute the commit command directly in the terminal (e.g., `git commit -m 'feat(module): Implement feature X for subtask <subtaskId>\n\n- Details about changes...\n- Updated rule Y for pattern Z'`).
    - Consider if a Changeset is needed according to internal versioning guidelines (previously linked to `changeset.mdc`). If so, run `npm run changeset`, stage the generated file, and amend the commit or create a new one.

10. **Proceed to Next Subtask:**
    - Identify the next subtask (e.g., using `next_task` / `task-master next`).

## Code Analysis & Refactoring Techniques

- **Top-Level Function Search**:
  - Useful for understanding module structure or planning refactors.
  - Use grep/ripgrep to find exported functions/constants:
    `rg "export (async function|function|const) \w+"` or similar patterns.
  - Can help compare functions between files during migrations or identify potential naming conflicts.

---

_This workflow provides a general guideline. Adapt it based on your specific project needs and team practices._

================================================
FILE: .cursor/rules/taskmaster/taskmaster.mdc
================================================

---

description: Comprehensive reference for Taskmaster MCP tools and CLI commands.
globs: \*_/_
alwaysApply: true

---

# Taskmaster Tool & Command Reference

This document provides a detailed reference for interacting with Taskmaster, covering both the recommended MCP tools, suitable for integrations like Cursor, and the corresponding `task-master` CLI commands, designed for direct user interaction or fallback.

**Note:** For interacting with Taskmaster programmatically or via integrated tools, using the **MCP tools is strongly recommended** due to better performance, structured data, and error handling. The CLI commands serve as a user-friendly alternative and fallback.

**Important:** Several MCP tools involve AI processing... The AI-powered tools include `parse_prd`, `analyze_project_complexity`, `update_subtask`, `update_task`, `update`, `expand_all`, `expand_task`, and `add_task`.

**🏷️ Tagged Task Lists System:** Task Master now supports **tagged task lists** for multi-context task management. This allows you to maintain separate, isolated lists of tasks for different features, branches, or experiments. Existing projects are seamlessly migrated to use a default "master" tag. Most commands now support a `--tag <name>` flag to specify which context to operate on. If omitted, commands use the currently active tag.

---

## Initialization & Setup

### 1. Initialize Project (`init`)

- **MCP Tool:** `initialize_project`
- **CLI Command:** `task-master init [options]`
- **Description:** `Set up the basic Taskmaster file structure and configuration in the current directory for a new project.`
- **Key CLI Options:**
  - `--name <name>`: `Set the name for your project in Taskmaster's configuration.`
  - `--description <text>`: `Provide a brief description for your project.`
  - `--version <version>`: `Set the initial version for your project, e.g., '0.1.0'.`
  - `-y, --yes`: `Initialize Taskmaster quickly using default settings without interactive prompts.`
- **Usage:** Run this once at the beginning of a new project.
- **MCP Variant Description:** `Set up the basic Taskmaster file structure and configuration in the current directory for a new project by running the 'task-master init' command.`
- **Key MCP Parameters/Options:**
  - `projectName`: `Set the name for your project.` (CLI: `--name <name>`)
  - `projectDescription`: `Provide a brief description for your project.` (CLI: `--description <text>`)
  - `projectVersion`: `Set the initial version for your project, e.g., '0.1.0'.` (CLI: `--version <version>`)
  - `authorName`: `Author name.` (CLI: `--author <author>`)
  - `skipInstall`: `Skip installing dependencies. Default is false.` (CLI: `--skip-install`)
  - `addAliases`: `Add shell aliases tm and taskmaster. Default is false.` (CLI: `--aliases`)
  - `yes`: `Skip prompts and use defaults/provided arguments. Default is false.` (CLI: `-y, --yes`)
- **Usage:** Run this once at the beginning of a new project, typically via an integrated tool like Cursor. Operates on the current working directory of the MCP server.
- **Important:** Once complete, you _MUST_ parse a prd in order to generate tasks. There will be no tasks files until then. The next step after initializing should be to create a PRD using the example PRD in .taskmaster/templates/example_prd.txt.
- **Tagging:** Use the `--tag` option to parse the PRD into a specific, non-default tag context. If the tag doesn't exist, it will be created automatically. Example: `task-master parse-prd spec.txt --tag=new-feature`.

### 2. Parse PRD (`parse_prd`)

- **MCP Tool:** `parse_prd`
- **CLI Command:** `task-master parse-prd [file] [options]`
- **Description:** `Parse a Product Requirements Document, PRD, or text file with Taskmaster to automatically generate an initial set of tasks in tasks.json.`
- **Key Parameters/Options:**
  - `input`: `Path to your PRD or requirements text file that Taskmaster should parse for tasks.` (CLI: `[file]` positional or `-i, --input <file>`)
  - `output`: `Specify where Taskmaster should save the generated 'tasks.json' file. Defaults to '.taskmaster/tasks/tasks.json'.` (CLI: `-o, --output <file>`)
  - `numTasks`: `Approximate number of top-level tasks Taskmaster should aim to generate from the document.` (CLI: `-n, --num-tasks <number>`)
  - `force`: `Use this to allow Taskmaster to overwrite an existing 'tasks.json' without asking for confirmation.` (CLI: `-f, --force`)
- **Usage:** Useful for bootstrapping a project from an existing requirements document.
- **Notes:** Task Master will strictly adhere to any specific requirements mentioned in the PRD, such as libraries, database schemas, frameworks, tech stacks, etc., while filling in any gaps where the PRD isn't fully specified. Tasks are designed to provide the most direct implementation path while avoiding over-engineering.
- **Important:** This MCP tool makes AI calls and can take up to a minute to complete. Please inform users to hang tight while the operation is in progress. If the user does not have a PRD, suggest discussing their idea and then use the example PRD in `.taskmaster/templates/example_prd.txt` as a template for creating the PRD based on their idea, for use with `parse-prd`.

---

## AI Model Configuration

### 2. Manage Models (`models`)

- **MCP Tool:** `models`
- **CLI Command:** `task-master models [options]`
- **Description:** `View the current AI model configuration or set specific models for different roles (main, research, fallback). Allows setting custom model IDs for Ollama and OpenRouter.`
- **Key MCP Parameters/Options:**
  - `setMain <model_id>`: `Set the primary model ID for task generation/updates.` (CLI: `--set-main <model_id>`)
  - `setResearch <model_id>`: `Set the model ID for research-backed operations.` (CLI: `--set-research <model_id>`)
  - `setFallback <model_id>`: `Set the model ID to use if the primary fails.` (CLI: `--set-fallback <model_id>`)
  - `ollama <boolean>`: `Indicates the set model ID is a custom Ollama model.` (CLI: `--ollama`)
  - `openrouter <boolean>`: `Indicates the set model ID is a custom OpenRouter model.` (CLI: `--openrouter`)
  - `listAvailableModels <boolean>`: `If true, lists available models not currently assigned to a role.` (CLI: No direct equivalent; CLI lists available automatically)
  - `projectRoot <string>`: `Optional. Absolute path to the project root directory.` (CLI: Determined automatically)
- **Key CLI Options:**
  - `--set-main <model_id>`: `Set the primary model.`
  - `--set-research <model_id>`: `Set the research model.`
  - `--set-fallback <model_id>`: `Set the fallback model.`
  - `--ollama`: `Specify that the provided model ID is for Ollama (use with --set-*).`
  - `--openrouter`: `Specify that the provided model ID is for OpenRouter (use with --set-*). Validates against OpenRouter API.`
  - `--bedrock`: `Specify that the provided model ID is for AWS Bedrock (use with --set-*).`
  - `--setup`: `Run interactive setup to configure models, including custom Ollama/OpenRouter IDs.`
- **Usage (MCP):** Call without set flags to get current config. Use `setMain`, `setResearch`, or `setFallback` with a valid model ID to update the configuration. Use `listAvailableModels: true` to get a list of unassigned models. To set a custom model, provide the model ID and set `ollama: true` or `openrouter: true`.
- **Usage (CLI):** Run without flags to view current configuration and available models. Use set flags to update specific roles. Use `--setup` for guided configuration, including custom models. To set a custom model via flags, use `--set-<role>=<model_id>` along with either `--ollama` or `--openrouter`.
- **Notes:** Configuration is stored in `.taskmaster/config.json` in the project root. This command/tool modifies that file. Use `listAvailableModels` or `task-master models` to see internally supported models. OpenRouter custom models are validated against their live API. Ollama custom models are not validated live.
- **API note:** API keys for selected AI providers (based on their model) need to exist in the mcp.json file to be accessible in MCP context. The API keys must be present in the local .env file for the CLI to be able to read them.
- **Model costs:** The costs in supported models are expressed in dollars. An input/output value of 3 is $3.00. A value of 0.8 is $0.80.
- **Warning:** DO NOT MANUALLY EDIT THE .taskmaster/config.json FILE. Use the included commands either in the MCP or CLI format as needed. Always prioritize MCP tools when available and use the CLI as a fallback.

---

## Task Listing & Viewing

### 3. Get Tasks (`get_tasks`)

- **MCP Tool:** `get_tasks`
- **CLI Command:** `task-master list [options]`
- **Description:** `List your Taskmaster tasks, optionally filtering by status and showing subtasks.`
- **Key Parameters/Options:**
  - `status`: `Show only Taskmaster tasks matching this status (or multiple statuses, comma-separated), e.g., 'pending' or 'done,in-progress'.` (CLI: `-s, --status <status>`)
  - `withSubtasks`: `Include subtasks indented under their parent tasks in the list.` (CLI: `--with-subtasks`)
  - `tag`: `Specify which tag context to list tasks from. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Get an overview of the project status, often used at the start of a work session.

### 4. Get Next Task (`next_task`)

- **MCP Tool:** `next_task`
- **CLI Command:** `task-master next [options]`
- **Description:** `Ask Taskmaster to show the next available task you can work on, based on status and completed dependencies.`
- **Key Parameters/Options:**
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
  - `tag`: `Specify which tag context to use. Defaults to the current active tag.` (CLI: `--tag <name>`)
- **Usage:** Identify what to work on next according to the plan.

### 5. Get Task Details (`get_task`)

- **MCP Tool:** `get_task`
- **CLI Command:** `task-master show [id] [options]`
- **Description:** `Display detailed information for one or more specific Taskmaster tasks or subtasks by ID.`
- **Key Parameters/Options:**
  - `id`: `Required. The ID of the Taskmaster task (e.g., '15'), subtask (e.g., '15.2'), or a comma-separated list of IDs ('1,5,10.2') you want to view.` (CLI: `[id]` positional or `-i, --id <id>`)
  - `tag`: `Specify which tag context to get the task(s) from. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Understand the full details for a specific task. When multiple IDs are provided, a summary table is shown.
- **CRITICAL INFORMATION** If you need to collect information from multiple tasks, use comma-separated IDs (i.e. 1,2,3) to receive an array of tasks. Do not needlessly get tasks one at a time if you need to get many as that is wasteful.

---

## Task Creation & Modification

### 6. Add Task (`add_task`)

- **MCP Tool:** `add_task`
- **CLI Command:** `task-master add-task [options]`
- **Description:** `Add a new task to Taskmaster by describing it; AI will structure it.`
- **Key Parameters/Options:**
  - `prompt`: `Required. Describe the new task you want Taskmaster to create, e.g., "Implement user authentication using JWT".` (CLI: `-p, --prompt <text>`)
  - `dependencies`: `Specify the IDs of any Taskmaster tasks that must be completed before this new one can start, e.g., '12,14'.` (CLI: `-d, --dependencies <ids>`)
  - `priority`: `Set the priority for the new task: 'high', 'medium', or 'low'. Default is 'medium'.` (CLI: `--priority <priority>`)
  - `research`: `Enable Taskmaster to use the research role for potentially more informed task creation.` (CLI: `-r, --research`)
  - `tag`: `Specify which tag context to add the task to. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Quickly add newly identified tasks during development.
- **Important:** This MCP tool makes AI calls and can take up to a minute to complete. Please inform users to hang tight while the operation is in progress.

### 7. Add Subtask (`add_subtask`)

- **MCP Tool:** `add_subtask`
- **CLI Command:** `task-master add-subtask [options]`
- **Description:** `Add a new subtask to a Taskmaster parent task, or convert an existing task into a subtask.`
- **Key Parameters/Options:**
  - `id` / `parent`: `Required. The ID of the Taskmaster task that will be the parent.` (MCP: `id`, CLI: `-p, --parent <id>`)
  - `taskId`: `Use this if you want to convert an existing top-level Taskmaster task into a subtask of the specified parent.` (CLI: `-i, --task-id <id>`)
  - `title`: `Required if not using taskId. The title for the new subtask Taskmaster should create.` (CLI: `-t, --title <title>`)
  - `description`: `A brief description for the new subtask.` (CLI: `-d, --description <text>`)
  - `details`: `Provide implementation notes or details for the new subtask.` (CLI: `--details <text>`)
  - `dependencies`: `Specify IDs of other tasks or subtasks, e.g., '15' or '16.1', that must be done before this new subtask.` (CLI: `--dependencies <ids>`)
  - `status`: `Set the initial status for the new subtask. Default is 'pending'.` (CLI: `-s, --status <status>`)
  - `generate`: `Enable Taskmaster to regenerate markdown task files after adding the subtask.` (CLI: `--generate`)
  - `tag`: `Specify which tag context to operate on. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Break down tasks manually or reorganize existing tasks.

### 8. Update Tasks (`update`)

- **MCP Tool:** `update`
- **CLI Command:** `task-master update [options]`
- **Description:** `Update multiple upcoming tasks in Taskmaster based on new context or changes, starting from a specific task ID.`
- **Key Parameters/Options:**
  - `from`: `Required. The ID of the first task Taskmaster should update. All tasks with this ID or higher that are not 'done' will be considered.` (CLI: `--from <id>`)
  - `prompt`: `Required. Explain the change or new context for Taskmaster to apply to the tasks, e.g., "We are now using React Query instead of Redux Toolkit for data fetching".` (CLI: `-p, --prompt <text>`)
  - `research`: `Enable Taskmaster to use the research role for more informed updates. Requires appropriate API key.` (CLI: `-r, --research`)
  - `tag`: `Specify which tag context to operate on. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Handle significant implementation changes or pivots that affect multiple future tasks. Example CLI: `task-master update --from='18' --prompt='Switching to React Query.\nNeed to refactor data fetching...'`
- **Important:** This MCP tool makes AI calls and can take up to a minute to complete. Please inform users to hang tight while the operation is in progress.

### 9. Update Task (`update_task`)

- **MCP Tool:** `update_task`
- **CLI Command:** `task-master update-task [options]`
- **Description:** `Modify a specific Taskmaster task by ID, incorporating new information or changes. By default, this replaces the existing task details.`
- **Key Parameters/Options:**
  - `id`: `Required. The specific ID of the Taskmaster task, e.g., '15', you want to update.` (CLI: `-i, --id <id>`)
  - `prompt`: `Required. Explain the specific changes or provide the new information Taskmaster should incorporate into this task.` (CLI: `-p, --prompt <text>`)
  - `append`: `If true, appends the prompt content to the task's details with a timestamp, rather than replacing them. Behaves like update-subtask.` (CLI: `--append`)
  - `research`: `Enable Taskmaster to use the research role for more informed updates. Requires appropriate API key.` (CLI: `-r, --research`)
  - `tag`: `Specify which tag context the task belongs to. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Refine a specific task based on new understanding. Use `--append` to log progress without creating subtasks.
- **Important:** This MCP tool makes AI calls and can take up to a minute to complete. Please inform users to hang tight while the operation is in progress.

### 10. Update Subtask (`update_subtask`)

- **MCP Tool:** `update_subtask`
- **CLI Command:** `task-master update-subtask [options]`
- **Description:** `Append timestamped notes or details to a specific Taskmaster subtask without overwriting existing content. Intended for iterative implementation logging.`
- **Key Parameters/Options:**
  - `id`: `Required. The ID of the Taskmaster subtask, e.g., '5.2', to update with new information.` (CLI: `-i, --id <id>`)
  - `prompt`: `Required. The information, findings, or progress notes to append to the subtask's details with a timestamp.` (CLI: `-p, --prompt <text>`)
  - `research`: `Enable Taskmaster to use the research role for more informed updates. Requires appropriate API key.` (CLI: `-r, --research`)
  - `tag`: `Specify which tag context the subtask belongs to. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Log implementation progress, findings, and discoveries during subtask development. Each update is timestamped and appended to preserve the implementation journey.
- **Important:** This MCP tool makes AI calls and can take up to a minute to complete. Please inform users to hang tight while the operation is in progress.

### 11. Set Task Status (`set_task_status`)

- **MCP Tool:** `set_task_status`
- **CLI Command:** `task-master set-status [options]`
- **Description:** `Update the status of one or more Taskmaster tasks or subtasks, e.g., 'pending', 'in-progress', 'done'.`
- **Key Parameters/Options:**
  - `id`: `Required. The ID(s) of the Taskmaster task(s) or subtask(s), e.g., '15', '15.2', or '16,17.1', to update.` (CLI: `-i, --id <id>`)
  - `status`: `Required. The new status to set, e.g., 'done', 'pending', 'in-progress', 'review', 'cancelled'.` (CLI: `-s, --status <status>`)
  - `tag`: `Specify which tag context to operate on. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Mark progress as tasks move through the development cycle.

### 12. Remove Task (`remove_task`)

- **MCP Tool:** `remove_task`
- **CLI Command:** `task-master remove-task [options]`
- **Description:** `Permanently remove a task or subtask from the Taskmaster tasks list.`
- **Key Parameters/Options:**
  - `id`: `Required. The ID of the Taskmaster task, e.g., '5', or subtask, e.g., '5.2', to permanently remove.` (CLI: `-i, --id <id>`)
  - `yes`: `Skip the confirmation prompt and immediately delete the task.` (CLI: `-y, --yes`)
  - `tag`: `Specify which tag context to operate on. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Permanently delete tasks or subtasks that are no longer needed in the project.
- **Notes:** Use with caution as this operation cannot be undone. Consider using 'blocked', 'cancelled', or 'deferred' status instead if you just want to exclude a task from active planning but keep it for reference. The command automatically cleans up dependency references in other tasks.

---

## Task Structure & Breakdown

### 13. Expand Task (`expand_task`)

- **MCP Tool:** `expand_task`
- **CLI Command:** `task-master expand [options]`
- **Description:** `Use Taskmaster's AI to break down a complex task into smaller, manageable subtasks. Appends subtasks by default.`
- **Key Parameters/Options:**
  - `id`: `The ID of the specific Taskmaster task you want to break down into subtasks.` (CLI: `-i, --id <id>`)
  - `num`: `Optional: Suggests how many subtasks Taskmaster should aim to create. Uses complexity analysis/defaults otherwise.` (CLI: `-n, --num <number>`)
  - `research`: `Enable Taskmaster to use the research role for more informed subtask generation. Requires appropriate API key.` (CLI: `-r, --research`)
  - `prompt`: `Optional: Provide extra context or specific instructions to Taskmaster for generating the subtasks.` (CLI: `-p, --prompt <text>`)
  - `force`: `Optional: If true, clear existing subtasks before generating new ones. Default is false (append).` (CLI: `--force`)
  - `tag`: `Specify which tag context the task belongs to. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Generate a detailed implementation plan for a complex task before starting coding. Automatically uses complexity report recommendations if available and `num` is not specified.
- **Important:** This MCP tool makes AI calls and can take up to a minute to complete. Please inform users to hang tight while the operation is in progress.

### 14. Expand All Tasks (`expand_all`)

- **MCP Tool:** `expand_all`
- **CLI Command:** `task-master expand --all [options]` (Note: CLI uses the `expand` command with the `--all` flag)
- **Description:** `Tell Taskmaster to automatically expand all eligible pending/in-progress tasks based on complexity analysis or defaults. Appends subtasks by default.`
- **Key Parameters/Options:**
  - `num`: `Optional: Suggests how many subtasks Taskmaster should aim to create per task.` (CLI: `-n, --num <number>`)
  - `research`: `Enable research role for more informed subtask generation. Requires appropriate API key.` (CLI: `-r, --research`)
  - `prompt`: `Optional: Provide extra context for Taskmaster to apply generally during expansion.` (CLI: `-p, --prompt <text>`)
  - `force`: `Optional: If true, clear existing subtasks before generating new ones for each eligible task. Default is false (append).` (CLI: `--force`)
  - `tag`: `Specify which tag context to expand. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Useful after initial task generation or complexity analysis to break down multiple tasks at once.
- **Important:** This MCP tool makes AI calls and can take up to a minute to complete. Please inform users to hang tight while the operation is in progress.

### 15. Clear Subtasks (`clear_subtasks`)

- **MCP Tool:** `clear_subtasks`
- **CLI Command:** `task-master clear-subtasks [options]`
- **Description:** `Remove all subtasks from one or more specified Taskmaster parent tasks.`
- **Key Parameters/Options:**
  - `id`: `The ID(s) of the Taskmaster parent task(s) whose subtasks you want to remove, e.g., '15' or '16,18'. Required unless using 'all'.` (CLI: `-i, --id <ids>`)
  - `all`: `Tell Taskmaster to remove subtasks from all parent tasks.` (CLI: `--all`)
  - `tag`: `Specify which tag context to operate on. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Used before regenerating subtasks with `expand_task` if the previous breakdown needs replacement.

### 16. Remove Subtask (`remove_subtask`)

- **MCP Tool:** `remove_subtask`
- **CLI Command:** `task-master remove-subtask [options]`
- **Description:** `Remove a subtask from its Taskmaster parent, optionally converting it into a standalone task.`
- **Key Parameters/Options:**
  - `id`: `Required. The ID(s) of the Taskmaster subtask(s) to remove, e.g., '15.2' or '16.1,16.3'.` (CLI: `-i, --id <id>`)
  - `convert`: `If used, Taskmaster will turn the subtask into a regular top-level task instead of deleting it.` (CLI: `-c, --convert`)
  - `generate`: `Enable Taskmaster to regenerate markdown task files after removing the subtask.` (CLI: `--generate`)
  - `tag`: `Specify which tag context to operate on. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Delete unnecessary subtasks or promote a subtask to a top-level task.

### 17. Move Task (`move_task`)

- **MCP Tool:** `move_task`
- **CLI Command:** `task-master move [options]`
- **Description:** `Move a task or subtask to a new position within the task hierarchy.`
- **Key Parameters/Options:**
  - `from`: `Required. ID of the task/subtask to move (e.g., "5" or "5.2"). Can be comma-separated for multiple tasks.` (CLI: `--from <id>`)
  - `to`: `Required. ID of the destination (e.g., "7" or "7.3"). Must match the number of source IDs if comma-separated.` (CLI: `--to <id>`)
  - `tag`: `Specify which tag context to operate on. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Reorganize tasks by moving them within the hierarchy. Supports various scenarios like:
  - Moving a task to become a subtask
  - Moving a subtask to become a standalone task
  - Moving a subtask to a different parent
  - Reordering subtasks within the same parent
  - Moving a task to a new, non-existent ID (automatically creates placeholders)
  - Moving multiple tasks at once with comma-separated IDs
- **Validation Features:**
  - Allows moving tasks to non-existent destination IDs (creates placeholder tasks)
  - Prevents moving to existing task IDs that already have content (to avoid overwriting)
  - Validates that source tasks exist before attempting to move them
  - Maintains proper parent-child relationships
- **Example CLI:** `task-master move --from=5.2 --to=7.3` to move subtask 5.2 to become subtask 7.3.
- **Example Multi-Move:** `task-master move --from=10,11,12 --to=16,17,18` to move multiple tasks to new positions.
- **Common Use:** Resolving merge conflicts in tasks.json when multiple team members create tasks on different branches.

---

## Dependency Management

### 18. Add Dependency (`add_dependency`)

- **MCP Tool:** `add_dependency`
- **CLI Command:** `task-master add-dependency [options]`
- **Description:** `Define a dependency in Taskmaster, making one task a prerequisite for another.`
- **Key Parameters/Options:**
  - `id`: `Required. The ID of the Taskmaster task that will depend on another.` (CLI: `-i, --id <id>`)
  - `dependsOn`: `Required. The ID of the Taskmaster task that must be completed first, the prerequisite.` (CLI: `-d, --depends-on <id>`)
  - `tag`: `Specify which tag context to operate on. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <path>`)
- **Usage:** Establish the correct order of execution between tasks.

### 19. Remove Dependency (`remove_dependency`)

- **MCP Tool:** `remove_dependency`
- **CLI Command:** `task-master remove-dependency [options]`
- **Description:** `Remove a dependency relationship between two Taskmaster tasks.`
- **Key Parameters/Options:**
  - `id`: `Required. The ID of the Taskmaster task you want to remove a prerequisite from.` (CLI: `-i, --id <id>`)
  - `dependsOn`: `Required. The ID of the Taskmaster task that should no longer be a prerequisite.` (CLI: `-d, --depends-on <id>`)
  - `tag`: `Specify which tag context to operate on. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Update task relationships when the order of execution changes.

### 20. Validate Dependencies (`validate_dependencies`)

- **MCP Tool:** `validate_dependencies`
- **CLI Command:** `task-master validate-dependencies [options]`
- **Description:** `Check your Taskmaster tasks for dependency issues (like circular references or links to non-existent tasks) without making changes.`
- **Key Parameters/Options:**
  - `tag`: `Specify which tag context to validate. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Audit the integrity of your task dependencies.

### 21. Fix Dependencies (`fix_dependencies`)

- **MCP Tool:** `fix_dependencies`
- **CLI Command:** `task-master fix-dependencies [options]`
- **Description:** `Automatically fix dependency issues (like circular references or links to non-existent tasks) in your Taskmaster tasks.`
- **Key Parameters/Options:**
  - `tag`: `Specify which tag context to fix dependencies in. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Clean up dependency errors automatically.

---

## Analysis & Reporting

### 22. Analyze Project Complexity (`analyze_project_complexity`)

- **MCP Tool:** `analyze_project_complexity`
- **CLI Command:** `task-master analyze-complexity [options]`
- **Description:** `Have Taskmaster analyze your tasks to determine their complexity and suggest which ones need to be broken down further.`
- **Key Parameters/Options:**
  - `output`: `Where to save the complexity analysis report. Default is '.taskmaster/reports/task-complexity-report.json' (or '..._tagname.json' if a tag is used).` (CLI: `-o, --output <file>`)
  - `threshold`: `The minimum complexity score (1-10) that should trigger a recommendation to expand a task.` (CLI: `-t, --threshold <number>`)
  - `research`: `Enable research role for more accurate complexity analysis. Requires appropriate API key.` (CLI: `-r, --research`)
  - `tag`: `Specify which tag context to analyze. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Used before breaking down tasks to identify which ones need the most attention.
- **Important:** This MCP tool makes AI calls and can take up to a minute to complete. Please inform users to hang tight while the operation is in progress.

### 23. View Complexity Report (`complexity_report`)

- **MCP Tool:** `complexity_report`
- **CLI Command:** `task-master complexity-report [options]`
- **Description:** `Display the task complexity analysis report in a readable format.`
- **Key Parameters/Options:**
  - `tag`: `Specify which tag context to show the report for. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to the complexity report (default: '.taskmaster/reports/task-complexity-report.json').` (CLI: `-f, --file <file>`)
- **Usage:** Review and understand the complexity analysis results after running analyze-complexity.

---

## File Management

### 24. Generate Task Files (`generate`)

- **MCP Tool:** `generate`
- **CLI Command:** `task-master generate [options]`
- **Description:** `Create or update individual Markdown files for each task based on your tasks.json.`
- **Key Parameters/Options:**
  - `output`: `The directory where Taskmaster should save the task files (default: in a 'tasks' directory).` (CLI: `-o, --output <directory>`)
  - `tag`: `Specify which tag context to generate files for. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Run this after making changes to tasks.json to keep individual task files up to date. This command is now manual and no longer runs automatically.

---

## AI-Powered Research

### 25. Research (`research`)

- **MCP Tool:** `research`
- **CLI Command:** `task-master research [options]`
- **Description:** `Perform AI-powered research queries with project context to get fresh, up-to-date information beyond the AI's knowledge cutoff.`
- **Key Parameters/Options:**
  - `query`: `Required. Research query/prompt (e.g., "What are the latest best practices for React Query v5?").` (CLI: `[query]` positional or `-q, --query <text>`)
  - `taskIds`: `Comma-separated list of task/subtask IDs from the current tag context (e.g., "15,16.2,17").` (CLI: `-i, --id <ids>`)
  - `filePaths`: `Comma-separated list of file paths for context (e.g., "src/api.js,docs/readme.md").` (CLI: `-f, --files <paths>`)
  - `customContext`: `Additional custom context text to include in the research.` (CLI: `-c, --context <text>`)
  - `includeProjectTree`: `Include project file tree structure in context (default: false).` (CLI: `--tree`)
  - `detailLevel`: `Detail level for the research response: 'low', 'medium', 'high' (default: medium).` (CLI: `--detail <level>`)
  - `saveTo`: `Task or subtask ID (e.g., "15", "15.2") to automatically save the research conversation to.` (CLI: `--save-to <id>`)
  - `saveFile`: `If true, saves the research conversation to a markdown file in '.taskmaster/docs/research/'.` (CLI: `--save-file`)
  - `noFollowup`: `Disables the interactive follow-up question menu in the CLI.` (CLI: `--no-followup`)
  - `tag`: `Specify which tag context to use for task-based context gathering. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `projectRoot`: `The directory of the project. Must be an absolute path.` (CLI: Determined automatically)
- **Usage:** **This is a POWERFUL tool that agents should use FREQUENTLY** to:
  - Get fresh information beyond knowledge cutoff dates
  - Research latest best practices, library updates, security patches
  - Find implementation examples for specific technologies
  - Validate approaches against current industry standards
  - Get contextual advice based on project files and tasks
- **When to Consider Using Research:**
  - **Before implementing any task** - Research current best practices
  - **When encountering new technologies** - Get up-to-date implementation guidance (libraries, apis, etc)
  - **For security-related tasks** - Find latest security recommendations
  - **When updating dependencies** - Research breaking changes and migration guides
  - **For performance optimization** - Get current performance best practices
  - **When debugging complex issues** - Research known solutions and workarounds
- **Research + Action Pattern:**
  - Use `research` to gather fresh information
  - Use `update_subtask` to commit findings with timestamps
  - Use `update_task` to incorporate research into task details
  - Use `add_task` with research flag for informed task creation
- **Important:** This MCP tool makes AI calls and can take up to a minute to complete. The research provides FRESH data beyond the AI's training cutoff, making it invaluable for current best practices and recent developments.

---

## Tag Management

This new suite of commands allows you to manage different task contexts (tags).

### 26. List Tags (`tags`)

- **MCP Tool:** `list_tags`
- **CLI Command:** `task-master tags [options]`
- **Description:** `List all available tags with task counts, completion status, and other metadata.`
- **Key Parameters/Options:**
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
  - `--show-metadata`: `Include detailed metadata in the output (e.g., creation date, description).` (CLI: `--show-metadata`)

### 27. Add Tag (`add_tag`)

- **MCP Tool:** `add_tag`
- **CLI Command:** `task-master add-tag <tagName> [options]`
- **Description:** `Create a new, empty tag context, or copy tasks from another tag.`
- **Key Parameters/Options:**
  - `tagName`: `Name of the new tag to create (alphanumeric, hyphens, underscores).` (CLI: `<tagName>` positional)
  - `--from-branch`: `Creates a tag with a name derived from the current git branch, ignoring the <tagName> argument.` (CLI: `--from-branch`)
  - `--copy-from-current`: `Copy tasks from the currently active tag to the new tag.` (CLI: `--copy-from-current`)
  - `--copy-from <tag>`: `Copy tasks from a specific source tag to the new tag.` (CLI: `--copy-from <tag>`)
  - `--description <text>`: `Provide an optional description for the new tag.` (CLI: `-d, --description <text>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)

### 28. Delete Tag (`delete_tag`)

- **MCP Tool:** `delete_tag`
- **CLI Command:** `task-master delete-tag <tagName> [options]`
- **Description:** `Permanently delete a tag and all of its associated tasks.`
- **Key Parameters/Options:**
  - `tagName`: `Name of the tag to delete.` (CLI: `<tagName>` positional)
  - `--yes`: `Skip the confirmation prompt.` (CLI: `-y, --yes`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)

### 29. Use Tag (`use_tag`)

- **MCP Tool:** `use_tag`
- **CLI Command:** `task-master use-tag <tagName>`
- **Description:** `Switch your active task context to a different tag.`
- **Key Parameters/Options:**
  - `tagName`: `Name of the tag to switch to.` (CLI: `<tagName>` positional)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)

### 30. Rename Tag (`rename_tag`)

- **MCP Tool:** `rename_tag`
- **CLI Command:** `task-master rename-tag <oldName> <newName>`
- **Description:** `Rename an existing tag.`
- **Key Parameters/Options:**
  - `oldName`: `The current name of the tag.` (CLI: `<oldName>` positional)
  - `newName`: `The new name for the tag.` (CLI: `<newName>` positional)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)

### 31. Copy Tag (`copy_tag`)

- **MCP Tool:** `copy_tag`
- **CLI Command:** `task-master copy-tag <sourceName> <targetName> [options]`
- **Description:** `Copy an entire tag context, including all its tasks and metadata, to a new tag.`
- **Key Parameters/Options:**
  - `sourceName`: `Name of the tag to copy from.` (CLI: `<sourceName>` positional)
  - `targetName`: `Name of the new tag to create.` (CLI: `<targetName>` positional)
  - `--description <text>`: `Optional description for the new tag.` (CLI: `-d, --description <text>`)

---

## Miscellaneous

### 32. Sync Readme (`sync-readme`) -- experimental

- **MCP Tool:** N/A
- **CLI Command:** `task-master sync-readme [options]`
- **Description:** `Exports your task list to your project's README.md file, useful for showcasing progress.`
- **Key Parameters/Options:**
  - `status`: `Filter tasks by status (e.g., 'pending', 'done').` (CLI: `-s, --status <status>`)
  - `withSubtasks`: `Include subtasks in the export.` (CLI: `--with-subtasks`)
  - `tag`: `Specify which tag context to export from. Defaults to the current active tag.` (CLI: `--tag <name>`)

---

## Environment Variables Configuration (Updated)

Taskmaster primarily uses the **`.taskmaster/config.json`** file (in project root) for configuration (models, parameters, logging level, etc.), managed via `task-master models --setup`.

Environment variables are used **only** for sensitive API keys related to AI providers and specific overrides like the Ollama base URL:

- **API Keys (Required for corresponding provider):**
  - `ANTHROPIC_API_KEY`
  - `PERPLEXITY_API_KEY`
  - `OPENAI_API_KEY`
  - `GOOGLE_API_KEY`
  - `MISTRAL_API_KEY`
  - `AZURE_OPENAI_API_KEY` (Requires `AZURE_OPENAI_ENDPOINT` too)
  - `OPENROUTER_API_KEY`
  - `XAI_API_KEY`
  - `OLLAMA_API_KEY` (Requires `OLLAMA_BASE_URL` too)
- **Endpoints (Optional/Provider Specific inside .taskmaster/config.json):**
  - `AZURE_OPENAI_ENDPOINT`
  - `OLLAMA_BASE_URL` (Default: `http://localhost:11434/api`)

**Set API keys** in your **`.env`** file in the project root (for CLI use) or within the `env` section of your **`.cursor/mcp.json`** file (for MCP/Cursor integration). All other settings (model choice, max tokens, temperature, log level, custom endpoints) are managed in `.taskmaster/config.json` via `task-master models` command or `models` MCP tool.

---

For details on how these commands fit into the development process, see the [dev_workflow.mdc](mdc:.cursor/rules/taskmaster/dev_workflow.mdc).

================================================
FILE: .github/instructions/dev_workflow.instructions.md
================================================

---

description: Guide for using Taskmaster to manage task-driven development workflows
applyTo: "\*_/_"

---

# Taskmaster Development Workflow

This guide outlines the standard process for using Taskmaster to manage software development projects. It is written as a set of instructions for you, the AI agent.

- **Your Default Stance**: For most projects, the user can work directly within the `master` task context. Your initial actions should operate on this default context unless a clear pattern for multi-context work emerges.
- **Your Goal**: Your role is to elevate the user's workflow by intelligently introducing advanced features like **Tagged Task Lists** when you detect the appropriate context. Do not force tags on the user; suggest them as a helpful solution to a specific need.

## The Basic Loop

The fundamental development cycle you will facilitate is:

1.  **`list`**: Show the user what needs to be done.
2.  **`next`**: Help the user decide what to work on.
3.  **`show <id>`**: Provide details for a specific task.
4.  **`expand <id>`**: Break down a complex task into smaller, manageable subtasks.
5.  **Implement**: The user writes the code and tests.
6.  **`update-subtask`**: Log progress and findings on behalf of the user.
7.  **`set-status`**: Mark tasks and subtasks as `done` as work is completed.
8.  **Repeat**.

All your standard command executions should operate on the user's current task context, which defaults to `master`.

---

## Standard Development Workflow Process

### Simple Workflow (Default Starting Point)

For new projects or when users are getting started, operate within the `master` tag context:

- Start new projects by running `initialize_project` tool / `task-master init` or `parse_prd` / `task-master parse-prd --input='<prd-file.txt>'` (see @`taskmaster.instructions.md`) to generate initial tasks.json with tagged structure
- Configure rule sets during initialization with `--rules` flag (e.g., `task-master init --rules vscode,windsurf`) or manage them later with `task-master rules add/remove` commands
- Begin coding sessions with `get_tasks` / `task-master list` (see @`taskmaster.instructions.md`) to see current tasks, status, and IDs
- Determine the next task to work on using `next_task` / `task-master next` (see @`taskmaster.instructions.md`)
- Analyze task complexity with `analyze_project_complexity` / `task-master analyze-complexity --research` (see @`taskmaster.instructions.md`) before breaking down tasks
- Review complexity report using `complexity_report` / `task-master complexity-report` (see @`taskmaster.instructions.md`)
- Select tasks based on dependencies (all marked 'done'), priority level, and ID order
- View specific task details using `get_task` / `task-master show <id>` (see @`taskmaster.instructions.md`) to understand implementation requirements
- Break down complex tasks using `expand_task` / `task-master expand --id=<id> --force --research` (see @`taskmaster.instructions.md`) with appropriate flags like `--force` (to replace existing subtasks) and `--research`
- Implement code following task details, dependencies, and project standards
- Mark completed tasks with `set_task_status` / `task-master set-status --id=<id> --status=done` (see @`taskmaster.instructions.md`)
- Update dependent tasks when implementation differs from original plan using `update` / `task-master update --from=<id> --prompt="..."` or `update_task` / `task-master update-task --id=<id> --prompt="..."` (see @`taskmaster.instructions.md`)

---

## Leveling Up: Agent-Led Multi-Context Workflows

While the basic workflow is powerful, your primary opportunity to add value is by identifying when to introduce **Tagged Task Lists**. These patterns are your tools for creating a more organized and efficient development environment for the user, especially if you detect agentic or parallel development happening across the same session.

**Critical Principle**: Most users should never see a difference in their experience. Only introduce advanced workflows when you detect clear indicators that the project has evolved beyond simple task management.

### When to Introduce Tags: Your Decision Patterns

Here are the patterns to look for. When you detect one, you should propose the corresponding workflow to the user.

#### Pattern 1: Simple Git Feature Branching

This is the most common and direct use case for tags.

- **Trigger**: The user creates a new git branch (e.g., `git checkout -b feature/user-auth`).
- **Your Action**: Propose creating a new tag that mirrors the branch name to isolate the feature's tasks from `master`.
- **Your Suggested Prompt**: _"I see you've created a new branch named 'feature/user-auth'. To keep all related tasks neatly organized and separate from your main list, I can create a corresponding task tag for you. This helps prevent merge conflicts in your `tasks.json` file later. Shall I create the 'feature-user-auth' tag?"_
- **Tool to Use**: `task-master add-tag --from-branch`

#### Pattern 2: Team Collaboration

- **Trigger**: The user mentions working with teammates (e.g., "My teammate Alice is handling the database schema," or "I need to review Bob's work on the API.").
- **Your Action**: Suggest creating a separate tag for the user's work to prevent conflicts with shared master context.
- **Your Suggested Prompt**: _"Since you're working with Alice, I can create a separate task context for your work to avoid conflicts. This way, Alice can continue working with the master list while you have your own isolated context. When you're ready to merge your work, we can coordinate the tasks back to master. Shall I create a tag for your current work?"_
- **Tool to Use**: `task-master add-tag my-work --copy-from-current --description="My tasks while collaborating with Alice"`

#### Pattern 3: Experiments or Risky Refactors

- **Trigger**: The user wants to try something that might not be kept (e.g., "I want to experiment with switching our state management library," or "Let's refactor the old API module, but I want to keep the current tasks as a reference.").
- **Your Action**: Propose creating a sandboxed tag for the experimental work.
- **Your Suggested Prompt**: _"This sounds like a great experiment. To keep these new tasks separate from our main plan, I can create a temporary 'experiment-zustand' tag for this work. If we decide not to proceed, we can simply delete the tag without affecting the main task list. Sound good?"_
- **Tool to Use**: `task-master add-tag experiment-zustand --description="Exploring Zustand migration"`

#### Pattern 4: Large Feature Initiatives (PRD-Driven)

This is a more structured approach for significant new features or epics.

- **Trigger**: The user describes a large, multi-step feature that would benefit from a formal plan.
- **Your Action**: Propose a comprehensive, PRD-driven workflow.
- **Your Suggested Prompt**: _"This sounds like a significant new feature. To manage this effectively, I suggest we create a dedicated task context for it. Here's the plan: I'll create a new tag called 'feature-xyz', then we can draft a Product Requirements Document (PRD) together to scope the work. Once the PRD is ready, I'll automatically generate all the necessary tasks within that new tag. How does that sound?"_
- **Your Implementation Flow**:
  1.  **Create an empty tag**: `task-master add-tag feature-xyz --description "Tasks for the new XYZ feature"`. You can also start by creating a git branch if applicable, and then create the tag from that branch.
  2.  **Collaborate & Create PRD**: Work with the user to create a detailed PRD file (e.g., `.taskmaster/docs/feature-xyz-prd.txt`).
  3.  **Parse PRD into the new tag**: `task-master parse-prd .taskmaster/docs/feature-xyz-prd.txt --tag feature-xyz`
  4.  **Prepare the new task list**: Follow up by suggesting `analyze-complexity` and `expand-all` for the newly created tasks within the `feature-xyz` tag.

#### Pattern 5: Version-Based Development

Tailor your approach based on the project maturity indicated by tag names.

- **Prototype/MVP Tags** (`prototype`, `mvp`, `poc`, `v0.x`):

  - **Your Approach**: Focus on speed and functionality over perfection
  - **Task Generation**: Create tasks that emphasize "get it working" over "get it perfect"
  - **Complexity Level**: Lower complexity, fewer subtasks, more direct implementation paths
  - **Research Prompts**: Include context like "This is a prototype - prioritize speed and basic functionality over optimization"
  - **Example Prompt Addition**: _"Since this is for the MVP, I'll focus on tasks that get core functionality working quickly rather than over-engineering."_

- **Production/Mature Tags** (`v1.0+`, `production`, `stable`):
  - **Your Approach**: Emphasize robustness, testing, and maintainability
  - **Task Generation**: Include comprehensive error handling, testing, documentation, and optimization
  - **Complexity Level**: Higher complexity, more detailed subtasks, thorough implementation paths
  - **Research Prompts**: Include context like "This is for production - prioritize reliability, performance, and maintainability"
  - **Example Prompt Addition**: _"Since this is for production, I'll ensure tasks include proper error handling, testing, and documentation."_

### Advanced Workflow (Tag-Based & PRD-Driven)

**When to Transition**: Recognize when the project has evolved (or has initiated a project which existing code) beyond simple task management. Look for these indicators:

- User mentions teammates or collaboration needs
- Project has grown to 15+ tasks with mixed priorities
- User creates feature branches or mentions major initiatives
- User initializes Taskmaster on an existing, complex codebase
- User describes large features that would benefit from dedicated planning

**Your Role in Transition**: Guide the user to a more sophisticated workflow that leverages tags for organization and PRDs for comprehensive planning.

#### Master List Strategy (High-Value Focus)

Once you transition to tag-based workflows, the `master` tag should ideally contain only:

- **High-level deliverables** that provide significant business value
- **Major milestones** and epic-level features
- **Critical infrastructure** work that affects the entire project
- **Release-blocking** items

**What NOT to put in master**:

- Detailed implementation subtasks (these go in feature-specific tags' parent tasks)
- Refactoring work (create dedicated tags like `refactor-auth`)
- Experimental features (use `experiment-*` tags)
- Team member-specific tasks (use person-specific tags)

#### PRD-Driven Feature Development

**For New Major Features**:

1. **Identify the Initiative**: When user describes a significant feature
2. **Create Dedicated Tag**: `add_tag feature-[name] --description="[Feature description]"`
3. **Collaborative PRD Creation**: Work with user to create comprehensive PRD in `.taskmaster/docs/feature-[name]-prd.txt`
4. **Parse & Prepare**:
   - `parse_prd .taskmaster/docs/feature-[name]-prd.txt --tag=feature-[name]`
   - `analyze_project_complexity --tag=feature-[name] --research`
   - `expand_all --tag=feature-[name] --research`
5. **Add Master Reference**: Create a high-level task in `master` that references the feature tag

**For Existing Codebase Analysis**:
When users initialize Taskmaster on existing projects:

1. **Codebase Discovery**: Use your native tools for producing deep context about the code base. You may use `research` tool with `--tree` and `--files` to collect up to date information using the existing architecture as context.
2. **Collaborative Assessment**: Work with user to identify improvement areas, technical debt, or new features
3. **Strategic PRD Creation**: Co-author PRDs that include:
   - Current state analysis (based on your codebase research)
   - Proposed improvements or new features
   - Implementation strategy considering existing code
4. **Tag-Based Organization**: Parse PRDs into appropriate tags (`refactor-api`, `feature-dashboard`, `tech-debt`, etc.)
5. **Master List Curation**: Keep only the most valuable initiatives in master

The parse-prd's `--append` flag enables the user to parse multiple PRDs within tags or across tags. PRDs should be focused and the number of tasks they are parsed into should be strategically chosen relative to the PRD's complexity and level of detail.

### Workflow Transition Examples

**Example 1: Simple → Team-Based**

```
User: "Alice is going to help with the API work"
Your Response: "Great! To avoid conflicts, I'll create a separate task context for your work. Alice can continue with the master list while you work in your own context. When you're ready to merge, we can coordinate the tasks back together."
Action: add_tag my-api-work --copy-from-current --description="My API tasks while collaborating with Alice"
```

**Example 2: Simple → PRD-Driven**

```
User: "I want to add a complete user dashboard with analytics, user management, and reporting"
Your Response: "This sounds like a major feature that would benefit from detailed planning. Let me create a dedicated context for this work and we can draft a PRD together to ensure we capture all requirements."
Actions:
1. add_tag feature-dashboard --description="User dashboard with analytics and management"
2. Collaborate on PRD creation
3. parse_prd dashboard-prd.txt --tag=feature-dashboard
4. Add high-level "User Dashboard" task to master
```

**Example 3: Existing Project → Strategic Planning**

```
User: "I just initialized Taskmaster on my existing React app. It's getting messy and I want to improve it."
Your Response: "Let me research your codebase to understand the current architecture, then we can create a strategic plan for improvements."
Actions:
1. research "Current React app architecture and improvement opportunities" --tree --files=src/
2. Collaborate on improvement PRD based on findings
3. Create tags for different improvement areas (refactor-components, improve-state-management, etc.)
4. Keep only major improvement initiatives in master
```

---

## Primary Interaction: MCP Server vs. CLI

Taskmaster offers two primary ways to interact:

1.  **MCP Server (Recommended for Integrated Tools)**:

    - For AI agents and integrated development environments (like VS Code), interacting via the **MCP server is the preferred method**.
    - The MCP server exposes Taskmaster functionality through a set of tools (e.g., `get_tasks`, `add_subtask`).
    - This method offers better performance, structured data exchange, and richer error handling compared to CLI parsing.
    - Refer to @`mcp.instructions.md` for details on the MCP architecture and available tools.
    - A comprehensive list and description of MCP tools and their corresponding CLI commands can be found in @`taskmaster.instructions.md`.
    - **Restart the MCP server** if core logic in `scripts/modules` or MCP tool/direct function definitions change.
    - **Note**: MCP tools fully support tagged task lists with complete tag management capabilities.

2.  **`task-master` CLI (For Users & Fallback)**:
    - The global `task-master` command provides a user-friendly interface for direct terminal interaction.
    - It can also serve as a fallback if the MCP server is inaccessible or a specific function isn't exposed via MCP.
    - Install globally with `npm install -g task-master-ai` or use locally via `npx task-master-ai ...`.
    - The CLI commands often mirror the MCP tools (e.g., `task-master list` corresponds to `get_tasks`).
    - Refer to @`taskmaster.instructions.md` for a detailed command reference.
    - **Tagged Task Lists**: CLI fully supports the new tagged system with seamless migration.

## How the Tag System Works (For Your Reference)

- **Data Structure**: Tasks are organized into separate contexts (tags) like "master", "feature-branch", or "v2.0".
- **Silent Migration**: Existing projects automatically migrate to use a "master" tag with zero disruption.
- **Context Isolation**: Tasks in different tags are completely separate. Changes in one tag do not affect any other tag.
- **Manual Control**: The user is always in control. There is no automatic switching. You facilitate switching by using `use-tag <name>`.
- **Full CLI & MCP Support**: All tag management commands are available through both the CLI and MCP tools for you to use. Refer to @`taskmaster.instructions.md` for a full command list.

---

## Task Complexity Analysis

- Run `analyze_project_complexity` / `task-master analyze-complexity --research` (see @`taskmaster.instructions.md`) for comprehensive analysis
- Review complexity report via `complexity_report` / `task-master complexity-report` (see @`taskmaster.instructions.md`) for a formatted, readable version.
- Focus on tasks with highest complexity scores (8-10) for detailed breakdown
- Use analysis results to determine appropriate subtask allocation
- Note that reports are automatically used by the `expand_task` tool/command

## Task Breakdown Process

- Use `expand_task` / `task-master expand --id=<id>`. It automatically uses the complexity report if found, otherwise generates default number of subtasks.
- Use `--num=<number>` to specify an explicit number of subtasks, overriding defaults or complexity report recommendations.
- Add `--research` flag to leverage Perplexity AI for research-backed expansion.
- Add `--force` flag to clear existing subtasks before generating new ones (default is to append).
- Use `--prompt="<context>"` to provide additional context when needed.
- Review and adjust generated subtasks as necessary.
- Use `expand_all` tool or `task-master expand --all` to expand multiple pending tasks at once, respecting flags like `--force` and `--research`.
- If subtasks need complete replacement (regardless of the `--force` flag on `expand`), clear them first with `clear_subtasks` / `task-master clear-subtasks --id=<id>`.

## Implementation Drift Handling

- When implementation differs significantly from planned approach
- When future tasks need modification due to current implementation choices
- When new dependencies or requirements emerge
- Use `update` / `task-master update --from=<futureTaskId> --prompt='<explanation>\nUpdate context...' --research` to update multiple future tasks.
- Use `update_task` / `task-master update-task --id=<taskId> --prompt='<explanation>\nUpdate context...' --research` to update a single specific task.

## Task Status Management

- Use 'pending' for tasks ready to be worked on
- Use 'done' for completed and verified tasks
- Use 'deferred' for postponed tasks
- Add custom status values as needed for project-specific workflows

## Task Structure Fields

- **id**: Unique identifier for the task (Example: `1`, `1.1`)
- **title**: Brief, descriptive title (Example: `"Initialize Repo"`)
- **description**: Concise summary of what the task involves (Example: `"Create a new repository, set up initial structure."`)
- **status**: Current state of the task (Example: `"pending"`, `"done"`, `"deferred"`)
- **dependencies**: IDs of prerequisite tasks (Example: `[1, 2.1]`)
  - Dependencies are displayed with status indicators (✅ for completed, ⏱️ for pending)
  - This helps quickly identify which prerequisite tasks are blocking work
- **priority**: Importance level (Example: `"high"`, `"medium"`, `"low"`)
- **details**: In-depth implementation instructions (Example: `"Use GitHub client ID/secret, handle callback, set session token."`)
- **testStrategy**: Verification approach (Example: `"Deploy and call endpoint to confirm 'Hello World' response."`)
- **subtasks**: List of smaller, more specific tasks (Example: `[{"id": 1, "title": "Configure OAuth", ...}]`)
- Refer to task structure details (previously linked to `tasks.instructions.md`).

## Configuration Management (Updated)

Taskmaster configuration is managed through two main mechanisms:

1.  **`.taskmaster/config.json` File (Primary):**

    - Located in the project root directory.
    - Stores most configuration settings: AI model selections (main, research, fallback), parameters (max tokens, temperature), logging level, default subtasks/priority, project name, etc.
    - **Tagged System Settings**: Includes `global.defaultTag` (defaults to "master") and `tags` section for tag management configuration.
    - **Managed via `task-master models --setup` command.** Do not edit manually unless you know what you are doing.
    - **View/Set specific models via `task-master models` command or `models` MCP tool.**
    - Created automatically when you run `task-master models --setup` for the first time or during tagged system migration.

2.  **Environment Variables (`.env` / `mcp.json`):**

    - Used **only** for sensitive API keys and specific endpoint URLs.
    - Place API keys (one per provider) in a `.env` file in the project root for CLI usage.
    - For MCP/VS Code integration, configure these keys in the `env` section of `.vscode/mcp.json`.
    - Available keys/variables: See `assets/env.example` or the Configuration section in the command reference (previously linked to `taskmaster.instructions.md`).

3.  **`.taskmaster/state.json` File (Tagged System State):**
    - Tracks current tag context and migration status.
    - Automatically created during tagged system migration.
    - Contains: `currentTag`, `lastSwitched`, `migrationNoticeShown`.

**Important:** Non-API key settings (like model selections, `MAX_TOKENS`, `TASKMASTER_LOG_LEVEL`) are **no longer configured via environment variables**. Use the `task-master models` command (or `--setup` for interactive configuration) or the `models` MCP tool.
**If AI commands FAIL in MCP** verify that the API key for the selected provider is present in the `env` section of `.vscode/mcp.json`.
**If AI commands FAIL in CLI** verify that the API key for the selected provider is present in the `.env` file in the root of the project.

## Rules Management

Taskmaster supports multiple AI coding assistant rule sets that can be configured during project initialization or managed afterward:

- **Available Profiles**: Claude Code, Cline, Codex, VS Code, Roo Code, Trae, Windsurf (claude, cline, codex, vscode, roo, trae, windsurf)
- **During Initialization**: Use `task-master init --rules vscode,windsurf` to specify which rule sets to include
- **After Initialization**: Use `task-master rules add <profiles>` or `task-master rules remove <profiles>` to manage rule sets
- **Interactive Setup**: Use `task-master rules setup` to launch an interactive prompt for selecting rule profiles
- **Default Behavior**: If no `--rules` flag is specified during initialization, all available rule profiles are included
- **Rule Structure**: Each profile creates its own directory (e.g., `.github/instructions`, `.roo/rules`) with appropriate configuration files

## Determining the Next Task

- Run `next_task` / `task-master next` to show the next task to work on.
- The command identifies tasks with all dependencies satisfied
- Tasks are prioritized by priority level, dependency count, and ID
- The command shows comprehensive task information including:
  - Basic task details and description
  - Implementation details
  - Subtasks (if they exist)
  - Contextual suggested actions
- Recommended before starting any new development work
- Respects your project's dependency structure
- Ensures tasks are completed in the appropriate sequence
- Provides ready-to-use commands for common task actions

## Viewing Specific Task Details

- Run `get_task` / `task-master show <id>` to view a specific task.
- Use dot notation for subtasks: `task-master show 1.2` (shows subtask 2 of task 1)
- Displays comprehensive information similar to the next command, but for a specific task
- For parent tasks, shows all subtasks and their current status
- For subtasks, shows parent task information and relationship
- Provides contextual suggested actions appropriate for the specific task
- Useful for examining task details before implementation or checking status

## Managing Task Dependencies

- Use `add_dependency` / `task-master add-dependency --id=<id> --depends-on=<id>` to add a dependency.
- Use `remove_dependency` / `task-master remove-dependency --id=<id> --depends-on=<id>` to remove a dependency.
- The system prevents circular dependencies and duplicate dependency entries
- Dependencies are checked for existence before being added or removed
- Task files are automatically regenerated after dependency changes
- Dependencies are visualized with status indicators in task listings and files

## Task Reorganization

- Use `move_task` / `task-master move --from=<id> --to=<id>` to move tasks or subtasks within the hierarchy
- This command supports several use cases:
  - Moving a standalone task to become a subtask (e.g., `--from=5 --to=7`)
  - Moving a subtask to become a standalone task (e.g., `--from=5.2 --to=7`)
  - Moving a subtask to a different parent (e.g., `--from=5.2 --to=7.3`)
  - Reordering subtasks within the same parent (e.g., `--from=5.2 --to=5.4`)
  - Moving a task to a new, non-existent ID position (e.g., `--from=5 --to=25`)
  - Moving multiple tasks at once using comma-separated IDs (e.g., `--from=10,11,12 --to=16,17,18`)
- The system includes validation to prevent data loss:
  - Allows moving to non-existent IDs by creating placeholder tasks
  - Prevents moving to existing task IDs that have content (to avoid overwriting)
  - Validates source tasks exist before attempting to move them
- The system maintains proper parent-child relationships and dependency integrity
- Task files are automatically regenerated after the move operation
- This provides greater flexibility in organizing and refining your task structure as project understanding evolves
- This is especially useful when dealing with potential merge conflicts arising from teams creating tasks on separate branches. Solve these conflicts very easily by moving your tasks and keeping theirs.

## Iterative Subtask Implementation

Once a task has been broken down into subtasks using `expand_task` or similar methods, follow this iterative process for implementation:

1.  **Understand the Goal (Preparation):**

    - Use `get_task` / `task-master show <subtaskId>` (see @`taskmaster.instructions.md`) to thoroughly understand the specific goals and requirements of the subtask.

2.  **Initial Exploration & Planning (Iteration 1):**

    - This is the first attempt at creating a concrete implementation plan.
    - Explore the codebase to identify the precise files, functions, and even specific lines of code that will need modification.
    - Determine the intended code changes (diffs) and their locations.
    - Gather _all_ relevant details from this exploration phase.

3.  **Log the Plan:**

    - Run `update_subtask` / `task-master update-subtask --id=<subtaskId> --prompt='<detailed plan>'`.
    - Provide the _complete and detailed_ findings from the exploration phase in the prompt. Include file paths, line numbers, proposed diffs, reasoning, and any potential challenges identified. Do not omit details. The goal is to create a rich, timestamped log within the subtask's `details`.

4.  **Verify the Plan:**

    - Run `get_task` / `task-master show <subtaskId>` again to confirm that the detailed implementation plan has been successfully appended to the subtask's details.

5.  **Begin Implementation:**

    - Set the subtask status using `set_task_status` / `task-master set-status --id=<subtaskId> --status=in-progress`.
    - Start coding based on the logged plan.

6.  **Refine and Log Progress (Iteration 2+):**

    - As implementation progresses, you will encounter challenges, discover nuances, or confirm successful approaches.
    - **Before appending new information**: Briefly review the _existing_ details logged in the subtask (using `get_task` or recalling from context) to ensure the update adds fresh insights and avoids redundancy.
    - **Regularly** use `update_subtask` / `task-master update-subtask --id=<subtaskId> --prompt='<update details>\n- What worked...\n- What didn't work...'` to append new findings.
    - **Crucially, log:**
      - What worked ("fundamental truths" discovered).
      - What didn't work and why (to avoid repeating mistakes).
      - Specific code snippets or configurations that were successful.
      - Decisions made, especially if confirmed with user input.
      - Any deviations from the initial plan and the reasoning.
    - The objective is to continuously enrich the subtask's details, creating a log of the implementation journey that helps the AI (and human developers) learn, adapt, and avoid repeating errors.

7.  **Review & Update Rules (Post-Implementation):**

    - Once the implementation for the subtask is functionally complete, review all code changes and the relevant chat history.
    - Identify any new or modified code patterns, conventions, or best practices established during the implementation.
    - Create new or update existing rules following internal guidelines (previously linked to `cursor_rules.instructions.md` and `self_improve.instructions.md`).

8.  **Mark Task Complete:**

    - After verifying the implementation and updating any necessary rules, mark the subtask as completed: `set_task_status` / `task-master set-status --id=<subtaskId> --status=done`.

9.  **Commit Changes (If using Git):**

    - Stage the relevant code changes and any updated/new rule files (`git add .`).
    - Craft a comprehensive Git commit message summarizing the work done for the subtask, including both code implementation and any rule adjustments.
    - Execute the commit command directly in the terminal (e.g., `git commit -m 'feat(module): Implement feature X for subtask <subtaskId>\n\n- Details about changes...\n- Updated rule Y for pattern Z'`).
    - Consider if a Changeset is needed according to internal versioning guidelines (previously linked to `changeset.instructions.md`). If so, run `npm run changeset`, stage the generated file, and amend the commit or create a new one.

10. **Proceed to Next Subtask:**
    - Identify the next subtask (e.g., using `next_task` / `task-master next`).

## Code Analysis & Refactoring Techniques

- **Top-Level Function Search**:
  - Useful for understanding module structure or planning refactors.
  - Use grep/ripgrep to find exported functions/constants:
    `rg "export (async function|function|const) \w+"` or similar patterns.
  - Can help compare functions between files during migrations or identify potential naming conflicts.

---

_This workflow provides a general guideline. Adapt it based on your specific project needs and team practices._

================================================
FILE: .github/instructions/self_improve.instructions.md
================================================

---

description: Guidelines for continuously improving VS Code rules based on emerging code patterns and best practices.
applyTo: "\*_/_"

---

- **Rule Improvement Triggers:**

  - New code patterns not covered by existing rules
  - Repeated similar implementations across files
  - Common error patterns that could be prevented
  - New libraries or tools being used consistently
  - Emerging best practices in the codebase

- **Analysis Process:**

  - Compare new code with existing rules
  - Identify patterns that should be standardized
  - Look for references to external documentation
  - Check for consistent error handling patterns
  - Monitor test patterns and coverage

- **Rule Updates:**

  - **Add New Rules When:**

    - A new technology/pattern is used in 3+ files
    - Common bugs could be prevented by a rule
    - Code reviews repeatedly mention the same feedback
    - New security or performance patterns emerge

  - **Modify Existing Rules When:**
    - Better examples exist in the codebase
    - Additional edge cases are discovered
    - Related rules have been updated
    - Implementation details have changed

- **Example Pattern Recognition:**

  ```typescript
  // If you see repeated patterns like:
  const data = await prisma.user.findMany({
    select: { id: true, email: true },
    where: { status: "ACTIVE" },
  });

  // Consider adding to [prisma.instructions.md](.github/instructions/prisma.instructions.md):
  // - Standard select fields
  // - Common where conditions
  // - Performance optimization patterns
  ```

- **Rule Quality Checks:**

  - Rules should be actionable and specific
  - Examples should come from actual code
  - References should be up to date
  - Patterns should be consistently enforced

- **Continuous Improvement:**

  - Monitor code review comments
  - Track common development questions
  - Update rules after major refactors
  - Add links to relevant documentation
  - Cross-reference related rules

- **Rule Deprecation:**

  - Mark outdated patterns as deprecated
  - Remove rules that no longer apply
  - Update references to deprecated rules
  - Document migration paths for old patterns

- **Documentation Updates:**
  - Keep examples synchronized with code
  - Update references to external docs
  - Maintain links between related rules
  - Document breaking changes
    Follow [vscode_rules.instructions.md](.github/instructions/vscode_rules.instructions.md) for proper rule formatting and structure.

================================================
FILE: .github/instructions/taskmaster.instructions.md
================================================

---

description: Comprehensive reference for Taskmaster MCP tools and CLI commands.
applyTo: "\*_/_"

---

# Taskmaster Tool & Command Reference

This document provides a detailed reference for interacting with Taskmaster, covering both the recommended MCP tools, suitable for integrations like VS Code, and the corresponding `task-master` CLI commands, designed for direct user interaction or fallback.

**Note:** For interacting with Taskmaster programmatically or via integrated tools, using the **MCP tools is strongly recommended** due to better performance, structured data, and error handling. The CLI commands serve as a user-friendly alternative and fallback.

**Important:** Several MCP tools involve AI processing... The AI-powered tools include `parse_prd`, `analyze_project_complexity`, `update_subtask`, `update_task`, `update`, `expand_all`, `expand_task`, and `add_task`.

**🏷️ Tagged Task Lists System:** Task Master now supports **tagged task lists** for multi-context task management. This allows you to maintain separate, isolated lists of tasks for different features, branches, or experiments. Existing projects are seamlessly migrated to use a default "master" tag. Most commands now support a `--tag <name>` flag to specify which context to operate on. If omitted, commands use the currently active tag.

---

## Initialization & Setup

### 1. Initialize Project (`init`)

- **MCP Tool:** `initialize_project`
- **CLI Command:** `task-master init [options]`
- **Description:** `Set up the basic Taskmaster file structure and configuration in the current directory for a new project.`
- **Key CLI Options:**
  - `--name <name>`: `Set the name for your project in Taskmaster's configuration.`
  - `--description <text>`: `Provide a brief description for your project.`
  - `--version <version>`: `Set the initial version for your project, e.g., '0.1.0'.`
  - `-y, --yes`: `Initialize Taskmaster quickly using default settings without interactive prompts.`
- **Usage:** Run this once at the beginning of a new project.
- **MCP Variant Description:** `Set up the basic Taskmaster file structure and configuration in the current directory for a new project by running the 'task-master init' command.`
- **Key MCP Parameters/Options:**
  - `projectName`: `Set the name for your project.` (CLI: `--name <name>`)
  - `projectDescription`: `Provide a brief description for your project.` (CLI: `--description <text>`)
  - `projectVersion`: `Set the initial version for your project, e.g., '0.1.0'.` (CLI: `--version <version>`)
  - `authorName`: `Author name.` (CLI: `--author <author>`)
  - `skipInstall`: `Skip installing dependencies. Default is false.` (CLI: `--skip-install`)
  - `addAliases`: `Add shell aliases tm and taskmaster. Default is false.` (CLI: `--aliases`)
  - `yes`: `Skip prompts and use defaults/provided arguments. Default is false.` (CLI: `-y, --yes`)
- **Usage:** Run this once at the beginning of a new project, typically via an integrated tool like VS Code. Operates on the current working directory of the MCP server.
- **Important:** Once complete, you _MUST_ parse a prd in order to generate tasks. There will be no tasks files until then. The next step after initializing should be to create a PRD using the example PRD in .taskmaster/templates/example_prd.txt.
- **Tagging:** Use the `--tag` option to parse the PRD into a specific, non-default tag context. If the tag doesn't exist, it will be created automatically. Example: `task-master parse-prd spec.txt --tag=new-feature`.

### 2. Parse PRD (`parse_prd`)

- **MCP Tool:** `parse_prd`
- **CLI Command:** `task-master parse-prd [file] [options]`
- **Description:** `Parse a Product Requirements Document, PRD, or text file with Taskmaster to automatically generate an initial set of tasks in tasks.json.`
- **Key Parameters/Options:**
  - `input`: `Path to your PRD or requirements text file that Taskmaster should parse for tasks.` (CLI: `[file]` positional or `-i, --input <file>`)
  - `output`: `Specify where Taskmaster should save the generated 'tasks.json' file. Defaults to '.taskmaster/tasks/tasks.json'.` (CLI: `-o, --output <file>`)
  - `numTasks`: `Approximate number of top-level tasks Taskmaster should aim to generate from the document.` (CLI: `-n, --num-tasks <number>`)
  - `force`: `Use this to allow Taskmaster to overwrite an existing 'tasks.json' without asking for confirmation.` (CLI: `-f, --force`)
- **Usage:** Useful for bootstrapping a project from an existing requirements document.
- **Notes:** Task Master will strictly adhere to any specific requirements mentioned in the PRD, such as libraries, database schemas, frameworks, tech stacks, etc., while filling in any gaps where the PRD isn't fully specified. Tasks are designed to provide the most direct implementation path while avoiding over-engineering.
- **Important:** This MCP tool makes AI calls and can take up to a minute to complete. Please inform users to hang tight while the operation is in progress. If the user does not have a PRD, suggest discussing their idea and then use the example PRD in `.taskmaster/templates/example_prd.txt` as a template for creating the PRD based on their idea, for use with `parse-prd`.

---

## AI Model Configuration

### 2. Manage Models (`models`)

- **MCP Tool:** `models`
- **CLI Command:** `task-master models [options]`
- **Description:** `View the current AI model configuration or set specific models for different roles (main, research, fallback). Allows setting custom model IDs for Ollama and OpenRouter.`
- **Key MCP Parameters/Options:**
  - `setMain <model_id>`: `Set the primary model ID for task generation/updates.` (CLI: `--set-main <model_id>`)
  - `setResearch <model_id>`: `Set the model ID for research-backed operations.` (CLI: `--set-research <model_id>`)
  - `setFallback <model_id>`: `Set the model ID to use if the primary fails.` (CLI: `--set-fallback <model_id>`)
  - `ollama <boolean>`: `Indicates the set model ID is a custom Ollama model.` (CLI: `--ollama`)
  - `openrouter <boolean>`: `Indicates the set model ID is a custom OpenRouter model.` (CLI: `--openrouter`)
  - `listAvailableModels <boolean>`: `If true, lists available models not currently assigned to a role.` (CLI: No direct equivalent; CLI lists available automatically)
  - `projectRoot <string>`: `Optional. Absolute path to the project root directory.` (CLI: Determined automatically)
- **Key CLI Options:**
  - `--set-main <model_id>`: `Set the primary model.`
  - `--set-research <model_id>`: `Set the research model.`
  - `--set-fallback <model_id>`: `Set the fallback model.`
  - `--ollama`: `Specify that the provided model ID is for Ollama (use with --set-*).`
  - `--openrouter`: `Specify that the provided model ID is for OpenRouter (use with --set-*). Validates against OpenRouter API.`
  - `--bedrock`: `Specify that the provided model ID is for AWS Bedrock (use with --set-*).`
  - `--setup`: `Run interactive setup to configure models, including custom Ollama/OpenRouter IDs.`
- **Usage (MCP):** Call without set flags to get current config. Use `setMain`, `setResearch`, or `setFallback` with a valid model ID to update the configuration. Use `listAvailableModels: true` to get a list of unassigned models. To set a custom model, provide the model ID and set `ollama: true` or `openrouter: true`.
- **Usage (CLI):** Run without flags to view current configuration and available models. Use set flags to update specific roles. Use `--setup` for guided configuration, including custom models. To set a custom model via flags, use `--set-<role>=<model_id>` along with either `--ollama` or `--openrouter`.
- **Notes:** Configuration is stored in `.taskmaster/config.json` in the project root. This command/tool modifies that file. Use `listAvailableModels` or `task-master models` to see internally supported models. OpenRouter custom models are validated against their live API. Ollama custom models are not validated live.
- **API note:** API keys for selected AI providers (based on their model) need to exist in the mcp.json file to be accessible in MCP context. The API keys must be present in the local .env file for the CLI to be able to read them.
- **Model costs:** The costs in supported models are expressed in dollars. An input/output value of 3 is $3.00. A value of 0.8 is $0.80.
- **Warning:** DO NOT MANUALLY EDIT THE .taskmaster/config.json FILE. Use the included commands either in the MCP or CLI format as needed. Always prioritize MCP tools when available and use the CLI as a fallback.

---

## Task Listing & Viewing

### 3. Get Tasks (`get_tasks`)

- **MCP Tool:** `get_tasks`
- **CLI Command:** `task-master list [options]`
- **Description:** `List your Taskmaster tasks, optionally filtering by status and showing subtasks.`
- **Key Parameters/Options:**
  - `status`: `Show only Taskmaster tasks matching this status (or multiple statuses, comma-separated), e.g., 'pending' or 'done,in-progress'.` (CLI: `-s, --status <status>`)
  - `withSubtasks`: `Include subtasks indented under their parent tasks in the list.` (CLI: `--with-subtasks`)
  - `tag`: `Specify which tag context to list tasks from. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Get an overview of the project status, often used at the start of a work session.

### 4. Get Next Task (`next_task`)

- **MCP Tool:** `next_task`
- **CLI Command:** `task-master next [options]`
- **Description:** `Ask Taskmaster to show the next available task you can work on, based on status and completed dependencies.`
- **Key Parameters/Options:**
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
  - `tag`: `Specify which tag context to use. Defaults to the current active tag.` (CLI: `--tag <name>`)
- **Usage:** Identify what to work on next according to the plan.

### 5. Get Task Details (`get_task`)

- **MCP Tool:** `get_task`
- **CLI Command:** `task-master show [id] [options]`
- **Description:** `Display detailed information for one or more specific Taskmaster tasks or subtasks by ID.`
- **Key Parameters/Options:**
  - `id`: `Required. The ID of the Taskmaster task (e.g., '15'), subtask (e.g., '15.2'), or a comma-separated list of IDs ('1,5,10.2') you want to view.` (CLI: `[id]` positional or `-i, --id <id>`)
  - `tag`: `Specify which tag context to get the task(s) from. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Understand the full details for a specific task. When multiple IDs are provided, a summary table is shown.
- **CRITICAL INFORMATION** If you need to collect information from multiple tasks, use comma-separated IDs (i.e. 1,2,3) to receive an array of tasks. Do not needlessly get tasks one at a time if you need to get many as that is wasteful.

---

## Task Creation & Modification

### 6. Add Task (`add_task`)

- **MCP Tool:** `add_task`
- **CLI Command:** `task-master add-task [options]`
- **Description:** `Add a new task to Taskmaster by describing it; AI will structure it.`
- **Key Parameters/Options:**
  - `prompt`: `Required. Describe the new task you want Taskmaster to create, e.g., "Implement user authentication using JWT".` (CLI: `-p, --prompt <text>`)
  - `dependencies`: `Specify the IDs of any Taskmaster tasks that must be completed before this new one can start, e.g., '12,14'.` (CLI: `-d, --dependencies <ids>`)
  - `priority`: `Set the priority for the new task: 'high', 'medium', or 'low'. Default is 'medium'.` (CLI: `--priority <priority>`)
  - `research`: `Enable Taskmaster to use the research role for potentially more informed task creation.` (CLI: `-r, --research`)
  - `tag`: `Specify which tag context to add the task to. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Quickly add newly identified tasks during development.
- **Important:** This MCP tool makes AI calls and can take up to a minute to complete. Please inform users to hang tight while the operation is in progress.

### 7. Add Subtask (`add_subtask`)

- **MCP Tool:** `add_subtask`
- **CLI Command:** `task-master add-subtask [options]`
- **Description:** `Add a new subtask to a Taskmaster parent task, or convert an existing task into a subtask.`
- **Key Parameters/Options:**
  - `id` / `parent`: `Required. The ID of the Taskmaster task that will be the parent.` (MCP: `id`, CLI: `-p, --parent <id>`)
  - `taskId`: `Use this if you want to convert an existing top-level Taskmaster task into a subtask of the specified parent.` (CLI: `-i, --task-id <id>`)
  - `title`: `Required if not using taskId. The title for the new subtask Taskmaster should create.` (CLI: `-t, --title <title>`)
  - `description`: `A brief description for the new subtask.` (CLI: `-d, --description <text>`)
  - `details`: `Provide implementation notes or details for the new subtask.` (CLI: `--details <text>`)
  - `dependencies`: `Specify IDs of other tasks or subtasks, e.g., '15' or '16.1', that must be done before this new subtask.` (CLI: `--dependencies <ids>`)
  - `status`: `Set the initial status for the new subtask. Default is 'pending'.` (CLI: `-s, --status <status>`)
  - `generate`: `Enable Taskmaster to regenerate markdown task files after adding the subtask.` (CLI: `--generate`)
  - `tag`: `Specify which tag context to operate on. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Break down tasks manually or reorganize existing tasks.

### 8. Update Tasks (`update`)

- **MCP Tool:** `update`
- **CLI Command:** `task-master update [options]`
- **Description:** `Update multiple upcoming tasks in Taskmaster based on new context or changes, starting from a specific task ID.`
- **Key Parameters/Options:**
  - `from`: `Required. The ID of the first task Taskmaster should update. All tasks with this ID or higher that are not 'done' will be considered.` (CLI: `--from <id>`)
  - `prompt`: `Required. Explain the change or new context for Taskmaster to apply to the tasks, e.g., "We are now using React Query instead of Redux Toolkit for data fetching".` (CLI: `-p, --prompt <text>`)
  - `research`: `Enable Taskmaster to use the research role for more informed updates. Requires appropriate API key.` (CLI: `-r, --research`)
  - `tag`: `Specify which tag context to operate on. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Handle significant implementation changes or pivots that affect multiple future tasks. Example CLI: `task-master update --from='18' --prompt='Switching to React Query.\nNeed to refactor data fetching...'`
- **Important:** This MCP tool makes AI calls and can take up to a minute to complete. Please inform users to hang tight while the operation is in progress.

### 9. Update Task (`update_task`)

- **MCP Tool:** `update_task`
- **CLI Command:** `task-master update-task [options]`
- **Description:** `Modify a specific Taskmaster task by ID, incorporating new information or changes. By default, this replaces the existing task details.`
- **Key Parameters/Options:**
  - `id`: `Required. The specific ID of the Taskmaster task, e.g., '15', you want to update.` (CLI: `-i, --id <id>`)
  - `prompt`: `Required. Explain the specific changes or provide the new information Taskmaster should incorporate into this task.` (CLI: `-p, --prompt <text>`)
  - `append`: `If true, appends the prompt content to the task's details with a timestamp, rather than replacing them. Behaves like update-subtask.` (CLI: `--append`)
  - `research`: `Enable Taskmaster to use the research role for more informed updates. Requires appropriate API key.` (CLI: `-r, --research`)
  - `tag`: `Specify which tag context the task belongs to. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Refine a specific task based on new understanding. Use `--append` to log progress without creating subtasks.
- **Important:** This MCP tool makes AI calls and can take up to a minute to complete. Please inform users to hang tight while the operation is in progress.

### 10. Update Subtask (`update_subtask`)

- **MCP Tool:** `update_subtask`
- **CLI Command:** `task-master update-subtask [options]`
- **Description:** `Append timestamped notes or details to a specific Taskmaster subtask without overwriting existing content. Intended for iterative implementation logging.`
- **Key Parameters/Options:**
  - `id`: `Required. The ID of the Taskmaster subtask, e.g., '5.2', to update with new information.` (CLI: `-i, --id <id>`)
  - `prompt`: `Required. The information, findings, or progress notes to append to the subtask's details with a timestamp.` (CLI: `-p, --prompt <text>`)
  - `research`: `Enable Taskmaster to use the research role for more informed updates. Requires appropriate API key.` (CLI: `-r, --research`)
  - `tag`: `Specify which tag context the subtask belongs to. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Log implementation progress, findings, and discoveries during subtask development. Each update is timestamped and appended to preserve the implementation journey.
- **Important:** This MCP tool makes AI calls and can take up to a minute to complete. Please inform users to hang tight while the operation is in progress.

### 11. Set Task Status (`set_task_status`)

- **MCP Tool:** `set_task_status`
- **CLI Command:** `task-master set-status [options]`
- **Description:** `Update the status of one or more Taskmaster tasks or subtasks, e.g., 'pending', 'in-progress', 'done'.`
- **Key Parameters/Options:**
  - `id`: `Required. The ID(s) of the Taskmaster task(s) or subtask(s), e.g., '15', '15.2', or '16,17.1', to update.` (CLI: `-i, --id <id>`)
  - `status`: `Required. The new status to set, e.g., 'done', 'pending', 'in-progress', 'review', 'cancelled'.` (CLI: `-s, --status <status>`)
  - `tag`: `Specify which tag context to operate on. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Mark progress as tasks move through the development cycle.

### 12. Remove Task (`remove_task`)

- **MCP Tool:** `remove_task`
- **CLI Command:** `task-master remove-task [options]`
- **Description:** `Permanently remove a task or subtask from the Taskmaster tasks list.`
- **Key Parameters/Options:**
  - `id`: `Required. The ID of the Taskmaster task, e.g., '5', or subtask, e.g., '5.2', to permanently remove.` (CLI: `-i, --id <id>`)
  - `yes`: `Skip the confirmation prompt and immediately delete the task.` (CLI: `-y, --yes`)
  - `tag`: `Specify which tag context to operate on. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Permanently delete tasks or subtasks that are no longer needed in the project.
- **Notes:** Use with caution as this operation cannot be undone. Consider using 'blocked', 'cancelled', or 'deferred' status instead if you just want to exclude a task from active planning but keep it for reference. The command automatically cleans up dependency references in other tasks.

---

## Task Structure & Breakdown

### 13. Expand Task (`expand_task`)

- **MCP Tool:** `expand_task`
- **CLI Command:** `task-master expand [options]`
- **Description:** `Use Taskmaster's AI to break down a complex task into smaller, manageable subtasks. Appends subtasks by default.`
- **Key Parameters/Options:**
  - `id`: `The ID of the specific Taskmaster task you want to break down into subtasks.` (CLI: `-i, --id <id>`)
  - `num`: `Optional: Suggests how many subtasks Taskmaster should aim to create. Uses complexity analysis/defaults otherwise.` (CLI: `-n, --num <number>`)
  - `research`: `Enable Taskmaster to use the research role for more informed subtask generation. Requires appropriate API key.` (CLI: `-r, --research`)
  - `prompt`: `Optional: Provide extra context or specific instructions to Taskmaster for generating the subtasks.` (CLI: `-p, --prompt <text>`)
  - `force`: `Optional: If true, clear existing subtasks before generating new ones. Default is false (append).` (CLI: `--force`)
  - `tag`: `Specify which tag context the task belongs to. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Generate a detailed implementation plan for a complex task before starting coding. Automatically uses complexity report recommendations if available and `num` is not specified.
- **Important:** This MCP tool makes AI calls and can take up to a minute to complete. Please inform users to hang tight while the operation is in progress.

### 14. Expand All Tasks (`expand_all`)

- **MCP Tool:** `expand_all`
- **CLI Command:** `task-master expand --all [options]` (Note: CLI uses the `expand` command with the `--all` flag)
- **Description:** `Tell Taskmaster to automatically expand all eligible pending/in-progress tasks based on complexity analysis or defaults. Appends subtasks by default.`
- **Key Parameters/Options:**
  - `num`: `Optional: Suggests how many subtasks Taskmaster should aim to create per task.` (CLI: `-n, --num <number>`)
  - `research`: `Enable research role for more informed subtask generation. Requires appropriate API key.` (CLI: `-r, --research`)
  - `prompt`: `Optional: Provide extra context for Taskmaster to apply generally during expansion.` (CLI: `-p, --prompt <text>`)
  - `force`: `Optional: If true, clear existing subtasks before generating new ones for each eligible task. Default is false (append).` (CLI: `--force`)
  - `tag`: `Specify which tag context to expand. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Useful after initial task generation or complexity analysis to break down multiple tasks at once.
- **Important:** This MCP tool makes AI calls and can take up to a minute to complete. Please inform users to hang tight while the operation is in progress.

### 15. Clear Subtasks (`clear_subtasks`)

- **MCP Tool:** `clear_subtasks`
- **CLI Command:** `task-master clear-subtasks [options]`
- **Description:** `Remove all subtasks from one or more specified Taskmaster parent tasks.`
- **Key Parameters/Options:**
  - `id`: `The ID(s) of the Taskmaster parent task(s) whose subtasks you want to remove, e.g., '15' or '16,18'. Required unless using 'all'.` (CLI: `-i, --id <ids>`)
  - `all`: `Tell Taskmaster to remove subtasks from all parent tasks.` (CLI: `--all`)
  - `tag`: `Specify which tag context to operate on. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Used before regenerating subtasks with `expand_task` if the previous breakdown needs replacement.

### 16. Remove Subtask (`remove_subtask`)

- **MCP Tool:** `remove_subtask`
- **CLI Command:** `task-master remove-subtask [options]`
- **Description:** `Remove a subtask from its Taskmaster parent, optionally converting it into a standalone task.`
- **Key Parameters/Options:**
  - `id`: `Required. The ID(s) of the Taskmaster subtask(s) to remove, e.g., '15.2' or '16.1,16.3'.` (CLI: `-i, --id <id>`)
  - `convert`: `If used, Taskmaster will turn the subtask into a regular top-level task instead of deleting it.` (CLI: `-c, --convert`)
  - `generate`: `Enable Taskmaster to regenerate markdown task files after removing the subtask.` (CLI: `--generate`)
  - `tag`: `Specify which tag context to operate on. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Delete unnecessary subtasks or promote a subtask to a top-level task.

### 17. Move Task (`move_task`)

- **MCP Tool:** `move_task`
- **CLI Command:** `task-master move [options]`
- **Description:** `Move a task or subtask to a new position within the task hierarchy.`
- **Key Parameters/Options:**
  - `from`: `Required. ID of the task/subtask to move (e.g., "5" or "5.2"). Can be comma-separated for multiple tasks.` (CLI: `--from <id>`)
  - `to`: `Required. ID of the destination (e.g., "7" or "7.3"). Must match the number of source IDs if comma-separated.` (CLI: `--to <id>`)
  - `tag`: `Specify which tag context to operate on. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Reorganize tasks by moving them within the hierarchy. Supports various scenarios like:
  - Moving a task to become a subtask
  - Moving a subtask to become a standalone task
  - Moving a subtask to a different parent
  - Reordering subtasks within the same parent
  - Moving a task to a new, non-existent ID (automatically creates placeholders)
  - Moving multiple tasks at once with comma-separated IDs
- **Validation Features:**
  - Allows moving tasks to non-existent destination IDs (creates placeholder tasks)
  - Prevents moving to existing task IDs that already have content (to avoid overwriting)
  - Validates that source tasks exist before attempting to move them
  - Maintains proper parent-child relationships
- **Example CLI:** `task-master move --from=5.2 --to=7.3` to move subtask 5.2 to become subtask 7.3.
- **Example Multi-Move:** `task-master move --from=10,11,12 --to=16,17,18` to move multiple tasks to new positions.
- **Common Use:** Resolving merge conflicts in tasks.json when multiple team members create tasks on different branches.

---

## Dependency Management

### 18. Add Dependency (`add_dependency`)

- **MCP Tool:** `add_dependency`
- **CLI Command:** `task-master add-dependency [options]`
- **Description:** `Define a dependency in Taskmaster, making one task a prerequisite for another.`
- **Key Parameters/Options:**
  - `id`: `Required. The ID of the Taskmaster task that will depend on another.` (CLI: `-i, --id <id>`)
  - `dependsOn`: `Required. The ID of the Taskmaster task that must be completed first, the prerequisite.` (CLI: `-d, --depends-on <id>`)
  - `tag`: `Specify which tag context to operate on. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <path>`)
- **Usage:** Establish the correct order of execution between tasks.

### 19. Remove Dependency (`remove_dependency`)

- **MCP Tool:** `remove_dependency`
- **CLI Command:** `task-master remove-dependency [options]`
- **Description:** `Remove a dependency relationship between two Taskmaster tasks.`
- **Key Parameters/Options:**
  - `id`: `Required. The ID of the Taskmaster task you want to remove a prerequisite from.` (CLI: `-i, --id <id>`)
  - `dependsOn`: `Required. The ID of the Taskmaster task that should no longer be a prerequisite.` (CLI: `-d, --depends-on <id>`)
  - `tag`: `Specify which tag context to operate on. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Update task relationships when the order of execution changes.

### 20. Validate Dependencies (`validate_dependencies`)

- **MCP Tool:** `validate_dependencies`
- **CLI Command:** `task-master validate-dependencies [options]`
- **Description:** `Check your Taskmaster tasks for dependency issues (like circular references or links to non-existent tasks) without making changes.`
- **Key Parameters/Options:**
  - `tag`: `Specify which tag context to validate. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Audit the integrity of your task dependencies.

### 21. Fix Dependencies (`fix_dependencies`)

- **MCP Tool:** `fix_dependencies`
- **CLI Command:** `task-master fix-dependencies [options]`
- **Description:** `Automatically fix dependency issues (like circular references or links to non-existent tasks) in your Taskmaster tasks.`
- **Key Parameters/Options:**
  - `tag`: `Specify which tag context to fix dependencies in. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Clean up dependency errors automatically.

---

## Analysis & Reporting

### 22. Analyze Project Complexity (`analyze_project_complexity`)

- **MCP Tool:** `analyze_project_complexity`
- **CLI Command:** `task-master analyze-complexity [options]`
- **Description:** `Have Taskmaster analyze your tasks to determine their complexity and suggest which ones need to be broken down further.`
- **Key Parameters/Options:**
  - `output`: `Where to save the complexity analysis report. Default is '.taskmaster/reports/task-complexity-report.json' (or '..._tagname.json' if a tag is used).` (CLI: `-o, --output <file>`)
  - `threshold`: `The minimum complexity score (1-10) that should trigger a recommendation to expand a task.` (CLI: `-t, --threshold <number>`)
  - `research`: `Enable research role for more accurate complexity analysis. Requires appropriate API key.` (CLI: `-r, --research`)
  - `tag`: `Specify which tag context to analyze. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Used before breaking down tasks to identify which ones need the most attention.
- **Important:** This MCP tool makes AI calls and can take up to a minute to complete. Please inform users to hang tight while the operation is in progress.

### 23. View Complexity Report (`complexity_report`)

- **MCP Tool:** `complexity_report`
- **CLI Command:** `task-master complexity-report [options]`
- **Description:** `Display the task complexity analysis report in a readable format.`
- **Key Parameters/Options:**
  - `tag`: `Specify which tag context to show the report for. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to the complexity report (default: '.taskmaster/reports/task-complexity-report.json').` (CLI: `-f, --file <file>`)
- **Usage:** Review and understand the complexity analysis results after running analyze-complexity.

---

## File Management

### 24. Generate Task Files (`generate`)

- **MCP Tool:** `generate`
- **CLI Command:** `task-master generate [options]`
- **Description:** `Create or update individual Markdown files for each task based on your tasks.json.`
- **Key Parameters/Options:**
  - `output`: `The directory where Taskmaster should save the task files (default: in a 'tasks' directory).` (CLI: `-o, --output <directory>`)
  - `tag`: `Specify which tag context to generate files for. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
- **Usage:** Run this after making changes to tasks.json to keep individual task files up to date. This command is now manual and no longer runs automatically.

---

## AI-Powered Research

### 25. Research (`research`)

- **MCP Tool:** `research`
- **CLI Command:** `task-master research [options]`
- **Description:** `Perform AI-powered research queries with project context to get fresh, up-to-date information beyond the AI's knowledge cutoff.`
- **Key Parameters/Options:**
  - `query`: `Required. Research query/prompt (e.g., "What are the latest best practices for React Query v5?").` (CLI: `[query]` positional or `-q, --query <text>`)
  - `taskIds`: `Comma-separated list of task/subtask IDs from the current tag context (e.g., "15,16.2,17").` (CLI: `-i, --id <ids>`)
  - `filePaths`: `Comma-separated list of file paths for context (e.g., "src/api.js,docs/readme.md").` (CLI: `-f, --files <paths>`)
  - `customContext`: `Additional custom context text to include in the research.` (CLI: `-c, --context <text>`)
  - `includeProjectTree`: `Include project file tree structure in context (default: false).` (CLI: `--tree`)
  - `detailLevel`: `Detail level for the research response: 'low', 'medium', 'high' (default: medium).` (CLI: `--detail <level>`)
  - `saveTo`: `Task or subtask ID (e.g., "15", "15.2") to automatically save the research conversation to.` (CLI: `--save-to <id>`)
  - `saveFile`: `If true, saves the research conversation to a markdown file in '.taskmaster/docs/research/'.` (CLI: `--save-file`)
  - `noFollowup`: `Disables the interactive follow-up question menu in the CLI.` (CLI: `--no-followup`)
  - `tag`: `Specify which tag context to use for task-based context gathering. Defaults to the current active tag.` (CLI: `--tag <name>`)
  - `projectRoot`: `The directory of the project. Must be an absolute path.` (CLI: Determined automatically)
- **Usage:** **This is a POWERFUL tool that agents should use FREQUENTLY** to:
  - Get fresh information beyond knowledge cutoff dates
  - Research latest best practices, library updates, security patches
  - Find implementation examples for specific technologies
  - Validate approaches against current industry standards
  - Get contextual advice based on project files and tasks
- **When to Consider Using Research:**
  - **Before implementing any task** - Research current best practices
  - **When encountering new technologies** - Get up-to-date implementation guidance (libraries, apis, etc)
  - **For security-related tasks** - Find latest security recommendations
  - **When updating dependencies** - Research breaking changes and migration guides
  - **For performance optimization** - Get current performance best practices
  - **When debugging complex issues** - Research known solutions and workarounds
- **Research + Action Pattern:**
  - Use `research` to gather fresh information
  - Use `update_subtask` to commit findings with timestamps
  - Use `update_task` to incorporate research into task details
  - Use `add_task` with research flag for informed task creation
- **Important:** This MCP tool makes AI calls and can take up to a minute to complete. The research provides FRESH data beyond the AI's training cutoff, making it invaluable for current best practices and recent developments.

---

## Tag Management

This new suite of commands allows you to manage different task contexts (tags).

### 26. List Tags (`tags`)

- **MCP Tool:** `list_tags`
- **CLI Command:** `task-master tags [options]`
- **Description:** `List all available tags with task counts, completion status, and other metadata.`
- **Key Parameters/Options:**
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)
  - `--show-metadata`: `Include detailed metadata in the output (e.g., creation date, description).` (CLI: `--show-metadata`)

### 27. Add Tag (`add_tag`)

- **MCP Tool:** `add_tag`
- **CLI Command:** `task-master add-tag <tagName> [options]`
- **Description:** `Create a new, empty tag context, or copy tasks from another tag.`
- **Key Parameters/Options:**
  - `tagName`: `Name of the new tag to create (alphanumeric, hyphens, underscores).` (CLI: `<tagName>` positional)
  - `--from-branch`: `Creates a tag with a name derived from the current git branch, ignoring the <tagName> argument.` (CLI: `--from-branch`)
  - `--copy-from-current`: `Copy tasks from the currently active tag to the new tag.` (CLI: `--copy-from-current`)
  - `--copy-from <tag>`: `Copy tasks from a specific source tag to the new tag.` (CLI: `--copy-from <tag>`)
  - `--description <text>`: `Provide an optional description for the new tag.` (CLI: `-d, --description <text>`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)

### 28. Delete Tag (`delete_tag`)

- **MCP Tool:** `delete_tag`
- **CLI Command:** `task-master delete-tag <tagName> [options]`
- **Description:** `Permanently delete a tag and all of its associated tasks.`
- **Key Parameters/Options:**
  - `tagName`: `Name of the tag to delete.` (CLI: `<tagName>` positional)
  - `--yes`: `Skip the confirmation prompt.` (CLI: `-y, --yes`)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)

### 29. Use Tag (`use_tag`)

- **MCP Tool:** `use_tag`
- **CLI Command:** `task-master use-tag <tagName>`
- **Description:** `Switch your active task context to a different tag.`
- **Key Parameters/Options:**
  - `tagName`: `Name of the tag to switch to.` (CLI: `<tagName>` positional)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)

### 30. Rename Tag (`rename_tag`)

- **MCP Tool:** `rename_tag`
- **CLI Command:** `task-master rename-tag <oldName> <newName>`
- **Description:** `Rename an existing tag.`
- **Key Parameters/Options:**
  - `oldName`: `The current name of the tag.` (CLI: `<oldName>` positional)
  - `newName`: `The new name for the tag.` (CLI: `<newName>` positional)
  - `file`: `Path to your Taskmaster 'tasks.json' file. Default relies on auto-detection.` (CLI: `-f, --file <file>`)

### 31. Copy Tag (`copy_tag`)

- **MCP Tool:** `copy_tag`
- **CLI Command:** `task-master copy-tag <sourceName> <targetName> [options]`
- **Description:** `Copy an entire tag context, including all its tasks and metadata, to a new tag.`
- **Key Parameters/Options:**
  - `sourceName`: `Name of the tag to copy from.` (CLI: `<sourceName>` positional)
  - `targetName`: `Name of the new tag to create.` (CLI: `<targetName>` positional)
  - `--description <text>`: `Optional description for the new tag.` (CLI: `-d, --description <text>`)

---

## Miscellaneous

### 32. Sync Readme (`sync-readme`) -- experimental

- **MCP Tool:** N/A
- **CLI Command:** `task-master sync-readme [options]`
- **Description:** `Exports your task list to your project's README.md file, useful for showcasing progress.`
- **Key Parameters/Options:**
  - `status`: `Filter tasks by status (e.g., 'pending', 'done').` (CLI: `-s, --status <status>`)
  - `withSubtasks`: `Include subtasks in the export.` (CLI: `--with-subtasks`)
  - `tag`: `Specify which tag context to export from. Defaults to the current active tag.` (CLI: `--tag <name>`)

---

## Environment Variables Configuration (Updated)

Taskmaster primarily uses the **`.taskmaster/config.json`** file (in project root) for configuration (models, parameters, logging level, etc.), managed via `task-master models --setup`.

Environment variables are used **only** for sensitive API keys related to AI providers and specific overrides like the Ollama base URL:

- **API Keys (Required for corresponding provider):**
  - `ANTHROPIC_API_KEY`
  - `PERPLEXITY_API_KEY`
  - `OPENAI_API_KEY`
  - `GOOGLE_API_KEY`
  - `MISTRAL_API_KEY`
  - `AZURE_OPENAI_API_KEY` (Requires `AZURE_OPENAI_ENDPOINT` too)
  - `OPENROUTER_API_KEY`
  - `XAI_API_KEY`
  - `OLLAMA_API_KEY` (Requires `OLLAMA_BASE_URL` too)
- **Endpoints (Optional/Provider Specific inside .taskmaster/config.json):**
  - `AZURE_OPENAI_ENDPOINT`
  - `OLLAMA_BASE_URL` (Default: `http://localhost:11434/api`)

**Set API keys** in your **`.env`** file in the project root (for CLI use) or within the `env` section of your **`.vscode/mcp.json`** file (for MCP/VS Code integration). All other settings (model choice, max tokens, temperature, log level, custom endpoints) are managed in `.taskmaster/config.json` via `task-master models` command or `models` MCP tool.

---

For details on how these commands fit into the development process, see the [dev_workflow.instructions.md](.github/instructions/dev_workflow.instructions.md).

================================================
FILE: .github/instructions/vscode_rules.instructions.md
================================================

---

description: Guidelines for creating and maintaining VS Code rules to ensure consistency and effectiveness.
applyTo: ".github/instructions/\*.instructions.md"

---

- **Required Rule Structure:**

  ```markdown
  ---
  description: Clear, one-line description of what the rule enforces
  globs: path/to/files/*.ext, other/path/**/*
  alwaysApply: boolean
  ---

  - **Main Points in Bold**
    - Sub-points with details
    - Examples and explanations
  ```

- **File References:**

  - Use `[filename](mdc:path/to/file)` ([filename](mdc:filename)) to reference files
  - Example: [prisma.instructions.md](.github/instructions/prisma.instructions.md) for rule references
  - Example: [schema.prisma](mdc:prisma/schema.prisma) for code references

- **Code Examples:**

  - Use language-specific code blocks

  ```typescript
  // ✅ DO: Show good examples
  const goodExample = true;

  // ❌ DON'T: Show anti-patterns
  const badExample = false;
  ```

- **Rule Content Guidelines:**

  - Start with high-level overview
  - Include specific, actionable requirements
  - Show examples of correct implementation
  - Reference existing code when possible
  - Keep rules DRY by referencing other rules

- **Rule Maintenance:**

  - Update rules when new patterns emerge
  - Add examples from actual codebase
  - Remove outdated patterns
  - Cross-reference related rules

- **Best Practices:**
  - Use bullet points for clarity
  - Keep descriptions concise
  - Include both DO and DON'T examples
  - Reference actual code over theoretical examples
  - Use consistent formatting across rules

================================================
FILE: .taskmaster/CLAUDE.md
================================================

# Task Master AI - Agent Integration Guide

## Essential Commands

### Core Workflow Commands

```bash
# Project Setup
task-master init                                    # Initialize Task Master in current project
task-master parse-prd .taskmaster/docs/prd.txt      # Generate tasks from PRD document
task-master models --setup                        # Configure AI models interactively

# Daily Development Workflow
task-master list                                   # Show all tasks with status
task-master next                                   # Get next available task to work on
task-master show <id>                             # View detailed task information (e.g., task-master show 1.2)
task-master set-status --id=<id> --status=done    # Mark task complete

# Task Management
task-master add-task --prompt="description" --research        # Add new task with AI assistance
task-master expand --id=<id> --research --force              # Break task into subtasks
task-master update-task --id=<id> --prompt="changes"         # Update specific task
task-master update --from=<id> --prompt="changes"            # Update multiple tasks from ID onwards
task-master update-subtask --id=<id> --prompt="notes"        # Add implementation notes to subtask

# Analysis & Planning
task-master analyze-complexity --research          # Analyze task complexity
task-master complexity-report                      # View complexity analysis
task-master expand --all --research               # Expand all eligible tasks

# Dependencies & Organization
task-master add-dependency --id=<id> --depends-on=<id>       # Add task dependency
task-master move --from=<id> --to=<id>                       # Reorganize task hierarchy
task-master validate-dependencies                            # Check for dependency issues
task-master generate                                         # Update task markdown files (usually auto-called)
```

## Key Files & Project Structure

### Core Files

- `.taskmaster/tasks/tasks.json` - Main task data file (auto-managed)
- `.taskmaster/config.json` - AI model configuration (use `task-master models` to modify)
- `.taskmaster/docs/prd.txt` - Product Requirements Document for parsing
- `.taskmaster/tasks/*.txt` - Individual task files (auto-generated from tasks.json)
- `.env` - API keys for CLI usage

### Claude Code Integration Files

- `CLAUDE.md` - Auto-loaded context for Claude Code (this file)
- `.claude/settings.json` - Claude Code tool allowlist and preferences
- `.claude/commands/` - Custom slash commands for repeated workflows
- `.mcp.json` - MCP server configuration (project-specific)

### Directory Structure

```
project/
├── .taskmaster/
│   ├── tasks/              # Task files directory
│   │   ├── tasks.json      # Main task database
│   │   ├── task-1.md      # Individual task files
│   │   └── task-2.md
│   ├── docs/              # Documentation directory
│   │   ├── prd.txt        # Product requirements
│   ├── reports/           # Analysis reports directory
│   │   └── task-complexity-report.json
│   ├── templates/         # Template files
│   │   └── example_prd.txt  # Example PRD template
│   └── config.json        # AI models & settings
├── .claude/
│   ├── settings.json      # Claude Code configuration
│   └── commands/         # Custom slash commands
├── .env                  # API keys
├── .mcp.json            # MCP configuration
└── CLAUDE.md            # This file - auto-loaded by Claude Code
```

## MCP Integration

Task Master provides an MCP server that Claude Code can connect to. Configure in `.mcp.json`:

```json
{
  "mcpServers": {
    "task-master-ai": {
      "command": "npx",
      "args": ["-y", "--package=task-master-ai", "task-master-ai"],
      "env": {
        "ANTHROPIC_API_KEY": "your_key_here",
        "PERPLEXITY_API_KEY": "your_key_here",
        "OPENAI_API_KEY": "OPENAI_API_KEY_HERE",
        "GOOGLE_API_KEY": "GOOGLE_API_KEY_HERE",
        "XAI_API_KEY": "XAI_API_KEY_HERE",
        "OPENROUTER_API_KEY": "OPENROUTER_API_KEY_HERE",
        "MISTRAL_API_KEY": "MISTRAL_API_KEY_HERE",
        "AZURE_OPENAI_API_KEY": "AZURE_OPENAI_API_KEY_HERE",
        "OLLAMA_API_KEY": "OLLAMA_API_KEY_HERE"
      }
    }
  }
}
```

### Essential MCP Tools

```javascript
help; // = shows available taskmaster commands
// Project setup
initialize_project; // = task-master init
parse_prd; // = task-master parse-prd

// Daily workflow
get_tasks; // = task-master list
next_task; // = task-master next
get_task; // = task-master show <id>
set_task_status; // = task-master set-status

// Task management
add_task; // = task-master add-task
expand_task; // = task-master expand
update_task; // = task-master update-task
update_subtask; // = task-master update-subtask
update; // = task-master update

// Analysis
analyze_project_complexity; // = task-master analyze-complexity
complexity_report; // = task-master complexity-report
```

## Claude Code Workflow Integration

### Standard Development Workflow

#### 1. Project Initialization

```bash
# Initialize Task Master
task-master init

# Create or obtain PRD, then parse it
task-master parse-prd .taskmaster/docs/prd.txt

# Analyze complexity and expand tasks
task-master analyze-complexity --research
task-master expand --all --research
```

If tasks already exist, another PRD can be parsed (with new information only!) using parse-prd with --append flag. This will add the generated tasks to the existing list of tasks..

#### 2. Daily Development Loop

```bash
# Start each session
task-master next                           # Find next available task
task-master show <id>                     # Review task details

# During implementation, check in code context into the tasks and subtasks
task-master update-subtask --id=<id> --prompt="implementation notes..."

# Complete tasks
task-master set-status --id=<id> --status=done
```

#### 3. Multi-Claude Workflows

For complex projects, use multiple Claude Code sessions:

```bash
# Terminal 1: Main implementation
cd project && claude

# Terminal 2: Testing and validation
cd project-test-worktree && claude

# Terminal 3: Documentation updates
cd project-docs-worktree && claude
```

### Custom Slash Commands

Create `.claude/commands/taskmaster-next.md`:

```markdown
Find the next available Task Master task and show its details.

Steps:

1. Run `task-master next` to get the next task
2. If a task is available, run `task-master show <id>` for full details
3. Provide a summary of what needs to be implemented
4. Suggest the first implementation step
```

Create `.claude/commands/taskmaster-complete.md`:

```markdown
Complete a Task Master task: $ARGUMENTS

Steps:

1. Review the current task with `task-master show $ARGUMENTS`
2. Verify all implementation is complete
3. Run any tests related to this task
4. Mark as complete: `task-master set-status --id=$ARGUMENTS --status=done`
5. Show the next available task with `task-master next`
```

## Tool Allowlist Recommendations

Add to `.claude/settings.json`:

```json
{
  "allowedTools": [
    "Edit",
    "Bash(task-master *)",
    "Bash(git commit:*)",
    "Bash(git add:*)",
    "Bash(npm run *)",
    "mcp__task_master_ai__*"
  ]
}
```

## Configuration & Setup

### API Keys Required

At least **one** of these API keys must be configured:

- `ANTHROPIC_API_KEY` (Claude models) - **Recommended**
- `PERPLEXITY_API_KEY` (Research features) - **Highly recommended**
- `OPENAI_API_KEY` (GPT models)
- `GOOGLE_API_KEY` (Gemini models)
- `MISTRAL_API_KEY` (Mistral models)
- `OPENROUTER_API_KEY` (Multiple models)
- `XAI_API_KEY` (Grok models)

An API key is required for any provider used across any of the 3 roles defined in the `models` command.

### Model Configuration

```bash
# Interactive setup (recommended)
task-master models --setup

# Set specific models
task-master models --set-main claude-3-5-sonnet-20241022
task-master models --set-research perplexity-llama-3.1-sonar-large-128k-online
task-master models --set-fallback gpt-4o-mini
```

## Task Structure & IDs

### Task ID Format

- Main tasks: `1`, `2`, `3`, etc.
- Subtasks: `1.1`, `1.2`, `2.1`, etc.
- Sub-subtasks: `1.1.1`, `1.1.2`, etc.

### Task Status Values

- `pending` - Ready to work on
- `in-progress` - Currently being worked on
- `done` - Completed and verified
- `deferred` - Postponed
- `cancelled` - No longer needed
- `blocked` - Waiting on external factors

### Task Fields

```json
{
  "id": "1.2",
  "title": "Implement user authentication",
  "description": "Set up JWT-based auth system",
  "status": "pending",
  "priority": "high",
  "dependencies": ["1.1"],
  "details": "Use bcrypt for hashing, JWT for tokens...",
  "testStrategy": "Unit tests for auth functions, integration tests for login flow",
  "subtasks": []
}
```

## Claude Code Best Practices with Task Master

### Context Management

- Use `/clear` between different tasks to maintain focus
- This CLAUDE.md file is automatically loaded for context
- Use `task-master show <id>` to pull specific task context when needed

### Iterative Implementation

1. `task-master show <subtask-id>` - Understand requirements
2. Explore codebase and plan implementation
3. `task-master update-subtask --id=<id> --prompt="detailed plan"` - Log plan
4. `task-master set-status --id=<id> --status=in-progress` - Start work
5. Implement code following logged plan
6. `task-master update-subtask --id=<id> --prompt="what worked/didn't work"` - Log progress
7. `task-master set-status --id=<id> --status=done` - Complete task

### Complex Workflows with Checklists

For large migrations or multi-step processes:

1. Create a markdown PRD file describing the new changes: `touch task-migration-checklist.md` (prds can be .txt or .md)
2. Use Taskmaster to parse the new prd with `task-master parse-prd --append` (also available in MCP)
3. Use Taskmaster to expand the newly generated tasks into subtasks. Consdier using `analyze-complexity` with the correct --to and --from IDs (the new ids) to identify the ideal subtask amounts for each task. Then expand them.
4. Work through items systematically, checking them off as completed
5. Use `task-master update-subtask` to log progress on each task/subtask and/or updating/researching them before/during implementation if getting stuck

### Git Integration

Task Master works well with `gh` CLI:

```bash
# Create PR for completed task
gh pr create --title "Complete task 1.2: User authentication" --body "Implements JWT auth system as specified in task 1.2"

# Reference task in commits
git commit -m "feat: implement JWT auth (task 1.2)"
```

### Parallel Development with Git Worktrees

```bash
# Create worktrees for parallel task development
git worktree add ../project-auth feature/auth-system
git worktree add ../project-api feature/api-refactor

# Run Claude Code in each worktree
cd ../project-auth && claude    # Terminal 1: Auth work
cd ../project-api && claude     # Terminal 2: API work
```

## Troubleshooting

### AI Commands Failing

```bash
# Check API keys are configured
cat .env                           # For CLI usage

# Verify model configuration
task-master models

# Test with different model
task-master models --set-fallback gpt-4o-mini
```

### MCP Connection Issues

- Check `.mcp.json` configuration
- Verify Node.js installation
- Use `--mcp-debug` flag when starting Claude Code
- Use CLI as fallback if MCP unavailable

### Task File Sync Issues

```bash
# Regenerate task files from tasks.json
task-master generate

# Fix dependency issues
task-master fix-dependencies
```

DO NOT RE-INITIALIZE. That will not do anything beyond re-adding the same Taskmaster core files.

## Important Notes

### AI-Powered Operations

These commands make AI calls and may take up to a minute:

- `parse_prd` / `task-master parse-prd`
- `analyze_project_complexity` / `task-master analyze-complexity`
- `expand_task` / `task-master expand`
- `expand_all` / `task-master expand --all`
- `add_task` / `task-master add-task`
- `update` / `task-master update`
- `update_task` / `task-master update-task`
- `update_subtask` / `task-master update-subtask`

### File Management

- Never manually edit `tasks.json` - use commands instead
- Never manually edit `.taskmaster/config.json` - use `task-master models`
- Task markdown files in `tasks/` are auto-generated
- Run `task-master generate` after manual changes to tasks.json

### Claude Code Session Management

- Use `/clear` frequently to maintain focused context
- Create custom slash commands for repeated Task Master workflows
- Configure tool allowlist to streamline permissions
- Use headless mode for automation: `claude -p "task-master next"`

### Multi-Task Updates

- Use `update --from=<id>` to update multiple future tasks
- Use `update-task --id=<id>` for single task updates
- Use `update-subtask --id=<id>` for implementation logging

### Research Mode

- Add `--research` flag for research-based AI enhancement
- Requires a research model API key like Perplexity (`PERPLEXITY_API_KEY`) in environment
- Provides more informed task creation and updates
- Recommended for complex technical tasks

---

_This guide ensures Claude Code has immediate access to Task Master's essential functionality for agentic development workflows._

================================================
FILE: .taskmaster/config.json
================================================
{
"models": {
"main": {
"provider": "anthropic",
"modelId": "claude-3-7-sonnet-20250219",
"maxTokens": 120000,
"temperature": 0.2
},
"research": {
"provider": "perplexity",
"modelId": "sonar-pro",
"maxTokens": 8700,
"temperature": 0.1
},
"fallback": {
"provider": "anthropic",
"modelId": "claude-3-7-sonnet-20250219",
"maxTokens": 120000,
"temperature": 0.2
}
},
"global": {
"logLevel": "info",
"debug": false,
"defaultSubtasks": 5,
"defaultPriority": "medium",
"projectName": "Taskmaster",
"defaultTag": "master",
"ollamaBaseURL": "http://localhost:11434/api",
"azureOpenaiBaseURL": "https://your-endpoint.openai.azure.com/",
"bedrockBaseURL": "https://bedrock.us-east-1.amazonaws.com",
"responseLanguage": "English"
}
}

================================================
FILE: .taskmaster/state.json
================================================
{
"currentTag": "master",
"lastSwitched": "2025-09-04T09:30:32.933Z",
"branchTagMapping": {},
"migrationNoticeShown": false
}

================================================
FILE: .taskmaster/docs/prd.md
================================================
[Binary file]

================================================
FILE: .taskmaster/docs/prd_be.md
================================================
[Binary file]

================================================
FILE: .taskmaster/templates/example_prd.txt
================================================
<context>

# Overview

[Provide a high-level overview of your product here. Explain what problem it solves, who it's for, and why it's valuable.]

# Core Features

[List and describe the main features of your product. For each feature, include:

- What it does
- Why it's important
- How it works at a high level]

# User Experience

[Describe the user journey and experience. Include:

- User personas
- Key user flows
- UI/UX considerations]
  </context>
  <PRD>

# Technical Architecture

[Outline the technical implementation details:

- System components
- Data models
- APIs and integrations
- Infrastructure requirements]

# Development Roadmap

[Break down the development process into phases:

- MVP requirements
- Future enhancements
- Do not think about timelines whatsoever -- all that matters is scope and detailing exactly what needs to be build in each phase so it can later be cut up into tasks]

# Logical Dependency Chain

[Define the logical order of development:

- Which features need to be built first (foundation)
- Getting as quickly as possible to something usable/visible front end that works
- Properly pacing and scoping each feature so it is atomic but can also be built upon and improved as development approaches]

# Risks and Mitigations

[Identify potential risks and how they'll be addressed:

- Technical challenges
- Figuring out the MVP that we can build upon
- Resource constraints]

# Appendix

[Include any additional information:

- Research findings
- Technical specifications]
  </PRD>
