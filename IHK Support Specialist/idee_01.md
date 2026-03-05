# Analyse eines Anmeldeproblems in der Domäne

Präsentation von: [Dein Name]  
Datum: [Prüfungsdatum]  
Zielgruppe: IT-Support / IT-Administratoren  

---

# Ausgangslage

- Montag, 09:10 Uhr  
- Benutzer meldet: „Anmeldung nicht möglich“  
- Fehlermeldung: „Benutzerkonto gesperrt“  
- Betroffen: 1 Mitarbeiter (Vertrieb)  
- Impact: Kein Zugriff auf ERP, Outlook, Netzlaufwerke  

Artefakt:  
[Screenshot: Windows-Anmeldefehler]

---

# Ziel & Scope

Ziel:
- Ursache identifizieren  
- Benutzer arbeitsfähig machen  
- Wiederholung vermeiden  

Scope:
- Client & Active Directory  
- Keine Server-Störung  

---

# Systematischer Analyseansatz

Hypothesen:
1. Passwort falsch
2. Konto gesperrt
3. Domänenproblem
4. Netzwerkproblem

Vorgehen:
- Lokale Anmeldung testen
- Netzwerkverbindung prüfen
- AD prüfen

---

# Diagnose

- Netzwerkverbindung OK
- Andere Benutzer können sich anmelden
- AD Users & Computers:
  → Konto gesperrt  
  → Mehrere Fehlversuche registriert  

Artefakt:  
[Screenshot: AD-Konto „Account locked“]

---

# Root Cause

- Benutzer hatte Passwort kürzlich geändert
- Smartphone-Mail-App nutzte altes Passwort
- Mehrere Fehlversuche → automatische Kontosperrung

---

# Lösung

- Konto entsperrt
- Benutzer informiert
- Passwort auf mobilen Geräten aktualisiert

---

# Validierung

- Erfolgreiche Anmeldung
- Zugriff auf ERP und Outlook getestet
- Keine weiteren Fehlversuche im AD-Log

---

# Dokumentation & Prävention

- Ticket dokumentiert
- Hinweis an Benutzer: Passwort überall aktualisieren
- Empfehlung: Account-Lockout-Policy prüfen

---

# Fazit

- Problem in 15 Minuten gelöst
- Strukturierte AD-Prüfung entscheidend
- Kleine Ursache, große Wirkung
- Benutzer wieder voll arbeitsfähig

---

# Artefakt-Übersicht

| Folie | Artefakt |
|-------|----------|
| 2 | Login-Fehlermeldung |
| 5 | AD-Kontosperrung |