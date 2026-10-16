# Stock Signals landing page

Static landing page for `https://manimaustudios.com/stocksignals/app/`.
Open `index.html` directly or serve the repository root with `python3 -m http.server 8080`, then visit `/stocksignals/app/`.
No install or build step is required. The page uses local assets, system fonts, inline SVG icons, and native HTML FAQ disclosures; all content and navigation work without JavaScript.

- `index.html`: page content, App Store destination, metadata, support and policy links.
- `css/style.css`: responsive navy/mint design; reduced-motion and keyboard-focus support.
- `js/main.js`: copyright year only.
- `img/app-icon.webp` and `img/apple-touch-icon.png`: copies of the app's icon.
- `img/screens/chart.webp` and `img/screens/insider.webp`: actual simulator screen captures from the updated iPhone app, captured 16 October 2026. The original simulator chrome is hidden by the `.phone` CSS frame. Chart data is historical; Insider Flow visibly shows the free demo. These are product previews, not live data or performance endorsements.

App features and wording were checked against the read-only reference project at `/Users/palrasa/StockSignals_Codex_Latest_1.8/stocks-signals`, especially `HelpGuideScene.swift`, `HomeScene.swift`, `NotificationService.swift`, and `docs/trading-chart.md`. No files in that project were changed.

The App Store destination (`id1611955892`) comes from the app's `Configs.swift`. Its current store name is “Autopilot AI Stocks Alerts”; the on-page FAQ explains this naming difference. Plan prices and ratings are intentionally not embedded so the page does not present stale values.

Existing unused template libraries and images are retained for compatibility; this page does not load them. Publish through the existing repository's hosting workflow. This update does not create a separate hosted Site.

Additional previews: `img/screens/stocks.webp` shows the actual free Stock Signals view (premium symbols locked); `img/screens/political.webp` shows the actual labeled Political Flow demo. Captured from the same running app on 16 October 2026 without changing source app files.

## Edited marketing previews

The landing page now uses `stocks-preview.webp`, `political-preview.webp`, and `insider-preview.webp`. These were edited with the built-in ImageGen tool from the retained original screenshots. The stock image replaces locked symbols with illustrative tickers and replaces performance/income marketing text with feature descriptions. The political and insider images remove the in-app demo banner. Website captions identify these as edited or illustrative previews with sample data; none is represented as a live feed or an actual unlocked screenshot. The original images remain available for comparison.

Exact prompts and original generated artifact paths are recorded in `img/screens/preview-edits.json`. No reference-project files were changed.

The current stock preview is `stocks-preview-v2.webp`: MU, MSFT, SNDK, NBIS, and AMZN. All five entry references use 15 October 2026 closing prices from Stock Analysis. Sell targets are computed from hypothetical percentage scenarios and rounded to cents; displayed percentages agree to two decimals. Sources, precise values, formula and ImageGen prompt are recorded in `img/screens/stock-prices-v2.json`. Previous preview is retained.
