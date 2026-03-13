# Aufsetzten der Umbgebung und weiter Downloads

## Neuen Projektordner einrichten mit venv und Jupyter NB ready

```bash

python3 -m venv venv

source venv/bin/activate

pip install --upgrade pip
pip install jupyter ipykernel

python -m ipykernel install --user --name venv --display-name "Python (venv)"



```

## requests Library runterladen

```bash
pip install requests
```

## fastapi runterladen

```bash
pip install "fastapi[standard]"

pip freeze > requirements.txt
```
