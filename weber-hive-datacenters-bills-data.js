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
    summary: "The sales tax exemption that built Utah's data center industry. No jobs, wage, or investment requirement to qualify — retroactive to 2016 — passed unanimously with a fiscal note that called the cost 'unknown' and required no performance tracking.",
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
    title: "The Deal That Started With a Fake Name — Meta's Eagle Mountain Campus",
    presenter: "The Weber County Hive — Investigation",
    date: "2026-09-14",
    hearing: "Eagle Mountain City / Alpine School Board, 2018-2026",
    summary: "Facebook negotiated its first Eagle Mountain data center in 2018 as 'Stadion, LLC,' before its name was public, and the Alpine School Board had about five days to review the incentive. Eight years, four expansions and $3 billion later, a 2018 agreement still requires the city to alert Meta before releasing the campus's water-use records.",
    tags: ["Meta", "Eagle Mountain", "Stadion", "water confidentiality", "QTS", "Project Aquila", "Hemmert", "2018-2026"],
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
    title: "The Plant Not in the Announcement — Meta's Eagle Mountain Gas Plant",
    presenter: "The Weber County Hive — Case File",
    date: "2026-09-23",
    hearing: "PSC Docket 26-035-01 · on hold since July 8, 2026",
    summary: "Meta says its Eagle Mountain campus is matched with 100% clean energy. City, air-quality and Public Service Commission filings show a Williams natural gas plant of up to 286 MW planned for Meta's land, separate from Rocky Mountain Power, with Meta guaranteeing the contract. Covers the tax breaks, water rules, jobs, 2024 energy use and who decides next.",
    tags: ["Meta", "Project Aquila", "Williams", "SB 132", "PSC", "DAQ", "HB 76", "Eagle Mountain", "2026"],
    status: "live",
    page: "meta-eagle-mountain-gas-plant.html"
  }
];
