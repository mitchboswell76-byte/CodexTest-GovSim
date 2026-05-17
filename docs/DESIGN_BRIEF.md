# GOVERN Design Brief

## Core concept

GOVERN is a browser-based, AI-assisted US presidential political simulator.

The player becomes President of the United States and governs week by week through a full term. The game should combine political strategy, economic management, public approval, cabinet appointments, Congress, budget pressure, foreign affairs, crises, scandals, media, elections, war, diplomacy, legacy scoring, and AI-driven political interaction.

The game should feel like sitting inside a live command centre. The player should face pressure, trade-offs, incomplete information, political constraints, public backlash, institutional resistance, and long-term consequences.

The aim is not to make a clean dashboard. The aim is to make governing feel alive.

## Current starting point

The project currently begins from a single `index.html` file.

That file can be preserved, refactored, split, or transformed. The agent has permission to improve the structure if that helps the game grow.

The project should not stay trapped as a single file if that slows development, testing, readability, or feature depth.

## Development priority

Build the best AI-powered development version first.

It is acceptable if the strongest version only works properly in Claude or development mode for now.

Public hosting, proxying, API security, and offline mode can be handled later.

Do not weaken the design just to make every feature production-hostable immediately.

AI interaction is a core part of the intended game.

## Player fantasy

The player should feel like a president trying to survive power.

They should have to manage:

- voters
- party factions
- Congress
- cabinet members
- courts
- media
- markets
- allies
- rivals
- military pressure
- crises
- wars
- scandals
- institutional limits
- elections
- legacy

The best version of the game should make the player think:

“I can do this, but what does it cost?”

## Core gameplay loop

1. Player chooses name/title and party.
2. Player takes office.
3. Each week, the player has limited actions.
4. Player issues commands, appoints officials, handles events, manages budget, responds to crises, speaks to the public, negotiates abroad, and manages war risk.
5. The game updates approval, economy, Congress, budget, foreign relations, scandals, conflicts, wars, news, charts, policy history, and legacy.
6. Player advances the week.
7. Weekly brief and events appear.
8. AI reacts through advisors, press, opposition, cabinet, courts, Congress, foreign leaders, or military officials.
9. Consequences accumulate.
10. At the end of the term, the game calculates legacy and re-election prospects.

## Main systems

### 1. Open-ended command system

The command box should become one of the main interfaces.

The player should type presidential actions in natural language.

Examples:

- Announce a national infrastructure plan.
- Pressure Congress to pass healthcare reform.
- Call the UK Prime Minister about Ukraine.
- Give a press conference on inflation.
- Threaten sanctions against China.
- Fire the Defence Secretary.
- Launch a covert investigation.
- Push through an emergency border package.
- Try to centralise executive power.
- Reassure markets after a debt scare.
- Send military aid to an ally.
- Order a limited military response.
- Seek congressional authorisation for intervention.
- Start ceasefire talks between two countries.

The game should interpret the command, classify it, apply consequences, and generate a believable response.

Possible command routes:

- executive order
- legislation
- budget package
- foreign policy action
- military action
- press/speech communication
- leader call
- crisis response
- court/legal action
- covert action
- scandal management
- war powers action
- peace negotiation
- emergency declaration

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
- bloc effects
- Congress result
- relation changes
- legal risk
- scandal risk
- war risk
- legacy impact

Possible routes:

- executive order
- legislation
- budget package
- foreign policy action
- military action
- communication/speech
- leader call
- crisis response
- court/legal action
- covert action
- scandal management
- war authorisation
- treaty/accord
- emergency power

Possible statuses:

- enacted
- failed
- pending
- reversed
- blocked
- struck down
- leaked
- escalated
- expired
- under review
- vetoed
- passed House
- passed Senate
- awaiting signature
- challenged in court

Failed bills must not appear as enacted policies.

Pending bills should appear separately.

The player should be able to click a policy and see:

- route
- status
- who supported it
- who opposed it
- economic impact
- budget impact
- approval impact
- foreign impact
- legal risk
- before/after stats
- long-term legacy effect

### 3. Approval blocs

The game should track public support by groups, not only one approval number.

Useful blocs:

- Democrats
- Republicans
- Independents
- Progressives
- Conservatives
- Working class
- Business leaders
- Youth
- Seniors
- Military
- Media
- Foreign-policy establishment
- Suburban voters
- Rural voters
- Urban voters
- Veterans
- Evangelicals
- Union households

Overall approval should be linked to bloc approval. It should not drift randomly.

Approval should react to:

- policy choices
- economy
- war
- scandals
- speeches
- press conferences
- disasters
- court rulings
- Congress
- state-level issues
- foreign crises
- cabinet behaviour

### 4. Economy

The economy should create constant pressure.

Track:

- GDP growth
- unemployment
- inflation
- national debt
- annual deficit
- stock market
- bond yield / borrowing pressure
- trade balance
- consumer confidence
- business confidence
- wage growth
- energy prices
- housing pressure
- recession risk

Economic changes should affect approval, Congress, markets, media, state politics, war support, and legacy.

Economic data should have history across the term.

Graphs should be clickable and should explain turning points.

### 5. Budget

Budget choices should create trade-offs.

Track categories such as:

- defence
- healthcare
- social security
- education
- infrastructure
- science
- foreign aid
- homeland security
- debt interest
- climate/energy
- law enforcement
- veterans
- other spending

Budget changes should not be free magic.

Large budget changes may require:

- action cost
- legislation
- party support
- Congress approval
- media backlash
- market reaction
- deficit pressure
- court or agency limits

Budget changes should affect:

- approval blocs
- GDP
- unemployment
- inflation
- deficit
- debt
- bond yield
- military readiness
- foreign aid capacity
- state-level funding
- long-term legacy

### 6. Cabinet

Cabinet should become a strategic system.

Each politician should have:

- name
- role
- party
- ideology
- competence
- loyalty
- ambition
- scandal risk
- media skill
- policy expertise
- relationship with president
- role fit
- faction
- popularity
- crisis ability
- negotiation skill
- possible photo
- short biography

Cabinet members should be clickable after appointment.

Possible effects:

- better advice
- policy bonuses
- crisis performance
- leaks
- resignations
- scandals
- loyalty boosts
- factional conflict
- congressional help
- media defence
- foreign-policy credibility
- market confidence
- agency capacity

Cabinet reshuffles should have political costs.

Strong relationships may create loyalty bonuses.

Low loyalty may create leaks, resignations, sabotage, factional pressure, or scandal risk.

### 7. Politician and leader profile system

Politicians, cabinet members, governors, senators, representatives, foreign leaders, and major officials should eventually have profile cards.

Each profile may include:

- photo
- name
- role
- country/state
- party or political family
- ideology
- competence
- loyalty or relationship score
- popularity
- scandal risk
- biography
- policy strengths
- policy weaknesses
- relationship history with the president
- recent interactions
- current stance
- faction
- ambition
- media skill
- trust score

Use fallback cards if photos are unavailable:

- initials
- silhouette
- flag/country icon
- party colour
- role badge

Missing photos should not break the UI.

Profiles should not be decoration only. They should connect to advice, loyalty, negotiations, leaks, endorsements, resignations, media response, cabinet effectiveness, confirmation politics, and diplomatic talks.

### 8. Relationship system

The game should track relationships between the president and important actors.

Possible relationship types:

- cabinet relationship
- foreign leader relationship
- congressional leader relationship
- governor relationship
- media relationship
- party faction relationship
- military leadership relationship
- donor/business relationship
- union relationship
- court/legal establishment relationship

Each relationship can track:

- trust
- loyalty
- hostility
- ideological distance
- recent promises
- recent betrayals
- shared wins
- unresolved tensions
- public warmth
- private confidence
- negotiation status

Relationship effects:

- better advice
- lower scandal leakage
- better negotiation chance
- more support in crises
- stronger endorsements
- higher risk of betrayal if ignored
- resignations
- leaks
- obstruction
- diplomatic failure
- party rebellion

Relationship systems should create strategic pressure. The player should not be able to please everyone.

### 9. Congress

Congress should constrain the presidency.

Track:

- House party control
- Senate party control
- ideological distance
- party discipline
- pending bills
- failed bills
- passed laws
- confirmation fights
- investigations
- shutdown risk
- impeachment risk
- midterms
- committee pressure
- factional rebellion
- speaker/majority leader relationship

At Week 104, midterms should shift Congress based on:

- approval
- economy
- scandals
- wars
- party energy
- major events
- state-level approval
- turnout mood

Congress should not be static for the whole game.

Possible Congress systems:

- bill negotiation
- whip count
- amendments
- committee delay
- Senate filibuster
- confirmations
- investigations
- impeachment inquiry
- shutdown fights
- emergency authorisations
- war powers votes
- budget reconciliation-style route

### 10. US domestic map and state politics

The United States should become clickable on the global map.

When the player clicks the US, the game should open a separate domestic map view showing all US states.

This domestic map should work like the global map:

- hoverable states
- clickable states
- state-level tooltip
- state detail modal
- colour layers for approval, economy, party control, election risk, scandals, unemployment, industries, disasters, or policy impact

Each state should be able to track:

- state name
- capital
- region
- population estimate
- electoral votes
- governor
- senators
- House delegation
- party lean
- presidential approval
- unemployment
- GDP/economic strength
- major industries
- military presence
- immigration pressure
- climate/disaster risk
- current scandals or crises
- recent policy effects
- federal funding received
- key local issue
- Senate race status
- House delegation balance

The player should be able to click a state and see:

- governor
- senators
- key representatives or delegation balance
- party control
- approval by bloc
- economy
- local industries
- state-specific issues
- federal funding impact
- election importance
- recent events
- suggested actions

Possible state actions:

- Visit state
- Hold rally
- Meet governor
- Campaign for senator
- Push federal funding
- Disaster declaration
- Infrastructure grant
- Targeted economic package
- Military base announcement
- Address local crisis
- Open factory/event speech
- Support House candidates
- Support governor
- Announce climate/disaster package

State politics should connect to:

- approval
- midterms
- re-election
- Congress
- scandals
- disasters
- budget
- policy feedback
- media coverage
- electoral votes
- Senate control
- House control

The domestic map should make the presidency feel geographically grounded, not only national-level.

Different states should react differently to policy, economy, crises, culture-war issues, trade, disasters, and party strategy.

### 11. Foreign affairs and country interaction

The global map should become playable.

Clicking a country should open a modal showing:

- country name
- capital
- region
- relation score
- relation label
- ally/rival/neutral status
- conflict status
- trade relationship
- estimated trade surplus/deficit with the US
- recent interactions
- leader profile
- leader relationship
- government type
- military strength estimate
- economic importance
- sanctions status
- treaty status
- current disputes
- current cooperation

Possible command-prefill buttons:

- Negotiate trade deal
- Offer aid
- Impose sanctions
- Call leader
- Military assessment
- Back-channel talks
- Invite to summit
- Threaten response
- Open peace talks
- Send envoy
- Intelligence briefing
- Coordinate with allies
- Offer security guarantee
- Suspend aid
- Lift sanctions

The global map should not stay decorative.

Foreign affairs should connect to:

- trade
- inflation
- defence spending
- military readiness
- approval
- Congress
- allies
- rivals
- war risk
- sanctions
- aid
- markets
- legacy

### 12. AI leader calls

Leader calls should become a major AI feature.

The player should be able to call foreign leaders and type what they want to say.

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
- Israeli Prime Minister
- Indian Prime Minister
- Mexican President
- Japanese Prime Minister
- South Korean President
- Saudi Crown Prince
- Brazilian President

The AI should respond based on:

- country relation
- alliance status
- trade dependence
- current conflict
- recent US actions
- leader personality
- domestic pressure
- strategic interest
- personal relationship with the president
- trust
- hostility
- ideological distance
- negotiation history

Leader calls should affect:

- relations
- trade
- alliance confidence
- crisis escalation
- media reaction
- Congress
- markets
- military posture
- sanctions
- aid
- legacy

Each foreign leader should track:

- relationship with the US
- personal relationship with the president
- trust
- hostility
- ideological distance
- trade dependence
- alliance confidence
- domestic pressure
- current negotiation status
- recent promises or threats
- photo or fallback profile card

The same country may have a general relation score and a separate leader relationship score.

Example:

- US-France relations may be friendly.
- The French President may personally distrust the player after a failed summit.

Leader photos and profile cards should make diplomacy feel personal, but they must connect to gameplay rather than becoming decoration.

### 13. War, conflict, and military system

War should become a serious strategic system, not a simple relation penalty.

The system should model conflict at an abstract political level, not through real tactical instructions.

Track:

- active wars
- foreign crises
- proxy conflicts
- US military readiness
- military casualties
- civilian harm estimate
- war support
- allied support
- congressional support
- international legitimacy
- escalation risk
- nuclear risk where relevant
- defence spending pressure
- veteran/public fatigue
- military morale
- intelligence confidence
- mission objective
- war duration
- exit strategy
- ceasefire prospects

Conflict types:

- diplomatic crisis
- sanctions confrontation
- proxy war
- limited strike
- peacekeeping mission
- naval standoff
- cyber crisis
- humanitarian intervention
- counterterror operation
- major war
- alliance defence crisis
- constitutional war powers crisis

War phases:

- warning
- crisis
- escalation
- active conflict
- stalemate
- negotiation
- ceasefire
- settlement
- withdrawal
- aftermath

Each conflict should have:

- name
- countries involved
- US role
- start week
- phase
- escalation level
- objective
- public support
- Congress stance
- ally stance
- rival stance
- cost per week
- casualty pressure
- approval impact
- economic impact
- relation impact
- possible next events

Possible player actions:

- seek congressional authorisation
- deploy advisors
- send military aid
- impose sanctions
- coordinate with allies
- open peace talks
- increase defence readiness
- conduct limited strike
- de-escalate
- withdraw support
- broker ceasefire
- send humanitarian aid
- address nation
- brief Congress
- hold NATO/allied summit
- threaten response
- request UN resolution

War actions should create trade-offs:

- quick force may boost military approval but raise escalation risk
- restraint may protect economy but look weak to hawks
- sanctions may avoid war but hurt trade and inflation
- military aid may help allies but increase rival hostility
- congressional authorisation may improve legitimacy but risk failure
- acting without Congress may be faster but raise legal and impeachment risk
- long wars should create fatigue, cost, casualties, and approval decline
- successful diplomacy should improve legacy and global standing

War should connect to:

- defence budget
- economy
- inflation
- debt
- approval blocs
- Congress
- state politics
- veterans
- foreign relations
- media
- cabinet
- scandals
- legacy

Military readiness should matter.

Low readiness should make military action risky.

High readiness should cost money and may increase international tension.

Cabinet roles should matter:

- Defence Secretary affects readiness and military advice.
- Secretary of State affects diplomacy and allied support.
- National Security Advisor affects crisis options.
- Treasury Secretary affects sanctions and market risk.
- Press Secretary affects public war messaging.
- Vice President can help with Congress or public support.

Wars should have events:

- ally requests aid
- rival mobilisation
- leaked intelligence
- civilian casualty report
- congressional war powers challenge
- anti-war protests
- military success
- failed operation
- ceasefire proposal
- escalation warning
- refugee crisis
- market shock
- veteran backlash
- war powers lawsuit
- NATO dispute
- UN vote

End states:

- negotiated settlement
- ceasefire
- withdrawal
- military success
- stalemate
- escalation
- domestic collapse of support
- congressional restriction
- international backlash
- legacy-defining victory
- legacy-damaging failure

War must never become a simple “attack country” button.

War should be expensive, uncertain, politically dangerous, and historically consequential.

### 14. AI press conference mode

Press conferences should let the player speak directly.

AI should generate:

- journalist questions
- follow-up questions
- hostile framing
- media reaction
- opposition response
- approval effects
- scandal risk
- market reaction
- international reaction where relevant
- cabinet advice before the event
- fact-check style summary after the event

Player answers should matter.

This should not be a toy dialogue mode. It should connect to game state.

Possible press conference topics:

- inflation
- recession
- war
- scandal
- court ruling
- protest movement
- budget crisis
- foreign leader call
- failed legislation
- disaster response
- cabinet resignation
- election results

### 15. Scandals and crises

Scandals and crises should have state.

They should:

- appear clearly
- never show `[object Object]`
- avoid robotic labels
- escalate or decay
- last several weeks where needed
- affect approval, media, Congress, cabinet, courts, and legacy
- offer meaningful response choices
- create possible cover-up, resignation, investigation, hearing, special counsel, or impeachment paths

Scandals may include:

- cabinet misconduct
- leaked memo
- donor scandal
- foreign policy failure
- abuse of power
- corruption allegation
- campaign finance issue
- cover-up allegation
- policy failure
- court challenge
- intelligence leak
- military scandal

Scandal responses:

- deny
- apologise
- appoint investigation
- fire official
- sacrifice cabinet member
- cooperate with Congress
- attack media
- release documents
- stonewall
- address nation

Each response should carry risks.

### 16. Covert and extreme actions

The game may support controversial, illegal, corrupt, authoritarian, or extreme presidential actions as fictional game mechanics.

Handle them abstractly.

Do not provide real-world operational instructions.

Possible systems:

- covert operations
- intelligence actions
- disinformation risk
- legal resistance
- military refusal
- court challenge
- leaks
- abuse-of-power scandals
- democratic backsliding score
- constitutional crisis
- impeachment path
- resignation pressure
- institutional resistance
- party rupture
- civil unrest risk

These actions should be high-risk and consequence-heavy.

They should not become easy win buttons.

Extreme actions should create:

- legal risk
- scandal risk
- court opposition
- congressional backlash
- media crisis
- cabinet resignations
- military/legal refusal
- public protests
- legacy damage
- possible impeachment

### 17. Communications

Add communications as a real system.

Possible modes:

- press briefing
- national address
- campaign rally
- cabinet meeting
- leader call
- emergency statement
- journalist interview
- debate
- congressional negotiation
- private donor meeting
- governor call
- party meeting
- war address
- apology speech

Communication can affect:

- approval
- media
- party factions
- markets
- foreign relations
- scandals
- Congress
- crisis stability
- war support
- state approval
- re-election chances

The player should be able to type messages.

AI should react logically.

### 18. Charts, history, and reports

Charts should not only look nice. They should explain the presidency.

Useful chart features:

- approval over time
- inflation over time
- unemployment over time
- GDP over time
- debt/deficit over time
- war support over time
- congressional control over time
- state approval over time
- policy markers on charts
- crisis markers
- war markers
- scandal markers
- economic turning points
- historical comparison at end of term

Clickable graphs should expand and explain what changed.

### 19. News, logs, and memory

The game should remember and explain what happened.

Useful logs:

- policy history
- decision log
- weekly brief archive
- foreign leader call log
- press conference archive
- war timeline
- scandal timeline
- cabinet changes
- congressional votes
- economic turning points
- state events
- legacy milestones

Logs should help the player understand cause and effect.

### 20. End-of-term legacy

At the end of the term, produce a legacy report.

Categories:

- economy
- foreign policy
- war and peace
- fiscal record
- social policy
- legislative success
- crisis management
- scandals/integrity
- institutional health
- party leadership
- global standing
- media control
- state/electoral position
- cabinet management

Include:

- legacy score
- grade
- re-election chance
- best achievement
- biggest failure
- defining crisis
- defining war or peace deal
- strongest state/region
- weakest state/region
- historical comparison
- second-term option
- shareable summary

## Design principles

### Meaningful trade-offs

Every major choice should help something and hurt something.

### Consequence memory

The game should remember what the player did. Old actions should shape future reactions.

### Political constraint

The player should not be able to simply command reality. Congress, courts, markets, cabinet, media, voters, bureaucracy, military leaders, state governments, and foreign governments should resist.

### AI as political theatre plus state logic

AI should make the game feel alive. It should also connect to structured state.

### Visible cause and effect

The player should understand why approval, economy, Congress, relations, war, or state-level politics changed.

### Replayability

Different parties, cabinets, crises, policy styles, scandals, wars, press choices, and foreign choices should create different runs.

### Depth before polish

Add systems that make the game better before adding decoration.

## Feature quality checklist

Before adding or finishing a feature, ask:

1. What decision does this give the player?
2. What trade-off does it create?
3. What system does it connect to?
4. How does AI make it better?
5. How does it affect future weeks?
6. How does the player see the consequence?
7. How is it saved and loaded?
8. How can it be tested?

## Preferred direction for autonomous development

When choosing what to build next, prefer:

1. Features that make the game feel more like governing.
2. Systems that connect to existing state.
3. AI interactions that affect gameplay.
4. Clickable details that explain consequences.
5. Better history, logging, and reporting.
6. Simulation depth.
7. UI clarity.
8. Testing and migration protection.

Do not wait for perfect architecture before adding useful gameplay.

Do not stop after tiny fixes if there is a clear next improvement.

Build, test, assess, improve, and keep going within the task limits.
