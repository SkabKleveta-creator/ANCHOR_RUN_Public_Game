# Anchor Run — GitHub Pages Deployment

## Recommended repository name

```text
ANCHOR_RUN_Public_Game
```

## Upload steps

1. Create a new GitHub repository.
2. Upload the contents of this package into the repository root.
3. Confirm `index.html` is at the repository root, not inside a nested folder.
4. Confirm `.nojekyll` is present at the repository root.
5. Commit the files to `main`.
6. Open repository **Settings → Pages**.
7. Set source to **Deploy from a branch**.
8. Select branch `main` and folder `/root`.
9. Save.
10. Wait for GitHub Pages to publish.

## Expected URL

```text
https://skabkleveta-creator.github.io/ANCHOR_RUN_Public_Game/
```

If the repository is named differently, replace the last path segment with the actual repository name.

## Common mistakes

- Uploading the ZIP file instead of the extracted files.
- Putting files inside an extra folder layer.
- Forgetting `.nojekyll`.
- Expecting the page to update instantly; GitHub Pages can take a few minutes.
- Testing only desktop and skipping mobile acceptance.
