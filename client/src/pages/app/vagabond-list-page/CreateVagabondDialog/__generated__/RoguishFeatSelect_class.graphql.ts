/**
 * @generated SignedSource<<5b4299e8ac6ae03070240a26057af890>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RoguishFeatSelect_class$data = {
  readonly startingRoguishFeats: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
      };
    } | null>;
  };
  readonly " $fragmentType": "RoguishFeatSelect_class";
};
export type RoguishFeatSelect_class$key = {
  readonly " $data"?: RoguishFeatSelect_class$data;
  readonly " $fragmentSpreads": FragmentRefs<"RoguishFeatSelect_class">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RoguishFeatSelect_class",
  "selections": [
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
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "VagabondClass",
  "abstractKey": null
};

(node as any).hash = "d7c1f3303a766cac8d3f8c5ee7bd147a";

export default node;
