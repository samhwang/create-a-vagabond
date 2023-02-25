/**
 * @generated SignedSource<<a3adfcd6c2c107b8884c0e6efbb2eefb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type VagabondUsedPointsResolver$data = {
  readonly charm: number;
  readonly cunning: number;
  readonly finesse: number;
  readonly luck: number;
  readonly might: number;
  readonly " $fragmentType": "VagabondUsedPointsResolver";
};
export type VagabondUsedPointsResolver$key = {
  readonly " $data"?: VagabondUsedPointsResolver$data;
  readonly " $fragmentSpreads": FragmentRefs<"VagabondUsedPointsResolver">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "VagabondUsedPointsResolver",
  "selections": [
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
    }
  ],
  "type": "Vagabond",
  "abstractKey": null
};

(node as any).hash = "eac956831c98c2e8f3604633d27fff34";

export default node;
