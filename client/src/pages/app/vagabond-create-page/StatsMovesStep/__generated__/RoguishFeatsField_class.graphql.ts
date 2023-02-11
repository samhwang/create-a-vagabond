/**
 * @generated SignedSource<<98d80376c1239f612091251e5f05a44a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RoguishFeatsField_class$data = {
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "RoguishFeatsField_useSyncFeats_class"
    }
  ],
  "type": "VagabondClass",
  "abstractKey": null
};

(node as any).hash = "ba9134de5039aa7a84742c05f523bdbc";

export default node;
