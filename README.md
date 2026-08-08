# emberpos.net

The public website for **Ember POS**, a point-of-sale app for small cafes and
restaurants in the Philippines. Served by GitHub Pages at
[emberpos.net](https://emberpos.net).

This repository holds only the built, published site. The app's source code
lives elsewhere and is not public.

## What is here

| Path | What it is |
|------|------------|
| `index.html` | The landing page |
| `app/` | The **web back office**: the app itself, built for browsers. Owners manage menu, stock, reports and staff from a computer. No POS or Kitchen screen here on purpose; selling happens in the phone app. |
| `order.html` | The guest self-order page a customer lands on after scanning a table QR code |
| `privacy-policy.html`, `account-deletion.html`, `reset-password.html`, `help.html` | Required by Google Play and linked from inside the app. **These paths must never change.** |
| `shots/`, `fonts/`, `logo.png`, `favicon.png` | Assets for the landing page |
| `404.html` | Branded not-found page |
| `CNAME` | Tells GitHub Pages the custom domain. Deleting it breaks the domain. |
| `.nojekyll` | Stops GitHub from running Jekyll, which would drop files whose names begin with an underscore |

## Rules

- **Do not rename or delete the legal pages.** Google Play links to
  `privacy-policy.html` and `account-deletion.html`, and the app itself links
  to `reset-password.html`. A 404 on those can get the app pulled.
- **Do not hand-edit `app/`.** It is generated. Rebuild it from the app source
  with the back-office build command, then copy `dist-web` over it.
- `CNAME` and `.nojekyll` must survive every update.

## Updating

Replace the changed files, then:

```bash
git add -A
git commit -m "Update site"
git push
```

GitHub Pages redeploys in about a minute.
