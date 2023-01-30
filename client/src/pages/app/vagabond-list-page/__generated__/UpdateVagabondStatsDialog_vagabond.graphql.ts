/**
 * @generated SignedSource<<06f42e0ff1eebb0dbdeee38ed3c4307e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UpdateVagabondStatsDialog_vagabond$data = {
  readonly availablePoints: number;
  readonly charm: number;
  readonly cunning: number;
  readonly finesse: number;
  readonly id: string;
  readonly luck: number;
  readonly might: number;
  readonly " $fragmentType": "UpdateVagabondStatsDialog_vagabond";
};
export type UpdateVagabondStatsDialog_vagabond$key = {
  readonly " $data"?: UpdateVagabondStatsDialog_vagabond$data;
  readonly " $fragmentSpreads": FragmentRefs<"UpdateVagabondStatsDialog_vagabond">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UpdateVagabondStatsDialog_vagabond",
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
    }
  ],
  "type": "Vagabond",
  "abstractKey": null
};

(node as any).hash = "2c74da79a7baeb008c54ce16b7394326";

export default node;
