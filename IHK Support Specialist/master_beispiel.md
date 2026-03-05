# Analyse und Lösung eines DNS-Auflösungsproblems in der Buchhaltung

**Präsentation von:** [Dein Name]  
**Datum:** [Prüfungsdatum]  
**Zielgruppe:** IT-Administratoren  

---

# Ausgangslage: Buchhaltung kann nicht arbeiten

- Montagmorgen, 08:15 Uhr: Mehrere Tickets aus der Buchhaltung  
- Symptom: ERP-System „nicht erreichbar"  
- Betroffen: 8 von 12 Arbeitsplätzen  
- Impact: Rechnungsstellung und Mahnwesen blockiert  
- Dringlichkeit: Hoch (Monatsabschluss)

**Artefakt (Platzhalter):**  
`[Screenshot: Ticket mit Fehlermeldung „Server nicht gefunden"]`

---

# Systematische Analyse: Wo liegt das Problem?

- Hypothese 1: ERP-Server ist down  
- Hypothese 2: Netzwerkverbindung unterbrochen  
- Hypothese 3: DNS-Auflösung funktioniert nicht  
- Vorgehen: Analyse entlang des OSI-Modells (Bottom-up)  
- Erste Tests:
  - `ping <Server-IP>`
  - `ping <Server-Name>`

**Artefakt (Platzhalter):**  
`[Diagramm: Troubleshooting-Workflow / OSI-Layer-Übersicht]`

---

# Diagnose: Was funktioniert, was nicht?

- `ping 192.168.1.50` → Erfolgreich  
- `ping erp-server.firma.local` → Fehlgeschlagen  
- Erkenntnis: IP erreichbar, DNS-Auflösung fehlerhaft  
- `nslookup erp-server.firma.local` → Timeout  
- `ipconfig /all` → DNS-Server: 192.168.1.5  

**Artefakt (Platzhalter):**  
`[Screenshot: nslookup-Output mit Timeout]`

---

# Ursache gefunden: Falscher DNS-Server

- Root Cause: DHCP-Scope mit falschem DNS-Server konfiguriert  
- Änderung am Freitag: Neuer DNS 192.168.1.10 eingeführt  
- Alter DNS 192.168.1.5 wurde abgeschaltet  
- DHCP-Scope nicht aktualisiert  
- Funktionierende Clients:
  - Statische IP  
  - Lease nicht erneuert  

**Artefakt (Platzhalter):**  
`[Screenshot: DHCP-Scope mit markierter DNS-Einstellung]`

---

# Lösung: DHCP korrigiert, Clients aktualisiert

- DHCP-Scope auf 192.168.1.10 geändert  
- Betroffene Clients:
  - `ipconfig /release`
  - `ipconfig /renew`
- Alternativ: Neustart  
- Validierung:
  - `nslookup erp-server.firma.local` → Erfolgreich  
- Ergebnis: Alle 8 Clients wieder arbeitsfähig  

**Artefakt (Platzhalter):**  
`[Screenshot: Erfolgreicher nslookup]`

---

# Dokumentation und Maßnahmen zur Prävention

- Ticket-Dokumentation:
  - Symptom
  - Diagnose
  - Root Cause
  - Lösung
- Knowledge-Base-Eintrag erstellt  
- Prävention:
  - Change-Prozess: DHCP bei DNS-Änderung prüfen  
  - Monitoring: Alert bei DNS-Nichterreichbarkeit  
  - Kommunikation an IT-Team  

**Artefakt (Platzhalter):**  
`[Screenshot: KB-Eintrag oder Ticket-Abschluss]`

---

# Fazit: Systematik zahlt sich aus

- Problem in 45 Minuten gelöst  
- Strukturiertes Vorgehen (OSI-Modell) spart Zeit  
- Lesson Learned: Infrastrukturänderungen ganzheitlich betrachten  
- Ergebnis: Monatsabschluss termingerecht möglich  

**Ich freue mich auf Ihre Fragen!**

---

# Artefakt-Übersicht

| Folie | Artefakt | Beschreibung |
|-------|----------|--------------|
| 2 | Ticket-Screenshot | Fehlermeldung „Server nicht gefunden" |
| 3 | Troubleshooting-Workflow | OSI-Layer / Hypothesen-Diagramm |
| 4 | nslookup-Output | Timeout-Fehlermeldung |
| 5 | DHCP-Scope | DNS-Server-Einstellung markiert |
| 6 | nslookup erfolgreich | Nachweis der Lösung |
| 7 | KB-Eintrag / Ticket | Dokumentation |