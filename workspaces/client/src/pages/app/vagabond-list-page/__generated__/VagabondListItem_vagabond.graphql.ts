/**
 * @generated SignedSource<<8c9fe140083624ae51854c5d7f77883f>>
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
  readonly class: {
    readonly name: string;
  };
  readonly id: string;
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"UpdateVagabondStatsDialog_vagabond">;
  readonly " $fragmentType": "VagabondListItem_vagabond";
};
export type VagabondListItem_vagabond$key = {
  readonly " $data"?: VagabondListItem_vagabond$data;
  readonly " $fragmentSpreads": FragmentRefs<"VagabondListItem_vagabond">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
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
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "VagabondClass",
      "kind": "LinkedField",
      "name": "class",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ],
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
})();

(node as any).hash = "bf6193f46416e8cc89d462df7e5a001b";

export default node;
