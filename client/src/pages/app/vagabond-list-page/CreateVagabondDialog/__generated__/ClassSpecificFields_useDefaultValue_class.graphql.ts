/**
 * @generated SignedSource<<8232fe169aab076c95d304155e7f83d7>>
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
  readonly startingRoguishFeats: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
      };
    } | null>;
  };
  readonly " $fragmentType": "ClassSpecificFields_useDefaultValue_class";
};
export type ClassSpecificFields_useDefaultValue_class$key = {
  readonly " $data"?: ClassSpecificFields_useDefaultValue_class$data;
  readonly " $fragmentSpreads": FragmentRefs<"ClassSpecificFields_useDefaultValue_class">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClassSpecificFields_useDefaultValue_class",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "VagabondClassStartingRoguishFeatsConnection",
      "kind": "LinkedField",
      "name": "startingRoguishFeats",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "VagabondClassStartingRoguishFeatsConnectionEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "RoguishFeat",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v0/*: any*/)
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
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
})();

(node as any).hash = "488b5b63f8f08cedf5d2977a8d57f4a4";

export default node;
