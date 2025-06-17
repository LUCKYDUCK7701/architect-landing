
# 🗂️ Prompt Packs

This directory contains curated prompt examples and agent blueprints written using the **A.R.C.H.I.T.E.C.T.** framework.

Each file is a standalone Markdown prompt you can use, modify, or test directly with the [Prompt Evaluator Agent](../agents/PROMPT_EVALUATOR_AGENT.md).

---

## 🔹 Core Venice-Native Prompts

| File | Description |
|------|-------------|
| `Web3_Research_Agent.md` | Analyze on-chain activity and token legitimacy |
| `Smart_Contract_Auditor.md` | Identify security risks in smart contracts |
| `OBS_Script_Generator.md` | Generate creator-friendly video scripts using AI |

---

## 🧪 Training + Example Prompts

| File | Description |
|------|-------------|
| `example1_getting_started.md` | Intro-level breakdown of the A.R.C.H.I.T.E.C.T. method |
| `example2_marketing_agent.md` | Generates copy for AI-powered smart notepad |
| `example3_code_debugger.md` | Debugs Python code for beginner devs with inline comments |

---

## 📦 How to Use

1. Open any `.md` file in this folder
2. Copy the structured prompt into a Venice-native AI agent or chat tool
3. (Optional) Run through [Prompt Evaluator](../agents/PROMPT_EVALUATOR_AGENT.md) for feedback
4. Modify sections based on use case or audience

---

All prompts follow the same architecture:
**Action, Role, Context, How-to Output, Instructions, Tone, Examples, Constraints, Testing**

For best results, load them into a Venice agent or a chat interface with access to `/v1/chat/completions`.

