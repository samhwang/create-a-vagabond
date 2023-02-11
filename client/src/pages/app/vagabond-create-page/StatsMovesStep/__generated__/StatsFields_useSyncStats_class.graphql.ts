/**
 * @generated SignedSource<<b255c4f33b0300b540f4e74ad8511f36>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StatsFields_useSyncStats_class$data = {
  readonly startingCharm: number;
  readonly startingCunning: number;
  readonly startingFinesse: number;
  readonly startingLuck: number;
  readonly startingMight: number;
  readonly startingValue: number;
  readonly " $fragmentType": "StatsFields_useSyncStats_class";
};
export type StatsFields_useSyncStats_class$key = {
  readonly " $data"?: StatsFields_useSyncStats_class$data;
  readonly " $fragmentSpreads": FragmentRefs<"StatsFields_useSyncStats_class">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StatsFields_useSyncStats_class",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "startingCharm",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "startingCunning",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "startingFinesse",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "startingLuck",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "startingMight",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "startingValue",
      "storageKey": null
    }
  ],
  "type": "VagabondClass",
  "abstractKey": null
};

(node as any).hash = "f2bd63ff21967ebe49e0169fa3de2b67";

export default node;
