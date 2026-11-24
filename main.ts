// Say What Actually Broke — entry for make.fun u-po-pu-say-what-actually-broke-a2c153b5
// Writes one line of software error copy (at most 200 characters) to /output/entry.txt:
// it tells the user the brutal truth about the failure, and makes them laugh.

import { mkdirSync, writeFileSync } from "node:fs";

// The joke is the confession: the outage has a named culprit — a log
// retention setting from 2019 — and the fix is already in progress,
// so the user gets the truth, the blame, and a time to come back.
const LINE =
  "Error 503: our database is full. Someone set the logs to 'keep forever' in 2019. We're deleting them now — retry in 5 minutes.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
