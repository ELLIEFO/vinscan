# VinScan — PWA

## Déploiement sur Vercel (5 min)

### Option A — Via GitHub (recommandé)

1. Crée un repo GitHub : `vinscan` (ou `wine-app`)
2. Upload tous les fichiers :
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `vercel.json`
   - `icons/icon-192.png`
   - `icons/icon-512.png`
3. Va sur [vercel.com](https://vercel.com), importe le repo
4. Deploy → c'est en ligne en 30 secondes

### Option B — Vercel CLI

```bash
npm i -g vercel
cd wine-app
vercel --prod
```

### Option C — Glisser-déposer sur Vercel

Sur [vercel.com/new](https://vercel.com/new), glisse le dossier entier.

---

## Installer comme app sur iPhone

1. Ouvre l'URL dans **Safari** (pas Chrome)
2. Appuie sur le bouton **Partager** (carré avec flèche)
3. Choisis **"Sur l'écran d'accueil"**
4. Nomme l'app **VinScan** → Ajouter

L'app apparaît sur ton écran d'accueil, se lance en plein écran sans barre Safari.

---

## Domaine personnalisé

Sur Vercel → Settings → Domains → Ajouter `vins.liefo.eu`
Puis chez Diogenius ajouter un CNAME : `vins` → `cname.vercel-dns.com`
