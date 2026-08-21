/**
 * Next.js instrumentation — register() runs ONCE per server instance.
 *
 * Arms the .next/cache prune. Nothing pruned this app before, so the image
 * and fetch caches grew without any cap on a plan whose inodes sit at ~70%
 * of its 3M ceiling.
 *
 * The prune lives in a SEPARATE module, dynamically imported inside the
 * nodejs guard: instrumentation is compiled for the Edge runtime too, and a
 * top-level `node:fs` import here would break that bundle.
 */
export async function register(): Promise<void> {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;
  const { startCachePrune } = await import("./lib/cache-prune");
  startCachePrune();
}
