# Isabella Hamner Research Website

## Preview the site
Because the research page loads posts from a JSON file, preview it through a small local server rather than double-clicking the HTML file.

1. Open the website folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` and select **Open with Live Server**.

You can also upload the entire folder to GitHub Pages, Netlify, or another static host.

## Add your headshot
1. Save your photo inside the `assets` folder as `headshot.jpg`.
2. In `index.html`, find the block containing `portrait-placeholder`.
3. Replace that entire placeholder div with:

```html
<img src="assets/headshot.jpg" alt="Professional headshot of Isabella Hamner">
```

## Add your CV
Save the PDF as:

`assets/Isabella-Hamner-CV.pdf`

The existing CV buttons will then work automatically.

## Add another research post
Open `data/research-posts.json`. Copy the existing object, add a comma after the prior object, and edit the title, summary, image, tags, and link.

For a full project page, duplicate `research-ppid.html`, rename it, and replace the project text.

## Edit colors
Open `styles.css`. The main colors are defined at the top under `:root`. The CSU green currently used is `#1e4d2b`.

## Important first-draft checks
- Review the homepage biography and update your current major/program wording.
- Add your headshot and CV.
- Verify whether you want your CSU email displayed publicly.
- Add formal CSU trademark/brand assets only if you have permission to use them.
