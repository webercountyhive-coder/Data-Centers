// Weber County Hive — Data Center Bills Docket data file
// Add one object per bill or case file. This file is ONLY for the bills docket.
// Bump the version query param in the docket HTML on every update.

const BILLS_DOCS = [
  {
    id: "sb114-2020",
    title: "S.B. 114 (2020) — The Exemption With No Jobs Requirement",
    presenter: "Sen. Kirk Cullimore (primary sponsor) & Rep. Mike Schultz (House sponsor)",
    date: "2020-03-31",
    hearing: "2020 General Session",
    summary: "S.B. 114 rewrote Utah's 2016 data center sales tax exemption and extended it to tenants who lease space inside a qualifying data center. No jobs, wage, or investment requirement to qualify. Passed unanimously, with a fiscal note listing the cost as 'an unknown amount' and no performance note.",
    tags: ["SB 114", "sales tax exemption", "no jobs required", "Cullimore", "Schultz", "2020"],
    status: "live",
    page: "weber-hive-dc-sb114.html"
  },
  {
    id: "hb77-2026",
    title: "H.B. 77 (2026) — Two Thresholds for Two Kinds of Property",
    presenter: "Rep. Steve Eliason (primary sponsor) & Sen. Daniel McCay (Senate sponsor)",
    date: "2026-03-23",
    hearing: "2026 General Session",
    summary: "A floor amendment widened the gap between when a home gets flagged for reassessment (150% value increase) and when any other property does (350%) — more than doubling the threshold for commercial property only, in a bill that started with both at the same level.",
    tags: ["HB 77", "property tax", "reassessment threshold", "Eliason", "McCay", "2026"],
    status: "live",
    page: "weber-hive-dc-hb77.html"
  },
  {
    id: "stratos-land-2026",
    title: "\"Do You Have The Land?\" — Stratos, MIDA, and Who Owns What Nearby",
    presenter: "The Weber County Hive — Investigation",
    date: "2026-04-24",
    hearing: "MIDA Board Approval, Apr 24, 2026",
    summary: "MIDA's board unanimously approved the 40,000-acre Stratos data center — chaired by the same Senate President Kevin O'Leary says was in a room a year earlier being asked 'Do you have the land?' Speaker Schultz's 25,000+ acres sit ten miles away; Sen. Sandall's land sits four miles away; both sponsored or chaired the mechanisms that made it possible.",
    tags: ["Stratos", "MIDA", "SB 132", "Schultz", "Sandall", "Adams", "land holdings", "2026"],
    status: "live",
    page: "weber-hive-dc-stratos-land.html"
  },
  {
    id: "meta-eagle-mountain-2026",
    title: "Meta in Eagle Mountain, Part 1 — The Deal That Started Under Another Name",
    presenter: "The Weber County Hive — Case File",
    date: "2026-09-23",
    hearing: "Eagle Mountain / Utah County / Alpine School Board, 2018–2026",
    summary: "In May 2018, local taxing bodies approved property tax breaks for a data center listed only as 'Stadion, LLC.' It was Facebook. Part 1 covers that deal, the tax breaks (up to $750 million by the city's estimate), 300 jobs, the 2018 water confidentiality agreement and the campus's 2024 power and water use.",
    tags: ["Meta", "Eagle Mountain", "Stadion", "tax breaks", "water confidentiality", "HB 76", "jobs", "2018-2026"],
    status: "live",
    page: "weber-hive-dc-meta-eagle-mountain.html"
  },
  {
    id: "hb507-2026",
    title: "H.B. 507 (2026) — The One-Year Gap",
    presenter: "Rep. Calvin Roberts (primary sponsor) & Sen. Kirk A. Cullimore (Senate sponsor)",
    date: "2026-05-06",
    hearing: "2026 General Session",
    summary: "H.B. 507 promises to restrict local tax incentives for the largest data centers in Utah — but its own restriction doesn't start until a full year after the law itself took effect, and any deal signed in that window is grandfathered permanently. Meta's latest Eagle Mountain expansion was announced squarely inside that gap.",
    tags: ["HB 507", "RSDZ", "tax increment financing", "Roberts", "Cullimore", "large load data center", "2026"],
    status: "live",
    page: "https://weber-county-hive.github.io/Bill-Tracker/weber-hive-hb507.html"
  },
  {
    id: "meta-aquila-2026",
    title: "Meta in Eagle Mountain, Part 2 — The Plant Not in the Announcement",
    presenter: "The Weber County Hive — Case File",
    date: "2026-09-23",
    hearing: "PSC Docket 26-2660-01 · on hold since July 8, 2026",
    summary: "Meta says its Eagle Mountain campus is matched with 100% clean energy. City, air-quality and Public Service Commission filings show a Williams natural gas plant of up to 286 MW planned for Meta's land, separate from Rocky Mountain Power, with Meta guaranteeing the contract. Covers the contract, the air permit, how the plant may be taxed and who decides next.",
    tags: ["Meta", "Project Aquila", "Williams", "SB 132", "PSC", "DAQ", "HB 76", "Eagle Mountain", "2026"],
    status: "live",
    page: "meta-eagle-mountain-gas-plant.html"
    },
  {
    id: "national-math-jobs-2026",
    title: "The National Math Behind Utah's Data Center Bets — and Who Works There",
    presenter: "The Weber County Hive — Case File",
    date: "2026-10-03",
    hearing: "Bain & Company Technology Report 2026 · GOED, EDWS Interim, Aug. 19, 2026",
    summary: "Bain says the AI buildout needs about $6 trillion a year in revenue by 2031, much of it from markets that don't exist yet. Utah's proposed campuses are sized at the top of that curve. GOED forecasts 2,000 to 3,250 permanent data center jobs statewide by 2030, and no Utah record reviewed reports how many of those workers are local.",
    tags: ["Bain", "jobs", "local hiring", "Stratos", "Creekstone", "QTS", "Meta", "SB 114", "EDTIF", "2026"],
    status: "live",
    page: "weber-hive-dc-national-math.html"
  }
];
