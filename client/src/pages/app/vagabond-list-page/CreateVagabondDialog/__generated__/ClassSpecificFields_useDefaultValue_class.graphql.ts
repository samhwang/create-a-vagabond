/**
 * @generated SignedSource<<23fae500b4dd7bfa037802e4e586c84a>>
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
  readonly roguishFeatConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
      };
    } | null>;
  };
  readonly startingCharm: number;
  readonly startingCunning: number;
  readonly startingFinesse: number;
  readonly startingLuck: number;
  readonly startingMight: number;
  readonly startingValue: number;
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
      "concreteType": "VagabondClassRoguishFeatConnection",
      "kind": "LinkedField",
      "name": "roguishFeatConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "VagabondClassRoguishFeatConnectionEdge",
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
})();

(node as any).hash = "594ed6873255f737c288458dbcfb51c0";

export default node;
