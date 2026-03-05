# VPN-Verbindung schlägt fehl – Analyse

Präsentation von: [Dein Name]

---

# Ausgangslage

- Außendienst meldet: „VPN verbindet nicht“
- Fehlermeldung: „Authentifizierung fehlgeschlagen“

---

# Analyseansatz

Hypothesen:
- Falsches Passwort
- MFA-Problem
- Server nicht erreichbar
- Zertifikat abgelaufen

---

# Diagnose

- Internet beim User funktioniert
- VPN-Server pingbar
- Logfile zeigt: „Credential rejected“

---

# Root Cause

- Passwort kürzlich geändert
- VPN-Client speichert altes Passwort

---

# Lösung

- Gespeicherte Credentials gelöscht
- Neue Anmeldung durchgeführt

---

# Validierung

- VPN-Tunnel aufgebaut
- Zugriff auf Fileserver getestet

---

# Dokumentation & Prävention

- Ticket dokumentiert
- Hinweis: Passwortänderung auch im VPN-Client aktualisieren
- Anleitung erstellt

---

# Fazit

- Problem schnell eingegrenzt
- Client-seitige Ursache
- Benutzer arbeitsfähig