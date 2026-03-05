# Kein Internetzugang – Troubleshooting

Präsentation von: [Dein Name]  

---

# Ausgangslage

- Benutzer meldet: „Internet funktioniert nicht“
- Standort: Einzelbüro
- LAN-Verbindung

---

# Analyseansatz (OSI-Modell)

1. Physische Verbindung
2. IP-Konfiguration
3. Gateway
4. DNS
5. Externe Erreichbarkeit

---

# Diagnose Schritt 1

- Netzwerkkabel geprüft
- Link-LED aktiv
- ipconfig:

IP-Adresse: 169.254.x.x

---

# Erkenntnis

- APIPA-Adresse
- Kein DHCP-Lease erhalten

---

# Diagnose Schritt 2

- DHCP-Server erreichbar?
- Anderer PC funktioniert
- Switch-Port geprüft

---

# Root Cause

- Netzwerkkabel im Patchpanel falsch gesteckt
- Kein Kontakt zum richtigen VLAN

---

# Lösung

- Kabel korrekt gepatcht
- ipconfig /renew
- Gültige IP erhalten

---

# Validierung

- Ping Gateway → OK
- Ping 8.8.8.8 → OK
- Webseite erreichbar

---

# Fazit

- OSI-basierte Analyse spart Zeit
- Physische Ebene zuerst prüfen
- Problem in 25 Minuten gelöst