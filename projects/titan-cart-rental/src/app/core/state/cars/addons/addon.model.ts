export interface Addon {
  itemid: string;
  idescription: string;
  u_units: string;
  isale: string;
  icurrency: string;
  ldescription: string;
  image: string;
  added?: boolean;
}

export function createAddon(params: Partial<Addon>) {
  return {

  } as Addon;
}
