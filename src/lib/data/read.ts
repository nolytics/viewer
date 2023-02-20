import type { Nolytics } from "./schema";


export default function (): Promise<Nolytics> {
    return fetch('json/nolytics.json').then((x) => x.json());
}