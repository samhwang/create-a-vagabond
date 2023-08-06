/**
 * @generated SignedSource<<d54aada5bd49e8bd3cf0a6e7e229295b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AvailableEquipmentListItem_equipment$data = {
  readonly id: string;
  readonly load: number;
  readonly maxWear: number;
  readonly name: string;
  readonly value: number;
  readonly " $fragmentType": "AvailableEquipmentListItem_equipment";
};
export type AvailableEquipmentListItem_equipment$key = {
  readonly " $data"?: AvailableEquipmentListItem_equipment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AvailableEquipmentListItem_equipment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AvailableEquipmentListItem_equipment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "load",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "value",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "maxWear",
      "storageKey": null
    }
  ],
  "type": "Equipment",
  "abstractKey": null
};

(node as any).hash = "bcb530782a9dfabeabcf6b026e29a700";

export default node;
