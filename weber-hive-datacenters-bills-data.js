// Weber County Hive — Data Center Bills Docket data file
// Add one object per bill. Bump the version query param in the docket HTML on every update.

const BILLS_DOCS = [
  {
    id: "sb114-2020",
    title: "S.B. 114 (2020) — The Exemption With No Jobs Requirement",
    presenter: "Sen. Kirk Cullimore (chief sponsor) & Rep. Mike Schultz (House sponsor)",
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
    presenter: "Rep. Steve Eliason (chief sponsor) & Sen. Daniel McCay (Senate sponsor)",
    date: "2026-03-23",
    hearing: "2026 General Session",
    summary: "A floor amendment quietly widened the gap between when a home gets flagged for reassessment (150% value increase) and when any other property does (350%) — more than doubling the threshold for commercial property only, in a bill that started with both at the same level.",
    tags: ["HB 77", "property tax", "reassessment threshold", "Eliason", "McCay", "2026"],
    status: "live",
    page: "weber-hive-dc-hb77.html"
  }
];
