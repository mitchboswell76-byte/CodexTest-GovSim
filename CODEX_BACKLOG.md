# GOVERN Codex Backlog

## Purpose

This backlog gives Codex/Claude a living task queue for autonomous development.

The agent may reorder tasks if it finds a better development path, but it should explain why. The aim is continuous improvement: analyse, build, test, fix, log, then choose the next strongest improvement.

The project should keep moving toward a deeper AI-assisted presidential simulator.

## Current highest-priority direction

Build systems that make the game feel more like governing under pressure.

Priority should usually favour:

1. Policy route/status/history
2. Country and diplomacy interaction
3. AI command interpretation
4. Cabinet profiles, relationships, photos and loyalty
5. Congress, midterms and legislative pressure
6. War/conflict system
7. US domestic map and state politics
8. Press conferences and leader calls
9. Scandals/crisis chains
10. Better logs, charts, reports and testing

## Priority 1: Core political systems

### 1. Full policy route/status/history system

Build a real policy history system.

Tasks:
- Create or improve `policyHistory`.
- Record every major action, not only successful policies.
- Add route: executive order, legislation, budget, foreign policy, military, speech, crisis response, covert action, war powers.
- Add status: enacted, failed, pending, reversed, blocked, struck down, leaked, escalated.
- Failed bills must not appear as enacted policies.
- Pending bills should appear separately.
- Policy modals should show route, status, effects, before/after stats, Congress result and legacy effect.

Acceptance:
- Player can click policies and understand what happened.
- Failed legislation is clearly separate from enacted policy.
- Policy history survives save/load.

### 2. AI command interpretation

Make the command box smarter.

Tasks:
- Classify natural language commands by route.
- Convert player commands into structured game effects.
- Produce advisor-style response text.
- Connect command outcomes to economy, approval, Congress, budget, relations, scandals and legacy.
- Add guardrails so broken AI output does not crash state.

Acceptance:
- Player can type broad presidential actions.
- Game records the decision.
- Consequences are visible.
- AI response feels connected to game state.

### 3. Congress and legislative pressure

Make Congress a real constraint.

Tasks:
- Add pass/fail/pending logic for bills.
- Add party control effects.
- Add approval/economy/scandal effects on legislative difficulty.
- Add confirmation fights.
- Add investigations.
- Add government shutdown risk.
- Add impeachment pressure if conditions worsen.
- Add midterms around Week 104.

Acceptance:
- Congress changes gameplay.
- Legislation is harder than executive orders.
- Midterms can change House/Senate balance.

## Priority 2: Map and geography

### 4. Country click diplomacy modal

Make the global map playable.

Tasks:
- Clicking a country opens a modal.
- Show country name, capital, region, relation score, relation label, ally/rival/neutral status, conflict status, trade relationship and leader.
- Add estimated US trade surplus/deficit.
- Add command-prefill buttons:
  - Negotiate trade deal
  - Offer aid
  - Impose sanctions
  - Call leader
  - Military assessment
  - Back-channel talks
  - Open peace talks

Acceptance:
- Countries are no longer just hover decorations.
- Country actions connect to command box and state.

### 5. US domestic state map

Add a domestic US map view.

Tasks:
- Clicking the US on the world map opens a US state map.
- States should be hoverable and clickable.
- State modal should show:
  - state capital
  - governor
  - senators
  - House delegation balance
  - party lean
  - approval
  - unemployment
  - key industries
  - electoral votes
  - current local issue
  - recent federal policy effects
- Add state actions:
  - Visit state
  - Hold rally
  - Meet governor
  - Disaster declaration
  - Infrastructure grant
  - Campaign for senator
  - Support House candidates

Acceptance:
- State politics affects midterms, re-election and approval.
- Domestic map adds strategy, not decoration.

## Priority 3: People, profiles and relationships

### 6. Politician profile system

Add reusable profile cards.

Tasks:
- Cabinet members become clickable after appointment.
- Add profile modal with:
  - photo or fallback
  - biography
  - ideology
  - competence
  - loyalty
  - ambition
  - scandal risk
  - media skill
  - expertise
  - relationship with president
  - role fit
- Add search for politicians.
- Use living politicians unless historical mode is created later.

Acceptance:
- Cabinet choices feel personal and strategic.
- Missing photos do not break UI.

### 7. Relationship system

Track relationships with powerful actors.

Tasks:
- Add relationship values for cabinet, foreign leaders, congressional leaders, governors and factions.
- Track trust, loyalty, hostility, recent promises, betrayals and shared wins.
- Relationships affect advice, leaks, negotiations, endorsements, resignations and diplomacy.

Acceptance:
- Relationships create trade-offs.
- Player cannot please everyone.

### 8. Foreign leader profiles and photos

Make diplomacy more personal.

Tasks:
- Add foreign leader profile cards.
- Add photo/fallback.
- Add leader relationship separate from country relationship.
- Track trust, hostility, ideology, trade dependence, alliance confidence, domestic pressure and negotiation status.

Acceptance:
- Calling a leader feels tied to a known actor.
- Leader relationship affects diplomacy.

## Priority 4: AI interaction modes

### 9. Leader call mode

Let player talk to foreign leaders.

Tasks:
- Player selects/calls a leader.
- Player types message.
- AI responds as the leader/government.
- Response shaped by relations, trade, conflict, alliance status, recent actions and leader relationship.
- Call outcome affects relations, crisis risk, markets, Congress, media and legacy.

Acceptance:
- Leader calls are logged.
- Calls affect state, not just text.

### 10. Press conference mode

Let player answer journalists.

Tasks:
- AI generates reporter questions.
- Player types answers.
- AI generates follow-ups, media reaction and opposition response.
- Effects apply to approval, media, scandals, markets, Congress and foreign reaction.

Acceptance:
- Press conferences are interactive.
- Bad answers can cause damage.
- Good answers can stabilise crises.

### 11. Cabinet advice mode

Let cabinet members advise the player.

Tasks:
- Cabinet officials provide advice based on role, competence, loyalty and ideology.
- Advice may be biased.
- Low-loyalty officials may leak or undermine.
- High-competence officials improve decision previews.

Acceptance:
- Cabinet is not just passive stat bonuses.

## Priority 5: War, crisis and scandal depth

### 12. War/conflict system

Build a serious abstract war system.

Tasks:
- Track active wars/conflicts.
- Add conflict phase: warning, crisis, escalation, active conflict, stalemate, negotiation, ceasefire, withdrawal, aftermath.
- Track escalation risk, war support, congressional support, allied support, casualties, cost per week, military readiness, legitimacy and exit strategy.
- Add war actions:
  - seek congressional authorisation
  - send military aid
  - impose sanctions
  - coordinate with allies
  - open peace talks
  - conduct limited strike
  - de-escalate
  - withdraw support
  - address nation
- Add war events:
  - ally request
  - rival mobilisation
  - leaked intelligence
  - civilian casualty report
  - war powers challenge
  - ceasefire proposal
  - market shock
  - anti-war protest

Acceptance:
- War is costly, uncertain and politically dangerous.
- War affects approval, economy, Congress, relations and legacy.

### 13. Scandal chain system

Make scandals more than labels.

Tasks:
- Scandals have type, severity, duration, stage and actors.
- Scandals can decay, escalate or resolve.
- Add responses:
  - deny
  - apologise
  - fire official
  - appoint investigation
  - release documents
  - attack media
  - cooperate with Congress
  - stonewall
- Scandals can lead to hearings, resignations, special counsel, impeachment risk or legacy damage.

Acceptance:
- Active scandals never show `[object Object]`.
- Scandals feel like ongoing political problems.

### 14. Crisis event chains

Make crises last beyond one modal.

Tasks:
- Add multi-week crisis chains.
- Crisis choices affect next stage.
- AI can write crisis briefings.
- State remains structured.
- Crisis history appears in logs.

Acceptance:
- Crises feel connected across weeks.

## Priority 6: Economy, budget and charts

### 15. Budget strategy improvement

Make budget changes more strategic.

Tasks:
- Improve budget controls.
- Add action cost or legislation requirement for major changes.
- Add deficit, debt, inflation, bond yield and approval impacts.
- Link budget categories to state and policy effects.

Acceptance:
- Budget changes cannot be exploited by rapid clicking.
- Budget choices create trade-offs.

### 16. Economic history and graph markers

Make charts explain the presidency.

Tasks:
- Add policy markers to charts.
- Add crisis/scandal/war markers.
- Expand graphs on click.
- Show why a turning point happened.
- Add term-wide economic history.

Acceptance:
- Graphs are readable and useful.
- Player can connect actions to trends.

## Priority 7: Endgame and reports

### 17. End-of-term legacy report expansion

Improve legacy report.

Tasks:
- Add category grades:
  - economy
  - foreign policy
  - war and peace
  - fiscal record
  - legislative success
  - scandal/integrity
  - institutional health
  - crisis management
  - global standing
- Add best achievement, biggest failure, defining crisis, defining war/peace event, strongest state, weakest state.
- Add historical comparison later.

Acceptance:
- Endgame feels like judgement on the presidency.

### 18. Re-election and second term depth

Improve election path.

Tasks:
- Re-election chance based on approval, economy, scandals, wars, state map and party control.
- If player wins, second term continues with changed constraints.
- If player loses, legacy/game over report appears.

Acceptance:
- Elections feel earned, not random.

## Priority 8: Testing and structure

### 19. Smoke tests and manual test plan

Add basic checks.

Tasks:
- Add `docs/TEST_PLAN.md`.
- Add smoke test script if project structure allows.
- Check startup, new game, week advancement, policy creation, event modal, save/load, autosave, charts and map click.
- Add old save fixtures if practical.

Acceptance:
- Agent can test work before claiming it is done.

### 20. Project structure improvement

Refactor only when useful.

Tasks:
- Split files if single-file structure slows development.
- Possible structure:
  - `src/state.js`
  - `src/simulation.js`
  - `src/policies.js`
  - `src/congress.js`
  - `src/economy.js`
  - `src/cabinet.js`
  - `src/foreign.js`
  - `src/events.js`
  - `src/save.js`
  - `src/ui.js`
  - `src/ai.js`
  - `styles/main.css`
- Keep app runnable after every split.

Acceptance:
- Structure helps development.
- Refactor does not kill the game like a very boring assassin.

## Ideas allowed later

The agent may propose and build these if the foundation supports them:

- Supreme Court nominations
- Court challenges to executive orders
- impeachment trial
- party leadership meetings
- donor meetings
- intelligence/covert action tab
- NATO/alliance summit
- UN votes
- campaign mode
- historical comparison charts
- shareable legacy report
- state election night map
- crisis room view
- war room view
- political capital system
- media hostility index
- democratic backsliding index
- bureaucracy/state capacity system

## Features that need care

These are allowed as fictional game systems, but must be abstract and consequence-heavy:

- covert actions
- corrupt actions
- authoritarian actions
- abuse-of-power paths
- false public narratives
- illegal orders
- constitutional crisis
- military/legal refusal

They should create legal risk, scandal risk, court resistance, institutional backlash, protest, impeachment pressure and legacy damage.

Do not provide real-world operational instructions.

## Autonomous selection rule

When choosing the next task, the agent should ask:

1. Does this make the game feel more like governing?
2. Does it connect to existing systems?
3. Does it create a trade-off?
4. Does it improve AI interaction?
5. Does it improve replayability?
6. Can it be saved/loaded safely?
7. Can it be tested?

If yes, it is a good candidate.

## Current recommended first five tasks

1. Build real policy route/status/history.
2. Add country click diplomacy modal.
3. Add politician/cabinet profile system with photos/fallbacks and relationship stats.
4. Add Congress pass/fail/pending legislation system.
5. Add AI leader call or press conference mode.

The agent may choose a different order if code inspection shows a better path.
