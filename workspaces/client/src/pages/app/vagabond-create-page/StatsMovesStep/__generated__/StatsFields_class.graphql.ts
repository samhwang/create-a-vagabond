/**
 * @generated SignedSource<<b86bc5526ccffc04c0fbdde908be1e63>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StatsFields_class$data = {
  readonly startingCharm: number;
  readonly startingCunning: number;
  readonly startingFinesse: number;
  readonly startingLuck: number;
  readonly startingMight: number;
  readonly " $fragmentSpreads": FragmentRefs<"StatsFields_useSyncStats_class" | "useStartingPointLeft_class">;
  readonly " $fragmentType": "StatsFields_class";
};
export type StatsFields_class$key = {
  readonly " $data"?: StatsFields_class$data;
  readonly " $fragmentSpreads": FragmentRefs<"StatsFields_class">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StatsFields_class",
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "useStartingPointLeft_class"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "StatsFields_useSyncStats_class"
    }
  ],
  "type": "VagabondClass",
  "abstractKey": null
};

(node as any).hash = "87f943991f870d29cada5482e740cbcc";

export default node;
