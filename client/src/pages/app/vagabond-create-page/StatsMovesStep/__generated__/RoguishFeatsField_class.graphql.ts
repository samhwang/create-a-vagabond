/**
 * @generated SignedSource<<c7930768607af86a08819ad61b39767f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RoguishFeatsField_class$data = {
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"RoguishFeatsField_useSyncFeats_class">;
  readonly " $fragmentType": "RoguishFeatsField_class";
};
export type RoguishFeatsField_class$key = {
  readonly " $data"?: RoguishFeatsField_class$data;
  readonly " $fragmentSpreads": FragmentRefs<"RoguishFeatsField_class">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RoguishFeatsField_class",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RoguishFeatsField_useSyncFeats_class"
    }
  ],
  "type": "VagabondClass",
  "abstractKey": null
};

(node as any).hash = "b9c733125c9f6195d875918e885266b8";

export default node;
