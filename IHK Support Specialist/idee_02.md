# Drucker druckt nicht – Analyse und Lösung

Präsentation von: [Dein Name]  
Datum: [Prüfungsdatum]  

---

# Ausgangslage

- Buchhaltung meldet: „Drucker reagiert nicht“
- Netzwerkdrucker
- 5 Benutzer betroffen

---

# Erste Einschätzung

Hypothesen:
- Drucker offline
- Netzwerkproblem
- Warteschlange blockiert
- Treiberproblem

---

# Diagnose Schritt 1

- Ping auf Drucker-IP → Erfolgreich
- Webinterface erreichbar
- Status: „Bereit“

→ Kein Netzwerkproblem

---

# Diagnose Schritt 2

- Druckwarteschlange geprüft
- Mehrere hängende Jobs
- Ein Dokument blockiert Queue

Artefakt:  
[Screenshot: Druckwarteschlange blockiert]

---

# Root Cause

- Fehlerhaftes PDF-Dokument
- Druckdienst konnte Job nicht verarbeiten
- Warteschlange blockiert

---

# Lösung

- Druckaufträge gelöscht
- Dienst „Print Spooler“ neu gestartet
- Testseite gedruckt

---

# Validierung

- Testdruck erfolgreich
- Benutzer bestätigen Funktion

---

# Dokumentation & Prävention

- Ticket dokumentiert
- Hinweis an User: Problem-PDF melden
- Monitoring der Queue empfohlen

---

# Fazit

- Problem in 20 Minuten gelöst
- Systematisches Ausschließen entscheidend
- Kein Hardwaredefekt