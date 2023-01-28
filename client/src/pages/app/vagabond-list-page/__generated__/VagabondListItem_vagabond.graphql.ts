/**
 * @generated SignedSource<<5a1b7ee949088921e5428826cbdc6dc4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type VagabondListItem_vagabond$data = {
  readonly availablePoints: number;
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "VagabondListItem_vagabond";
};
export type VagabondListItem_vagabond$key = {
  readonly " $data"?: VagabondListItem_vagabond$data;
  readonly " $fragmentSpreads": FragmentRefs<"VagabondListItem_vagabond">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "VagabondListItem_vagabond",
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
      "name": "availablePoints",
      "storageKey": null
    }
  ],
  "type": "Vagabond",
  "abstractKey": null
};

(node as any).hash = "8be37d1d3180461ce5e651a0151397b0";

export default node;
