/**
 * @generated SignedSource<<cb302fe14428e1ac965d0e91a0136405>>
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
  readonly charm: number;
  readonly cunning: number;
  readonly finesse: number;
  readonly id: string;
  readonly luck: number;
  readonly might: number;
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"UpdateVagabondStatsDialog_vagabond">;
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
      "name": "charm",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cunning",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "finesse",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "luck",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "might",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "availablePoints",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "UpdateVagabondStatsDialog_vagabond"
    }
  ],
  "type": "Vagabond",
  "abstractKey": null
};

(node as any).hash = "f21fcc6dd9b6339772267972ed0eba1f";

export default node;
