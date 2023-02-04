/**
 * @generated SignedSource<<1171bd638059aefd172dfc9c82f482c7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClassSpecificFields_useDefaultValue_class$data = {
  readonly id: string;
  readonly startingCharm: number;
  readonly startingCunning: number;
  readonly startingFinesse: number;
  readonly startingLuck: number;
  readonly startingMight: number;
  readonly " $fragmentType": "ClassSpecificFields_useDefaultValue_class";
};
export type ClassSpecificFields_useDefaultValue_class$key = {
  readonly " $data"?: ClassSpecificFields_useDefaultValue_class$data;
  readonly " $fragmentSpreads": FragmentRefs<"ClassSpecificFields_useDefaultValue_class">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClassSpecificFields_useDefaultValue_class",
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
    }
  ],
  "type": "VagabondClass",
  "abstractKey": null
};

(node as any).hash = "0fdeb871f29235f5802286cce8d0b440";

export default node;
