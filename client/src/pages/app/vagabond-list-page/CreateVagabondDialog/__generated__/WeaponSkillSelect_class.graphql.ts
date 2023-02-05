/**
 * @generated SignedSource<<afde515fc82fc6b0e5c22304d3bec6c0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type WeaponSkillSelect_class$data = {
  readonly weaponSkillConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string;
      };
    } | null>;
  };
  readonly " $fragmentType": "WeaponSkillSelect_class";
};
export type WeaponSkillSelect_class$key = {
  readonly " $data"?: WeaponSkillSelect_class$data;
  readonly " $fragmentSpreads": FragmentRefs<"WeaponSkillSelect_class">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "WeaponSkillSelect_class",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 50
        }
      ],
      "concreteType": "VagabondClassWeaponSkillConnection",
      "kind": "LinkedField",
      "name": "weaponSkillConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "VagabondClassWeaponSkillConnectionEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "WeaponSkill",
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
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "name",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "weaponSkillConnection(first:50)"
    }
  ],
  "type": "VagabondClass",
  "abstractKey": null
};

(node as any).hash = "65d9d2bbe3f661960039f282cda01805";

export default node;
