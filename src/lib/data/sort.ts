import type { Nolytics } from "./schema";

export default function (nolytics: Nolytics): Nolytics {
    return {
        hitsSummary: nolytics.hitsSummary.sort((a, b) => -(a.hitsCount - b.hitsCount)),
        visitorsSummary: nolytics.visitorsSummary,
    };
}