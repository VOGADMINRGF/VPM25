# VOG-REGIONAL-MATCHING-AND-CIRCLE-01 — Codex Run-Pack

Stand: 2026-08-08

Bezug: Issue #9, Parent #8, gemergter Stage-1-PR #15, abgeschlossener Privacy-/Retention-Vertrag #17, Systemtest-Matrix #16.

## Zweck

Dieser Run-Pack bereitet ausschließlich den nächsten sicheren Slice für das operatorgestützte regionale Matching und die kontrollierte Bildung von RegionalCircles vor. Er aktiviert kein automatisches Matching, keine Kontaktvermittlung, keinen Chat, keine Veranstaltung, keine öffentliche Personendarstellung und keinen eDebatte-Handoff.

## Verifizierte Abhängigkeiten

- Stage 1 `VOG-REGIONAL-ACTIVATION-ENTRY-01` ist über PR #15 auf `main` gemergt.
- `VOG-REGIONAL-PRIVACY-RETENTION-CONTRACT-01` / Issue #17 ist abgeschlossen.
- Issue #16 bleibt die verbindliche Gegenprobenmatrix.
- eDebatte #604 bleibt der produktneutrale Conversation-Kern; dieser Slice baut keinen zweiten allgemeinen Messaging-Kern.

## Verbindlicher Preflight

Vor jedem Produkt-/Runtimecode auf sauberem aktuellem `main`:

```bash
node scripts/codex-preflight.mjs --strict
```

Der vorhandene VoiceOpenGov-Preflight ist repositoryweit und nicht task-spezifisch. Deshalb gilt zusätzlich vor Branchstart:

1. Issue #9 muss nicht mehr auf `blocked` stehen;
2. aktuelles `main` muss Stage 1 und #17 enthalten;
3. kein bestehender Branch/PR für denselben Slice darf existieren;
4. der Scope darf keine Chat-, Meetup-, Public-Publish- oder eDebatte-Runtime vorwegnehmen;
5. bei Preflight-Fehlern kein Implementierungsbranch.

## Kleinstmöglicher Implementierungsscope

Der erste Slice soll nur die operatorgestützte Vorschlagslogik und ihre Contracts enthalten:

- `RegionalMatchCandidate` als interner Vorschlag, nie als öffentliche Wahrheit;
- deterministische Eignung nur aus zulässigen Feldern wie Region, gewünschter Beteiligung und optionalem Thema;
- `matchingConsent` als hartes Eingangsgate;
- keine exakte Privatadresse als Matchschlüssel;
- keine politische Profilbildung oder Gewichtung;
- kein automatisches `introduced`;
- beiderseitige explizite Zustimmung vor jeder kontrollierten Vorstellung;
- `RegionalCircle` erst nach bestätigter Zusammenarbeit mehrerer Personen und mindestens zwei benannten Gastgebern/Ansprechpersonen;
- klare Nicht-Repräsentativitätskennzeichnung.

## Empfohlene Statusfamilien

### RegionalInterestReview

- `new`
- `reviewed`
- `closed`

### MatchProposal

- `candidate`
- `match_proposed`
- `introduction_pending`
- `introduced`
- `cancelled`
- `expired`

### RegionalCircle

- `forming`
- `active`
- `paused`
- `closed`

Keine dieser Klassen darf automatisch Mitgliedschaft, öffentliche Vertretung oder politische Position erzeugen.

## Serverseitige Invarianten

- Consent-, Actor-, Region-, Visibility- und Lifecycle-Wahrheit ausschließlich serverseitig;
- widerrufener, gelöschter oder abgelaufener Interest ist nicht matchfähig;
- einseitige Zustimmung reicht nie für Einführung;
- gleiche Person darf nicht gegen sich selbst gematcht werden;
- blockierte/gesperrte Beziehungen fail-closed;
- fremde Interest-/Match-/Circle-IDs sind nicht lesbar oder manipulierbar;
- keine Kontaktdaten in ungeprüfter E-Mail oder öffentlichem Payload;
- kein Auto-Handoff zu eDebatte;
- kein Auto-Publish und keine öffentliche Such-/Indexierbarkeit;
- keine Repräsentativitätsbehauptung.

## Pflicht-Fixtures und Gegenproben

Mindestens:

1. zwei passende Interests in gleicher Region, beide mit Matching-Einwilligung → nur `candidate`;
2. fehlendes `matchingConsent` → kein Candidate;
3. widerrufener Interest → kein Candidate;
4. abgelaufener/gelöschter Interest → kein Candidate;
5. gleiche Region, aber inkompatible gewünschte Beteiligung → kein stilles Match;
6. gleiche Person / doppelte Identität → kein Self-Match;
7. einseitige Zustimmung → `introduction_pending`, keine Kontaktweitergabe;
8. beiderseitige Zustimmung → kontrollierte Introduction darf vorbereitet werden;
9. Region-Mismatch → fail-closed;
10. manipulierte Actor-/Moderator-/Consent-Felder aus Request → ignorieren/ablehnen;
11. fremde Match-ID → 404/deny ohne Datenleck;
12. Circle mit nur einer verantwortlichen Person → nicht aktivierbar;
13. Circle mit mindestens zwei bestätigten Verantwortlichen → `forming`, nicht automatisch öffentlich;
14. keinerlei Chat-, Meetup-, Publish- oder eDebatte-Handoff-Erfolgspfad in diesem Slice.

## Systemtest-Matrix

Vor Review auf demselben Exact Head:

- Contract-/Schema-Tests;
- negative Consent-/Visibility-/IDOR-/Spoofing-Gegenproben;
- Retention-/Widerruf-/Löschpfade;
- Datenisolation zwischen unterschiedlichen Interessen/Regionen;
- deterministische fail-closed/degraded/error states;
- keine automatische Kontaktvermittlung oder öffentliche Projektion;
- kein zweiter Messaging-/Conversation-Kern;
- Typecheck, Lint, Build und repositoryeigene Security-/CI-Gates;
- `node scripts/codex-preflight.mjs --strict` grün;
- Exact-Head GitHub CI und Vercel Preview, sofern für den PR erzeugt;
- keine offenen Reviewthreads;
- Mobile/Tastatur/Screenreader/200-%-Zoom/Mehrsprachigkeit/RTL zusätzlich, sobald der Slice UI enthält.

## Nicht-Ziele

- kein MemberRegionHub (#10);
- kein Chat (#11);
- kein Meetup Planner (#12);
- kein regionaler E2E-Abschluss (#13);
- kein Social-/Messaging-Neubau;
- keine automatische Einführung;
- keine Provideraktivierung oder externen Nachrichten;
- kein Production-Deployment.

## Nächster zulässiger Schritt

Issue #9 kann nach dokumentiertem Dependency-Abgleich aus `blocked` in einen Preflight-bereiten Zustand überführt werden. Erst nach einem real ausgeführten grünen `node scripts/codex-preflight.mjs --strict` auf aktuellem `main` und erneutem Branch-/PR-Duplikatcheck darf exakt ein Implementierungsbranch für den kleinen Contract-/Review-Slice entstehen.
