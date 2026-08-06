# VoiceOpenGov Regional Member Journey

## Purpose

VoiceOpenGov should make it easy for any person to become active locally without first founding a formal chapter, representing a region or organising an entire event alone.

The public promise is deliberately modest and truthful:

> You can register your regional interest. VoiceOpenGov records what you would like to do and may contact you about suitable next steps. An event, group or introduction only arises through later, explicit decisions.

## Product sequence

```text
Regional interest
→ reviewed intake
→ optional opt-in matching
→ regional circle
→ meetup proposal
→ shared planning
→ protected member hub and chat
→ confirmed meetup
→ follow-up and documented next steps
```

## Stage 1: Regional activation entry

Status: implemented in this slice.

- public route `/vor-ort`;
- legacy `/chapter` redirects to the human-first entry;
- person selects one or more concrete intentions;
- optional topic;
- contact consent is required;
- matching consent is separate and optional;
- no public profile, group, event or participant count is created;
- data is stored separately from legacy chapter intake data;
- homepage and contribution roles lead into the regional entry;
- anti-spam check, rate limit and admin notification remain in place.

## Stage 2: Matching and regional circles

Task: `VOG-REGIONAL-MATCHING-AND-CIRCLE-01`.

- internal review queue for regional interests;
- region normalization without exposing exact addresses;
- suggestions for possible matches;
- no automatic introduction;
- both sides confirm before contact details or a shared space are opened;
- regional circle requires at least two named hosts/contact persons;
- circle never claims to represent a municipality or population.

## Stage 3: Member region hub

Task: `VOG-MEMBER-REGION-HUB-01`.

- authenticated regional home;
- changes since last visit;
- current topics, open tasks and support needs;
- own regional interests and matching status;
- regional circles and meetup proposals;
- one clear next action;
- permissions and privacy visibility per object.

## Stage 4: Member chat

Task: `VOG-MEMBER-REGION-CHAT-01`.

- regional main room;
- topic threads and temporary project groups;
- reporting, blocking and moderation;
- no automatic public indexing;
- no chat message becomes a VoiceOpenGov or eDebatte position;
- deliberate, reviewable handoff for a source, question, perspective or working result.

## Stage 5: Meetup planner

Task: `VOG-MEETUP-PLANNER-01`.

- proposal, not immediate event;
- co-host search;
- date poll;
- venue or online option;
- capacity and participation rules;
- named hosts and responsibility status;
- invitation and reminders only after confirmation;
- attendance and follow-up;
- no claim that VoiceOpenGov is the organiser until operational and legal responsibility is actually assumed.

## Stage 6: End-to-end closure

Task: `VOG-REGIONAL-JOURNEY-E2E-01`.

The journey is complete only after a real test proves:

1. a person registers interest;
2. consent is respected;
3. a suitable introduction is reviewed and confirmed;
4. a regional circle forms;
5. a meetup is proposed and planned by named hosts;
6. protected conversation works;
7. the meetup is completed;
8. outcomes and next actions are documented;
9. any eDebatte handoff is explicit and review-first;
10. privacy, moderation, accessibility, multilingual and mobile paths are verified.

## Invariants

- no public personal data by default;
- no automatic matching;
- no invented group or event numbers;
- no representation claim;
- no chat as public truth;
- no automatic eDebatte handoff;
- no event without named responsibility;
- no participation advantage through funding;
- every later capability must remain understandable without Voxy and fully usable by keyboard and screen reader.

## Related work

- VoiceOpenGov issue #8: master epic and acceptance criteria;
- VoiceOpenGov draft PR #6: public brand and movement closing pass;
- eDebatte issue #586: canonical topics, external signals, actors, regional action and member briefing.
