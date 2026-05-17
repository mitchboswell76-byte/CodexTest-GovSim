# GOVERN Test Plan

## Purpose

This file gives Codex/Claude a repeatable checklist for testing GOVERN after each autonomous development cycle.

Every agent should use this file before claiming work is complete.

The goal is to protect:

- startup
- setup flow
- week advancement
- save/load/autosave
- policies
- events
- charts
- cabinet
- Congress
- map interactions
- AI features
- localStorage migration
- general gameplay stability

## Minimum test path

After each coding cycle, run or manually check the following.

## 1. Startup

Check:

- Open the app.
- Confirm the setup screen appears.
- Confirm there are no obvious console errors.
- Confirm fonts, CSS, and layout load well enough for play.
- Confirm buttons are visible and usable.

Result:

PASS / FAIL:  
Notes:

## 2. New game setup

Check:

- Enter a president name/title.
- Select Democrat.
- Start game.
- Return to menu if available.
- Start again as Republican.
- Confirm party choice affects starting state or available context where expected.

Result:

PASS / FAIL:  
Notes:

## 3. Main dashboard

Check that these display:

- date/week
- actions remaining
- approval
- GDP
- unemployment
- inflation
- national debt
- deficit
- voting blocs
- cabinet tab
- budget tab
- Congress tab
- map
- charts
- news/log
- command input

Result:

PASS / FAIL:  
Notes:

## 4. Week advancement

Check:

- Advance one week.
- Confirm weekly brief appears quickly.
- Confirm stats update.
- Confirm actions reset.
- Confirm news/log updates.
- Confirm charts update.
- Advance at least 4 more weeks.

Result:

PASS / FAIL:  
Notes:

## 5. Command input

Test these simple commands:

- Announce an infrastructure plan.
- Give a speech about inflation.
- Negotiate with the United Kingdom.
- Propose healthcare reform.
- Increase defence readiness.

Check:

- command is accepted
- response appears
- action cost applies where relevant
- policy/history/log updates
- economy/approval/relation effects appear where relevant
- game does not crash on vague input

Result:

PASS / FAIL:  
Notes:

## 6. Policy history

Check:

- successful policies appear in enacted policies/history
- failed policies do not appear as enacted
- pending bills appear separately if implemented
- clicked policies show route/status
- before/after stats display
- financial/economic effects display
- arrows or direction indicators make sense
- policy records survive save/load

Result:

PASS / FAIL:  
Notes:

## 7. Budget

Check:

- budget tab opens
- budget categories display
- budget changes can be made
- confirmation works if present
- rapid clicking cannot farm approval or exploit effects
- deficit/debt/revenue display remains logical
- week advancement still works after budget changes

Result:

PASS / FAIL:  
Notes:

## 8. Cabinet

Check:

- cabinet tab opens
- cabinet roles display
- appointments work
- duplicate appointments are handled safely
- reshuffles cost actions after setup if implemented
- bonuses activate when expected
- cabinet profiles open if implemented
- photos/fallback cards work if implemented
- relationship stats display if implemented

Result:

PASS / FAIL:  
Notes:

## 9. Congress

Check:

- House and Senate data display
- party totals remain valid
- bills pass/fail/pending based on logic if implemented
- Congress effects influence legislation
- midterms trigger around Week 104 if implemented
- investigations/impeachment/shutdown systems do not crash if implemented

Result:

PASS / FAIL:  
Notes:

## 10. World map

Check:

- map renders
- countries hover correctly
- tooltips show country name/capital/region where available
- relation/conflict/alliance layers still work if present
- clicking a country opens modal if implemented
- country command-prefill buttons work if implemented
- US click opens domestic map if implemented

Result:

PASS / FAIL:  
Notes:

## 11. US domestic map

If implemented, check:

- US map opens
- states hover
- states click
- state modal displays:
  - state name
  - capital
  - governor
  - senators
  - House delegation
  - party lean
  - approval
  - economy/unemployment
  - electoral votes
- state actions work
- state politics connects to midterms/re-election where implemented

Result:

PASS / FAIL:  
Notes:

## 12. Events, crises and scandals

Check:

- random/weekly events trigger
- crisis modal opens
- choice labels are readable
- no snake_case appears in visible UI
- active scandals never show `[object Object]`
- scandals decay/escalate/resolve if implemented
- crisis chains continue across weeks if implemented
- event choices affect state

Result:

PASS / FAIL:  
Notes:

## 13. AI features

If AI features are enabled, check:

- advisor response works
- weekly brief works
- AI delay does not block the whole game
- broken/slow AI does not crash the game
- leader call works if implemented
- press conference works if implemented
- AI output connects to state changes where needed
- AI text does not overwrite structured state with invalid data

Result:

PASS / FAIL:  
Notes:

## 14. Save/load/autosave

Check:

- manual save works
- manual load works
- autosave works if present
- load autosave works if present
- refresh page and restore save
- save after several weeks
- save after policy actions
- save after cabinet changes
- save after budget changes
- save after events/crises
- old/missing fields do not crash migration where possible

Result:

PASS / FAIL:  
Notes:

## 15. Charts and history

Check:

- approval chart renders
- economy chart renders
- expanded chart works if present
- graph markers work if implemented
- chart history updates each week
- charts survive save/load

Result:

PASS / FAIL:  
Notes:

## 16. War and conflict

If implemented, check:

- active wars/conflicts display
- conflict phase displays clearly
- escalation risk displays clearly
- war support displays clearly
- congressional support displays clearly
- allied support displays clearly
- military readiness displays clearly
- war cost affects budget/economy
- war actions affect approval, economy, Congress, relations and legacy
- war events trigger without crashing
- war timelines/logs update

Result:

PASS / FAIL:  
Notes:

## 17. Relationships and profiles

If implemented, check:

- politician profiles open
- cabinet profiles open
- foreign leader profiles open
- governor/senator/representative profiles open if implemented
- photos load where available
- fallback cards appear where photos are missing
- relationship scores display
- loyalty/trust/hostility values affect gameplay
- relationship changes survive save/load

Result:

PASS / FAIL:  
Notes:

## 18. End-of-term

If practical, fast-forward or simulate to term end.

Check:

- end-of-term modal appears
- legacy score calculates
- re-election chance calculates
- report categories display
- second-term/retire options work if implemented

Result:

PASS / FAIL:  
Notes:

## Quick smoke test

For small changes, run this shorter path:

1. Start app.
2. Start new game.
3. Issue one command.
4. Advance week.
5. Open budget.
6. Appoint cabinet member.
7. Click map/country.
8. Save.
9. Refresh.
10. Load.
11. Confirm no visible crash.

Result:

PASS / FAIL:  
Notes:

## AI-first smoke test

For AI-heavy changes, run this path:

1. Start app.
2. Issue one open-ended command.
3. Confirm the AI/advisor response appears.
4. Confirm structured game state updates.
5. Trigger or advance to a weekly brief.
6. Confirm AI delay does not block the game.
7. Test one leader call or press conference if implemented.
8. Confirm broken/empty AI response has a safe fallback.

Result:

PASS / FAIL:  
Notes:

## Save migration smoke test

When changing game state shape, check:

1. Start a new game.
2. Save manually.
3. Refresh.
4. Load manually.
5. Advance a week.
6. Trigger at least one action.
7. Save again.
8. Load autosave if present.
9. Confirm missing new fields get defaults.
10. Confirm no localStorage crash occurs.

Result:

PASS / FAIL:  
Notes:

## Agent reporting requirement

After testing, update `docs/DEVLOG.md` with:

- checks run
- pass/fail result
- errors found
- fixes made
- remaining risks
- next recommended task

Do not claim a feature is complete without saying how it was tested.
Notes:
