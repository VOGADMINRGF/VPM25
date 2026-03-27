# VoiceOpenGov Initiative Site – Decision Matrix (2026-03-27)

## Ziel

Diese Datei hält die inhaltlichen Entscheidungen fest, die vor der Frontend-Umsetzung der Initiative-Seite getroffen wurden.

Sie soll Drift zwischen Doku, Content, Home-Wording und späteren Codex-/Frontend-Slices vermeiden.

---

## Fest entschiedene Punkte

### 1) Phase-1-Scope
- VoiceOpenGov soll vor allem **erklären, was es ist und wofür es steht**.
- Öffentliche Anlassraum-Einreichung soll **auf eDebatte verlinken**.
- Interne Beteiligung von Mitgliedern zu Veranstaltungen, Treffen, Satzung und ähnlichen Themen ist sinnvoll, aber **nicht als offener öffentlicher Raum auf VOG**.

### 2) Markenlogik
- **VoiceOpenGov ist die Hauptmarke.**
- **eDebatte** wird als **Werkzeug / Infrastruktur** erklärt.
- VOG ist die Initiative, der öffentliche Rahmen und die größere gesellschaftliche Erzählung.

### 3) Leitclaim
- Kernclaim: **„Initiative für nachvollziehbare öffentliche Evidenz und Beteiligung“**

### 4) Direktdemokratie
- Direktdemokratie soll **klar, prominent und selbstbewusst** sichtbar sein.
- Nicht defensiv, nicht versteckt, aber strukturell und ernsthaft eingebettet.

### 5) Stiftungsperspektive
- Zielbild klar benennen.
- Formulierung: **Sobald Mittel und Strukturen tragfähig sind, gründen wir eine Stiftung.**
- Die Stiftungsperspektive dient der Unabhängigkeit von Lobby-, Einzel- und Exit-Interessen.
- Langfristig soll die Stiftungsperspektive durch Einnahmen aus eDebatte stabil mitgetragen werden können.

### 6) Rechts- und Finanzlage heute
- aktuell **keine Gemeinnützigkeit**
- aktuell **private Initiative**
- **„Spende“ nein**
- **„Unterstützung“ ja**
- **„Mitgliedschaft“ ja**
- **„Förderbeitrag“ nein** (auch wenn die Mitgliedschaft einen ähnlichen Charakter haben kann)
- **kein öffentliches Konto** auf der Website
- Bankdaten nur **auf Nachfrage / nach Mitgliedschaftsantrag per Mail**
- keine Spendenquittung / keine gemeinnützige Zuwendungsbestätigung suggerieren

### 7) Primärer CTA
- Haupt-CTA: **Unterstützen**

### 8) Welt-/International-Frame
- Zielbild ist international und grenzüberschreitend offen.
- Für die Website gilt ein **Hybrid aus A und C**:
  - **weltweit offen und anschlussfähig** als Anspruch,
  - aber ohne die operative Basis künstlich größer darzustellen als sie heute ist.
- Empfohlenes Wording: **„grenzüberschreitend gedacht, konkret aufgebaut“** oder **„weltweit offen, lokal anschlussfähig“**.

### 9) RePro auf der Website
- **kein prominenter Fachbegriff als Einstieg**
- stattdessen zuerst die **verständliche Logik** erklären:
  - Check
  - Dossier
  - Beteiligung
  - Status
- RePro kann später in Grundlagen / tieferen Erklärseiten auftauchen.

### 10) Umsetzungsweg
- bevorzugt **direkt im Repo**, wenn sauber und ohne unnötigen Drift umsetzbar
- Codex optional später für klar abgegrenzte Frontend-Slices

---

## Weitere inhaltliche Leitplanken

### Mitgliederlogik
- Mitgliederräume sind **intern**.
- Öffentliche Verdichtung nur:
  - datenschutzsauber,
  - aggregiert,
  - erst ab einer belastbaren Mindestzahl an Rückmeldungen.

### Beispiel-/Demo-Logik
- **kein künstlicher Demo-Anlassraum** auf der VOG-Seite.
- Stattdessen: Brücke von VOG zur Rolle von eDebatte.
- Das Warum liegt bei VoiceOpenGov, das praktische Wie bei eDebatte.

### Tonalität
- **bürgernah und kraftvoll**
- nicht schrill, nicht technokratisch, nicht weichgespült
- konstruktiv, aber mit klarer Kritik an Nebel, Lautstärke und Scheindebatten

### Zielgruppen zuerst
1. Bürger
2. Förderer / Unterstützer
3. Initiativen

---

## Konsequenzen für die Frontend-Umsetzung

### Sofort umsetzbar
- Erklärseite zu **VoiceOpenGov als Initiative / Bewegung**
- Erklärseite zu **eDebatte als Werkzeug / Informationsarchitektur**
- Home-Wording später daran angleichen
- Unterstützen-Abschnitt rechtlich und sprachlich schärfen

### Nicht suggerieren
- keine gemeinnützige Struktur
- keine Spendenquittungen
- keine fertige Stiftung
- kein öffentliches Konto
- keine künstliche Öffentlichkeit für interne Mitgliederdiskussionen

---

## Empfohlene nächste Frontend-Slices

1. `/howtoworks/bewegung` als klare Initiative-Seite
2. `/howtoworks/edebatte` als Werkzeug-/Architektur-Seite
3. Home-Hero und CTA-Reihenfolge auf diese Entscheidungen angleichen
4. Unterstützen-Section sprachlich und rechtlich härten
5. optional später: eigene Stiftungsperspektive-Seite
