
# 🏗️ A.R.C.H.I.T.E.C.T.

**Structured Prompt Engineering for Venice-Native AI Agents**

A.R.C.H.I.T.E.C.T. is a modular framework and prompt-building tool designed to help developers, creators, and analysts build reliable, reusable prompts using the Venice API. Built for privacy-first, uncensored AI workflows, it allows you to craft structured prompts that can be tested, refined, and deployed as Venice-native agents.

---

## 🚀 Features

- 9-part A.R.C.H.I.T.E.C.T. framework for consistent prompt generation
- Built-in support for Venice API completions
- Meta-prompting module to evaluate and refine prompts using AI
- Export prompts in Markdown, JSON, or Venice-compatible agent formats
- Prompt Pack system for use-case specific templates (Web3, Audits, Creators)

---

## 🔌 Venice API Integration

This tool uses the following Venice API endpoints:
- `/v1/chat/completions` for inference and prompt generation
- `/v1/models` to list available models (e.g., Dolphin-Mistral)
- Optional meta-prompting loop for self-evaluation and scoring

All completions are processed through the Venice AI stack. No external models or providers are used.

---

## 📦 Prompt Pack Starter Preview

Explore structured prompt examples designed for Venice agents:

- [Web3 Research Agent](./prompt-packs/Web3_Research_Agent.md)
- [Smart Contract Auditor](./prompt-packs/Smart_Contract_Auditor.md)
- [OBS Script Generator](./prompt-packs/OBS_Script_Generator.md)

Each file is formatted for immediate use or adaptation and can be ported into CreatorBid agents or other Venice-native tools.

---

## 🧠 The A.R.C.H.I.T.E.C.T. Framework

| Component | Purpose |
|-----------|---------|
| A – Action | What the AI should do |
| R – Role | The voice or identity of the model |
| C – Context | Background knowledge for the task |
| H – How to Output | Required format (e.g., JSON, list) |
| I – Instructions | Explicit limits, style, banned terms |
| T – Tone | Formality and emotional voice |
| E – Examples | Few-shot completions (optional) |
| C – Constraints | Domain rules (budget, tools, etc.) |
| T – Testing | Use AI to validate or critique the prompt |

---

## 👷 About the Creator

Created by **bonuslocksmith**, a U.S. Army veteran and cybersecurity graduate student with experience in AI red teaming, Web3 systems, and agent development. Built on the belief that anyone can harness powerful AI—privately and on their own terms.

---

## ⚙️ Powered by Venice

[![Powered by Venice](https://venice.ai/static/media/logo-dark.293c09d6812f4174c7bb.png)](https://venice.ai)

This project is built entirely with and for the Venice ecosystem.  
[Learn more about Venice](https://venice.ai) • [Join the Discord](https://discord.gg/venice)

---

## 📄 License

MIT License – Free to fork, use, and adapt for your own Venice-native agents.
