# AGENTS.md

## Project identity

This project is a browser-based political simulation game called GOVERN.

The current baseline may be a single `index.html` file. You have full permission to evolve the project structure if that improves the game, the codebase, testing, stability, UI, AI systems, or future development.

GOVERN should become a serious, replayable, single-player US presidential governing simulator. The player governs week by week through policies, economy, public approval, approval blocs, cabinet, Congress, budget, scandals, crises, foreign affairs, charts, news, events, save/load, autosave, term progression, legacy scoring, and re-election pressure.

The game should feel like running a presidency under pressure. It should not feel like a random dashboard where numbers twitch around because JavaScript got lonely.

## Development philosophy

Build the best possible game first.

It is acceptable if the strongest version currently works best inside Claude or a Claude-assisted development environment. AI features are a major part of the intended experience, not an optional afterthought.

Do not weaken the design just to make every feature offline-hostable immediately.

Public deployment, proxying, offline fallback, and production hardening can come later. For now, prioritise rich AI-driven gameplay, strong simulation logic, and a playable development build.

## Agency level

You have broad autonomous agency.

You may:
- Add features.
- Refactor the project.
- Split the single `index.html` into multiple files.
- Add folders such as `src/`, `styles/`, `scripts/`, `docs/`, `tests/`, or `public/`.
- Add lightweight tooling such as `package.json` if useful.
- Add tests or smoke checks.
- Add documentation.
- Add new gameplay systems.
- Add AI-driven systems.
- Add UI panels, modals, tabs, logs, history screens, charts, and reports.
- Add deterministic simulation systems.
- Improve or replace weak systems.
- Remove dead or duplicate code if safely replaced.
- Create a better architecture if the current one limits development.

You should act like a product-minded coding agent, game designer, political simulation designer, and AI gameplay designer.

## Core autonomous loop

Work through repeated development cycles.

Each cycle should do this:

1. Inspect the current code and docs.
2. Analyse what is weak, missing, buggy, shallow, or badly structured.
3. Pick the highest-value next improvement.
4. Explain why it matters.
5. Implement it.
6. Run checks or create a manual test path.
7. Fix errors caused by your changes.
8. Review your own diff.
9. Update the development log if one exists.
10. Pick the next improvement and continue until the task limit or stop condition is reached.

Prefer continuous design-build-test-review cycles over one large careless rewrite.

## Product direction

The project should develop from a working political command interface into a deeper AI-assisted political simulation.

Strong development directions include:

### 1. AI command interpretation

The command box should become a major gameplay interface.

The player should be able to type open-ended presidential actions such as:
- “Announce a national infrastructure plan.”
- “Pressure Congress to pass healthcare reform.”
- “Call the UK Prime Minister about Ukraine.”
- “Give a press conference on inflation.”
- “Threaten sanctions against China.”
- “Fire the Defence Secretary.”
- “Launch a covert investigation.”
- “Try to centralise executive power.”

The game should interpret the action, classify its route, estimate consequences, update state, and produce a believable advisor response.

Possible routes:
- executive order
- legislation
- budget package
- foreign policy action
- military action
- speech/communication
- press conference
- leader call
- covert action
- crisis response
- court/legal action
- scandal management

### 2. Policy route, status, and history

Policies should become real political objects.

Every major action should create a policy or decision record with:
- id
- name
- date/week
- route
- status
- command
- narrative
- headline
- before stats
- after stats
- approval effects
- economy effects
- budget effects
- Congress result
- foreign relation effects
- legal/institutional risks
- legacy impact

Statuses may include:
- enacted
- failed
- pending
- reversed
- blocked
- expired
- escalated
- under review
- struck down
- leaked

Failed bills should not appear as enacted policies. Pending bills should appear separately.

### 3. Country interaction and diplomacy

The world map should become playable.

Useful improvements:
- Clicking a country opens a country modal.
- Show country name, capital, region, relation score, ally/rival/neutral status, conflict status, trade relationship, and estimated trade surplus/deficit with the US.
- Add command-prefill buttons such as:
  - Negotiate trade deal
  - Offer aid
  - Impose sanctions
  - Call leader
  - Military assessment
  - Back-channel talks

Later, add proper AI leader-call mode where the player can speak to leaders and receive plausible responses.

The map should not stay decorative.

### 4. AI leader calls

Add a mode where the player can call foreign leaders.

Possible leaders:
- UK Prime Minister
- French President
- Chinese President
- Canadian Prime Minister
- Spanish Prime Minister
- German Chancellor
- Ukrainian President
- Russian President
- NATO Secretary General
- UN Secretary-General

The player should type what they want to say. The AI should respond as that leader or government, shaped by:
- country relationship
- current conflicts
- trade dependence
- alliance status
- recent US actions
- domestic pressure
- personality/tone
- strategic interests

Leader calls should be logged and may affect relations, trade, crises, alliances, media, Congress, or markets.

### 5. AI press conference mode

Add a press briefing / press conference system.

The player should answer journalist questions in their own words.

AI should generate:
- reporter questions
- follow-up questions
- media reaction
- opposition response
- approval effects
- scandal risk
- market reaction if relevant
- international reaction if relevant

This should not be a simple dialogue toy. It should affect the simulation.

### 6. Congress, elections, and institutional pressure

Congress should become a major constraint.

Possible systems:
- Bills pass, fail, or remain pending depending on party control, approval, ideology, policy scale, and negotiation.
- Midterms around Week 104.
- Senate confirmation fights.
- House investigations.
- Impeachment thresholds.
- Supreme Court vacancy and nomination events.
- Party rebellion.
- Legislative bargaining.
- Shutdown risk.
- Budget passage pressure.

Congress should not be static for the whole game.

### 7. Cabinet depth and politician profiles

Cabinet should become strategic, not just a list of names.

Possible systems:
- Cabinet members can be clicked after appointment.
- Politician profile modal.
- Photos where practical.
- Search feature.
- Only living politicians unless the game explicitly supports historical mode.
- Party, ideology, competence, loyalty, ambition, scandal risk, media skill, policy expertise, relationship with the president, and role fit.
- Cabinet members can advise through AI.
- Cabinet members can influence crises, press, Congress, scandals, diplomacy, economy, or implementation capacity.
- Cabinet reshuffles can have political costs.
- Strong relationships may create loyalty bonuses.
- Low loyalty may create leaks, resignations, or scandals.

### 8. Scandals, crises, and event chains

Events should have meaningful state and consequences.

Improve:
- Active scandals should never show `[object Object]`.
- Crisis UI should show clear text, not robotic labels.
- Scandals should decay, escalate, or resolve.
- Crisis choices should have readable consequence previews.
- Some events should become chains over several weeks.
- Events should affect approval blocs, economy, Congress, media, foreign relations, and legacy.
- AI can generate narrative crisis briefings, but the state impact must be trackable.

### 9. Economy and budget strategy

The economy is central to the game and should keep getting deeper.

Possible improvements:
- Budget sliders or clearer budget controls.
- Deficit and debt pressure.
- Bond yield / borrowing cost pressure.
- Inflation, unemployment, GDP, markets, trade, and approval feedback.
- Spending trade-offs by category.
- Major budget moves may require an action, a bill, or a political cost.
- Economic history across the player’s term.
- Clickable graphs showing details, turning points, and policy links.

### 10. Covert, extreme, or rogue political paths

The player may attempt controversial, corrupt, illegal, authoritarian, or extreme actions as fictional game mechanics.

Handle these as abstract simulation systems, not real-world instructions.

Possible mechanics:
- Covert action tab.
- Intelligence operations.
- Disinformation risk.
- Abuse-of-power risk.
- Institutional resistance.
- Court challenges.
- Leaks.
- Scandal escalation.
- Impeachment risk.
- Military/legal refusal.
- Democratic backsliding score.
- Constitutional crisis events.

Extreme actions should create severe trade-offs and risks. They should not become an easy win button.

### 11. Term, re-election, and legacy

The endgame should become richer.

Possible systems:
- End-of-term report.
- Legacy score.
- Re-election chance.
- Historical comparison.
- Category grades:
  - economy
  - foreign policy
  - social policy
  - fiscal record
  - legislative success
  - crisis management
  - scandals/integrity
  - institutional health
- Second-term continuation.
- Shareable summary.

## AI-first development direction

AI features are central to this project.

It is acceptable if advanced AI features only work properly in Claude/development mode for now. Do not block creative AI gameplay just because public hosting, offline fallback, or API proxying is not solved yet.

The priority is to make the AI-assisted political simulation feel alive, reactive, and strategically useful.

Good AI uses:
- Interpreting open-ended commands.
- Generating advisor responses.
- Producing weekly briefs.
- Simulating press conferences.
- Simulating foreign leader calls.
- Producing cabinet advice.
- Creating crisis options.
- Explaining policy consequences.
- Generating realistic opposition/media responses.
- Turning player intent into structured game effects.

AI should connect to deterministic state. The AI can write, interpret, explain, and roleplay, but the game state should still track approval, economy, Congress, budget, relations, scandals, policy history, crisis status, and legacy.

When using AI:
- Prefer structured outputs where state changes are applied.
- Use freeform text for dialogue, advice, press, leader calls, atmosphere, and narrative.
- Validate important numbers before applying them.
- Clamp extreme values.
- Avoid letting broken AI responses crash the game.
- Add simple fallback text only where needed to prevent total failure.
- Do not over-engineer public deployment yet.
- Do not remove strong AI features just because they are not production-hostable.

The current development target is: best possible Claude-powered local/browser experience first, deployment robustness later.

## Game design principles

Every meaningful action should create a trade-off.

Good GOVERN design:
- Popular policy can worsen the deficit.
- Fiscal restraint can hurt approval.
- Military strength can improve security approval but worsen diplomacy.
- Executive orders are fast but fragile.
- Legislation is harder but more durable.
- Cabinet loyalty may reduce leaks but lower competence.
- Covert action may work quietly but risks scandal.
- Press conferences may improve media control but create gaffes.
- Foreign aid may improve relations but anger fiscal conservatives.
- Sanctions may hurt rivals but damage trade and inflation.

Avoid systems where every click improves everything.

## Political simulation principles

Use political science and public administration as gameplay tools.

Useful concepts:
- Veto points
- Party control
- Coalition management
- Public opinion blocs
- Policy feedback
- Bureaucratic capacity
- Media framing
- Congressional bargaining
- Confirmation politics
- Federal budget limits
- State capacity
- Institutional resistance
- Foreign-policy credibility
- Alliances
- Trade dependence
- Escalation risk
- Democratic legitimacy
- Scandal management

Do not write academic essays in the UI. Turn these ideas into visible mechanics and consequences.

## Feature creation guidance

When adding a feature, define:

1. What player decision it creates
2. What trade-off it creates
3. What existing system it connects to
4. How AI can improve it
5. How the player sees the result
6. How it affects future weeks
7. How it is saved/loaded
8. How it can be tested

Features should connect to the governing loop. Decorative features are lower priority unless they support clarity or immersion.

## Architecture guidance

You may keep a single file if that is still practical.

If the file becomes too large or hard to maintain, you may split it.

Possible future structure:

```text
index.html
src/
  state.js
  simulation.js
  policies.js
  congress.js
  economy.js
  cabinet.js
  foreign.js
  events.js
  save.js
  ui.js
  charts.js
  ai.js
  communications.js
styles/
  main.css
docs/
  DESIGN_BRIEF.md
  CODEX_BACKLOG.md
  DEVLOG.md
  TEST_PLAN.md
tests/
  smoke.test.js
