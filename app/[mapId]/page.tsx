import { MAP_REGISTRY } from "@/data/registry";
import ClientPage from "./ClientPage";

export async function generateStaticParams() {
  return MAP_REGISTRY.map((mapData) => ({
    mapId: mapData.slug || mapData.id,
  }));
}

export default function Page({ params }: { params: Promise<{ mapId: string }> }) {
  return <ClientPage params={params} />;
}
