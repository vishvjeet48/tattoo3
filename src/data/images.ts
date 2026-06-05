/** Reliable Pexels CDN URLs — Unsplash links were returning 404 in this environment. */
export function pexels(id: number, width = 600, height?: number) {
  const h = height ? `&h=${height}` : ""
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}${h}&fit=crop`
}

export const IMAGES = {
  about: pexels(1803984, 700, 800),
  artists: {
    arjun: pexels(1181686, 400, 500),
    priya: pexels(1181519, 400, 500),
    vikram: pexels(2379004, 400, 500),
    ananya: pexels(774909, 400, 500),
  },
  styles: {
    realism: pexels(5990611, 800, 900),
    blackwork: pexels(842571, 600, 700),
    traditional: pexels(3992874, 600, 800),
    neoTraditional: pexels(3250429, 600, 600),
    japanese: pexels(3992875, 900, 600),
    fineLine: pexels(3998388, 600, 600),
    geometric: pexels(373835, 600, 600),
    tribal: pexels(1955134, 600, 700),
    portrait: pexels(3993442, 600, 900),
    watercolor: pexels(3993212, 800, 600),
  },
  gallery: [
    pexels(5990611, 600, 800),
    pexels(3992875, 600, 600),
    pexels(842571, 600, 900),
    pexels(3250429, 600, 750),
    pexels(3998388, 600, 500),
    pexels(3993212, 600, 700),
    pexels(373835, 600, 650),
    pexels(3993442, 600, 550),
    pexels(3992874, 600, 800),
    pexels(1955134, 600, 700),
    pexels(1803984, 600, 600),
    pexels(3992876, 600, 450),
  ],
  beforeAfter: {
    before1: pexels(1181244, 800, 600),
    after1: pexels(5990611, 800, 600),
    before2: pexels(1181690, 800, 600),
    after2: pexels(3992874, 800, 600),
  },
  avatars: {
    rohan: pexels(91227, 100, 100),
    kavya: pexels(1462630, 100, 100),
    aditya: pexels(1681010, 100, 100),
    meera: pexels(1181519, 100, 100),
    siddharth: pexels(1181686, 100, 100),
    divya: pexels(774909, 100, 100),
  },
  studio: [
    pexels(1803984, 600, 400),
    pexels(373835, 600, 400),
    pexels(1955134, 600, 400),
    pexels(3992876, 600, 400),
  ],
  instagram: [
    pexels(5990611, 400, 600),
    pexels(3992875, 400, 500),
    pexels(842571, 400, 550),
    pexels(3250429, 400, 600),
    pexels(3998388, 400, 500),
    pexels(3993212, 400, 600),
    pexels(373835, 400, 550),
    pexels(3993442, 400, 500),
  ],
} as const
